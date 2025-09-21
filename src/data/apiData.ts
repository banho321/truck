// API data structure and processing
import apiData from '../../api.json';

export interface TruckSpec {
  title: string;
  value: string;
}

export interface Truck {
  id: number;
  name: string;
  slug: string;
  promotion: string | null;
  promotion_link: string | null;
  basic_specification: TruckSpec[];
  image: string;
  weight: number;
  price: number | null;
  brand: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  image: string;
  link: string | null;
  slideProduct: Truck[];
}

// Extract brands and trucks from API data
const brands: Brand[] = apiData.result.components
  .filter(component => component.name === 'ProductSlider')
  .map(component => component.data)
  .flat();

// Flatten all trucks from all brands
const allTrucks: Truck[] = brands.flatMap(brand => 
  brand.slideProduct.map(truck => ({
    ...truck,
    brand: brand.name
  }))
);

// Get unique brands
export const uniqueBrands = [...new Set(brands.map(brand => brand.name))];

// Get trucks by brand
export const getTrucksByBrand = (brandName: string): Truck[] => {
  return allTrucks.filter(truck => truck.brand === brandName);
};

// Get all trucks
export const getAllTrucks = (): Truck[] => {
  return allTrucks;
};

// Get featured trucks (first 4 trucks)
export const getFeaturedTrucks = (): Truck[] => {
  return allTrucks.slice(0, 4);
};

// Get truck by ID
export const getTruckById = (id: number): Truck | undefined => {
  return allTrucks.find(truck => truck.id === id);
};

// Get trucks by weight range
export const getTrucksByWeightRange = (minWeight: number, maxWeight: number): Truck[] => {
  return allTrucks.filter(truck => truck.weight >= minWeight && truck.weight <= maxWeight);
};

// Get trucks by price range
export const getTrucksByPriceRange = (minPrice: number, maxPrice: number): Truck[] => {
  return allTrucks.filter(truck => 
    truck.price && truck.price >= minPrice && truck.price <= maxPrice
  );
};

// Search trucks by name
export const searchTrucks = (query: string): Truck[] => {
  const lowercaseQuery = query.toLowerCase();
  return allTrucks.filter(truck => 
    truck.name.toLowerCase().includes(lowercaseQuery) ||
    truck.brand.toLowerCase().includes(lowercaseQuery)
  );
};

// Format price for display
export const formatPrice = (price: number | null): string => {
  if (!price) return 'Liên hệ';
  return new Intl.NumberFormat('vi-VN').format(price);
};

// Get specification value by title
export const getSpecValue = (specs: TruckSpec[], title: string): string => {
  const spec = specs.find(s => s.title === title);
  return spec ? spec.value : 'N/A';
};

export { brands, allTrucks };
