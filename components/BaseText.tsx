import React, {ReactNode} from 'react'
import {Text, ITextProps} from 'native-base'

const heading = {
  '1': {
    fontSize: '24px',
    lineHeight: '29px',
  },
  '2': {
    fontSize: '22px',
    lineHeight: '26px',
  },
  '3': {
    fontSize: '20px',
    lineHeight: '24px',
  },
  '4': {
    fontSize: '18px',
    lineHeight: '22px',
  },
  '5': {
    fontSize: '16px',
    lineHeight: '19px',
  },
  '6': {
    fontSize: '14px',
    lineHeight: '17px',
  },
}

const explainText = {
  '1': {
    color: 'gray.200',
  },
  '2': {
    color: 'gray.300',
  },
}

interface HProps extends ITextProps {
  type: keyof typeof heading
  children: ReactNode
}

interface EProps extends ITextProps {
  type: keyof typeof explainText
  children: ReactNode
}

function H(props: HProps) {
  const passProps = {
    ...heading[props.type],
    ...props,
  }

  return (
    <Text
      fontWeight="700"
      color="gray.100"
      {...passProps}
    >
      {props.children}
    </Text>
  )
}

function ExplainText(props: EProps) {
  const passProps = {
    ...explainText[props.type],
    ...props,
  }

  return (
    <Text fontWeight="700" fontSize="14px" lineHeight="17px" {...passProps}>
      {props.children}
    </Text>
  )
}

function MainText(props: ITextProps) {
  return (
    <Text
      fontWeight="400"
      fontSize="14px"
      lineHeight="21px"
      color="gray.100"
      {...props}
    >
      {props.children}
    </Text>
  )
}

export {H, ExplainText, MainText}
