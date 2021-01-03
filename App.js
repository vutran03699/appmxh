import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStackScreens from "./src/stacks/AppStackScreens"
import {UserProvider} from './src/context/UserContext'
import { MenuProvider } from 'react-native-popup-menu';
export default App = () =>{
  return (
      <UserProvider>
        <NavigationContainer>
          <MenuProvider>
            <AppStackScreens/>  
          </MenuProvider>
        </NavigationContainer>
      </UserProvider>
    
    
  )
}