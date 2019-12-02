<template>

  <div class="horselamp" >
      <p class="box" v-for="(items,index) in arr" :class="direction" :key="index"
         :style="{top:100*index-100+'%'}">
        {{items}}
      </p>
  </div>

</template>

<script>
  export default {
    name: 'horselamp',
    props: ['arr'],
    data () {
      return{
        d: 'up',
        direction: 'up'
      }
    },
    watch: {
      direction (){
        if(!this.direction){
          setTimeout( ()=> {
            this.direction=this.d

          },50)

        } else {
          this.start()
        }
      }
    },
    mounted() {
      this.start()
    },
    methods:{
      start:function () {
        setTimeout(()=> {
          this.direction==="up"?this.arr.push(this.arr.shift()):this.arr.unshift(this.arr.pop())
          this.direction=false
        }, 5000)
      }
    }
  }
</script>

<style scoped lang="scss">

.horselamp {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
}
.up{
  animation:toUp 1.5s 3s ease-in-out forwards;
}
.down{
  animation:toDown 1.5s 3s ease-in-out forwards;
}


@keyframes toUp {
  100%{
    transform: translateY(-100%);
  }
}
@keyframes toDown {
  100%{
    transform: translateY(100%);
  }
}
</style>
