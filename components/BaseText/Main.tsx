import React from 'react'
import { Text } from 'native-base'
import { MainProps } from './type'

export default function Main({ children, ...props }: MainProps): JSX.Element {
  return (
    <Text
      fontWeight="400"
      fontSize="14px"
      lineHeight="21px"
      color="gray.100"
      {...props}
    >
      {children}
    </Text>
  )
}
