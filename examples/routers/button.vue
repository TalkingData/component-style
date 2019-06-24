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
        <Divider>按钮样式</Divider>
        <div>
            <Button type="primary" shape="circle" icon="md-add"></Button>
            <Button type="primary" icon="md-add">图标按钮</Button>
            <Button type="primary">
                菜单按钮
                <Icon type="md-arrow-dropdown"/>
            </Button>
            <Button class="td-btn-primary">
          <span>
            <Icon type="md-add"/>
            图标按钮
          </span>
            </Button>
            <Button type="text" class="td-btn-text-primary">
      <span>
        <Icon type="md-add"/>
        图标按钮
      </span>
            </Button>
            <br><br>
            <Button shape="circle" icon="md-add"></Button>
            <Button icon="md-add">图标按钮</Button>
            <Button>
                菜单按钮
                <Icon type="md-arrow-dropdown"/>
            </Button>
            <Button class="td-btn-primary">
      <span style="color:#2185f0">
        <Icon type="md-add"/>
        图标按钮
      </span>
            </Button>
            <Button type="text">
      <span>
        <Icon type="md-add"/>
        图标按钮
      </span>
            </Button>
            <br><br>
            <Button shape="circle" icon="md-add" class="td-btn-shadow"></Button>
            <Button class="td-btn-shadow" icon="md-add">图标按钮</Button>
            <Button class="td-btn-shadow">
                菜单按钮
                <Icon type="md-arrow-dropdown"/>
            </Button>
            <Button class="td-btn-shadow" type="text">
      <span>
        <Icon type="md-add"/>
        图标按钮
      </span>
            </Button>
        </div>
        <br><br><br>
        <ButtonGroup>
            <Button type="primary">周</Button>
            <Button>月</Button>
            <Button>日</Button>
        </ButtonGroup>
        <br>
        <br>
        <ButtonGroup>
            <Button type="primary">北京</Button>
            <Button>上海</Button>
            <Button>广州</Button>
            <Button>深圳</Button>
        </ButtonGroup>
        <br>
        <br>
        <ButtonGroup>
            <Button type="primary">
                <Icon custom="i-td i-td-list_px" size="24" />
            </Button>
            <Button>
                <Icon custom="i-td i-td-apps_px" size="24" />
            </Button>
        </ButtonGroup>
        <br><br><br>
        <Button size="large" type="primary">确认</Button>
        <Button size="large" custom-icon="i-td i-td-add_px">图标按钮</Button>
        <Button size="large" type="primary">
            菜单按钮
            <Icon custom="i-td i-td-arrow_drop_down_px" />
        </Button>
        <Button size="large" type="primary" shape="circle" custom-icon="i-td i-td-add_px"></Button>
        <br><br>
        <Button size="default" type="primary">确认</Button>
        <Button size="default" custom-icon="i-td i-td-add_px">图标按钮</Button>
        <Button size="default" type="primary">
            菜单按钮
            <Icon custom="i-td i-td-arrow_drop_down_px" />
        </Button>
        <Button size="default" type="primary" shape="circle" custom-icon="i-td i-td-add_px"></Button>
        <br><br>
        <Button size="small" type="primary">确认</Button>
        <Button size="small" custom-icon="i-td i-td-add_px">图标按钮</Button>
        <Button size="small" type="primary">
            菜单按钮
            <Icon custom="i-td i-td-arrow_drop_down_px" />
        </Button>
        <Button size="small" type="primary" shape="circle" custom-icon="i-td i-td-add_px"></Button>
    </div>
</template>
<script>
    export default {}
</script>
