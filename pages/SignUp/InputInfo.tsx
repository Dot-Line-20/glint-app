import React, { useContext } from 'react'
import Process from '../Process'
import { Center, Text } from 'native-base'
import FormInput from '../../components/FormInput'
import { NavigationContext } from '@react-navigation/native'

export default function InputInfo() {
  const navigation = useContext(NavigationContext)
  return (
    <Process
      title={{
        text: '회원가입',
      }}
      info="'앱 이름'을 시작해봐요"
      button={{
        title: '다음',
        position: 'bottom',
        onPress: () => {
          navigation?.navigate('EmailAuth')
        },
      }}
    >
      {/* toto wrap with form */}
      <FormInput title="이름" />
      <FormInput title="이메일" />
      <FormInput title="비밀번호" security />
    </Process>
  )
}
