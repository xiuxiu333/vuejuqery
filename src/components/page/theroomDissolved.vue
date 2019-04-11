<template>
    <div class="userinfo">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="" class="img">
                <span style="margin-left: 20px;">房间解散管理</span>
            </div>
        </div>
        <div class="idsous">
            <p class="p2">
                账号搜索：
                <input type="text" class="inpt">
                <el-button type="info" plain>搜索</el-button>
            </p>
        </div>
        <div class="elebale">
            <el-table
                :data="tableData"
                slot="empty"
                class="table"
                stripe
                :header-cell-style="tableHeaderColor"
                border=""
            >
                <el-table-column type="index" width="41"></el-table-column>
                <el-table-column prop="date" label="玩家ID" width="296"></el-table-column>
                <el-table-column prop="name" label="玩家昵称" width="296"></el-table-column>
                <el-table-column prop="address" label="当前房间"></el-table-column>
                <el-table-column prop="date" label="操作" width="296">
                    <template scope="scope">
                        <el-button  style="color:#fff;background:#C61616;border-radius:6px;">解散</el-button>
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
      tableData: [
        {
          date: "006",
          name: "斗地主",
          address: "00000888888899999"
        },
        {
          date: "004",
          name: "小",
          address: "00000888888899999"
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
    },

  }
};
</script>

<style  scoped>
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
.idsous {
  height: 80px;
  padding-left: 40px;
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  /* border: 1px solid #000; */
}
.p2 {
  line-height: 80px;
}
.inpt {
  height: 30px;
  width: 94px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #ccc;
}

.elebale {
  width: 100%;
  height: 100%;
  margin-top: 33px;
}
.table {
  width: 1191px;
  margin-top: 8px;
  text-align: center;
  margin-left: 20px;
  border-radius: 10px 10px 0px 0px;
}

.btnshou {
  height: 30px;
  width: 50px;
  border: none;
}
</style>
