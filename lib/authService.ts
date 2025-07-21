'use client'

import axios from 'axios'

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL
const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${AUTH_URL}/oauth/token`, {
    origin: ORIGIN,
    request: {
      username,
      password
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'es-ES'
    }
  })


    const { result } = response.data

    if (result?.token) {
      localStorage.setItem('TOKEN_INFO_LABEL', JSON.stringify(result))
      localStorage.setItem('TOKEN_INFO_ACCESS', JSON.stringify(result.authorities ?? []))
    }

    return result.authorities ?? []
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Error al iniciar sesión')
  }
}

export const getTokenClaims = () => {
  try {
    const tokenInfo = JSON.parse(localStorage.getItem('TOKEN_INFO_LABEL') || '{}')
    const token = tokenInfo?.token
    if (!token) return null

    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''))

    return JSON.parse(jsonPayload)
  } catch (e) {
    return null
  }
}

export const logout = () => {
  localStorage.removeItem('TOKEN_INFO_LABEL')
  localStorage.removeItem('TOKEN_INFO_ACCESS')
  localStorage.removeItem('ACCOUNT_SELECTED_ROUTE')
  localStorage.removeItem('PROCESS_SELECTED_ROUTE')
  localStorage.removeItem('PROCESS_USER_SELECTED_ROUTE')
  localStorage.removeItem('PROCESS_USER_SELECTED_EVALUATION')
  localStorage.removeItem('STORAGE_PLAN_ACCOUNT_SELECTED')
  localStorage.removeItem('VACANT_SELECTED_ROUTE')
}
