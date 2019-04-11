import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '导航右侧栏' },
            children: [
                {
                    path: '/dashboard'
                },
                {
                    path: '/userinfo',
                    component: resolve => require(['../components/page/userinfo.vue'], resolve),
                    meta: { title: '用户信息' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '售卡管理' }
                },
                {
                    path: '/agentSellinglist',
                    component: resolve => require(['../components/page/agentSellinglist.vue'], resolve),
                    meta: { title: '代理售卡列表' }
                },
                {
                    path: '/istrato',
                    component: resolve => require(['../components/page/istrato.vue'], resolve),
                    meta: { title: '管理员售卡列表' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '订单管理' }
                },
                {
                    path: '/editor',
                    component: resolve => require(['../components/page/editor.vue'], resolve),
                    meta: { title: '订单管理' }
                },
                {
                    path: '/listOrders',
                    component: resolve => require(['../components/page/listOrders.vue'], resolve),
                    meta: { title: '已支付订单列表' }
                },
                {
                    path: '/outstandingList',
                    component: resolve => require(['../components/page/outstandingList.vue'], resolve),
                    meta: { title: '未支付订单列表' }
                },
                {
                    path: '/playersResetinquiries',
                    component: resolve => require(['../components/page/playersResetinquiries.vue'], resolve),
                    meta: { title: '玩家充值到账查询' }
                },
                {
                    path: '/VueEditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '后台用户管理' }
                },
                {
                    path: '/theagentList',
                    component: resolve => require(['../components/page/theagentList.vue'], resolve),
                    meta: { title: '代理列表' }
                },
                {
                    path: '/shouquan',
                    component: resolve => require(['../components/page/shouquan.vue'], resolve),
                    meta: { title: '代理授权' }
                },
               
                {
                    path: '/transferAgent',
                    component: resolve => require(['../components/page/transferAgent.vue'], resolve),
                    meta: { title: '代理转移' }
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: '玩家管理' }
                },
                {
                    path: '/addtheGame',
                    component: resolve => require(['../components/page/addtheGame.vue'], resolve),
                    meta: { title: '添加比赛' }
                },
                {
                    path: '/moneyReward',
                    component: resolve => require(['../components/page/moneyReward.vue'], resolve),
                    meta: { title: '话费奖励' }
                },
                {
                    path: '/materialReward',
                    component: resolve => require(['../components/page/materialReward.vue'], resolve),
                    meta: { title: '实物奖励' }
                },
                {
                    path: '/theroomDissolved',
                    component: resolve => require(['../components/page/theroomDissolved.vue'], resolve),
                    meta: { title: '房间解散' }
                },
                {
                    path: '/robotList',
                    component: resolve => require(['../components/page/robotList.vue'], resolve),
                    meta: { title: '机器人列表' }
                },
                {
                    path: '/robotSetup',
                    component: resolve => require(['../components/page/robotSetup.vue'], resolve),
                    meta: { title: '机器人设置' }
                },
                {
                    // 图片上传组件
                    path: '/Upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '反馈意见列表管理' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: '系统管理' }
                },
                {
                    // vue-schart组件
                    path: '/backgroundUser',
                    component: resolve => require(['../components/page/backgroundUser.vue'], resolve),
                    meta: { title: '后台用户管理' }
                },
                {
                    // vue-schart组件
                    path: '/backgroundPermission',
                    component: resolve => require(['../components/page/backgroundPermission.vue'], resolve),
                    meta: { title: '后台权限管理' }
                },
                {
                    // vue-schart组件
                    path: '/backgroundLog',
                    component: resolve => require(['../components/page/backgroundLog.vue'], resolve),
                    meta: { title: '后台操作日志' }
                },
                {
                    // vue-schart组件
                    path: '/backgroundlogLogin',
                    component: resolve => require(['../components/page/backgroundlogLogin.vue'], resolve),
                    meta: { title: '后台日志登录' }
                },
                {
                    // 拖拽列表组件
                    path: '/pagelist',
                    component: resolve => require(['../components/page/pagelist.vue'], resolve),
                    meta: { title: '玩家列表' }
                },
                {
                    // 拖拽列表组件
                    path: '/playerstatusquery',
                    component: resolve => require(['../components/page/playerstatusquery.vue'], resolve),
                    meta: { title: '玩家战况查询' }
                },
                {
                    // 广播系统
                    path: '/dialog',
                    component: resolve => require(['../components/page/DragDialog.vue'], resolve),
                    meta: { title: '广播系统' }
                },
                {
                    // 消息反馈
                    path: '/list',
                    component: resolve => require(['../components/page/list.vue'], resolve),
                    meta: { title: '消息反馈' }
                },

                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '系统管理', permission: true }
                }
                // {
                //     path: '/404',
                //     component: resolve => require(['../components/page/404.vue'], resolve),
                //     meta: { title: '404' }
                // },
                // {
                //     path: '/403',
                //     component: resolve => require(['../components/page/403.vue'], resolve),
                //     meta: { title: '403' }
                // }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
