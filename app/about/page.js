import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-gray-900 text-center">About Me</h1>
        
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Image 
                src="https://ui-avatars.com/api/?name=Zahir&size=300&background=10b981&color=fff&bold=true"
                alt="Zahir's profile photo"
                width={300}
                height={300}
                className="rounded-full shadow-lg border-4 border-green-500"
              />
            </div>
            
            {/* Bio */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hi, I&apos;m Zahir!</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  The creator behind the YouTube channel zahtoofunny. I love playing horror games like FNAF, The Backrooms, and anything that brings the excitement and thrill of jump scares!
                   I love sharing intense gameplay, big reactions, and entertaining moments with my growing community.
                </p>
                <p>
                  Alongside content creation, I&apos;m also learning web development. I&apos;m exploring web design, React, Next.js, and working with databases as I build my skills and create new projects.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new tech trends, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span>💻</span> My Skills
          </h2>
          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  HTML & CSS
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                  JavaScript
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-medium">
                  React
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium">
                  Next.js
                </span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Backend & Database</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                  Node.js
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                  PostgreSQL
                </span>
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">
                  Prisma ORM
                </span>
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-medium">
                  REST APIs
                </span>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                  Git & GitHub
                </span>
                <span className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full font-medium">
                  VS Code
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium">
                  Vercel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span>🚀</span> My Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Short Term</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Master Next.js</li>
                <li>✓ Find a high-paying job that has something to do with web designing.</li>
                <li>✓ Continue building my brand.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Long Term</h3>
              <ul className="space-y-2 text-gray-700">
                <li>→ Become a full time software developer.</li>
                <li>→ Launch my own game/Project.</li>
                <li>→ Become a successful Content Creator on YouTube.</li>
                <li>→ have a well known brand.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
