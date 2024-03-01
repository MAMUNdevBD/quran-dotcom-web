import createImageQuery from '../createImageQuery'
import { MediaQueryResult } from '../mediaQuery'

export interface TutorsBlockQueryResult {
  heading: string
  text: string
  entries: {
    fullname: string
    title?: string
    gender?: string
    age?: number
    fields?: string[]
    languages?: string[]
    phone?: string
    mail?: string
    experience?: string
    text?: any
    image: MediaQueryResult
    isHidden?: boolean
  }[]
}

export default `
  heading,
  text,
  entries[]->{
    isHidden,
    fullname,
    "title": coalesce(
        title[$locale],
        title[$defaultLocale]
      ),
    "tags": coalesce(
      tags[][$locale],
      tags[][$defaultLocale]
    ),
    "extraFields": extraFields[]{
      "title": coalesce(
        title[$locale],
        title[$defaultLocale]
      ),
      "text": coalesce(
        text[$locale],
        text[$defaultLocale]
      ),
    },
    "languages": coalesce(
        languages[$locale],
        languages[$defaultLocale]
      ),
    "text": coalesce(
        text[$locale],
        text[$defaultLocale]
      ),
    'image': {${createImageQuery('image', false)}}
  }
`
