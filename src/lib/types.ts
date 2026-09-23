export interface ComboBundledItem {
  id: string;
  name: string;
  quantity: number;
  individualPrice: number;
  specs?: string;
  image?: string;
}

export interface ComboProduct {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  originalPrice: number;
  comboPrice: number;
  savings: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  thumbnail: string;
  images: string[];
  features: string[];
  items: ComboBundledItem[];
  inStock: boolean;
  stockCount: number;
  sku?: string;
  currency?: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  productCount?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
