import React from 'react'
import {
  View,
  VStack,
  Text,
  Pressable,
  Center,
  Button,
  Box,
  Stack,
  HStack,
} from 'native-base'
import {GestureResponderEvent} from 'react-native'
import Back from './Back'
import {H, ExplainText} from '../../components/BaseText'
import Next from './Next'

type Props = {
  title: string
  info?: string
  button?: {
    title?: string
    position?: 'bottom' | 'stick' // stick: it doesn't have space between children
    onPress?: (event: GestureResponderEvent) => void
  }
  children?: React.ReactNode
}

/* Process.defaultProps = {
  title: {
    type: 'large',
  },
  info: '',
  button: {
    title: '',
    position: 'bottom',
    onPress: () => {},
  },
} */

function FullProcess({title, info, button, children}: Props) {
  return (
    <VStack px="25px" py="63px">
      <Back />
      <VStack mt="30px" mb="50px">
        <H type="1" mb="8px">
          {title}
        </H>
        <ExplainText type="1">{info}</ExplainText>
      </VStack>
      {children}
    </VStack>
  )
}

export {FullProcess}
