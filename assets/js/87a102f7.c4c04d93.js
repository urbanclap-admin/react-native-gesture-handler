"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7384],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,g=s["".concat(c,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9035:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=(n(7294),n(3905));const o={id:"migrating-off-rnghenabledroot",title:"Migrating off RNGHEnabledRootView"},i=void 0,l={unversionedId:"guides/migrating-off-rnghenabledroot",id:"guides/migrating-off-rnghenabledroot",title:"Migrating off RNGHEnabledRootView",description:"Update MainActivity.java",source:"@site/docs/guides/migrating-off-rnghenabledroot.md",sourceDirName:"guides",slug:"/guides/migrating-off-rnghenabledroot",permalink:"/react-native-gesture-handler/docs/next/guides/migrating-off-rnghenabledroot",draft:!1,tags:[],version:"current",frontMatter:{id:"migrating-off-rnghenabledroot",title:"Migrating off RNGHEnabledRootView"},sidebar:"docs",previous:{title:"Testing with Jest",permalink:"/react-native-gesture-handler/docs/next/guides/testing"},next:{title:"Upgrading to the new API introduced in Gesture Handler 2",permalink:"/react-native-gesture-handler/docs/next/guides/upgrading-to-2"}},c={},d=[{value:"Update <code>MainActivity.java</code>",id:"update-mainactivityjava",level:2},{value:"Check if your app works correctly",id:"check-if-your-app-works-correctly",level:2},{value:"Update your JS code",id:"update-your-js-code",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"update-mainactivityjava"},"Update ",(0,a.kt)("inlineCode",{parentName:"h2"},"MainActivity.java")),(0,a.kt)("p",null,"Update your ",(0,a.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," file (or wherever you create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactActivityDelegate"),"), so that it no longer overrides the method responsible for creating ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactRootView")," instance, or modify it so that it no longer uses ",(0,a.kt)("inlineCode",{parentName:"p"},"RNGestureHandlerEnabledRootView"),". Do not forget to remove import for ",(0,a.kt)("inlineCode",{parentName:"p"},"RNGestureHandlerEnabledRootView"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package com.swmansion.gesturehandler.react.example;\n\nimport com.facebook.react.ReactActivity;\n- import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\npublic class MainActivity extends ReactActivity {\n\n-  @Override\n-  protected ReactActivityDelegate createReactActivityDelegate() {\n-    return new ReactActivityDelegate(this, getMainComponentName()) {\n-      @Override\n-      protected ReactRootView createRootView() {\n-       return new RNGestureHandlerEnabledRootView(MainActivity.this);\n-      }\n-    };\n-  }\n}\n")),(0,a.kt)("h2",{id:"check-if-your-app-works-correctly"},"Check if your app works correctly"),(0,a.kt)("p",null,"Some libraries (for example React Navigation) already use ",(0,a.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," as a wrapper to enable gesture interactions. In that case you don't have to add one yourself. If gestures in your app work as expected after removing ",(0,a.kt)("inlineCode",{parentName:"p"},"RNGestureHandlerEnabledRootView")," you can skip the next step."),(0,a.kt)("h2",{id:"update-your-js-code"},"Update your JS code"),(0,a.kt)("p",null,"Instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"RNGestureHandlerEnabledRootView")," wrap your entry point with ",(0,a.kt)("inlineCode",{parentName:"p"},"<GestureHandlerRootView>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function App() {\n  return <GestureHandlerRootView style={{ flex: 1 }}>{/* content */}</GestureHandlerRootView>;\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," acts like a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),". So if you want it to fill the screen, you will need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"{ flex: 1 }")," like you'll need to do with a normal View. By default, it'll take the size of the content nested inside.")))}p.isMDXComponent=!0}}]);