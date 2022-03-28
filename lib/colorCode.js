import {colors as customColor} from '../theme'
import {theme as defaultTheme} from 'native-base'

export default function colorCode(colorCode) {
  const parsedCode = colorCode.split('.')
  const getColor = (theme) => {
    return parsedCode
      .slice(0)
      .reduce((p, c, _, arr) => (p[c] ? p[c] : arr.splice(1)), theme)
  }

  const rawCustomColor = getColor(customColor.colors)
  if (rawCustomColor) return rawCustomColor

  const rawDefaultColor = getColor(defaultTheme.colors)
  if (__DEV__ && !rawDefaultColor) throw "color can't be found"

  return rawDefaultColor ? rawDefaultColor : 'black'
}
