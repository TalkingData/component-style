<style scoped>
  .layout-con{
    height: 100%;
    width: 100%;
  }
  .menu-item .ivu-menu-submenu-title span{
    display: inline-block;
    
    overflow: hidden;
    width: 90px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .collapsed-menu .ivu-menu-submenu-title span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu .ivu-menu-submenu-title i{
    transform: translateX(10px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size:16px;
  }
  .collapsed-menu .ivu-menu-submenu-title .ivu-menu-submenu-title-icon{
    display:none;
  }
</style>
<template>
  <div>
    <!-- <Divider>基础头部导航</Divider>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                用户管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
        </Menu>
        <br>
        <p>Change theme</p>
        <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </RadioGroup>

        <Divider>左侧导航</Divider>
        <Menu active-name="1-2" :open-names="['1']" :theme="theme1">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-analytics" />
                    Navigation One
                </template>
                <MenuGroup title="Item 1">
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                </MenuGroup>
                <MenuGroup title="Item 2">
                    <MenuItem name="1-3">Option 3</MenuItem>
                    <MenuItem name="1-4">Option 4</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-filing" />
                    Navigation Two
                </template>
                <MenuItem name="2-1">Option 5</MenuItem>
                <MenuItem name="2-2">Option 6</MenuItem>
                <Submenu name="3">
                    <template slot="title">Submenu</template>
                    <MenuItem name="3-1">Option 7</MenuItem>
                    <MenuItem name="3-2">Option 8</MenuItem>
                </Submenu>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-cog" />
                    Navigation Three
                </template>
                <MenuItem name="4-1">Option 9</MenuItem>
                <MenuItem name="4-2">Option 10</MenuItem>
                <MenuItem name="4-3">Option 11</MenuItem>
                <MenuItem name="4-4">Option 12</MenuItem>
            </Submenu>
    </Menu>-->
    <div style="display:flex">
      <Menu active-name="1-2" :open-names="['1']" style="margin-right:20px" width='256px'>
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
      <Menu active-name="1-2" :open-names="['1']" theme="dark" width='256px'>
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
     <hr>
     
     <div style='display:flex'>
        <Menu active-name="1" style='margin-right:20px' width='256px'>
            <MenuGroup title="一级分组">
                <MenuItem name="1">
                <Icon type="ios-podium" />
                一级菜单</MenuItem>
                <MenuItem name="2">
                <Icon custom="i-td i-td-account_circle_px" />
                一级菜单</MenuItem>
            </MenuGroup>
            <MenuGroup title="一级分组">
                <MenuItem name="3">
                <Icon type="md-compass" />
                一级菜单</MenuItem>
                <MenuItem name="4">
                <Icon custom="i-td i-td-settings_px" />
                一级菜单</MenuItem>
            </MenuGroup>
        </Menu>
        <Menu active-name="1"  theme="dark" width='256px'>
            <MenuGroup title="一级分组">
                <MenuItem name="1">
                <Icon type="ios-podium" />
                一级菜单</MenuItem>
                <MenuItem name="2">
                <Icon custom="i-td i-td-account_circle_px" />
                一级菜单</MenuItem>
            </MenuGroup>
            <MenuGroup title="一级分组">
                <MenuItem name="3">
                <Icon type="md-compass" />
                一级菜单</MenuItem>
                <MenuItem name="4">
                <Icon custom="i-td i-td-settings_px" />
                一级菜单</MenuItem>
            </MenuGroup>
        </Menu>
    </div>
    <hr>

     <div class="layout">
    <Layout :style="{minHeight: '100vh'}" >
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed" @on-collapse='LayoutCollapse' width="256px">
        <Menu active-name="1-1" :open-names="names"  width="auto" :class="menuitemClasses" @on-open-change='menuChange' :theme="'dark'" ref="topmenu">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics" />
              <span>Navigation One</span>  
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
            <MenuItem name="1-4">Option 4</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />
              <span>Navigation Two</span>  
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-cog" />
              <span> Navigation Three</span>  
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
         </Sider>
    </Layout>
  </div>
  </div>
</template>
<script>
export default {
//   data() {
//     return {
//       theme1: "light"
//     };
//   },
   data () {
      return {
        isCollapsed: false,
        names:['1']
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods:{
      menuChange(data){
        if(data.length){
          this.isCollapsed=false
        }
      },
      LayoutCollapse(data){
        if(data){
          this.names=[]
          this.$nextTick(() => {
            this.$refs.topmenu.updateOpened()
          })
        }
      }
    }
};
</script>