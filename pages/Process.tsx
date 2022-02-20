import React from 'react'
import { View, VStack, Text } from 'native-base'

interface Props {
  title: string,
  info?: string
  children: React.ReactNode
}

export default function Process({ title, info, children }: Props) {
  return (
    <View>
      <VStack safeArea>
        <Text>{title}</Text>
        <Text>{info}</Text>
      </VStack>
      {children}
    </View>
  )
}
