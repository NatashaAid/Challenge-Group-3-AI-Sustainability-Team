// Button component created by Jordan Onwodi
import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode ;
}

function Button({ label, ...props }: Props) {
  return (
    <button {...props} className="button">
      {label}
    </button>
  );
}

export default Button;
