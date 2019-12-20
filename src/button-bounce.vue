<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts', type === 'in' && 'hvr-bounce-out', type === 'out' && 'hvr-bounce-in', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-bounce",
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
    /* Bounce In */
    .hvr-bounce-in {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);-webkit-transition-duration: 0.5s;transition-duration: 0.5s;}
    .hvr-bounce-in:hover {-webkit-transform: scale(1.2);transform: scale(1.2);-webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);}
    .hvr-bounce-out {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);-webkit-transition-duration: 0.5s;transition-duration: 0.5s;}
    .hvr-bounce-out:hover {-webkit-transform: scale(0.8);transform: scale(0.8);-webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);}
</style>
