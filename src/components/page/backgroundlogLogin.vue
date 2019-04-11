<template>
    <div class="shouquan">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="" class="img">
                <span style="margin-left: 20px;">后台登录日志管理</span>
            </div>
        </div>
        <div style="display:flex;justify-content: flex-end;width:80%;margin-top:20px;">
            <button
                style="background:#2A579A;border:none;color:#fff;width:50px;height:30px;border-radius: 5px;"
            >添加</button>
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
                <el-table-column prop="date" label="序号" width="295"></el-table-column>
                <el-table-column prop="name" label="操作用户ID" width="310"></el-table-column>
                <el-table-column prop="address" label="操作用户名称" width="310"></el-table-column>
                <el-table-column prop="caozuo" label="登录IP" width="310"></el-table-column>
                <el-table-column prop="date" label="登录时间" width="310"></el-table-column>
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
          address: "老王",
          caozuo: "未授权"
        },
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
  methods: {
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #F2F2F2;color: rgba(102,102,102,1);font-weight: 500;text-align:center;";
      }
    }
  }
};
</script>

<style  scoped>
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
.idsous {
  height: 80px;
  padding-left: 91px;
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
  width: 80%;
  margin-top: 30px;
  text-align: center;
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
