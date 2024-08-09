// Created by Jordan Onwodi
import { ReactNode } from "react";
import "../Page/styles.css";

interface Props {
  children: ReactNode;
}
function PageFooter({ children }: Props) {
  return <footer className="page__footer">{children}</footer>;
}

export default PageFooter;
