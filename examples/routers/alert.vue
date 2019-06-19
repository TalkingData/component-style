<template>
    <div>
    	<Divider>基础警告提示</Divider>
        <Alert closable>
            <Icon slot="close" custom="i-td i-td-clear_px" />
            消息提示文案
        </Alert>
        <Alert closable type="success">
            <Icon slot="close" custom="i-td i-td-clear_px" />
            成功提示文案
        </Alert>
        <Alert closable type="warning">
            <Icon slot="close" custom="i-td i-td-clear_px" />
            警告提示文案
        </Alert>
        <Alert closable type="error">
            <Icon slot="close" custom="i-td i-td-clear_px" />
            错误提示文案
        </Alert>
        <Divider>带图标的警告提示</Divider>
        <Alert show-icon closable>
            <Icon slot="icon" custom="i-td i-td-info_px" />
            <Icon slot="close" custom="i-td i-td-clear_px" />
            消息提示文案
        </Alert>
        <Alert show-icon closable type="success">
            <Icon slot="icon" custom="i-td i-td-check_circle_px" />
            <Icon slot="close" custom="i-td i-td-clear_px" />
            成功提示文案
        </Alert>
        <Alert show-icon closable type="warning">
            <Icon slot="icon" custom="i-td i-td-warning_px" />
            <Icon slot="close" custom="i-td i-td-clear_px" />
            警告提示文案
        </Alert>
        <Alert show-icon closable type="error">
            <Icon slot="icon" custom="i-td i-td-cancel_px" />
            <Icon slot="close" custom="i-td i-td-clear_px" />
            错误提示文案
        </Alert>
        <Divider>有辅助文字的警告提示</Divider>
        <Alert show-icon>
            <Icon slot="icon" custom="i-td i-td-info_px" />
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="success" show-icon>
            <Icon slot="icon" custom="i-td i-td-check_circle_px" />
            A success prompt
            <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
        </Alert>
        <Alert type="warning" show-icon>
            <Icon slot="icon" custom="i-td i-td-warning_px" />
            A warning prompt
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt.
            </template>
        </Alert>
        <Alert type="error" show-icon>
            <Icon slot="icon" custom="i-td i-td-cancel_px" />
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
