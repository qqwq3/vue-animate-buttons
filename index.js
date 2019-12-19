
import ButtonBounce from './src/button-bounce';
import ButtonBubble from './src/button-bubble';
import ButtonBubbleFloat from './src/button-bubble-float';
import ButtonBuzz from './src/button-buzz';
import ButtonCurl from './src/button-curl';
import ButtonFloatShadow from './src/button-float-shadow';
import ButtonGrow from './src/button-grow';
import ButtonGrowRotate from './src/button-grow-rotate';
import ButtonOverlineReveal from './src/button-overline-reveal';
import ButtonPop from './src/button-pop';
import ButtonPulse from './src/button-pulse';
import ButtonPulseGrow from './src/button-pulse-grow';
import ButtonPulseShrink from './src/button-pulse-shrink';
import ButtonPush from './src/button-pulse';
import ButtonRipple from './src/button-ripple';
import ButtonRotate from './src/button-rotate';
import ButtonShrink from './src/button-shrink';
import ButtonUnderline from './src/button-underline';
import ButtonUnderlineReveal from './src/button-underline-reveal';
import ButtonWobble from './src/button-wobble';

export {
    ButtonBounce,
    ButtonBubble,
    ButtonBubbleFloat,
    ButtonBuzz,
    ButtonCurl,
    ButtonFloatShadow,
    ButtonGrow,
    ButtonGrowRotate,
    ButtonOverlineReveal,
    ButtonPop,
    ButtonPulse,
    ButtonPulseGrow,
    ButtonPulseShrink,
    ButtonPush,
    ButtonRipple,
    ButtonRotate,
    ButtonShrink,
    ButtonUnderline,
    ButtonUnderlineReveal,
    ButtonWobble
}

export default {
    install (Vue) {
        Vue.component('button-bounce', ButtonBounce);
        Vue.component('button-bubble', ButtonBubble);
        Vue.component('button-bubble-float', ButtonBubbleFloat);
        Vue.component('button-buzz', ButtonBuzz);
        Vue.component('button-curl', ButtonCurl);
        Vue.component('button-float-shadow', ButtonFloatShadow);
        Vue.component('button-grow', ButtonGrow);
        Vue.component('button-grow-rotate', ButtonGrowRotate);
        Vue.component('button-overline-reveal', ButtonOverlineReveal);
        Vue.component('button-pop', ButtonPop);
        Vue.component('button-pulse', ButtonPulse);
        Vue.component('button-pulse-grow', ButtonPulseGrow);
        Vue.component('button-pulse-shrink', ButtonPulseShrink);
        Vue.component('button-push', ButtonPush);
        Vue.component('button-ripple', ButtonRipple);
        Vue.component('button-rotate', ButtonRotate);
        Vue.component('button-shrink', ButtonShrink);
        Vue.component('button-underline', ButtonUnderline);
        Vue.component('button-underline-reveal', ButtonUnderlineReveal);
        Vue.component('button-wobble', ButtonWobble);
    }
}
