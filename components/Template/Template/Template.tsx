import { ReactNode } from "react"
import { Navbar } from '../Navbar/Navbar';
import styles from './Template.module.scss';
export interface TemplateProps {
  children: ReactNode;  
}

export const Template = ({ children }: TemplateProps) => {
    return (

      <>
        <Navbar/>
        <div className={styles.appBody}>
          { children }
        </div>
      </>

    )
}
