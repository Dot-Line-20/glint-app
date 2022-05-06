import React from 'react'
import { Text } from 'native-base'
import { ExplainProps, BaseTextPreset } from './type'

// color
export const explain: BaseTextPreset = {
  1: ['gray.200'],
  2: ['gray.300'],
}

export default function Explain({
  type,
  children,
  ...props
}: ExplainProps): JSX.Element {
  const [color] = explain[type]
  
  return (
    <Text
      fontWeight="700"
      fontSize="14px"
      lineHeight="17px"
      color={color}
      {...props}
    >
      {children}
    </Text>
  )
}
