(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{E9dt:function(e,n,t){},Va1j:function(e,n,t){"use strict";t.d(n,"a",(function(){return re})),t.d(n,"c",(function(){return oe})),t.d(n,"d",(function(){return ae})),t.d(n,"b",(function(){return ie})),t.d(n,"f",(function(){return te})),t.d(n,"g",(function(){return G})),t.d(n,"e",(function(){return Q}));var r=t("ERkP"),o=t.n(r),a=(t("E9dt"),t("j/s1"));function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n,t){return n&&c(e.prototype,n),t&&c(e,t),e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?h(e):n}function v(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return g(this,t)}}function y(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var x=function e(n){var t=this,r=n.expanded,o=void 0===r?[]:r,a=n.allowMultipleExpanded,c=void 0!==a&&a,d=n.allowZeroExpanded,u=void 0!==d&&d;i(this,e),l(this,"expanded",void 0),l(this,"allowMultipleExpanded",void 0),l(this,"allowZeroExpanded",void 0),l(this,"toggleExpanded",(function(e){return t.isItemDisabled(e)?t:t.isItemExpanded(e)?t.augment({expanded:t.expanded.filter((function(n){return n!==e}))}):t.augment({expanded:t.allowMultipleExpanded?[].concat(y(t.expanded),[e]):[e]})})),l(this,"isItemDisabled",(function(e){var n=t.isItemExpanded(e),r=1===t.expanded.length;return Boolean(n&&!t.allowZeroExpanded&&r)})),l(this,"isItemExpanded",(function(e){return-1!==t.expanded.indexOf(e)})),l(this,"getPanelAttributes",(function(e,n){var r=null!=n?n:t.isItemExpanded(e);return{role:t.allowMultipleExpanded?void 0:"region","aria-hidden":t.allowMultipleExpanded?!r:void 0,"aria-labelledby":t.getButtonId(e),id:t.getPanelId(e),hidden:!r||void 0}})),l(this,"getHeadingAttributes",(function(){return{role:"heading"}})),l(this,"getButtonAttributes",(function(e,n){var r=null!=n?n:t.isItemExpanded(e),o=t.isItemDisabled(e);return{id:t.getButtonId(e),"aria-disabled":o,"aria-expanded":r,"aria-controls":t.getPanelId(e),role:"button",tabIndex:0}})),l(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),l(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),l(this,"augment",(function(n){return new e(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({expanded:t.expanded,allowMultipleExpanded:t.allowMultipleExpanded,allowZeroExpanded:t.allowZeroExpanded},n))})),this.expanded=o,this.allowMultipleExpanded=c,this.allowZeroExpanded=u},w=Object(r.createContext)(null),A=function(e){p(t,e);var n=v(t);function t(){var e;i(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return l(h(e=n.call.apply(n,[this].concat(o))),"state",new x({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),l(h(e),"toggleExpanded",(function(n){e.setState((function(e){return e.toggleExpanded(n)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),l(h(e),"isItemDisabled",(function(n){return e.state.isItemDisabled(n)})),l(h(e),"isItemExpanded",(function(n){return e.state.isItemExpanded(n)})),l(h(e),"getPanelAttributes",(function(n,t){return e.state.getPanelAttributes(n,t)})),l(h(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),l(h(e),"getButtonAttributes",(function(n,t){return e.state.getButtonAttributes(n,t)})),e}return d(t,[{key:"render",value:function(){var e=this.state,n=e.allowZeroExpanded,t=e.allowMultipleExpanded;return Object(r.createElement)(w.Provider,{value:{allowMultipleExpanded:t,allowZeroExpanded:n,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(r.PureComponent);l(A,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var O,I=function(e){p(t,e);var n=v(t);function t(){var e;i(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return l(h(e=n.call.apply(n,[this].concat(o))),"renderChildren",(function(n){return n?e.props.children(n):null})),e}return d(t,[{key:"render",value:function(){return Object(r.createElement)(w.Consumer,null,this.renderChildren)}}]),t}(r.PureComponent);!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(O||(O={}));var j=O,_=0;function C(){var e=_;return _+=1,"raa-".concat(e)}var P=/[\u0009\u000a\u000c\u000d\u0020]/g;function k(e){return""!==e&&!P.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var N=Object(r.createContext)(null),D=function(e){p(t,e);var n=v(t);function t(){var e;i(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return l(h(e=n.call.apply(n,[this].concat(a))),"toggleExpanded",(function(){e.props.accordionContext.toggleExpanded(e.props.uuid)})),l(h(e),"renderChildren",(function(n){var t=e.props,o=t.uuid,a=t.dangerouslySetExpanded,i=null!=a?a:n.isItemExpanded(o),c=n.isItemDisabled(o),d=n.getPanelAttributes(o,a),l=n.getHeadingAttributes(o),u=n.getButtonAttributes(o,a);return Object(r.createElement)(N.Provider,{value:{uuid:o,expanded:i,disabled:c,toggleExpanded:e.toggleExpanded,panelAttributes:d,headingAttributes:l,buttonAttributes:u}},e.props.children)})),e}return d(t,[{key:"render",value:function(){return Object(r.createElement)(I,null,this.renderChildren)}}]),t}(r.Component),S=function(e){return Object(r.createElement)(I,null,(function(n){return Object(r.createElement)(D,u({},e,{accordionContext:n}))}))},M=function(e){p(t,e);var n=v(t);function t(){var e;i(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return l(h(e=n.call.apply(n,[this].concat(o))),"renderChildren",(function(n){return n?e.props.children(n):null})),e}return d(t,[{key:"render",value:function(){return Object(r.createElement)(N.Consumer,null,this.renderChildren)}}]),t}(r.PureComponent),B=function(e){p(t,e);var n=v(t);function t(){var e;i(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return l(h(e=n.call.apply(n,[this].concat(a))),"instanceUuid",C()),l(h(e),"renderChildren",(function(n){var t=e.props,o=(t.uuid,t.className),a=t.activeClassName,i=(t.dangerouslySetExpanded,b(t,["uuid","className","activeClassName","dangerouslySetExpanded"])),c=n.expanded&&a?a:o;return Object(r.createElement)("div",u({"data-accordion-component":"AccordionItem",className:c},i))})),e}return d(t,[{key:"render",value:function(){var e=this.props,n=e.uuid,t=void 0===n?this.instanceUuid:n,o=e.dangerouslySetExpanded,a=b(e,["uuid","dangerouslySetExpanded"]);return k(t),a.id&&k(a.id),Object(r.createElement)(S,{uuid:t,dangerouslySetExpanded:o},Object(r.createElement)(M,null,this.renderChildren))}}]),t}(r.Component);function Z(e){var n=function e(n){return n&&(n.matches('[data-accordion-component="Accordion"]')?n:e(n.parentElement))}(e);return n&&Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}l(B,"defaultProps",{className:"accordion__item"}),l(B,"displayName",j.AccordionItem);var H="40",T="35",R="13",q="36",W="37",L="39",U="32",V="38",J=function(e){var n=e.toggleExpanded,t=e.className,o=void 0===t?"accordion__button":t,a=b(e,["toggleExpanded","className"]);return a.id&&k(a.id),Object(r.createElement)("div",u({className:o},a,{role:"button",tabIndex:0,onClick:n,onKeyDown:function(e){var t,r,o=e.which.toString();if(o!==R&&o!==U||(e.preventDefault(),n()),e.target instanceof HTMLElement)switch(o){case q:e.preventDefault(),t=e.target,(r=(Z(t)||[])[0])&&r.focus();break;case T:e.preventDefault(),function(e){var n=Z(e)||[],t=n[n.length-1];t&&t.focus()}(e.target);break;case W:case V:e.preventDefault(),function(e){var n=Z(e)||[],t=n.indexOf(e);if(-1!==t){var r=n[t-1];r&&r.focus()}}(e.target);break;case L:case H:e.preventDefault(),function(e){var n=Z(e)||[],t=n.indexOf(e);if(-1!==t){var r=n[t+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},F=function(e){p(t,e);var n=v(t);function t(){var e;i(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return l(h(e=n.call.apply(n,[this].concat(o))),"ref",void 0),l(h(e),"setRef",(function(n){e.ref=n})),e}return d(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(r.createElement)("div",u({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),t}(r.PureComponent);l(F,"defaultProps",{className:"accordion__heading","aria-level":3});var K=function(e){return Object(r.createElement)(M,null,(function(n){var t=n.headingAttributes;return e.id&&k(e.id),Object(r.createElement)(F,u({},e,t))}))};K.displayName=j.AccordionItemHeading;var Y=Object(a.e)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]),$=Object(a.d)((function(e){var n=e.className,t=void 0===n?"accordion":n,o=e.allowMultipleExpanded,a=e.allowZeroExpanded,i=e.onChange,c=e.preExpanded,d=b(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(r.createElement)(A,{preExpanded:c,allowMultipleExpanded:o,allowZeroExpanded:a,onChange:i},Object(r.createElement)("div",u({"data-accordion-component":"Accordion",className:t},d)))})).withConfig({displayName:"accordionstyle__AccordionWrapper",componentId:"bqkbrk-0"})([""]),z=Object(a.d)(B).withConfig({displayName:"accordionstyle__AccordionItemWrapper",componentId:"bqkbrk-1"})([""]),G=a.d.div.withConfig({displayName:"accordionstyle__OpenIcon",componentId:"bqkbrk-2"})([""]),Q=a.d.div.withConfig({displayName:"accordionstyle__CloseIcon",componentId:"bqkbrk-3"})(["\n  opacity: 0;\n"]),X=Object(a.d)(K).withConfig({displayName:"accordionstyle__AccordionTitleWrapper",componentId:"bqkbrk-4"})(["\n  > div {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    position: relative;\n    &[aria-expanded='false'] {\n      "," {\n        opacity: 0;\n      }\n      "," {\n        opacity: 1;\n      }\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  * {\n    flex-grow: 1;\n  }\n"],G,Q),ee=Object(a.d)((function(e){return Object(r.createElement)(M,null,(function(n){var t=n.toggleExpanded,o=n.buttonAttributes;return Object(r.createElement)(J,u({toggleExpanded:t},e,o))}))})).withConfig({displayName:"accordionstyle__AccordionItemButtonWrapper",componentId:"bqkbrk-5"})([""]),ne=Object(a.d)((function(e){var n=e.className,t=void 0===n?"accordion__panel":n,o=e.id,a=b(e,["className","id"]),i=function(e){var n=e.panelAttributes;return o&&k(o),Object(r.createElement)("div",u({"data-accordion-component":"AccordionItemPanel",className:t},a,n))};return Object(r.createElement)(M,null,i)})).withConfig({displayName:"accordionstyle__AccordionBodyWrapper",componentId:"bqkbrk-6"})(["\n  animation: 0.35s "," ease-in;\n  &.accordion__body--hidden {\n    animation: 0.35s "," ease-in;\n  }\n"],Y,Y),te=a.d.div.withConfig({displayName:"accordionstyle__IconWrapper",componentId:"bqkbrk-7"})(["\n  margin-left: 30px;\n  width: 40px;\n  position: relative;\n\n  ",",\n  "," {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    transition: 0.25s ease-in-out;\n  }\n"],G,Q),re=function(e){var n=e.className,t=e.children,r=e.allowZeroExpanded,a=void 0===r||r,i=e.preExpanded,c=void 0===i?[]:i,d=["reusecore__accordion"];return n&&d.push(n),o.a.createElement($,{allowZeroExpanded:a,className:d.join(" "),preExpanded:c},t)},oe=function(e){var n=e.className,t=e.children,r=e.uuid,a=["accordion__item"];return n&&a.push(n),o.a.createElement(z,{className:a.join(" "),uuid:r},t)},ae=function(e){var n=e.className,t=e.children,r=["accordion__header"];return n&&r.push(n),o.a.createElement(X,{className:r.join(" ")},o.a.createElement(ee,null,t))},ie=function(e){var n=e.className,t=e.children,r=["accordion__body"];return n&&r.push(n),o.a.createElement(ne,{className:r.join(" ")},t)}}}]);
//# sourceMappingURL=5342a056be1971eb58d9247b7b4aa4ed1c1f1503-0989341d47227adeb8bd.js.map