<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts', direction === 'center' && 'hvr-underline-from-center', direction === 'left' && 'hvr-underline-from-left', direction === 'right' && 'hvr-underline-from-right', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-underline",
        data: function() { return { customClass: this.className }; },
        props: {
            // 按钮样式
            styles: { type: Object, default: () => {} },
            // 按钮点击事件
            click: { type: Function, default: () => null },
            // 按钮文字
            text: { type: String, default: () => '我是按钮' },
            // 是否插槽
            isSlot: { type: Boolean, default: () => false },
            // 元素类名
            className: { type: String, default: () => '' },
            // 开始方向
            direction: { type: String, default: () => 'left' /* left; center; right */ }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
    @import "./common.css";
    .hvr-underline-from-center {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;overflow: hidden;}
    .hvr-underline-from-center:before {content: "";position: absolute;z-index: -1;left: 51%;right: 51%;bottom: 0;background: #2098D1;height: 4px;-webkit-transition-property: left, right;transition-property: left, right;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}
    .hvr-underline-from-center:hover:before {left: 0;right: 0;}
    .hvr-underline-from-left {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;overflow: hidden;}
    .hvr-underline-from-left:before {content: "";position: absolute;z-index: -1;left: 0;right: 100%;bottom: 0;background: #2098D1;height: 4px;-webkit-transition-property: right;transition-property: right;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}
    .hvr-underline-from-left:hover:before {right: 0;}
    .hvr-underline-from-right {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;overflow: hidden;}
    .hvr-underline-from-right:before {content: "";position: absolute;z-index: -1;left: 100%;right: 0;bottom: 0;background: #2098D1;height: 4px;-webkit-transition-property: left;transition-property: left;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}
    .hvr-underline-from-right:hover:before {left: 0;}
</style>
