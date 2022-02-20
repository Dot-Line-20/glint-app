import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Initial from './routers/Initial'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import theme from './theme/theme'
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontLoaded] = useFonts({
    'Pretendard-Bold': require('  ')
  })

  if(!fontLoaded) {
    return <AppLoading/>
  }

  return (
    <NativeBaseProvider theme={theme}>
      {/* <NavigationContainer>
        <Stack.Navigator>

        </Stack.Navigator>
      </NavigationContainer> */}
      <Initial/>
    </NativeBaseProvider> 
  )
}
