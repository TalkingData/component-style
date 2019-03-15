<template>
    <div>
    	<Divider>基础通知提醒</Divider>
        <Button type="primary" @click="open(false)">Open notice</Button>
        <Button @click="info(false)">Info</Button>
        <Button @click="success(false)">Success</Button>
        <Button @click="warning(false)">Warning</Button>
        <Button @click="error(false)">Error</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: '文字内容',
                    desc: nodesc ? '' : '消息提示文案消息提示文案消息提示文案消息提示文案消息提示文案',
                    duration: 100
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    title: '文字内容',
                    desc: nodesc ? '' : '消息提示文案消息提示文案消息提示文案消息提示文案消息提示文案',
                    duration: 100
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: '文字内容',
                    desc: nodesc ? '' : '消息提示文案消息提示文案消息提示文案消息提示文案消息提示文案'
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: '文字内容',
                    desc: nodesc ? '' : '消息提示文案消息提示文案消息提示文案消息提示文案消息提示文案'
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: '文字内容',
                    desc: nodesc ? '' : '消息提示文案消息提示文案消息提示文案消息提示文案消息提示文案'
                });
            }
        }
    }
</script>