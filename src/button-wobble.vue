<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts', direction === 'vertical' && 'hvr-wobble-vertical', direction === 'horizontal' && 'hvr-wobble-horizontal', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-wobble",
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
            // 方向
            direction: { type: String, default: () => 'horizontal' /* horizontal; vertical */ }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
    @import "./common.css";
    @-webkit-keyframes hvr-wobble-horizontal {
        16.65% {-webkit-transform: translateX(8px);transform: translateX(8px);}
        33.3% {-webkit-transform: translateX(-6px);transform: translateX(-6px);}
        49.95% {-webkit-transform: translateX(4px);transform: translateX(4px);}
        66.6% {-webkit-transform: translateX(-2px);transform: translateX(-2px);}
        83.25% {-webkit-transform: translateX(1px);transform: translateX(1px);}
        100% {-webkit-transform: translateX(0);transform: translateX(0);}
    }
    @keyframes hvr-wobble-horizontal {
        16.65% {-webkit-transform: translateX(8px);transform: translateX(8px);}
        33.3% {-webkit-transform: translateX(-6px);transform: translateX(-6px);}
        49.95% {-webkit-transform: translateX(4px);transform: translateX(4px);}
        66.6% {-webkit-transform: translateX(-2px);transform: translateX(-2px);}
        83.25% {-webkit-transform: translateX(1px);transform: translateX(1px);}
        100% {-webkit-transform: translateX(0);transform: translateX(0);}
    }
    .hvr-wobble-horizontal {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-wobble-horizontal:hover {-webkit-animation-name: hvr-wobble-horizontal;animation-name: hvr-wobble-horizontal;-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-timing-function: ease-in-out;animation-timing-function: ease-in-out;-webkit-animation-iteration-count: 1;animation-iteration-count: 1;}
    @-webkit-keyframes hvr-wobble-vertical {
        16.65% {-webkit-transform: translateY(8px);transform: translateY(8px);}
        33.3% {-webkit-transform: translateY(-6px);transform: translateY(-6px);}
        49.95% {-webkit-transform: translateY(4px);transform: translateY(4px);}
        66.6% {-webkit-transform: translateY(-2px);transform: translateY(-2px);}
        83.25% {-webkit-transform: translateY(1px);transform: translateY(1px);}
        100% {-webkit-transform: translateY(0);transform: translateY(0);}
    }
    @keyframes hvr-wobble-vertical {
        16.65% {-webkit-transform: translateY(8px);transform: translateY(8px);}
        33.3% {-webkit-transform: translateY(-6px);transform: translateY(-6px);}
        49.95% {-webkit-transform: translateY(4px);transform: translateY(4px);}
        66.6% {-webkit-transform: translateY(-2px);transform: translateY(-2px);}
        83.25% {-webkit-transform: translateY(1px);transform: translateY(1px);}
        100% {-webkit-transform: translateY(0);transform: translateY(0);}
    }
    .hvr-wobble-vertical {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-wobble-vertical:hover {-webkit-animation-name: hvr-wobble-vertical;animation-name: hvr-wobble-vertical;-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-timing-function: ease-in-out;animation-timing-function: ease-in-out;-webkit-animation-iteration-count: 1;animation-iteration-count: 1;}
</style>
