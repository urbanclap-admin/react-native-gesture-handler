"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[5176],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=s(n),u=o,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||a;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7567:function(e,t,n){var i=n(7294);const o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.Z=e=>{let{children:t}=e;return i.createElement("div",{style:o.container},i.Children.map(t,(e=>(0,i.cloneElement)(e,{...e.props.style,style:o.img}))))}},4108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var i=n(3117),o=(n(7294),n(3905)),a=n(4996),l=n(7567);const r={id:"swipeable",title:"Swipeable",sidebar_label:"Swipeable"},p=void 0,s={unversionedId:"api/components/swipeable",id:"version-2.3.0/api/components/swipeable",title:"Swipeable",description:'This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two "action" containers can be shown depends on whether user swipes left or right (containers can be rendered by renderLeftActions or renderRightActions props).',source:"@site/versioned_docs/version-2.3.0/api/components/swipeable.md",sourceDirName:"api/components",slug:"/api/components/swipeable",permalink:"/react-native-gesture-handler/docs/2.3.0/api/components/swipeable",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"swipeable",title:"Swipeable",sidebar_label:"Swipeable"},sidebar:"version-2.3.0/docs",previous:{title:"Buttons",permalink:"/react-native-gesture-handler/docs/2.3.0/api/components/buttons"},next:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/2.3.0/api/components/touchables"}},d={},c=[{value:"Usage:",id:"usage",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>friction</code>",id:"friction",level:3},{value:"<code>leftThreshold</code>",id:"leftthreshold",level:3},{value:"<code>rightThreshold</code>",id:"rightthreshold",level:3},{value:"<code>overshootLeft</code>",id:"overshootleft",level:3},{value:"<code>overshootRight</code>",id:"overshootright",level:3},{value:"<code>overshootFriction</code>",id:"overshootfriction",level:3},{value:"<code>onSwipeableLeftOpen</code>",id:"onswipeableleftopen",level:3},{value:"<code>onSwipeableRightOpen</code>",id:"onswipeablerightopen",level:3},{value:"<code>onSwipeableOpen</code>",id:"onswipeableopen",level:3},{value:"<code>onSwipeableClose</code>",id:"onswipeableclose",level:3},{value:"<code>onSwipeableLeftWillOpen</code>",id:"onswipeableleftwillopen",level:3},{value:"<code>onSwipeableRightWillOpen</code>",id:"onswipeablerightwillopen",level:3},{value:"<code>onSwipeableWillOpen</code>",id:"onswipeablewillopen",level:3},{value:"<code>onSwipeableWillClose</code>",id:"onswipeablewillclose",level:3},{value:"<code>renderLeftActions</code>",id:"renderleftactions",level:3},{value:"<code>renderRightActions</code>",id:"renderrightactions",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>childrenContainerStyle</code>",id:"childrencontainerstyle",level:3},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>close</code>",id:"close",level:3},{value:"<code>openLeft</code>",id:"openleft",level:3},{value:"<code>openRight</code>",id:"openright",level:3},{value:"Example:",id:"example",level:3}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"GifGallery"},(0,o.kt)("img",{src:(0,a.Z)("gifs/sampleswipeable.gif"),height:"120"})),(0,o.kt)("p",null,'This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two "action" containers can be shown depends on whether user swipes left or right (containers can be rendered by ',(0,o.kt)("inlineCode",{parentName:"p"},"renderLeftActions")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRightActions")," props)."),(0,o.kt)("h3",{id:"usage"},"Usage:"),(0,o.kt)("p",null,"Similarly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DrawerLayout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Swipeable")," component isn't exported by default from the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Swipeable from 'react-native-gesture-handler/Swipeable';\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"friction"},(0,o.kt)("inlineCode",{parentName:"h3"},"friction")),(0,o.kt)("p",null,'a number that specifies how much the visual interaction will be delayed compared to the gesture distance. e.g. value of 1 will indicate that the swipeable panel should exactly follow the gesture, 2 means it is going to be two times "slower".'),(0,o.kt)("h3",{id:"leftthreshold"},(0,o.kt)("inlineCode",{parentName:"h3"},"leftThreshold")),(0,o.kt)("p",null,"distance from the left edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width."),(0,o.kt)("h3",{id:"rightthreshold"},(0,o.kt)("inlineCode",{parentName:"h3"},"rightThreshold")),(0,o.kt)("p",null,"distance from the right edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width."),(0,o.kt)("h3",{id:"overshootleft"},(0,o.kt)("inlineCode",{parentName:"h3"},"overshootLeft")),(0,o.kt)("p",null,"a boolean value indicating if the swipeable panel can be pulled further than the left actions panel's width. It is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default as long as the left panel render method is present."),(0,o.kt)("h3",{id:"overshootright"},(0,o.kt)("inlineCode",{parentName:"h3"},"overshootRight")),(0,o.kt)("p",null,"a boolean value indicating if the swipeable panel can be pulled further than the right actions panel's width. It is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default as long as the right panel render method is present."),(0,o.kt)("h3",{id:"overshootfriction"},(0,o.kt)("inlineCode",{parentName:"h3"},"overshootFriction")),(0,o.kt)("p",null,"a number that specifies how much the visual interaction will be delayed compared to the gesture distance at overshoot. Default value is 1, it mean no friction, for a native feel, try 8 or above."),(0,o.kt)("h3",{id:"onswipeableleftopen"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableLeftOpen")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This callback is deprecated and will be removed in the next version. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"onSwipeableOpen(direction)"))),(0,o.kt)("p",null,"method that is called when left action panel gets open."),(0,o.kt)("h3",{id:"onswipeablerightopen"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableRightOpen")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This callback is deprecated and will be removed in the next version. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"onSwipeableOpen(direction)"))),(0,o.kt)("p",null,"method that is called when right action panel gets open."),(0,o.kt)("h3",{id:"onswipeableopen"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableOpen")),(0,o.kt)("p",null,"method that is called when action panel gets open (either right or left). Takes swipe direction as\nan argument."),(0,o.kt)("h3",{id:"onswipeableclose"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableClose")),(0,o.kt)("p",null,"method that is called when action panel is closed. Takes swipe direction as\nan argument."),(0,o.kt)("h3",{id:"onswipeableleftwillopen"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableLeftWillOpen")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This callback is deprecated and will be removed in the next version. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"onSwipeableWillOpen(direction)"))),(0,o.kt)("p",null,"method that is called when left action panel starts animating on open."),(0,o.kt)("h3",{id:"onswipeablerightwillopen"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableRightWillOpen")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This callback is deprecated and will be removed in the next version. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"onSwipeableWillOpen(direction)"))),(0,o.kt)("p",null,"method that is called when right action panel starts animating on open."),(0,o.kt)("h3",{id:"onswipeablewillopen"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableWillOpen")),(0,o.kt)("p",null,"method that is called when action panel starts animating on open (either right or left). Takes swipe direction as\nan argument."),(0,o.kt)("h3",{id:"onswipeablewillclose"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSwipeableWillClose")),(0,o.kt)("p",null,"method that is called when action panel starts animating on close. Takes swipe direction as\nan argument."),(0,o.kt)("h3",{id:"renderleftactions"},(0,o.kt)("inlineCode",{parentName:"h3"},"renderLeftActions")),(0,o.kt)("p",null,"method that is expected to return an action panel that is going to be revealed from the left side when user swipes right.\nThis map describes the values to use as inputRange for extra interpolation:\nAnimatedValue: ","[startValue, endValue]"),(0,o.kt)("p",null,"progressAnimatedValue: ","[0, 1]","\ndragAnimatedValue: ","[0, +]"),(0,o.kt)("p",null,"To support ",(0,o.kt)("inlineCode",{parentName:"p"},"rtl")," flexbox layouts use ",(0,o.kt)("inlineCode",{parentName:"p"},"flexDirection")," styling."),(0,o.kt)("h3",{id:"renderrightactions"},(0,o.kt)("inlineCode",{parentName:"h3"},"renderRightActions")),(0,o.kt)("p",null,"method that is expected to return an action panel that is going to be revealed from the right side when user swipes left.\nThis map describes the values to use as inputRange for extra interpolation:\nAnimatedValue: ","[startValue, endValue]"),(0,o.kt)("p",null,"progressAnimatedValue: ","[0, 1]","\ndragAnimatedValue: ","[0, -]"),(0,o.kt)("p",null,"To support ",(0,o.kt)("inlineCode",{parentName:"p"},"rtl")," flexbox layouts use ",(0,o.kt)("inlineCode",{parentName:"p"},"flexDirection")," styling."),(0,o.kt)("h3",{id:"containerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,o.kt)("p",null,"style object for the container (Animated.View), for example to override ",(0,o.kt)("inlineCode",{parentName:"p"},"overflow: 'hidden'"),"."),(0,o.kt)("h3",{id:"childrencontainerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"childrenContainerStyle")),(0,o.kt)("p",null,"style object for the children container (Animated.View), for example to apply ",(0,o.kt)("inlineCode",{parentName:"p"},"flex: 1"),"."),(0,o.kt)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},(0,o.kt)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),(0,o.kt)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"Using reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"Swipeable")," it's possible to trigger some actions on it"),(0,o.kt)("h3",{id:"close"},(0,o.kt)("inlineCode",{parentName:"h3"},"close")),(0,o.kt)("p",null,"method that closes component."),(0,o.kt)("h3",{id:"openleft"},(0,o.kt)("inlineCode",{parentName:"h3"},"openLeft")),(0,o.kt)("p",null,"method that opens component on left side."),(0,o.kt)("h3",{id:"openright"},(0,o.kt)("inlineCode",{parentName:"h3"},"openRight")),(0,o.kt)("p",null,"method that opens component on right side."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/showcase/swipeable/index.tsx"},"swipeable example")," from GestureHandler Example App or view it directly on your phone by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"},"our expo demo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport { Animated, StyleSheet, View } from 'react-native';\nimport { RectButton } from 'react-native-gesture-handler';\nimport Swipeable from 'react-native-gesture-handler/Swipeable';\n\nclass AppleStyleSwipeableRow extends Component {\n  renderLeftActions = (progress, dragX) => {\n    const trans = dragX.interpolate({\n      inputRange: [0, 50, 100, 101],\n      outputRange: [-20, 0, 0, 1],\n    });\n    return (\n      <RectButton style={styles.leftAction} onPress={this.close}>\n        <Animated.Text\n          style={[\n            styles.actionText,\n            {\n              transform: [{ translateX: trans }],\n            },\n          ]}>\n          Archive\n        </Animated.Text>\n      </RectButton>\n    );\n  };\n  render() {\n    return (\n      <Swipeable renderLeftActions={this.renderLeftActions}>\n        <Text>\"hello\"</Text>\n      </Swipeable>\n    );\n  }\n}\n")))}u.isMDXComponent=!0}}]);