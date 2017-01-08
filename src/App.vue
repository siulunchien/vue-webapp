<style lang="scss">
  @import "~sass/common/index";
</style>

<template>
  <div id="app">
    <vue-header :seller="seller"></vue-header>
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
import { seller, errno } from 'api/index'

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.getSellerInfo()
  },
  methods: {
    getSellerInfo () {
      this.$http.get(seller.sellerInfo).then(res => {
        res = res.body
        if(res.errno === errno.ERR_OK){
          this.seller = res.data
        }
      })
    }
  },
  components: {
    'vue-header': Header
  }
}
</script>