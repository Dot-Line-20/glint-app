import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Process from './Process'
import { Button, Center, Text, HStack } from 'native-base'
import FormInput from '../components/FormInput'

// import type { NativeStackScreenProps } from '@react-navigation/native-stack'
// type Props = NativeStackScreenProps<any, any>
// const Stack = createNativeStackNavigator()

export default function Login() {
  return (
    <Process title="로그인" info="홍보용 문구" button={{
      title: '로그인',
      position: 'stick'
    }}>
      <FormInput title="아이디" />
      <FormInput title="비밀번호" security />
      {/* <Button bg="#484A5E" h="50px" borderRadius="10px" mb="25px">
        <Center>
          <Text fontWeight="700" color="white" fontSize="18px">
            로그인
          </Text>
        </Center>
      </Button> */}
      <Center>
        {/* todo: fix layout */}
        <HStack >
          <Text fontWeight="500" color="#656376" fontSize="14px" mr="30px">아이디 찾기</Text>
          <Text fontWeight="500" color="#656376" fontSize="14px">비밀번호 변경</Text>
        </HStack>
      </Center>
    </Process>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="login" component={} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}
