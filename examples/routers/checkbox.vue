<template>
    <div>
        <Checkbox v-model="single">Checkbox</Checkbox>
        <Divider>基础单选框</Divider>
        <CheckboxGroup v-model="animal" size="large">
            <Checkbox label="金斑蝶"></Checkbox>
            <Checkbox label="爪哇犀牛"></Checkbox>
            <Checkbox label="印度黑羚"></Checkbox>
        </CheckboxGroup>
        <div>
            <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
            <CheckboxGroup v-model="disabledGroup" size="large">
                <Checkbox label="香蕉" disabled></Checkbox>
                <Checkbox label="苹果" disabled></Checkbox>
                <Checkbox label="西瓜"></Checkbox>
            </CheckboxGroup>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                single: false,
                animal: ['金斑蝶'],
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>
