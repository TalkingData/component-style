<template>
    <div class="layout">
        <Layout>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                            <MenuItem :name="item" :to='"/"+item' v-for='(item,index) in list' :key='index'>{{item}}</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "button",
        "input",
        "dropdown",
        "select",
        "radio",
        "checkbox",
        "menu",
        "form",
        "switch",
        "tabs",
        "tag",
        "modal",
        "steps",
        "transfer",
        "upload",
        "alert",
        "message",
        "notice",
        "poptip",
        "tooltip",
        "page",
        "slider",
        "progress",
        "table"
      ],
    };
  },
  computed: {
    
  }
};
</script>
<style>
.app-desc {
  background: #f8f8f9;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
}
.app-desc strong {
  color: #ff6600;
}
</style>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>