<template>
  <div class="shouquan">
    <div class="user">
      <div class="players">
        <img src="../../assets/img/guanli.png" alt="" class="img">
        <span style="margin-left: 20px;">玩家操作管理</span>
      </div>
    </div>
    <div class="eleb" style="margin-top:30px;margin-left:100px;">
      <nav id="nav">
        <ul>
          <li class="act">加灵石</li>
          <li>灵石详细</li>
          <li>输赢详细</li>
          <li>奖励</li>
          <li>惩罚</li>
          <li @click="jinsai">禁赛</li>
          <li @click="guanli">管理</li>
        </ul>
      </nav>
      <!--内容部分HTML代码-->
      <div id="container">
        <!-- 加灵石1 -->
        <div class="tab" style="margin-left:50px;margin-top:50px;">
          <div class="tabled">
            <table cellspacing="0" cellpadding="0" style="  margin: 0px 80px 0px 0px;">
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
            </table>
            <table cellspacing="0" cellpadding="0">
              <tr class="tr">
                <td>dd</td>
                <td>dd</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
              <tr class="tr">
                <td>11</td>
                <td>11</td>
              </tr>
            </table>
          </div>
          <div class="xuanze">
            <p>
              选择产品：
              <input type="text" class="text" placeholder="灵石">
            </p>
            <p>
              填写数量：
              <input type="text" class="text" placeholder="12">
            </p>
            <button class="butn">添加</button>
          </div>
        </div>
        <!-- 灵石详情2 -->
        <div class="tab">
          <div class="elebale">
            <el-table
              :data="tableData"
              stripe
              :header-cell-style="tableHeaderColor"
              slot="empty"
              border=""
            >
              <el-table-column prop="index" width="49"></el-table-column>
              <el-table-column prop="date" label="订单ID" width="270"></el-table-column>
              <el-table-column prop="name" label="灵石明细" width="280"></el-table-column>
              <el-table-column prop="address" label="消耗途径" width="280"></el-table-column>
              <el-table-column prop="caozuo" label="时间" width="450"></el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 输赢性情3 -->
        <div class="tab">
          <div class="elebale">
            <el-table
              :data="tableData"
              stripe
              :header-cell-style="tableHeaderColor"
              slot="empty"
              border=""
            >
              <el-table-column prop="index" width="49"></el-table-column>
              <el-table-column prop="date" label="订单ID" width="270"></el-table-column>
              <el-table-column prop="name" label="灵石明细" width="280"></el-table-column>
              <el-table-column prop="address" label="消耗途径" width="280"></el-table-column>
              <el-table-column prop="caozuo" label="时间" width="450"></el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 奖励4 -->
        <div class="tab">
          <div
            style="width:600px;height:287px;text-align: center;margin:50px 0 0 380px;background:rgba(245,245,246,1);"
          >
            <p style="line-height:46px;border:1px solid rgba(230,230,230,1);">奖励</p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
          </div>
          <div class="xuanze">
            <p>
              选择产品：
              <input type="text" class="text" placeholder="灵石">
            </p>
            <p>
              填写数量：
              <input type="text" class="text" placeholder="12">
            </p>
            <button class="butn">添加</button>
          </div>
        </div>
        <!-- 惩罚5 -->
        <div class="tab">
          <div
            style="width:600px;height:287px;text-align: center;margin:50px 0 0 380px;background:rgba(245,245,246,1);"
          >
            <p style="line-height:46px;border:1px solid rgba(230,230,230,1);">惩罚</p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
            <p class="pasoan">
              <span class="span1">11</span>
              <span class="span2">33</span>
            </p>
          </div>
          <div class="xuanze">
            <p>
              选择产品：
              <input type="text" class="text" placeholder="灵石">
            </p>
            <p>
              填写数量：
              <input type="text" class="text" placeholder="12">
            </p>
            <button class="butn">添加</button>
          </div>
        </div>
        <!-- 禁赛6 -->
        <div class="tab"></div>
        <!-- 管理7 -->
        <div class="tab"></div>
      </div>
    </div>
  </div>
