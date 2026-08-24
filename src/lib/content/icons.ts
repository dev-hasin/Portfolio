import {
  Award,
  Code2,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Twitter,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type {ServiceAccent} from './types'

export const serviceIcons: Record<string, LucideIcon> = {
  Layers,
  Zap,
  Shield,
  Star,
  Code2,
  Sparkles,
  Award,
}

export const socialIcons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
}

export const contactIcons: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
}

export const accentStyles: Record<ServiceAccent, {color: string; background: string}> = {
  teal: {
    color: 'text-teal-300',
    background: 'bg-teal-500/10 border-teal-500/20',
  },
  amber: {
    color: 'text-amber-300',
    background: 'bg-amber-500/10 border-amber-500/20',
  },
  emerald: {
    color: 'text-emerald-300',
    background: 'bg-emerald-500/10 border-emerald-500/20',
  },
  sky: {
    color: 'text-sky-300',
    background: 'bg-sky-500/10 border-sky-500/20',
  },
}
