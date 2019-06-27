<template>
    <div>
    	<Divider>上传按钮</Divider>
        <Upload action="//jsonplaceholder.typicode.com/posts/" class="td-upload-with-btn">
            <Button class="td-btn-primary">
                <Icon custom="i-td i-td-upload_px" size="18" />
                上传文件
            </Button>
            <div class="td-upload-desc">支持扩展名：.rar .zip .doc .pdf</div>
        </Upload>
        <Divider>上传图片-列表</Divider>
        <Upload action="//jsonplaceholder.typicode.com/posts/" class="td-upload-with-btn">
            <Button class="td-btn-primary">
                <Icon custom="i-td i-td-upload_px" size="18" />
                上传文件
            </Button>
            <div class="td-upload-desc">支持扩展名：.rar .zip .doc .pdf</div>
        </Upload>
        <div class="td-upload-list">
            <div class="td-upload-list-item">
                <span class="td-upload-list-item-img">
                    <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar">
                </span>
                <span class="td-upload-list-item-title">图片名称.jpg</span>
                <span class="td-upload-list-item-remove">
                    <Icon custom="i-td i-td-clear_px" />
                </span>
            </div>
            <div class="td-upload-list-item">
                <span class="td-upload-list-item-img-empty">
                    <Icon custom="i-td i-td-wallpaper_px" />
                </span>
                <span class="td-upload-list-item-title">
                    <Progress :percent="75" hide-info :stroke-width="6" />
                </span>
                <span class="td-upload-list-item-remove">
                    <Icon custom="i-td i-td-clear_px" />
                </span>
            </div>
        </div>
        <Divider>上传图片-照片墙</Divider>
        <div class="td-upload-photo-list">
            <div class="td-upload-photo-list-item">
                <div class="td-upload-photo-list-item-img">
                    <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar">
                </div>
                <div class="td-upload-photo-list-item-action">
                    <Icon custom="i-td i-td-visibility_px" />
                    <Icon custom="i-td i-td-delete_outline_px" />
                </div>
            </div>
            <div class="td-upload-photo-list-item">
                <div class="td-upload-photo-list-item-img">
                    <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar">
                </div>
                <div class="td-upload-photo-list-item-action">
                    <Icon custom="i-td i-td-visibility_px" />
                    <Icon custom="i-td i-td-delete_outline_px" />
                </div>
            </div>
            <Upload action="//jsonplaceholder.typicode.com/posts/" class="td-upload-with-photo-list">
                <div class="td-upload-photo-list-item td-upload-photo-list-item-upload">
                    <div class="td-upload-photo-list-item-main">
                        <Icon custom="i-td i-td-add_px" />
                        <span>上传图片</span>
                    </div>
                </div>
            </Upload>
        </div>
        <Divider>上传头像</Divider>
        <div class="td-upload-avatar">
            <div class="td-upload-avatar-img td-upload-avatar-img-empty">
                <Icon custom="i-td i-td-person_px" />
            </div>
            <div class="td-upload-avatar-main">
                <Upload action="//jsonplaceholder.typicode.com/posts/" class="td-upload-with-btn">
                    <Button class="td-btn-primary">
                        <Icon custom="i-td i-td-upload_px" size="18" />
                        上传文件
                    </Button>
                    <div class="td-upload-desc">支持扩展名 .jpg、.png，图片大小不超过2M</div>
                </Upload>
            </div>
        </div>
        <div class="td-upload-avatar">
            <div class="td-upload-avatar-img">
                <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar">
            </div>
            <div class="td-upload-avatar-main">
                <Upload action="//jsonplaceholder.typicode.com/posts/" class="td-upload-with-btn">
                    <Button class="td-btn-primary">
                        <Icon custom="i-td i-td-upload_px" size="18" />
                        上传文件
                    </Button>
                    <div class="td-upload-desc">支持扩展名 .jpg、.png，图片大小不超过2M</div>
                </Upload>
            </div>
        </div>
        <Divider>拖拽上传</Divider>
        <Upload class="td-upload-with-drag" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div class="td-upload-drag-main">
                <Icon custom="i-td i-td-inbox_px"></Icon>
                <p>点击或将文件拖到这里上传</p>
                <div class="td-upload-desc">支持扩展名：.rar .zip .doc .pdf</div>
            </div>
        </Upload>
    </div>
</template>
<script>
    export default {

    };
</script>
