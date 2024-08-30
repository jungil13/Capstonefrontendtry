<template>
  <div class="mt-16">
    <div class="relative flex flex-col items-center justify-center text-center py-24">
      <h2 class="text-4xl text-gray-700 font-extrabold">Fill up this form to proceed!</h2>
      <div class="mt-6 bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 mb-6 transform transition-transform duration-300 hover:scale-105">
        <form class="space-y-4">
          <!-- Question 1: Name -->
          <div class="flex flex-col items-start">
            <label for="name" class="text-gray-700 font-semibold">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <!-- Question 2: Contact Information -->
          <div class="flex flex-col items-start">
            <label for="contact" class="text-gray-700 font-semibold">Contact Information</label>
            <input type="text" id="contact" placeholder="Enter your phone or email" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <!-- Question 3: Previous Pet Experience -->
          <div class="flex flex-col items-start">
            <label for="experience" class="text-gray-700 font-semibold">Pet Experience:</label>
            <select id="commitment" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>None</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Experienced</option>
            </select>
          </div>
  
          <!-- Question 4: Living Situation -->
          <div class="flex flex-col items-start">
            <label for="living" class="text-gray-700 font-semibold">Home Environment:</label>
            <textarea id="living" placeholder="Do you live in a house, apartment, etc.? Do you have a yard?" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
  
          <!-- Question 5: Commitment Level -->
          <div class="flex flex-col items-start">
            <label for="commitment" class="text-gray-700 font-semibold">Other Pets:</label>
            <select id="commitment" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <!-- question 6 -->
          <div class="flex flex-col items-start">
            <label for="commitment" class="text-gray-700 font-semibold">Children at Home:</label>
            <select id="commitment" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <!-- question 7 -->
          <div class="flex flex-col items-start">
            <label for="contact" class="text-gray-700 font-semibold">Reason for Adoption:</label>
            <input type="text" id="contact" placeholder="Enter your phone or email" class="w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </form>
      </div>
      <RouterLink to="/ongiong" class="bg-slate-800 rounded-lg px-5 py-2 text-white transform transition-transform duration-300 hover:scale-105 mt-6">Submit</RouterLink>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    // Your component logic here (data, methods, etc.)
  };
  </script>
  
  <style scoped>
  /* Optional: Add any scoped styles for this component */
  </style>
  