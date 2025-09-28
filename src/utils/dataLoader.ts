// Data Loader Utility
import fs from 'fs';
import path from 'path';

export interface BrandData {
  message: string;
  result: {
    title: string;
    description: string | null;
    meta: {
      image: string;
    };
    icon: string;
    image: string;
    components: Array<{
      name: string;
      component: string;
      data: {
        brands: Array<{
          id: number;
          name: string;
          slug: string;
          description: string | null;
          parent_id: number;
          link: string | null;
          active: boolean;
          image: string;
        }>;
        cars: Array<{
          id: number;
          name: string;
          slug: string;
          brand: string;
          vehicleType: string;
          filterCategories: string[];
          weight: number;
          image: string;
          basic_specification: Array<{
            title: string;
            value: string;
          }>;
        }>;
        load: string[];
        price: string[];
        listCategories: string[];
      };
    }>;
  };
}

export interface MergedTruckData {
  brands: Array<{
    id: number;
    name: string;
    slug: string;
    image: string;
    active: boolean;
  }>;
  load: string[];
  price: string[];
  listCategories: string[];
  cars: Array<{
    id: number;
    name: string;
    slug: string;
    brand: string;
    vehicleType: string;
    filterCategories: string[];
    weight: number;
    image: string;
    basic_specification: Array<{
      title: string;
      value: string;
    }>;
  }>;
}

// Load data from a specific brand file
export function loadBrandData(brandName: string): BrandData | null {
  try {
    const filePath = path.join(process.cwd(), 'data', `${brandName}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading brand data for ${brandName}:`, error);
    return null;
  }
}

// Get all available brand files
export function getAvailableBrands(): string[] {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const files = fs.readdirSync(dataDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error reading data directory:', error);
    return [];
  }
}

// Merge data from all brand files
export function mergeAllBrandData(): MergedTruckData {
  const availableBrands = getAvailableBrands();
  const mergedData: MergedTruckData = {
    brands: [],
    load: [],
    price: [],
    listCategories: [],
    cars: []
  };

  const brandMap = new Map<number, any>();
  const loadSet = new Set<string>();
  const priceSet = new Set<string>();
  const categoriesSet = new Set<string>();
  const allCategories: any[] = [];

  // Sort brands to prioritize THACO TRUCK first
  const sortedBrands = availableBrands.sort((a, b) => {
    if (a === 'thaco-truck') return -1;
    if (b === 'thaco-truck') return 1;
    return a.localeCompare(b);
  });

  sortedBrands.forEach(brandName => {
    const brandData = loadBrandData(brandName);
    if (!brandData) return;

    const productComponent = brandData.result.components.find(
      comp => comp.component === 'product'
    );

    if (productComponent) {
      const { brands, cars, load, price, listCategories } = productComponent.data;

      // Merge brands (avoid duplicates)
      brands.forEach(brand => {
        if (!brandMap.has(brand.id)) {
          brandMap.set(brand.id, {
            id: brand.id,
            name: brand.name,
            slug: brand.slug,
            image: brand.image,
            active: brand.active
          });
        }
      });

      // Merge load, price, categories (only from first file to avoid duplicates)
      if (loadSet.size === 0 && load) load.forEach(item => loadSet.add(item));
      if (priceSet.size === 0 && price) price.forEach(item => priceSet.add(item));
      if (categoriesSet.size === 0 && listCategories) listCategories.forEach(item => categoriesSet.add(item));

      // Merge categories (keep structure and set brand)
      if (cars) {
        cars.forEach(category => {
          // Set brand for trucks in this category
          if (category.car && Array.isArray(category.car)) {
            category.car.forEach(truck => {
              if (!truck.brand) {
                // Set brand based on brandName or category name
                if (brandName === 'thaco-truck') {
                  truck.brand = 'THACO';
                } else if (brandName === 'kia') {
                  truck.brand = 'KIA';
                } else if (brandName === 'fuso') {
                  truck.brand = 'MITSUBISHI FUSO';
                } else if (brandName === 'sinotruk') {
                  truck.brand = 'SINOTRUK';
                } else if (brandName === 'somi-romooc') {
                  truck.brand = 'SƠ MI RƠ MOOC';
                } else {
                  truck.brand = brandName.toUpperCase();
                }
              }
            });
          }
          allCategories.push(category);
        });
      }
    }
  });

  // Convert sets to arrays
  mergedData.brands = Array.from(brandMap.values());
  mergedData.load = Array.from(loadSet);
  mergedData.price = Array.from(priceSet);
  mergedData.listCategories = Array.from(categoriesSet);
  mergedData.cars = allCategories;

  return mergedData;
}

// Load data for a specific brand only
export function loadBrandSpecificData(brandName: string): MergedTruckData | null {
  const brandData = loadBrandData(brandName);
  if (!brandData) return null;

  const productComponent = brandData.result.components.find(
    comp => comp.component === 'product'
  );

  if (!productComponent) return null;

  const { brands, cars, load, price, listCategories } = productComponent.data;

  return {
    brands: brands.map(brand => ({
      id: brand.id,
      name: brand.name,
      slug: brand.slug,
      image: brand.image,
      active: brand.active
    })),
    load,
    price,
    listCategories,
    cars
  };
}
