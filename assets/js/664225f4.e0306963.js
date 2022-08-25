"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[962],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return b}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(a),b=o,m=h["".concat(c,".").concat(b)]||h[b]||p[b]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2750:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var n=a(3117),o=(a(7294),a(3905));const r={id:"touchables",title:"Touchables",sidebar_label:"Touchables"},i=void 0,l={unversionedId:"api/components/touchables",id:"api/components/touchables",title:"Touchables",description:"Gesture Handler library provides an implementation of RN's touchable components that are based on native buttons and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native.",source:"@site/docs/api/components/touchables.md",sourceDirName:"api/components",slug:"/api/components/touchables",permalink:"/react-native-gesture-handler/docs/next/api/components/touchables",draft:!1,tags:[],version:"current",frontMatter:{id:"touchables",title:"Touchables",sidebar_label:"Touchables"},sidebar:"docs",previous:{title:"Swipeable",permalink:"/react-native-gesture-handler/docs/next/api/components/swipeable"},next:{title:"DrawerLayout",permalink:"/react-native-gesture-handler/docs/next/api/components/drawer-layout"}},c={},s=[{value:"Example:",id:"example",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gesture Handler library provides an implementation of RN's touchable components that are based on ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/api/components/buttons"},"native buttons")," and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native."),(0,o.kt)("p",null,"React Native's touchables API can be found here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/react-native/docs/touchablenativefeedback"},"Touchable Native Feedback")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/react-native/docs/touchablehighlight"},"Touchable Highlight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/react-native/docs/touchableopacity"},"Touchable Opacity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/react-native/docs/touchablewithoutfeedback"},"Touchable Without Feedback"))),(0,o.kt)("p",null,"All major touchable properties (except from ",(0,o.kt)("inlineCode",{parentName:"p"},"pressRetentionOffset"),") have been adopted and should behave in a similar way as with RN's touchables."),(0,o.kt)("p",null,"The motivation for using RNGH touchables as a replacement for these imported from React Native is to follow built-in native behavior more closely by utilizing platform native touch system instead of relying on the JS responder system.\nThese touchables and their feedback behavior are deeply integrated with native\ngesture ecosystem and could be connected with other native components (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),") and Gesture Handlers easily and in a more predictable way, which\nfollows native apps' behavior."),(0,o.kt)("p",null,"Our intention was to make switch for these touchables as simple as possible. In order to use RNGH's touchables the only thing you need to do is to change library from which you import touchable components.\nneed only to change imports of touchables."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Gesture Handler's TouchableOpacity uses native driver for animations by default. If this causes problems for you, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"useNativeAnimations")," prop to false.")),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  TouchableNativeFeedback,\n  TouchableHighlight,\n  TouchableOpacity,\n  TouchableWithoutFeedback,\n} from 'react-native';\n")),(0,o.kt)("p",null,"has to be replaced with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  TouchableNativeFeedback,\n  TouchableHighlight,\n  TouchableOpacity,\n  TouchableWithoutFeedback,\n} from 'react-native-gesture-handler';\n")),(0,o.kt)("p",null,"For a comparison of both touchable implementations see our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/release_tests/touchables/index.tsx"},"touchables example")))}p.isMDXComponent=!0}}]);