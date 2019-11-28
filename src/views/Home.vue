<template>
  <div class="home">
    <myHeader title="小鲸喜"/>
  </div>
</template>

<script>
import myHeader from '@/components/header.vue'

export default {
  name: 'home',
  components: {
    myHeader
  }
}
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
  }
</style>