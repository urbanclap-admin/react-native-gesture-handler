"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[5829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={id:"state-manager",title:"Gesture state manager",sidebar_label:"Gesture state manager"},o=void 0,s={unversionedId:"api/gestures/state-manager",id:"version-2.4.0/api/gestures/state-manager",title:"Gesture state manager",description:"GestureStateManager allows to manually control the state of the gestures. Please note that react-native-reanimated is required to use it, since it allows for synchronously executing methods in worklets.",source:"@site/versioned_docs/version-2.4.0/api/gestures/state-manager.md",sourceDirName:"api/gestures",slug:"/api/gestures/state-manager",permalink:"/react-native-gesture-handler/docs/api/gestures/state-manager",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"state-manager",title:"Gesture state manager",sidebar_label:"Gesture state manager"},sidebar:"version-2.4.0/docs",previous:{title:"Touch events",permalink:"/react-native-gesture-handler/docs/api/gestures/touch-events"},next:{title:"Buttons",permalink:"/react-native-gesture-handler/docs/api/components/buttons"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"<code>begin()</code>",id:"begin",level:3},{value:"<code>activate()</code>",id:"activate",level:3},{value:"<code>end()</code>",id:"end",level:3},{value:"<code>fail()</code>",id:"fail",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GestureStateManager")," allows to manually control the state of the gestures. Please note that ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is required to use it, since it allows for synchronously executing methods in worklets."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"begin"},(0,a.kt)("inlineCode",{parentName:"h3"},"begin()")),(0,a.kt)("p",null,"Transition the gesture to the ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/under-the-hood/states-events#began"},(0,a.kt)("inlineCode",{parentName:"a"},"BEGAN"))," state. This method will have no effect if the gesture has already activated or finished."),(0,a.kt)("h3",{id:"activate"},(0,a.kt)("inlineCode",{parentName:"h3"},"activate()")),(0,a.kt)("p",null,"Transition the gesture to the ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"},(0,a.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," state. This method will have no effect if the handler is already active, or has finished.\nIf the gesture is ",(0,a.kt)("a",{parentName:"p",href:"../../gesture-composition"},(0,a.kt)("inlineCode",{parentName:"a"},"exclusive"))," with another one, the activation will be delayed until the gesture with higher priority fails."),(0,a.kt)("h3",{id:"end"},(0,a.kt)("inlineCode",{parentName:"h3"},"end()")),(0,a.kt)("p",null,"Transition the gesture to the ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/under-the-hood/states-events#end"},(0,a.kt)("inlineCode",{parentName:"a"},"END"))," state. This method will have no effect if the handler has already finished."),(0,a.kt)("h3",{id:"fail"},(0,a.kt)("inlineCode",{parentName:"h3"},"fail()")),(0,a.kt)("p",null,"Transition the gesture to the ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/under-the-hood/states-events#failed"},(0,a.kt)("inlineCode",{parentName:"a"},"FAILED"))," state. This method will have no effect if the handler has already finished."))}d.isMDXComponent=!0}}]);