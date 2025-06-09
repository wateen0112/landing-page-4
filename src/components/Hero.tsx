
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { useTranslation } from "@/utils/i18n"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t.hero.title.split(' ').slice(0, 2).join(' ')}{" "}
                <span className="text-primary">{t.hero.title.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                {t.hero.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
              <Button size="lg" className="group">
                {t.hero.getStarted}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                {t.hero.watchDemo}
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={99.9} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">{t.hero.stats.uptime}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={50} suffix="M+" />
                </div>
                <div className="text-sm text-muted-foreground">{t.hero.stats.dataPoints}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={10} suffix="k+" />
                </div>
                <div className="text-sm text-muted-foreground">{t.hero.stats.companies}</div>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="300">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="500">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop&crop=center"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="600">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=center"
                    alt="MacBook Pro development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="700">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=center"
                    alt="Data analytics workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="800">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center"
                    alt="Programming monitor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
