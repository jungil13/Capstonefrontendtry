<template>
  <div class="mt-6">
    <div class="relative flex flex-col items-center justify-center text-center py-16">
      <div class="relative w-full h-64">
        <img src="/losts.jpg" alt="Lost or Found Pets" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
    <div class="relative flex flex-col items-center justify-center text-center my-8">
      <h1 class="text-gray-700 text-3xl font-extrabold mb-6">
        Lost and Found Pets
        <span class="material-symbols-outlined ml-4">pet_supplies</span>
      </h1>
      <div class="w-full bg-white shadow-xl shadow-gray-500 p-6 rounded-lg">
        <nav class="flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 md:space-x-4">
          <router-link
            to="/lostpet"
            class="bg-white shadow-md shadow-gray-500 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            Report Lost Pet
          </router-link>
          <router-link
            to="/foundpet"
            class="bg-white shadow-md shadow-gray-500 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            Report Found Pet
          </router-link>
          <router-link
            to="/lostlist"
            class="bg-white shadow-md shadow-gray-500 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            Lost Pet Lists
          </router-link>
          <router-link
            to="/foundlist"
            class="bg-white shadow-md shadow-gray-500 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            Found Pet Lists
          </router-link>
          <router-link
            to="/reports"
            class="bg-white shadow-md shadow-gray-500 rounded-lg text-black px-4 py-3 font-semibold transform transition-transform duration-300 hover:scale-105"
          >
            My Reports
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LostAndFoundPets'
}
</script>

<style scoped>
/* Optional: Scoped CSS for additional styling */
</style>
