<template>
  <div class="singleSwitch">
    <div class="title">
      灯光控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOnHall">门厅射灯开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffHall">门厅射灯关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOnHallModeling">门厅吊顶造型灯光开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffHallModeling">门厅吊顶造型灯光关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOnMeetingGate">会门厅灯带开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffMeetingGate">会门厅灯带关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOnMultiScreen">拼接屏前灯光开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOffMultiScreen">拼接屏前灯光关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn5">环幕前灯光开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff5">环幕前灯光关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn6">环幕吊灯造型灯开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff6">环幕吊灯造型灯关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn7">多功能展台灯光1</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff7">多功能展台灯光1</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn8">多功能展台灯光2</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff8">多功能展台灯光2</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn9">未来展望灯光开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff9">未来展望灯光关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn10">虚拟自行车+VR灯</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff10">虚拟自行车+VR灯</van-button>
      </van-grid-item>
    </van-grid>
    <div class="title">
      投影仪控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOn11">通电玻璃投影机开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff11">通电玻璃投影机关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn12">主幕投影机开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff12">主幕投影机关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn13">沙盘投影机开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff13">沙盘投影机关</van-button>
      </van-grid-item>
    </van-grid>
    <div class="title">
      屏幕控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOn14">发展历程开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff14">发展历程关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn15">LED屏开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff15">LED屏关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn16">墙面5台电视机开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff16">墙面5台电视机关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn17">5G应用拼接屏开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff17">5G应用拼接屏关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn18">5G政务拼接屏开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff18">5G政务拼接屏关</van-button>
      </van-grid-item>
    </van-grid>
    <div class="title">
      主机控制：
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <van-button round type="info" @click="turnOn19">企业发展历程主机</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff19">企业发展历程主机</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn20">上下屏一体机1开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff20">上下屏一体机1关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn21">上下屏一体机2开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff21">上下屏一体机2关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn22">上下屏一体机3开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff22">上下屏一体机3关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn23">上下屏一体机4开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff23">上下屏一体机4关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn24">上下屏一体机5开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff24">上下屏一体机5关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn25">签字留言一体机开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff25">签字留言一体机关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn26">5G应用拼接屏开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff26">5G应用拼接屏关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn27">5G政务一体机开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff27">5G政务一体机关</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="info" @click="turnOn28">LED主屏开</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-button round type="danger" @click="turnOff28">LED主屏关</van-button>
      </van-grid-item>
    </van-grid>
    <div class="none-content"></div>
  </div>
</template>

<script>
import { hallOn, hallOff, hallModelingOn, hallModelingOff, meetingGateOn, meetingGateOff, multiScreenOn, multiScreenOff, on5, off5, on6, off6, on7, off7, on8, off8, on9, off9, on10, off10, on11, off11, on12, off12, on13, off13, on14, off14, on15, off15, on16, off16, on17, off17, on18, off18, on19, off19, on20, off20, on21, off21, on22, off22, on23, off23, on24, off24, on25, off25, on26, off26, on27, off27, on28, off28 } from '@/api/singleSwitch'

export default {
  name: 'singleSwitch',
  methods: {
    turnOnHall () {
      hallOn().then(res => {
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
    turnOffHall () {
      hallOff().then(res => {
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
    turnOnHallModeling () {
      hallModelingOn().then(res => {
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
    turnOffHallModeling () {
      hallModelingOff().then(res => {
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
    turnOnMeetingGate () {
      meetingGateOn().then(res => {
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
    turnOffMeetingGate () {
      meetingGateOff().then(res => {
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
    turnOnMultiScreen () {
      multiScreenOn().then(res => {
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
    turnOffMultiScreen () {
      multiScreenOff().then(res => {
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
    turnOn5 () {
      on5().then(res => {
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
    turnOff5 () {
      off5().then(res => {
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
    turnOn6 () {
      on6().then(res => {
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
    turnOff6 () {
      off6().then(res => {
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
    turnOn7 () {
      on7().then(res => {
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
    turnOff7 () {
      off7().then(res => {
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
    turnOn8 () {
      on8().then(res => {
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
    turnOff8 () {
      off8().then(res => {
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
    turnOn9 () {
      on9().then(res => {
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
    turnOff9 () {
      off9().then(res => {
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
    turnOn10 () {
      on10().then(res => {
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
    turnOff10 () {
      off10().then(res => {
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
    turnOn11 () {
      on11().then(res => {
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
    turnOff11 () {
      off11().then(res => {
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
    turnOn12 () {
      on12().then(res => {
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
    turnOff12 () {
      off12().then(res => {
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
    turnOn13 () {
      on13().then(res => {
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
    turnOff13 () {
      off13().then(res => {
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
    turnOn14 () {
      on14().then(res => {
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
    turnOff14 () {
      off14().then(res => {
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
    turnOn15 () {
      on15().then(res => {
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
    turnOff15 () {
      off15().then(res => {
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
    turnOn16 () {
      on16().then(res => {
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
    turnOff16 () {
      off16().then(res => {
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
    turnOn17 () {
      on17().then(res => {
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
    turnOff17 () {
      off17().then(res => {
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
    turnOn18 () {
      on18().then(res => {
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
    turnOff18 () {
      off18().then(res => {
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
    turnOn19 () {
      on19().then(res => {
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
    turnOff19 () {
      off19().then(res => {
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
    turnOn20 () {
      on20().then(res => {
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
    turnOff20 () {
      off20().then(res => {
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
    turnOn21 () {
      on21().then(res => {
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
    turnOff21 () {
      off21().then(res => {
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
    turnOn22 () {
      on22().then(res => {
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
    turnOff22 () {
      off22().then(res => {
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
    turnOn23 () {
      on23().then(res => {
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
    turnOff23 () {
      off23().then(res => {
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
    turnOn24 () {
      on24().then(res => {
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
    turnOff24 () {
      off24().then(res => {
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
    turnOn25 () {
      on25().then(res => {
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
    turnOff25 () {
      off25().then(res => {
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
    turnOn26 () {
      on26().then(res => {
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
    turnOff26 () {
      off26().then(res => {
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
    turnOn27 () {
      on27().then(res => {
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
    turnOff27 () {
      off27().then(res => {
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
    turnOn28 () {
      on28().then(res => {
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
    turnOff28 () {
      off28().then(res => {
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
.singleSwitch
  padding 8px
  .title
    font-size 16px
    font-weight bold
    letter-spacing 1px
    margin-bottom 5px
  .none-content
    height 55px
</style>
