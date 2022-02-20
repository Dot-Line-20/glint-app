import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InputInfo from './InputInfo'

const Stack = createNativeStackNavigator()

export default function SignUp() {
  return (
      <Stack.Navigator initialRouteName='InputInfo'>
        <Stack.Screen name="InputInfo" component={InputInfo}/>
      </Stack.Navigator>
    // <Stack.Group>
    // </Stack.Group>
  )
}
