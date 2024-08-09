// Page component created by Jordan Onwodi
import { ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
}

function Page({ children }: Props) {
  return <div className="page">{children}</div>;
}

export default Page;
