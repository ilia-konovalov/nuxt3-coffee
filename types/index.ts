export interface User {
  login: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  status: 'active' | 'inactive';
  price: number;
  category: string;
  date_created: string;
  description: string;
} 