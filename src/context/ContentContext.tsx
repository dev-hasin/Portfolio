import {createContext, useContext, useEffect, useState, type ReactNode} from 'react'
import {seedContent} from '../data/seed'
import type {SiteContent} from '../lib/content/types'
import {fetchSiteContent} from '../lib/sanity/fetchContent'

const ContentContext = createContext<SiteContent>(seedContent)

export function ContentProvider({children}: {children: ReactNode}) {
  const [content, setContent] = useState<SiteContent>(seedContent)

  useEffect(() => {
    let active = true
    fetchSiteContent().then((next) => {
      if (active) setContent(next)
    })
    return () => {
      active = false
    }
  }, [])

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
}

export function useSiteContent() {
  return useContext(ContentContext)
}
