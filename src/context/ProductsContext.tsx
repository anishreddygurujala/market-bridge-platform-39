
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/components/ProductCard';

interface ProductsContextType {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
  isInFavorites: (productId: string) => boolean;
  cartCount: number;
  favoritesCount: number;
  products: Product[];
}

// Sample products data
export const productsData = [
  {
    id: "1",
    name: "Gold Hoop Earrings",
    description: "Elegant gold hoop earrings with intricate detailing, perfect for both casual and formal occasions.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    category: "jewelry"
  },
  {
    id: "2",
    name: "Silver Pendant Necklace",
    description: "Handcrafted silver pendant with traditional motifs, representing strength and resilience.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1563294162-7278d3a232ce?q=80&w=1000&auto=format&fit=crop",
    category: "jewelry"
  },
  {
    id: "3",
    name: "Embroidered Silk Kaftan",
    description: "Luxurious silk kaftan with hand-embroidered details, celebrating artisanal craftsmanship.",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
    category: "fashion"
  },
  {
    id: "4",
    name: "Heritage Bracelet",
    description: "A stunning bracelet inspired by traditional designs with modern elements.",
    price: 179.99,
    imageUrl: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1000&auto=format&fit=crop",
    category: "heritage"
  },
  {
    id: "5",
    name: "Modern Abaya Design",
    description: "Contemporary abaya design featuring subtle embellishments and premium fabric.",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    category: "fashion"
  },
  {
    id: "6",
    name: "Gemstone Ring",
    description: "Exquisite ring featuring ethically sourced gemstones with a unique setting.",
    price: 159.99,
    imageUrl: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop",
    category: "jewelry"
  },
  {
    id: "7",
    name: "Handwoven Shawl",
    description: "Intricately handwoven shawl using traditional techniques and premium materials.",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1572922641334-118cbc0f8302?q=80&w=1000&auto=format&fit=crop",
    category: "heritage"
  },
  {
    id: "8",
    name: "Statement Cuff",
    description: "Bold cuff bracelet blending traditional craftsmanship with contemporary styling.",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
    category: "jewelry"
  },
  {
    id: "9",
    name: "Pearls and Indian Jade Earrings",
    description: "Elegant earrings featuring natural pearls and authentic Indian jade with traditional gold-tone design.",
    price: 99.00,
    imageUrl: "/lovable-uploads/c3e1aa61-7263-4974-844a-2bba0b9bc718.png",
    category: "jewelry"
  }
];

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [products] = useState<Product[]>(productsData);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      // Check if product is already in cart
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(item => item.id === product.id);
      if (isAlreadyFavorite) {
        return prevFavorites.filter(item => item.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  const isInFavorites = (productId: string) => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <ProductsContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        toggleFavorite,
        isInFavorites,
        cartCount: cart.length,
        favoritesCount: favorites.length,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
