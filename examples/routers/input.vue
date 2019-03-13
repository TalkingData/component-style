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
        <Divider>文本框组合</Divider>
        <Input v-model="value11">
            <span slot="prepend">http://</span>
            <span slot="append">.com</span>
        </Input>
        <br>
        <Input v-model="value12">
            <Select v-model="select1" slot="prepend" style="width: 80px">
                <Option value="http">http://</Option>
                <Option value="https">https://</Option>
            </Select>
            <Select v-model="select2" slot="append" style="width: 70px">
                <Option value="com">.com</Option>
                <Option value="org">.org</Option>
                <Option value="io">.io</Option>
            </Select>
        </Input>
        <br>
        <Input v-model="value13">
            <Select v-model="select3" slot="prepend" style="width: 80px">
                <Option value="day">Day</Option>
                <Option value="month">Month</Option>
            </Select>
            <Button slot="append" icon="ios-search"></Button>
        </Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    error: ''
                },
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>