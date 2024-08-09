// Created by Jordan Onwodi
import { ReactNode } from "react";
import "../Page/styles.css";

interface Props {
  children: ReactNode;
}
function PageHeader({ children }: Props) {
  return <header className="page__header">{children}</header>;
}

export default PageHeader;
