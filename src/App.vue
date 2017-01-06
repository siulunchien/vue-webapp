<style lang="scss">
  @import "./assets/sass/common/index.scss";
</style>

<template>
  <div id="app">
    <vue-header></vue-header>
    <div class="tab f-14">
      <a v-link="{ name: 'goods' }" class="tab-item">商品</a>
      <a v-link="{ name: 'ratings' }" class="tab-item">评价</a>
      <a v-link="{ name: 'seller' }" class="tab-item">商家</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/Header/Header'

export default {
  components: {
    'vue-header': Header
  }
}
</script>