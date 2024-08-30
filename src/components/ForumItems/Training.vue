<template>
  <div class="w-full">
    <Forum />
    <div class="bg-white p-5 text-center shadow-xl mb-8">
      <h1 class="text-2xl text-gray-700 font-extrabold mb-6">Training and Behavior Forum</h1>
      <button
        @click="addNewTopic"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transform transition-transform hover:scale-105 duration-300"
      >
        Add New Topic
      </button>
    </div>

    <div
      v-for="topic in topics"
      :key="topic.id"
      @click="viewTopic(topic.id)"
      class="w-full bg-white p-5 shadow-lg mb-4 rounded-lg border border-gray-800 cursor-pointer"
    >
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-xl font-bold text-gray-800 mb-4">{{ topic.title }}</h2>
          <p class="text-gray-600">{{ topic.description }}</p>
          <p class="text-sm text-gray-500 mb-4">Posted by {{ topic.userName }}</p>
        </div>
        <div class="text-center">
          <span class="text-blue-700 font-semibold">{{ topic.comments }} Comments</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the required components
import Forum from "@/views/user/Forum.vue";

export default {
  components: {
    Forum,
  },
  data() {
    return {
      topics: [
        {
          id: 1,
          title: "How to care for a new puppy?",
          description: "Looking for tips on taking care of a new puppy.",
          userName: "John Doe",
          comments: 12,
        },
        {
          id: 2,
          title: "Best food for older cats?",
          description: "What kind of food is best for senior cats?",
          userName: "Jane Smith",
          comments: 8,
        },
        // Additional topics can be added here
      ],
    };
  },
  methods: {
    addNewTopic() {
      // Logic to add a new topic
    },
    viewTopic(topicId) {
      // Navigate to the topic detail view
      this.$router.push({ name: "TopicDetail", params: { id: topicId } });
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
