
import { useState } from 'react';
import { cn } from '@/lib/utils';

const dishes = [
  {
    id: 1,
    name: "Masala Dosa",
    description: "Crispy rice crepes filled with spiced potato filling, served with sambar and coconut chutney.",
    price: "$12.99",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken in a creamy tomato sauce with aromatic spices and fresh cream.",
    price: "$15.99",
    category: "mains",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Palak Paneer",
    description: "Fresh cottage cheese cubes in a spinach puree with garlic and spices.",
    price: "$14.99",
    category: "mains",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Gulab Jamun",
    description: "Soft milk solids dumplings soaked in rose and cardamom flavored sugar syrup.",
    price: "$6.99",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80"
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'mains', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
];

const DishCard = ({ dish }: { dish: typeof dishes[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-serif text-xl font-semibold text-foreground">{dish.name}</h3>
          <span className="font-bold text-amma-600">{dish.price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
        <button className="w-full py-2 bg-amma-50 hover:bg-amma-100 text-amma-700 rounded-md transition-colors text-sm font-medium">
          Order Now
        </button>
      </div>
    </div>
  );
};

const FeaturedDishes = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes = activeCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-secondary mb-4">Our Featured Dishes</h2>
          <p className="text-muted-foreground">
            Discover our signature dishes made with authentic recipes and the freshest ingredients, 
            bringing the comforting taste of home to your table.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category.id 
                    ? "bg-amma-500 text-white" 
                    : "bg-white text-foreground hover:bg-amma-100"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
