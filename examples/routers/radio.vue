<template>
    <div>
        <Divider>基础单选框</Divider>
        <RadioGroup v-model="animal">
            <Radio label="金斑蝶"></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
        </RadioGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                animal: '爪哇犀牛'
            }
        }
    }
</script>