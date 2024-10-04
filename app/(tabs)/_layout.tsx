import React from 'react';
import Welcome from '../screens/Welcome';
import HeaderAuth from '@/components/HeaderAuth';
import Login from '../modules/auth/login/Login';
import { useStore } from '../state/store';
import Wall from '../modules/post/wall/Wall';

export default function TabLayout() {
  const showLogin = useStore((state) => state.showLogin)
  const isAuthenticated = useStore((state) => state.isAuthenticated)

  return (
    <>
      {      
        isAuthenticated ? 
          <Wall/> :
          <>
            <HeaderAuth/>
            { showLogin 
              ?
                <Login></Login>
              :
                <Welcome></Welcome> 
            }
          </>
      }
    </>
  );
}