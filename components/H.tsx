// there should be more simple way

import React from 'react'
import { Text, ITextProps } from 'native-base'

function H1(props: ITextProps) {
  return <Text fontSize="24px" {...props}>{props.children}</Text>
}

function H2(props: ITextProps) {
  return <Text fontSize="22px" {...props}>{props.children}</Text>
}

function H3(props: ITextProps) {
  return <Text fontSize="20px" {...props}>{props.children}</Text>
}

function H4(props: ITextProps) {
  return <Text fontSize="18px" {...props}>{props.children}</Text>
}

function H5(props: ITextProps) {
  return <Text fontSize="16px" {...props}>{props.children}</Text>
}

function H6(props: ITextProps) {
  return <Text fontSize="14px" {...props}>{props.children}</Text>
}

export { H1, H2, H3, H4, H5, H6 }