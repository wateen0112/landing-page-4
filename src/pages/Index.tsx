
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Testimonials } from "@/components/Testimonials"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

const Index = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Index
