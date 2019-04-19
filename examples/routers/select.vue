<template>
    <div>
        <Divider>选择器状态</Divider>
        <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Divider>可多选</Divider>
        <Select v-model="model10" multiple style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
         <Divider>带图标和头像的选项</Divider>
      
        
        <Select v-model="model1" style="width:200px" prefix="md-mail">
            <Option  v-for="(item,index) in cityList" :key='index' :value="item.value">
                <Icon type="md-mail" />
                {{item.label}}
            </Option>
        </Select>
         <Select v-model="model1" style="width:200px">
            <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />
            <Option v-for="item in cityList" :value="item.value" :key="item.value">
                 <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" style='width:12px'/>
                {{ item.label }}
            </Option>
        </Select>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: '选项 1',
                        label: '选项 1'
                    },
                    {
                        value: '选项 2',
                        label: '选项 2'
                    },
                    {
                        value: '选项 3',
                        label: '选项 3'
                    },
                    {
                        value: '选项 4',
                        label: '选项 4'
                    },
                    {
                        value: '选项 5',
                        label: '选项 5'
                    },
                    {
                        value: '选项 6',
                        label: '选项 6'
                    }
                ],
                model1: '',
                model10: ['选项 1', '选项 3']
            }
        }
    }
</script>