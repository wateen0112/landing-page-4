
import { BarChart3, Brain, Shield, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with our powerful analytics engine that processes millions of data points in real-time."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Leverage machine learning algorithms to discover patterns and predict trends automatically."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process and visualize data at unprecedented speeds with our optimized infrastructure."
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionize Your Business with Our AI-Powered Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our cutting-edge technology can transform your data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-card rounded-lg p-6 h-full border transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
