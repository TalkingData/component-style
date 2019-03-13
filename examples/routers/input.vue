<template>
    <div>
    	<Divider>文本框状态</Divider>
    	<Form label-position="left" :label-width="200" :model="form">
            <FormItem label="Disabled 禁用状态">
                <Input disabled placeholder="请输入内容" />
            </FormItem>
            <FormItem label="Enable 启用状态">
                <Input placeholder="请输入内容" />
            </FormItem>
            <FormItem prop="error" required label="Error 报错" error="输入内容出现错误" show-message>
                <Input v-model="error" placeholder="请输入内容" />
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    error: ''
                }
            }
        }
    }
</script>