import React, { useContext } from 'react'
import { View, VStack, Text, Pressable , Center } from 'native-base'
import LeftArrow from '../images/LeftArrow.svg'
import { NavigationContext } from '@react-navigation/core'

type Props = {
  title: string
  info?: string
  children: React.ReactNode
}

export default function Process({ title, info, children }: Props) {
  const navigation = useContext(NavigationContext)
  return (
    <View px="25px" py="63px">
      <VStack safeArea>
        <Pressable 
          onPress={() => navigation?.goBack()}
          w="12px"
          p="0"
          _pressed={{ bg: 'trnaparent' }}>
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
      {children}
    </View>
  )
}
