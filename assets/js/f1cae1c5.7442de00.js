"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[5953,2650,4504,7015,7479,8728],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"version-2.0.0/api/gestures/base-continous-gesture-callbacks",title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-continous-gesture-callbacks",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},l={},c=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",level:3},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),(0,r.kt)("h3",{id:"onupdatecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),(0,r.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active."))}d.isMDXComponent=!0},6228:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-continous-gesture-config",id:"version-2.0.0/api/gestures/base-continous-gesture-config",title:"base-continous-gesture-config",description:"Properties common to all continous gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-config.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-continous-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-continous-gesture-config",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},l={},c=[{value:"Properties common to all continous gestures:",id:"properties-common-to-all-continous-gestures",level:3},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"properties-common-to-all-continous-gestures"},"Properties common to all continous gestures:"),(0,r.kt)("h3",{id:"manualactivationvalue-boolead"},(0,r.kt)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/state-manager"},"state manager"),"."))}d.isMDXComponent=!0},7326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.0.0/api/gestures/base-gesture-callbacks",title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-callbacks",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},l={},c=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,r.kt)("h3",{id:"onbegincallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,r.kt)("h3",{id:"onstartcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,r.kt)("h3",{id:"onendcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,r.kt)("h3",{id:"onfinalizecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,r.kt)("h3",{id:"ontouchesdowncallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,r.kt)("h3",{id:"ontouchesmovecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,r.kt)("h3",{id:"ontouchesupcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,r.kt)("h3",{id:"ontouchescancelledcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}d.isMDXComponent=!0},7767:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-gesture-config",id:"version-2.0.0/api/gestures/base-gesture-config",title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-config",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},l={},c=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",level:3},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",level:3},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",level:3},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",level:3},{value:"<code>withRef(ref)</code>",id:"withrefref",level:3},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),(0,r.kt)("h3",{id:"enabledvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),(0,r.kt)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",(0,r.kt)("strong",{parentName:"p"},"never")," become ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILED"))," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the handler will ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"},"cancel")," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"},"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," except for the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/long-press-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/tap-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"hitslopsettings"},(0,r.kt)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),(0,r.kt)("p",null,"This parameter enables control over what part of the connected view area can be used to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#began"},"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),(0,r.kt)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," is provided only ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",(0,r.kt)("inlineCode",{parentName:"p"},"left: 0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#props"},"hitSlop")," property."),(0,r.kt)("h3",{id:"withrefref"},(0,r.kt)("inlineCode",{parentName:"h3"},"withRef(ref)")),(0,r.kt)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),(0,r.kt)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},(0,r.kt)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),(0,r.kt)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,r.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),". ",(0,r.kt)("a",{parentName:"p",href:"gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,r.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,r.kt)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},(0,r.kt)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),(0,r.kt)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,r.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),".",(0,r.kt)("a",{parentName:"p",href:"gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,r.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},5235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.0.0/api/gestures/base-gesture-event-data",title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-event-data",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},l={},c=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,"Current ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events"},"state")," of the handler. Expressed as one of the constants exported under ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object by the library."),(0,r.kt)("h3",{id:"numberofpointers"},(0,r.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,r.kt)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},3413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var a=n(3117),r=(n(7294),n(3905)),o=n(5235),i=n(7767),s=n(6228),l=n(7326),c=n(5656);const u={id:"force-touch-gesture",title:"Force touch gesture (iOS only)",sidebar_label:"Force touch gesture"},d=void 0,p={unversionedId:"api/gestures/force-touch-gesture",id:"version-2.0.0/api/gestures/force-touch-gesture",title:"Force touch gesture (iOS only)",description:"A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.",source:"@site/versioned_docs/version-2.0.0/api/gestures/force-touch-gesture.md",sourceDirName:"api/gestures",slug:"/api/gestures/force-touch-gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/force-touch-gesture",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"force-touch-gesture",title:"Force touch gesture (iOS only)",sidebar_label:"Force touch gesture"},sidebar:"version-2.0.0/docs",previous:{title:"Fling gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/fling-gesture"},next:{title:"Native gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/native-gesture"}},h={},g=[{value:"Config",id:"config",level:2},{value:"Properties specific to <code>ForceTouchGesture</code>:",id:"properties-specific-to-forcetouchgesture",level:3},{value:"<code>minForce(value: number)</code>",id:"minforcevalue-number",level:3},{value:"<code>maxForce(value: number)</code>",id:"maxforcevalue-number",level:3},{value:"<code>feedbackOnActivation(value: boolean)</code>",id:"feedbackonactivationvalue-boolean",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Event data",id:"event-data",level:2},{value:"Event attributes specific to <code>ForceTouchGesture</code>:",id:"event-attributes-specific-to-forcetouchgesture",level:3},{value:"<code>force</code>",id:"force",level:3}],m={toc:g};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.\nThe gesture ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"},"activates")," when pressure of touch if greater or equal than ",(0,r.kt)("inlineCode",{parentName:"p"},"minForce"),". It fails if pressure is greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"maxForce"),"\nGesture callback can be used for continuous tracking of the touch pressure. It provides information for one finger (the first one)."),(0,r.kt)("p",null,"At the beginning of the gesture, the pressure factor is 0.0. As the pressure increases, the pressure factor increases proportionally. The maximum pressure is 1.0."),(0,r.kt)("p",null,"There's no implementation provided on Android and it simply renders children without any wrappers.\nSince this behaviour is only provided on some iOS devices, this gesture should not be used for defining any crucial behaviors. Use it only as an additional improvement and make all features to be accessed without this gesture as well."),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("h3",{id:"properties-specific-to-forcetouchgesture"},"Properties specific to ",(0,r.kt)("inlineCode",{parentName:"h3"},"ForceTouchGesture"),":"),(0,r.kt)("h3",{id:"minforcevalue-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"minForce(value: number)")),(0,r.kt)("p",null,"A minimal pressure that is required before gesture can ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"},"activate"),". Should be a value from range ",(0,r.kt)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),". Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.2"),"."),(0,r.kt)("h3",{id:"maxforcevalue-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxForce(value: number)")),(0,r.kt)("p",null,"A maximal pressure that could be applied for gesture. If the pressure is greater, gesture ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"},"fails"),". Should be a value from range ",(0,r.kt)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),"."),(0,r.kt)("h3",{id:"feedbackonactivationvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"feedbackOnActivation(value: boolean)")),(0,r.kt)("p",null,"Value defining if haptic feedback has to be performed on activation."),(0,r.kt)(i.default,{mdxType:"BaseEventConfig"}),(0,r.kt)(s.default,{mdxType:"BaseContinousEventConfig"}),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)(l.default,{mdxType:"BaseEventCallbacks"}),(0,r.kt)(c.default,{mdxType:"BaseContinousEventCallbacks"}),(0,r.kt)("h2",{id:"event-data"},"Event data"),(0,r.kt)("h3",{id:"event-attributes-specific-to-forcetouchgesture"},"Event attributes specific to ",(0,r.kt)("inlineCode",{parentName:"h3"},"ForceTouchGesture"),":"),(0,r.kt)("h3",{id:"force"},(0,r.kt)("inlineCode",{parentName:"h3"},"force")),(0,r.kt)("p",null,"The pressure of a touch."),(0,r.kt)(o.default,{mdxType:"BaseEventData"}))}f.isMDXComponent=!0}}]);