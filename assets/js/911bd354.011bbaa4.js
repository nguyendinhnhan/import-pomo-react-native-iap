"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l=void 0,o={unversionedId:"api/interfaces/AmazonModuleProps",id:"api/interfaces/AmazonModuleProps",title:"AmazonModuleProps",description:"react-native-iap / Exports / AmazonModuleProps",source:"@site/docs/api/interfaces/AmazonModuleProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/AmazonModuleProps",permalink:"/docs/api/interfaces/AmazonModuleProps",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api/interfaces/AmazonModuleProps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SubscriptionPlatform",permalink:"/docs/api/enums/SubscriptionPlatform"},next:{title:"AndroidModuleProps",permalink:"/docs/api/interfaces/AndroidModuleProps"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:"acknowledgePurchase",id:"acknowledgepurchase",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"buyItemByType",id:"buyitembytype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"consumeProduct",id:"consumeproduct",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"flushFailedPurchasesCachedAsPending",id:"flushfailedpurchasescachedaspending",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"getAvailableItems",id:"getavailableitems",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"getItemsByType",id:"getitemsbytype",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"getUser",id:"getuser",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"startListening",id:"startlistening",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"verifyLicense",id:"verifylicense",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods-1",level:2},{value:"addListener",id:"addlistener",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"endConnection",id:"endconnection",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"initConnection",id:"initconnection",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"removeListeners",id:"removelisteners",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-12",level:4}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / AmazonModuleProps"),(0,i.kt)("h1",{id:"interface-amazonmoduleprops"},"Interface: AmazonModuleProps"),(0,i.kt)("p",null,"Common interface for all native modules (iOS \u2014 AppStore, Android \u2014 PlayStore and Amazon)."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},(0,i.kt)("inlineCode",{parentName:"a"},"NativeModuleProps"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AmazonModuleProps"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#acknowledgepurchase"},"acknowledgePurchase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#buyitembytype"},"buyItemByType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#consumeproduct"},"consumeProduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#flushfailedpurchasescachedaspending"},"flushFailedPurchasesCachedAsPending")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#getavailableitems"},"getAvailableItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#getitemsbytype"},"getItemsByType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#getuser"},"getUser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#startlistening"},"startListening")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#verifylicense"},"verifyLicense"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#addlistener"},"addListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#endconnection"},"endConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#initconnection"},"initConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AmazonModuleProps#removelisteners"},"removeListeners"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"acknowledgepurchase"},"acknowledgePurchase"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"acknowledgePurchase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AcknowledgePurchase")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L38"},"modules/amazon.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"buyitembytype"},"buyItemByType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buyItemByType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BuyItemByType")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L37"},"modules/amazon.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"consumeproduct"},"consumeProduct"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"consumeProduct"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumeProduct")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L39"},"modules/amazon.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"flushfailedpurchasescachedaspending"},"flushFailedPurchasesCachedAsPending"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"flushFailedPurchasesCachedAsPending"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"FlushFailedPurchasesCachedAsPending")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L34"},"modules/amazon.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getavailableitems"},"getAvailableItems"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getAvailableItems"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAvailableItems")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L36"},"modules/amazon.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getitemsbytype"},"getItemsByType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getItemsByType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GetItemsByType")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L35"},"modules/amazon.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getuser"},"getUser"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getUser"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GetUser")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L33"},"modules/amazon.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startlistening"},"startListening"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"startListening"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StartListening")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L40"},"modules/amazon.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verifylicense"},"verifyLicense"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"verifyLicense"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AmazonLicensingStatus"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AmazonLicensingStatus"),">"),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AmazonLicensingStatus"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/amazon.ts#L41"},"modules/amazon.ts:41")),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"addlistener"},"addListener"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addListener"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"eventType"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"addListener for NativeEventEmitter"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#addlistener"},"addListener")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/common.ts#L12"},"modules/common.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endconnection"},"endConnection"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"endConnection"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Required method to end the payment provider connection"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#endconnection"},"endConnection")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/common.ts#L9"},"modules/common.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initconnection"},"initConnection"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initConnection"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Required method to start a payment provider connection"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#initconnection"},"initConnection")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/common.ts#L6"},"modules/common.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removelisteners"},"removeListeners"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeListeners"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"count"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"removeListeners for NativeEventEmitter"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#removelisteners"},"removeListeners")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nguyendinhnhan/pomo-react-native-iap/blob/d57b706/src/modules/common.ts#L15"},"modules/common.ts:15")))}m.isMDXComponent=!0}}]);