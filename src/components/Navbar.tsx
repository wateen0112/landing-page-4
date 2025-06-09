
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageSwitch } from "./LanguageSwitch"
import { Menu, X, BarChart3 } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { useTranslation } from "@/utils/i18n"
import { Link } from "react-router-dom"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  const navItems = [
    { href: "#features", label: t.nav.features },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <BarChart3 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">DataFlow</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className={`hidden md:flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <LanguageSwitch />
            <ThemeToggle />
            <Link to="/signin">
              <Button variant="ghost">{t.nav.signIn}</Button>
            </Link>
            <Link to="/signup">
              <Button>{t.nav.getStarted}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full px-3 py-2 text-base font-medium hover:text-primary transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <LanguageSwitch />
                <div className="flex space-x-2">
                  <Link to="/signin" className="flex-1">
                    <Button variant="ghost" className="w-full">{t.nav.signIn}</Button>
                  </Link>
                  <Link to="/signup" className="flex-1">
                    <Button className="w-full">{t.nav.getStarted}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
