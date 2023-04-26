import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestarauntList from './components/RestarauntList';
import RestaurantDetail from './components/RestarauntDetails';

const Stack = createNativeStackNavigator()

export const RestaurantContext = createContext()

export default function App() {

  const [selectedRestaurant, setSelectedRestaurant] = useState()
  return (
      <NavigationContainer>
          <RestaurantContext.Provider value={{selectedRestaurant, setSelectedRestaurant}}>
           <Stack.Navigator>
          <Stack.Screen name="Home" 
          options={{title: "Restaurant List"}}
          component={RestarauntList}/>
        <Stack.Screen name="Details" component={RestaurantDetail} />
          </Stack.Navigator>
        </RestaurantContext.Provider>
      </ NavigationContainer>
    );
}

