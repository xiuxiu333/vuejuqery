<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      text-color="#000"
      active-text-color="#666666"
      unique-opened
      router
    >
      <div class="username">
        <div class="user-avator">
          <img src="../../assets/img/img.jpg">
        </div>
        <div class="zaizhu">
          <p>用户01</p>
          <div style="margin-top:10px;">
            <span>
              <img src="../../assets/img/zaixian.png" alt="">&nbsp在线
            </span>
            <span style="margin-left:20px;">
              <img src="../../assets/img/zhuxiao.png" alt="">&nbsp注销
            </span>
          </div>
        </div>
      </div>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-lx-home",
          index: "dashboard",
          title: "用户列表",
          subs: [
            {
              index: "userinfo",
              title: "用户信息"
            }
          ]
        },
        {
          icon: "el-icon-lx-cascades",
          index: "table",
          title: "售卡管理",
          subs: [
            {
              index: "agentSellinglist",
              title: "代理售卡列表"
            },
            {
              index: "istrato",
              title: "管理员售卡列表"
            }
          ]
        },
        {
          icon: "el-icon-lx-copy",
          index: "tabs",
          title: "订单管理",
          subs: [
            {
              index: "editor",
              title: "订单管理"
            },
            {
              index: "listOrders",
              title: "已支付订单列表"
            },
            {
              index: "outstandingList",
              title: "未支付订单列表"
            },
            {
              index: "playersResetinquiries",
              title: "玩家充值到账查询"
            }
          ]
        },
        {
          icon: "el-icon-lx-calendar",
          index: "3",
          title: "代理管理",
          subs: [
            {
              index: "theagentList",
              title: "代理列表"
            },
            {
              index: "shouquan",
              title: "代理授权"
            },
            {
              index: "transferAgent",
              title: "代理转移"
            }
          ]
        },
        {
          icon: "el-icon-lx-emoji",
          index: "icon",
          title: "游戏管理",
          subs: [
            {
              index: "addtheGame",
              title: "添加比赛"
            },
            {
              index: "moneyReward",
              title: "话费奖励"
            },
            {
              index: "materialReward",
              title: "实物奖励"
            },
            {
              index: "theroomDissolved",
              title: "房间解散"
            }
          ]
        },
        {
          icon: "el-icon-lx-favor",
          index: "charts",
          title: "机器人管理",
          subs: [
            {
              index: "robotList",
              title: "机器人列表"
            },
            {
              index: "robotSetup",
              title: "机器人设置"
            }
          ]
        },
        {
          icon: "el-icon-rank",
          index: "6",
          title: "玩家管理",
          subs: [
            {
              index: "pagelist",
              title: "玩家列表"
            },
            {
              index: "playerstatusquery",
              title: "玩家战况查询"
            }
          ]
        },
        {
          icon: "el-icon-lx-warn",
          index: "7",
          title: "系统管理",
          subs: [
            {
              index: "backgroundUser",
              title: "后台用户管理"
            },
            {
              index: "backgroundPermission",
              title: "后台权限管理"
            },
            {
              index: "backgroundLog",
              title: "后台操作日志"
            },
            {
              index: "backgroundlogLogin",
              title: "后台日志登录"
            }
            // {
            //     index: '404',
            //     title: '404页面'
            // }
          ]
        },
        {
           icon: "el-icon-loading",
          index: "broadcastingSystem",
          title: "广播系统",
           subs: [
             {
               index:"VueEditor",
               title:"后台用户管理"
             }
           ]
        },
        {
          icon: "el-icon-document",
          index: "messageFeedback",
          title: "消息反馈",
           subs: [
             {
               index:"Upload",
               title:"反馈意见列表管理"
             }
           ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
 
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.username {
  display: flex;
  height: 82px;
  align-items: center;
  background: rgba(227, 230, 235, 1);
}
.user-avator {
  margin-left: 12px;
}

.user-avator img {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.zaizhu {
  margin-left: 6px;
}
.zaizhu p {
  font-size: 16px;
}
.zaizhu span {
  font-size: 14px;
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  background-color: #eaedf2;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.el-submenu__title i {
  color: #000;
}
</style>
