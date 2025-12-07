"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectForm from './components/ProjectForm'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      try {
        const res = await fetch('/api/projects')
        const data = await res.json()
        if (mounted) setProjects(data || [])
      } catch (err) {
        console.error(err)
        if (mounted) setError('Failed to load projects')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  async function handleCreate(formData) {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed to create project')
      const created = await res.json()
      // prepend created project
      setProjects(prev => [created, ...prev])
      setShowForm(false)
    } catch (err) {
      console.error(err)
      setError('Failed to create project')
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h1 className="text-5xl font-bold text-gray-900">My Projects</h1>
          <div className="flex items-center gap-3">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => setShowForm(true)}
              aria-label="Add New Project"
            >
              Add New Project
            </button>
          </div>
        </div>

        {/* Conditionally render form */}
        {showForm && (
          <div className="mb-8">
            <ProjectForm isOpen={true} onSubmit={handleCreate} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project 1: Little Buddies */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <p className="text-white font-bold text-2xl z-10 drop-shadow-lg">Little Buddies</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Little Buddies</h3>
              <p className="text-gray-600 mb-4 line-clamp-4">
                An interactive web app that helps people who spend most of their day sitting stay active. 
                Features a personal AI buddy that acts as your health and fitness trainer, giving advice 
                and reminding you to get moving.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">AI</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Next.js</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">React</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Health</span>
              </div>
              <Link 
                href="https://little-buddies.vercel.app/" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Project 2: Movie Finder App */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-teal-100">
            <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <p className="text-white font-bold text-2xl z-10 drop-shadow-lg">Movie Finder</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Movie Finder App</h3>
              <p className="text-gray-600 mb-4 line-clamp-4">
                Your smart movie companion! Using AI, it quickly finds movies — whether classics or latest 
                releases. Save your favorite movies for later, creating a personalized watchlist to never 
                forget what to watch next.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">AI</span>
                <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">API</span>
                <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">React</span>
                <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">Database</span>
              </div>
              <Link 
                href="https://moviedata-two.vercel.app/" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Project 3: Task Management App */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <p className="text-white font-bold text-2xl z-10 drop-shadow-lg">Task Manager</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Task Management App</h3>
              <p className="text-gray-600 mb-4 line-clamp-4">
                Collaborative task management application with real-time updates. Organize your work, 
                collaborate with team members, and track progress efficiently with an intuitive interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Real-time</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">React</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Prisma</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">PostgreSQL</span>
              </div>
              <Link 
                href="https://github.com/yourusername/task-manager" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-yellow-900 mb-2">💡 Project Ideas:</h3>
          <ul className="text-yellow-800 space-y-1">
            <li>• Past school projects</li>
            <li>• Personal coding projects</li>
            <li>• Design work or creative projects</li>
            <li>• Future projects you want to build (coming soon!)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Learning Objectives for Students:
// 1. Understand server vs client components
// 2. Learn React state management patterns
// 3. Implement API integration
// 4. Handle async operations and error states
// 5. Build interactive user interfaces
// 6. Practice component composition
