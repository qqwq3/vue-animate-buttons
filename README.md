### Vue button animation set
#### Start
```
  npm install vue-animate-buttons -S
```
#### Introduce
```javascript
// Global import in main.js
import VueAnimateButtons from 'vue-animate-buttons';
Vue.use(VueAnimateButtons);

// Import on demand in Vue file
import { ButtonCurl, ...... } from 'vue-animate-buttons';

components: {
   'button-curl': ButtonCurl,
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

```
