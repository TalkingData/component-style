<style>
.td-layout-menu-item .ivu-menu-submenu-title span {
  display: inline-block;
  overflow: hidden;
  width: 90px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.td-layout-menu .ivu-menu-submenu-title span {
  width: 0;
  transition: width 0.2s ease;
}
.td-layout-menu .ivu-menu-submenu-title i {
  /* transform: translateX(10px); */
  transition: font-size 0.2s ease, transform 0.2s ease;
  /* vertical-align: middle; */
  /* font-size:16px; */
}
.td-layout-menu .ivu-menu-submenu-title .ivu-menu-submenu-title-icon {
  display: none;
}
/* .td-layout-menu .ivu-menu-submenu-title:hover{
    background: #2185f0!important;
  }
   .td-layout-menu .ivu-menu-submenu-title:hover i{
    color: #fff;
  } */
</style>
<template>
  <div>
    <div style="display:flex">
      <Menu active-name="1-2" :open-names="['1']" style="margin-right:20px" width="256px">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-podium" />一级菜单
          </template>
          <MenuGroup title="二级分组">
            <MenuItem name="1-1">三级菜单</MenuItem>
            <MenuItem name="1-2">三级菜单</MenuItem>
          </MenuGroup>
          <MenuGroup title="二级分组">
            <MenuItem name="1-3">三级菜单</MenuItem>
            <MenuItem name="1-4">三级菜单</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon custom="i-td i-td-account_circle_px" />一级菜单
          </template>
          <MenuGroup title="二级分组">
            <MenuItem name="2-1">三级菜单</MenuItem>
            <MenuItem name="2-2">三级菜单</MenuItem>
          </MenuGroup>
          <MenuGroup title="二级分组">
            <MenuItem name="2-3">三级菜单</MenuItem>
            <MenuItem name="2-4">三级菜单</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="md-compass" />一级菜单
          </template>
          <MenuGroup title="二级分组">
            <MenuItem name="3-1">三级菜单</MenuItem>
            <MenuItem name="3-2">三级菜单</MenuItem>
          </MenuGroup>
          <MenuGroup title="二级分组">
            <MenuItem name="3-3">三级菜单</MenuItem>
            <MenuItem name="3-4">三级菜单</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      <Menu active-name="1-2" :open-names="['1']" theme="dark" width="256px">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-podium" />一级菜单
          </template>
          <MenuGroup title="二级分组">
            <MenuItem name="1-1">三级菜单</MenuItem>
            <MenuItem name="1-2">三级菜单</MenuItem>
          </MenuGroup>
          <MenuGroup title="二级分组">
            <MenuItem name="1-3">三级菜单</MenuItem>
            <MenuItem name="1-4">三级菜单</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon custom="i-td i-td-account_circle_px" />一级菜单
          </template>
          <MenuGroup title="二级分组">
            <MenuItem name="2-1">三级菜单</MenuItem>
            <MenuItem name="2-2">三级菜单</MenuItem>
          </MenuGroup>
          <MenuGroup title="二级分组">
            <MenuItem name="2-3">三级菜单</MenuItem>
            <MenuItem name="2-4">三级菜单</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="md-compass" />一级菜单
          </template>
          <MenuGroup title="二级分组">
            <MenuItem name="3-1">三级菜单</MenuItem>
            <MenuItem name="3-2">三级菜单</MenuItem>
          </MenuGroup>
          <MenuGroup title="二级分组">
            <MenuItem name="3-3">三级菜单</MenuItem>
            <MenuItem name="3-4">三级菜单</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </div>
    <hr />

    <div style="display:flex">
      <Menu active-name="1" style="margin-right:20px" width="256px">
        <MenuGroup title="一级分组">
          <MenuItem name="1">
            <Icon type="ios-podium" color='#172d3d8c'/>一级菜单
          </MenuItem>
          <MenuItem name="2">
            <Icon custom="i-td i-td-account_circle_px" color='#172d3d8c'/>一级菜单
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="一级分组">
          <MenuItem name="3">
            <Icon type="md-compass" color='#172d3d8c'/>一级菜单
          </MenuItem>
          <MenuItem name="4">
            <Icon custom="i-td i-td-settings_px" color='#172d3d8c'/>一级菜单
          </MenuItem>
        </MenuGroup>
      </Menu>
      <Menu active-name="1" theme="dark" width="256px">
        <MenuGroup title="一级分组">
          <MenuItem name="1">
            <Icon type="ios-podium" color='#8f98ab'/>一级菜单
          </MenuItem>
          <MenuItem name="2">
            <Icon custom="i-td i-td-account_circle_px" color='#8f98ab'/>一级菜单
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="一级分组">
          <MenuItem name="3">
            <Icon type="md-compass" color='#8f98ab'/>一级菜单
          </MenuItem>
          <MenuItem name="4">
            <Icon custom="i-td i-td-settings_px" color='#8f98ab'/>一级菜单
          </MenuItem>
        </MenuGroup>
      </Menu>
    </div>
    <hr />

    <div class="layout">
      <Layout :style="{minHeight: '100vh'}" class="td-layout-dark">
        <Sider
          collapsible
          :collapsed-width="78"
          v-model="isCollapsed"
          @on-collapse="LayoutCollapse"
          width="256px"
        >
          <Menu
            active-name="1-1"
            :open-names="names"
            width="auto"
            :class="menuitemClasses"
            @on-open-change="menuChange"
            :theme="'dark'"
            ref="menu"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-podium"/>
                <span>一级菜单</span>
              </template>
              <MenuItem name="1-1">二级菜单</MenuItem>
              <MenuItem name="1-2">二级菜单</MenuItem>
              <MenuItem name="1-3">二级菜单</MenuItem>
              <MenuItem name="1-4">二级菜单</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon custom="i-td i-td-account_circle_px" />
                <span>一级菜单</span>
              </template>
              <MenuItem name="2-1">二级菜单</MenuItem>
              <MenuItem name="2-2">二级菜单</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-compass" />
                <span>一级菜单</span>
              </template>
              <MenuItem name="4-1">二级菜单</MenuItem>
              <MenuItem name="4-2">二级菜单</MenuItem>
              <MenuItem name="4-3">二级菜单</MenuItem>
              <MenuItem name="4-4">二级菜单</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
      </Layout>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      isCollapsed: false,
      names: ["1"]
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["td-layout-menu-item", this.isCollapsed ? "td-layout-menu" : ""];
    }
  },
  methods: {
    menuChange(data) {
      if (data.length) {
        this.isCollapsed = false;
      }
    },
    LayoutCollapse(data) {
      if (data) {
        this.names = [];
        this.$nextTick(() => {
          this.$refs.menu.updateOpened();
        });
      }
    }
  }
};
</script>