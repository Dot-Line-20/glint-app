import React, { memo } from 'react'
import { MainProcess } from '../Process'
import { Text, HStack, ITextProps } from 'native-base'
import FormInput from '@components/FormInput'
import Next from '../Process/Next'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

function NavText({ children, ...props }: ITextProps): JSX.Element {
  return (
    <Text fontWeight="500" color="#656376" fontSize="14px" {...props}>
      {children}
    </Text>
  )
}

export default memo(function Login({ navigation }: NativeStackHeaderProps) {
  return (
    <MainProcess title="로그인" info="홍보용 문구">
      <FormInput title="아이디" />
      <FormInput title="비밀번호" secureTextEntry />
      <Next title="로그인" />
      <HStack mt="25px" justifyContent="center" space="29px">
        <NavText
          onPress={() => {
            navigation.navigate('InputProfile')
          }}
        >
          회원가입
        </NavText>
        <NavText>비밀번호 변경</NavText>
      </HStack>
    </MainProcess>
  )
})
