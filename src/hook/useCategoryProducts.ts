import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  stock?: number;
}

interface UseCategoryProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: (category?: string) => Promise<void>;
}

interface UseCategoryProductsOptions {
  category?: string;
  autoFetch?: boolean;
}

const useCategoryProducts = (
  options: UseCategoryProductsOptions = {}
): UseCategoryProductsResult => {
  const { category, autoFetch = true } = options;
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (filterCategory?: string) => {
    setLoading(true);
    setError(null);

    try {
      // Build query params
      const params = new URLSearchParams();
      const categoryFilter = filterCategory || category;
      
      if (categoryFilter) {
        params.append('category', categoryFilter);
      }

      // Adjust the API endpoint to match your backend
      const response = await fetch(`/api/products?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data = await response.json();
      setProducts(data.products || data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = async (newCategory?: string) => {
    await fetchProducts(newCategory);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchProducts();
    }
  }, [category, autoFetch]);

  return {
    products,
    loading,
    error,
    refetch,
  };
};

export default useCategoryProducts;