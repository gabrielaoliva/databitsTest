"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Users,
  Building2,
  User,
  Settings,
  CreditCard,
  FileText,
  List,
  ChevronDown,
  ChevronRight,
  Power,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
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
    title: "Cuentas",
    icon: CreditCard,
    href: "/admin-cuentas",
  },
  {
    title: "Evaluaciones",
    icon: FileText,
    items: [{ title: "Lista de evaluaciones", href: "/evaluaciones", icon: List }],
  },
]

export function HorizontalMenu({ onLogout }: { onLogout: () => void }) {
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const pathname = usePathname()

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  return (
    <div className="bg-white border-r border-gray-200 w-64 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center">
          <span className="text-2xl font-bold text-teal-600">databits</span>
        </Link>
      </div>

      {/* Home Button */}
      <div className="p-4">
        <Link href="/dashboard">
          <Button
            variant={pathname === "/dashboard" ? "default" : "ghost"}
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
          >
            <Home className="h-4 w-4 mr-3" />
            Dashboard
          </Button>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.items ? (
              <div>
                <button
                  onClick={() => toggleMenu(item.title)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <div className="flex items-center">
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.title}
                  </div>
                  {openMenus.includes(item.title) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {openMenus.includes(item.title) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href}>
                        <Button
                          variant={pathname === subItem.href ? "default" : "ghost"}
                          className={`w-full justify-start text-sm ${
                            pathname === subItem.href
                              ? "bg-teal-100 text-teal-700 border-r-2 border-teal-500"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <subItem.icon className="h-4 w-4 mr-3" />
                          {subItem.title}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={item.href || "#"}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className="w-full justify-start text-gray-700 hover:bg-gray-100"
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.title}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-2">Administrador</div>
        <Button onClick={onLogout} variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50">
          <Power className="h-4 w-4 mr-3" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  )
}
