<template>
  <div class="theme">
    <div class="siderBar">
      <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" :unique-opened="true">
        <el-menu-item index="/index">
          <i class="iconfont my_icon_class">&#xe608;</i>首页</el-menu-item>
        <el-menu-item index="/index/carManager">
          <i class="iconfont my_icon_class">&#xe613;</i>车辆管理</el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont my_icon_class">&#xe67d;</i>报表管理</template>
          <el-menu-item-group>
            <el-menu-item index="/index/consumeData?type=day">消费数据</el-menu-item>
            <el-menu-item index="/index/allDaysData?type=0">24小时数据走势</el-menu-item>
            <el-menu-item index="/index/hotMap?type=curHour">热力图</el-menu-item>
            <!-- <el-menu-item index="/index/abnormalData">异常数据</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/index/partnerManager">
          <i class="iconfont my_icon_class">&#xe623;</i>合伙人管理</el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="iconfont my_icon_class">&#xe6e0;</i>营收记录</template>
          <el-menu-item-group>
            <el-menu-item index="/index/earningsDetail?type=getRevenueCurDay">收益明细</el-menu-item>
            <el-menu-item index="/index/settlementRecord">结算记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/index/accountManager">
          <i class="iconfont my_icon_class">&#xe607;</i>账号管理</el-menu-item>
        <el-menu-item index="/index/memberCenter">
          <i class="iconfont my_icon_class">&#xe611;</i>个人中心</el-menu-item>
        <el-menu-item index="/index/roleManager">
          <i class="iconfont my_icon_class">&#xe610;</i>角色管理</el-menu-item>
        <el-menu-item index="/index/messageCenter">
          <i class="iconfont my_icon_class">&#xe624;</i>消息中心</el-menu-item>
        <el-submenu index="10">
          <template slot="title">
            <i class="iconfont my_icon_class">&#xe603;</i>日志管理</template>
          <el-menu-item-group>
            <el-menu-item index="/index/logManager">登录日志</el-menu-item>
            <el-menu-item index="/index/logManager/operationLog">操作日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<style>
div.theme {
  padding: 30px 0 0 20px;
}

.my_icon_class {
  margin-right: 5px;
  font-size: 18px;
}

.el-menu {
  border-radius: 2px;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
}

.el-submenu .el-menu {
  background: #fff;
}

div.siderBar {
  height: 945px;
  background: #fff;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #fff;
  background: #cecece;
  border-left: 3px solid #fced4a;
}

.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
 
.el-menu-item, .el-submenu__title {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #999999;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    /*transition: border-color .3s,background-color .3s,color .3s;*/
    box-sizing: border-box;
    white-space: nowrap;
}


.el-menu-item, .el-submenu__title li i {
  color: #999999;
}
.el-menu-item-group__title{display: none}
/*
div.el-submenu__title li i.el-icon-menu {
  color: #999999 !important;
}*/
</style>

