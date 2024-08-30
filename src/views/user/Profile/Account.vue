<template>
  <div class="mt-10">
    <div class="relative flex flex-col items-center justify-center text-center py-16">
    </div>
    
    <div class="relative flex flex-col items-center justify-center text-center mb-8">
      <h1 class="text-gray-700 text-4xl font-extrabold mb-2">Account
      </h1>
      <div class="w-full bg-white shadow-lg shadow-gray-400 p-6 rounded-lg">
        <nav class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-around">
          <router-link
            to="/summary"
            class="bg-white shadow-md shadow-gray-400 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
          Profile Summary
          </router-link>
          <router-link
            to="/managepetlistings"
            class="bg-white shadow-md shadow-gray-400 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            Manage Pet Listings
          </router-link>
          <router-link
            to="/applicants"
            class="bg-white shadow-md shadow-gray-400 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            Adoption Applicants
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add any necessary script here
};
</script>

<style scoped>
/* Optional: Scoped CSS for additional styling */
</style>
