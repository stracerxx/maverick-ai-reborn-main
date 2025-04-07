import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-heading font-bold text-xl">Maverick AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Features</Link>
            <Link to="/templates" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Templates</Link>
            <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Pricing</Link>
            <Link to="/docs" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Docs</Link>
            <Link to="/admin" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Admin</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 pt-2 pb-4 space-y-3">
            <Link to="/features" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary">Features</Link>
            <Link to="/templates" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary">Templates</Link>
            <Link to="/pricing" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary">Pricing</Link>
            <Link to="/docs" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary">Docs</Link>
            <Link to="/admin" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary">Admin</Link>
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
