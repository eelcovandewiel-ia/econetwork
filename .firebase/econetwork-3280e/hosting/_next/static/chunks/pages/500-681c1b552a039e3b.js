(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8573],{65582:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(63366),i=r(87462),s=r(67294),a=r(86010),o=r(14142),d=r(34867),u=r(94780),c=r(29628),l=r(13264),h=r(66500),p=r(85893);let m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,h.Z)(),f=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),b=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:x}),g=(e,t)=>{let{classes:r,fixed:n,disableGutters:i,maxWidth:s}=e,a={root:["root",s&&`maxWidth${(0,o.Z)(String(s))}`,n&&"fixed",i&&"disableGutters"]};return(0,u.Z)(a,e=>(0,d.ZP)(t,e),r)};var v=r(98216),Z=r(90948),w=r(71657);let k=function(e={}){let{createStyledComponent:t=f,useThemeProps:r=b,componentName:o="MuiContainer"}=e,d=t(({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=s.forwardRef(function(e,t){let s=r(e),{className:u,component:c="div",disableGutters:l=!1,fixed:h=!1,maxWidth:x="lg"}=s,f=(0,n.Z)(s,m),b=(0,i.Z)({},s,{component:c,disableGutters:l,fixed:h,maxWidth:x}),v=g(b,o);return(0,p.jsx)(d,(0,i.Z)({as:c,ownerState:b,className:(0,a.Z)(v.root,u),ref:t},f))});return u}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiContainer"})});var y=k},98396:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n,i=r(67294),s=r(34168),a=r(20539),o=r(58974);function d(e,t,r,n,s){let[a,d]=i.useState(()=>s&&r?r(e).matches:n?n(e).matches:t);return(0,o.Z)(()=>{let t=!0;if(!r)return;let n=r(e),i=()=>{t&&d(n.matches)};return i(),n.addListener(i),()=>{t=!1,n.removeListener(i)}},[e,r]),a}let u=(n||(n=r.t(i,2))).useSyncExternalStore;function c(e,t,r,n,s){let a=i.useCallback(()=>t,[t]),o=i.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(null!==n){let{matches:t}=n(e);return()=>t}return a},[a,e,n,s,r]),[d,c]=i.useMemo(()=>{if(null===r)return[a,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[a,r,e]),l=u(c,d,o);return l}function l(e,t={}){let r=(0,s.Z)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:i=!1,matchMedia:o=n?window.matchMedia:null,ssrMatchMedia:l=null,noSsr:h=!1}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),p="function"==typeof e?e(r):e;p=p.replace(/^@media( ?)/m,"");let m=(void 0!==u?c:d)(p,i,o,l,h);return m}},65954:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return r(4925)}])},63957:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var n=r(85893),i=r(67294),s=r(41664),a=r.n(s);let o=(0,i.forwardRef)(function(e,t){return(0,n.jsx)(a(),{ref:t,...e})})},59598:function(e,t,r){"use strict";r.d(t,{p:function(){return d}});var n=r(85893),i=r(9008),s=r.n(i),a=r(45697),o=r.n(a);let d=e=>{let{title:t}=e;return(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:t?t+" | EcoNetwork":"EcoNetwork.io - Green energy certificate trading"})})};d.propTypes={title:o().string}},22842:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(67294),i=r(11846);let s=()=>{(0,n.useEffect)(()=>{i.w.push({event:"page_view"})},[])}},4925:function(e,t,r){"use strict";r.r(t);var n=r(85893),i=r(87357),s=r(11057),a=r(65582),o=r(15861),d=r(98396),u=r(63957),c=r(59598),l=r(22842),h=r(38166);t.default=()=>{let e=(0,d.Z)(e=>e.breakpoints.down("md"));return(0,l.a)(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.p,{title:"Error: Server Error"}),(0,n.jsx)(i.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,py:"80px"},children:(0,n.jsxs)(a.Z,{maxWidth:"lg",children:[(0,n.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",mb:6},children:(0,n.jsx)(i.Z,{alt:"Internal server error",component:"img",src:"/assets/errors/error-500.png",sx:{height:"auto",maxWidth:"100%",width:400}})}),(0,n.jsx)(o.Z,{align:"center",variant:e?"h1":"h4",children:"500: Internal Server Error"}),(0,n.jsx)(o.Z,{align:"center",color:"text.secondary",sx:{mt:.5},children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation."}),(0,n.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,n.jsx)(s.Z,{component:u.r,href:h.H.index,children:"Back to Home"})})]})})]})}},38166:function(e,t,r){"use strict";r.d(t,{H:function(){return n}});let n={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{login:"/auth/login",register:"/auth/register"},contact:"/contact",dashboard:{index:"/dashboard",account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",portfolio:"/dashboard/portfolio",news:{index:"/dashboard/news",postDetails:"/dashboard/news/:postId",postCreate:"/dashboard/news/create"},customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"}},notAuthorized:"/401",notFound:"/404",serverError:"/500"}}},function(e){e.O(0,[4310,9774,2888,179],function(){return e(e.s=65954)}),_N_E=e.O()}]);