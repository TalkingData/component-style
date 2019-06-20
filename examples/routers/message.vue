<template>
    <div>
    	<Divider>全局提示</Divider>
        <Button type="primary" @click="info">Display info prompt</Button>
        <Button @click="success">Display success prompt</Button>
        <Button @click="warning">Display warning prompt</Button>
        <Button @click="error">Display error prompt</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info({
                    content: '提示内容',
                    duration: 1000
                });
            },
            success () {
                this.$Message.success({
                    content: '提示内容',
                    duration: 1000
                });
            },
            warning () {
                this.$Message.warning({
                    content: '提示内容',
                    duration: 1000
                });
            },
            error () {
                this.$Message.error({
                    content: '提示内容',
                    duration: 1000
                });
            }
        }
    }
</script>
