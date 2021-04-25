<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item replace to="/powerSwitch" name="switch">
        <template>
          <div class="van-tabbar-item__icon iconfont iconkaiguan icon-center"></div>
          <span>开关控制</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/media" icon="video-o" name="media">多媒体控制</van-tabbar-item>
      <van-tabbar-item replace to="/singleSwitch" name="singleSwitch">
        <template>
          <div class="van-tabbar-item__icon iconfont iconkaiguankai icon-center"></div>
        </template>
        <span>单项控制</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      active: 'media'
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  font-size 16px
  //.home-content
  //  height 708px
  .icon-center
    display flex
    justify-content center
    align-items center
</style>
