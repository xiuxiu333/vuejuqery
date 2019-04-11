<template>
    <div class="userinfo">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="" class="img">
                <span style="margin-left: 20px;">代理售卡管理</span>
            </div>
        </div>
        <div class="idsous">
            <p class="p1">
                发送者账号搜索：
                <input type="text" class="inpt">
                <el-button type="info" plain>搜索</el-button>
            </p>
            <p class="p2">
                玩家ID搜索：
                <input type="text" class="inpt">
                <el-button type="info" plain>搜索</el-button>
            </p>
        </div>
        <div class="elebale">
            <el-table :data="tableData" class="table" slot="empty"  stripe :header-cell-style="tableHeaderColor" border>
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="date" label="ID" width="150"></el-table-column>
                <el-table-column prop="name" label="发送者ID" width="150"></el-table-column>
                <el-table-column prop="address" label="发送者昵称"></el-table-column>
                <el-table-column prop="date" label="接收者ID" width="150"></el-table-column>
                <el-table-column prop="name" label="接收者昵称" width="150"></el-table-column>
                <el-table-column prop="address" label="接收者类别"></el-table-column>
                <el-table-column prop="date" label="产品" width="150"></el-table-column>
                <el-table-column prop="name" label="数量" width="150"></el-table-column>
                <el-table-column prop="address" label="状态"></el-table-column>
                <el-table-column prop="date" label="时间" width="150"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "88888888",
          name: "99999",
          address: "老王"
        },
        {
          date: "88888888",
          name: "99999",
          address: "老王"
        },
        {
          date: "88888888",
          name: "99999",
          address: "老王"
        },
        {
          date: "88888888",
          name: "99999",
          address: "老王"
        },
        {
          date: "88888888",
          name: "99999",
          address: "老王"
        }
      ]
    };
  },
  methods: {
     // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #F2F2F2;color: rgba(102,102,102,1);font-weight: 500;text-align:center;'
      }
    }
  }
};
</script>

<style  >
.el-button--small,
.el-button--small.is-round {
  padding: 10px 15px;
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
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  display: flex;
  align-items: center;
}
/* .players .img{
    maring-top:10px;
} */
.idsous {
  height: 109px;
  
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.p1 {
  margin-top: 30px;padding-left: 40px;
}
.p2 {
  margin-top: 19px;
  padding-left: 66px;
}
.elebale {
  width: 100%;
  height: 100%;
}
.table {
  width: 83%;
  margin-top: 8px;
  text-align: center;
  /* border: 2px solid rgba(230, 230, 230, 1); */
  margin-left: 22px;
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
