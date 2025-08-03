import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Smartphone, Download, CheckCircle, Apple } from "lucide-react";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  platform: 'android' | 'ios';
}

export const DownloadSection = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    phone: '',
    platform: 'android'
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios'>('android');
  const { toast } = useToast();

  const handleDownload = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to download the app.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the user details to your backend
    console.log('User details:', userDetails);
    
    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download Started!",
        description: `Matrimedis for ${selectedPlatform === 'android' ? 'Android' : 'iOS'} is downloading...`,
      });
      setIsDialogOpen(false);
      // Reset form
      setUserDetails({ name: '', email: '', phone: '', platform: selectedPlatform });
    }, 1000);
  };

  const openDownloadDialog = (platform: 'android' | 'ios') => {
    setSelectedPlatform(platform);
    setUserDetails(prev => ({ ...prev, platform }));
    setIsDialogOpen(true);
  };

  return (
    <section id="download" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Download Matrimedis Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant access to your personal health assistant. Available for both 
            Android and iOS platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Android Download */}
            <Card className="p-8 bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Android APK</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Latest Version 1.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Size: 25MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Android 6.0+</span>
                  </div>
                </div>
                
                <Dialog open={isDialogOpen && selectedPlatform === 'android'} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="download" 
                      size="lg" 
                      className="w-full"
                      onClick={() => openDownloadDialog('android')}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download for Android
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5" />
                        Download Matrimedis for Android
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={userDetails.name}
                          onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={userDetails.email}
                          onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          value={userDetails.phone}
                          onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <Button onClick={handleDownload} className="w-full" variant="download">
                        <Download className="w-4 h-4 mr-2" />
                        Start Download
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* iOS Download */}
            <Card className="p-8 bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">iOS App</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Latest Version 1.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Size: 30MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">iOS 12.0+</span>
                  </div>
                </div>
                
                <Dialog open={isDialogOpen && selectedPlatform === 'ios'} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="download" 
                      size="lg" 
                      className="w-full"
                      onClick={() => openDownloadDialog('ios')}
                    >
                      <Apple className="w-5 h-5 mr-2" />
                      Download for iOS
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Apple className="w-5 h-5" />
                        Download Matrimedis for iOS
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name-ios">Full Name</Label>
                        <Input
                          id="name-ios"
                          placeholder="Enter your full name"
                          value={userDetails.name}
                          onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email-ios">Email Address</Label>
                        <Input
                          id="email-ios"
                          type="email"
                          placeholder="Enter your email"
                          value={userDetails.email}
                          onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone-ios">Phone Number</Label>
                        <Input
                          id="phone-ios"
                          placeholder="Enter your phone number"
                          value={userDetails.phone}
                          onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <Button onClick={handleDownload} className="w-full" variant="download">
                        <Download className="w-4 h-4 mr-2" />
                        Start Download
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};