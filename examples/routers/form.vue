<template>
    <div>
        <Form :model="form" label-position="top">
            <FormItem required>
                <span slot="label">
                    人群名称
                    <Tooltip content="提示" placement="top">
                        <Icon color="#aeb2bb" custom="i-td i-td-help_outline_px" />
                    </Tooltip>
                </span>
                <Input v-model="form.name" placeholder="例：营销潜客人群" />
            </FormItem>
            <FormItem required>
                <span slot="label">
                    人群描述
                </span>
                <Input v-model="form.desc" type="textarea" placeholder="例：营销潜客人群" />
            </FormItem>
            <FormItem>
                <span slot="label">
                    种子人群
                </span>
                <Select v-model="form.select">
                    <Option value="东直门商圈人群">东直门商圈人群</Option>
                    <Option value="海淀区商圈人群">海淀区商圈人群</Option>
                </Select>
                <div class="td-form-desc">
                    由于人群样本数不能低于1000且不能高于10,000,000，系统自动过滤不符合条件的人群
                </div>
            </FormItem>
            <FormItem>
                <span slot="label">
                    人群范围
                </span>
                <RadioGroup v-model="form.radio">
                    <Radio label="value1">包含种子人群</Radio>
                    <Radio label="value2">不包含种子人群</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem>
                <span slot="label">
                    输出人群数
                </span>
                <Slider v-model="form.slider"></Slider>
                <div class="td-form-desc">
                    <span style="float: left">100万</span>
                    <span style="float: right">2000万</span>
                </div>
            </FormItem>
            <FormItem>
                <Button type="primary">确认</Button>
                <Button type="text">取消</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    name: '',
                    desc: '',
                    select: '东直门商圈人群',
                    radio: 'value1',
                    slider: 60
                }
            };
        },
        methods: {

        }
    };
</script>
