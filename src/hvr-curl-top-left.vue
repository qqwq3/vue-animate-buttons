<template>
  <button
    type="button"
    @click="onClick"
    :style="styles"
    :class="['buts hvr-overline-from-left', customClass]"
  >
    {{ !isSlot ? text : null }}
    <slot v-if="isSlot"></slot>
  </button>
</template>

<script>
    export default {
        name: "hvr-curl-top-left",
        data: function() {
          return {
              customClass: this.className,
          };
        },
        props: {
            // 按钮样式
            styles: {
                type: Object,
                default: () => {}
            },
            // 按钮点击事件
            click: {
                type: Function,
                default: () => null
            },
            // 按钮文字
            text: {
                type: String,
                default: () => '我是按钮'
            },
            // 是否插槽
            isSlot: {
                type: Boolean,
                default: () => false
            },
            className: {
                type: String,
                default: () => ''
            }
        },
        methods: {
            onClick: function (w) {
                this.$emit('click', w);
            }
        }
    }
</script>

<style scoped>
  button {
    outline: none;
    border: 0 none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  /* Overline From Left */
  .hvr-overline-from-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .hvr-overline-from-left:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    top: 0;
    background: #2098D1;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-overline-from-left:hover:before {
    right: 0;
  }
  .buts {
    background: #e1e1e1;
    padding: 15px 25px;
    position: relative;
  }
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
