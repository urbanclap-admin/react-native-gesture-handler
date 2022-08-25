"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[4849],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={id:"testing",title:"Testing with Jest"},s=void 0,o={unversionedId:"guides/testing",id:"version-2.4.0/guides/testing",title:"Testing with Jest",description:"Mocking native modules",source:"@site/versioned_docs/version-2.4.0/guides/testing.md",sourceDirName:"guides",slug:"/guides/testing",permalink:"/react-native-gesture-handler/docs/guides/testing",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"testing",title:"Testing with Jest"},sidebar:"version-2.4.0/docs",previous:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/gesture-handlers/basics/interactions"},next:{title:"Migrating off RNGHEnabledRootView",permalink:"/react-native-gesture-handler/docs/guides/migrating-off-rnghenabledroot"}},l={},u=[{value:"Mocking native modules",id:"mocking-native-modules",level:2},{value:"Testing Gestures&#39; and Gesture handlers&#39; callbacks",id:"testing-gestures-and-gesture-handlers-callbacks",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mocking-native-modules"},"Mocking native modules"),(0,a.kt)("p",null,"In order to load mocks provided by RNGH add following to your jest config in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"]\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"jest": {\n  "preset": "react-native",\n  "setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"]\n}\n')),(0,a.kt)("h2",{id:"testing-gestures-and-gesture-handlers-callbacks"},"Testing Gestures' and Gesture handlers' callbacks"),(0,a.kt)("p",null,"RNGH provides an API for triggering selected handlers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/test-api#firegesturehandlergestureorhandler-eventlist"},(0,a.kt)("inlineCode",{parentName:"a"},"fireGestureHandler(gestureOrHandler, eventList)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/test-api#getbygesturetestidtestid"},(0,a.kt)("inlineCode",{parentName:"a"},"getByGestureTestId(testID)")))))}d.isMDXComponent=!0}}]);