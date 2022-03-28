import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {FullProcess} from './Process'
import {Button, Center, Text, HStack, Flex, Box, VStack} from 'native-base'
import FormInput from '../components/FormInput'
import Next from './Process/Next'

// import type { NativeStackScreenProps } from '@react-navigation/native-stack'
// type Props = NativeStackScreenProps<any, any>
// const Stack = createNativeStackNavigator()

export default function Login() {
  return (
    <FullProcess
      title="로그인"
      info="홍보용 문구"
      button={{
        title: '로그인',
        position: 'stick',
      }}
    >
      <FormInput title="아이디" />
      <FormInput title="비밀번호" security />
      {/* todo: fix layout */}
      <Next title="로그인" />
      <HStack mt="25px" justifyContent="center">
        <Text fontWeight="500" color="#656376" fontSize="14px" mr="29px">
          아이디 찾기
        </Text>
        <Text fontWeight="500" color="#656376" fontSize="14px">
          비밀번호 변경
        </Text>
      </HStack>
    </FullProcess>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="login" component={} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}
