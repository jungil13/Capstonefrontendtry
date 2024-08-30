<template>
    <div class="w-full">
      <Account />
  
      <!-- Profile Summary Header -->
      <div class="bg-white p-5 text-center shadow-xl mb-8">
        <h1 class="text-2xl text-gray-700 font-extrabold mb-6">Profile Summary</h1>
      </div>
  
      <!-- User Details Section -->
      <div class="bg-white p-6 m-12 shadow-black text-center shadow-sm mb-8">
        <div v-if="!isEditing">
          <p class="mb-4"><strong>Email:</strong> {{ user.email }}</p>
          <p class="mb-4"><strong>Password:</strong> *********</p>
          <p class="mb-4"><strong>Mobile Number:</strong> {{ user.mobile }}</p>
          <p class="mb-4"><strong>Bio:</strong> {{ user.bio }}</p>
          <p class="mb-4"><strong>Address:</strong> {{ user.address }}</p>
          <button
            @click="toggleEdit"
            class="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Edit Profile
          </button>
        </div>
  
        <div v-else>
          <div class="mb-4">
            <label class="block text-left font-semibold text-gray-700">Email</label>
            <input
              v-model="editableUser.email"
              type="email"
              class="border border-gray-300 p-2 w-full rounded"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-left font-semibold text-gray-700">Password</label>
            <input
              v-model="editableUser.password"
              type="password"
              class="border border-gray-300 p-2 w-full rounded"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-left font-semibold text-gray-700">Mobile Number</label>
            <input
              v-model="editableUser.mobile"
              type="text"
              class="border border-gray-300 p-2 w-full rounded"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-left font-semibold text-gray-700">Bio</label>
            <textarea
              v-model="editableUser.bio"
              class="border border-gray-300 p-2 w-full rounded"
            ></textarea>
          </div>
  
          <div class="mb-4">
            <label class="block text-left font-semibold text-gray-700">Address</label>
            <input
              v-model="editableUser.address"
              type="text"
              class="border border-gray-300 p-2 w-full rounded"
            />
          </div>
  
          <button
            @click="saveProfile"
            class="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            @click="toggleEdit"
            class="bg-gray-500 text-white py-2 px-4 rounded ml-2"
          >
            Cancel
          </button>
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
        isEditing: false,
        user: {
          email: "mikhaasim@example.com",
          password: "password123",
          mobile: "+1234567890",
          bio: "bini biot.",
          address: "123 Main St, City, Country",
        },
        editableUser: {
          email: "",
          password: "",
          mobile: "",
          bio: "",
          address: "",
        },
      };
    },
    methods: {
      toggleEdit() {
        this.isEditing = !this.isEditing;
        if (this.isEditing) {
          this.editableUser = { ...this.user };
        }
      },
      saveProfile() {
        this.user = { ...this.editableUser };
        this.isEditing = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Scoped CSS for additional styling */
  </style>
  