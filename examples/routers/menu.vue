<style>
/* .td-layout-menu-item .ivu-menu-submenu-title span {
    display: inline-block;
    overflow: hidden;
    width: 90px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
} */
/* .td-layout-menu .ivu-menu-submenu-title span {
    width: 0;
    transition: width 0.2s ease;
} */
/* .td-layout-menu .ivu-menu-submenu-title i {
    transform: translateX(2px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 24px;
} */
/* .td-layout-menu .ivu-menu-submenu-title .ivu-menu-submenu-title-icon {
    display: none;
} */
</style>
<template>
    <div>
        <div style="display:flex">
            <Menu
                active-name="1-2"
                :open-names="['1']"
                style="margin-right:20px"
                width="256px"
            >
                <Submenu name="1">
                    <template slot="title">
                        <Icon custom="i-td i-td-social_poll" />一级菜单
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
                        <Icon custom="i-td i-td-action_explore" />一级菜单
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
            <Menu
                active-name="1-2"
                :open-names="['1']"
                theme="dark"
                width="256px"
            >
                <Submenu name="1">
                    <template slot="title">
                        <Icon custom="i-td i-td-social_poll" />一级菜单
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
                        <Icon custom="i-td i-td-action_explore" />一级菜单
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
        <hr style='margin-bottom:16px' />

        <div style="display:flex">
            <Menu
                active-name="1"
                style="margin-right:20px"
                width="256px"
            >
                <MenuGroup title="一级分组">
                    <MenuItem name="1">
                    <Icon
                        custom="i-td i-td-social_poll"
                        color='#172d3d8c'
                    />一级菜单
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon
                        custom="i-td i-td-account_circle_px"
                        color='#172d3d8c'
                    />一级菜单
                    </MenuItem>
                </MenuGroup>
                <MenuGroup title="一级分组">
                    <MenuItem name="3">
                    <Icon
                        custom="i-td i-td-action_explore"
                        color='#172d3d8c'
                    />一级菜单
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon
                        custom="i-td i-td-settings_px"
                        color='#172d3d8c'
                    />一级菜单
                    </MenuItem>
                </MenuGroup>
            </Menu>
            <Menu
                active-name="2"
                theme="dark"
                width="256px"
            >
                <MenuGroup title="一级分组">
                    <MenuItem name="1">
                    <Icon
                        custom="i-td i-td-social_poll"
                        color='#8f98ab'
                    />一级菜单
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon
                        custom="i-td i-td-account_circle_px"
                        color='#8f98ab'
                    />一级菜单
                    </MenuItem>
                </MenuGroup>
                <MenuGroup title="一级分组">
                    <MenuItem name="3">
                    <Icon
                        custom="i-td i-td-action_explore"
                        color='#8f98ab'
                    />一级菜单
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon
                        custom="i-td i-td-settings_px"
                        color='#8f98ab'
                    />一级菜单
                    </MenuItem>
                </MenuGroup>
            </Menu>
        </div>
        <hr style='margin-bottom:16px' />

        <section style='display:flex'>
            <Layout
                :style="{minHeight: '100vh'}"
                class="td-layout-dark"
            >
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
                        @on-open-change="menuChange"
                        :theme="'dark'"
                        ref="menu"
                    >
                        <Submenu name="1">
                            <template slot="title">
                                <Icon custom="i-td i-td-social_poll" />
                                <span>一级菜单</span>
                            </template>
                            <MenuItem name="1-1">二级菜单1</MenuItem>
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
                                <Icon custom="i-td i-td-action_explore" />
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

            <Layout
                :style="{minHeight: '100vh'}"
                class="td-layout-light"
            >
                <Sider
                    collapsible
                    :collapsed-width="78"
                    v-model="isCollapsed"
                    @on-collapse="LayoutCollapse2"
                    width="256px"
                >
                    <Menu
                        active-name="1-1"
                        :open-names="names"
                        width="auto"
                        @on-open-change="menuChange"
                        ref="menu2"
                    >
                        <MenuItem name="0">
                        <Icon
                            custom="i-td i-td-social_poll"
                            color='#172d3d8c'
                        />
                        <span>Dasboard
                        </span>
                        </MenuItem>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon custom="i-td i-td-social_poll" />
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
                                <Icon custom="i-td i-td-action_explore" />
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
        </section>

    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            isCollapsed: false,
            names: ['1']
        };
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
        },
        LayoutCollapse2(data) {
            if (data) {
                this.names = [];
                this.$nextTick(() => {
                    this.$refs.menu2.updateOpened();
                });
            }
        }
    }
};
</script>