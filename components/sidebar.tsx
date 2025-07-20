"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Play,
  Users,
  Settings,
  Building2,
  User,
  CreditCard,
  FileText,
  List,
  Briefcase,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Procesos",
    icon: Play,
    href: "/dashboard",
  },
  {
    title: "Vacantes",
    icon: Briefcase,
    href: "/vacantes",
  },
  {
    title: "Configuración",
    icon: Settings,
    items: [
      { title: "Usuarios y permisos", href: "/usuarios", icon: Users },
      { title: "Mi empresa", href: "/empresa", icon: Building2 },
      { title: "Mi perfil", href: "/perfil", icon: User },
    ],
  },
  {
    title: "Otras opciones",
    icon: Settings,
    items: [{ title: "Mis cuentas", href: "/cuentas", icon: CreditCard }],
  },
  {
    title: "Administrador",
    icon: User,
    items: [{ title: "Cuentas", href: "/admin-cuentas", icon: CreditCard }],
  },
  {
    title: "Evaluaciones",
    icon: FileText,
    items: [{ title: "Lista de evaluaciones", href: "/evaluaciones", icon: List }],
  },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = (title: string) => {
    if (isCollapsed) return
    setOpenMenus((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
    router.push("/")
  }

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } flex-shrink-0 bg-white border-r border-gray-200 h-screen sticky top-0 transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Dashboard
              </span>
              <span className="text-xs text-gray-500">Panel de Control</span>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mx-auto">
            <span className="text-white font-bold text-lg">D</span>
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={onToggle} className="p-2 hover:bg-gray-100 rounded-lg">
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.items ? (
              <div>
                <button
                  onClick={() => toggleMenu(item.title)}
                  className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                  title={isCollapsed ? item.title : ""}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 text-gray-600" />
                    {!isCollapsed && <span className="ml-3">{item.title}</span>}
                  </div>
                  {!isCollapsed && (
                    <ChevronRight
                      className={`h-4 w-4 text-gray-400 transition-transform ${
                        openMenus.includes(item.title) ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {!isCollapsed && openMenus.includes(item.title) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href}>
                        <button
                          className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                            pathname === subItem.href
                              ? "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border-r-4 border-purple-500 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <subItem.icon className="h-4 w-4" />
                          <span className="ml-3">{subItem.title}</span>
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={item.href || "#"}>
                <button
                  className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isCollapsed ? "justify-center" : ""
                  } ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border-r-4 border-purple-500 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  title={isCollapsed ? item.title : ""}
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span className="ml-3">{item.title}</span>}
                </button>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className={`w-full text-red-600 hover:bg-red-50 hover:text-red-700 font-medium ${
            isCollapsed ? "justify-center px-0" : "justify-start"
          }`}
          title={isCollapsed ? "Cerrar Sesión" : ""}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Cerrar Sesión</span>}
        </Button>
      </div>
    </div>
  )
}
