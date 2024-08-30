<template>
    <div class="mt-16">
    <div class="w-full h-full mx-auto bg-white p-8 rounded-xl py-24 text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Support Us</h1>
      <p class="text-gray-700 mb-6">
        We appreciate your support to keep our system running smoothly. Please consider making a donation to help us continue our mission.
      </p>
  
      <div class="text-center">
        <p class="text-xl font-semibold text-gray-800 mb-4">Scan this QR code to donate via GCash:</p>
        <div class="relative inline-block cursor-pointer">
          <img
            src="/gcash.jpg"
            alt="Donate via GCash"
            class="w-64 h-64 object-cover mx-auto rounded-lg shadow-md hover:opacity-75"
            @click="openModal"
          />
          <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeModal">
            <div class="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto">
              <img
                src="/gcash.jpg"
                alt="Donate via GCash"
                class="w-full h-auto"
              />
              <button @click="closeModal" class="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'DonationsPage',
    data() {
      return {
        isModalOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
  }
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>
  