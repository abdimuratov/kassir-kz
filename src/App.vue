<template>
  <div v-if="loading">
    <!-- Loading message -->
  </div>

  <template v-else>
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </template>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Footer,
    Header,
  },

  computed: {
    ...mapState(["loading"]),
  },

  methods: {
    ...mapActions(["getUser"]),
  },

  async beforeMount() {
    await this.getUser();
  },
};
</script>
