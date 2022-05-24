import React, { memo, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Box, Center, Text, Pressable, Image } from 'native-base'
import { SubProcess } from '@pages/Process'
import DefaultProfile from '@images/DefaultProfile.svg'
import FormInput from '@components/FormInput'
import Next from '@pages/Process/Next'
import { DetailProfile } from './type'

export default memo(function InputDetailProfile(): JSX.Element {
  const [detailProfile, setDetailProfile] = useState<DetailProfile>({
    nickname: '',
    id: '',
  })

  return (
    <SubProcess title="프로필 생성">
      <Center mb="55px">
        <Box>
          <Box
            background="red.100"
            w="120px"
            h="120px"
            overflow="hidden"
            borderRadius="100px"
          >
            {detailProfile.image ? (
              <Image
                source={{ uri: detailProfile.image }}
                alt="image"
                w="120px"
                h="120px"
              />
            ) : (
              <DefaultProfile />
            )}
          </Box>
          <Pressable
            position="absolute"
            right="0"
            bottom="0"
            w="47px"
            h="24px"
            borderRadius="100px"
            background="#121D56"
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              const imagePick = async () => {
                const image: ImagePicker.ImagePickerResult =
                  await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                  })

                if (image.cancelled) return

                setDetailProfile({
                  ...detailProfile,
                  image: image.uri,
                })
              }

              imagePick()
            }}
          >
            <Text
              fontWeight="700"
              fontSize="12px"
              lineHeight="14px"
              color="#fff"
            >
              변경
            </Text>
          </Pressable>
        </Box>
      </Center>
      <FormInput
        title="닉네임"
        onChangeText={(text: string): void => {
          setDetailProfile({ ...detailProfile, nickname: text })
        }}
      />
      <FormInput
        title="사용자 아이디 "
        onChangeText={(text: string): void => {
          setDetailProfile({ ...detailProfile, id: text })
        }}
      />
      <Box flex="1" />
      <Next title="확인" />
    </SubProcess>
  )
})
