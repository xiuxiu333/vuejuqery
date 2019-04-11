<template>
  <div class="shouquan">
    <div class="user">
      <div class="players">
        <img src="../../assets/img/guanli.png" alt="" class="img">
        <span style="margin-left: 20px;">机器人设置管理</span>
      </div>
    </div>
    <div class="jiagai">
      <el-button style="color:#fff;background:#2A579A;border-radius: 5px;">添加</el-button>
      <el-button style="color:#fff;background:#2A579A;border-radius: 5px;">修改</el-button>
      <el-button style="color:#fff;background:#C01A1A;border-radius: 5px;">删除</el-button>
    </div>
    <div class="elebale">
      <el-table
        :data="tableData"
        class="table"
        stripe
        :header-cell-style="tableHeaderColor"
        slot="empty"
        border=""
      >
        <el-table-column type="selection" width="48"></el-table-column>
        <el-table-column prop="date" label="ID" width="144"></el-table-column>
        <el-table-column prop="name" label="名称" width="144"></el-table-column>
        <el-table-column prop="address" label="头像" width="144"></el-table-column>
        <el-table-column prop="caozuo" label="离场金币上限" width="144"></el-table-column>
        <el-table-column prop="caozuo" label="返场间隔" width="144"></el-table-column>
        <el-table-column prop="caozuo" label="下注概率" width="144"></el-table-column>
        <el-table-column prop="caozuo" label="签名" width="144"></el-table-column>
        <el-table-column prop="caozuo" label="性别" width="144" :formatter="formatRole"></el-table-column>
        <el-table-column prop="caozuo" label="IP" width="144"></el-table-column>
        <el-table-column prop="caozuo" label="地址" width="144"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import { constants } from "fs";

export default {
  data() {
    return {
      page: 1,
      rows: 8,
      tableData: [
        {
          date: "88888888",
          name: "99999",
          address: "老王",
          caozuo: "未授权"
        },
        {
          date: "88888888",
          name: "99999",
          address: "老王",
          caozuo: "未授权"
        }
      ]
    };
  },
  mounted() {
 
    // var _this = this;
    // _this.$axios
    //   .get("http://192.168.0.111:8080/longchuan/player/queryInfos")
    //   .then(function(res) {
    //     console.log(res.data.rows);
        
    //   })
    //   .catch(function(res) {
    //     console.log(error);
    //   });
    // this.aaa();
  },
  methods: {
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #F2F2F2;color: rgba(102,102,102,1);font-weight: 500;text-align:center;";
      }
    },
    formatRole: function(row, column) {
      return row.ud_status == "1" ? "男" : row.ud_status == "2" ? "女" : "aaa";
    }
  }
};
</script>

<style  scoped>
.el-button--small,
.el-button--small.is-round {
  padding: 10px 15px;
}
.jiagai {
  width: 80%;
  height: 85px;
  line-height: 85px;
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
.idsous {
  height: 80px;
  padding-left: 85px;
  font-size: 14px;
}
.p2 {
  line-height: 80px;
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.elebale {
  width: 100%;
  height: 100%;
}
.table {
  width: 77.6%;
  margin-top: 8px;
  text-align: center;
  /* border: 2px solid rgba(230, 230, 230, 1); */
  margin-left: 62px;
  border-radius: 10px 10px 0px 0px;
}
.inpt {
  height: 30px;
  width: 94px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #ccc;
}
.btnshou {
  height: 30px;
  width: 50px;
  border: none;
}
</style>
