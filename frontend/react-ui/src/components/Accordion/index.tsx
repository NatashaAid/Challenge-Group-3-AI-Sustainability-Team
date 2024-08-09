// Accordion created by Jordan Onwodi
import  { ChangeEvent } from "react";
import "./styles.css";
import Button from "../Button";
import SupplierIcon from "../SupplierIcon";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'


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
        {toggle === true ?  <ChevronDownIcon className="chevron"/>: <ChevronUpIcon className="chevron"/>}
       
      </label>
      {toggle ? (
        <div>
          {[1, 2, 3].map((_, i) => (
            <label key={i} className="accordion__options">
              <p>Organic Cotton</p>
              <Button label={<SupplierIcon/>} /> 
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
