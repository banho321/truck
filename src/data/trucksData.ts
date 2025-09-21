// Truck data from API
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let apiData: any;
try {
  const apiPath = join(__dirname, '../../api.json');
  apiData = JSON.parse(readFileSync(apiPath, 'utf-8'));
} catch (error) {
  console.error('Error loading API data:', error);
  apiData = { result: { components: [] } };
}

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
const productSliders = apiData.result.components.filter(component => component.name === 'Danh sách sản phẩm');
const brands: Brand[] = productSliders.flatMap(component => component.data.brands || []);

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
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
};

// Get specification value by title
export const getSpecValue = (specs: TruckSpec[] | undefined, title: string): string => {
  if (!specs || !Array.isArray(specs)) return 'N/A';
  const spec = specs.find(s => s.title === title);
  return spec ? spec.value : 'N/A';
};

export { brands, allTrucks };
