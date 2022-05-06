import React from 'react'
import { VStack, Stack } from 'native-base'
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native'
import Back from './Back'
import { H, Explain } from '../../components/BaseText'

type Props = {
  title: string
  info?: string
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

function FullProcess({ title, info, children }: Props) {
  return (
    <KeyboardAvoidingView>
      <Stack
        px="25px"
        py="63px"
        h={Dimensions.get('window').height}
        position="relative"
      >
        <Back />
        <VStack mt="30px" mb="50px">
          <H type="1" mb="8px">
            {title}
          </H>
          <Explain type="1">{info}</Explain>
        </VStack>
        {children}
      </Stack>
    </KeyboardAvoidingView>
  )
}

export { FullProcess }
