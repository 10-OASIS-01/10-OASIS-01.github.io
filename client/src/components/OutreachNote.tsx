import { outreachNote } from "@/content/about";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function OutreachNote() {
  return (
    <aside className="outreach-note" aria-label="Connection and support">
      <p>
        {outreachNote.introduction}{" "}
        {outreachNote.invitation}{" "}
        <Popover>
          <PopoverTrigger asChild>
            <button type="button" className="outreach-term">
              <em>{outreachNote.term}</em>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="outreach-definition"
            sideOffset={8}
            collisionPadding={16}
            aria-label="About underrepresented groups"
          >
            <p>
              <em>Underrepresented groups</em>
            </p>
            <p>{outreachNote.definition}</p>
          </PopoverContent>
        </Popover>
        {", "}
        {outreachNote.closing}
      </p>
    </aside>
  );
}
