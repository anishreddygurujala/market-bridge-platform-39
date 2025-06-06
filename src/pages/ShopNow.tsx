import { useState, useEffect } from 'react';
import { Gem, ShoppingBag, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/context/ProductsContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ShopNow = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart, toggleFavorite, isInFavorites, cartCount, favoritesCount, products } = useProducts();
  const itemsPerPage = 4;

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Filter products by category if needed
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const collections = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Jewelry",
      category: "jewelry"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Fashion",
      category: "fashion"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heritage",
      category: "heritage"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "All",
      category: null
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-fashion-50">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-12">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full animate-on-scroll">
                Our Products
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Shop Our Collection
              </h1>
              <p className="text-gray-600 animate-on-scroll">
                Discover our curated products of jewelry and fashion pieces that 
                celebrate heritage, craftsmanship, and the empowerment of women.
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 animate-on-scroll">
              {collections.map((collection, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(collection.category);
                    setCurrentPage(1); // Reset to page 1 when changing category
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    selectedCategory === collection.category || (collection.category === null && selectedCategory === null)
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-fashion-100'
                  }`}
                >
                  {collection.icon}
                  {collection.title}
                </button>
              ))}
            </div>
            
            <div className="flex items-center justify-end gap-4 mb-6">
              <div className="flex items-center gap-2 bg-fashion-100 px-3 py-1 rounded-full text-sm">
                <ShoppingBag className="w-4 h-4" />
                <span>Cart: {cartCount}</span>
              </div>
              
              <div className="flex items-center gap-2 bg-fashion-100 px-3 py-1 rounded-full text-sm">
                <Heart className="w-4 h-4" />
                <span>Favorites: {favoritesCount}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, index) => (
                  <Card key={index} className="h-96 animate-pulse">
                    <div className="aspect-square bg-gray-200"></div>
                    <CardContent className="mt-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={addToCart}
                      onAddToFavorites={toggleFavorite}
                      isFavorite={isInFavorites(product.id)}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <Pagination className="mt-12">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious onClick={() => setCurrentPage(prev => prev - 1)} />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink
                            isActive={currentPage === i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext onClick={() => setCurrentPage(prev => prev + 1)} />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try selecting a different category.</p>
                <Button onClick={() => setSelectedCategory(null)} variant="outline">
                  View All Products
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-fashion-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Visit Our Shopify Store
              </h2>
              <p className="text-gray-600 mb-8">
                For a complete catalog and secure checkout experience, visit our Shopify store where you can browse all collections, see detailed product information, and make purchases.
              </p>
              <a 
                href="https://banisaad.myshopify.com/collections/all" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
              >
                Visit Full Store
                <ShoppingBag className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopNow;
