<template>
  <div class="header">
    <mt-header :title="title" :style="{backgroundColor: bgcolor, color}">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="showMenuFn"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    color: {
      type: String,
      default: '#333'
    },
    bgcolor: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
      showMenu: false,
      popupVisible: false
    }
  },
  created () {
  },
  methods: {
    back () {
      this.$router.back()
    },
    showMenuFn () {
      this.popupVisible = true
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/css/common.scss';
.header {
  .mint-header {
    height: rem(88);
    font-size: rem(34);
    .mintui {
      font-size: unset;
    }
  }
}
</style>
