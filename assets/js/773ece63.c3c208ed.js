"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[282],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,v=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8543:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=(r(67294),r(3905));const i={id:"create-native-wrapper",title:"createNativeWrapper",sidebar_label:"createNativeWrapper()"},o=void 0,c={unversionedId:"gesture-handlers/api/create-native-wrapper",id:"version-2.3.0/gesture-handlers/api/create-native-wrapper",title:"createNativeWrapper",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/versioned_docs/version-2.3.0/gesture-handlers/api/create-native-wrapper.md",sourceDirName:"gesture-handlers/api",slug:"/gesture-handlers/api/create-native-wrapper",permalink:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/create-native-wrapper",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"create-native-wrapper",title:"createNativeWrapper",sidebar_label:"createNativeWrapper()"},sidebar:"version-2.3.0/docs",previous:{title:"NativeView",permalink:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/nativeview-gh"},next:{title:"Testing",permalink:"/react-native-gesture-handler/docs/2.3.0/api/test-api"}},s={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Component",id:"component",level:3},{value:"config",id:"config",level:3},{value:"Returns",id:"returns",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Consider using the new ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,a.kt)("p",null,"Creates provided component with NativeViewGestureHandler, allowing it to be part of RNGH's\ngesture system."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"component"},"Component"),(0,a.kt)("p",null,"The component we want to wrap."),(0,a.kt)("h3",{id:"config"},"config"),(0,a.kt)("p",null,"Config is an object with properties that can be used on ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/nativeview-gh"},(0,a.kt)("inlineCode",{parentName:"a"},"NativeViewGestureHandler"))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Wrapped component."))}l.isMDXComponent=!0}}]);