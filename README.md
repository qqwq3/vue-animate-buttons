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
| Name                           | Props             | Difference                                                                                     |
| ------------------------------ | ---------------- | -------------- |
| [ButtonBounce](https://github.com/qqwq3/vue-animate-buttons/blob/master/src/button-bounce.vue)                           | styles, click, text, isSlot, className, type           | type (in , out)    
| ButtonBubble                           | styles, click, text, isSlot, className, position           | position (left, right, top, bottom)   
| ButtonBubbleFloat                           | styles, click, text, isSlot, className, position           | position (left, right, top, bottom)   
| ButtonBuzz                           | styles, click, text, isSlot, className           | 
