<template>
    <div>
    	<Divider>基础进度条</Divider>
        <div class="app-desc">
            进度条高度需设置 <strong>stroke-width</strong>，默认是 10
        </div>
        <Progress :stroke-width="8" :percent="25" />
        <Progress :stroke-width="8" :percent="45" status="active" />
        <Progress :stroke-width="8" :percent="65" status="wrong" />
        <Progress :stroke-width="8" :percent="100" />
        <Progress :stroke-width="8" :percent="25" hide-info />
        <Divider>小型进度条</Divider>
        <div class="app-desc">
            额外增加类名 <strong>.td-progress-small</strong>
        </div>
        <Progress class="td-progress-small" :stroke-width="6" :percent="25" />
        <Progress class="td-progress-small" :stroke-width="6" :percent="45" status="active" />
        <Progress class="td-progress-small" :stroke-width="6" :percent="65" status="wrong" />
        <Progress class="td-progress-small" :stroke-width="6" :percent="100" />
        <Progress class="td-progress-small" :stroke-width="6" :percent="25" hide-info />
    </div>
</template>
<script>
    export default {

    }
</script>