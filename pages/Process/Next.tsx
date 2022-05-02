import React from 'react'
import { Button, Center, IButtonProps } from 'native-base'
import { GestureResponderEvent } from 'react-native'
import { H } from '../../components/BaseText'

interface Props extends IButtonProps {
  title: string
  pressHandler?: (event: GestureResponderEvent) => void
}

export default function Next({ title, pressHandler, ...props }: Props) {
  return (
    <Button
      bgColor="#484A5E"
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
}
