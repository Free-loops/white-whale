<template>
  <div class="header">
    <mt-header :title="title" :style="{backgroundColor: bgcolor, color}">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="showMenuFn"></mt-button>
    </mt-header>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
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
      sheetVisible: false,
      actions: [
        {name: '规则详情', value: 1, method: this.clickMenu},
        {name: '交易记录', value: 2, method: this.clickMenu},
        {name: '意见反馈', value: 3, method: this.clickMenu},
        {name: '我的客服', value: 4, method: this.clickMenu}
      ]
    }
  },
  created () {
  },
  methods: {
    back () {
      this.$router.back()
    },
    showMenuFn () {
      this.sheetVisible = true
    },
    clickMenu (v) {
      console.log(v.name)
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
