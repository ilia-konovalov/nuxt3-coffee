import { defineStore } from 'pinia';
import type { User } from '~/types';

const MOCK_USER = {
  login: 'admin',
  password: 'password123'
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as User | null,
    error: null as string | null
  }),

  actions: {
    async login(credentials: User) {
      if (credentials.login === MOCK_USER.login && credentials.password === MOCK_USER.password) {
        this.user = credentials;
        this.isAuthenticated = true;
        this.error = null;

        localStorage.setItem('user', JSON.stringify(credentials));
        return true;
      }
      
      this.error = 'Введены неверные данные авторизации. Попробуйте ещё раз';
      return false;
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');
    },

    checkAuth() {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this.user = JSON.parse(savedUser);
        this.isAuthenticated = true;
      }
    }
  }
}); 