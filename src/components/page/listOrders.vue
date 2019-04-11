<template>
    <div class="listorders">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="">
                <span style="margin-left: 20px;">已支付订单管理</span>
            </div>
        </div>
        <div class="jilu">
            <span>每页显示
                <el-select class="input" v-model="formInline.region" placeholder="10">
                    <el-option label="1" value="shanghai"></el-option>
                    <el-option label="2" value="beijing"></el-option>
                </el-select>记录
            </span>
            <span class="spanid">买家ID/订单号：
                <el-input class="elinput"></el-input>
                <el-button style="background:#ddd;">搜索</el-button>
            </span>
        </div>
        <div class="elebale">
            <el-table
                :data="tableData"
                class="table"
                stripe
                :header-cell-style="tableHeaderColor"
                slot="empty" 
            >
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="date" label="订单ID" width="150" sortable></el-table-column>
                <el-table-column prop="name" label="订单号" width="150"></el-table-column>
                <el-table-column prop="address" label="买家ID"></el-table-column>
                <el-table-column prop="date" label="买家名称" width="150"></el-table-column>
                <el-table-column prop="name" label="购买数量" width="150"></el-table-column>
                <el-table-column prop="address" label="金额"></el-table-column>
                <el-table-column prop="date" label="产品" width="150"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
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
    zhengjia() {},
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #F2F2F2;color: rgba(102,102,102,1);font-weight: 500;text-align:center;";
      }
    }
  }
};
</script>

<style scoped>
.listorders {
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
  text-align: center;
  /* border: 2px solid rgba(230, 230, 230, 1); */
  margin-left: 22px;
  border-radius: 10px 10px 0px 0px;
}
.jilu {
  height: 109px;
  width: 100%;
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  padding-left: 86px;
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.jilu .input {
  width: 78px;
  height: 26px;
  border: none;
}
.jilu .spanid {
  display: flex;
  width: 70%;
  /* border: 1px solid #000; */
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  align-items: center;
  justify-content: flex-end;
}
.jilu .spanid .elinput {
  width: 94px;
}
</style>
