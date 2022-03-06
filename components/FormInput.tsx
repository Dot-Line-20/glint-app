import React from 'react'
import { Box, Text, Factory } from 'native-base'
import { TextInput } from 'react-native'
import rawColor from '../lib/colorCode'

type Props = {
  title: string
  security?: boolean
}

export default function FormInput({ title, security = false }: Props) {
  const FactoryInput = Factory(TextInput)
  
  return (
    <Box mb="50px">
      <Text fontSize="14px" fontWeight="600">
        {title}
      </Text>
      <FactoryInput
        h="40px"
        borderBottomWidth="2"
        borderBottomColor="#DEDDE8"
        secureTextEntry={security}
        selectionColor={rawColor('gray.200')}
      />
    </Box>
  )
}
