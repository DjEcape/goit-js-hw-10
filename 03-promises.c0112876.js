!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),l={formEl:document.querySelector(".form"),firstDelayMsEl:document.querySelector('[name="delay"]'),delayStepMsEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]')};l.formEl.addEventListener("submit",(function(n){var o=function(n){var o,l;(o=n,l=t,new Promise((function(e,n){var t=Math.random()>.3;setTimeout((function(){t&&e({position:o,delay:l}),n({position:o,delay:l})}),l)}))).then((function(o){o.position;var t=o.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){o.position;var t=o.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=r};n.preventDefault();for(var t=l.firstDelayMsEl.valueAsNumber,r=l.delayStepMsEl.valueAsNumber,a=l.amountEl.valueAsNumber,u=1;u<=a;u++)o(u)}))}();
//# sourceMappingURL=03-promises.c0112876.js.map