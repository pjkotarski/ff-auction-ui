import { useContext, useEffect, useState } from 'react';
import { DemoApi } from '../../shared/api/demo.api';
import { DemoUserContext, PlayerBidsContext } from '../../shared/hooks/contexts';
import { Button } from '../shared/Button/Button.component';
import { TimerComponent } from '../TimerComponent/TimerComponent';
import styles from './StartTimer.module.scss';

export const StartTimer = () => {

  const { clearPlayers } = useContext(PlayerBidsContext);
  const { demoUser, setExpirationTimeOnUser, setIsRunningOnUser } = useContext(DemoUserContext);

  const startTimer = async() => {
    const expirationTime: Date = await DemoApi.startDemo();
    setExpirationTimeOnUser(expirationTime);
    setIsRunningOnUser(true);
  }

  const clearBids = async() => {
    const response = await DemoApi.clearBids();

    if (response.status === 200) {
       clearPlayers();
    }
  }

  return (
    <div className={styles.startTimerContainer}>
      { ! demoUser.isRunning &&
        <> 
          <Button className={styles.timerButtons} onClick={startTimer}>Start</Button>
          <Button className={styles.timerButtons} onClick={clearBids} primaryColor={false}>Clear bids</Button>
        </>
      }
      <TimerComponent/>
    </div>
  )

}