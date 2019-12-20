### Vue button animation set
#### Start
```javascript
  npm install vue-animate-buttons -S
```
#### Usage
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
  :direction="'top-left'"
>
      This is an animation button
</button-bounce>

// CSS Control colors
.vue:before {
   background: red !important;
}
```
#### Buttons
| Name                           | Props             | Default                                                                                     |
| ------------------------------ | ---------------- | -------------- |
| ButtonBounce                           | styles, click, text, isSlot, className, type           | ''           

