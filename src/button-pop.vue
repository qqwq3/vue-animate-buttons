<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts hvr-pop', customClass]">{{ !isSlot ? text : null }} <slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-pop",
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
    /* Pop */
    @-webkit-keyframes hvr-pop { 50% { -webkit-transform: scale(1.2); transform: scale(1.2); } }
    @keyframes hvr-pop { 50% { -webkit-transform: scale(1.2);transform: scale(1.2); } }
    .hvr-pop { display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);}
    .hvr-pop:hover { -webkit-animation-name: hvr-pop;animation-name: hvr-pop;-webkit-animation-duration: 0.3s;animation-duration: 0.3s;-webkit-animation-timing-function: linear;animation-timing-function: linear;-webkit-animation-iteration-count: 1;animation-iteration-count: 1;}
</style>
