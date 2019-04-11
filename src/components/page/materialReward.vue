<template>
    <div class="userinfo">
        <div class="user">
            <div class="players">
                <img src="../../assets/img/guanli.png" alt="" class="img">
                <span style="margin-left: 20px;">实物奖励管理</span>
            </div>
        </div>
        <div class="elebale">
            <el-table
                :data="tableData"
                slot="empty"
                class="table"
                stripe
                :header-cell-style="tableHeaderColor"
                border
            >
                <el-table-column type="index" width="41"></el-table-column>
                <el-table-column prop="date" label="编号" width="165"></el-table-column>
                <el-table-column prop="name" label="比赛场次" width="165"></el-table-column>
                <el-table-column prop="address" label="游戏类型"></el-table-column>
                <el-table-column prop="date" label="实物场" width="165"></el-table-column>
                <el-table-column prop="name" label="收货人名额" width="165"></el-table-column>
                <el-table-column prop="address" label="收货人电话"></el-table-column>
                <el-table-column prop="date" label="收货人地址" width="165"></el-table-column>
                <el-table-column prop="name" label="奖品状态" width="165"></el-table-column>
                <el-table-column prop="date" label="奖品操作" width="165">
                    <template scope="scope">
                        <el-button @click="biangeng" style="color:#fff;background:#C61616;border-radius:6px;">变更</el-button>
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
          date: "88888888",
          name: "斗地主",
          address: "企业赛"
        },
        {
          date: "88888888",
          name: "麻将",
          address: "个人赛"
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
    biangeng(){
      this.$confirm('确定改变奖品状态吗？', '信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          closeOnClickModal:false,
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
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

.elebale {
  width: 100%;
  height: 100%;
  margin-top: 56px;
}
.table {
  width: 83%;
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
