(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{5517:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=[2500,1500,1e3,750,500,300,100];var a="sqs-image-loading";var n="loading";var o="sqsImageLoad";t.SQUARESPACE_SIZES=i;t.IMAGE_LOADING_CLASS=a;t.LEGACY_IMAGE_LOADING_CLASS=n;t.CUSTOM_DATA_EVENT=o},5965:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=r(638);var a=g(i);var n=r(432);var s=g(n);var o=r(130);var u=g(o);var d=r(137);var l=g(d);var f=r(5517);var c=r(6391);function g(e){return e&&e.__esModule?e:{default:e}}var v=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,u.default)(this,r);var t=(0,c.checkFeatureSupport)();this.doesSupportSrcset=t.doesSupportSrcset;this.doesSupportObjectFit=t.doesSupportObjectFit;this.doesSupportObjectPosition=t.doesSupportObjectPosition;this.configure(e)}(0,l.default)(r,[{key:"configure",value:function e(t){var r=this;var i={allowConcurrentLoads:false,debuggerEnabled:false,sizes:f.SQUARESPACE_SIZES,collectImageInfo:false};(0,s.default)(this,i,t);if(this.collectImageInfo){self.IntersectionObserver&&(this.imageInfoObserver=new IntersectionObserver(this.handleImageObserved.bind(this),{root:null,thresholds:[0]}));this.imageInfo={}}this.debuggerEnabled&&(0,a.default)(this).forEach(function(e){console.log(e,r[e])})}},{key:"load",value:function e(t,r){var i=(0,c.validatedImage)(t,this);if(!i)return false;var a=(0,c.getImageLoadingData)(i,r);if("false"===a.load&&!a.forceImageUpdate){this.debuggerEnabled&&console.warn(i+' load mode is "false".');return false}if(a.hasImageDimensionData&&"none"!==a.cropMode){var n=(0,c.positionCroppedImage)(i,a,this);if(!n)return false}if(i.getAttribute("srcset")){if(this.doesSupportSrcset){var o=i.currentSrc||"";i.src=o;return true}var s=(0,c.getAssetUrl)(i.getAttribute("srcset"),a);a.source=s;i.setAttribute("data-src",s)}if(this.doesSupportSrcset&&i.getAttribute("data-srcset"))return this.setImageUsingSrcset(i,a);var u=(0,c.getIntendedImageSize)(i,a,this);if("string"!==typeof u||"viewport"===a.load)return u;if(!a.forceImageUpdate&&!(0,c.shouldUpdateResolution)(i,u))return u;return this.setImageSource(i,a,u,r)}},{key:"loadAll",value:function e(){var t=this;var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!i||!i.nodeName||!("querySelectorAll"in i))return new Error(i+" is not a valid node.");var a=i.querySelectorAll("img[data-src]","img[data-srcset]","img[srcset]");a.forEach(function(e){t.load(e,r)})}},{key:"getDimensionForValue",value:function e(t,r,i){return(0,c.getDimensionForValue)(t,r,i)}},{key:"setImageSource",value:function e(r,t,i,a){var n=this;var o=(0,c.getUrl)(t,i);if(!o)return false;if(this.collectImageInfo){this.updateImageInfo({imageEl:r,data:{squarespaceSize:i}});this.imageInfoObserver&&this.imageInfoObserver.observe(r)}var s=function e(){(0,c.removeClass)(r,f.IMAGE_LOADING_CLASS);(0,c.removeClass)(r,f.LEGACY_IMAGE_LOADING_CLASS)};var u=function e(){s();if(n.collectImageInfo){n.updateImageInfo({imageEl:r,data:{naturalDimensions:{width:r.naturalWidth,height:r.naturalHeight}}});n.sendImageData(r)}r.removeEventListener("load",e)};r.addEventListener("load",u);this.debuggerEnabled&&r.setAttribute("data-version","module");if(!r.getAttribute("src")||"true"===t.load){(0,c.addClass)(r,f.IMAGE_LOADING_CLASS);(0,c.addClass)(r,f.LEGACY_IMAGE_LOADING_CLASS);if(t.hasImageDimensionData){r.dataset.imageResolution=i;r.setAttribute("src",o);s();t.useBgImage&&(r.parentNode.style.backgroundImage="url("+o+")");return true}(0,c.preloadImage)(o,function(e){n.debuggerEnabled&&console.log("Loaded "+o+" to get image dimensions.");r.setAttribute("data-image-dimensions",e.width+"x"+e.height);s();n.load(r,a)},function(e,t){r.setAttribute("src",t);s();n.debuggerEnabled&&console.log(t+" failed to load.")});return false}r.setAttribute("src",o);return true}},{key:"setImageUsingSrcset",value:function e(i,a){var t=function e(){(0,c.removeClass)(i,f.IMAGE_LOADING_CLASS);(0,c.removeClass)(i,f.LEGACY_IMAGE_LOADING_CLASS);if("currentSrc"in Image.prototype){var t=(0,c.getSizeFromUrl)(i.currentSrc,a);i.setAttribute("data-image-resolution",t)}var r=i.currentSrc||"";i.src=r;i.removeEventListener("load",e)};i.addEventListener("load",t);var r=i.getAttribute("data-sizes")||(0,c.getComputedStyle)(i.parentNode,"width");i.getAttribute("data-sizes")||i.setAttribute("sizes",r);i.getAttribute("srcset")||i.setAttribute("srcset",i.getAttribute("data-srcset"));i.complete&&t();return true}},{key:"handleImageObserved",value:function e(t){var r=this;t.forEach(function(e){if(e.isIntersecting){var t=e.target;r.updateImageInfo({imageEl:t,data:{isVisible:true}});r.sendImageData(t);r.imageInfoObserver.unobserve(t)}})}},{key:"updateImageInfo",value:function e(t){var r=t.imageEl,i=t.data;if(!(r instanceof HTMLImageElement)||!this.imageInfo)return;var a=r.dataset.src;var n=this.imageInfo[a];if(!n){n={assetUrl:a,isVisible:false};this.imageInfo[a]=n}var o=(0,s.default)({},n,i);this.imageInfo[a]=o}},{key:"sendImageData",value:function e(t){var r=t.dataset.src;var i=this.imageInfo[r];if(!i)return;var a=new CustomEvent(f.CUSTOM_DATA_EVENT,{detail:{imageData:i},bubbles:true});t.dispatchEvent(a);this.debuggerEnabled&&console.log(a)}},{key:"_getDataFromNode",value:function e(t,r){return(0,c.getImageLoadingData)(t,r)}}]);return r}();t.default=v;e.exports=t["default"]},6391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.validatedImage=t.shouldUpdateResolution=t.removeClass=t.positionImage=t.positionCroppedImage=t.isSquarespaceUrl=t.hasClass=t.getUrl=t.getTargetDimensions=t.getSquarespaceSize=t.getSizeFromUrl=t.getOffsetForAlignment=t.getObjectPositionForAlignment=t.getIntendedImageSize=t.getImageScale=t.getImageLoadingData=t.preloadImage=t.getDimensionForValue=t.getComputedStyle=t.getAssetUrl=t.checkFeatureSupport=t.calculateParentDimensions=t.addClass=void 0;var i=r(638);var a=d(i);var n=r(432);var v=d(n);var o=r(1307);var s=d(o);var u=r(5517);function d(e){return e&&e.__esModule?e:{default:e}}var l=function e(t,r){return-1!==t.className.indexOf(r)};var f=function e(t,r){if(!l(t,r)){t.className+=(t.className?" ":"")+r;return true}return false};var c=function e(t,r){if(l(t,r)){t.className=t.className.replace(r," ").trim();return true}return false};var g=function e(r){var t=["?","#"];t.forEach(function(e){var t=r.indexOf(e);t>0&&(r=r.substring(0,t))});return r.indexOf("squarespace-cdn.com")>-1||r.indexOf("squarespace.com")>-1||r.indexOf("squarespace.net")>-1||r.indexOf("sqsp.net")>-1};var h=function e(t,r,i){var a=t.ownerDocument.defaultView;if(t.currentStyle)return t.currentStyle[i||r];if(a.getComputedStyle)return a.getComputedStyle(t,null).getPropertyValue(r);return""};var m=function e(t,r,i){var a=new Image;a.addEventListener("load",function(e){var t=e.currentTarget;r(t)});a.addEventListener("error",function(e){i(e,t)});a.src=t};var p=function e(){var t=function(){var e=document.createElement("img");var t="srcset"in e;e=null;return t}();var r=function(){var e=document.createElement("div");var t="objectFit"in e.style;e=null;return t}();var i=function(){var e=document.createElement("div");var t="objectPosition"in e.style;e=null;return t}();return{doesSupportSrcset:t,doesSupportObjectPosition:i,doesSupportObjectFit:r}};var b=function e(t,r){t.getDOMNode&&(t=t.getDOMNode());var i="IMG"===t.nodeName&&t;if(!i){console.warn("Element is not a valid image element.");return false}var a=l(t,u.IMAGE_LOADING_CLASS);if(a){var n=r.allowConcurrentLoads;r.debuggerEnabled&&console.warn(t+' contains the class "'+u.IMAGE_LOADING_CLASS+'"; it will '+(n?"":"not ")+"be processed.");if(!n)return false}return i};var I=function e(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var t={dimensions:function(){if(a.dimensions)return a.dimensions;var e=i.getAttribute("data-image-dimensions");if(!!e&&(e=e.split("x"))&&2===e.length)return{width:parseInt(e[0],10),height:parseInt(e[1],10)};return{width:null,height:null}}(),fixedRatio:function(){if(a.fixedRatio)return a.fixedRatio;var e=i.getAttribute("data-fixed-ratio");if(e)return"true"===e;return false}(),focalPoint:function(){if(a.focalPoint&&!isNaN(parseFloat(a.focalPoint.x))&&!isNaN(parseFloat(a.focalPoint.y)))return a.focalPoint;var e=i.getAttribute("data-image-focal-point");if(!!e&&(e=e.split(",").map(parseFloat))&&2===e.length)return{x:e[0],y:e[1]};return{x:.5,y:.5}}(),load:function(){if(a.load||false===a.load)return a.load.toString();var e=i.getAttribute("data-load");return e||"true"}(),forceImageUpdate:function(){if(a.forceImageUpdate||false===a.forceImageUpdate)return a.forceImageUpdate;var e=i.getAttribute("data-force-image-update");if(e)return"true"===e;return false}(),cropMode:function(){var e={"content-fill":"cover",fill:"cover",cover:"cover","content-fit":"contain",fit:"contain",contain:"contain"};if(a.mode)return e[a.mode]||"none";var t=e[i.getAttribute("data-mode")];if(t)return t;if(!i.parentNode)return"none";var r=i.parentNode.className;if(r.indexOf("content-fill")>-1)return e["content-fill"];if(r.indexOf("content-fit")>-1)return e["content-fit"];return"none"}(),sizeAdjustment:function(){var e=function e(t){t=parseFloat(t);if(!isNaN(t))return Math.max(t,0);return 1};if("undefined"!==typeof a.sizeAdjustment)return e(a.sizeAdjustment);return e(i.getAttribute("data-size-adjustment"))}(),sizeFormat:function(){if(a.sizeFormat)return a.sizeFormat;var e=i.getAttribute("data-size-format");return"filename"===e?"filename":"queryString"}(),source:function(){if(a.source)return a.source;var e=i.getAttribute("data-src");if(e){g(e)&&(e=e.replace(/(http:\/\/)/g,"https://"));return e}}(),stretch:function(){if("undefined"!==typeof a.stretch)return a.stretch;var e=i.getAttribute("data-image-stretch");if(e)return"true"===e;return true}(),useBgImage:function(){if("undefined"!==typeof a.useBgImage)return a.useBgImage;var e=i.getAttribute("data-use-bg-image");if(e)return"true"===e;return false}(),useAdvancedPositioning:function(){if("undefined"!==typeof a.useAdvancedPositioning)return a.useAdvancedPositioning;var e=i.getAttribute("data-use-advanced-positioning");if(e)return"true"===e;return false}()};if("contain"===t.cropMode&&i.parentNode){var r=a.fitAlignment||i.getAttribute("data-alignment")||i.parentNode.getAttribute("data-alignment")||"center";r&&(t.fitAlignment=["top","left","center","right","bottom"].reduce(function(e,t){e[t]=r.indexOf(t)>-1;return e},{}))}t.dimensions&&t.dimensions.width&&t.dimensions.height&&(t.hasImageDimensionData=true);return t};var A=function e(t,r,i){var a=i.dimensions.width;var n=i.dimensions.height;if(0===t&&0===r){t=a;r=n}else 0===t?t=r*a/n:0===r&&(r=t*n/a);var o=t/r;return{parentWidth:t,parentHeight:r,parentRatio:o}};var S=function e(t,r){var i=t.cropMode;var a=r.parentNode;var n=t.dimensions.width;var o=t.dimensions.height;var s=n/o;var u=A(a.offsetWidth,a.offsetHeight,t),d=u.parentRatio,l=u.parentWidth,f=u.parentHeight;r.getAttribute("data-parent-ratio")!==d.toFixed(1)&&r.setAttribute("data-parent-ratio",d.toFixed(1));var c=void 0;c="cover"===i&&s>d||"contain"===i&&s<d?f/o:l/n;t.stretch||"contain"!==i||(c=Math.min(c,1));return c};var y=function e(t,r,i,a){if(!t||"object"!==("undefined"===typeof t?"undefined":(0,s.default)(t))){console.warn('Missing alignment for "content-fit" image.');t={center:true}}var n=r;t.left?n.left=0:t.right?n.left=i-n.width:n.left=n.width<i?(i-n.width)/2:0;t.top?n.top=0:t.bottom?n.top=a-n.height:n.top=n.height<a?(a-n.height)/2:0;return n};var w=function e(t,r){var i=t.getAttribute("alt");var a=i&&i.length>0&&!t.getAttribute("src");if(a){var n=t.style.display;t.removeAttribute("alt");t.style.display="none";t.focus();t.style.display=n}r();a&&t.setAttribute("alt",i)};var N=function e(t,r){var i=t.parentNode;var a=r.cropMode;var n=r.dimensions.width;var o=r.dimensions.height;var s=n/o;var u=A(i.offsetWidth,i.offsetHeight,r),d=u.parentRatio,l=u.parentWidth,f=u.parentHeight;var c={};if(r.fixedRatio){c.unit="%";if("cover"===a&&d>s||"contain"===a&&d<s){c.width=100;c.height=d/s*100;c.top=(100-c.height)*r.focalPoint.y;c.left=0}else{c.width=s/d*100;c.height=100;c.top=0;c.left=(100-c.width)*r.focalPoint.x}}else{c.unit="px";var g=S(r,t);c.width=n*g;c.height=o*g;if("cover"===a){c.left=Math.min(Math.max(l/2-c.width*r.focalPoint.x,l-c.width),0);c.top=Math.min(Math.max(f/2-c.height*r.focalPoint.y,f-c.height),0)}else(0,v.default)(c,y(r.fitAlignment,c,l,f))}"inline"===h(t,"display")&&(t.style.fontSize="0px");w(t,function(){c.width-=t.offsetHeight-t.clientHeight;c.height-=t.offsetWidth-t.clientWidth});return{top:c.top,left:c.left,width:c.width,height:c.height,unit:c.unit}};var E=function e(t,r,i){var a=t.parentNode;var n=r.cropMode;var o=N(t,r);t.style.left=o.left+o.unit;t.style.top=o.top+o.unit;t.style.width=o.width+o.unit;t.style.height=o.height+o.unit;var s=h(a,"position");t.style.position="relative"===s?"absolute":"relative";"cover"===n&&(a.style.overflow="hidden");return true};var O=function e(t){if(!t){console.warn('Missing alignment for "content-fit" image.');t={center:true}}var r={horizontal:{center:"50%",left:"0%",right:"100%"},vertical:{bottom:"100%",center:"50%",top:"0%"}};var i={horizontal:"50%",vertical:"50%"};(0,a.default)(t).forEach(function(e){true===t[e]&&(r.horizontal[e]?i.horizontal=r.horizontal[e]:i.vertical=r.vertical[e])});return i};var x=function e(t,r,i){var a=S(r,t);var n=t.parentNode;var o=Math.ceil(r.dimensions.width*a);var s=Math.ceil(r.dimensions.height*a);var u="width"===i?n.offsetWidth:n.offsetHeight;var d="width"===i?o:s;var l="width"===i?r.focalPoint.x:r.focalPoint.y;var f=d-u;if(0===f)return l;var c=Math.max(Math.min(d*l-.5*u,f),0)/f;return c};var M=function e(t,r,i){var a=(t.parentNode.offsetWidth/t.parentNode.offsetHeight).toFixed(1);var n=t.getAttribute("data-parent-ratio")!==a;var o=r.focalPoint.x+","+r.focalPoint.y;var s=t.getAttribute("data-image-focal-point")!==o;if(s){t.setAttribute("data-image-focal-point",o);return true}if(n)return true;i.debuggerEnabled&&console.log("skipping repositioning");return false};var C=function e(t,r,i){if(r.useAdvancedPositioning&&i.doesSupportObjectFit&&i.doesSupportObjectPosition){if(!M(t,r,i))return true;t.style.width="100%";t.style.height="100%";if("cover"===r.cropMode){var a={x:x(t,r,"width"),y:x(t,r,"height")};t.style.objectPosition=100*a.x+"% "+100*a.y+"%";t.style.objectFit="cover"}else if("contain"===r.cropMode){var n=O(r.fitAlignment);t.style.objectPosition=n.horizontal+" "+n.vertical;t.style.objectFit="contain"}i.debuggerEnabled&&console.log("advanced position used");r.isUsingAdvancedPositioning=true;return true}if(r.useBgImage&&"cover"===r.cropMode&&"backgroundSize"in document.documentElement.style){if(!M(t,r,i))return true;t.style.visibility="hidden";t.parentNode.style.backgroundSize="cover";var o={x:x(t,r,"width"),y:x(t,r,"height")};t.parentNode.style.backgroundPosition=100*o.x+"% "+100*o.y+"%";r.isUsingAdvancedPositioning=true;return true}return false};var _=function e(t,r,i){var a=t.parentNode;if(!a){console.warn("Image element has no parentNode.");return false}if(C(t,r,i))return true;return E(t,r,i)};var D=function e(t,r,i){var a=i.dimensions.width;var n=i.dimensions.height;if("width"===t)return a/n*r;if("height"===t)return n/a*r;throw new Error("Value for "+t+" is NaN.")};var F=function e(t,r,i,a){var n=D("width",i,t);var o=Math.max(n,r);"undefined"===typeof app&&"number"===typeof window.devicePixelRatio&&(o*=window.devicePixelRatio);o*=t.sizeAdjustment;var s=a.sizes.sort(function(e,t){return t-e});var u=a.sizes.length;for(var d=1;d<u;d++)if(o>s[d])return s[d-1]+"w";return s[u-1]+"w"};var P=function e(n,o,t){var s=function e(t){return t.substr(0,1).toUpperCase()+t.substr(1)};var u=function e(t){if("string"===typeof t&&t.indexOf("%")>-1)return"percentage";if(!isNaN(parseInt(t,10)))return"number";return NaN};var r=function e(t,r){if("none"===o.cropMode){n.style.width=null;n.style.height=null}var i=parseFloat(n.getAttribute(t));var a=parseFloat(n.getAttribute(t));if(!a||isNaN(a)){i=h(n,t);a=parseFloat(i)}if(!a||isNaN(a)){i=h(n,"max-"+t,"max"+s(t));a=parseFloat(i)}if(0===r||i)switch(u(i)){case"percentage":r=parseInt(i,10)/100*n.parentNode["offset"+s(t)];break;case"number":r=parseInt(i,10);break}a||0===r||n.getAttribute("src")||(r=0);return r};var i=void 0;var a=void 0;if(o.isUsingAdvancedPositioning){i=n.parentNode.offsetWidth;a=n.parentNode.offsetHeight}else{i=n.offsetWidth;a=n.offsetHeight;w(n,function(){i=r("width",i);a=r("height",a)})}if(0===i&&0===a){i=o.dimensions.width;a=o.dimensions.height}else 0===i?i=D("width",a,o):0===a&&(a=D("height",i,o));if("viewport"===o.load){n.style.width=Math.floor(i)+"px";n.style.height=Math.floor(a)+"px"}t.collectImageInfo&&t.updateImageInfo({imageEl:n,data:{parentElementDimensions:{width:i,height:a}}});return F(o,i,a,t)};var L=function e(t,r){var i=t.getAttribute("data-image-resolution");r=parseInt(r,10);i=parseInt(i,10);if(isNaN(r)||isNaN(i))return true;return r>i};var z=function e(t,r){var i=t.source;if(!i||!i[0]){console.warn("Invalid or missing image source.");return false}if(r&&("/"===i[0]||g(i))){if("queryString"===t.sizeFormat&&-1===i.indexOf("format="+r)){i=i+(i.indexOf("?")>-1?"&":"?")+"format="+r;return i}if("filename"===t.sizeFormat&&-1===i.indexOf("-"+r)){var a=i.slice(i.lastIndexOf("."));i=i.replace(a,"-"+r+a);return i}}return i};var U=function e(t,r){var i=void 0;i="queryString"===r.sizeFormat?/(=)(\d{3,}w)/i:/(-)(\d{3,}w)/i;return t.match(i)[2]};var j=function e(t,r){var i=void 0;"queryString"===r.sizeFormat&&(i=/(\S{1,})(\?format=)(\d{3,}w)/i);return t.match(i)[1]};t.addClass=f;t.calculateParentDimensions=A;t.checkFeatureSupport=p;t.getAssetUrl=j;t.getComputedStyle=h;t.getDimensionForValue=D;t.preloadImage=m;t.getImageLoadingData=I;t.getImageScale=S;t.getIntendedImageSize=P;t.getObjectPositionForAlignment=O;t.getOffsetForAlignment=y;t.getSizeFromUrl=U;t.getSquarespaceSize=F;t.getTargetDimensions=N;t.getUrl=z;t.hasClass=l;t.isSquarespaceUrl=g;t.positionCroppedImage=_;t.positionImage=E;t.removeClass=c;t.shouldUpdateResolution=L;t.validatedImage=b}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/26-807237d8adaf70f3bb40c-min.en-US.js.map