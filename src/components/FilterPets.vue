<template>
  <div class="relative flex flex-col items-center justify-center text-center pt-6 mb-6 bg-white w-full p-6 border shadow">
    <!-- Filter Toggle Button for Mobile -->
    <button @click="toggleFilters" class="md:hidden bg-blue-500 text-white px-4 py-2 rounded-full mb-4 flex items-center border">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v5a1 1 0 01-.293.707l-7 7V20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3.293l-7-7A1 1 0 013 9V4z" />
      </svg>
      Filter
    </button>

    <!-- Filter Form -->
    <form :class="`w-full max-w-md ${isFiltersVisible ? '' : 'hidden'} md:grid`">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
        <!-- Breed -->
        <div class="col-span-1">
          <label for="breed" class="block text-black text-sm font-bold mb-2">Breed</label>
          <select id="breed"
            class="form-select block w-full mt-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300">
            <option>All</option>
            <option>Breed 1</option>
            <option>Breed 2</option>
          </select>
        </div>

        <!-- Color -->
        <div class="col-span-1">
          <label for="color" class="block text-black text-sm font-bold mb-2">Color</label>
          <select id="color"
            class="form-select block w-full mt-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300">
            <option>All</option>
            <option>Color 1</option>
            <option>Color 2</option>
          </select>
        </div>

        <!-- Age -->
        <div class="col-span-1">
          <label for="age" class="block text-black text-sm font-bold mb-2">Age</label>
          <select id="age"
            class="form-select block w-full mt-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300">
            <option>All</option>
            <option>0-1 year</option>
            <option>1-3 years</option>
          </select>
        </div>

        <!-- Type -->
        <div class="col-span-1">
          <label for="type" class="block text-black text-sm font-bold mb-2">Type</label>
          <select id="type"
            class="form-select block w-full mt-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300">
            <option>Dog</option>
            <option>Cat</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Size -->
        <div class="col-span-1">
          <label for="size" class="block text-black text-sm font-bold mb-2">Size</label>
          <select id="size"
            class="form-select block w-full mt-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300">
            <option>Small</option>
            <option>Tall</option>
            <option>Medium</option>
          </select>
        </div>

        <!-- Search by Name -->
        <div class="col-span-1">
          <label for="name" class="block text-black text-sm font-bold mb-2">Search for name</label>
          <input type="text" id="name"
            class="block w-full mt-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300">
        </div>
      </div>

      <button type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full border">
        Filter
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFiltersVisible: false,
    };
  },
  methods: {
    toggleFilters() {
      this.isFiltersVisible = !this.isFiltersVisible;
    }
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
