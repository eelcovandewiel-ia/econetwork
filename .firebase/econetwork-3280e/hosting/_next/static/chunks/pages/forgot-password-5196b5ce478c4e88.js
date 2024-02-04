(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9742],{66242:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var o=t(87462),a=t(63366),n=t(67294),s=t(86010),i=t(94780),d=t(90948),l=t(71657),c=t(11791),u=t(1588),p=t(34867);function h(e){return(0,p.ZP)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=t(85893);let x=["className","raised"],b=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},h,r)},f=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),g=n.forwardRef(function(e,r){let t=(0,l.Z)({props:e,name:"MuiCard"}),{className:n,raised:i=!1}=t,d=(0,a.Z)(t,x),c=(0,o.Z)({},t,{raised:i}),u=b(c);return(0,m.jsx)(f,(0,o.Z)({className:(0,s.Z)(u.root,n),elevation:i?8:void 0,ref:r,ownerState:c},d))});var Z=g},78445:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var o=t(63366),a=t(87462),n=t(67294),s=t(86010),i=t(94780),d=t(15861),l=t(71657),c=t(90948),u=t(1588),p=t(34867);function h(e){return(0,p.ZP)("MuiCardHeader",e)}let m=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var x=t(85893);let b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)},g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,a.Z)({[`& .${m.title}`]:r.title,[`& .${m.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"}),w=n.forwardRef(function(e,r){let t=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:i,className:c,component:u="div",disableTypography:p=!1,subheader:h,subheaderTypographyProps:m,title:w,titleTypographyProps:j}=t,k=(0,o.Z)(t,b),C=(0,a.Z)({},t,{component:u,disableTypography:p}),R=f(C),M=w;null==M||M.type===d.Z||p||(M=(0,x.jsx)(d.Z,(0,a.Z)({variant:i?"body2":"h5",className:R.title,component:"span",display:"block"},j,{children:M})));let P=h;return null==P||P.type===d.Z||p||(P=(0,x.jsx)(d.Z,(0,a.Z)({variant:i?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},m,{children:P}))),(0,x.jsxs)(g,(0,a.Z)({className:(0,s.Z)(R.root,c),as:u,ref:r,ownerState:C},k,{children:[i&&(0,x.jsx)(Z,{className:R.avatar,ownerState:C,children:i}),(0,x.jsxs)(y,{className:R.content,ownerState:C,children:[M,P]}),n&&(0,x.jsx)(v,{className:R.action,ownerState:C,children:n})]}))});var j=w},65582:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var o=t(63366),a=t(87462),n=t(67294),s=t(86010),i=t(14142),d=t(34867),l=t(94780),c=t(29628),u=t(13264),p=t(66500),h=t(85893);let m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),b=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`maxWidth${(0,i.Z)(String(t.maxWidth))}`],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),f=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:x}),g=(e,r)=>{let{classes:t,fixed:o,disableGutters:a,maxWidth:n}=e,s={root:["root",n&&`maxWidth${(0,i.Z)(String(n))}`,o&&"fixed",a&&"disableGutters"]};return(0,l.Z)(s,e=>(0,d.ZP)(r,e),t)};var Z=t(98216),v=t(90948),y=t(71657);let w=function(e={}){let{createStyledComponent:r=b,useThemeProps:t=f,componentName:i="MuiContainer"}=e,d=r(({theme:e,ownerState:r})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:r})=>r.fixed&&Object.keys(e.breakpoints.values).reduce((r,t)=>{let o=e.breakpoints.values[t];return 0!==o&&(r[e.breakpoints.up(t)]={maxWidth:`${o}${e.breakpoints.unit}`}),r},{}),({theme:e,ownerState:r})=>(0,a.Z)({},"xs"===r.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},r.maxWidth&&"xs"!==r.maxWidth&&{[e.breakpoints.up(r.maxWidth)]:{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`}})),l=n.forwardRef(function(e,r){let n=t(e),{className:l,component:c="div",disableGutters:u=!1,fixed:p=!1,maxWidth:x="lg"}=n,b=(0,o.Z)(n,m),f=(0,a.Z)({},n,{component:c,disableGutters:u,fixed:p,maxWidth:x}),Z=g(f,i);return(0,h.jsx)(d,(0,a.Z)({as:c,ownerState:f,className:(0,s.Z)(Z.root,l),ref:r},b))});return l}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`maxWidth${(0,Z.Z)(String(t.maxWidth))}`],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var j=w},23795:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var o=t(63366),a=t(87462),n=t(67294),s=t(86010),i=t(94780),d=t(98216),l=t(90948),c=t(71657),u=t(79674),p=t(51705),h=t(15861),m=t(1588),x=t(34867);function b(e){return(0,x.ZP)("MuiLink",e)}let f=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var g=t(54844),Z=t(41796);let v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>v[e]||e;var w=({theme:e,ownerState:r})=>{let t=y(r.color),o=(0,g.DW)(e,`palette.${t}`,!1)||r.color,a=(0,g.DW)(e,`palette.${t}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,Z.Fq)(o,.4)},j=t(85893);let k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=e=>{let{classes:r,component:t,focusVisible:o,underline:a}=e,n={root:["root",`underline${(0,d.Z)(a)}`,"button"===t&&"button",o&&"focusVisible"]};return(0,i.Z)(n,b,r)},R=(0,l.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`underline${(0,d.Z)(t.underline)}`],"button"===t.component&&r.button]}})(({theme:e,ownerState:r})=>(0,a.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:w({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})),M=n.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiLink"}),{className:i,color:d="primary",component:l="a",onBlur:h,onFocus:m,TypographyClasses:x,underline:b="always",variant:f="inherit",sx:g}=t,Z=(0,o.Z)(t,k),{isFocusVisibleRef:y,onBlur:w,onFocus:M,ref:P}=(0,u.Z)(),[W,S]=n.useState(!1),N=(0,p.Z)(r,P),H=(0,a.Z)({},t,{color:d,component:l,focusVisible:W,underline:b,variant:f}),T=C(H);return(0,j.jsx)(R,(0,a.Z)({color:d,className:(0,s.Z)(T.root,i),classes:x,component:l,onBlur:e=>{w(e),!1===y.current&&S(!1),h&&h(e)},onFocus:e=>{M(e),!0===y.current&&S(!0),m&&m(e)},ref:N,ownerState:H,variant:f,sx:[...Object.keys(v).includes(d)?[]:[{color:d}],...Array.isArray(g)?g:[g]]},Z))});var P=M},52036:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return t(46096)}])},63957:function(e,r,t){"use strict";t.d(r,{r:function(){return i}});var o=t(85893),a=t(67294),n=t(41664),s=t.n(n);let i=(0,a.forwardRef)(function(e,r){return(0,o.jsx)(s(),{ref:r,...e})})},59598:function(e,r,t){"use strict";t.d(r,{p:function(){return d}});var o=t(85893),a=t(9008),n=t.n(a),s=t(45697),i=t.n(s);let d=e=>{let{title:r}=e;return(0,o.jsx)(n(),{children:(0,o.jsx)("title",{children:r?r+" | EcoNetwork":"EcoNetwork.io - Green energy certificate trading"})})};d.propTypes={title:i().string}},91793:function(e,r,t){"use strict";t.d(r,{A:function(){return m}});var o=t(85893),a=t(45697),n=t.n(a),s=t(87357),i=t(65582),d=t(51233),l=t(90948),c=t(51644),u=t(63957),p=t(38166);let h=(0,l.ZP)("div")(e=>{let{theme:r}=e;return{backgroundColor:r.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),m=e=>{let{children:r}=e;return(0,o.jsxs)(h,{children:[(0,o.jsx)(s.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:e=>e.zIndex.appBar},children:(0,o.jsx)(i.Z,{maxWidth:"lg",children:(0,o.jsx)(d.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,o.jsxs)(d.Z,{alignItems:"center",component:u.r,direction:"row",display:"inline-flex",href:p.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,o.jsx)(s.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,o.jsx)(c.T,{})}),(0,o.jsx)(s.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:"EcoNetwork.io"})]})})})}),(0,o.jsx)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,o.jsx)(i.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:r})})]})};m.propTypes={children:n().node}},46096:function(e,r,t){"use strict";t.r(r);var o=t(85893),a=t(16310),n=t(28482),s=t(30136),i=t(87357),d=t(11057),l=t(66242),c=t(44267),u=t(78445),p=t(23795),h=t(51233),m=t(53219),x=t(93155),b=t(15861),f=t(63957),g=t(59598),Z=t(91793),v=t(38166);let y={password:"",passwordConfirm:""},w=a.Ry({password:a.Z_().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:a.Z_().oneOf([a.iH("password")],"Passwords must match").required("Required")}),j=()=>{let e=(0,n.TA)({initialValues:y,validationSchema:w,onSubmit:()=>{}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.p,{title:"Reset Password"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Z,{sx:{mb:4},children:(0,o.jsxs)(p.Z,{color:"text.primary",component:f.r,href:v.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,o.jsx)(m.Z,{sx:{mr:1},children:(0,o.jsx)(s.Z,{})}),(0,o.jsx)(b.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,o.jsxs)(l.Z,{elevation:16,children:[(0,o.jsx)(u.Z,{sx:{pb:0},title:"Reset Password"}),(0,o.jsx)(c.Z,{children:(0,o.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,o.jsxs)(h.Z,{spacing:3,children:[(0,o.jsx)(x.Z,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password}),(0,o.jsx)(x.Z,{error:!!(e.touched.passwordConfirm&&e.errors.passwordConfirm),fullWidth:!0,helperText:e.touched.passwordConfirm&&e.errors.passwordConfirm,label:"Password (Confirm)",name:"passwordConfirm",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.passwordConfirm})]}),(0,o.jsx)(d.Z,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Reset"})]})})]})]})]})};j.getLayout=e=>(0,o.jsx)(Z.A,{children:e}),r.default=j},38166:function(e,r,t){"use strict";t.d(r,{H:function(){return o}});let o={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{login:"/auth/login",register:"/auth/register"},contact:"/contact",dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},notAuthorized:"/401",notFound:"/404",serverError:"/500"}},30136:function(e,r,t){"use strict";var o=t(87462);t(67294);var a=t(85893);r.Z=function(e){return(0,a.jsxs)("svg",(0,o.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,a.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"m12 19-7-7 7-7"}),(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12H5m0 0 7 7m-7-7 7-7"})]}))}}},function(e){e.O(0,[4310,8471,3155,454,9774,2888,179],function(){return e(e.s=52036)}),_N_E=e.O()}]);