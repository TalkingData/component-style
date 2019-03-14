<template>
    <div>
    	<Divider>基础警告提示</Divider>
        <Alert closable>消息提示文案</Alert>
        <Alert closable type="success">成功提示文案</Alert>
        <Alert closable type="warning">警告提示文案</Alert>
        <Alert closable type="error">错误提示文案</Alert>
        <Divider>带图标的警告提示</Divider>
        <Alert show-icon closable>消息提示文案</Alert>
        <Alert show-icon closable type="success">成功提示文案</Alert>
        <Alert show-icon closable type="warning">警告提示文案</Alert>
        <Alert show-icon closable type="error">错误提示文案</Alert>
        <Divider>有辅助文字的警告提示</Divider>
        <Alert show-icon>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="success" show-icon>
            A success prompt
            <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
        </Alert>
        <Alert type="warning" show-icon>
            A warning prompt
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt.
            </template>
        </Alert>
        <Alert type="error" show-icon>
            An error prompt
            <span slot="desc">
            Custom error description copywriting.
        </span>
        </Alert>
    </div>
</template>
<script>
    export default {

    }
</script>