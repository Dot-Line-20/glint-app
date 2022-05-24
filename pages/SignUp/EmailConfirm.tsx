import React, { memo } from 'react'
import { Center, HStack, Box, Pressable } from 'native-base'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { H } from '@components/BaseText'
import { SubProcess } from '@pages/Process'
import Close from '@images/Close.svg'
import LeftArrow from '@images/LeftArrow.svg'
import Next from '@pages/Process/Next'

export default memo(function EmailConfiorm({
  navigation,
  route: { params },
}: NativeStackHeaderProps): JSX.Element {
  return (
    <SubProcess title="이메일 확인" defaultValue={{ icon: <Close /> }}>
      <Center>
        <H type="1" color="blue">
          {(params as { email: string }).email}
        </H>
        <H type="5" mt="20px">
          이 이메일이 맞나요? 아니라면 변경해주세요.
        </H>
        <Pressable onPress={() => navigation.navigate('InputProfile')}>
          <HStack alignItems="center" space="15px" mt="50px">
            <H type="4">이메일 변경하기</H>
            <LeftArrow width="5px" scaleX={-1} />
          </HStack>
        </Pressable>
      </Center>
      <Box flex={1} />
      <Next title="다시 인증하기" pressHandler={() => navigation.goBack()} />
    </SubProcess>
  )
})
