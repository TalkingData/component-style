<template>
  <div>
    <Divider>下来菜单状态</Divider>
    <div class="app-desc">触发 Dropdown 是 slot，由开发者自定义。</div>
    <Dropdown>
      <Button type="primary">
        下拉菜单
        <Icon custom="i-td i-td-arrow_drop_down_px" class="td-dropdown-icon"/>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 16px">
      <Button>
        下拉菜单
        <Icon custom="i-td i-td-arrow_drop_down_px" class="td-dropdown-icon"/>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown>
      <Button type="text">
        下拉菜单
        <Icon custom="i-td i-td-arrow_drop_down_px" class="td-dropdown-icon"/>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {};
</script>