</template>

<script>
window.onload = function() {
  //获取 li 也就是选项卡选项tab
  var nav = document.getElementById("nav");
  var oNav = nav.getElementsByTagName("li");
  //获取 包裹在container里面的section（内容）
  var container = document.getElementById("container");
  var oDiv = container.getElementsByClassName("tab");
  //使用 循环依次得到li
  for (var i = 0; i < oNav.length; i++) {
    oNav[i].index = i;
    //每一次得到li后执行鼠标点击操作则触发函数function
    oNav[i].onclick = function() {
      //此处除了可以使用onclick，还可以使用onmouseover
      //在li的个数内依次展示内容
      for (var i = 0; i < oNav.length; i++) {
        oNav[i].className = "";
        oDiv[i].style.display = "none";
      }
      this.className = "act";
      oDiv[this.index].style.display = "block";
    };
    for (var m = 1; m < oNav.length; m++) {
      oNav[m].className = "";
      oDiv[m].style.display = "none";
    }
  }
};
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      tableData: [
        {
          date: "003",
          name: "100",
          address: "赠送",
          caozuo: "2019-03-04"
        },
        {
          date: "001",
          name: "222",
          address: "老王",
          caozuo: "2019-03-04"
        },
        {
          date: "003",
          name: "100",
          address: "赠送",
          caozuo: "2019-03-04"
        },
        {
          date: "001",
          name: "222",
          address: "老王",
          caozuo: "2019-03-04"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    //禁赛
    jinsai() {
      this.$confirm("确定要封禁 ID：100246 的玩家账号吗？", "信息", {
        cancelButtonText: "算了",
        confirmButtonText: "确定",
        closeOnClickModal:false
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //管理
    guanli() {
      this.$confirm("确定要封禁 ID：100246 的玩家账号吗？", "信息", {
        cancelButtonText: "算了",
        confirmButtonText: "确定",
        closeOnClickModal:false
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
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
.pasoan {
  width: 100%;
  line-height: 46px;
  display: flex;
}
.pasoan span {
  border: 1px solid rgba(230, 230, 230, 1);
  font-size: 9px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.pasoan .span1 {
  width: 30%;
}
.pasoan .span2 {
  width: 70%;
}
.xuanze {
  width: 100%;
  margin-top: 40px;
  /* border: 1px solid #000; */
  text-align: center;
  font-size: 8px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.text {
  width: 150px;
  height: 20px;
  border: 1px solid rgba(153, 153, 153, 1);
  padding-left: 10px;
}
.butn {
  color: #fff;
  border: none;
  margin-top: 20px;
  margin-left: 40px;
  width: 50px;
  height: 30px;
  background: rgba(42, 87, 154, 1);
  border-radius: 2px;
}
.xuanze p {
  margin-top: 20px;
}
.eleb {
  width: 1400px;
  height: 700px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
}
.tabled {
  display: flex;
  width: 100%;
  justify-content: center;
  /* border: 1px solid #000; */
}
.act {
  border-bottom: 1px solid #ddd;
}
.tr {
  width: 500px;
  line-height: 30px;
  text-align: center;
  background: rgba(245, 245, 246, 1);
  font-size: 7px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.tr td {
  width: 250px;
  border: 1px solid #e6e6e6;
}
ul {
  height: 46px;
  display: flex;
  line-height: 46px;
  list-style: none;
  background: #e6e6e6;
}
li {
  width: 200px;
  text-align: center;
}
li:hover {
  background-color: lightblue;
}

.tab {
  height: 700px;
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

.elebale {
  width: 1330px;
  height: 324px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
  display: flex;
  margin-left: 32px;
  margin-top: 20px;
  text-align: center;
}
.elebale span {
  width: 114px;
  background: #ddd;
  height: 46px;
  line-height: 46px;
}
</style>
