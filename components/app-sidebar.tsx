"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

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

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
    router.push("/")
  }

  return (
    <Sidebar variant="inset" className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Databits
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.items ? (
                  <Collapsible className="group/collapsible">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full justify-between hover:bg-gray-50 data-[state=open]:bg-gray-50">
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 text-gray-600" />
                          <span className="text-gray-700 font-medium">{item.title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.href}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === subItem.href}
                              className={
                                pathname === subItem.href
                                  ? "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border-r-4 border-purple-500 font-medium"
                                  : "hover:bg-gray-50 text-gray-600"
                              }
                            >
                              <Link href={subItem.href}>
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={
                      pathname === item.href
                        ? "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border-r-4 border-purple-500 font-medium"
                        : "hover:bg-gray-50 text-gray-600"
                    }
                  >
                    <Link href={item.href || "#"}>
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-100 bg-gray-50">
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 font-medium"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Cerrar Sesión
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
