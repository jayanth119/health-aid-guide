import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Smartphone, Stethoscope } from "lucide-react";
// import phoneImage from "@/assets/phone-mockup.png";

export const HeroSection = () => {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="flex items-center gap-3 text-primary">
              <Heart className="w-8 h-8" />
              <Stethoscope className="w-8 h-8" />
              <Smartphone className="w-8 h-8" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Matrimedis
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-medium">
                Your Virtual Health Assistant
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Access medicine details, disease information, diet recommendations, 
                and chat support. Multi-language support with voice navigation for everyone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToDownload}
              >
                Download Now
              </Button>
              <Button 
                variant="outline-medical" 
                size="xl"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          {/* <div className="flex justify-center lg:justify-end">
            <Card className="relative p-8 bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-500">
              <img 
                src={phoneImage} 
                alt="Matrimedis App Preview" 
                className="w-80 h-auto max-w-full object-contain"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};