(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8156],{88984:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/buttons",function(){return t(54517)}])},27930:function(e,n,t){"use strict";t.d(n,{$:function(){return s}});var r=t(85893),i=t(87357);let s=()=>(0,r.jsx)(i.Z,{sx:{backgroundColor:"neutral.500",borderRadius:"50%",height:4,width:4}})},80291:function(e,n,t){"use strict";t.d(n,{r:function(){return s}});var r=t(67294),i=t(37615);let s=()=>(0,r.useContext)(i.J6)},6641:function(e,n,t){"use strict";t.d(n,{A:function(){return v}});var r=t(85893),i=t(45697),s=t.n(i),l=t(30136),c=t(87357),a=t(12963),d=t(65582),o=t(67720),x=t(23795),u=t(51233),h=t(53219),j=t(15861),Z=t(90948),p=t(27930),m=t(63957),f=t(38166);let g=(0,Z.ZP)("div")(e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,display:"flex",flex:"1 1 auto",flexDirection:"column"}}),b=(0,Z.ZP)("div")({display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%"}),v=e=>{let{breadcrumbs:n,children:t,title:i}=e;return(0,r.jsxs)(g,{children:[(0,r.jsx)(c.Z,{sx:{backgroundColor:e=>"dark"===e.palette.mode?"neutral.800":"neutral.50",py:"120px"},children:(0,r.jsx)(d.Z,{maxWidth:"lg",children:(0,r.jsxs)(u.Z,{spacing:3,children:[!n&&(0,r.jsx)("div",{children:(0,r.jsxs)(x.Z,{color:"text.primary",component:m.r,href:f.H.components.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,r.jsx)(h.Z,{sx:{mr:1},children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(j.Z,{variant:"subtitle2",children:"Components"})]})}),(0,r.jsx)("div",{children:(0,r.jsx)(j.Z,{variant:"h1",children:i})}),n&&(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{separator:(0,r.jsx)(p.$,{}),children:n.map((e,t)=>{let i=n.length-1===t;return i?(0,r.jsx)(j.Z,{color:"text.secondary",variant:"subtitle2",children:e.title},t):(0,r.jsx)(x.Z,{color:"text.primary",component:m.r,href:e.href,variant:"subtitle2",children:e.title},t)})})})]})})}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(b,{children:t})]})};v.propTypes={breadcrumbs:s().array,children:s().node.isRequired,title:s().string.isRequired}},54517:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(85893),i=t(87357),s=t(65582),l=t(51233),c=t(59598),a=t(22842),d=t(6641),o=t(68735),x=t(94439),u=t(11057),h=t(94723),j=t(72591),Z=t(53219),p=t(67294),m=t(94207),f=t(56863),g=t(23926),b=t(96514),v=t(18972),k=t(84118),C=t(11791),y=t(16078);let w=["Create a merge commit","Squash and merge","Rebase and merge"],_=[{element:(0,r.jsx)(()=>(0,r.jsx)(i.Z,{sx:{p:3},children:(0,r.jsxs)(l.Z,{spacing:3,children:[(0,r.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:3,children:[(0,r.jsx)(u.Z,{variant:"contained",children:"Default"}),(0,r.jsx)(u.Z,{disabled:!0,variant:"contained",children:"Disabled"})]}),(0,r.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:3,children:[(0,r.jsx)(u.Z,{variant:"outlined",children:"Default"}),(0,r.jsx)(u.Z,{color:"primary",disabled:!0,variant:"outlined",children:"Disabled"})]}),(0,r.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:3,children:[(0,r.jsx)(u.Z,{children:"Default"}),(0,r.jsx)(u.Z,{disabled:!0,children:"Disabled"})]})]})}),{}),title:"Simple buttons"},{element:(0,r.jsx)(()=>(0,r.jsx)(i.Z,{sx:{p:3},children:(0,r.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:3,children:[(0,r.jsx)(u.Z,{color:"error",size:"small",startIcon:(0,r.jsx)(Z.Z,{children:(0,r.jsx)(j.Z,{})}),variant:"contained",children:"Delete Account"}),(0,r.jsx)(u.Z,{endIcon:(0,r.jsx)(Z.Z,{children:(0,r.jsx)(h.Z,{})}),size:"small",variant:"contained",children:"Next Page"})]})}),{}),title:"Buttons with text and icon"},{element:(0,r.jsx)(()=>{let e=(0,p.useRef)(null),[n,t]=(0,p.useState)(!1),[s,l]=(0,p.useState)(1),c=(0,p.useCallback)(e=>{l(e),t(!1)},[]),a=(0,p.useCallback)(()=>{t(e=>!e)},[]),d=(0,p.useCallback)(n=>{e.current&&e.current.contains(n.target)||t(!1)},[]);return(0,r.jsxs)(i.Z,{sx:{p:3},children:[(0,r.jsxs)(f.Z,{ref:e,variant:"contained",children:[(0,r.jsx)(u.Z,{children:w[s]}),(0,r.jsx)(u.Z,{onClick:a,size:"small",sx:{backgroundColor:"primary.dark"},children:(0,r.jsx)(Z.Z,{children:(0,r.jsx)(m.Z,{})})})]}),(0,r.jsx)(y.Z,{anchorEl:e.current,open:n,transition:!0,children:e=>{let{TransitionProps:n,placement:t}=e;return(0,r.jsx)(b.Z,{...n,style:{transformOrigin:"bottom"===t?"center top":"center bottom"},children:(0,r.jsx)(C.Z,{children:(0,r.jsx)(g.Z,{onClickAway:d,children:(0,r.jsx)(k.Z,{children:w.map((e,n)=>(0,r.jsx)(v.Z,{disabled:2===n,onClick:()=>c(n),selected:n===s,children:e},e))})})})})}})]})},{}),title:"Button groups"}],D=()=>((0,a.a)(),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(d.A,{title:"Buttons",children:[(0,r.jsx)(c.p,{title:"Components: Buttons"}),(0,r.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsx)(s.Z,{maxWidth:"lg",children:(0,r.jsx)(l.Z,{spacing:8,children:_.map(e=>(0,r.jsx)(x.M,{title:e.title,children:e.element},e.title))})})})]})}));D.getLayout=e=>(0,r.jsx)(o.A,{children:e});var E=D},94439:function(e,n,t){"use strict";t.d(n,{M:function(){return f}});var r=t(85893),i=t(67294),s=t(45697),l=t.n(s),c=t(71677),a=t(15974),d=t(87357),o=t(66242),x=t(78445),u=t(67720),h=t(93946),j=t(53219),Z=t(22430),p=t(80291),m=t(83771);let f=e=>{let{children:n,title:t,...s}=e,l=(0,p.r)(),[f,g]=(0,i.useState)(l.paletteMode),b=(0,i.useMemo)(()=>(0,m.j)({...l,paletteMode:f}),[l,f]);(0,i.useEffect)(()=>{g(l.paletteMode)},[l.paletteMode]);let v=(0,i.useCallback)(()=>{g(e=>"light"===e?"dark":"light")},[]);return(0,r.jsxs)(o.Z,{variant:"outlined",...s,children:[(0,r.jsx)(x.Z,{action:(0,r.jsx)(h.Z,{onClick:v,children:(0,r.jsx)(j.Z,{fontSize:"small",children:"light"===f?(0,r.jsx)(c.Z,{}):(0,r.jsx)(a.Z,{})})}),title:t}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(Z.Z,{theme:b,children:(0,r.jsx)(d.Z,{sx:{colorScheme:f},children:n})})]})};f.propTypes={children:l().node.isRequired,title:l().string.isRequired}}},function(e){e.O(0,[4310,1425,5311,3176,9670,1173,9774,2888,179],function(){return e(e.s=88984)}),_N_E=e.O()}]);