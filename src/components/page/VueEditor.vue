<template>
    <div class="shouquan">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="" class="img">
                <span style="margin-left: 20px;">消息发送管理</span>
            </div>
        </div>
        <div class="fasong">
            <span style="width:10%;color:rgba(102,102,102,1);font-size:9px;font-weight:400;">消息发送：</span>
            <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="textarea"></el-input>
        </div>
        <div class="queding">
            <button>确定</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ""
    };
  },
  methods: {}
};
</script>

<style  scoped>
.queding {
  width: 52%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}
.queding button{
    width: 50px;
    height: 30px;
    background: #2A579A;
    border: none;
    color: #fff;
    border-radius: 5px;
}
.fasong {
  display: flex;
  width: 50%;
  /* border: 1px solid #000; */
  height: 300px;
  margin-top: 40px;
  padding-left: 40px;
}
.el-button--small,
.el-button--small.is-round {
  padding: 10px 15px;
}
.el-table .cell,
.el-table th div {
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
.shouquan {
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
</style>
