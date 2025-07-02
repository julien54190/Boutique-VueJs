import type { Category } from './Filters.interface';

export interface ProductInterface {
  _id: string;
  createdAt: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category;
}
