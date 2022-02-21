import React from 'react'
import { NativeBaseProvider, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Initial from './routers/Initial'
import { useFonts, loadAsync } from 'expo-font'
import AppLoading from 'expo-app-loading'
import theme from './theme/theme'

const Stack = createNativeStackNavigator()

export default function App() {
  
  let [fontLoaded, error] = useFonts({
    'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.otf')
  })

  if(!fontLoaded) {
    return <AppLoading/>
  }

  return (
    <NativeBaseProvider theme={theme} >
      {/* <NavigationContainer>
        <Stack.Navigator>

        </Stack.Navigator>
      </NavigationContainer> */}
      <Initial />
    </NativeBaseProvider> 
  )
}
