'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login, getTokenClaims } from '@/lib/authService'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    setLoading(true)
    setError('')

    try {
      const authorities = await login(email, password)

      if (authorities.length === 2) {
        const claims = getTokenClaims()
        const role = authorities[0].authority

        // Aquí puedes definir las rutas según rol como en Angular
        const roleRouteMap: Record<string, string> = {
          'ROLE_ADMIN': '/admin',
          'ROLE_USER': '/dashboard'
        }

        router.push(roleRouteMap[role] || '/dashboard')
      } else {
        setError('Roles inválidos o no autorizados.')
      }
    } catch (err: any) {
      setError(err.message)
    }

    setLoading(false)
  }

  return { handleLogin, loading, error }
}
