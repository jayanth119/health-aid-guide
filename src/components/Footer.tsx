import { Heart, Mail, Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary-glow" />
              <h3 className="text-2xl font-bold">Matrimedis</h3>
            </div>
            <p className="text-background/80">
              Your Virtual Health Assistant - Making healthcare accessible to everyone 
              through technology and compassion.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-background/80 hover:text-primary-glow transition-colors">
                Features
              </a>
              <a href="#download" className="block text-background/80 hover:text-primary-glow transition-colors">
                Download
              </a>
              <a href="#" className="block text-background/80 hover:text-primary-glow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-background/80 hover:text-primary-glow transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2">
              <a href="mailto:contact@matrimedis.com" className="flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors">
                <Mail className="w-4 h-4" />
                contact@matrimedis.com
              </a>
              <a href="https://github.com/jayanth119/matrimedis" className="flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors">
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              <a href="https://youtu.be/WQH22xsKI5A?si=GdYygz6WhKQgQ5uq" className="flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors">
                <ExternalLink className="w-4 h-4" />
                Demo Video
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Matrimedis. Made with ❤️ for better healthcare accessibility.
          </p>
        </div>
      </div>
    </footer>
  );
};