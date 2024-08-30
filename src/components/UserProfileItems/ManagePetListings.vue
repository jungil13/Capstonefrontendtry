<template>
    <div class="w-full">
      <Account />
  
      <!-- Manage Pet Listings Header -->
      <div class="bg-white p-5 text-center shadow-xl mb-8 mx-6 rounded-lg">
        <h1 class="text-2xl text-gray-700 font-extrabold">Manage Pet Listings</h1>
      </div>
  
      <!-- Pet Listings Section -->
       <div class="p-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="pet in pets"
          :key="pet.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col shadow-black"
        >
          <!-- Pet Image -->
          <img
            :src="pet.image"
            :alt="`Image of ${pet.name}`"
            class="w-full h-56 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col">
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-bold text-gray-800">{{ pet.name }}</h3>
                <span
                  :class="{
                    'text-yellow-500': pet.status === 'Pending',
                    'text-green-500': pet.status === 'Adopted',
                  }"
                  class="font-bold text-sm"
                >
                  {{ pet.status }}
                </span>
              </div>
              <p class="text-gray-600 text-sm">{{ pet.description }}</p>
            </div>
  
            <div class="mt-auto">
              <button
                @click="showDetails(pet)"
                class="bg-gray-500 text-white py-2 px-4 rounded w-full mb-2"
              >
                Show Details
              </button>
              <div class="flex justify-between">
                <button
                  @click="editPet(pet)"
                  class="bg-blue-500 text-white py-2 px-4 rounded flex-1 mr-2"
                >
                  Edit Pet
                </button>
                <button
                  @click="markAsAdopted(pet)"
                  class="bg-green-500 text-white py-2 px-4 rounded flex-1"
                  :disabled="pet.status === 'Adopted'"
                >
                  Mark as Adopted
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- Pet Details Dialog -->
      <div v-if="selectedPet" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-24">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
          <img :src="selectedPet.image" :alt="`Image of ${selectedPet.name}`" class="w-full h-48 object-cover mb-4" />
          <p><strong>Name:</strong> {{ selectedPet.name }}</p>
          <p><strong>Type:</strong> {{ selectedPet.type }}</p>
          <p><strong>Breed:</strong> {{ selectedPet.breed }}</p>
          <p><strong>Color:</strong> {{ selectedPet.color }}</p>
          <p><strong>Age:</strong> {{ selectedPet.age }}</p>
          <p><strong>Sex:</strong> {{ selectedPet.sex }}</p>
          <p><strong>Size:</strong> {{ selectedPet.size }}</p>
          <p><strong>Vaccination Certificate:</strong> <a :href="selectedPet.vaccinationCertificate" target="_blank" class="text-blue-500 underline">View Certificate</a></p>
          <p><strong>Description:</strong> {{ selectedPet.description }}</p>
          <div class="flex justify-end mt-4">
            <button @click="closeDetails" class="bg-red-500 text-white py-2 px-4 rounded">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import Account from "@/views/user/Profile/Account.vue";

export default {
  components: {
    Account,
  },
  data() {
    return {
      pets: [
        {
          id: 1,
          name: "Buddy",
          type: "Dog",
          breed: "Golden Retriever",
          color: "Golden",
          age: "2 years",
          sex: "Male",
          size: "Large",
          status: "Pending",
          description: "A friendly golden retriever looking for a loving home.",
          image: "/dog.jpg",
          vaccinationCertificate: "/certificates/buddy.pdf",
        },
        {
          id: 2,
          name: "Mittens",
          type: "Cat",
          breed: "Siamese",
          color: "Cream",
          age: "1 year",
          sex: "Female",
          size: "Small",
          status: "Adopted",
          description: "A playful kitten that has found a new home.",
          image: "/cat.jpg",
          vaccinationCertificate: "/certificates/mittens.pdf",
        },
        {
          id: 3,
          name: "Shadow",
          type: "Cat",
          breed: "Domestic Shorthair",
          color: "Black",
          age: "3 years",
          sex: "Male",
          size: "Medium",
          status: "Pending",
          description: "A quiet black cat that enjoys being alone.",
          image: "/dogie.jpg",
          vaccinationCertificate: "/certificates/shadow.pdf",
        },
      ],
      selectedPet: null,
    };
  },
  methods: {
    showDetails(pet) {
      this.selectedPet = pet;
    },
    closeDetails() {
      this.selectedPet = null;
    },
    editPet(pet) {
      // Logic to edit the pet's details
      alert(`Editing details for ${pet.name}`);
    },
    markAsAdopted(pet) {
      // Logic to mark the pet as adopted
      if (pet.status !== "Adopted") {
        pet.status = "Adopted";
      }
    },
  },
};
</script>
  