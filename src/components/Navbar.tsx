
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="font-serif text-2xl md:text-3xl font-bold text-amma-700">Amma's Kitchen</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="font-medium text-foreground hover:text-amma-600 transition-colors">Home</a>
          <a href="#menu" className="font-medium text-foreground hover:text-amma-600 transition-colors">Menu</a>
          <a href="#about" className="font-medium text-foreground hover:text-amma-600 transition-colors">About</a>
          <a href="#testimonials" className="font-medium text-foreground hover:text-amma-600 transition-colors">Testimonials</a>
          <a href="#contact" className="font-medium text-foreground hover:text-amma-600 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6 text-amma-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          <a href="#home" className="font-medium text-foreground hover:text-amma-600 transition-colors" onClick={toggleMenu}>Home</a>
          <a href="#menu" className="font-medium text-foreground hover:text-amma-600 transition-colors" onClick={toggleMenu}>Menu</a>
          <a href="#about" className="font-medium text-foreground hover:text-amma-600 transition-colors" onClick={toggleMenu}>About</a>
          <a href="#testimonials" className="font-medium text-foreground hover:text-amma-600 transition-colors" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" className="font-medium text-foreground hover:text-amma-600 transition-colors" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
