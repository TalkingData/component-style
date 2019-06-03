<template>
    <div>
    	<Divider>文字按钮</Divider>
    	<div class="app-desc">
    		蓝色文字按钮加类名 <strong>.td-btn-text-primary</strong>
    	</div>
        <Button type="text">文字按钮</Button>
        <Button type="text" disabled>文字按钮</Button>
        <Button type="text" class="td-btn-text-primary">文字按钮</Button>
        <Button type="text" class="td-btn-text-primary" disabled>文字按钮</Button>

        <Divider>描边按钮</Divider>
        <div class="app-desc">
            蓝色文字按钮加类名 <strong>.td-btn-primary</strong>
        </div>
        <Button>描边按钮</Button>
        <Button disabled>描边按钮</Button>
        <Button class="td-btn-primary">描边按钮</Button>
        <Button class="td-btn-primary" disabled>描边按钮</Button>

        <Divider>填充按钮</Divider>
        <div class="app-desc">
            阴影按钮加类名 <strong>.td-btn-shadow</strong>
        </div>
        <Button type="primary">填充按钮</Button>
        <Button type="primary" disabled>填充按钮</Button>
        <Button type="primary" class="td-btn-shadow">填充按钮</Button>
        <Button type="primary" class="td-btn-shadow" disabled>填充按钮</Button>
        <Divider>按钮尺寸</Divider>
        <Button type="primary" size="small">小号按钮</Button>
        <Button type="primary">中号按钮</Button>
        <Button type="primary" size="large">大号按钮</Button>
    </div>
</template>
<script>
    export default {

    }
</script>
