<template>
    <div>
    	<Divider>基础滑动条</Divider>
        <Slider v-model="value1" show-tip="always"></Slider>
        <Slider v-model="value2" range></Slider>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>