import { useEffect, useState } from 'react';
import { AuctionDemo } from '../components/Demo/AuctionDemo/AuctionDemo.component';
import { RegisterDemo } from '../components/Demo/RegisterDemo/RegisterDemo.component';
import { Template } from '../components/Template/Template/Template';
import { DemoUserContext } from '../shared/hooks/contexts';
import Cookies from 'js-cookie';
import { IDemoUser } from '../shared/types/demo/IDemoUser';
import { DemoApi } from '../shared/api/demo.api';
import { IPlayer } from '../shared/types/IPlayer';

export default function DemoPage() {

  const [demoUser, setDemoUser ] = useState<IDemoUser>(null);

  const resolveUser = async (userId: string) => {
    try {
      const user = await DemoApi.getUser(userId);

      if (user) {
        setDemoUser(user);
      }
    } catch(e) {
      setDemoUser(null);
    }
  }

  useEffect(() => {
    const cookieUserId = Cookies.get('user_id');
    if (cookieUserId) {
      resolveUser(cookieUserId);
    }
  }, []);

  const createUser = async(name: string) => {
    const user = await DemoApi.createUser(name);
    if (user) {
      setDemoUser(user);
    }
  }

  const setExpirationTimeOnUser = (expiration_time) => {
    let newUser = Object.assign({}, demoUser);
    newUser.expiration_time = expiration_time;
    setDemoUser(newUser);
  }

  const setIsRunningOnUser = (isRunning) => {
    let newUser = Object.assign({}, demoUser);
    newUser.isRunning = isRunning;
    setDemoUser(newUser);
  }


  return (
    <DemoUserContext.Provider value={{ demoUser, setExpirationTimeOnUser, setIsRunningOnUser }}>
      <Template>
        { demoUser === null ? 
          <RegisterDemo createUser={createUser}/>
          :
          <AuctionDemo/>  
        }
      </Template>
    </DemoUserContext.Provider>
  )
}