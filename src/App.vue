<template>
  <div id="app">
    <Navbar v-if="showNavBar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    showNavBar() {
      return this.$route.meta.showNavBar !== false;
    }
  }
};
</script>
