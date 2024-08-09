// Button component created by Jordan Onwodi
import { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({ label, ...props }: Props) {
  return (
    <button {...props} className="button">
      {label}
    </button>
  );
}

export default Button;
