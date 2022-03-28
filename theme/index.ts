import { extendTheme } from 'native-base'

const typography = {
  fontConfig: {
    Pretendard: {
      500: {
        
        normal: 'Pretendard-Medium',
      },
      700: {
        normal: 'Pretendard',
      },
      400: {
        normal: 'Pretendard-Light',
      },
    },
  },
  // fonts: {
  //   heading: 'Pretendard',
  //   body: 'Pretendard',
  //   mono: 'Pretendard',
  // },
  letterSpacings: {
    md: '-0.01em',
  },
}

const colors = {
  colors: {
    primary: {
      100: '#1372a7',
    },
    gray: {
      100: '#141517',
      200: '#5e5e67',
      300: '#cfcfd6',
      400: '#e8e8e8',
      500: '#f3f3f3',
    },
  },
}

const theme = extendTheme({
  // ...typography,
  ...colors,
})

export default theme
export { colors }
