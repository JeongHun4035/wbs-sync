import { Sidebar } from '~/app/components/SideBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
      <Sidebar />
    </div>
  )
}
