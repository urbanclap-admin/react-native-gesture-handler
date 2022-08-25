"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[209],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9075:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=t(3117),o=(t(7294),t(3905));const a={},i=void 0,u={unversionedId:"manual-gestures/step2",id:"version-2.0.0/manual-gestures/step2",title:"step2",description:"",source:"@site/versioned_docs/version-2.0.0/manual-gestures/step2.md",sourceDirName:"manual-gestures",slug:"/manual-gestures/step2",permalink:"/react-native-gesture-handler/docs/2.0.0/manual-gestures/step2",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},c={},s=[],l={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function PointerElement(props: {\n  pointer: Animated.SharedValue<Pointer>,\n  active: Animated.SharedValue<boolean>,\n}) {\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [\n      { translateX: props.pointer.value.x },\n      { translateY: props.pointer.value.y },\n      {\n        scale:\n          (props.pointer.value.visible ? 1 : 0) *\n          (props.active.value ? 1.3 : 1),\n      },\n    ],\n    backgroundColor: props.active.value ? 'red' : 'blue',\n  }));\n\n  return <Animated.View style={[styles.pointer, animatedStyle]} />;\n}\n\n...\n\nconst styles = StyleSheet.create({\n  pointer: {\n    width: 60,\n    height: 60,\n    borderRadius: 30,\n    backgroundColor: 'red',\n    position: 'absolute',\n    marginStart: -30,\n    marginTop: -30,\n  },\n});\n")))}p.isMDXComponent=!0}}]);