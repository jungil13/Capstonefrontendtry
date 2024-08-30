<template>
  <div class="relative h-screen">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url('dog.jpg')` }"></div>
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 py-6">
      <h1 class="text-4xl sm:text-4xl font-extrabold mb-6">
        Welcome to Cordova Pet Hub
      </h1>

      <div class="flex flex-col sm:flex-row sm:h-10 items-center justify-center mb-6">
        <img src="/cordova.png" alt="Cordova Pet Hub Logo"
          class="w-20 h-20 object-cover bg-white rounded-full mb-4 sm:mb-0 sm:mr-4" />
      </div>

      <p class="text-base sm:text-lg max-w-md sm:max-w-xl mb-8 font-semibold">
        "Discover a world filled with adorable pets. You can add your pet for adoption, browse to adopt one, report your lost pet, or report if you've found one. Join our community to connect with other pet lovers, find tips and advice, and learn more about taking care of your furry friends."
      </p>

      <button @click="goToSignUp" class="bg-yellow-500 text-black font-extrabold py-2 px-6 rounded hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-105">
        Sign Up Now
      </button>
    </div>


    <div class="">
      <!-- Latest Pets Posted -->
      <section class="relative flex flex-col items-center justify-center text-center pt-6 mb-6">
        <h2 class="text-4xl text-gray-700 font-extrabold">Latest Pet Posted</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full px-4 bg-white py-14">
          <div v-for="pet in latestPets" :key="pet.id"
            class="bg-white shadow-sm shadow-black rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <img :src="pet.image" :alt="pet.name" class="w-full h-40 object-cover rounded-t-lg" />
            <h3 class="text-xl font-semibold text-gray-800 mt-2">{{ pet.name }}</h3>
            <p class="text-gray-600 mb-6">{{ pet.description }}</p>
            <p class="mb-6 font-bold text-green-500">Available</p>
            <RouterLink to="/petdetails" class="bg-blue-500 text-white px-4 py-2 rounded hover :bg-blue-700 mt-4">
              View Details
          </RouterLink>
          </div>
          <div>
          </div>
          <div class="">
          <button @click="goToSignUp" class="bg-white p-4 text-blue-500 font-semibold shadow-sm shadow-black py-2 w-auto rounded-lg transform transition-transform duration-300 hover:scale-105">
            View All
          </button>
        </div>
        </div>
      </section>

      <!-- About -->
      <div class=" border mx-auto bg-white p-8 rounded-lg shadow-lg py-28">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800">About Us</h1>
        <p class="mt-2 text-gray-600 text-lg">
          Welcome to Cordova Pet Hub – your one-stop destination for pet adoption, lost and found pets, and a vibrant pet forum.
        </p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p class="text-gray-700">
            At Cordova Pet Hub, we believe in finding loving homes for every pet and reuniting lost pets with their families. Our mission is to create a compassionate community for pet lovers and provide the tools needed to support pets in need.
          </p>
        </div>
  
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li class="mb-2">Pet Adoption: Browse and adopt pets looking for their forever homes.</li>
            <li class="mb-2">Lost & Found: Report and search for lost pets in your area.</li>
            <li class="mb-2">Pet Forum: Connect with fellow pet enthusiasts and share tips, stories, and advice.</li>
          </ul>
        </div>
      </div>
  
      <div class="mt-8 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p class="text-gray-700 mb-4">
          Become a part of our community and make a difference in the lives of pets and their families. Together, we can create a better world for our furry friends.
        </p>
        <RouterLink to="/contact" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">
          Get In Touch
        </RouterLink>
      </div>
    </div>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-8 mt-4">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div class="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h5 class="text-lg font-semibold">Pet Adoption</h5>
            <p class="mt-2 text-sm">Contact us: <a href="mailto:info@petadoption.com"
                class="underline hover:text-gray-400">info@petadoption.com</a></p>
      </div>
          <div class="text-sm text-center md:text-right">
            <p>© 2024 Pet Adoption. All rights reserved.</p>
            <p>Developed by: Jun Gil</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goToSignUp = () => {
      router.push('/register');
    };

    return {
      latestPets: [
        {
          id: 1,
          name: 'Bella',
          description: 'A friendly and playful puppy looking for a loving home.',
          image: 'bella.jpg',
        },
        {
          id: 2,
          name: 'Max',
          description: 'A calm and affectionate cat who loves to cuddle.',
          image: 'max.jpg',
        },
        {
          id: 3,
          name: 'Bella',
          description: 'A calm and affectionate cat who loves to cuddle.',
          image: 'nigs.jpg',
        },
        // Add more pet objects as needed
      ],
      goToSignUp,
    };
  },
};
</script>

<style scoped>
/* Ensure the background image covers the entire screen */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}
</style>
