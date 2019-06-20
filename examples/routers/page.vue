<template>
    <div>
    	<Divider>分页</Divider>
        <Page :total="100" show-total />
        <br>
        <Page :total="100" show-sizer />
        <br>
        <Page :total="100" show-elevator />
        <br>
        <Page :total="100" show-elevator show-sizer/>
        <Divider>小型分页</Divider>
    
        <Page :total="50" size="small" />
        <br>
        <Page :total="50" size="small" show-total />
        <br>
        <Page :total="50" size="small" show-elevator show-sizer />

    </div>
</template>
<script>
    export default {

    }
</script>