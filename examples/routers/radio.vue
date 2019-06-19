<template>
    <div>
        <Divider>基础单选框</Divider>
        <RadioGroup v-model="animal" size="large">
            <Radio label="金斑蝶"></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
        </RadioGroup>
        <Divider>按钮样式</Divider>
        <RadioGroup v-model="animal" type="button">
            <Radio label="金斑蝶"></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
        </RadioGroup>
        <div>
            <Radio v-model="disabledSingle" disabled>Radio</Radio>
            <br><br>
            <RadioGroup v-model="disabledGroup">
                <Radio label="金斑蝶" disabled></Radio>
                <Radio label="爪哇犀牛"></Radio>
                <Radio label="印度黑羚"></Radio>
            </RadioGroup>
            <br><br>
            <RadioGroup v-model="disabledGroup" type="button">
                <Radio label="金斑蝶" disabled></Radio>
                <Radio label="爪哇犀牛"></Radio>
                <Radio label="印度黑羚"></Radio>
            </RadioGroup>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                animal: '爪哇犀牛',
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>
