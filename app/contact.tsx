"use client"
import { useState } from "react"
import AlertMessage from "@/components/Alert"
import FadeDown from "@/components/animations/FadeDown"

type AlertType = "success" | "error" | "info" | "warning"

export default function Contact() {
  const [alert, setAlert] = useState<{ type: AlertType; message: string; show: boolean }>({
    type: "success",
    message: "",
    show: false,
  })
  const [loading, setLoading] = useState(false)

  return (
    <section id="contacts" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative overflow-hidden border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Contact Me</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <FadeDown delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Maps Embed */}
            <div className="bg-background border border-text-secondary/20 rounded-3xl overflow-hidden h-[400px] lg:h-auto min-h-[400px] shadow-xl hover:border-text-primary transition-colors duration-500 relative group">
              <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-text-secondary/20 shadow-lg pointer-events-none">
                <p className="text-sm font-bold text-text-primary">📍 Legazpi City</p>
                <p className="text-xs font-medium text-text-secondary">Albay, Philippines</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Legazpi%20City%2C%20Albay%2C%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-3 sm:flex sm:flex-col gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/efren.francis.anonuevo.2025" target="_blank" rel="noopener noreferrer" className="group bg-background border border-text-secondary/20 rounded-2xl p-4 sm:p-6 flex items-center justify-center sm:justify-between hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all duration-300 shadow-sm hover:shadow-md aspect-square sm:aspect-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-text-secondary/10 flex items-center justify-center text-text-primary group-hover:text-[#1877F2] group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.002 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.93-1.956 1.885v2.258h3.328l-.532 3.469h-2.796v8.385C19.612 23.075 24 18.092 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="text-lg font-bold text-text-primary">Facebook</h4>
                    <p className="text-sm font-medium text-text-secondary">@efren.francis.anonuevo.2025</p>
                  </div>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-text-secondary group-hover:text-[#1877F2] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>

              {/* Email */}
              <a href="mailto:efrenjranonuevo@gmail.com" target="_blank" rel="noopener noreferrer" className="group bg-background border border-text-secondary/20 rounded-2xl p-4 sm:p-6 flex items-center justify-center sm:justify-between hover:border-text-primary hover:bg-text-secondary/5 transition-all duration-300 shadow-sm hover:shadow-md aspect-square sm:aspect-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-text-secondary/10 flex items-center justify-center text-text-primary group-hover:text-text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="text-lg font-bold text-text-primary">Email</h4>
                    <p className="text-sm font-medium text-text-secondary">efrenjranonuevo@gmail.com</p>
                  </div>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/efrenfrancisanonuevo?hl=en" target="_blank" rel="noopener noreferrer" className="group bg-background border border-text-secondary/20 rounded-2xl p-4 sm:p-6 flex items-center justify-center sm:justify-between hover:border-[#E1306C] hover:bg-[#E1306C]/5 transition-all duration-300 shadow-sm hover:shadow-md aspect-square sm:aspect-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-text-secondary/10 flex items-center justify-center text-text-primary group-hover:text-[#E1306C] group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="text-lg font-bold text-text-primary">Instagram</h4>
                    <p className="text-sm font-medium text-text-secondary">@efrenfrancisanonuevo</p>
                  </div>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-text-secondary group-hover:text-[#E1306C] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@efren.francis.aon" target="_blank" rel="noopener noreferrer" className="group bg-background border border-text-secondary/20 rounded-2xl p-4 sm:p-6 flex items-center justify-center sm:justify-between hover:border-text-primary hover:bg-text-primary/5 transition-all duration-300 shadow-sm hover:shadow-md aspect-square sm:aspect-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-text-secondary/10 flex items-center justify-center text-text-primary group-hover:text-text-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.95-.59 3.86-1.66 5.43-1.4 2.05-3.66 3.39-6.16 3.65-2.52.27-5.11-.27-7.23-1.66-2.09-1.37-3.52-3.48-4.04-5.89-.52-2.4-.1-4.95 1.15-7.05 1.25-2.11 3.33-3.67 5.71-4.24 2.2-.54 4.54-.31 6.6.62v4.11c-1.37-.62-2.92-.81-4.38-.49-1.46.32-2.78 1.16-3.66 2.37-.87 1.21-1.22 2.76-1.01 4.24.2 1.49.99 2.82 2.15 3.75 1.16.94 2.7 1.34 4.18 1.09 1.49-.24 2.83-1.04 3.76-2.2 1.01-1.25 1.47-2.87 1.47-4.47V.02z" />
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="text-lg font-bold text-text-primary">TikTok</h4>
                    <p className="text-sm font-medium text-text-secondary">@efren.francis.aon</p>
                  </div>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        </FadeDown>
      </div>

      <div className={`${alert.show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} fixed inset-0 flex top-0 right-0 items-start justify-end px-4 py-6 z-[100] transition-all duration-500 ease-out pointer-events-none`}>
        <div className="pointer-events-auto border border-text-secondary/20 shadow-2xl rounded-lg">
          <AlertMessage type={alert.type as AlertType} message={alert.message} onClose={() => setAlert({ ...alert, show: false })} />
        </div>
      </div>
    </section>
  )
}
