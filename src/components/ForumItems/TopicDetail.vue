<template>
    <div class="mt-16 flex justify-center">
      <div class="w-full bg-white p-8 shadow-lg rounded-lg border border-gray-300 py-28">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-extrabold text-gray-800 mb-4">{{ topic.title }}</h2>
          <p class="text-lg text-gray-600 mb-4">{{ topic.description }}</p>
          <p class="text-sm text-gray-500">Posted by {{ topic.userName }}</p>
        </div>
  
        <div class="border-t border-gray-200 pt-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
          <!-- Comments section -->
          <div v-for="comment in comments" :key="comment.id" class="mb-6 p-4 border-b border-gray-200">
            <p class="text-gray-700 mb-2">{{ comment.text }}</p>
            <p class="text-sm text-gray-500">By {{ comment.userName }}</p>
          </div>
  
          <!-- Add a comment -->
          <div class="mt-6">
            <textarea
              v-model="newComment"
              class="w-full p-3 border border-gray-300 rounded-lg mb-4"
              placeholder="Add a comment..."
            ></textarea>
            <button
              @click="addComment"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transform transition-transform hover:scale-105 duration-300"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        topic: {
          id: this.$route.params.id, // Get the topic ID from route params
          title: "Sample Topic",
          description: "Sample description for the topic.",
          userName: "John Doe",
          comments: 5,
        },
        comments: [
          { id: 1, text: "Great advice, thanks!", userName: "Alice" },
          { id: 2, text: "I have a question about...", userName: "Bob" },
          // Additional comments can be added here
        ],
        newComment: "",
      };
    },
    methods: {
      addComment() {
        if (this.newComment.trim()) {
          this.comments.push({
            id: this.comments.length + 1,
            text: this.newComment,
            userName: "Current User", // Replace with actual user info
          });
          this.newComment = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  