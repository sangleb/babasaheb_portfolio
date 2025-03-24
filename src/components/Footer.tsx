
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Portfolio
            </a>
            <p className="mt-2 text-muted-foreground">
              Building digital experiences with precision and care
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Babasaheb. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
