
const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80" 
                alt="Amma in her kitchen" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -left-10 w-64 h-64 bg-amma-100 rounded-full -z-10"></div>
            <div className="absolute bottom-10 -right-10 w-40 h-40 bg-leaf-100 rounded-full -z-10"></div>
          </div>
          
          <div className="lg:pl-8">
            <h2 className="heading-secondary mb-6">About <span className="text-amma-600">Amma's Kitchen</span></h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2010 by Meena "Amma" Patel, Amma's Kitchen began as a small family restaurant with a simple mission: 
              to serve authentic, home-style dishes that bring back the nostalgic flavors of childhood.
            </p>
            <p className="text-muted-foreground mb-6">
              Every recipe at Amma's Kitchen has been passed down through generations, preserving the authentic techniques 
              and flavors that make homemade food so special. We source the freshest ingredients locally whenever possible 
              and prepare everything from scratch daily.
            </p>
            <p className="text-muted-foreground mb-8">
              When you dine with us, you're not just a customer – you're family. We take pride in creating a warm, welcoming 
              atmosphere where you can enjoy delicious meals that taste just like the ones your mother used to make.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-serif font-bold text-3xl text-amma-600 mb-1">12+</h3>
                <p className="text-muted-foreground text-sm">Years of Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-serif font-bold text-3xl text-amma-600 mb-1">50+</h3>
                <p className="text-muted-foreground text-sm">Authentic Recipes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
