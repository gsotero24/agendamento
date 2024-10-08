import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Salão de Beleza' }} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'Agendar Horário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
