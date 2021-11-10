import { Template } from '../components/shared/Template';
import { PlayerSlide } from '../components/auction/PlayerSlide';
import { IPlayer } from '../types/IPlayer';
import { PlayersContainer } from '../components/auction/PlayersContainer';
import { PlayersAPI } from '../shared/api/players.api';
import useSWR from 'swr';

export default function Home() {

    const { data, error } = useSWR('players', PlayersAPI.players)
    if (error) return 'An error has occured'
    if (!data) return 'loading'
    
    return (
        <Template>
            <PlayersContainer players={data}/>
        </Template>
    )
}
