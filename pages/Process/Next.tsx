import React from 'react'
import {Button, Center, Text, IBoxProps} from 'native-base'
import {GestureResponderEvent} from 'react-native'
import {H} from '../../components/BaseText'

type Props = {
  title?: string
  onPress?: (event: GestureResponderEvent) => void
}

export default function Next(props: Props & IBoxProps) {
  return (
    <Button bg="#484A5E" h="50px" borderRadius="10px" onPress={props.onPress}>
      <Center>
        <H type="4" color="#fff">{props.title}</H>
      </Center>
    </Button>
  )
}
