import { ReactNode } from "react"
import { Nav } from '../Nav/Nav.component';
export interface TemplateProps {
  children: ReactNode;  
}

export const Template = ({ children }: TemplateProps) => {
    return (
      <>
        <Nav/>
        { children }
      </>

    )
}
