<template>
  <div class="media">
    <div class="level">
      <label class="title">播放模式:</label>
      <el-select v-model="listQuery.playmode" style="width: 150px;">
        <el-option v-for="item in playModes" :key="item.id" :label="item.modename" :value="item.playmode"></el-option>
      </el-select>
      <el-button type="danger" icon="el-icon-s-tools" @click="handleMode">mode</el-button>
    </div>
    <div class="level">
      <label class="title">播放大类:</label>
      <el-select v-model="listQuery.firclaid" style="width: 150px;">
        <el-option v-for="first in firstLevel" :key="first.firclaid" :label="first.firclaname" :value="first.firclaid"></el-option>
      </el-select>
      <el-button type="danger" icon="el-icon-search" @click="handleSearch">Search</el-button>
    </div>
    <van-empty v-if="showEmpty" image="search" description="暂无内容" />
    <div class="device" v-for="item in list" :key="item.devid">
      <div class="show-title">
        设备{{item.devid}}:
      </div>
      <div class="show-title">
        一级大类：<span>{{ firclanameFilter(item.firclaid) }}</span>
      </div>
      <div class="show-title">
        一级大类：<span>{{ secclanameFilter(item.record[0].secondId) }}</span>
      </div>
      <div class="show-title">
        文件名：<span>{{ item.record[0].filename }}</span>
      </div>
      <div class="show-title">
        标题展示：<span>{{ item.record[0].showtitle }}</span>
      </div>
      <div class="show-title">
        url：<span>{{ item.record[0].url }}</span>
      </div>
      <div class="action">
        <el-button type="danger" size="small" icon="el-icon-setting" @click="updateDevice(item)">update</el-button>
      </div>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="playBills"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { updatePlayMode, queryAllFirstLevel, queryAllSecondLevel, queryPlayBill, queryInstruments, updatePalyBill, queryAllPlayMode } from '@/api/media'
import { Notify } from 'vant'
export default {
  name: 'Media',
  data () {
    return {
      firstLevel: [],
      secondLevel: [],
      listQuery: {
        currentPage: 1,
        pageSize: 20,
        firclaid: undefined,
        devid: undefined,
        playmode: undefined
      },
      list: [],
      playBills: [],
      temp: {},
      showPicker: false,
      showEmpty: true,
      playModes: [
        {
          id: 1,
          playmode: 0,
          modename: '自动'
        },
        {
          id: 2,
          playmode: 10,
          modename: '手动'
        }
      ]
    }
  },
  created () {
    queryAllFirstLevel().then(res => {
      const { data } = res
      this.firstLevel = data.map(item => {
        return {
          firclaid: item.id,
          firclaname: item.firclaname
        }
      })
    })
    queryAllSecondLevel().then(res => {
      const { data } = res
      this.secondLevel = data.map(item => {
        return {
          secondId: item.id,
          secclaname: item.secclaname
        }
      })
    })
    queryAllPlayMode().then(res => {
      this.playModes = res.data
    })
  },
  methods: {
    handleMode () {
      updatePlayMode(this.listQuery).then(res => {
        const { errno, data } = res
        if (errno === 0) {
          Notify({
            type: 'success',
            message: data
          })
        } else {
          alert('error')
        }
      })
    },
    onConfirm (val) {
      console.log(val)
      updatePalyBill({
        firclaid: this.temp.firclaid,
        devid: this.temp.devid,
        attchids: val.id
      }).then(res => {
        const { errno, data } = res
        if (errno === 0) {
          Notify({
            type: 'success',
            message: data
          })
        }
        this.showPicker = false
      })
    },
    updateDevice (device) {
      this.showPicker = true
      queryInstruments(device.record[0]).then(res => {
        const { data } = res
        this.playBills = data.map(item => {
          item.text = item.filename
          return item
        })
      })
      this.temp = Object.assign({}, device)
      this.temp.attchids = undefined
    },
    handleSearch () {
      if (this.listQuery.firclaid === undefined) {
        Notify({
          type: 'danger',
          message: '请先选择一级大类'
        })
      } else {
        queryPlayBill(this.listQuery).then(res => {
          const { data } = res
          this.list = data.content
          this.showEmpty = false
        })
      }
    },
    firclanameFilter (id) {
      const temp = this.firstLevel.filter(item => {
        return item.firclaid === id
      })
      if (temp.length <= 0) {
        return '暂无对应'
      } else {
        return temp[0].firclaname
      }
    },
    secclanameFilter (id) {
      const temp = this.secondLevel.filter(item => {
        return item.secondId === id
      })
      if (temp.length <= 0) {
        return ''
      } else {
        return temp[0].secclaname
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.media
  color white
  height 1336px
  padding 12px 8px 0 8px
  background-image url("//www.youbaobao.xyz/datav-res/datav/datav-mobile-bg.jpg")
  background-size 100% 100%
  background-repeat no-repeat
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .level
    display flex
    flex-direction row
    align-items center
    justify-content space-around
    margin-bottom 10px
    margin-top 10px
    .title
      font-size 18px
      font-weight bold
      padding 0 5px 0 2px
  .device
    position relative
    font-size 16px
    font-weight normal
    border 1px solid red
    box-shadow #4a4a4a 2px 2px
    padding 5px
    margin 10px 0 10px 0
    .show-title
      font-size 14px
    .action
      position absolute
      right 8px
      bottom 8px
</style>
