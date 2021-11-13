import { Template } from '../components/shared/Template';
import { PlayersAPI } from '../shared/api/players.api';
import useSWR from 'swr';
import { HomeComponent } from '../components/HomeComponent/Home';

export default function Home() {
    
    const { data, error } = useSWR('players', PlayersAPI.players);
    if (error) return 'An error has occured'
    if (!data) return 'loading'
    
    return (
        <Template>
            <HomeComponent playerData={data}/>
        </Template>
    )
}
