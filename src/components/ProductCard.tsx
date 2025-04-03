
import { useState } from 'react';
import { ShoppingCart, Heart, ImageOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
  isFavorite: boolean;
}

const ProductCard = ({ product, onAddToCart, onAddToFavorites, isFavorite }: ProductCardProps) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      onAddToCart(product);
      setIsAddingToCart(false);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      });
    }, 500);
  };

  const handleAddToFavorites = () => {
    onAddToFavorites(product);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite 
        ? `${product.name} has been removed from your favorites` 
        : `${product.name} has been added to your favorites`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleImageError = () => {
    console.log(`Image failed to load: ${product.imageUrl}`);
    setImageError(true);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-md animate-on-scroll">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {!imageError ? (
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            <ImageOff className="h-12 w-12" />
          </div>
        )}
        <button
          onClick={handleAddToFavorites}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite ? 'bg-primary text-white' : 'bg-white text-gray-700'
          } shadow-sm hover:shadow-md transition-all`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-display text-lg font-semibold">{product.name}</h3>
        <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleAddToCart} 
          disabled={isAddingToCart}
          className="w-full mt-2"
          variant="default"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isAddingToCart ? 'Adding...' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
