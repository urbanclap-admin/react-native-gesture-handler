"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[9360],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={id:"troubleshooting",title:"Troubleshooting"},i=void 0,s={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/react-native-gesture-handler/docs/next/troubleshooting",draft:!1,tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Installation",permalink:"/react-native-gesture-handler/docs/next/installation"},next:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/next/quickstart/"}},l={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Reporting issues",id:"reporting-issues",level:2},{value:"It&#39;s not a bug, it&#39;s a feature",id:"its-not-a-bug-its-a-feature",level:2},{value:"Multiple versions of Gesture Handler were detected",id:"multiple-versions-of-gesture-handler-were-detected",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Thanks for giving this library a try! We are sorry that you might have encountered issues though. Here is how you can seek help:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Search over the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-gesture-handler/issues"},"issues on Github"),". There is a chance someone had this problem in the past and it has been resolved!"),(0,o.kt)("li",{parentName:"ol"},"When sure your problem hasn't been reported or was reported but the proposed solution doesn't work for you please follow ",(0,o.kt)("a",{parentName:"li",href:"#reporting-issues"},"our issue reporting guidelines"),"."),(0,o.kt)("li",{parentName:"ol"},"You can try seeking help on ",(0,o.kt)("a",{parentName:"li",href:"https://chat.expo.dev/"},"Expo Developers Discord")," where we often hang out."),(0,o.kt)("li",{parentName:"ol"},"If you feel like reading the source code I highly recommend it, as this is by far the best resource and gives you the most up to date insights into how the library works and what might be causing the bug."),(0,o.kt)("li",{parentName:"ol"},"If you managed to find the solution consider ",(0,o.kt)("a",{parentName:"li",href:"/react-native-gesture-handler/docs/next/#contributing"},"contributing")," a fix or update our documentation to make this information easier to find for the others in the future.")),(0,o.kt)("h2",{id:"reporting-issues"},"Reporting issues"),(0,o.kt)("p",null,"This library is maintained by a very small team.\nPlease be mindful of that when reporting issue and when it happens that we can't get back to you as soon as you might expect.\nWe would love to fix all the problems as soon as possible, but often our time is constraint with other issues/features or projects.\nTo make it easier for us to understand your issue and to be able to approach it sooner you can help by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Making sure the issue description is complete. Please include all the details about your environment (library version, RN version, device OS etc)."),(0,o.kt)("li",{parentName:"ul"},"It is the best to provide an example app that reproduces the issue you are having. Put it up on ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/"},"gist"),", ",(0,o.kt)("a",{parentName:"li",href:"https://snack.expo.io"},"snack")," or create a repo on Github \u2013\xa0it doesn't matter as long as we can easily pull it in, run and see the issue."),(0,o.kt)("li",{parentName:"ul"},"Explain how you run your repro app and what steps to take to reproduce the issue."),(0,o.kt)("li",{parentName:"ul"},"Isolate your issue from other dependencies you might be using and make the repro app as minimal as possible."),(0,o.kt)("li",{parentName:"ul"},"If you have spent some time figuring out the root cause of the problem you can leave a note about your findings so far."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Do not comment on closed issues"),". It is very unlikely that we are going to notice your comment in such a case. If the issue has been closed, but the proposed solution doesn't work for you, please open a new one providing all the information necessary and linking to the solution you have tried.")),(0,o.kt)("h2",{id:"its-not-a-bug-its-a-feature"},"It's not a bug, it's a feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changing ",(0,o.kt)("inlineCode",{parentName:"li"},"enabled")," prop during a gesture has no effect, only when a gesture starts (that is a finger touches the screen) the ",(0,o.kt)("inlineCode",{parentName:"li"},"enabled")," prop is taken into consideration to decide whether to extract (or not) the gesture and provide it with stream of events to analyze."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Native")," gesture may not conform to the standard state flow due to platform specific workarounds to incorporate native views into RNGH."),(0,o.kt)("li",{parentName:"ul"},"Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"li"},"Touchables")," from RNGH are rendering two additional views that may need to be styled separately to achieve desired effect (",(0,o.kt)("inlineCode",{parentName:"li"},"style")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"containerStyle")," props)."),(0,o.kt)("li",{parentName:"ul"},"In order for the gesture composition to work, all composed gestures must be attached to the same ",(0,o.kt)("inlineCode",{parentName:"li"},"GestureHandlerRootView"),".")),(0,o.kt)("h3",{id:"multiple-versions-of-gesture-handler-were-detected"},"Multiple versions of Gesture Handler were detected"),(0,o.kt)("p",null,"This error usually happens when in your project there exists more than one instance of Gesture Handler. It can occur when some of your dependencies have installed Gesture Handler inside their own ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of using it as a peer dependency. In this case two different versions of Gesture Handler JS module try to install the same Native Module. You can resolve this problem manually by modifying your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,o.kt)("p",null,"You can check which libraries are using Gesture Handler, for example, with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm why react-native-gesture-handler\n")),(0,o.kt)("p",null,"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," you should add ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/"},(0,o.kt)("inlineCode",{parentName:"a"},"resolution")," property"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "react-native-gesture-handler": <Gesture Handler version>\n}\n')),(0,o.kt)("p",null,"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," you should add ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides"},(0,o.kt)("inlineCode",{parentName:"a"},"overrides")," property"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"overrides": {\n  "react-native-gesture-handler": <Gesture Handler version>\n}\n')),(0,o.kt)("p",null,"After that you need to run your package manager again"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))}c.isMDXComponent=!0}}]);