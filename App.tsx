import React from 'react';

import CategoriesPage from './screens/CategoryPage.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/HomePage.tsx';
import {NavigationContainer} from '@react-navigation/native';
import GamePage from './screens/GamePage.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();


function RootStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomePage}
                    options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CategoryPage" component={CategoriesPage} options={{
        headerShown: false
      }} />
      <Stack.Screen name="GamePage" component={GamePage} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
