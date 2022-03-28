import React, { useContext } from 'react'
import{ FullProcess} from '../Process'
import {Text } from 'native-base'
import FormInput from '../../components/FormInput'
import { NavigationContext } from '@react-navigation/native'
import Next from '../Process/Next'

export default function InputInfo() {
  const navigation = useContext(NavigationContext)
  return (
    <FullProcess
      title='회원가입'
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
      <FormInput title="생년월일" icon="Calendar"/>
      <Next title="다음"/>
      <Text style={{fontFamily: 'Pretendard'}}>로그인</Text>
    </FullProcess>
  )
}
