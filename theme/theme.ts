import { extendTheme } from 'native-base'

const typography = {
  fontConfig: {
    'Pretendard': {
      600: {
        normal: 'Pretendard-Medium'
      },
      700: {
        normal: 'Pretendard-Bold'
      }
    },
  },
  fonts: {
    heading: 'Pretendard',
    body: 'Pretendard',
    mono: 'Pretendard',
  },
}

const theme = extendTheme({
  ...typography,
})

export default theme
