<template>
  <div class="account-page">
    <div class="header">
      <h1>Личный кабинет</h1>
      <button @click="handleLogout" class="logout-btn">Выход</button>
    </div>

    <div class="filters">
      <h2>Фильтр</h2>
      <div class="filter-group">
        <div class="date-filters">
          <div class="filter-item">
            <label>Дата от:</label>
            <input 
              type="date" 
              v-model="filters.dateFrom"
              @change="applyFilters"
            />
          </div>
          <div class="filter-item">
            <label>Дата до:</label>
            <input 
              type="date" 
              v-model="filters.dateTo"
              @change="applyFilters"
            />
          </div>
        </div>
        <div class="category-filter">
          <label>Категории:</label>
          <div class="categories-list">
            <label v-for="category in productStore.categories" :key="category">
              <input 
                type="checkbox"
                :value="category"
                v-model="filters.selectedCategories"
                @change="applyFilters"
              />
              {{ category }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="products-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Статус</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Дата создания</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productStore.filteredProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.date_created }}</td>
            <td>{{ product.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useProductStore } from '~/stores/products';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();
const productStore = useProductStore();

const filters = ref({
  dateFrom: '',
  dateTo: '',
  selectedCategories: [] as string[]
});

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/');
  }
});

const applyFilters = () => {
  productStore.setDateFilter(filters.value.dateFrom, filters.value.dateTo);
  productStore.setCategories(filters.value.selectedCategories);
};

const handleLogout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style lang="scss" scoped>
.account-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logout-btn {
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
}

.filters {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
  }
}

.filter-group {
  display: grid;
  gap: 1rem;
}

.date-filters {
  display: flex;
  gap: 1rem;
}

.filter-item {
  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
}

.category-filter {
  .categories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.5rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}

.products-table {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f8f9fa;
      font-weight: 600;
    }

    tr:hover {
      background-color: #f8f9fa;
    }
  }
}
</style> 