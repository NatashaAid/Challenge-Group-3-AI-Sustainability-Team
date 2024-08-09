// Creted by Jordan Onwodi
import { ChangeEvent } from "react";
import "./styles.css";

interface AccordionProps {
  label: string;
  toggle: boolean;
  onToggle: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Accordion({ label, toggle, onToggle }: AccordionProps) {
  return (
    <div>
      <label className="accordion">
        <p>{label}</p>
        <input
          type="checkbox"
          className="accordion__toggle"
          checked={toggle}
          onChange={onToggle}
        />
        <p className="accordion__chevron">Chevron</p>
      </label>
      {toggle ? (
        <div>
          {[1, 2, 3].map((_, i) => (
            <label key={i} className="accordion__options">
              <input type="checkbox" />
              <p>Organic Cotton</p>
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
