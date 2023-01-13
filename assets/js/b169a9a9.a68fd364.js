"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Migrating to 10.0.0",s={unversionedId:"migrate_to_10.0.0",id:"migrate_to_10.0.0",title:"Migrating to 10.0.0",description:"Starting with 10.0.0, the parameters to some of the methods are now objects instead of positional parameters.",source:"@site/docs/migrate_to_10.0.0.md",sourceDirName:".",slug:"/migrate_to_10.0.0",permalink:"/docs/migrate_to_10.0.0",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/migrate_to_10.0.0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/faq"},next:{title:"Migrating to 11.0.0",permalink:"/docs/migrate_to_11.0.0"}},l={},c=[{value:"Before",id:"before",level:2},{value:"After",id:"after",level:2},{value:"Before",id:"before-1",level:2},{value:"After",id:"after-1",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-to-1000"},"Migrating to 10.0.0"),(0,a.kt)("p",null,"Starting with 10.0.0, the parameters to some of the methods are now objects instead of positional parameters."),(0,a.kt)("h2",{id:"before"},"Before"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getProducts(['my_sku']);\n")),(0,a.kt)("h2",{id:"after"},"After"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getProducts({skus: ['my_sku']});\n")),(0,a.kt)("p",null,"Methods are now exported outside of the main module:"),(0,a.kt)("h2",{id:"before-1"},"Before"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import IAP from 'react-native-iap'\n...\n\nIAP.requestPurchase(...)\n")),(0,a.kt)("h2",{id:"after-1"},"After"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {requestPurchase} from 'react-native-iap';\n...\nrequestPurchase(...)\n")),(0,a.kt)("p",null,"If you want to import keeping the namespace, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as IAP from 'react-native-iap'\n...\n\nIAP.requestPurchase(...)\n")))}u.isMDXComponent=!0}}]);