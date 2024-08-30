<template>
    <div class="mt-16">
      <!-- Pet Images Section -->
      <div class="relative flex flex-col items-center justify-center text-center py-28">
        <h2 class="text-4xl text-gray-700 font-extrabold">Pet Images</h2>
        <div class="mt-6 bg-white shadow-sm shadow-black rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 mb-6 transform transition-transform duration-300 hover:scale-105">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(image, index) in petImages" :key="index" class="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full cursor-pointer" @click="openModal(image.src)">
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
          <div class="flex justify-end p-2">
            <button @click="closeModal" class="text-gray-600 hover:text-gray-900">&times;</button>
          </div>
          <img :src="currentImage" alt="Full-size Pet Image" class="w-full">
        </div>
      </div>
  
      <!-- Vaccine Certificate Section -->
      <div class="relative flex flex-col items-center justify-center text-center pt-6 mb-6">
        <h2 class="text-4xl text-gray-700 font-extrabold">Vaccine Certificate</h2>
        <div class="mt-6 bg-white shadow-sm shadow-black rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 mb-6 transform transition-transform duration-300 hover:scale-105">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(image, index) in certificateImages" :key="index" class="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full cursor-pointer" @click="openModal(image.src)">
            </div>
          </div>
        </div>
      </div>
  
      <!-- Pet Details Section -->
      <div class="relative flex flex-col items-center justify-center text-center pt-6 mb-6">
        <h2 class="text-4xl text-gray-700 font-extrabold">Pet Details</h2>
        <div class="mt-6 bg-white shadow-sm shadow-black rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 mb-6 transform transition-transform duration-300 hover:scale-105">
          <h1 class="font-bold text-xl text-gray-800">Peggy</h1>
          <p class="mb-6 text-md text-green-500 font-bold">Available</p>
          <h1 class="mb-6 font-bold text-xl text-gray-800">Current Owner: <span>Jun Gil Casquejo</span></h1>
          <h1 class="font-semibold text-lg text-gray-700">Details</h1>
          <ul class="text-gray-600 mt-4">
            <li>Type: Dog/Cat</li>
            <li>Breed: Golden Retriever</li>
            <li>Color: Golden</li>
            <li>Age: 2 years</li>
            <li>Sex: Male</li>
            <li>Size: Medium</li>
            <li>Location: New York, NY</li>
          </ul>
        </div>
      </div>
  
      <!-- Pet Description Section -->
      <div class="relative flex flex-col items-center justify-center text-center pt-6 mb-6">
        <h2 class="text-4xl text-gray-700 font-extrabold">Pet Description</h2>
        <div class="mt-6 bg-white shadow-sm shadow-black rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 mb-6 transform transition-transform duration-300 hover:scale-105">
          <p class="text-gray-600">
            This is a friendly and energetic pet looking for a loving home. Loves to play fetch and enjoys being around people. Great with kids and other pets. Needs a home with a yard or plenty of space to run.
          </p>
        </div>
        <RouterLink to="/questions"class="bg-slate-800 rounded-lg px-5 py-2 text-white transform transition-transform duration-300 hover:scale-105 mt-6">Apply to Adopt</RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        petImages: [
          { src: '/bella.jpg', alt: 'Pet Image 1' },
          { src: '/max.jpg', alt: 'Pet Image 2' },
          { src: '/nigs.jpg', alt: 'Pet Image 3' },
          { src: '/dogie.jpg', alt: 'Pet Image 4' }
        ],
        certificateImages: [
          { src: '/vac1.png', alt: 'Vaccine Certificate Image 1' },
          { src: '/vac2.jpg', alt: 'Vaccine Certificate Image 2' }
        ],
        isModalOpen: false,
        currentImage: ''
      };
    },
    methods: {
      openModal(imageSrc) {
        this.currentImage = imageSrc;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.currentImage = '';
      }
    }
  };
  </script>
  
  <style>
  /* Optional: Customize the modal close button and other styles here */
  </style>
  