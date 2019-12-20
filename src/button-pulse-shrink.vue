<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts hvr-pulse-shrink', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-pulse-shrink",
        data: function() { return { customClass: this.className }; },
        props: {
            // 按钮样式
            styles: { type: Object, default: () => {} },
            // 按钮点击事件
            click: { type: Function, default: () => null },
            // 按钮文字
            text: { type: String, default: () => '我是按钮'},
            // 是否插槽
            isSlot: { type: Boolean, default: () => false },
            // 元素类名
            className: { type: String, default: () => '' }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
    @import "./common.css";
    /* Pulse Shrink */
    @-webkit-keyframes hvr-pulse-shrink { to {-webkit-transform: scale(0.9);transform: scale(0.9);} }
    @keyframes hvr-pulse-shrink { to {-webkit-transform: scale(0.9);transform: scale(0.9);} }
    .hvr-pulse-shrink {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-pulse-shrink:hover {-webkit-animation-name: hvr-pulse-shrink;animation-name: hvr-pulse-shrink;-webkit-animation-duration: 0.3s;animation-duration: 0.3s;-webkit-animation-timing-function: linear;animation-timing-function: linear;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-direction: alternate;animation-direction: alternate;}
</style>
