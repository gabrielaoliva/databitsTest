"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Sidebar } from "./sidebar"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated")
      if (pathname !== "/" && !auth) {
        router.push("/")
        return
      }
      setIsAuthenticated(!!auth)
      setIsLoading(false)
    }

    checkAuth()
  }, [router, pathname])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  // Si estamos en la página de login, no mostrar el sidebar
  if (pathname === "/" || !isAuthenticated) {
    return <>{children}</>
  }

  // Layout con sidebar para páginas autenticadas
  return (
    <div className="flex flex-row min-h-screen bg-gray-50">
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <div className="flex-grow overflow-hidden">{children}</div>
    </div>
  )
}
