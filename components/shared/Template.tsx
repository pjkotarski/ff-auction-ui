import { ReactNode } from "react"

export interface TemplateProps {
  children: ReactNode;  
}

export const Template = ({ children }: TemplateProps) => {
    return (
      <>
        { children }
      </>

    )
}
