import React from 'react'
import { ContextDefault } from './'

export interface ProcessProps {
  children: React.ReactNode
}

export interface MainProcessProps {
  title: string
  info?: string
  defaultValue?: ContextDefault
  children?: React.ReactNode
}

export interface SubProcessProps {
  title: string
  defaultValue?: ContextDefault
  children?: React.ReactNode
}
