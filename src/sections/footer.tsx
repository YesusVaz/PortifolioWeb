
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Copyright Yesus Vaz</span>
          </div>
      </div>
    </footer> 
  );
}

