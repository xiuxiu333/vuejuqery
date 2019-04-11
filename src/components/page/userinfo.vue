<template>
    <div class="userinfo">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="">
                <span style="margin-left: 20px;">players管理</span>
            </div>
            <div class="chaxun">
                <button class="btn" @click="chaxun">*查询</button>
                <button class="btn" @click="zhengjia">+增加</button>
            </div>
        </div>
        <div v-if="show" style=" margin-top: 15px;">
            <span class="spanshow">
                coid：
                <input type="text" class="input">
                <button class="chax">查询</button>
                <button class="chongz">重置</button>
            </span>
        </div>
        <div class="elebale">
            <el-table :data="tableData" class="table" stripe :header-cell-style="tableHeaderColor" border slot="empty" border >
                <el-table-column type="index" width="60" ></el-table-column>
                <el-table-column prop="date" label="coid" width="150"></el-table-column>
                <el-table-column prop="name" label="编号" width="150"></el-table-column>
                <el-table-column prop="address" label="创建时间"></el-table-column>
                <el-table-column prop="date" label="昵称" width="150"></el-table-column>
                <el-table-column prop="name" label="账号状态" width="150"></el-table-column>
                <el-table-column prop="address" label="灵石"></el-table-column>
                <el-table-column prop="date" label="驿券" width="150"></el-table-column>
                <el-table-column prop="name" label="通关印" width="150"></el-table-column>
                <el-table-column prop="address" label="是否在线"></el-table-column>
                <el-table-column prop="date" label="操作" width="150">
                    <template scope="scope" style="display:flex;">
                        <el-button icon="el-icon-edit" circle></el-button>
                        <el-button icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
 
export default {
  data() {
    return {
      show: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    chaxun() {
      this.show = !this.show;

    },
    zhengjia() {},
     // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #F2F2F2;color: rgba(102,102,102,1);font-weight: 500;text-align:center;'
      }
    }
  }
};
</script>

<style scoped>
.el-table .warning-row {
  background: rgba(242, 242, 242, 1);
  border: 1px solid #bfcbd9;
}
.el-table .success-row {
  background: rgba(242, 242, 242, 1);
}
.userinfo {
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
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  display: flex;
  align-items: center;
}

.chaxun {
  width: 10%;
  display: flex;
  margin-left: 460px;
  /* border: 1px solid #000; */
  justify-content: space-around;
  align-items: center;
}
.input {
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.chax {
  background: rgb(60, 141, 188);
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 35px;
  margin-left: 20px;
  color: #fff;
}
.spanshow {
  margin-left: 30px;
}
.chongz {
  background: rgb(244, 244, 244);
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 35px;
  margin-left: 10px;
}
.btn {
  width: 72px;
  height: 29px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}
.elebale {
  width: 100%;
  height: 100%;
}
.table {
  width: 83%;
  margin-top: 20px;
  text-align: center;
  /* border: 2px solid rgba(230, 230, 230, 1); */
  margin-left: 22px;
  border-radius: 10px 10px 0px 0px;
}
</style>
