'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
  const starsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Create stars
    const numStars = 20
    const stars = []
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        vx: 0,
        vy: 0
      })
    }
    starsRef.current = stars

    // Track mouse position
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Animate stars
    const animate = () => {
      starsRef.current.forEach((star) => {
        const dx = star.x - mouseRef.current.x
        const dy = star.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          star.vx += (dx / distance) * force * 2
          star.vy += (dy / distance) * force * 2
        }
        
        // Apply velocity
        star.x += star.vx
        star.y += star.vy
        
        // Friction
        star.vx *= 0.95
        star.vy *= 0.95
        
        // Bounce off edges
        if (star.x < 0 || star.x > window.innerWidth) {
          star.x = Math.max(0, Math.min(window.innerWidth, star.x))
          star.vx *= -0.5
        }
        if (star.y < 0 || star.y > window.innerHeight) {
          star.y = Math.max(0, Math.min(window.innerHeight, star.y))
          star.vy *= -0.5
        }
      })
      
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-teal-50 to-green-50 relative overflow-hidden">
      {/* Animated stars */}
      {starsRef.current.map((star, i) => (
        <div
          key={i}
          className="absolute pointer-events-none transition-all duration-100"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            fontSize: `${star.size}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          ⭐
        </div>
      ))}
      
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Hi, I'm Zahir!
        </h1>
        
        <p className="text-xl text-gray-700 mb-4">
          I'm a passionate full-stack developer building modern web applications with cutting-edge technologies.
        </p>
        
        <p className="text-lg text-gray-600 mb-8">
          I love creating intuitive user experiences and solving complex problems through clean, efficient code. Welcome to my portfolio!
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link 
            href="/about" 
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition shadow-lg hover:shadow-xl"
          >
            About Me
          </Link>
          
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
          
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Stack Development</h3>
            <p className="text-gray-600">Building complete web applications from database to UI</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-500">
            <div className="text-4xl mb-3">🗄️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Database Design</h3>
            <p className="text-gray-600">Creating efficient and scalable data architectures</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Technologies</h3>
            <p className="text-gray-600">Using Next.js, React, Prisma, and PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}
