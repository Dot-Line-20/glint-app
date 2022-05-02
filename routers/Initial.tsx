import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Center, Text, Button } from 'native-base'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const Stack = createNativeStackNavigator()

type InitialStackList = {
  InitialScreen: undefined
  Login: undefined
  SignUp: undefined
}
type Props = NativeStackScreenProps<InitialStackList>

function InitialScreen({ navigation }: Props) {
  const move = {
    login: () => navigation.push('Login'),
    signUp: () => navigation.push('SignUp'),
  }

  return (
    <View>
      <Center>
        <Text>Hi There!</Text>
        <Button onPress={move.login}>Login</Button>
        <Button onPress={move.signUp}>Sign up</Button>
      </Center>
    </View>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
}

export default function Initial() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
