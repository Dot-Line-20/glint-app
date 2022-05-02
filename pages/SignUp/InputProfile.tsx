import React, { useContext, useState } from 'react'
import { FullProcess } from '../Process'
import {
  Box,
  Pressable,
  View,
  HStack,
  VStack,
  FormControl,
  Input,
} from 'native-base'
import FormInput from '../../components/FormInput'
import { NavigationContext } from '@react-navigation/native'
import Next from '../Process/Next'
import Calendar from '../../images/Calendar.svg'
import { width, height } from '../../lib/screen'
import { H, ExplainText } from '../../components/BaseText'
import Profile from './profile.dto'
import { validateOrReject, ValidationError } from 'class-validator'

export default function InputInfo({navigation: {navigate}}) {
  // const navigation = useContext(NavigationContext)
  const [calendarOpens, setCalendarOpens] = useState<boolean>(false)
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    birth: {
      year: '',
      month: '',
      date: '',
    },
  })
  const [profileError, setProfileError] = useState<{
    [k: string]: string | undefined
  }>()

  const BirthInput = (
    unit: string,
    flex: string,
    birthState: keyof typeof profile.birth
  ): JSX.Element => {
    return (
      <HStack
        borderRadius="10px"
        bgColor="gray.500"
        p="15px"
        flex={flex}
        alignItems="center"
        justifyContent="space-between"
      >
        <Input
          fontSize="20px"
          p="0"
          flex="1"
          borderColor="gray.500"
          textAlign="center"
          fontWeight="700"
          _focus={{ borderColor: 'gray.500' }}
          onChangeText={(text: string) =>
            setProfile({
              ...profile,
              birth: {
                ...profile.birth,
                [birthState]: text.replace(/\D/g, ''),
              },
            })
          }
          value={profile.birth[birthState]}
          keyboardType="number-pad"
        />
        <ExplainText type="1" textAlign="center">
          {unit}
        </ExplainText>
      </HStack>
    )
  }

  return (
    <FullProcess title="회원가입" info="'앱 이름'을 시작해봐요">
      <FormControl>
        <FormInput
          title="이름"
          onChangeText={(text: string) => {
            setProfile({ ...profile, name: text })
          }}
          status={profileError?.name}
        />
        <FormInput
          title="이메일"
          keyboardType="email-address"
          onChangeText={(text: string) => {
            setProfile({ ...profile, email: text })
          }}
          status={profileError?.email}
        />
        <FormInput
          title="생년월일"
          isDisabled
          rightElement={
            <Pressable onPress={() => setCalendarOpens(true)}>
              <Calendar />
            </Pressable>
          }
          value={((): string => {
            const {
              birth: { year, month, date },
            } = profile
            return [year, month, date].some((v: string) => v === '')
              ? ' '
              : `${year}년 ${month}월 ${date}일`
          })()}
          status={profileError?.birth}
        />
      </FormControl>

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
              <FormControl>
                <HStack>
                  {BirthInput('년', '34', 'year')}
                  <Box w="15px" />
                  {BirthInput('월', '25', 'month')}
                  <Box w="15px" />
                  {BirthInput('일', '25', 'date')}
                </HStack>
              </FormControl>
            </VStack>
          </HStack>
        </View>
      )}
      <Box flex="1"></Box>
      <Next
        title="다음"
        pressHandler={() => {
          const validationCheck = async (): Promise<void> => {
            try {
              await validateOrReject(Object.assign(new Profile(), profile), {
                validationError: { target: false },
              })
              
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
    </FullProcess>
  )
}
