import React, { useContext } from 'react'
import { View, VStack, Text, Pressable, Center, Button, Box } from 'native-base'
import LeftArrow from '../images/LeftArrow.svg'
import { NavigationContext } from '@react-navigation/core'
import { GestureResponderEvent } from 'react-native'

type Props = {
  title?: {
    text?: string
    type?: 'large' | 'small'
  }
  info?: string
  button?: {
    title?: string
    position?: 'bottom' | 'stick' // stick: it doesn't have space between children
    onPress?: (event: GestureResponderEvent) => void
  }
  children?: React.ReactNode
}

export default function Process({
  title = {
    type: 'large'
  },
  info = '',
  button = {
    title: '',
    position: 'bottom',
    'onPress': () => {}
  },
  children,
}: Props) {
  const navigation = useContext(NavigationContext)
  return (
    <VStack px="25px" py="63px" flex={1}>
      <VStack>
        <Pressable
          onPress={() => navigation?.goBack()}
          w="12px"
          p="0"
          _pressed={{ bg: 'transparent' }}
        >
          <Center>
            <LeftArrow width="100%" height={30} />
          </Center>
        </Pressable>
        <Text mt="20px" fontSize="24px" fontWeight="700">
          {title}
        </Text>
        <Text mt="5px" mb="50px" color="#656376" fontWeight="600">
          {info}
        </Text>
      </VStack>

      <VStack
        flex={button.position === 'bottom' ? '1' : '0'}
        justifyContent="space-between"
      >
        <Box>{children}</Box>

        {/* todo: seperate button part to file */}
        <Button
          bg="#484A5E"
          h="50px"
          borderRadius="10px"
          mb="25px"
          onPress={button.onPress}
        >
          <Center>
            <Text fontWeight="700" color="white" fontSize="18px">
              {button.title}
            </Text>
          </Center>
        </Button>
      </VStack>
    </VStack>
  )
}
