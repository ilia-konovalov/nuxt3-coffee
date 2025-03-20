<template>
  <div class="login-page">
    <div class="login-form">
      <h1>Вход в систему</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="login">Логин:</label>
          <input 
            id="login"
            v-model="form.login"
            type="text"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input 
            id="password"
            v-model="form.password"
            type="password"
            required
          />
        </div>
        <div v-if="authStore.error" class="error-message">
          {{ authStore.error }}
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  login: '',
  password: ''
});

onMounted(() => {
  authStore.checkAuth();
  if (authStore.isAuthenticated) {
    router.push('/account');
  }
});

const handleLogin = async () => {
  const success = await authStore.login(form.value);
  if (success) {
    router.push('/account');
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
}

.form-group {
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
}

.error-message {
  color: red;
  margin: 1rem 0;
  text-align: center;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }
}
</style> 