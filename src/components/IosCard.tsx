import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircle, Apple, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function IOSDownloadCard() {
  const [isIosDialogOpen, setIsIosDialogOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleDownload = () => {
    // Show a toast message only (no backend)
    toast({
      title: "Download Unavailable",
      description:
        "The iOS version of the app is not yet available. Please try again later.",
      variant: "destructive",
    });

    setIsIosDialogOpen(false);
  };

  return (
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

        <Dialog open={isIosDialogOpen} onOpenChange={setIsIosDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="download"
              size="lg"
              className="w-full"
              onClick={() => setIsIosDialogOpen(true)}
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
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="email-ios">Email Address</Label>
                <Input
                  id="email-ios"
                  type="email"
                  placeholder="Enter your email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone-ios">Phone Number</Label>
                <Input
                  id="phone-ios"
                  placeholder="Enter your phone number"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>

              <Button
                onClick={handleDownload}
                className="w-full"
                variant="destructive"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Unavailable
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
