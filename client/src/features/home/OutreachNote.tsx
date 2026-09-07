import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { outreachNote } from "@/content/about";

export default function OutreachNote() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const definitionId = useId();
  const [bubblePosition, setBubblePosition] = useState({ left: 0, arrow: 20 });

  useLayoutEffect(() => {
    if (!open || !container.current || !trigger.current) return;
    const positionBubble = () => {
      const frame = container.current!.getBoundingClientRect();
      const term = trigger.current!.getBoundingClientRect();
      const center = term.left + term.width / 2 - frame.left;
      const width = Math.min(frame.width, 420);
      const left = Math.max(
        0,
        Math.min(center - width / 2, frame.width - width),
      );
      setBubblePosition({
        left,
        arrow: Math.max(16, Math.min(center - left, width - 16)),
      });
    };
    positionBubble();
    const observer = new ResizeObserver(positionBubble);
    observer.observe(container.current);
    observer.observe(trigger.current);
    return () => observer.disconnect();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const dismissOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !container.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    const dismissWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissWithEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissWithEscape);
    };
  }, [open]);

  return (
    <div className="outreach-section" ref={container}>
      <aside className="outreach-note" aria-label="Connection and support">
        <p>
          {outreachNote.introduction} {outreachNote.invitation}{" "}
          <button
            ref={trigger}
            type="button"
            className="outreach-term"
            aria-expanded={open}
            aria-controls={definitionId}
            onClick={() => setOpen((current) => !current)}
          >
            <em>{outreachNote.term}</em>
          </button>
          {", "}
          {outreachNote.closing}
        </p>
      </aside>
      <div
        id={definitionId}
        className="outreach-definition"
        style={
          {
            marginLeft: bubblePosition.left,
            "--outreach-arrow-left": `${bubblePosition.arrow}px`,
          } as CSSProperties
        }
        role="region"
        aria-label="About underrepresented groups"
        hidden={!open}
      >
        <p>
          <em>Underrepresented groups</em>
        </p>
        <p>{outreachNote.definition}</p>
      </div>
    </div>
  );
}
