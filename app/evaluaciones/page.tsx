"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react"

export default function EvaluacionesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const evaluaciones = [
    {
      id: 1,
      titulo: "BigQuery 2024",
      perfiles: ["Data Scientist", "Data Engineer"],
      preguntas: 15,
      fechaCreacion: "2024/07/30",
    },
    {
      id: 2,
      titulo: "CoCreación y Nuevos Modelos de Negocio con IA",
      perfiles: ["Data Scientist", "Data Engineer"],
      preguntas: 22,
      fechaCreacion: "2025/05/28",
    },
    {
      id: 3,
      titulo: "Arquitectura de Datos",
      perfiles: ["Data Engineer"],
      preguntas: 18,
      fechaCreacion: "2025/06/29",
    },
    {
      id: 4,
      titulo: "Principios de Prompt Engineering",
      perfiles: ["Data Scientist"],
      preguntas: 12,
      fechaCreacion: "2025/06/29",
    },
    {
      id: 5,
      titulo: "Desarrollo de Agentes de IA",
      perfiles: ["Data Scientist", "AI Engineer"],
      preguntas: 25,
      fechaCreacion: "2025/06/29",
    },
  ]

  const filteredEvaluaciones = evaluaciones.filter((evaluacion) =>
    evaluacion.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredEvaluaciones.length / 5)
  const startIndex = (currentPage - 1) * 5
  const endIndex = startIndex + 5
  const currentEvaluaciones = filteredEvaluaciones.slice(startIndex, endIndex)

  return (
    <div className="h-screen overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <nav className="text-sm text-gray-500 mb-2">
          <span className="text-cyan-600">Dashboard</span> / <span>Lista de Evaluaciones</span>
        </nav>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Lista de Evaluaciones
            </h1>
            <p className="text-gray-600 text-lg mt-2">Gestiona y administra todas las evaluaciones del sistema</p>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-6 py-3 rounded-xl">
            <Plus className="h-5 w-5 mr-2" />
            Nuevo
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search Bar */}
        <div className="flex justify-end items-center">
          <div className="relative w-80">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar evaluaciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 border-gray-200 focus:border-cyan-400 focus:ring-cyan-400 rounded-xl bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Table */}
        <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">
                      Título
                      <span className="ml-2 text-gray-400">↕</span>
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">
                      Perfiles
                      <span className="ml-2 text-gray-400">↕</span>
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">
                      Nº Preguntas
                      <span className="ml-2 text-gray-400">↕</span>
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">
                      Fecha de creación
                      <span className="ml-2 text-gray-400">↕</span>
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentEvaluaciones.map((evaluacion, index) => (
                    <tr
                      key={evaluacion.id}
                      className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 transition-all duration-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                      }`}
                    >
                      <td className="py-5 px-6 font-semibold text-gray-900">{evaluacion.titulo}</td>
                      <td className="py-5 px-6">
                        <div className="flex flex-col gap-1">
                          {evaluacion.perfiles.map((perfil, idx) => (
                            <span key={idx} className="text-sm text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                              {perfil}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-gray-700 font-medium text-center">{evaluacion.preguntas}</td>
                      <td className="py-5 px-6 text-gray-600 font-medium">{evaluacion.fechaCreacion}</td>
                      <td className="py-5 px-6">
                        <div className="flex gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 p-0 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 p-0 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 p-0 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="text-sm text-gray-600 font-medium">
                Mostrando {startIndex + 1} a {Math.min(endIndex, filteredEvaluaciones.length)} de{" "}
                {filteredEvaluaciones.length} entradas
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:from-cyan-700 hover:to-emerald-700 rounded-lg shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg"
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gradient-to-r from-cyan-50 to-emerald-50 text-center border-t border-cyan-100">
              <span className="text-sm text-gray-700 font-medium">En total existen 72 evaluaciones</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
