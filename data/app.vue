<template>
  <div class="example">
    <div ref="touchBox" class="touch-box" v-move>
      {{ window }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world! ',
      window: '1212',
    };
  },
  mounted() {
    const newName = { a: { b: { c: 1 } } };
    // drag(this.$refs.touchBox);
    console.log(newName?.a?.b?.c?.d);
    console.log(_);
  },
};
</script>

<style lang="less">
.example {
  width: 100%;
  height: 100%;
  .touch-box {
    width: 50px;
    height: 50px;
    background: red;
    position: fixed;
    left: 0;
    top: 0;
  }
}
</style>
