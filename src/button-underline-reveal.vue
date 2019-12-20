<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts hvr-underline-reveal', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-underline-reveal",
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
    /* Underline Reveal */
    .hvr-underline-reveal {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;overflow: hidden;}
    .hvr-underline-reveal:before {content: "";position: absolute;z-index: -1;left: 0;right: 0;bottom: 0;background: #2098D1;height: 4px;-webkit-transform: translateY(4px);transform: translateY(4px);-webkit-transition-property: transform;transition-property: transform;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}
    .hvr-underline-reveal:hover:before {-webkit-transform: translateY(0);transform: translateY(0);}
</style>
