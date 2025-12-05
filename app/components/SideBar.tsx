'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export const Sidebar = () => {
  const pathname = usePathname()
  const sidebarLinks =  [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Users', path: '/users' },
    { name: 'Settings', path: '/settings' },
  ] as const

  return (
    <aside className="w-60 h-screen bg-[#1e1e2f] text-white p-5 space-y-4">
      {sidebarLinks.map(item => {
        const active = pathname === item.path

        return (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-3 py-2 rounded-md transition
              ${active ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}
            `}
          >
            {item.name}
          </Link>
        )
      })}
    </aside>
  )
}
