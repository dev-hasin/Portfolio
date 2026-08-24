import {Clock, MessageSquare} from 'lucide-react'
import {useSiteContent} from '../../context/ContentContext'
import {accentStyles, contactIcons, socialIcons} from '../../lib/content/icons'

export function ContactInfoPanel() {
  const {contactInfo, socialLinks, faqs} = useSiteContent()

  return (
    <aside className="space-y-6 lg:col-span-2">
      {contactInfo.map(({label, value, href, accent, kind}) => {
        const Icon = contactIcons[kind] || contactIcons.email
        const styles = accentStyles[accent]
        return (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className={`flex items-center gap-4 rounded-2xl border p-5 transition-transform hover:scale-[1.02] ${styles.background}`}
          >
            <Icon size={20} className={`shrink-0 ${styles.color}`} />
            <span>
              <span className="mb-0.5 block text-xs text-gray-500">{label}</span>
              <span className="block text-sm text-white">{value}</span>
            </span>
          </a>
        )
      })}

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
        <p className="mb-4 text-xs text-gray-500">Follow me on</p>
        <div className="flex gap-3">
          {socialLinks.map(({label, href, kind}) => {
            const Icon = socialIcons[kind] || socialIcons.github
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2.5 text-gray-400 transition-all hover:border-teal-500/30 hover:text-teal-300"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-emerald-300">Available for Work</span>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-gray-500">
          <Clock size={11} /> Typically replies within 24 hours
        </p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
        <div className="mb-5 flex items-center gap-2">
          <MessageSquare size={15} className="text-teal-300" />
          <h2 className="text-sm text-white">Quick FAQs</h2>
        </div>
        <ul className="space-y-4">
          {faqs.map((faq) => (
            <li key={faq.question}>
              <p className="mb-1 text-xs text-gray-300">{faq.question}</p>
              <p className="text-xs leading-relaxed text-gray-600">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
