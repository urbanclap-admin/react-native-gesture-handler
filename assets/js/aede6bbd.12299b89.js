"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[3609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const i={id:"pinch-gh",title:"PinchGestureHandler",sidebar_label:"Pinch"},o=void 0,s={unversionedId:"gesture-handlers/api/pinch-gh",id:"gesture-handlers/api/pinch-gh",title:"PinchGestureHandler",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/docs/gesture-handlers/api/pinch-gh.md",sourceDirName:"gesture-handlers/api",slug:"/gesture-handlers/api/pinch-gh",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/pinch-gh",draft:!1,tags:[],version:"current",frontMatter:{id:"pinch-gh",title:"PinchGestureHandler",sidebar_label:"Pinch"},sidebar:"docs",previous:{title:"Fling",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/fling-gh"},next:{title:"Force touch",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/force-gh"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"Event data",id:"event-data",level:2},{value:"<code>scale</code>",id:"scale",level:3},{value:"<code>velocity</code>",id:"velocity",level:3},{value:"<code>focalX</code>",id:"focalx",level:3},{value:"<code>focalY</code>",id:"focaly",level:3},{value:"Example",id:"example",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We recently released RNGH 2.0 with new Gestures system. Check out ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/#rngh-20"},"RNGH 2.0\nsection in Introduction")," for more information.")),(0,a.kt)("p",null,"A continuous gesture handler that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.\nThe handler ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"},"activates")," when fingers are placed on the screen and change their position.\nGesture callback can be used for continuous tracking of the pinch gesture. It provides information about velocity, anchor (focal) point of gesture and scale."),(0,a.kt)("p",null,"The distance between the fingers is reported as a scale factor. At the beginning of the gesture, the scale factor is 1.0. As the distance between the two fingers increases, the scale factor increases proportionally.\nSimilarly, the scale factor decreases as the distance between the fingers decreases.\nPinch gestures are used most commonly to change the size of objects or content onscreen.\nFor example, map views use pinch gestures to change the zoom level of the map."),(0,a.kt)("p",null,"The handler is implemented using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uipinchgesturerecognizer"},"UIPinchGestureRecognizer")," on iOS and from scratch on Android."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Properties provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"PinchGestureHandler")," do not extend ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#properties"},"common set of properties from base handler class"),"."),(0,a.kt)("h2",{id:"event-data"},"Event data"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"PinchGestureHandler"),":"),(0,a.kt)("h3",{id:"scale"},(0,a.kt)("inlineCode",{parentName:"h3"},"scale")),(0,a.kt)("p",null,"The scale factor relative to the points of the two touches in screen coordinates."),(0,a.kt)("h3",{id:"velocity"},(0,a.kt)("inlineCode",{parentName:"h3"},"velocity")),(0,a.kt)("p",null,"Velocity of the pan gesture the current moment. The value is expressed in point units per second."),(0,a.kt)("h3",{id:"focalx"},(0,a.kt)("inlineCode",{parentName:"h3"},"focalX")),(0,a.kt)("p",null,"Position expressed in points along X axis of center anchor point of gesture"),(0,a.kt)("h3",{id:"focaly"},(0,a.kt)("inlineCode",{parentName:"h3"},"focalY")),(0,a.kt)("p",null,"Position expressed in points along Y axis of center anchor point of gesture"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/recipes/scaleAndRotate/index.tsx"},"scale and rotation example")," from Gesture Handler Example App."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export class PinchableBox extends React.Component {\n  _baseScale = new Animated.Value(1);\n  _pinchScale = new Animated.Value(1);\n  _scale = Animated.multiply(this._baseScale, this._pinchScale);\n  _lastScale = 1;\n  _onPinchGestureEvent = Animated.event(\n    [{ nativeEvent: { scale: this._pinchScale } }],\n    { useNativeDriver: USE_NATIVE_DRIVER }\n  );\n\n  _onPinchHandlerStateChange = (event) => {\n    if (event.nativeEvent.oldState === State.ACTIVE) {\n      this._lastScale *= event.nativeEvent.scale;\n      this._baseScale.setValue(this._lastScale);\n      this._pinchScale.setValue(1);\n    }\n  };\n\n  render() {\n    return (\n      <PinchGestureHandler\n        onGestureEvent={this._onPinchGestureEvent}\n        onHandlerStateChange={this._onPinchHandlerStateChange}>\n        <View style={styles.container} collapsable={false}>\n          <Animated.Image\n            style={[\n              styles.pinchableImage,\n              {\n                transform: [{ perspective: 200 }, { scale: this._scale }],\n              },\n            ]}\n          />\n        </View>\n      </PinchGestureHandler>\n    );\n  }\n}\n")))}u.isMDXComponent=!0}}]);