import { useState } from 'react';
import { Button } from '../../shared/Button/Button.component';
import { Input } from '../../shared/Input/Input.component';
import styles from './RegisterDemo.module.scss';

interface RegisterDemoProps {
  createUser: (string) => void;
}

export const RegisterDemo = ({ createUser }: RegisterDemoProps) => {
  
  const [name, setName] = useState('');

  return (
    <div className={styles.registerDemoContainer}>
      <div className={styles.registerDemoInner}>
        <h3>Please enter your name to start</h3>
        <Input onChange={ str => setName(str)} value={name}/>
        <Button onClick={() => createUser(name)} disabled={!name}>Start</Button>
      </div>
    </div>
  )
}