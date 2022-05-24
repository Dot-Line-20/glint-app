import React, { memo } from 'react'
import { Text } from 'native-base'
import { HProps, BaseTextPreset } from './type'

// [fontSize, lineHeight]
export const heading: BaseTextPreset = {
  1: ['24px', '29px'],
  2: ['22px', '26px'],
  3: ['20px', '24px'],
  4: ['18px', '22px'],
  5: ['16px', '19px'],
  6: ['14px', '17px'],
}

export default memo(function H({
  type,
  children,
  ...props
}: HProps): JSX.Element {
  const [size, height]: string[] = heading[type]

  return (
    <Text
      fontWeight="700"
      color="gray.100"
      fontSize={size}
      lineHeight={height}
      {...props}
    >
      {children}
    </Text>
  )
})
