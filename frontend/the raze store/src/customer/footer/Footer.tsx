import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between mt-20">
      
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">The Raze Store</h3>
          <p className="text-sm text-gray-400">
            © 2026 The Raze Store. All rights reserved.
          </p>
        </div>

        <nav className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-400 transition">Home</a>
          <a href="#" className="hover:text-teal-400 transition">About</a>
          <a href="#" className="hover:text-teal-400 transition">Services</a>
          <a href="#" className="hover:text-teal-400 transition">Contact</a>
        </nav>

      </div>
    </footer>
  )
}

export default Footer
