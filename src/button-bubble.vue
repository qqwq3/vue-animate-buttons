<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts', position === 'left' && 'hvr-bubble-left' , position === 'right' && 'hvr-bubble-right', position === 'top' && 'hvr-bubble-top', position === 'bottom' && 'hvr-bubble-bottom', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-bubble",
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
            // 箭头方向
            position: { type: String, default: () => 'left' /* left, right, top, bottom */ }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
    @import "./common.css";
    .hvr-bubble-left {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
    .hvr-bubble-left:before {pointer-events: none;position: absolute;z-index: -1;content: '';border-style: solid;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;top: calc(50% - 10px);left: 0;border-width: 10px 10px 10px 0;border-color: transparent #e1e1e1 transparent transparent;}
    .hvr-bubble-left:hover:before {-webkit-transform: translateX(-10px);transform: translateX(-10px);}
    .hvr-bubble-bottom {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
    .hvr-bubble-bottom:before {pointer-events: none;position: absolute;z-index: -1;content: '';border-style: solid;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;left: calc(50% - 10px);bottom: 0;border-width: 10px 10px 0 10px;border-color: #e1e1e1 transparent transparent transparent;}
    .hvr-bubble-bottom:hover:before {-webkit-transform: translateY(10px);transform: translateY(10px);}
    .hvr-bubble-right {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
    .hvr-bubble-right:before {pointer-events: none;position: absolute;z-index: -1;content: '';border-style: solid;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;top: calc(50% - 10px);right: 0;border-width: 10px 0 10px 10px;border-color: transparent transparent transparent #e1e1e1;}
    .hvr-bubble-right:hover:before {-webkit-transform: translateX(10px);transform: translateX(10px);}
    .hvr-bubble-top {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
    .hvr-bubble-top:before {pointer-events: none;position: absolute;z-index: -1;content: '';border-style: solid;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;left: calc(50% - 10px);top: 0;border-width: 0 10px 10px 10px;border-color: transparent transparent #e1e1e1 transparent;}
    .hvr-bubble-top:hover:before {-webkit-transform: translateY(-10px);transform: translateY(-10px);}
</style>
