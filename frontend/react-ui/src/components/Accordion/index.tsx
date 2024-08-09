// Accordion created by Jordan Onwodi
import { ChangeEvent } from "react";
import "./styles.css";

interface Props {
  label: string;
  toggle: boolean;
  onToggle: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Accordion({ label, toggle, onToggle }: Props) {
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
        <p>Chevron</p>
      </label>
      {toggle ? (
        <div>
          {[1, 2, 3].map((_, i) => (
            <label key={i} className="accordion__options">
              <p>Organic Cotton</p>
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
