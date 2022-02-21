import React from 'react'
import {Box, Input, Text} from 'native-base'

type Props = {
  title: string
  type?: string
}

export default function FormInput({title, type = 'text'}: Props) {
  return (
    <Box mb="50px">
      <Text fontSize="14px" fontWeight="600">{title}</Text>
      <Input variant="underlined" type={type} h="40px"/>
    </Box>
  )
}