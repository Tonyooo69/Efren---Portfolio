import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-text-secondary/10 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-text-secondary">
            &copy; {currentYear} Efren. All rights reserved.
          </p>
          <p className="text-xs font-medium text-text-secondary/70 mt-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="https://www.facebook.com/efren.francis.anonuevo.2025" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            Facebook
          </a>
          <a href="https://www.instagram.com/efrenfrancisanonuevo?hl=en" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@efren.francis.aon" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  )
}
