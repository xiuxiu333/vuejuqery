<template>
  <div class="robotlist">
    <div class="user">
      <div class="players">
        <img src="../../assets/img/guanli.png" alt="" class="img">
        <span style="margin-left: 20px;">机器人列表管理</span>
      </div>
    </div>
    <div class="list">
      <div class="jiqiren">
        <span>机器人添加</span>
      </div>
      <div class="jiajian">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </div>
      <div style="line-height:65px;height:65px;">
        <el-button style="height:30px;margin-left:43px;background:#2A579A;color:#fff;">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
    // 加
    // add: function() {
    //   this.counter = parseInt(this.counter) + 1;
    // },
    // 减
    // min: function() {
    //   if (this.counter > 0) {
    //     this.counter = parseInt(this.counter) - 1;
    //   }
    // }
  }
};
</script>

<style  scoped>
.robotlist {
  width: 100vw;
  height: 100vh;
  background: #fff;
}
.user {
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
  border-bottom: 2px solid rgba(235, 235, 235, 1);
}
.players {
  width: 50%;
  padding-left: 26px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  display: flex;
  align-items: center;
}
.list {
  width: 716px;
  height: 65px;
  display: flex;
  margin-top: 47px;
}
.jiqiren {
  width: 261px;
  height: 65px;
  line-height: 65px;
  text-align: center;
  margin-left: 23px;
  border: 1px solid #e6e6e6;
}
/* // 加减 */
.jiajian {
  width: 435px;
  height: 65px;
  line-height: 65px;
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px solid #e6e6e6;
}
</style>
