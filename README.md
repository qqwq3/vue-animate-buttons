## Vue button animation set
### Start
```javascript
  npm install vue-animate-buttons -S
```
### Usage
```javascript
// Global import in main.js
import VueAnimateButtons from 'vue-animate-buttons';
Vue.use(VueAnimateButtons);

// Import on demand in Vue file
import { ButtonBounce, ...... } from 'vue-animate-buttons';

components: {
   'button-bounce': ButtonBounce
},

<button-bounce
  @click="onClick"
  :button-type="'submit'"
  :className="'vue'"
  :is-slot="true"
  :type="'in'"
>
      This is an animation button
</button-bounce>

// CSS Control colors
.vue:before {
   background: red !important;
}
```
### Buttons
| name                           | props             | difference                                                                                     |
| ------------------------------ | ---------------- | -------------- |
| [ButtonBounce](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-bounce.vue)                           | styles, click, text, isSlot, className, type           | type (in , out)    
| [ButtonBubble](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-bubble.vue)                           | styles, click, text, isSlot, className, position           | position (left, right, top, bottom)   
| [ButtonBubbleFloat](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-bubble-float.vue)                           | styles, click, text, isSlot, className, position           | position (left, right, top, bottom)   
| [ButtonBuzz](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-buzz.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonCurl](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-curl.vue)                           | styles, click, text, isSlot, className, direction           | direction (top-left; top-right; bottom-right; bottom-left)
| [ButtonFloatShadow](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-float-shadow.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonGrow](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-grow.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonGrowRotate](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-grow-rotate.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonOverlineReveal](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-overline-reveal.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonPop](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-pop.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonPulse](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-pulse.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonPulseGrow](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-pulse-grow.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonPulseShrink](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-pulse-shrink.vue)                           | styles, click, text, isSlot, className           |
| [ButtonPush](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-push.vue)                           | styles, click, text, isSlot, className           |
| [ButtonRipple](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-ripple.vue)                           | styles, click, text, isSlot, className, type           | type (in, out)
| [ButtonRotate](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-rotate.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonShrink](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-shrink.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonUnderline](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-underline.vue)                           | styles, click, text, isSlot, className, direction           | direction (left, center, right)
| [ButtonUnderlineReveal](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-underline-reveal.vue)                           | styles, click, text, isSlot, className           | 
| [ButtonWobble](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-wobble.vue)                           | styles, click, text, isSlot, className, direction           | direction (horizontal, vertical)
