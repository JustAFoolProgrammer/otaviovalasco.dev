import { useEffect, useState } from 'react'
export type Theme = 'dark' | 'midnight' | 'aurora'
export function usePreferences() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('raven-theme') as Theme) || 'dark')
  const [lang, setLang] = useState<'pt' | 'en'>(() => (localStorage.getItem('raven-lang') as 'pt' | 'en') || 'pt')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('raven-theme', theme) }, [theme])
  useEffect(() => localStorage.setItem('raven-lang', lang), [lang])
  return { theme, setTheme, lang, setLang }
}
