<template>
    <LostFound/>
    <div class="w-full mx-auto bg-white border border-gray-400 p-5 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold mb-4 text-center md:text-left">My Reports</h1>
      <p class="text-gray-600 text-center md:text-left mb-6">Manage your lost and found pets</p>
  
      <!-- Report Cards Container -->
      <div class="space-y-4">
        <!-- Report Card -->
        <div v-for="report in reports" :key="report.id" class="flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg shadow-sm shadow-black">
          <!-- Pet Image -->
          <img :src="report.image" alt="Pet Picture" class="w-full md:w-1/3 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4">
  
          <!-- Report Details -->
          <div class="flex-1">
            <h2 class="text-xl font-bold text-gray-800">{{ report.name }}</h2>
            <p class="text-gray-600">{{ report.description }}</p>
            <div class="mt-2 flex items-center space-x-4">
              <span :class="report.statusClass" class="text-white px-3 py-1 rounded-full">{{ report.status }}</span>
              <button v-if="report.status !== 'Safe'" class="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Mark as Reunited
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import the required components
  import LostFound from '@/views/user/LostFound.vue';
  
  export default {
    components: {
      LostFound
    },
    data() {
      return {
        // Sample data for reports
        reports: [
          {
            id: 1,
            name: 'Buddy',
            description: 'Lost in Downtown area',
            status: 'Lost',
            statusClass: 'bg-red-500',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 2,
            name: 'Max',
            description: 'Found near Park Avenue',
            status: 'Found',
            statusClass: 'bg-blue-500',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 3,
            name: 'Bella',
            description: 'Safe at home',
            status: 'Safe',
            statusClass: 'bg-green-500',
            image: 'https://via.placeholder.com/150',
          },
          // Add more report objects here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling if necessary */
  </style>
  