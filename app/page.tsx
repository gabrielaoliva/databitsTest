"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { handleLogin, loading: isLoading, error } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-200 via-sky-200 to-blue-300">
      {/* Floating Decorative Cards */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Analytics Dashboard Card */}
        <div className="absolute top-16 right-20 w-72 h-56 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-700">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl"></div>
              <div className="w-20 h-3 bg-gray-300/60 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-3 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full"></div>
              <div className="w-4/5 h-3 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full"></div>
              <div className="w-3/5 h-3 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full"></div>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div className="flex gap-1">
                <div className="w-3 h-8 bg-cyan-400 rounded-t"></div>
                <div className="w-3 h-12 bg-purple-400 rounded-t"></div>
                <div className="w-3 h-6 bg-emerald-400 rounded-t"></div>
                <div className="w-3 h-10 bg-yellow-400 rounded-t"></div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Code Interface Card */}
        <div className="absolute top-40 left-16 w-64 h-40 bg-white/25 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-700">
          <div className="p-4">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="w-4 h-2 bg-purple-400 rounded"></div>
                <div className="w-12 h-2 bg-gray-400 rounded"></div>
              </div>
              <div className="flex gap-2 ml-4">
                <div className="w-8 h-2 bg-cyan-400 rounded"></div>
                <div className="w-6 h-2 bg-emerald-400 rounded"></div>
              </div>
              <div className="flex gap-2 ml-4">
                <div className="w-10 h-2 bg-blue-400 rounded"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-2 bg-purple-400 rounded"></div>
                <div className="w-8 h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="absolute bottom-32 right-32 w-60 h-48 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-700">
          <div className="p-5">
            <div className="w-16 h-3 bg-gray-400/60 rounded-full mb-4"></div>
            <div className="flex justify-between items-end h-24">
              <div className="w-6 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t" style={{ height: "70%" }}></div>
              <div
                className="w-6 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t"
                style={{ height: "90%" }}
              ></div>
              <div
                className="w-6 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t"
                style={{ height: "50%" }}
              ></div>
              <div
                className="w-6 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t"
                style={{ height: "80%" }}
              ></div>
              <div className="w-6 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{ height: "60%" }}></div>
            </div>
          </div>
        </div>

        {/* Profile Cards */}
        <div className="absolute bottom-20 left-20 w-48 h-32 bg-white/25 backdrop-blur-md rounded-xl border border-white/30 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-700">
          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
            <div className="flex-1">
              <div className="w-full h-2 bg-gray-400/60 rounded-full mb-2"></div>
              <div className="w-3/4 h-2 bg-gray-300/60 rounded-full"></div>
            </div>
          </div>
          <div className="px-4 pb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
            <div className="flex-1">
              <div className="w-full h-2 bg-gray-400/60 rounded-full mb-2"></div>
              <div className="w-2/3 h-2 bg-gray-300/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-emerald-300/25 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-white/20 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
           <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl px-4 py-2 inline-flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">Databits</span>
          </div>
            <p className="text-gray-600 text-sm">Ingresa y crea equipos exitosos con el apoyo de nuestras evaluaciones especializadas</p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault() handleLogin(email, password)}} className="space-y-6">
            {/* Email Field */}
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="correo electrónico *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder:text-gray-500 text-base"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="contraseña *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-14 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder:text-gray-500 text-base"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive" className="rounded-xl">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            >
              {isLoading ? "Ingresando..." : "Ingresar"}
            </Button>

            {/* Forgot Password Link */}
            <div className="text-center">
              <button type="button" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium hover:underline">
                Olvidé mi contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
