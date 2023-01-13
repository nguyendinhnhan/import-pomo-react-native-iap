"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,b=u["".concat(s,".").concat(d)]||u[d]||l[d]||o;return r?n.createElement(b,a(a({ref:t},f),{},{components:r})):n.createElement(b,a({ref:t},f))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,p={unversionedId:"api/interfaces/SubscriptionOffer",id:"api/interfaces/SubscriptionOffer",title:"SubscriptionOffer",description:"react-native-iap / Exports / SubscriptionOffer",source:"@site/docs/api/interfaces/SubscriptionOffer.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SubscriptionOffer",permalink:"/docs/api/interfaces/SubscriptionOffer",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api/interfaces/SubscriptionOffer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SubscriptionIOS",permalink:"/docs/api/interfaces/SubscriptionIOS"},next:{title:"SubscriptionOfferAndroid",permalink:"/docs/api/interfaces/SubscriptionOfferAndroid"}},s={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"offerToken",id:"offertoken",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"sku",id:"sku",level:3},{value:"Defined in",id:"defined-in-1",level:4}],f={toc:c};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / SubscriptionOffer"),(0,i.kt)("h1",{id:"interface-subscriptionoffer"},"Interface: SubscriptionOffer"),(0,i.kt)("p",null,"In order to purchase a new subscription, every sku must have a selected offerToken"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,"SubscriptionAndroid.subscriptionOfferDetails.offerToken"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionOffer#offertoken"},"offerToken")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/SubscriptionOffer#sku"},"sku"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"offertoken"},"offerToken"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"offerToken"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/types/index.ts#L243"},"types/index.ts:243")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sku"},"sku"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"sku"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/types/index.ts#L242"},"types/index.ts:242")))}l.isMDXComponent=!0}}]);