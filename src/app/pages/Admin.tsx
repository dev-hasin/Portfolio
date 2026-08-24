import {lazy, Suspense} from 'react'
import {isSanityConfigured} from '../../lib/sanity/client'

const StudioApp = lazy(() => import('../../sanity/Studio'))

export function Admin() {
  if (!isSanityConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060a10] px-6 text-zinc-200">
        <div className="max-w-lg space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h1 className="font-display text-2xl text-white">Sanity Admin not configured</h1>
          <p className="text-sm leading-relaxed text-zinc-400">
            Create a free Sanity project, then set <code className="text-teal-300">VITE_SANITY_PROJECT_ID</code>{' '}
            (and matching <code className="text-teal-300">SANITY_STUDIO_PROJECT_ID</code>) in your{' '}
            <code className="text-teal-300">.env</code> file. See the README for the full setup and seed steps.
          </p>
          <a href="/" className="inline-flex text-sm text-teal-300 hover:text-teal-200">
            ← Back to portfolio
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#101112]">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center text-sm text-zinc-400">
            Loading admin studio…
          </div>
        }
      >
        <StudioApp />
      </Suspense>
    </div>
  )
}
