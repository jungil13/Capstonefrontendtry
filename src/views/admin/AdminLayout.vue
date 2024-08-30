<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-0 bg-gray-800 text-white p-4 transition-transform transform lg:relative lg:translate-x-0 lg:w-64',
        drawerOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <button
        @click="toggleDrawer"
        class="text-2xl lg:hidden absolute top-4 right-12 focus:outline-none"
      >
        ✕
      </button>
      <div class="mb-10">
        <h1 class="text-2xl font-bold mt-6">Admin Panel</h1>
      </div>
      <nav>
        <ul>
          <li class="mb-6">
            <RouterLink
              to="/dashboard"
              class="font-semibold text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded flex items-center"
            >
              <span class="material-icons mr-2">dashboard</span>
              Dashboard
            </RouterLink>
          </li>
          <div class="bg-gray-500 w-full h-px my-4"></div>
          <li class="mb-6">
            <RouterLink
              to="/usermanagement"
              class="font-semibold text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded flex items-center"
            >
              <span class="material-icons mr-2">people</span>
              User Management
            </RouterLink>
          </li>
          <div class="bg-gray-500 w-full h-px my-4"></div>
          <li class="mb-6">
            <RouterLink
              to="/petmanagement"
              class="font-semibold text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded flex items-center"
            >
              <span class="material-icons mr-2">pets</span>
              Pet Management
            </RouterLink>
          </li>
          <div class="bg-gray-500 w-full h-px my-4"></div>
          <li class="mb-6">
            <RouterLink
              to="/applicationmanagement"
              class="font-semibold text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded flex items-center"
            >
              <span class="material-icons mr-2">assignment</span>
              Adoption Application Management
            </RouterLink>
          </li>
          <div class="bg-gray-500 w-full h-px my-4"></div>
          <li class="mb-6">
            <RouterLink
              to="/reportmanagement"
              class="font-semibold text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded flex items-center"
            >
              <span class="material-icons mr-2">search</span>
              Lost and Found Report Management
            </RouterLink>
          </li>
          <div class="bg-gray-500 w-full h-px my-4"></div>
          <li class="mb-6">
            <RouterLink
              to="/forummanagement"
              class="font-semibold text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded flex items-center"
            >
              <span class="material-icons mr-2">forum</span>
              Forum Management
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <header class="flex items-center justify-between bg-white shadow-md p-4 mb-6">
        <button @click="toggleDrawer" class="text-2xl lg:hidden focus:outline-none">
          ☰
        </button>
        <div class="text-xl font-bold">Cordova Pet Hub: Admin Dashboard</div>
        <div class="flex items-center">
          <img
            src="/mikha.jpg"
            alt="Admin Avatar"
            class="rounded-full w-12 h-12 object-cover mr-6"
          />
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const drawerOpen = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}
</script>

<style scoped>
.material-icons {
  font-size: 1.5rem; /* Adjust icon size if needed */
}
</style>
