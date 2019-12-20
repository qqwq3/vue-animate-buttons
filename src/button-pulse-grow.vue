<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts hvr-pulse-grow', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-pulse-grow",
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
    /* Pulse Grow */
    @-webkit-keyframes hvr-pulse-grow { to {-webkit-transform: scale(1.1);transform: scale(1.1);} }
    @keyframes hvr-pulse-grow { to {-webkit-transform: scale(1.1);transform: scale(1.1);} }
    .hvr-pulse-grow {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-pulse-grow:hover {-webkit-animation-name: hvr-pulse-grow;animation-name: hvr-pulse-grow;-webkit-animation-duration: 0.3s;animation-duration: 0.3s;-webkit-animation-timing-function: linear;animation-timing-function: linear;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-direction: alternate;animation-direction: alternate;}
</style>
