<template>
  <div class="mt-16">
    <div class="container mx-auto py-28 px-4">
      <!-- Upload Pet Photo Section -->
      <div class="mb-8">
        <h2 class="text-xl font-extrabold mb-4">Upload Pet Photo</h2>
        <div class="relative border-2 border-dashed border-gray-400 p-6 rounded-lg bg-gray-100 text-center">
          <input type="file" id="pet-photo" class="hidden" @change="handlePetPhotoUpload" />
          <label for="pet-photo" class="cursor-pointer text-blue-500 hover:text-blue-700">
            Click to upload pet photo
          </label>
        </div>
      </div>
  
      <!-- Pet Details Section -->
      <div class="mb-8">
        <h2 class="text-xl font-extrabold mb-4">Pet Details</h2>
        <form @submit.prevent="submitPetDetails">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
              <input type="text" id="name" v-model="petDetails.name" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label for="type" class="block text-gray-700 font-bold mb-2">Type:</label>
              <input type="text" id="type" v-model="petDetails.type" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label for="breed" class="block text-gray-700 font-bold mb-2">Breed:</label>
              <input type="text" id="breed" v-model="petDetails.breed" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label for="color" class="block text-gray-700 font-bold mb-2">Color:</label>
              <input type="text" id="color" v-model="petDetails.color" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label for="age" class="block text-gray-700 font-bold mb-2">Age:</label>
              <input type="number" id="age" v-model="petDetails.age" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label for="sex" class="block text-gray-700 font-bold mb-2">Sex:</label>
              <select id="sex" v-model="petDetails.sex" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label for="size" class="block text-gray-700 font-bold mb-2">Size:</label>
              <select id="size" v-model="petDetails.size" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                <option value="">Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Submit Pet Details</button>
        </form>
      </div>
  
      <!-- Upload Vaccination Certificate Section -->
      <div class="mb-8">
        <h2 class="text-xl font-extrabold mb-4">Upload Vaccination Certificate</h2>
        <div class="relative border-2 border-dashed border-gray-400 p-6 rounded-lg bg-gray-100 text-center">
          <input type="file" id="vaccination-certificate" class="hidden" @change="handleVaccinationUpload" />
          <label for="vaccination-certificate" class="cursor-pointer text-blue-500 hover:text-blue-700">
            Click to upload vaccination certificate
          </label>
        </div>
      </div>
  
      <!-- Description Section -->
      <div class="mb-8">
        <h2 class="text-xl font-extrabold mb-4">Description</h2>
        <textarea v-model="description" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" rows="5" placeholder="Enter description here (required)" required></textarea>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        petDetails: {
          name: '',
          type: '',
          breed: '',
          color: '',
          age: null,
          sex: '',
          size: ''
        },
        description: ''
      };
    },
    methods: {
      handlePetPhotoUpload(event) {
        // Handle pet photo upload
      },
      handleVaccinationUpload(event) {
        // Handle vaccination certificate upload
      },
      submitPetDetails() {
        // Handle form submission
        console.log('Pet details submitted:', this.petDetails, this.description);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  