import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MovingDots from './components/MovingDots'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <MovingDots />
        <Navbar />
        
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
export const metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio website showcasing my projects and skills',
}