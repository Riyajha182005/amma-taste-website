
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    comment: "Eating at Amma's Kitchen reminds me of my grandmother's cooking. The flavors are so authentic and comforting!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    comment: "I've traveled across India and this is the closest I've come to authentic home cooking outside of someone's actual home.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    comment: "The palak paneer here is incredible! You can taste the love and care in every dish they prepare.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
      <div className="flex gap-3 items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <div className="flex">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amma-500 text-amma-500" />
            ))}
            {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
              <Star key={i + testimonial.rating} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
        </div>
      </div>
      <p className="italic text-muted-foreground">"{testimonial.comment}"</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-amma-50/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-secondary mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say about their 
            experience at Amma's Kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
