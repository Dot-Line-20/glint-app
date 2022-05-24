import React, { useState, memo } from 'react'
import { Keyboard } from 'react-native'
import { Text, Center, Input, HStack, Box, Pressable } from 'native-base'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { SubProcess } from '@pages/Process'
import Next from '@pages/Process/Next'
import LeftArrow from '@images/LeftArrow.svg'

export default memo(function EmailAuth({
  navigation,
  route: { params: profile },
}: NativeStackHeaderProps): JSX.Element {
  const OTPLength = 4
  const tempOTP: string[] = []
  const [OTP, setOTP] = useState<string>('')
  const inputRefs = [...Array(OTPLength)].map(() =>
    React.useRef<HTMLInputElement>()
  )
  return (
    <SubProcess title="본인인증">
      <Center>
        <Text fontWeight="500" fontSize="20px" lineHeight="24px" mb="40px">
          이메일로 온 4자리 숫자를 입력해주세요.
        </Text>
        <HStack space="16px">
          {new Array(OTPLength).fill(0).map((_, i) => (
            <Input
              w="55px"
              h="60px"
              borderRadius="10px"
              bgColor="gray.500"
              textAlign="center"
              fontSize="30px"
              borderColor="gray.500"
              _focus={{ borderColor: 'gray.500' }}
              keyboardType="number-pad"
              onChangeText={(text: string): void => {
                if (text === '') return

                tempOTP[i] = text
                if (inputRefs[i + 1]) {
                  inputRefs[i + 1].current?.focus()
                } else {
                  setOTP(tempOTP.join(''))
                  Keyboard.dismiss()
                }
              }}
              key={i}
              maxLength={1}
              ref={inputRefs[i]}
            />
          ))}
        </HStack>
      </Center>
      <Box flex="1" />
      <Next
        title="다음"
        pressHandler={(): void => {
          if (OTP.length !== OTPLength) return
          navigation.navigate('InputDetailProfile')
        }}
      />
      <Pressable
        onPress={(): void => {
          navigation.navigate('EmailConfirm', {
            ...profile,
          })
        }}
      >
        <HStack
          justifyContent="center"
          alignItems="center"
          mt="18px"
          space="10px"
        >
          <Text fontSize="14px" lineHeight="17px">
            이메일이 오지 않았어요
          </Text>
          <LeftArrow scaleX={-1} width="4px" />
        </HStack>
      </Pressable>
    </SubProcess>
  )
})
