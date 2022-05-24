import React, { memo } from 'react'
import { Button, Center, IButtonProps } from 'native-base'
import { GestureResponderEvent } from 'react-native'
import { H } from '@components/BaseText'

interface Props extends IButtonProps {
  title: string
  pressHandler?: (event: GestureResponderEvent) => void
}

export default memo(function Next({ title, pressHandler, ...props }: Props) {
  return (
    <Button
      bgColor="#121D56"
      w="100%"
      h="50px"
      borderRadius="10px"
      onPress={pressHandler}
      {...props}
    >
      <Center>
        <H type="4" color="#fff">
          {title}
        </H>
      </Center>
    </Button>
  )
})
