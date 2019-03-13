<template>
    <div>
        <Divider>基础单选框</Divider>
        <CheckboxGroup v-model="animal" size="large">
            <Checkbox label="金斑蝶"></Checkbox>
            <Checkbox label="爪哇犀牛"></Checkbox>
            <Checkbox label="印度黑羚"></Checkbox>
        </CheckboxGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                animal: ['金斑蝶']
            }
        }
    }
</script>