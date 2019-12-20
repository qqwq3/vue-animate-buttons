<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts', type === 'out' && 'hvr-ripple-out', type === 'in' && 'hvr-ripple-in', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-ripple",
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
            // 类型
            type: { type: String, default: () => 'in' /* in; out */ }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
    @import "./common.css";
    @-webkit-keyframes hvr-ripple-in { 100% {top: 0;right: 0;bottom: 0;left: 0;opacity: 1;} }
    @keyframes hvr-ripple-in { 100% {top: 0;right: 0;bottom: 0;left: 0;opacity: 1;} }
    .hvr-ripple-in {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
    .hvr-ripple-in:before {content: '';position: absolute;border: #e1e1e1 solid 4px;top: -12px;right: -12px;bottom: -12px;left: -12px;opacity: 0;-webkit-animation-duration: 1s;animation-duration: 1s;}
    .hvr-ripple-in:hover:before {-webkit-animation-name: hvr-ripple-in;animation-name: hvr-ripple-in;}
    @-webkit-keyframes hvr-ripple-out { 100% {top: -12px;right: -12px;bottom: -12px;left: -12px;opacity: 0;} }
    @keyframes hvr-ripple-out { 100% {top: -12px;right: -12px;bottom: -12px;left: -12px;opacity: 0;} }
    .hvr-ripple-out {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
    .hvr-ripple-out:before {content: '';position: absolute;border: #e1e1e1 solid 6px;top: 0;right: 0;bottom: 0;left: 0;-webkit-animation-duration: 1s;animation-duration: 1s;}
    .hvr-ripple-out:hover:before {-webkit-animation-name: hvr-ripple-out;animation-name: hvr-ripple-out;}
</style>
