
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
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

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
