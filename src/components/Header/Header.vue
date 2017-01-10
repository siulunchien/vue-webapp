<style lang="scss" scoped>
  @import "./Header";
</style>

<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <p class="title f-16">
          <i class="brand"></i>
          <span class="name">{{ seller.name }}</span>
        </p>
        <p class="description f-12">{{ seller.description }} / {{ seller.deliveryTime }}分钟送达</p>
        <p v-if="seller.supports" class="support f-10">
          <i class="supportIcon" :class="classMap[seller.supports[0].type]"></i>
          <span class="supportText">{{ seller.supports[0].description }}</span>
        </p>
      </div>
      <div v-if="seller.supports" class="support-count f-10" @click="showPopup">
        <span>{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper f-10" @click="showPopup">
      <i class="bulletin-icon"></i>
      <p class="bulletin-text">{{ seller.bulletin }}</p>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="header-bg">
      <img :src="seller.avatar" alt="">
    </div>
    <div v-show="isPopup" class="popup-wrapper" transition="popup">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // 是否显示商家介绍层
        isPopup: false
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      // 显示商家介绍层
      showPopup () {
        this.isPopup = true;
      },
      // 关闭商家介绍层
      closePopup () {
        this.isPopup = false;
      }
    },
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>