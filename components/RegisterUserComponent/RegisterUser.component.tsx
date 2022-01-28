import { Button } from '../shared/Button/Button.component';
import { Input } from '../shared/Input/Input.component';
import styles from './RegisterUser.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { ButtonTypes } from '../../shared/enums/enums';

interface RegisterUserProps {
    configureUser: (data) => void;
}

type UserRegistrationForm = {
    firstName: string,
    lastName: string,
    email: string,
    teamName: string
}

export const RegisterUser = ({ configureUser }: RegisterUserProps) => {
    
    const { register, formState: { errors }, handleSubmit } = useForm<UserRegistrationForm>();

    const onSubmit = (data: any) => {
        configureUser(data);
    }

    return (
        <div className={styles.registerUserContainer}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2>Register User</h2>
                <Input className={styles.input} label='first name' placeholder='first name' register={register} name='firstName' errors={errors}/>
                <Input className={styles.input} label='last name' placeholder='last name' register={register} name='lastName' errors={errors}/>
                <Input className={styles.input} label='team name' placeholder='team name' register={register} name='teamName' errors={errors}/>
                <Button className={styles.button} type={ButtonTypes.submit}>Register user</Button>
            </form>            
        </div>
    )
}