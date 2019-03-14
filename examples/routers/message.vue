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
                this.$Message.info('This is a info tip');
            },
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            }
        }
    }
</script>