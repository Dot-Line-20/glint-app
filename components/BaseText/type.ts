import { ITextProps } from 'native-base'
import { heading } from './Heading'
import { explain } from './Explain'

export type BaseTextPreset = {[k: string | number] : string[]}

export interface HProps extends ITextProps {
  type: keyof typeof heading
  children?: React.ReactText
}

export interface ExplainProps extends ITextProps {
  type: keyof typeof explain
  children?: React.ReactText
}

export interface MainProps extends ITextProps {
  children?: React.ReactText
}