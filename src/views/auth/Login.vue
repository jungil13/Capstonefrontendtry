<template>
  <div class="mt-16">
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4 relative py-24">
    <div class="bg-sky-900 absolute inset-0 object-cover w-full h-full">  
    </div>
    <div class="relative w-full max-w-lg p-10 bg-white rounded-lg shadow shadow-lg shadow-gray-800 transform transition-transform duration-500 hover:scale-105">
      <h1 class="text-3xl font-bold mb-8 text-center text-gray-700">Login <span class="material-symbols-outlined">pet_supplies</span></h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-600 mb-2 ">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-8">
          <label for="password" class="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full py-3 px-6 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
      <p class="mt-6 text-center text-gray-600">
        <router-link to="/register" class="text-blue-500 hover:underline">Don't have an account? Register</router-link>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Implement login logic here
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
