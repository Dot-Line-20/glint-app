import React, { useContext, memo } from 'react'
import { Pressable, Center, IPressableProps } from 'native-base'
import { NavigationContext } from '@react-navigation/native'

import { ProcessContext } from './'

export default memo(function Back({ ...props }: IPressableProps): JSX.Element {
  const navigation = useContext(NavigationContext)
  const context = useContext(ProcessContext)
  return (
    <Pressable
      onPress={() => navigation?.goBack()}
      w="12px"
      p="0"
      _pressed={{ bg: 'transparent' }}
      {...props}
    >
      <Center>{context.icon}</Center>
    </Pressable>
  )
})
