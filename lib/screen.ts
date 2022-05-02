import { Dimensions, ScaledSize } from 'react-native'

const window: ScaledSize = Dimensions.get('window')

export const [width, height]: number[] = [window.width, window.height]