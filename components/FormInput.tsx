import React, {Suspense} from 'react'
import {Box, Text, Factory, Pressable} from 'native-base'
import {TextInput} from 'react-native'
import rawColor from '../lib/colorCode'
import {ExplainText} from './BaseText'

type Props = {
  title: string
  security?: boolean
  icon?: 'Calendar'
}

export default function FormInput({title, security = false, icon}: Props) {
  const FactoryInput = Factory(TextInput)

  let Icon = null
  if (icon === 'Calendar') {
    Icon = Factory(React.lazy(() => import('../images/Calendar.svg')))
  }

  return (
    <Box mb="50px">
      <ExplainText type="2">{title}</ExplainText>
      <FactoryInput
        pb="10px"
        mt="13px"
        h="32px"
        position="relative"
        fontSize="18px"
        lineHeight="22px"
        borderBottomWidth="2"
        secureTextEntry={security}
        borderBottomColor={rawColor('gray.400')}
        selectionColor={rawColor('gray.300')}
        fontWeight="600"
        style={{
          color: rawColor('gray.100'),
          fontSize: 18,
          lineHeight: 22,
          fontFamily: 'Pretendard-SemiBold'
        }}
      />
      {Icon ? (
        <Suspense fallback={<></>}>
          <Pressable
            onPress={() => console.log('pressed')}
            position="absolute"
            bottom="10px"
            right="0"
          >
            <Icon w="24px"/>
          </Pressable>
        </Suspense>
      ) : null}
    </Box>
  )
}
