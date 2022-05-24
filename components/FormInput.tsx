import React, { memo } from 'react'
import { Box, Input, Text } from 'native-base'
import { Explain } from './BaseText'
import { IFormInput } from './type'

export default memo(function FormInput({
  title,
  status,
  ...props
}: IFormInput) {
  return (
    <Box mb="50px">
      <Explain type="2">{title}</Explain>
      <Input
        p="0px"
        pb="10px"
        mt="13px"
        mb="8px"
        position="relative"
        fontSize="18px"
        lineHeight="22px"
        borderColor="#fff"
        borderBottomWidth="2"
        borderBottomColor={status ? 'sys.red' : 'gray.400'}
        selectionColor="gray.300"
        fontWeight="600"
        _focus={{
          borderColor: '#fff',
        }}
        _disabled={{
          backgroundColor: '#fff',
        }}
        {...props}
      />
      <Text
        fontSize="12px"
        fontWeight="500"
        lineHeight="14px"
        color={status && 'sys.red'}
      >
        {status || ''}
      </Text>
    </Box>
  )
})
