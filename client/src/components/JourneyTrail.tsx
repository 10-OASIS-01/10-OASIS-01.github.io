import { useState } from "react";
import { ChevronDown, Mountain } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { MiscContent } from "@/content/types";

export default function JourneyTrail({ content }: { content: MiscContent }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="journey">
      <CollapsibleTrigger className="journey-trigger">
        <Mountain size={22} aria-hidden="true" />
        <span>
          <strong>{content.journeyHeading}</strong>
          <small>{open ? "Hide the trail" : content.journeyHint}</small>
        </span>
        <ChevronDown
          className={open ? "rotate-180" : ""}
          size={18}
          aria-hidden="true"
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ol className="journey-list">
          {content.milestones.map((item, index) => (
            <li key={`${item.year}-${index}`}>
              <time>{item.year}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="journey-meta">{item.location}</p>
                <ul className="journey-metrics" aria-label="Milestone details">
                  {item.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  );
}
