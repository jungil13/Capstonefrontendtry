<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <!-- Page Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Lost and Found Pet Reports</h1>
        <div class="flex justify-between items-center">
          <!-- Search Bar -->
          <div class="relative w-1/3">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="material-icons text-gray-500">search</span>
            </span>
            <input
              type="text"
              class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search reports..."
            />
          </div>
        </div>
      </div>
  
      <!-- Reports Table -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th class="py-3 px-6 text-left">Reporter Name</th>
              <th class="py-3 px-6 text-left">Pet Description</th>
              <th class="py-3 px-6 text-center">Type</th>
              <th class="py-3 px-6 text-center">Status</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <!-- Example Report Row -->
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <span class="font-medium">Jane Smith</span>
              </td>
              <td class="py-3 px-6 text-left">
                <span>Golden Retriever, male, found near the park</span>
              </td>
              <td class="py-3 px-6 text-center">
                <span class="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">
                  Found
                </span>
              </td>
              <td class="py-3 px-6 text-center">
                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center space-x-2">
                  <!-- View Button -->
                  <button
                    class="w-8 h-8 rounded-full hover:bg-blue-100 flex items-center justify-center"
                    @click="viewReport"
                  >
                    <span class="material-icons text-blue-500">visibility</span>
                  </button>
                  <!-- Mark as Resolved Button -->
                  <button
                    class="w-8 h-8 rounded-full hover:bg-green-100 flex items-center justify-center"
                    @click="markAsResolved"
                  >
                    <span class="material-icons text-green-500">check_circle</span>
                  </button>
                  <!-- Delete Button -->
                  <button
                    class="w-8 h-8 rounded-full hover:bg-red-100 flex items-center justify-center"
                    @click="deleteReport"
                  >
                    <span class="material-icons text-red-500">delete</span>
                  </button>
                </div>
              </td>
            </tr>
            <!-- Add more report rows as needed -->
          </tbody>
        </table>
      </div>
  
      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <button
          class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          <span class="material-icons">navigate_before</span>
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          Next
          <span class="material-icons">navigate_next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentPage = ref(1);
  const totalPages = ref(10); // Example total pages
  
  function viewReport() {
    // Function to view report details
    alert("View Report Details Coming Soon!");
  }
  
  function markAsResolved() {
    // Function to mark a report as resolved
    alert("Report Marked as Resolved!");
  }
  
  function deleteReport() {
    // Function to delete a report
    alert("Report Deleted Successfully!");
  }
  
  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }
  
  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  }
  </script>
  
  <style scoped>
  .material-icons {
    font-size: 1.25rem; /* Adjust icon size */
  }
  </style>
  