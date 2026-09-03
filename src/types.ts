export type ProductCategory = 'destaques' | 'classicas' | 'especiais' | 'doces' | 'bebidas';

export type PizzaSize = 'Média' | 'Grande';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number; // Price for base/default size or unit
  priceLarge?: number; // Optional large size price for pizzas
  image: string;
  isSignature?: boolean;
  tags?: string[];
  isPizza?: boolean;
}

export interface CartItem {
  id: string; // unique item key e.g. productId-size-notesHash
  productId: string;
  name: string;
  category: ProductCategory;
  size?: PizzaSize;
  unitPrice: number;
  quantity: number;
  notes?: string;
  image: string;
}

export type FulfillmentType = 'delivery' | 'retirada';

export interface CheckoutFormData {
  name: string;
  whatsapp: string;
  type: FulfillmentType;
  address: string;
  notes: string;
}

export interface ProcessMetric {
  value: string;
  unit?: string;
  label: string;
  description: string;
}

export interface BusinessConfig {
  name: string;
  subtitle: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappUrl: string;
  address: string;
  cityState: string;
  mapsUrl: string;
  instagramHandle?: string;
  instagramUrl?: string;
  commercialDisclaimer: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
}
