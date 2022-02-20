import { extendTheme } from "native-base";

const typography = {
  fonts: {
    heading: 'Pretendard-Bold',
    body: 'Pretendard-Bold',
    mono: 'Pretendard-Bold'
  },
  letterSpacings: {
    md: "0"
  }
}

const theme = extendTheme({
  ...typography
})

export default theme