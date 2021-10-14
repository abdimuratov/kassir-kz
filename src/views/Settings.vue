<template>
  <div class="settings">
    <LeftCard />
    <router-view class="settings-content" />
  </div>
</template>

<script>
import LeftCard from '../components/Settings/LeftCard.vue'

export default {
  components: {
    LeftCard
  }
}
</script>

<style lang="scss" scoped>
.settings {
  font-size: 18px;
}

@media (min-width: 1024px) {
  .settings {
    display: flex;
    flex-direction: row;
    &-content {
      flex: 1;
      margin-left: 106px;
    }
  }
}
</style>