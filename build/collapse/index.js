!function(){"use strict";var e,t={14:function(){var e=window.wp.blocks;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=window.wp.element,c=(window.wp.components,window.wp.blockEditor),a=window.wp.i18n;function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=(0,window.wp.data.withSelect)((function(e,t){var r=e("core/block-editor"),n=r.getBlock,o=r.getBlockParents,c=r.getBlocks,a=t.clientId,i=o(a,!0),l=i[0];return{selectedBlock:n(a),blockParents:i,siblingBlocks:c(l)}}))((function(e){e.blockProps;var t,u,s=e.attributes,f=e.setAttributes,p=e.selectedBlock,m=e.blockParents,b=e.siblingBlocks,y=(0,c.useBlockProps)(),d=(t=(0,o.useState)(!1),u=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,_x,c,a=[],_n=!0,i=!1;try{if(_x=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;_n=!1}else for(;!(_n=(n=_x.call(r)).done)&&(a.push(n.value),a.length!==t);_n=!0);}catch(e){i=!0,o=e}finally{try{if(!_n&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(i)throw o}}return a}}(t,u)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=d[0],g=(d[1],s.sameBlockCount,s.title),O=0;if(p&&m.length>0){var h,w=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}(b);try{for(w.s();!(h=w.n()).done;){var j=h.value;if(j.clientId===p.clientId)break;j.name===p.name&&O++}}catch(e){w.e(e)}finally{w.f()}O!==s.sameBlockCount&&f({sameBlockCount:O})}return console.log("Es gibt ".concat(O," Geschwisterblöcke des gleichen Typs vor diesem Block.")),(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y),(0,o.createElement)("div",{className:"accordion-group"},(0,o.createElement)("h2",{className:"accordion-heading"},(0,o.createElement)("span",{className:"read-mode-only"},g),(0,o.createElement)(c.RichText,{className:"accordion-toggle ".concat(v?"active":""),onChange:function(e){f(""===e?{title:" "}:{title:e})},value:g,placeholder:(0,a.__)("Your Text","text-box"),href:"#collapse_".concat(O),tagName:"button",allowedFormats:[],onRemove:function(){},onReplace:function(){},onMerge:function(){},onSplit:function(){},onKeyDown:function(e){"Backspace"!==e.key||g||e.stopPropagation()}})),(0,o.createElement)("div",{id:"collapse_".concat(O),className:"accordion-body ".concat(v?"active":"")},(0,o.createElement)("div",{className:"accordion-inner clearfix"},(0,o.createElement)(c.InnerBlocks,null))))))}));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f=JSON.parse('{"u2":"rrze-elements/collapse"}');(0,e.registerBlockType)(f.u2,{edit:u,save:function(e){var t=e.attributes,n=c.useBlockProps.save(),a=t.sameBlockCount;return(0,o.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n)," ",(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"accordion-group"},(0,o.createElement)("h2",{className:"accordion-heading"},(0,o.createElement)("span",{className:"read-mode-only"},"Test "),(0,o.createElement)("button",{className:"accordion-toggle","data-toggle":"collapse",href:"#collapse_".concat(a)}," ","Test"," ")),(0,o.createElement)("div",{id:"collapse_".concat(a),className:"accordion-body",style:{display:"none"}},(0,o.createElement)("div",{className:"accordion-inner clearfix"},(0,o.createElement)(c.InnerBlocks.Content,null))))))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=function(t,r,o,c){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],c=e[s][2];for(var i=!0,l=0;l<r.length;l++)(!1&c||a>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,c<a&&(a=c));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[r,o,c]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={45:0,153:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,a=r[0],i=r[1],l=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var s=l(n)}for(t&&t(r);u<a.length;u++)c=a[u],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(s)},r=self.webpackChunkrrze_elements=self.webpackChunkrrze_elements||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[153],(function(){return n(14)}));o=n.O(o)}();