import {Moon, Sun} from 'lucide-react'
import {useEffect, useState} from 'react'
import {cn} from '../../utils/classes'

const themeStorageKey = 'portfolio-theme'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document === 'undefined' ? true : document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem(themeStorageKey, isDark ? 'dark' : 'light')

    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor?.setAttribute('content', isDark ? '#060a10' : '#f3f6fa')
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((current) => !current)}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-teal-500/30 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun
        size={17}
        aria-hidden="true"
        className={cn(
          'absolute transition-all duration-300',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0',
        )}
      />
      <Moon
        size={17}
        aria-hidden="true"
        className={cn(
          'absolute transition-all duration-300',
          isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100',
        )}
      />
    </button>
  )
}
