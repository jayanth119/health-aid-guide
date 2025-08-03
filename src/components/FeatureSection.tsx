import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Camera, 
  Search, 
  MessageCircle, 
  Globe, 
  Volume2, 
  Smartphone,
  Pill,
  Heart,
  Users
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Medicine Recognition",
    description: "Upload or capture medicine images and get detailed information instantly.",
    color: "text-primary"
  },
  {
    icon: Search,
    title: "Disease Information",
    description: "Search for diseases and get suggested medicines and recommended foods.",
    color: "text-secondary"
  },
  {
    icon: MessageCircle,
    title: "Virtual Doctor Chat",
    description: "Ask health-related queries and get instant answers or doctor alerts.",
    color: "text-accent"
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Available in English, Hindi, and Telugu for better accessibility.",
    color: "text-primary"
  },
  {
    icon: Volume2,
    title: "Voice Navigation",
    description: "Text-to-Speech support for users who prefer audio assistance.",
    color: "text-secondary"
  },
  {
    icon: Smartphone,
    title: "Real-time Updates",
    description: "HTTP-based API integration ensures you get the latest medical data.",
    color: "text-accent"
  }
];

const stats = [
  { icon: Pill, label: "Medicine Database", value: "10,000+" },
  { icon: Heart, label: "Conditions Covered", value: "5,000+" },
  { icon: Users, label: "Active Users", value: "50,000+" }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Powerful Health Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Matrimedis combines advanced technology with healthcare to provide 
            comprehensive medical assistance in your pocket.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <feature.icon className={`w-8 h-8 text-white`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 bg-gradient-card shadow-card">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};