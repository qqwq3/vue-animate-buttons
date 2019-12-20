<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts hvr-buzz', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-buzz",
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
            className: { type: String, default: () => '' }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
    @import "./common.css";
    /* Buzz */
    @-webkit-keyframes hvr-buzz { 50% {-webkit-transform: translateX(3px) rotate(2deg);transform: translateX(3px) rotate(2deg);} 100% {-webkit-transform: translateX(-3px) rotate(-2deg);transform: translateX(-3px) rotate(-2deg);} }
    @keyframes hvr-buzz { 50% {-webkit-transform: translateX(3px) rotate(2deg);transform: translateX(3px) rotate(2deg);} 100% {-webkit-transform: translateX(-3px) rotate(-2deg);transform: translateX(-3px) rotate(-2deg);} }
    .hvr-buzz {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-buzz:hover {-webkit-animation-name: hvr-buzz;animation-name: hvr-buzz;-webkit-animation-duration: 0.15s;animation-duration: 0.15s;-webkit-animation-timing-function: linear;animation-timing-function: linear;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}
</style>
