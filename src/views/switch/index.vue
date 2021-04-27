<template>
  <div class="switch">
    <div class="title">
      灯光控制：
    </div>
      <van-grid :column-num="2">
        <van-grid-item>
          <transition name="color-fade">
            <van-button round type="info" @click="turnOnAllLights">灯光全开</van-button>
          </transition>
        </van-grid-item>
        <van-grid-item>
          <van-button round type="danger" @click="turnOffAllLights">灯光全关</van-button>
        </van-grid-item>
      </van-grid>
    <div class="title">
      一键操作：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOnAll">一键全开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffAll">一键全关</van-button>
      </van-grid-item>
    </van-grid>
    <div class="title">
      显示屏控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOnAllScreen">显示屏全开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffAllScreen">显示屏全关</van-button>
      </van-grid-item>
    </van-grid>
    <div class="title">
      设备控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOnAllDevice">设备全开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffAllDevice">设备全关</van-button>
      </van-grid-item>
    </van-grid>
    <div class="title">
      环形主幕控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOnRing">环形主幕开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffRing">环形主幕关</van-button>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { turnOnAllLights, turnOffAllLights, turnOnAllPower, turnOffAllPower, ScreenTurnOnAll, ScreenTurnOffAll, DeviceTurnOnAll, DeviceTurnOffAll, RingTurnOnAll, RingTurnOnOff } from '@/api/switch'

export default {
  name: 'PowerSwitch',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    turnOnAllLights () {
      this.isActive = true
      turnOnAllLights().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOffAllLights () {
      turnOffAllLights().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOnAll () {
      turnOnAllPower().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOffAll () {
      turnOffAllPower().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOnAllScreen () {
      ScreenTurnOnAll().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOffAllScreen () {
      ScreenTurnOffAll().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOnAllDevice () {
      this.turnOnAllScreen()
      DeviceTurnOnAll().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOffAllDevice () {
      DeviceTurnOffAll().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOnRing () {
      RingTurnOnAll().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    },
    turnOffRing () {
      RingTurnOnOff().then(res => {
        if (res.result === 'success') {
          this.$notify({
            type: 'success',
            message: res.result
          })
        } else {
          this.$notify({
            type: 'danger',
            message: 'operation failed'
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.switch
  padding 8px
  .title
    font-size 16px
    font-weight bold
    letter-spacing 1px
    margin-bottom 5px
  .color-fade-enter-active
    transition all 0.5s ease
  .color-fade-leave-active
    transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .color-fade-enter-to , .color-fade-leave
    opacity 0
    .disActive
      color black
</style>
