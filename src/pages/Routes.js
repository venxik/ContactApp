import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import DetailContact from './DetailContact';
import CreateUpdateContact from './CreateUpdateContact';
import SearchContact from './SearchContact';

const Stack = createStackNavigator()
const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Landing"}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"SearchContact"} component={SearchContact} />
      <Stack.Screen name={"DetailContact"} component={DetailContact} />
      <Stack.Screen name={"CreateUpdateContact"} component={CreateUpdateContact} />
    </Stack.Navigator>
  )
}

const Route = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}
export default Route
