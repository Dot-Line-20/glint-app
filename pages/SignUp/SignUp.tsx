import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InputInfo from './InputProfile'
import EmailAuth from './EmailAuth'

const Stack = createNativeStackNavigator()

export default function SignUp() {
  return (
      <Stack.Navigator initialRouteName='InputInfo' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="InputInfo" component={InputInfo} />
        <Stack.Screen name="EmailAuth" component={EmailAuth}/>
      </Stack.Navigator>
    // <Stack.Group>
    // </Stack.Group>
  )
}
