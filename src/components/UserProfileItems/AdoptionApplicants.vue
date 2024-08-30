<template>
    <div class="w-full">
      <Account />
  
      <!-- Manage Pet Listings Header -->
      <div class="bg-white p-5 text-center shadow-xl mb-8 mx-6 rounded-lg">
        <h1 class="text-2xl text-gray-700 font-extrabold">Adoption Applicants</h1>
      </div>
  
      <!-- Pet Listings Section -->
      <div class="p-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Adoption Application Card -->
          <div
            v-for="application in adoptionApplications"
            :key="application.application_id"
            class="bg-white rounded-lg shadow-md overflow-hidden shadow-black"
          >
            <div class="p-5">
              <!-- User Name -->
              <h2 class="text-lg font-semibold text-gray-800">
                Applicant: {{ application.applicant_name }}
              </h2>
              <!-- Pet Image -->
              <img
                :src="application.pet_image"
                :alt="application.pet_name"
                class="w-full h-40 object-cover rounded-lg mt-4"
              />
              <!-- Pet Name and Description -->
              <div class="mt-4">
                <h3 class="text-xl font-bold text-gray-700">
                  Pet: {{ application.pet_name }}
                </h3>
                <p class="text-gray-600 mt-2">{{ application.description }}</p>
              </div>
              <!-- View Application Button -->
              <button
                @click="openApplicationModal(application)"
                class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                View Application Form
              </button>
              <!-- Approve and Reject Buttons -->
              <div class="flex justify-between mt-4">
                <button
                  @click="approveApplication(application.application_id)"
                  class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  @click="rejectApplication(application.application_id)"
                  class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
          <!-- End of Adoption Application Card -->
        </div>
      </div>
  
      <!-- Application Form Modal -->
      <ApplicationFormModal
        :isVisible="isModalVisible"
        :application="selectedApplication"
        @close="closeApplicationModal"
      />
    </div>
  </template>
  
  <script>
  import Account from "@/views/user/Profile/Account.vue";
  import ApplicationFormModal from "@/components/UserProfileItems/ApplicationFormModal.vue";
  
  export default {
    components: {
      Account,
      ApplicationFormModal,
    },
    data() {
      return {
        adoptionApplications: [
          // Sample data
          {
            application_id: 1,
            applicant_name: "John Doe",
            address:"IntraMaot",
            email:"john@dsdada.com",
            pet_name: "Buddy",
            pet_image: "/dogie.jpg",
            description: "A friendly golden retriever who loves to play fetch.",
            petExperience: "Intermediate",
            homeEnvironment: "House",
            otherPets: "Yes",
            childrenAtHome: "No",
            reasonForAdoption: "Looking for a companion for my family.",
          },
          // More sample applications
        ],
        isModalVisible: false,
        selectedApplication: null,
      };
    },
    methods: {
      openApplicationModal(application) {
        this.selectedApplication = application;
        this.isModalVisible = true;
      },
      closeApplicationModal() {
        this.isModalVisible = false;
        this.selectedApplication = null;
      },
      approveApplication(applicationId) {
        // Logic to approve the application
        console.log("Approving application ID:", applicationId);
      },
      rejectApplication(applicationId) {
        // Logic to reject the application
        console.log("Rejecting application ID:", applicationId);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  