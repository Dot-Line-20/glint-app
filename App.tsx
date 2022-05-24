import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme, { navigationTheme } from './theme'

import {
  InputProfile,
  EmailAuth,
  EmailConfirm,
  InputDetailProfile,
} from '@pages/SignUp'
import Login from '@pages/Login'

export default function App() {
  const [fontLoaded] = useFonts({
    'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Light': require('./assets/fonts/Pretendard-Light.otf'),
  })

  if (!fontLoaded) {
    return <AppLoading />
  }

  const Stack = createNativeStackNavigator()

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="InputProfile" component={InputProfile} />
          <Stack.Screen name="EmailAuth" component={EmailAuth} />
          <Stack.Screen name="EmailConfirm" component={EmailConfirm} />
          <Stack.Screen
            name="InputDetailProfile"
            component={InputDetailProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
