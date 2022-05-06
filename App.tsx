import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme from './theme'

import SignUp from './pages/SignUp'

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

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  }

  const Stack = createNativeStackNavigator()

  return (
    <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          <SignUp/>
        </NavigationContainer>
    </NativeBaseProvider>
  )
}
