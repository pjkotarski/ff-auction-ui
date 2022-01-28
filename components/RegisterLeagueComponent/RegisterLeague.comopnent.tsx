import { Button } from '../shared/Button/Button.component';
import { Input } from '../shared/Input/Input.component';
import styles from './RegisterLeague.module.scss';
import { useForm } from 'react-hook-form';
import { ButtonTypes } from '../../shared/enums/enums';

interface RegisterLeagueProps {
    forwardPage: () => void;
    configureLeague: (data: any) => void;
}

type LeagueRegistrationForm = {
    leagueId: number,
    leagueName?: string,
    espnSWID?: string,
    espnS2?: string
}

export const RegisterLeague = ({ forwardPage, configureLeague }: RegisterLeagueProps) => {

    const { register, formState: { errors }, handleSubmit } = useForm<LeagueRegistrationForm>();

    const onSubmit = (data: any) => {
        configureLeague(data);
        forwardPage();
    }

    return (
        <div className={styles.registerLeagueContainer}>
            <h2 className={styles.heading}>Register League</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input className={styles.input} label='league id' placeholder='league id' register={register} name='leagueId' errors={errors} validators={{ required: true, minLenght: 6, maxLength: 6 }} errorMessage='League id should be 6 numbers long'/>
                <Input className={styles.input} label='league name' placeholder='league name' register={register} name='leagueName' errors={errors} validators={{ required: true, maxLength: 20 }} errorMessage='League Name can be a maximum 20 characters'/>
                <Input className={styles.input} label='ESPN SWID' placeholder='SWID' register={register} name='espnSWID' errors={errors} validators={{ required: true }} errorMessage='This field is required'/>
                <Input className={styles.input} label='ESPN S2' placeholder='S2' register={register} name='espnS2' errors={errors} validators={{ required: true }} errorMessage='This field is required'/>
                <Button className={styles.button} type={ButtonTypes.submit}>Register League</Button>
            </form>
        </div>
    )
}
