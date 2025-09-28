// Truck Data Management
import { mergeAllBrandData, loadBrandSpecificData, MergedTruckData } from '../utils/dataLoader';

export interface TruckSpec {
  title: string;
  value: string;
}

export interface Truck {
  id: number;
  name: string;
  slug: string;
  brand: string;
  vehicleType: string;
  filterCategories: string[];
  weight: number;
  image: string;
  basic_specification: TruckSpec[];
}

export interface VehicleType {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  image: string;
  active: boolean;
}

export interface Category {
  id: number;
  categoryCarname: string;
  carsCount: number;
  car: Truck[];
}

export interface TruckData {
  brands: Brand[];
  load: string[];
  price: string[];
  listCategories: string[];
  cars: Category[];
}

// Initial data
let trucksData: TruckData = {
  brands: [],
  load: [],
  price: [],
  listCategories: [],
  cars: []
};

// Load data from data folder
export function loadTrucksData(): TruckData {
  try {
    const mergedData = mergeAllBrandData();
    
    trucksData = {
      brands: mergedData.brands,
      load: mergedData.load,
      price: mergedData.price,
      listCategories: mergedData.listCategories,
      cars: mergedData.cars
    };
    
    return trucksData;
  } catch (error) {
    console.error('Error loading trucks data:', error);
    return trucksData;
  }
}

// Load data for specific brand
export function loadBrandData(brandName: string): TruckData {
  try {
    const brandData = loadBrandSpecificData(brandName);
    if (!brandData) {
      return trucksData;
    }
    
    return {
      brands: brandData.brands,
      load: brandData.load,
      price: brandData.price,
      listCategories: brandData.listCategories,
      cars: brandData.cars
    };
  } catch (error) {
    console.error(`Error loading brand data for ${brandName}:`, error);
    return trucksData;
  }
}

// Get all trucks
export function getAllTrucks(): Truck[] {
  const allTrucks: Truck[] = [];
  if (trucksData.cars && Array.isArray(trucksData.cars)) {
    trucksData.cars.forEach(category => {
      if (category.car && Array.isArray(category.car)) {
        category.car.forEach(truck => {
          allTrucks.push(truck);
        });
      }
    });
  }
  return allTrucks;
}

// Get featured trucks (first 4 trucks)
export function getFeaturedTrucks(): Truck[] {
  return getAllTrucks().slice(0, 4);
}

// Get truck by ID
export function getTruckById(id: number): Truck | undefined {
  return getAllTrucks().find(truck => truck.id === id);
}

// Get specification value by title
export function getSpecValue(specs: TruckSpec[] | undefined, title: string): string {
  if (!specs || !Array.isArray(specs)) {
    return 'N/A';
  }
  const spec = specs.find(s => s.title === title);
  return spec ? spec.value : 'N/A';
}

// Get trucks by brand
export function getTrucksByBrand(brand: string): Truck[] {
  return getAllTrucks().filter(truck => truck.brand === brand);
}

// Search trucks
export function searchTrucks(query: string): Truck[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllTrucks().filter(truck => 
    truck.name.toLowerCase().includes(lowercaseQuery) ||
    truck.brand.toLowerCase().includes(lowercaseQuery) ||
    truck.vehicleType.toLowerCase().includes(lowercaseQuery)
  );
}

// Get current data
export function getCurrentData(): TruckData {
  return trucksData;
}