(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{11670:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.getTweakCategory=s;t.buildFieldUiSchema=E;t.buildDisclosedTweakUiSchema=T;t.filterByCategory=N;t.buildTweakUiSchema=A;t.buildGroupedUiSchema=b;t.buildCategorizedUiSchema=R;t.createContextField=t.createTweakConditional=t.generateRoute=void 0;var i=a(r(40));var l=a(r(27));var n=a(r(2));var O=a(r(1697));var o=a(r(13712));var u=a(r(13721));var c=a(r(12150));function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var d=function e(t){return t.reduce(function(e,t){return"".concat(e,"/").concat(t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase())},"")};t.generateRoute=d;function s(e){return e.category||u.default[e.type]}var _=function e(t){if(t.showOnlyWhenPresent)return{$conditional:{$if:(0,n.default)({},"#/definitionVisibility/".concat(t.variableName),{eq:false}),$then:{type:"hidden"}}};return{}};t.createTweakConditional=_;var v=function e(t){return{type:"context",properties:{label:t}}};t.createContextField=v;function E(e){var t=s(e);var r=null;r=e.jsfFieldType?o.default[e.jsfFieldType]:o.default[e.type];if(r){var a=e.label||e.title;var n=f({},e,{label:a,$mapping:"#/tweakValues/".concat(e.variableName)});n.$route||(n.$route=d([t,a]));if(!n.$conditional){var i=_(e);Object.assign(n,i)}return r(n)}}function T(e){var t=e.tweakDefinitions;var n="";var i=[];t=Array.isArray(t)?t:Object.values(t);var r=t.reduce(function(e,t){var r=s(t);if(n!==r){if(i.length>0){e.push((0,c.default)({label:n,hideIfEmpty:true,children:i}));i=[]}n=r}var a=E(t);a&&i.push(a);return e},[]);r.push((0,c.default)({label:n,hideIfEmpty:true,children:i}));return r}function N(e,r){return e.filter(function(e){var t=e.category;return r.includes(t)})}function A(e){var t=e.tweakDefinitions,l=e.shouldIncludeCategoryHeaders;var u="";return t.reduce(function(e,t){var r=s(t);if(u!==r){if(l){var a=v(r);e.push(a)}u=r}var n=E(t);if(n){if("segmentedradio"===t.jsfFieldType){var i=t.label||t.title;var o=v(i);e.push(o)}e.push(n)}return e},[])}function b(e){var t=e.groups,o=e.tweaksRenderer;var r=t._;var a=r?o("_",r):[];var n=Object.entries(t).reduce(function(e,t){var r=(0,l.default)(t,2),a=r[0],n=r[1];if("_"===a)return e;var i=v(a);e.push(i);return e.concat(o(a,n))},[]);return[].concat((0,i.default)(a),(0,i.default)(n))}var I={type:"spacer",properties:{gridMultiplier:1}};function R(e){var t=e.categorizedTweaks,r=void 0===t?[]:t,a=e.tweakDefinitions,n=void 0===a?{}:a,l=e.tweaksRenderer;if(!n||0===Object.keys(n).length||!l)return[];var u=f({},n);var i=r.reduce(function(e,t){var r=t.category,a=t.tweakIds;var n=a.reduce(function(e,t){var r=u[t];if(r){e.push(r);delete u[t]}return e},[]);var i=l(r,n);if(i.length>0){var o=v(r);e.push(o);e=e.concat(i);e.push(I)}return e},[]);var o="Misc";var c=l(o,Object.values(u));return(0,O.default)(i.concat(c))}},11720:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(2));var u=a(r(54));var c=a(r(19));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p=function e(t){var r=t.properties,a=void 0===r?{}:r;var n=a.enum,i=a.enumAnnotation;if(!n)return"";var o=n.reduce(function(e,t,r){var a=i[r]||{};e.push("".concat(t," {").concat(a.label||t,"}"));return e},[]);return"{ value, select, ".concat(o.join(" ")," other { } }")};var o=function e(t){var r=t.$conditional,a=t.isDisclosed,n=(0,c.default)(t,["$conditional","isDisclosed"]);if(!a)return t;"object"!==(0,u.default)(a)||a.keepLabel||delete n.properties.label;var i="object"===(0,u.default)(a)?a.detail:void 0;var o=t.properties,l=void 0===o?{}:o;i=i||(l.enumAnnotation&&t.$mapping?{string:p(t),stringContext:{value:n.$mapping}}:{$data:n.$mapping});return{type:"disclosure",properties:O({},"boolean"===typeof a?{}:a,{label:l.label||"",detail:i,children:[n]}),$mapping:t.$mapping,scope:t.scope,$conditional:r}};t.default=o;e.exports=t.default},12147:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=n;var O=a(r(11720));function n(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$conditional,i=e.$route,o=e.isDisclosed,l=e.options,u=e.enumAnnotation,c=e.optionsLabels;return(0,O.default)({type:"select",$mapping:a,$route:i,$conditional:n,isDisclosed:void 0===o||o,properties:{label:t,title:r,enum:l,enumAnnotation:u||c&&c.map(function(e){return{label:e}})||l.map(function(e){return{label:e}})}})}e.exports=t.default},12148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.OPTIONS=t.SIZE_AND_VALUES=t.TYPOGRAPHY=t.COLORS=t.BACKGROUND_IMAGE_FIX_POSITION_FIXED=t.BACKGROUND_IMAGE_FIX_POSITION_SCROLL=t.BACKGROUND_IMAGE_FIX_POSITION=t.BACKGROUND_IMAGE_REPEAT_VERTICAL=t.BACKGROUND_IMAGE_REPEAT_HORIZONTAL=t.BACKGROUND_IMAGE_REPEAT_NO_REPEAT=t.BACKGROUND_IMAGE_REPEAT=t.BACKGROUND_IMAGE_POSITION_BOTTOM_RIGHT=t.BACKGROUND_IMAGE_POSITION_BOTTOM_CENTER=t.BACKGROUND_IMAGE_POSITION_BOTTOM_LEFT=t.BACKGROUND_IMAGE_POSITION_CENTER_RIGHT=t.BACKGROUND_IMAGE_POSITION_CENTER_CENTER=t.BACKGROUND_IMAGE_POSITION_CENTER_LEFT=t.BACKGROUND_IMAGE_POSITION_TOP_RIGHT=t.BACKGROUND_IMAGE_POSITION_TOP_CENTER=t.BACKGROUND_IMAGE_POSITION_TOP_LEFT=t.BACKGROUND_IMAGE_POSITION=t.BACKGROUND_IMAGE_SIZE_CONTAIN=t.BACKGROUND_IMAGE_SIZE_COVER=t.BACKGROUND_IMAGE_SIZE_AUTO=t.BACKGROUND_IMAGE_SIZE=t.FONT_SIZE=t.FONT_TRANSFORM_CAPITALIZE=t.FONT_TRANSFORM_LOWERCASE=t.FONT_TRANSFORM_UPPERCASE=t.FONT_TRANSFORM_NONE=t.FONT_TEXT_TRANSFORM=t.FONT_DECORATION_UNDER=t.FONT_DECORATION_OVER=t.FONT_DECORATION_LINE=t.FONT_DECORATION_NONE=t.FONT_TEXT_DECORATION=t.FONT_LINE_HEIGHT=t.FONT_LETTER_SPACING=void 0;var a=r(24);var n=(0,a.t)("Letter Spacing");t.FONT_LETTER_SPACING=n;var i=(0,a.t)("Line Height");t.FONT_LINE_HEIGHT=i;var o=(0,a.t)("Text Decoration");t.FONT_TEXT_DECORATION=o;var l=(0,a.t)("None");t.FONT_DECORATION_NONE=l;var u=(0,a.t)("Line Through");t.FONT_DECORATION_LINE=u;var c=(0,a.t)("Overline");t.FONT_DECORATION_OVER=c;var O=(0,a.t)("Underline");t.FONT_DECORATION_UNDER=O;var p=(0,a.t)("Text Transform");t.FONT_TEXT_TRANSFORM=p;var f=(0,a.t)("None");t.FONT_TRANSFORM_NONE=f;var d=(0,a.t)("Uppercase");t.FONT_TRANSFORM_UPPERCASE=d;var s=(0,a.t)("Lowercase");t.FONT_TRANSFORM_LOWERCASE=s;var _=(0,a.t)("Capitalize");t.FONT_TRANSFORM_CAPITALIZE=_;var v=(0,a.t)("Size");t.FONT_SIZE=v;var E=(0,a.t)("Size");t.BACKGROUND_IMAGE_SIZE=E;var T=(0,a.t)("Auto");t.BACKGROUND_IMAGE_SIZE_AUTO=T;var N=(0,a.t)("Cover");t.BACKGROUND_IMAGE_SIZE_COVER=N;var A=(0,a.t)("Contain");t.BACKGROUND_IMAGE_SIZE_CONTAIN=A;var b=(0,a.t)("Position");t.BACKGROUND_IMAGE_POSITION=b;var I=(0,a.t)("Top left");t.BACKGROUND_IMAGE_POSITION_TOP_LEFT=I;var R=(0,a.t)("Top center");t.BACKGROUND_IMAGE_POSITION_TOP_CENTER=R;var P=(0,a.t)("Top right");t.BACKGROUND_IMAGE_POSITION_TOP_RIGHT=P;var g=(0,a.t)("Center left");t.BACKGROUND_IMAGE_POSITION_CENTER_LEFT=g;var m=(0,a.t)("Center center");t.BACKGROUND_IMAGE_POSITION_CENTER_CENTER=m;var y=(0,a.t)("Center right");t.BACKGROUND_IMAGE_POSITION_CENTER_RIGHT=y;var C=(0,a.t)("Bottom left");t.BACKGROUND_IMAGE_POSITION_BOTTOM_LEFT=C;var G=(0,a.t)("Bottom center");t.BACKGROUND_IMAGE_POSITION_BOTTOM_CENTER=G;var D=(0,a.t)("Bottom right");t.BACKGROUND_IMAGE_POSITION_BOTTOM_RIGHT=D;var $=(0,a.t)("Repeat");t.BACKGROUND_IMAGE_REPEAT=$;var S=(0,a.t)("No repeat");t.BACKGROUND_IMAGE_REPEAT_NO_REPEAT=S;var h=(0,a.t)("Repeat horizontal");t.BACKGROUND_IMAGE_REPEAT_HORIZONTAL=h;var M=(0,a.t)("Repeat vertical");t.BACKGROUND_IMAGE_REPEAT_VERTICAL=M;var j=(0,a.t)("Fix Position");t.BACKGROUND_IMAGE_FIX_POSITION=j;var U=(0,a.t)("Scroll");t.BACKGROUND_IMAGE_FIX_POSITION_SCROLL=U;var F=(0,a.t)("Fixed");t.BACKGROUND_IMAGE_FIX_POSITION_FIXED=F;var B=(0,a.t)("Colors");t.COLORS=B;var w=(0,a.t)("Typography");t.TYPOGRAPHY=w;var L=(0,a.t)("Size & Values");t.SIZE_AND_VALUES=L;var x=(0,a.t)("Options");t.OPTIONS=x},12149:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=o;var n=a(r(2));var p=a(r(19));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function o(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$conditional,i=e.$route,o=e.isDisclosed,l=e.options,u=e.optionsLabels,c=e.enumAnnotation,O=(0,p.default)(e,["label","title","$mapping","$conditional","$route","isDisclosed","options","optionsLabels","enumAnnotation"]);return f({$mapping:a,$route:i,$conditional:n,properties:{label:t,title:r,enum:l,enumAnnotation:c||u&&u.map(function(e){return{label:e}})||l.map(function(e){return{label:e}})}},O,{type:"dropdownselect"})}e.exports=t.default},12150:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=o;var n=a(r(2));var c=a(r(19));var O=r(11670);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function f(e){var t=e.find(function(e){return!e.$conditional||!e.$conditional.$then||"hidden"!==e.$conditional.$then.type});if(t)return;var r=e.reduce(function(e,t){e.push(t.$conditional.$if);return e},[]);return r.length&&{$if:{allOf:r},$then:{type:"hidden"}}}function o(e){var t=e.properties,r=e.label,a=e.title,n=e.hideIfEmpty,i=e.children,o=e.$route,l=(0,c.default)(e,["properties","label","title","hideIfEmpty","children","$route"]);var u=n&&f(i);return p({type:"disclosure",properties:p({label:r,title:a,children:i},t||{})},u?{$conditional:u}:{},{$route:o||(0,O.generateRoute)([r])},l)}e.exports=t.default},12424:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=o;var n=a(r(2));var d=a(r(19));var s=a(r(11720));var _=r(12425);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function o(e){var t=e.label,r=e.$mapping,a=e.$route,n=e.isDisclosed,i=e.min,o=e.max,l=e.step,u=e.title,c=e.$conditional,O=(0,d.default)(e,["label","$mapping","$route","isDisclosed","min","max","step","title","$conditional"]);var p=(0,_.hasUnit)(e)?{units:(0,_.getUnits)(e)}:{};var f=(0,_.getUnitString)(e);return(0,s.default)({type:"range",$mapping:r,$route:a,properties:v({label:t,title:u},O.properties?O.properties:{},{min:i,max:o,step:l,clampAtMin:true,clampAtMax:true},p),isDisclosed:void 0!==n?n:{keepLabel:true,detailType:"string",detail:f},$conditional:c})}e.exports=t.default},12425:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"getUnits",{enumerable:true,get:function e(){return n.default}});Object.defineProperty(t,"hasUnit",{enumerable:true,get:function e(){return i.default}});Object.defineProperty(t,"getUnitString",{enumerable:true,get:function e(){return o.default}});var n=a(r(13716));var i=a(r(12426));var o=a(r(13717))},12426:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;var o=r(1724);function a(e){var t=e.defaultValue,r=e.units,a=e.unit;var n=(0,o.splitUnits)(t),i=n.unit;return Boolean(r||a||i)}e.exports=t.default},13712:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(2));var i=a(r(2462));var o=a(r(11671));var l=a(r(13713));var u=a(r(13714));var c=a(r(13715));var O=a(r(12147));var p=a(r(12424));var f=a(r(13718));var d=a(r(12149));var s=a(r(13719));var _=a(r(13720));var v;var E=(v={},(0,n.default)(v,i.default.COLOR,l.default),(0,n.default)(v,i.default.COLORPALETTE,l.default),(0,n.default)(v,i.default.HUE,l.default),(0,n.default)(v,i.default.IMAGE,u.default),(0,n.default)(v,i.default.FONT,c.default),(0,n.default)(v,i.default.VALUE,p.default),(0,n.default)(v,i.default.PADDING,p.default),(0,n.default)(v,i.default.MARGIN,p.default),(0,n.default)(v,i.default.CHECKBOX,f.default),(0,n.default)(v,i.default.DROPDOWN,O.default),(0,n.default)(v,o.default.fontFamily,function(){}),(0,n.default)(v,o.default.fontStyle,d.default),(0,n.default)(v,o.default.fontWeight,d.default),(0,n.default)(v,o.default.value,p.default),(0,n.default)(v,o.default.dropdown,d.default),(0,n.default)(v,o.default.checkbox,f.default),(0,n.default)(v,"segmentedradio",s.default),(0,n.default)(v,"stepper",_.default),(0,n.default)(v,"range",p.default),(0,n.default)(v,"dropdownselect",d.default),(0,n.default)(v,"boolean",f.default),v);t.default=E;e.exports=t.default},13713:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=n;var f=a(r(11720));var d="passthrough";function n(e){var t=e.label,r=e.title,a=e.disableTransparency,n=e.providerType,i=void 0===n?d:n,o=e.paletteMapping,l=void 0===o?[]:o,u=e.$mapping,c=e.$conditional,O=e.$route,p=e.isDisclosed;return(0,f.default)({type:"colorpicker",isDisclosed:void 0!==p?p:{keepLabel:true,detailType:"color",detail:{$data:u}},properties:{label:t,title:r,providerType:i,hasOpacitySlider:!a,showTransparentColor:!a},$mapping:i===d?{color:u,palette:l}:u,$route:O,$conditional:c})}e.exports=t.default},13714:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=n;var o=a(r(2));var l=a(r(12147));var u=r(12148);function n(e){var t=e.label,r=e.title,a=e.$conditional,n=e.$mapping,i=e.$route;return{type:"disclosure",properties:{label:t,title:r,children:[{type:"image",properties:{label:t},$mapping:"".concat(n,"/background-image"),$route:"".concat(i,"/background-image")},(0,l.default)({label:u.BACKGROUND_IMAGE_SIZE,$mapping:"".concat(n,"/background-size"),$route:"".concat(i,"/background-size"),options:["auto","cover","contain"],enumAnnotation:[{label:u.BACKGROUND_IMAGE_SIZE_AUTO},{label:u.BACKGROUND_IMAGE_SIZE_COVER},{label:u.BACKGROUND_IMAGE_SIZE_CONTAIN}]}),(0,l.default)({label:u.BACKGROUND_IMAGE_POSITION,$mapping:"".concat(n,"/background-position"),$route:"".concat(i,"/background-position"),options:["top left","top center","top right","center left","center center","center right","bottom left","bottom center","bottom right"],enumAnnotation:[{label:u.BACKGROUND_IMAGE_POSITION_TOP_LEFT},{label:u.BACKGROUND_IMAGE_POSITION_TOP_CENTER},{label:u.BACKGROUND_IMAGE_POSITION_TOP_RIGHT},{label:u.BACKGROUND_IMAGE_POSITION_CENTER_LEFT},{label:u.BACKGROUND_IMAGE_POSITION_CENTER_CENTER},{label:u.BACKGROUND_IMAGE_POSITION_CENTER_RIGHT},{label:u.BACKGROUND_IMAGE_POSITION_BOTTOM_LEFT},{label:u.BACKGROUND_IMAGE_POSITION_BOTTOM_CENTER},{label:u.BACKGROUND_IMAGE_POSITION_BOTTOM_RIGHT}]}),(0,l.default)({label:u.BACKGROUND_IMAGE_REPEAT,$mapping:"".concat(n,"/background-repeat"),$route:"".concat(i,"/background-repeat"),options:["no-repeat","repeat","repeat-x","repeat-y"],enumAnnotation:[{label:u.BACKGROUND_IMAGE_REPEAT_NO_REPEAT},{label:u.BACKGROUND_IMAGE_REPEAT},{label:u.BACKGROUND_IMAGE_REPEAT_HORIZONTAL},{label:u.BACKGROUND_IMAGE_REPEAT_VERTICAL}]}),(0,l.default)({label:u.BACKGROUND_IMAGE_FIX_POSITION,$mapping:"".concat(n,"/background-attachment"),$route:"".concat(i,"/background-attachment"),options:["scroll","fixed"],enumAnnotation:[{label:u.BACKGROUND_IMAGE_FIX_POSITION_SCROLL},{label:u.BACKGROUND_IMAGE_FIX_POSITION_FIXED}]})]},$conditional:a||{$if:(0,o.default)({},"".concat(n,"/background-image"),{exists:false}),$then:{type:"hidden"}}}}e.exports=t.default},13715:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=n;var O=a(r(2));var p=a(r(12424));var f=a(r(12147));var d=r(12148);var s={min:.1,max:4,step:.1};var _={min:-1,max:1,step:.05};function n(e){var t=e.label,r=e.title,a=e.$conditional,n=e.$mapping,i=e.$route,o=e.isDisclosed,l=e.parentLabel;var u=n.replace("-font-family","");var c=[{type:"fontpicker",properties:{label:t,title:r},$mapping:{familyName:"".concat(u,"-font-family"),weight:"".concat(u,"-font-weight"),style:"".concat(u,"-font-style")},$route:"".concat(i,"/font")},(0,p.default)({label:d.FONT_SIZE,$mapping:"".concat(u,"-font-size"),$route:"".concat(i,"/font-size"),$conditional:{$if:(0,O.default)({},"".concat(u,"-font-size/value"),{exists:false}),$then:{type:"hidden"}},units:{px:{min:6,max:100,step:1},em:{min:.1,max:10,step:.1},"%":{min:1,max:200,step:1},vh:s,vw:s,vmin:s,vmax:s}}),(0,p.default)({label:d.FONT_LINE_HEIGHT,$mapping:"".concat(u,"-line-height"),$route:"".concat(i,"/line-height"),$conditional:{$if:(0,O.default)({},"".concat(u,"/line-height/value"),{exists:false}),$then:{type:"hidden"}},units:{px:{min:6,max:96,step:1},em:{min:.5,max:3,step:.1},"%":{min:1,max:200,step:1},vh:s,vw:s,vmin:s,vmax:s}}),(0,p.default)({label:d.FONT_LETTER_SPACING,$mapping:"".concat(u,"-letter-spacing"),$route:"".concat(i,"/letter-spacing"),$conditional:{$if:(0,O.default)({},"".concat(u,"-letter-spacing/value"),{exists:false}),$then:{type:"hidden"}},units:{px:{min:-20,max:20,step:1},em:{min:-.1,max:.1,step:.01},vh:_,vw:_,vmin:_,vmax:_}}),(0,f.default)({label:d.FONT_TEXT_DECORATION,$mapping:"".concat(u,"-text-decoration"),$route:"".concat(i,"/text-decoration"),$conditional:{$if:(0,O.default)({},"".concat(u,"-text-decoration"),{exists:false}),$then:{type:"hidden"}},options:["none","line-through","overline","underline"],enumAnnotation:[{label:d.FONT_DECORATION_NONE},{label:d.FONT_DECORATION_LINE},{label:d.FONT_DECORATION_OVER},{label:d.FONT_DECORATION_UNDER}]}),(0,f.default)({label:d.FONT_TEXT_TRANSFORM,$mapping:"".concat(u,"-text-transform"),$route:"".concat(i,"/text-transform"),$conditional:{$if:(0,O.default)({},"".concat(u,"-text-transform"),{exists:false}),$then:{type:"hidden"}},options:["none","uppercase","lowercase","capitalize"],enumAnnotation:[{label:d.FONT_TRANSFORM_NONE},{label:d.FONT_TRANSFORM_UPPERCASE},{label:d.FONT_TRANSFORM_LOWERCASE},{label:d.FONT_TRANSFORM_CAPITALIZE}]})];if(!o)return c;return{type:"disclosure",detailType:"string",detail:{$data:"".concat(u,"-font-family")},$route:i,$conditional:a,properties:{label:l,children:c}}}e.exports=t.default},13716:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=i;var f=a(r(2));var d=a(r(77));var s=r(1724);var _=r(1727);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),true).forEach(function(e){(0,f.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function i(e){var t=e.defaultValue,r=e.unit,a=e.units,n=e.min,i=e.max,o=e.step;var l=(0,s.splitUnits)(t),u=l.unit;var c=(0,_.getMinMaxStepDefaults)(e);var O=!(0,d.default)(n)&&!(0,d.default)(i)&&!(0,d.default)(o);var p=O?(0,f.default)({},r||u,{min:n,max:i,step:o}):{};return v({},c,{},p,{},a)}e.exports=t.default},13717:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=i;var n=a(r(12426));function i(e){var t=e.$mapping;return(0,n.default)(e)?{string:"{value}{unit}",stringContext:{value:"".concat(t,"/value"),unit:"".concat(t,"/unit")}}:{string:"{value}",stringContext:{value:t}}}e.exports=t.default},13718:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;function a(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$route,i=e.$conditional;return{type:"boolean",$mapping:a,$route:n,$conditional:i,properties:{label:t,title:r}}}e.exports=t.default},13719:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=n;var p=a(r(11720));function n(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$conditional,i=e.$route,o=e.isDisclosed,l=e.options,u=e.optionsLabels,c=e.enumAnnotation;var O=u&&u.map(function(e){return{label:e}})||l.map(function(e){return{label:e}});return(0,p.default)({type:"segmentedradio",$mapping:a,$route:i,$conditional:n,isDisclosed:void 0!==o?o:{keepLabel:true,detailType:"string",detail:{$data:a}},properties:{label:t,title:r,enum:l,enumAnnotation:c||O}})}e.exports=t.default},13720:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=o;var n=a(r(2));var d=a(r(19));var s=a(r(11720));var _=r(12425);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function o(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$route,i=e.isDisclosed,o=e.min,l=e.max,u=e.step,c=e.$conditional,O=(0,d.default)(e,["label","title","$mapping","$route","isDisclosed","min","max","step","$conditional"]);var p=(0,_.hasUnit)(e)?{units:(0,_.getUnits)(e)}:{};var f=(0,_.getUnitString)(e);return(0,s.default)({type:"stepper",$mapping:a,$route:n,properties:v({label:t,title:r},O.properties?O.properties:{},{min:o,max:l,step:u,clampAtMin:true,clampAtMax:true},p),isDisclosed:void 0!==i?i:{keepLabel:true,detailType:"string",detail:f},$conditional:c})}e.exports=t.default},13721:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(2));var i=a(r(2462));var o=r(12148);var l;var u=(l={},(0,n.default)(l,i.default.COLOR,o.COLORS),(0,n.default)(l,i.default.IMAGE,o.COLORS),(0,n.default)(l,i.default.COLORPALETTE,o.COLORS),(0,n.default)(l,i.default.HUE,o.COLORS),(0,n.default)(l,i.default.FONT,o.TYPOGRAPHY),(0,n.default)(l,i.default.VALUE,o.SIZE_AND_VALUES),(0,n.default)(l,i.default.PADDING,o.SIZE_AND_VALUES),(0,n.default)(l,i.default.MARGIN,o.SIZE_AND_VALUES),(0,n.default)(l,i.default.CHECKBOX,o.OPTIONS),(0,n.default)(l,i.default.DROPDOWN,o.OPTIONS),l);t.default=u;e.exports=t.default}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/32-cdb50da808878a6512724-min.en-US.js.map