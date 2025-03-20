import { defineStore } from 'pinia';
import type { Product } from '~/types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Ноутбук MacBook Pro',
    status: 'active',
    price: 199999.99,
    category: 'Электроника',
    date_created: '2025-03-19',
    description: 'Мощный ноутбук для профессиональной работы'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    status: 'active',
    price: 129999.99,
    category: 'Электроника',
    date_created: '2025-03-18',
    description: 'Флагманский смартфон с передовыми технологиями'
  },
  {
    id: 3,
    name: 'Кофемашина DeLonghi',
    status: 'active',
    price: 45999.99,
    category: 'Бытовая техника',
    date_created: '2025-03-15',
    description: 'Автоматическая кофемашина с капучинатором'
  },
  {
    id: 4,
    name: 'Кроссовки Nike Air Max',
    status: 'active',
    price: 12999.99,
    category: 'Обувь',
    date_created: '2025-03-17',
    description: 'Спортивные кроссовки с амортизацией'
  },
  {
    id: 5,
    name: 'Пальто зимнее',
    status: 'inactive',
    price: 15999.99,
    category: 'Одежда',
    date_created: '2025-02-20',
    description: 'Теплое зимнее пальто из шерсти'
  },
  {
    id: 6,
    name: 'Холодильник Samsung',
    status: 'active',
    price: 89999.99,
    category: 'Бытовая техника',
    date_created: '2025-03-10',
    description: 'Двухкамерный холодильник с системой No Frost'
  },
  {
    id: 7,
    name: 'Книга "Чистый код"',
    status: 'active',
    price: 1299.99,
    category: 'Книги',
    date_created: '2025-03-01',
    description: 'Бестселлер по программированию'
  },
  {
    id: 8,
    name: 'Игровая приставка PS5',
    status: 'inactive',
    price: 49999.99,
    category: 'Электроника',
    date_created: '2025-02-25',
    description: 'Консоль последнего поколения'
  },
  {
    id: 9,
    name: 'Велосипед горный',
    status: 'active',
    price: 35999.99,
    category: 'Спорт',
    date_created: '2025-03-12',
    description: 'Горный велосипед с дисковыми тормозами'
  },
  {
    id: 10,
    name: 'Фотоаппарат Canon',
    status: 'active',
    price: 69999.99,
    category: 'Электроника',
    date_created: '2025-03-05',
    description: 'Зеркальный фотоаппарат с двумя объективами'
  },
  {
    id: 11,
    name: 'Умные часы Apple Watch',
    status: 'active',
    price: 39999.99,
    category: 'Электроника',
    date_created: '2025-03-16',
    description: 'Смарт-часы с мониторингом здоровья'
  },
  {
    id: 12,
    name: 'Диван угловой',
    status: 'active',
    price: 89999.99,
    category: 'Мебель',
    date_created: '2025-03-08',
    description: 'Удобный угловой диван с раскладным механизмом'
  },
  {
    id: 13,
    name: 'Гантели разборные',
    status: 'active',
    price: 8999.99,
    category: 'Спорт',
    date_created: '2025-03-14',
    description: 'Набор разборных гантелей с блинами'
  },
  {
    id: 14,
    name: 'Рюкзак туристический',
    status: 'inactive',
    price: 5999.99,
    category: 'Туризм',
    date_created: '2025-02-28',
    description: 'Вместительный рюкзак для походов'
  },
  {
    id: 15,
    name: 'Микроволновая печь',
    status: 'active',
    price: 12999.99,
    category: 'Бытовая техника',
    date_created: '2025-03-11',
    description: 'Микроволновая печь с грилем'
  }
];

export const useProductStore = defineStore('products', {
  state: () => ({
    products: MOCK_PRODUCTS,
    filters: {
      dateFrom: '',
      dateTo: '',
      selectedCategories: [] as string[]
    }
  }),

  getters: {
    filteredProducts: (state) => {
      return state.products.filter(product => {
        const dateMatch = !state.filters.dateFrom || !state.filters.dateTo || (
          product.date_created >= state.filters.dateFrom &&
          product.date_created <= state.filters.dateTo
        );

        const categoryMatch = state.filters.selectedCategories.length === 0 ||
          state.filters.selectedCategories.includes(product.category);

        return dateMatch && categoryMatch;
      });
    },

    categories: (state) => {
      return [...new Set(state.products.map(p => p.category))];
    }
  },

  actions: {
    setDateFilter(from: string, to: string) {
      this.filters.dateFrom = from;
      this.filters.dateTo = to;
    },

    setCategories(categories: string[]) {
      this.filters.selectedCategories = categories;
    }
  }
}); 