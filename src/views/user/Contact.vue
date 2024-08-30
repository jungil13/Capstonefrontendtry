<template>
    <div class="mt-24">
    <div class="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg py-28">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 ">Contact Us</h1>
        <p class="mt-2 text-gray-600 text-lg">
          We’d love to hear from you! Reach out to us via email or connect with us on Facebook.
        </p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Email Contact -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Email Us</h2>
          <p class="text-gray-700 mb-4">
            For any inquiries, feedback, or support, feel free to email us directly.
          </p>
          <a href="mailto:cph@gmail.com" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">
            Contact Us
          </a>
        </div>
  
        <!-- Facebook Contact -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Connect on Facebook</h2>
          <p class="text-gray-700 mb-4">
            Stay updated with our latest news and updates by following us on Facebook.
          </p>
          <a href="https://www.facebook.com/CordovaPetHub" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105">
            Follow Us
          </a>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
  }
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>
  