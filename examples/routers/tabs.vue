<template>
    <div>
        <Divider>基础标签页</Divider>
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">标签一的内容</TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>
        </Tabs>
        <Divider>翻页</Divider>
        <Tabs type="card">
            <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        </Tabs>
        <Divider>图标</Divider>
        <Tabs>
            <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
            <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
            <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
        </Tabs>
        <Divider>删除</Divider>
        <Tabs type="card" closable @on-tab-remove="handleTabRemove">
            <TabPane :label="'tab ' + tab.name" v-for="tab in tabs2">标签 {{ tab.name }} 的内容</TabPane>
            <Button @click="handleTabsAdd2" size="small" slot="extra" icon="md-add"></Button>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 30,
                tabs2: [
                    {
                        name: 1
                    },
                    {
                        name: 2
                    },
                    {
                        name: 3
                    }
                ]
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            },
            handleTabRemove (name) {
                //        this.tabs.splice(name, 1);
            },
            handleTabsAdd2 () {
                const nextName = this.tabs.length + 1;
                this.tabs.push({
                    name: nextName
                })
            }
        }
    }
</script>
