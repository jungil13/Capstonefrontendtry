<template>
    <div class="relative flex items-center">
        <!-- Dropdown Button -->
        <button @click="toggleDropdown"
            class="ml-3 bg-slate-500 text-white font-semibold rounded-full text-sm flex items-center space-x-2 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="/mikha.jpg" alt="User" class="w-12 h-12 rounded-full border-2 border-gray-300" />
            <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </button>
        <h3 class="mr-8 ml-2 font-semibold cursor-pointer">Mikha Lim</h3>
        <!-- Dropdown Menu -->
        <div class="mt-16">
    <div v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-48 bg-gray-600 border border-gray-300 rounded-lg shadow-lg">
        <RouterLink 
            to="/summary" 
            class="block px-4 py-2 text-white hover:bg-gray-700 font-semibold flex items-center space-x-2"
        >
            <span class="material-symbols-outlined">account_circle</span>
            <span>Account</span>
        </RouterLink>
        <div class="bg-gray-500 w-full h-px my-1"></div>
        <button 
            @click="logout" 
            class="block w-full px-4 py-2 text-white hover:bg-gray-700 font-semibold text-left flex items-center space-x-2"
        >
            <span class="material-symbols-outlined">logout</span>
            <span>Logout</span>
        </button>
    </div>
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// State to handle dropdown visibility
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const logout = () => {
    // Your logout logic here
    console.log('Logging out...');
};
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>