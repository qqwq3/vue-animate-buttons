<template>
    <button type="button" @click="onClick" :style="styles" :class="['buts', position === 'left' && 'hvr-bubble-float-left', position === 'right' && 'hvr-bubble-float-right', position === 'top' && 'hvr-bubble-float-top', position === 'bottom' && 'hvr-bubble-float-bottom', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-bubble-float",
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
    .hvr-bubble-float-right {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-right:before {position: absolute;z-index: -1;top: calc(50% - 10px);right: 0;content: '';border-style: solid;border-width: 10px 0 10px 10px;border-color: transparent transparent transparent #e1e1e1;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-right:hover {-webkit-transform: translateX(-10px);transform: translateX(-10px);}
    .hvr-bubble-float-right:hover:before {-webkit-transform: translateX(10px);transform: translateX(10px);}
    .hvr-bubble-float-top {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-top:before {position: absolute;z-index: -1;content: '';left: calc(50% - 10px);top: 0;border-style: solid;border-width: 0 10px 10px 10px;border-color: transparent transparent #e1e1e1 transparent;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-top:hover {-webkit-transform: translateY(10px);transform: translateY(10px);}
    .hvr-bubble-float-top:hover:before {-webkit-transform: translateY(-10px);transform: translateY(-10px);}
    .hvr-bubble-float-bottom {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-bottom:before {position: absolute;z-index: -1;content: '';left: calc(50% - 10px);bottom: 0;border-style: solid;border-width: 10px 10px 0 10px;border-color: #e1e1e1 transparent transparent transparent;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-bottom:hover {-webkit-transform: translateY(-10px);transform: translateY(-10px);}
    .hvr-bubble-float-bottom:hover:before {-webkit-transform: translateY(10px);transform: translateY(10px);}
    .hvr-bubble-float-left {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-left:before {position: absolute;z-index: -1;content: '';top: calc(50% - 10px);left: 0;border-style: solid;border-width: 10px 10px 10px 0;border-color: transparent #e1e1e1 transparent transparent;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: transform;transition-property: transform;}
    .hvr-bubble-float-left:hover {-webkit-transform: translateX(10px);transform: translateX(10px);}
    .hvr-bubble-float-left:hover:before {-webkit-transform: translateX(-10px);transform: translateX(-10px);}
</style>
