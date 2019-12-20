<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts hvr-pulse', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-pulse",
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
    /* Pulse */
    @-webkit-keyframes hvr-pulse { 25% {-webkit-transform: scale(1.1);transform: scale(1.1);} 75% {-webkit-transform: scale(0.9);transform: scale(0.9);} }
    @keyframes hvr-pulse { 25% {-webkit-transform: scale(1.1);transform: scale(1.1);} 75% {-webkit-transform: scale(0.9);transform: scale(0.9);} }
    .hvr-pulse {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-pulse:hover {-webkit-animation-name: hvr-pulse;animation-name: hvr-pulse;-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-timing-function: linear;animation-timing-function: linear;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}
</style>
