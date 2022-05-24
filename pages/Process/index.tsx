import React, { memo } from 'react'
import { VStack, HStack, Text } from 'native-base'
import { Dimensions } from 'react-native'
import Back from './Back'
import LeftArrow from '../../images/LeftArrow.svg'
import { H, Explain } from '../../components/BaseText'
import { ProcessProps, MainProcessProps, SubProcessProps } from './type'

const contextDefault: { icon: JSX.Element } = {
  icon: <LeftArrow width="100%" />,
}
export type ContextDefault = typeof contextDefault
export const ProcessContext: React.Context<typeof contextDefault> =
  React.createContext(contextDefault)

function Process({ children }: ProcessProps): JSX.Element {
  return (
    <VStack
      px="25px"
      py="63px"
      h={Dimensions.get('window').height}
      w="100%"
      position="relative"
    >
      {children}
    </VStack>
  )
}

export const MainProcess = memo(function MainProcess({
  title,
  info,
  children,
  defaultValue = contextDefault,
}: MainProcessProps): JSX.Element {
  return (
    <ProcessContext.Provider value={defaultValue}>
      <Process>
        <Back />
        <VStack mt="30px" mb="50px">
          <H type="1" mb="8px">
            {title}
          </H>
          <Explain type="1">{info}</Explain>
        </VStack>
        {children}
      </Process>
    </ProcessContext.Provider>
  )
})

export const SubProcess = memo(function SubProcess({
  title,
  children,
  defaultValue = contextDefault,
}: SubProcessProps): JSX.Element {
  return (
    <ProcessContext.Provider value={defaultValue}>
      <Process>
        <HStack mb="70px">
          <Back position="absolute" />
          <Text
            fontWeight="500"
            fontSize="18px"
            lineHeight="22px"
            margin="auto"
          >
            {title}
          </Text>
        </HStack>
        {children}
      </Process>
    </ProcessContext.Provider>
  )
})
