
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content: "DataFlow has completely transformed how we handle our analytics. The insights we get are incredible and have helped us increase revenue by 40%.",
      rating: 5,
      avatar: "/lovable-uploads/9357aae0-11e6-4fc9-9ccc-23e881a900f4.png"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist at InnovateLab",
      content: "The AI-powered features are game-changing. We can now predict trends weeks in advance and make proactive decisions.",
      rating: 5,
      avatar: "/lovable-uploads/9357aae0-11e6-4fc9-9ccc-23e881a900f4.png"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO at GrowthCo",
      content: "Implementation was seamless and the support team is outstanding. DataFlow scales perfectly with our growing business needs.",
      rating: 5,
      avatar: "/lovable-uploads/9357aae0-11e6-4fc9-9ccc-23e881a900f4.png"
    }
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In the spotlight
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers are saying about DataFlow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-muted rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
