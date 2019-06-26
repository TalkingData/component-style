<template>
    <div>
       
        <Divider>基础标签</Divider>
         <Tag type="border">标签文字</Tag>
         <Tag type="border">更多标签文字</Tag>

        <Divider>可删除标签</Divider>
        <Tag closable>标签文字</Tag>
        <Tag type="border" closable>标签文字</Tag>
        <Tag color="primary" closable>标签文字</Tag>

        <Divider>多色标签</Divider>
        <Tag color="default">default</Tag>
        <Tag color="primary">primary</Tag>
        <Tag color="success">success</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="yellow">yellow</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
        <Tag color="#FFA2D3">Custom Color</Tag>

        <Divider>标签尺寸</Divider>
        <Tag type="border" class="td-tag-size-large">大型标签</Tag>
        <Tag type="border" class="td-tag-size-default">默认标签</Tag>
        <Tag type="border" class="td-tag-size-small">小型标签</Tag>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true,
                count: [0, 1, 2],
                checked: true
            };
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            },
            toggle() {
                this.checked = !this.checked;
            }
        }
    };
</script>
