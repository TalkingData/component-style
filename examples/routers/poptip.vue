<template>
    <div style="padding: 50px 200px">
    	<Divider>基础气泡卡片</Divider>
        <Poptip trigger="click" title="文字内容" content="文字提示文案文字提示文案文字提示文案">
            <Button>Click</Button>
        </Poptip>
        <Poptip trigger="click" content="文字提示文案文字提示文案文字提示文案">
            <Button>无标题</Button>
        </Poptip>
        <Divider>气泡确认框</Divider>
        <Poptip
                confirm
                title="确认要删除这条数据吗？"
                @on-ok="ok"
                @on-cancel="cancel">
            <Button>删除</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('You click ok');
            },
            cancel () {
                this.$Message.info('You click cancel');
            }
        }
    }
</script>