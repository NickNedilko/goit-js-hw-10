!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return d.Date.now()};function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=u.test(t);return a||f.test(t)?c(t.slice(2),a?2:8):r.test(t)?NaN:+t}t=function(e,t,n){var o,i,r,u,f,c,a=0,l=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,a=t,u=e.apply(r,n)}function j(e){return a=e,f=setTimeout(O,t),l?g(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-a>=r}function O(){var e=b();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?p(n,r-(e-a)):n}(e))}function T(e){return f=void 0,s&&o?g(e):(o=i=void 0,u)}function w(){var e=b(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,t),g(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=m(t)||0,y(n)&&(l=!!n.leading,r=(d="maxWait"in n)?v(m(n.maxWait)||0,t):r,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(b())},w};var g={inputEl:document.querySelector("#search-box")};console.log(g.inputEl);g.inputEl.addEventListener("input",e(t)((function(){var e=event.target.value;console.log(e),console.log("hi")}),3e3))}();
//# sourceMappingURL=index.d280fdca.js.map
