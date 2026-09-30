export interface Service {
  id: string;
  name: string;
  category: string;
  image: string;
  priceLabel: string;
  costs?: string[];
  duration: string;
  description: string;
  benefits: string[];
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  benefit: string;
  description: string;
}

export interface Promotion {
  id: string;
  name: string;
  image: string;
  headline: string;
  priceLabel: string;
  originalPriceLabel?: string;
  validity: string;
  includes: string[];
  conditions: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface Tip {
  id: string;
  icon: string;
  title: string;
  text: string;
}
