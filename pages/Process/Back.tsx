import React, {useContext} from 'react'
import {Pressable, Center} from 'native-base'
import LeftArrow from '../../images/LeftArrow.svg'
import {NavigationContext} from '@react-navigation/native'

export default function Back() {
  const navigation = useContext(NavigationContext)

  return (
    <Pressable
      onPress={() => navigation?.goBack()}
      w="12px"
      p="0"
      _pressed={{bg: 'transparent'}}
    >
      <Center>
        <LeftArrow width="100%" height={30} />
      </Center>
    </Pressable>
  )
}
