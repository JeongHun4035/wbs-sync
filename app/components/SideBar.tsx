'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LoginForm } from '~/app/sign/In'

export const Sidebar = () => {
  const pathname = usePathname()

  const sidebarLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Users', path: '/users' },
    { name: 'Settings', path: '/settings' },
  ] as const


  return (
    <aside className="w-60 h-screen bg-gradient-to-b from-indigo-900 to-indigo-800 text-white p-5 shadow-xl">
      <LoginForm />
      <nav className="mt-10 space-y-3">
        {sidebarLinks.map(item => {
          const active = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-full text-sm transition-all
                ${
            active
              ? 'bg-indigo-500 text-white shadow-md'
              : 'text-indigo-100 hover:text-white hover:bg-indigo-600'
            }
              `}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
