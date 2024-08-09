// Page body component created by Jordan Onwodi

import { ReactNode } from "react";
import "../Page/styles.css";

interface Props {
  children: ReactNode;
}

function PageBody({ children }: Props) {
  return <section className="page__body">{children}</section>;
}

export default PageBody;
