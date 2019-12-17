<template>
    <button type="button" @click="click" :style="styles" class="buts hvr-overline-from-left">{{ text }}</button>
</template>

<script>
    export default {
        name: "hvr-curl-top-left",
        props: {
            // 按钮样式
            styles: {
                type: Object,
                default: () => {}
            },
            // 按钮点击事件
            click: {
                type: Function,
                default: () => null
            },
            // 按钮文字
            text: {
                type: String,
                default: () => '我是按钮'
            }
        }
    }
</script>

<style scoped>

</style>
