<template>
    <Button type="primary" @click="renderFunc">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
                    duration: 100,
                    render: h => {
                        return h('div', [
                            h('div', {
                                class: 'ivu-notice-desc'
                            }, '消息通知内容消息通知内容消息通知内容消息通知内容消息通知内容'),
                            h('Button',{
                                style: {
                                    float: 'right',
                                    'margin-top': '10px'
                                },
                                props:{
                                    type:'primary',
                                    size:'small'
                                }
                            },'确认')
                        ]);
                    }
                });
            }
        }
    }
</script>

