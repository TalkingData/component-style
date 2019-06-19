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
                <Input v-model="form.error" placeholder="请输入内容" />
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
            <Select v-model="select2" slot="append" style="width: 80px">
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
        
        <Divider>尺寸 </Divider>
        <Input v-model="value11" size="large" placeholder="large size" style='margin-bottom:20px' />
        <br>
        <Input v-model="value11" placeholder="default size" style='margin-bottom:20px'/>
         <br>
        <Input v-model="value11" size="small" placeholder="small size" />

         

         <Divider>带Icon的输入框 </Divider>
         <Input v-model="value11" icon="ios-clock-outline" placeholder="Enter something..." style="width: 100%" />
      
        <Divider>前缀和后缀图标 </Divider>
        <div>
            Props：
            <Input prefix="ios-contact" placeholder="Enter name" style="width: auto">
             <Icon custom="i-td i-td-account_circle_px" slot="prefix" />
            </Input>

            <Input suffix="ios-search" placeholder="Enter text" style="width: auto">
             <Icon type="ios-search" slot="suffix" />
            </Input>
        </div>
        <div style="margin-top: 6px">
            Slots：
            <Input placeholder="Enter name" style="width: auto">
                <Icon custom="i-td i-td-account_circle_px" slot="prefix" />
            </Input>
            <Input placeholder="Enter text" style="width: auto">
                <Icon type="ios-search" slot="suffix" />
            </Input>
        </div>
        <Divider>可清空</Divider>
        <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
        <Divider>带有数字</Divider>
        <div class="app-desc">
            需设置 <strong>slot: suffix</strong>，并设置类名 <strong>.td-input-max-length</strong>
        </div>
        <Input v-model="value4" style="width: 200px" placeholder="带有数字限制的输入框" :maxlength="16">
            <span class="td-input-max-length" slot="suffix">{{ value4.length }}/16</span>
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
                select3: 'day',
                value4: ''
            }
        }
    }
</script>