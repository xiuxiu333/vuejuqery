<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <!-- <i class="el-icon-menu"></i> -->
            <img src="../../assets/img/sangang.png" alt="">
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <div class="guanfang">
                    <img src="../../assets/img/zuanshi.png" alt="">
                    <span>官方网站</span>
                </div>
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen" style="margin-left:41px;">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <!-- <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>-->

                <div class="ren">
                    <img src="../../assets/img/ren.png" alt="">
                </div>
                <div class="xiaoxi">
                    <img src="../../assets/img/xiaoxi.png" alt="">
                    <!-- <i class="el-icon-message"></i> -->
                </div>
                <!-- 用户头像 -->
                <dir class="username">
                    <div class="user-avator">
                        <img src="../../assets/img/img.jpg">
                    </div>
                    <!-- 用户名下拉菜单 -->
                    <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{username}}
                            <!-- <i class="el-icon-caret-bottom"></i> -->
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </dir>
            </div>
        </div>
    </div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: "linxin",
      message: 2
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: rgb(42, 87, 154);
}
.guanfang {
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 130px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 68px;
  justify-content: center;
}
.guanfang:hover {
  width: 130px;
  background: rgba(19, 18, 18, 0.219);
}
.guanfang img {
  width: 21px;
  height: 17px;
}
.guanfang span {
  margin-left: 12px;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  padding: 0 59px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 0px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  font-size: 24px;
}
.btn-fullscreen:hover {
  background: rgba(19, 18, 18, 0.219);
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 50px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.username {
  width: 150px;
  display: flex;
  align-items: center;
  height: 70px;
}
.username:hover {
  background: rgba(19, 18, 18, 0.219);
}
.user-avator {
  margin-left: 32px;
}
.user-avator img {
  display: block;
  width: 31px;
  height: 31px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
.ren {
  margin-left: 32px;
  line-height: 70px;
  width: 50px;
  text-align: center;
}
.ren:hover {
  background: rgba(19, 18, 18, 0.219);
}
.ren img {
  width: 23px;
  height: 25px;
}
.xiaoxi {
  margin-left: 32px;
  line-height: 70px;
  width: 50px;
  text-align: center;
}
.xiaoxi:hover {
  background: rgba(19, 18, 18, 0.219);
}
.xiaoxi img {
  width: 28px;
  height: 24px;
}
</style>
