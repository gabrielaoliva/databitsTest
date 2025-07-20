"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Clock, Users, TrendingUp, Download, Edit, Trash2, Plus } from "lucide-react"

export default function Dashboard() {
  const stats = [
    {
      title: "Procesos Activos",
      value: "4",
      icon: Play,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      title: "Días Promedio",
      value: "7",
      icon: Clock,
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      title: "Personas Asignadas",
      value: "12",
      icon: Users,
      gradient: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600",
    },
    {
      title: "Tasa de Finalización",
      value: "85%",
      icon: TrendingUp,
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
  ]

  const processes = [
    {
      name: "Analistas de Datos",
      type: "Capacitación",
      startDate: "29/5/2025",
      startTime: "8:00:43",
      endDate: "4/6/2025",
      endTime: "23:59:33",
      status: "Sin Iniciar",
    },
    {
      name: "Ingenieros de datos",
      type: "Capacitación",
      startDate: "29/5/2025",
      startTime: "8:00:43",
      endDate: "4/6/2025",
      endTime: "23:59:33",
      status: "Activo",
    },
    {
      name: "Modeladores de datos",
      type: "Evaluación",
      startDate: "29/5/2025",
      startTime: "8:00:43",
      endDate: "4/6/2025",
      endTime: "23:59:33",
      status: "Completado",
    },
    {
      name: "Científicos de Datos",
      type: "Capacitación",
      startDate: "29/5/2025",
      startTime: "8:00:43",
      endDate: "4/6/2025",
      endTime: "23:59:33",
      status: "Sin Iniciar",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "Completado":
        return "bg-cyan-100 text-cyan-700 border-cyan-200"
      case "Sin Iniciar":
        return "bg-gray-100 text-gray-700 border-gray-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="h-screen overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <nav className="text-sm text-gray-500 mb-2">
          <span className="text-cyan-600">Dashboard</span> / <span>Procesos</span>
        </nav>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600 text-lg mt-2">Visión general de métricas y KPIs de IA Generativa en retail</p>
      </div>

      <div className="p-6 space-y-6">
        {/* ROI Section */}
        <div className="p-6 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl border border-cyan-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Retorno de inversión de todas las iniciativas de IA
          </h2>
          <p className="text-cyan-700 font-medium">Benchmark: 210% promedio en industria retail</p>
        </div>

        {/* AI Skills Matrix Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Skills Matrix</h2>
            <p className="text-gray-600">Evaluación de conocimientos y habilidades de IA y Data</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg px-6 py-3 rounded-xl">
            <Plus className="h-5 w-5 mr-2" />
            Nuevo Proceso
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-4 rounded-2xl ${stat.bgColor} shadow-sm`}>
                    <stat.icon className={`h-8 w-8 ${stat.textColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Tipo:</span>
              <Select defaultValue="todos">
                <SelectTrigger className="w-36 rounded-xl border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="capacitacion">Capacitación</SelectItem>
                  <SelectItem value="evaluacion">Evaluación</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Estado:</span>
              <Select defaultValue="todos">
                <SelectTrigger className="w-36 rounded-xl border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="sin-iniciar">Sin Iniciar</SelectItem>
                  <SelectItem value="activo">Activo</SelectItem>
                  <SelectItem value="completado">Completado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border-yellow-300 hover:from-yellow-200 hover:to-yellow-300 rounded-xl px-6"
          >
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>

        {/* Processes Table */}
        <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-white border-b border-gray-100">
            <CardTitle className="text-xl text-gray-900">Procesos</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Proceso</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Tipo</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Inicio</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Fin</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Estado</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {processes.map((process, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-900">{process.name}</td>
                      <td className="py-4 px-6">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full px-3 py-1">
                          {process.type}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <div className="text-gray-900 font-medium">{process.startDate}</div>
                          <div className="text-cyan-600">{process.startTime}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <div className="text-gray-900 font-medium">{process.endDate}</div>
                          <div className="text-cyan-600">{process.endTime}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={`${getStatusColor(process.status)} rounded-full px-3 py-1 font-medium`}>
                          {process.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-9 w-9 p-0 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 rounded-full"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-9 w-9 p-0 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-full"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
