<template>
  <button type="button" @click="onClick" :style="styles" :class="['buts', direction === 'top-left' && 'hvr-curl-top-left', direction === 'top-right' && 'hvr-curl-top-right', direction === 'bottom-right' && 'hvr-curl-bottom-right', direction === 'bottom-left' && 'hvr-curl-bottom-left', customClass]">{{ !isSlot ? text : null }}<slot v-if="isSlot"></slot></button>
</template>

<script>
    export default {
        name: "button-curl",
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
            direction: { type: String, default: () => 'top-left' /* top-left; top-right; bottom-right; bottom-left */ }
        },
        methods: { onClick: function (w) { this.$emit('click', w); } }
    }
</script>

<style scoped>
  @import "./common.css";
  .hvr-curl-top-left {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
  .hvr-curl-top-left:before {pointer-events: none;position: absolute;content: '';height: 0;width: 0;top: 0;left: 0;background: white;background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#ffffff', endColorstr='#000000');z-index: 1000;box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: width, height;transition-property: width, height;}
  .hvr-curl-top-left:hover:before {width: 25px;height: 25px;}
  .hvr-curl-top-right {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
  .hvr-curl-top-right:before {pointer-events: none;position: absolute;content: '';height: 0;width: 0;top: 0;right: 0;background: white;background: linear-gradient(225deg, white 45%, #aaa 50%, #ccc 56%, white 80%);box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: width, height;transition-property: width, height;}
  .hvr-curl-top-right:hover:before {width: 25px;height: 25px;}
  .hvr-curl-bottom-right {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
  .hvr-curl-bottom-right:before {pointer-events: none;position: absolute;content: '';height: 0;width: 0;bottom: 0;right: 0;background: white;background: linear-gradient(315deg, white 45%, #aaa 50%, #ccc 56%, white 80%);box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: width, height;transition-property: width, height;}
  .hvr-curl-bottom-right:hover:before {width: 25px;height: 25px;}
  .hvr-curl-bottom-left {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;}
  .hvr-curl-bottom-left:before {pointer-events: none;position: absolute;content: '';height: 0;width: 0;bottom: 0;left: 0;background: white;background: linear-gradient(45deg, white 45%, #aaa 50%, #ccc 56%, white 80%);box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-property: width, height;transition-property: width, height;}
  .hvr-curl-bottom-left:hover:before {width: 25px;height: 25px;}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
