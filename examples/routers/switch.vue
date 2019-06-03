<template>
    <div>
        <Divider>基础</Divider>
        <i-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        <i-switch>
            <Icon type="md-checkmark" slot="open"></Icon>
            <Icon type="md-close" slot="close"></Icon>
        </i-switch>
        <br><br>
        <i-switch size="large">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </i-switch>
        <i-switch size="large">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
        </i-switch>
        <Divider>尺寸</Divider>
        <i-switch size="large" />
        <i-switch />
        <i-switch size="small" />
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
