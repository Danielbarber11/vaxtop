import type { ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export interface Variant {
  size: string;
  connectivity: string;
  price: number;
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
  selectedSize?: string;
  selectedConnectivity?: string;
  purchaseDate?: string;
}

export interface StorageOption {
  size: string;
  priceModifier: number;
  inStock?: boolean;
}

export interface DetailedSpecs {
  [section: string]: string[];
}

export interface FeatureSection {
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
}

export interface PhoneProduct extends Product {
  brand: string;
  description: string;
  specs: { [key: string]: string };
  colors: string[];
  storageOptions: StorageOption[];
  detailedSpecs?: DetailedSpecs;
  manufacturerUrl?: string;
  screenSizeInches?: number;
  waterResistance?: string;
  featureSections?: FeatureSection[];
  variants?: Variant[];
}

export interface Category {
  name: string;
  icon?: ReactNode;
  imageUrl?: string;
  path?: string;
}

export interface HeroSlide {
  id: number;
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  productId?: number;
  textPosition?: 'left' | 'right' | 'top-center' | 'bottom-left';
}

export interface Brand {
    id: number;
    name: string;
    logoUrl?: string;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}