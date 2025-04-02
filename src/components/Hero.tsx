
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amma-100/70 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 z-[-1]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="heading-primary mb-6">
            <span className="text-amma-700">Taste</span> of Home, <br />
            <span className="text-spice-600">Cooked with Love</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            Experience the authentic flavors of homemade dishes, just like your mother used to make. Every recipe prepared with love and tradition.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="btn-primary">
              Explore Our Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 right-0 w-1/2 h-full z-[-1]">
        <div className="h-full w-full bg-gradient-to-l from-amma-100/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
