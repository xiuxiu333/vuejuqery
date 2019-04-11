<template>
  <div class="shouquan">
    <div class="user">
      <div class="players">
        <img src="../../assets/img/guanli.png" alt="" class="img">
        <span style="margin-left: 20px;">玩家列表管理</span>
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
      <table cellspacing="0" class="try" border="1" >
        <tr class="trtd" >
          <td style="width:350px;">ID</td>
          <td>用户名</td>
          <td>驿券</td>
          <td>时间</td>
          <td>充值渠道</td>
          <td>操作</td>
        </tr>
   
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.pageList();
  },
  methods: {
    kankan() {
      alert("eeee");
    },
    pageList() {
      var _this = this;
      $.ajax({
        url: "http://192.168.0.102:8080/longchuan/player/queryInfos",
        type: "GET",
        dataType: "json",
        success(res) {
          console.log(res, "mmmm");
          var arr = res.rows;
          console.log(arr, "ddd");
          // for (let i = 0; i < arr.length; i++) {
          //   _this.tableData = arr[i];
          //   console.log(_this.tableData.loginintime, "this");
          // }
          
          var str = "<tr>";
          $.each(res.rows, function(idx, val) {
            str +=
              "<tr><td>" +
              val.id +
              "</td><td>" +
              val.name +
              "</td><td>" +
              val.flag +
              "</td><td>" +
              val.name +
              "</td><td>" +
              val.createtime +
              "</td><td><router-link to='/Icon' tag='a'>"+'查看'+
              "</router-link></td></tr>";
          });
          str += "</tr>";
          $(".try").append(str);
        }
      });
    },
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
table {
  text-align: center;
  line-height: 46px;
  border: 1px solid #e6e6e6;
  margin-left: 50px;
  border-collapse: collapse;
}
.trtd {
  width: 100%;
  height: 46px;
  text-align: center;
  border: 1px #e6e6e6 solid;
}
.trtd td {
  width: 200px;
  line-height: 46px;
  border: 1px #e6e6e6 solid;
}
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
.idsous {
  height: 80px;
  padding-left: 40px;
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
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
.btnshou {
  height: 30px;
  width: 50px;
  border: none;
}
.shouquan {
  width: 100%;
  height: 100%;
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
  text-align: center;
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
