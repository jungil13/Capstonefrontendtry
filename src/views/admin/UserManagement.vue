<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <!-- Page Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">User Management</h1>
        <div class="flex justify-between items-center">
          <!-- Search Bar -->
          <div class="relative w-1/3">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="material-icons text-gray-500">search</span>
            </span>
            <input
              type="text"
              class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search users..."
            />
          </div>
        </div>
      </div>
  
      <!-- Users Table -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th class="py-3 px-6 text-left">Name</th>
              <th class="py-3 px-6 text-left">Email</th>
              <th class="py-3 px-6 text-center">Role</th>
              <th class="py-3 px-6 text-center">Status</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <!-- Example User Row -->
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <span class="font-medium">Jane Doe</span>
              </td>
              <td class="py-3 px-6 text-left">
                <span>jane.doe@example.com</span>
              </td>
              <td class="py-3 px-6 text-center">
                <span>Admin</span>
              </td>
              <td class="py-3 px-6 text-center">
                <span class="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">Active</span>
              </td>
              <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center space-x-2">
                  <!-- View Button -->
                  <button
                    class="w-8 h-8 rounded-full hover:bg-blue-100 flex items-center justify-center"
                    @click="viewUser"
                  >
                    <span class="material-icons text-blue-500">visibility</span>
                  </button>
                  <!-- Edit Button -->
                  <button
                    class="w-8 h-8 rounded-full hover:bg-yellow-100 flex items-center justify-center"
                    @click="editUser"
                  >
                    <span class="material-icons text-yellow-500">edit</span>
                  </button>
                  <!-- Delete Button -->
                  <button
                    class="w-8 h-8 rounded-full hover:bg-red-100 flex items-center justify-center"
                    @click="deleteUser"
                  >
                    <span class="material-icons text-red-500">delete</span>
                  </button>
                </div>
              </td>
            </tr>
            <!-- Add more user rows as needed -->
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
  
  function viewUser() {
    // Function to view user details
    alert("View User Details Coming Soon!");
  }
  
  function editUser() {
    // Function to edit user information
    alert("Edit User Functionality Coming Soon!");
  }
  
  function deleteUser() {
    // Function to delete a user
    alert("User Deleted Successfully!");
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
  