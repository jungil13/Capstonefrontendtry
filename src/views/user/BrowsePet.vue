<template>
    <div class="space-y-6 mt-16">
        <!-- Carousel Section -->
        <div class="space-y-6">
            <!-- Carousel Component -->
            <div class="relative flex flex-col items-center justify-center text-center pt-6">
                <carousel-component :items="carouselItems" />
            </div>
            <!-- Filter Section -->
           <FilterPets/>


            <!-- Animal Cards -->
            <div class="relative flex flex-col items-center justify-center text-center pt-6 mb-2">
                <h2 class="text-4xl text-gray-700 font-extrabold">Browse for Pets<span
                        class="material-symbols-outlined ml-2">
                        pets
                    </span></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full px-4 bg-white py-14">
                    <div
                        class="bg-white shadow-sm shadow-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/dogie.jpg" alt="Animal Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold">Animal Name</h3>
                            <p class="text-gray-600 mb-6">Breed: Animal Breed</p>
                            <p class="mb-6 font-bold text-green-500">Available</p>
                            <router-link to="/petdetails"
                                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-sm shadow-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/dogie.jpg" alt="Animal Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold">Animal Name</h3>
                            <p class="text-gray-600 mb-6">Breed: Animal Breed</p>
                            <p class="mb-6 font-bold text-green-500">Available</p>
                            <router-link to="/petdetails"
                                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-sm shadow-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/dogie.jpg" alt="Animal Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold">Animal Name</h3>
                            <p class="text-gray-600 mb-6">Breed: Animal Breed</p>
                            <p class="mb-6 font-bold text-green-500">Available</p>
                            <router-link to="/petdetails"
                                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-sm shadow-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/dogie.jpg" alt="Animal Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold">Animal Name</h3>
                            <p class="text-gray-600 mb-6">Breed: Animal Breed</p>
                            <p class="mb-6 font-bold text-green-500">Available</p>
                            <router-link to="/petdetails"
                                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-sm shadow-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/dogie.jpg" alt="Animal Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold">Animal Name</h3>
                            <p class="text-gray-600 mb-6">Breed: Animal Breed</p>
                            <p class="mb-6 font-bold text-green-500">Available</p>
                            <router-link to="/petdetails"
                                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <div
                        class="bg-white shadow-sm shadow-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/dogie.jpg" alt="Animal Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold">Animal Name</h3>
                            <p class="text-gray-600 mb-6">Breed: Animal Breed</p>
                            <p class="mb-6 font-bold text-green-500">Available</p>
                            <router-link to="/petdetails"
                                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <!-- Repeat the above card structure for each animal -->
                </div>
            </div>
        </div>
    </div>
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
</template>

<script>
import FilterPets from '@/components/FilterPets.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import { RouterLink } from 'vue-router';


export default {
    components: {
        CarouselComponent,
        FilterPets
    },
    data() {
        return {
            carouselItems: [
                { src: '/dogie.jpg', alt: 'Slide 1' },
                { src: '/love.jpg', alt: 'Slide 2' },
                { src: '/dog.jpg', alt: 'Slide 3' }
                // Add more slides as needed
            ]
        };
    }
};
</script>