import React, { useState, memo } from 'react'
import { Box, Pressable, View, HStack, VStack, Input } from 'native-base'
import { validateOrReject, ValidationError } from 'class-validator'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { H, Explain } from '@components/BaseText'
import FormInput from '@components/FormInput'
import { width, height } from '@lib/screen'
import { MainProcess } from '@pages/Process'
import Next from '@pages/Process/Next'
import Calendar from '@images/Calendar.svg'
import { Profile } from './profile.dto'

export default memo(function InputInfo({ navigation }: NativeStackHeaderProps) {
  const itemConfig = [
    ['년', '34'],
    ['월', '25'],
    ['일', '25'],
  ]
  const [calendarOpens, setCalendarOpens] = useState<boolean>(false)
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    birth: Array(itemConfig.length).fill(''),
  })
  const [profileError, setProfileError] = useState<{
    [k: string]: string | undefined
  }>()
  const inputRefs = [...Array(itemConfig.length)].map(() =>
    React.useRef<HTMLInputElement>()
  )

  const BirthInput = () => {
    const tempBirth: string[] = []

    const Inputs = itemConfig.map((item, i) => {
      const [unit, flex] = item

      return (
        <HStack
          p="15px"
          borderRadius="10px"
          bgColor="gray.500"
          flex={flex}
          alignItems="center"
          justifyContent="space-between"
          key={i}
        >
          <Input
            p="0"
            flex="1"
            fontSize="20px"
            fontWeight="700"
            textAlign="center"
            ref={inputRefs[i]}
            borderColor="gray.500"
            keyboardType="number-pad"
            _focus={{ borderColor: 'gray.500' }}
            returnKeyType={itemConfig.length !== i + 1 ? 'next' : 'default'}
            onChangeText={(text: string): void => {
              text.replace(/\D/g, '')
              tempBirth[i] = text
            }}
            onSubmitEditing={(): void => {
              if (i + 1 !== itemConfig.length) {
                inputRefs[i + 1].current?.focus()
                return
              }

              setProfile({ ...profile, birth: tempBirth })
              setCalendarOpens(false)
            }}
          />
          <Explain type="1" textAlign="center">
            {unit}
          </Explain>
        </HStack>
      )
    })

    return <HStack space="15px">{Inputs}</HStack>
  }

  return (
    <MainProcess title="회원가입" info="'앱 이름'을 시작해봐요">
      <FormInput
        title="이름"
        onChangeText={(text: string): void => {
          setProfile({ ...profile, name: text })
        }}
        status={profileError?.name}
      />
      <FormInput
        title="이메일"
        keyboardType="email-address"
        onChangeText={(text: string): void => {
          setProfile({ ...profile, email: text })
        }}
        status={profileError?.email}
      />
      <FormInput
        title="생년월일"
        isDisabled
        rightElement={
          <Pressable
            onPress={(): void => {
              setCalendarOpens(true)
            }}
          >
            <Calendar />
          </Pressable>
        }
        value={((): string => {
          if (profile.birth.includes('')) return ''
          return `${profile.birth[0]}년 ${profile.birth[1]}월 ${profile.birth[2]}일`
        })()}
        status={profileError?.birth}
      />

      {/* birth input handler */}
      {calendarOpens && (
        <View position="absolute" zIndex="2">
          <Pressable
            w={width}
            h={height}
            position="relative"
            bgColor="#00000059"
            onPress={() => setCalendarOpens(false)}
          />
          <HStack w="100%" h="100%" alignItems="center" position="absolute">
            <VStack
              h="155px"
              py="30px"
              px="25px"
              flex="1"
              mx="30px"
              bgColor="#fff"
              borderRadius="10px"
            >
              <H type="3">생일 설정</H>
              <BirthInput />
            </VStack>
          </HStack>
        </View>
      )}
      <Box flex="1" />
      <Next
        title="다음"
        pressHandler={() => {
          const validationCheck = async (): Promise<void> => {
            try {
              await validateOrReject(Object.assign(new Profile(), profile), {
                validationError: { target: false },
                stopAtFirstError: true,
              })

              setProfileError({})

              navigation.navigate('EmailAuth', { ...profile })
            } catch (error) {
              const foundError: { [k: string]: string } = {}
              for (const {
                constraints,
                property,
              } of error as ValidationError[]) {
                foundError[property] = Object.values(constraints || {})[0]
              }
              setProfileError(foundError)
            }
          }

          validationCheck()
        }}
      />
    </MainProcess>
  )
})
