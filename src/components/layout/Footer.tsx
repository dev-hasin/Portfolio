import {Code2, Heart, Mail} from 'lucide-react'
import {NavLink} from 'react-router'
import {useSiteContent} from '../../context/ContentContext'
import {navLinks} from '../../data/seed'
import {socialIcons} from '../../lib/content/icons'

export function Footer() {
  const {profile, socialLinks} = useSiteContent()
  const footerSocialLinks = [
    ...socialLinks,
    {label: 'Email', href: `mailto:${profile.email}`, kind: 'email' as const},
  ]

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0a1220] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-sky-600">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-white">
                {profile.initials}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">{profile.footerBlurb}</p>
          </div>

          <div>
            <h2 className="mb-4 text-sm text-white">Quick Links</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className="text-sm text-gray-500 transition-colors hover:text-teal-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm text-white">Connect</h2>
            <div className="flex gap-3">
              {footerSocialLinks.map(({href, label, kind}) => {
                const Icon = socialIcons[kind] || Mail
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-teal-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-gray-600 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="fill-teal-500 text-teal-500" /> using React &amp;
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
