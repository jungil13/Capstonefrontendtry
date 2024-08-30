<template>
  <header class="bg-white py-4 shadow-md shadow-gray-600 fixed top-0 w-full z-50">
    <div class="container mx-auto flex items-center justify-between px-4 md:px-0">
      <!-- Logo and Site Name -->
      <RouterLink to="/" class="logo text-lg text-gray-600 font-semibold flex items-center">
        <img src="/cphlogo.png" alt="Cordova Pet Hub Logo" class="w-24 h-24 object-cover mr-3" />
        Cordova Pet Hub
      </RouterLink>

      <!-- Mobile Menu Button -->
          
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span class="material-symbols-outlined text-3xl">menu</span>
      </button>

      <!-- Navigation Links (Desktop) -->
      <nav class="hidden md:flex items-center space-x-6">
        <RouterLink
          to="/browse"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >Browse Pet</RouterLink>
        <RouterLink
          to="/addpet"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >Add Pet</RouterLink>
        <RouterLink
          to="/lostlist"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >Lost And Found</RouterLink>
        <RouterLink
          to="/about"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >About</RouterLink>
        <RouterLink
          to="/general"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >Forum</RouterLink>
        <RouterLink
          to="/contact"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >Contact Us</RouterLink>
        <RouterLink
          to="/donations"
          class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105"
        >Donations</RouterLink>
      </nav>

      <!-- Authentication Links (Desktop) -->
      <div class="hidden md:flex items-center space-x-4">
        <div>
        <Profile/>
      </div>
        <RouterLink
          to="/login"
          class="hidden bg-slate-500 text-white font-semibold py-2 px-4 rounded text-sm flex items-center space-x-2 shadow shadow-lg shadow-gray-700 transform transition-transform duration-300 hover:scale-105"
        >
          <span>Login</span>
          <span class="material-symbols-outlined">login</span>
        </RouterLink>
        <RouterLink
          to="/register"
          class="hidden bg-slate-500 text-white font-semibold py-2 px-4 rounded text-sm flex items-center space-x-2 shadow shadow-lg shadow-gray-700 transform transition-transform duration-300 hover:scale-105"
        >
          <span>Register</span>
          <span class="material-symbols-outlined">app_registration</span>
        </RouterLink>
      </div>
    </div>

    <!-- Drawer Menu (Mobile) -->
    <div
      :class="['md:hidden fixed inset-0 bg-white z-40 transition-transform transform', isMenuOpen ? 'translate-x-0' : 'translate-x-full']"
      class="flex flex-col items-center justify-center p-8 space-y-4"
    >
      <button
        @click="isMenuOpen = false"
        class="absolute top-5 right-5 text-gray-600 focus:outline-none"
        aria-label="Close menu"
      >
        <span class="material-symbols-outlined text-3xl">close</span>
      </button>
      <img src="/cphlogo.png" alt="Cordova Pet Hub Logo" class="w-40 h-40 object-cover mr-3" />
      <RouterLink
        to="/browse"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >Browse Pet</RouterLink>
      <RouterLink
        to="/addpet"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >Add Pet</RouterLink>
      <RouterLink
        to="/lostlist"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >Lost And Found</RouterLink>
      <RouterLink
        to="/about"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >About</RouterLink>
      <RouterLink
        to="/general"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >Forum</RouterLink>
      <RouterLink
        to="/contact"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >Contact Us</RouterLink>
      <RouterLink
        to="/donations"
        @click="isMenuOpen = false"
        class="text-md font-semibold text-gray-600 hover:bg-gray-600 rounded-lg hover:text-white transform transition-transform duration-500 hover:scale-105 w-full text-center"
      >Donations</RouterLink>
      <div class="bg-gray-500 w-full shadow border border-gray-200"></div>
      <Profile/>
      <div class="bg-gray-500 w-full shadow border border-gray-200"></div>
      <RouterLink
        to="/login"
        @click="isMenuOpen = false"
        class="bg-slate-500 text-white font-semibold py-2 px-4 rounded text-sm w-full text-center"
      >Login</RouterLink>
      <RouterLink
        to="/register"
        @click="isMenuOpen = false"
        class="bg-slate-500 text-white font-semibold py-2 px-4 rounded text-sm w-full text-center"
      >Register</RouterLink>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Profile from "@/views/user/Profile.vue";

const isMenuOpen = ref(false);


</script>
<style scoped>
nav {
  font-family: "Inconsolata", monospace;
}
.logo {
  font-family: cursive;
}
</style>
