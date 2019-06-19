<template>
    <div>
    	<Divider>常规对话框</Divider>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal
                v-model="modal1"
                title="标题名称"
                @on-ok="ok"
                @on-cancel="cancel">
            <Icon slot="close" custom="i-td i-td-clear_px" />
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
        <Divider>紧凑型对话框</Divider>
        <div class="app-desc">
            设置 <strong>class-name</strong> 为 <strong>td-modal-compact</strong>
        </div>
        <Button type="primary" @click="modal2 = true">Display dialog box</Button>
        <Modal
                v-model="modal2"
                title="紧凑型对话框"
                @on-ok="ok"
                class-name="td-modal-compact"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
        <Divider>提示类对话框</Divider>
        <Button @click="instance('info')">Info</Button>
        <Button @click="instance('success')">Success</Button>
        <Button @click="instance('warning')">Warning</Button>
        <Button @click="instance('error')">Error</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                modal2: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>
