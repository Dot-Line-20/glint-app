import { extendTheme } from 'native-base'

const typography = {
  fontConfig: {
    Pretendard: {
      600: {
        normal: 'Pretendard-Medium',
      },
      700: {
        normal: 'Pretendard-Bold',
      },
      500: {
        normal: 'Pretendard-Lite',
      },
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
  letterSpacings: {
    md: '-0.01em',
  },
})

export default theme
