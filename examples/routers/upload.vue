<template>
    <div>
    	<Divider>上传</Divider>
    	<div class="app-desc">
    		上传组件内部和列表均通过 slot 和 API 配置完成
    	</div>
        <Upload
                multiple
                action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
    </div>
</template>
<script>
    export default {

    }
</script>