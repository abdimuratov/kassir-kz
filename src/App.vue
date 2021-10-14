<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>