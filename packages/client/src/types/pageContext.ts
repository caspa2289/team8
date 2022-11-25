import { ReactNode } from 'react'

export interface IUser {
  name: string
}

export interface IPage {
  name: string
}

export interface IPageContext {
  userInfo?: IUser
  content?: ReactNode
  pageInfo?: IPage
}
