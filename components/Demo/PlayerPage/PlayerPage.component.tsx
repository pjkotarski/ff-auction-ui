import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr'
import { DemoApi } from '../../../shared/api/demo.api'
import { PlayerBidsContext } from '../../../shared/hooks/contexts';
import { IPlayer } from '../../../shared/types/IPlayer';
import { ActiveBidsElement } from '../../ActiveBidsComponent/ActiveBidsComponent';
import { AlertComponent } from '../../AlertComponent/Alert.component';

interface PlayerPageProps {
  page: number;
  onFinish: () => void;
}

export const PlayerPage = ({ page, onFinish }: PlayerPageProps) => {

  const { searchQuery } = useContext(PlayerBidsContext);
  let { data: players , error, mutate } = useSWR([`/api/demo/players/${page}`, searchQuery], DemoApi.searchPlayers);

  useEffect(() => {

    if (players && players.length === 0 || error) {
      onFinish();
    }
  }, [players])


  const filterOutPlayer = (player_id: number) => {
    mutate(players.filter(player => player._id !== player_id));
  }

  return (
    <>
      {players && players.map((player: IPlayer) => {
        return <ActiveBidsElement player={player} isBidded={false} filterPlayer={filterOutPlayer} key={`unbids_${player._id}`}/>
      })}

      { error && <AlertComponent error={true} message="An error occured, could not load players."></AlertComponent>}
    </>
  )
}