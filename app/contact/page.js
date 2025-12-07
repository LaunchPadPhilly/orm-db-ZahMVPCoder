export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="max-w-4xl mx-auto relative z-10 pt-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          I&apos;d love to hear from you! Feel free to reach out through any of these channels.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">📧</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">Email</p>
                <a 
                  href="mailto:zahtoobusiness@example.com" 
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  zahtoobusiness@example.com
                </a>
                <p className="text-gray-600 mt-2">
                  Best for business inquiries and project collaborations
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">🔗</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/zahir-alston-84690031b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  linkedin.com/in/zahir-alston-84690031b
                </a>
                <p className="text-gray-600 mt-2">
                  Connect with me professionally and see my work experience
                </p>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">🎥</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">YouTube</p>
                <a 
                  href="https://www.youtube.com/@ZahTooFunny/featured" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  youtube.com/@ZahTooFunny
                </a>
                <p className="text-gray-600 mt-2">
                  Check out my content and creative projects
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">💻</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">GitHub</p>
                <a 
                  href="https://github.com/ZahMVPCoder" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  github.com/ZahMVPCoder
                </a>
                <p className="text-gray-600 mt-2">
                  Explore my code and open-source contributions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
