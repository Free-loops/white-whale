<template>
  <div class="home">
    <myHeader title="小鲸喜" bgcolor="rgba(0,0,0,0)" color="#fff"/>
    <div class="cantainer">
      <div class="my-horselamp">
        <horselamp :arr="arr"/>
      </div>
      <div class="content" :class="{login: login}">
        <div class="card1">
          <div class="card-top">
            <div class="item">
              <img :src="cklh_icon" alt="" class="item-icon">
              <p class="item-title">存款灵活</p>
              <p class="item-des">随存随取1元起</p>
            </div>
            <div class="item">
              <img :src="zjaq_icon" alt="" class="item-icon">
              <p class="item-title">资金安全</p>
              <p class="item-des">银行存款100%赔付</p>
            </div>
            <div class="item">
              <img :src="cdfl_icon" alt="" class="item-icon">
              <p class="item-title">超多福利</p>
              <p class="item-des">视听会员任你享</p>
            </div>
          </div>
          <div class="card-center">
            <div class="button">立即免费申请</div>
          </div>
          <div class="card-bottom">
            <p>首次申请成功，当天即赠爱奇艺7天特权></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue'
import horselamp from '@/components/HorseLamp.vue'
import cdfl_icon from '@/assets/img/cdfl_icon.png'
import cklh_icon from '@/assets/img/cklh_icon.png'
import zjaq_icon from '@/assets/img/zjaq_icon.png'

export default {
  name: 'home',
  components: {
    myHeader,
    horselamp
  },
  data () {
    return {
      arr: ['111111', '222222'],
      login: false,
      cklh_icon,
      zjaq_icon,
      cdfl_icon
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
  .home {
    height: 100%;
    background-image: url(../assets/img/banner.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    .my-horselamp {
      width: 100%;
      margin-top: rem(20);
      height: rem(60);
    }
    .content {
      margin-top: rem(282);
      padding: 0 rem(30);
      &.login {
        margin-top: rem(31);
      }
      .card1 {
        height: rem(574);
        background-image: url(../assets/img/card_bg1.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
        padding: rem(128) rem(25) 0;
        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: rem(20) 0;
          .item-icon {
            width: rem(100);
          }
          .item-title {
            font-size: rem(28);
            color: #333;
          }
          .item-des {
            font-size: rem(24);
            color: #999;
          }
        }
        .card-center {
          padding-top: rem(20);
          .button {
            height: rem(122);
            font-size: rem(34);
            color: #8B0301;
            padding-top: rem(25);
            background-image: url(../assets/img/top_button.png);
            background-repeat: no-repeat;
            background-size: 100% auto;
            box-sizing: border-box;
          }
        }
        .card-bottom {
          font-size: rem(24);
          color: #666;
        }
      }
    }
  }
</style>