(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9565],{47882:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/invoices",function(){return n(38894)}])},5814:function(e,t,n){"use strict";n.d(t,{i:function(){return p}});var r=n(83894),s=n(69119),i=n(46395),a=n(49181),o=n(77349),c=n(7069),l=n(88330);let d=new Date,u=[{id:"5ecb868d0f437390ef3ac62c",currency:"$",customer:{email:"contact@acme.com",name:"ACME SRL"},dueDate:(0,o.Z)(d,5).getTime(),issueDate:(0,l.Z)(d,1).getTime(),number:"INV-0019",status:"paid",totalAmount:55.5},{id:"59d78b0b0e15394130c373ff",currency:"$",customer:{email:"sales@blind-spots.com",name:"Blind Spots Inc."},dueDate:(0,o.Z)(d,6).getTime(),issueDate:(0,l.Z)(d,1).getTime(),number:"INV-0018",status:"paid",totalAmount:688.9},{id:"2a05e7f757c35fe823da3c5a",currency:"$",customer:{email:"sales@beauty-clinic.com",name:"Beauty Clinic SRL"},dueDate:(0,o.Z)(d,9).getTime(),issueDate:(0,l.Z)(d,1).getTime(),number:"INV-0017",status:"paid",totalAmount:695.2},{id:"5ecb868ada8deedee0638502",currency:"$",customer:{email:"sales@matt-jason.com",name:"Matt Jason"},dueDate:(0,o.Z)(d,25).getTime(),issueDate:(0,c.Z)((0,l.Z)(d,5),2).getTime(),number:"INV-0021",status:"pending",totalAmount:23.11},{id:"750f519b8bc4d21af9528437",currency:"$",customer:{email:"sales@matt-jason.com",name:"Matt Jason"},dueDate:(0,o.Z)(d,17).getTime(),issueDate:(0,c.Z)((0,l.Z)(d,4),2).getTime(),number:"INV-0020",status:"pending",totalAmount:253.76},{id:"5ecb868700aba84d0f1c0e48",currency:"$",customer:{email:"support@terrythomas.io",name:"Terry Thomas"},dueDate:(0,o.Z)(d,11).getTime(),issueDate:(0,c.Z)((0,l.Z)(d,4),6).getTime(),number:"INV-0015",status:"canceled",totalAmount:781.5},{id:"5ecb8682038e1rl239438dks1",currency:"$",customer:{email:"contact@dispatcher.co.uk",name:"Dispatcher Inc."},dueDate:(0,o.Z)(d,3).getTime(),issueDate:(0,c.Z)((0,l.Z)(d,2),15).getTime(),number:"INV-0014",status:"paid",totalAmount:96.64},{id:"5ecb8682038e1ddf4e868764",currency:"$",customer:{email:"info@novelty.co.uk",name:"Novelty I.S"},dueDate:(0,o.Z)(d,1).getTime(),issueDate:(0,c.Z)((0,l.Z)(d,2),15).getTime(),number:"INV-0013",status:"canceled",totalAmount:496.23}],h={id:"5ecb86785312dcc69b5799ad",currency:"$",customer:{address:"271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand",company:"Countdown Grey Lynn",email:"contact@acme.com",name:"ACME SRL",taxId:"6934656584231"},dueDate:(0,o.Z)(d,5).getTime(),issueDate:(0,l.Z)(d,1).getTime(),items:[{id:"5ecb8694db1760a701dfbf74",currency:"$",description:"Freelancer Subscription (12/05/2019 - 11/06/2019)",quantity:1,totalAmount:55.5,unitAmount:55.5}],number:"INV-0019",status:"paid",subtotalAmount:50,taxAmount:5.5,totalAmount:55.5},p=new class{getInvoices(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{filters:t,page:n,rowsPerPage:o}=e,c=(0,a.p)(u),l=c.length;return void 0!==t&&(l=(c=c.filter(e=>{if(void 0!==t.query&&""!==t.query){let n=e.number.toLowerCase().includes(t.query.toLowerCase());if(!n)return!1}if(void 0!==t.startDate){if(void 0===e.issueDate)return!1;let n=(0,r.Z)(e.issueDate)>=(0,s.Z)(t.startDate);if(!n)return!1}if(void 0!==t.endDate){if(void 0===e.issueDate)return!1;let n=(0,s.Z)(e.issueDate)<=(0,r.Z)(t.endDate);if(!n)return!1}if(void 0!==t.customers&&t.customers.length>0){let n=t.customers.includes(e.customer.name);if(!n)return!1}return void 0===t.status||e.status===t.status})).length),void 0!==n&&void 0!==o&&(c=(0,i.i)(c,n,o)),Promise.resolve({data:c,count:l})}getInvoice(e){return Promise.resolve((0,a.p)(h))}}},47559:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(85893),s=n(45697),i=n.n(s),a=n(90948);let o=(0,a.ZP)("span")(e=>{let{theme:t,ownerState:n}=e,r=t.palette[n.color].alpha12,s="dark"===t.palette.mode?t.palette[n.color].main:t.palette[n.color].dark;return{alignItems:"center",backgroundColor:r,borderRadius:12,color:s,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:t.spacing(1),paddingRight:t.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}),c=e=>{let{color:t="primary",children:n,...s}=e;return(0,r.jsx)(o,{ownerState:{color:t},...s,children:n})};c.propTypes={children:i().node,color:i().oneOf(["primary","secondary","error","info","warning","success"])}},5385:function(e,t,n){"use strict";n.d(t,{s:function(){return s}});var r=n(67294);let s=()=>{let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,r.useCallback)(()=>e.current,[])}},38894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eh}});var r=n(85893),s=n(67294),i=n(40046),a=n(10216),o=n(87357),c=n(11057),l=n(67720),d=n(51233),u=n(53219),h=n(15861),p=n(98396),x=n(5814),m=n(59598),g=n(5385),j=n(22842),Z=n(73934),f=n(90948);let v=(0,f.ZP)("div",{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:n}=e;return{flexGrow:1,overflow:"auto",paddingLeft:t.spacing(3),paddingRight:t.spacing(3),paddingTop:t.spacing(8),paddingBottom:t.spacing(8),zIndex:1,[t.breakpoints.up("lg")]:{marginLeft:-380},transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...n&&{[t.breakpoints.up("lg")]:{marginLeft:0},transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}}});var b=n(45697),y=n.n(b),C=n(95226),w=n(45331),D=n(69368),P=n(77533),k=n(50480),I=n(53457),T=n(40476),S=n(93946),A=n(87109),R=n(57709),N=n(45843),L=n(33754),M=n(96277);let $=["Blind Spots Inc.","Dispatcher Inc.","ACME SRL","Novelty I.S","Beauty Clinic SRL","Division Inc."],E=e=>{let{container:t,filters:n={},group:i,onClose:a,onFiltersChange:c,onGroupChange:l,open:x,...m}=e,g=(0,s.useRef)(null),j=(0,p.Z)(e=>e.breakpoints.up("lg")),Z=(0,s.useCallback)(e=>{var t;e.preventDefault(),null==c||c({...n,query:(null===(t=g.current)||void 0===t?void 0:t.value)||""})},[n,c]),f=(0,s.useCallback)(e=>{let t={...n,startDate:e||void 0};t.endDate&&e&&e>t.endDate&&(t.endDate=e),null==c||c(t)},[n,c]),v=(0,s.useCallback)(e=>{let t={...n,endDate:e||void 0};t.startDate&&e&&e<t.startDate&&(t.startDate=e),null==c||c(t)},[n,c]),b=(0,s.useCallback)(e=>{let t;t=e.target.checked?[...n.customers||[],e.target.value]:(n.customers||[]).filter(t=>t!==e.target.value),null==c||c({...n,customers:t})},[n,c]),y=(0,s.useCallback)(e=>{null==c||c({...n,status:e.target.checked?"paid":void 0})},[n,c]),E=(0,r.jsxs)("div",{children:[(0,r.jsxs)(d.Z,{alignItems:"center",justifyContent:"space-between",direction:"row",sx:{p:3},children:[(0,r.jsx)(h.Z,{variant:"h5",children:"Filters"}),!j&&(0,r.jsx)(S.Z,{onClick:a,children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(w.Z,{})})})]}),(0,r.jsxs)(d.Z,{spacing:3,sx:{p:3},children:[(0,r.jsx)("form",{onSubmit:Z,children:(0,r.jsx)(R.Z,{defaultValue:"",fullWidth:!0,inputProps:{ref:g},placeholder:"Invoice number",startAdornment:(0,r.jsx)(A.Z,{position:"start",children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(C.Z,{})})})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(T.Z,{sx:{display:"block",mb:2},children:"Issue date"}),(0,r.jsxs)(d.Z,{spacing:2,children:[(0,r.jsx)(L.M,{format:"dd/MM/yyyy",label:"From",onChange:f,value:n.startDate||null}),(0,r.jsx)(L.M,{format:"dd/MM/yyyy",label:"To",onChange:v,value:n.endDate||null})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(T.Z,{sx:{display:"block",mb:2},children:"From customer"}),(0,r.jsx)(o.Z,{sx:{backgroundColor:e=>"dark"===e.palette.mode?"neutral.800":"neutral.50",borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1},children:(0,r.jsx)(M.L,{sx:{maxHeight:200},children:(0,r.jsx)(I.Z,{sx:{py:1,px:1.5},children:$.map(e=>{var t;let s=null===(t=n.customers)||void 0===t?void 0:t.includes(e);return(0,r.jsx)(k.Z,{control:(0,r.jsx)(D.Z,{checked:s,onChange:b}),label:e,value:e},e)})})})})]}),(0,r.jsx)(k.Z,{control:(0,r.jsx)(N.Z,{checked:"paid"===n.status,onChange:y}),label:"Paid only"}),(0,r.jsx)(k.Z,{control:(0,r.jsx)(N.Z,{checked:i,onChange:l}),label:"Group by status"})]})]});return j?(0,r.jsx)(P.ZP,{anchor:"left",open:x,PaperProps:{elevation:16,sx:{border:"none",borderRadius:2.5,overflow:"hidden",position:"relative",width:380}},SlideProps:{container:t},variant:"persistent",sx:{p:3},...m,children:E}):(0,r.jsx)(P.ZP,{anchor:"left",hideBackdrop:!0,ModalProps:{container:t,sx:{pointerEvents:"none",position:"absolute"}},onClose:a,open:x,PaperProps:{sx:{maxWidth:"100%",width:380,pointerEvents:"auto",position:"absolute"}},SlideProps:{container:t},variant:"temporary",...m,children:E})};E.propTypes={container:y().any,filters:y().object,group:y().bool,onClose:y().func,onFiltersChange:y().func,onGroupChange:y().func,open:y().bool};var F=n(10304),_=n(23544),V=n(69488),O=n(87952),q=n(66242),G=n(44267),B=n(27400);let W=()=>(0,r.jsx)("div",{children:(0,r.jsxs)(B.Z,{container:!0,spacing:3,children:[(0,r.jsx)(B.Z,{xs:12,md:6,lg:4,children:(0,r.jsx)(q.Z,{children:(0,r.jsx)(G.Z,{children:(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,r.jsx)(O.Z,{sx:{height:48,width:48},children:(0,r.jsx)(V.Z,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:"Total"}),(0,r.jsx)(h.Z,{variant:"h6",children:"$5,300.00"}),(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:"from 12 invoices"})]})]})})})}),(0,r.jsx)(B.Z,{xs:12,md:6,lg:4,children:(0,r.jsx)(q.Z,{children:(0,r.jsx)(G.Z,{children:(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,r.jsx)(O.Z,{sx:{backgroundColor:"success.lightest",color:"success.main",height:48,width:48},children:(0,r.jsx)(_.Z,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:"Paid"}),(0,r.jsx)(h.Z,{variant:"h6",children:"$1,439.60"}),(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:"from 3 invoices"})]})]})})})}),(0,r.jsx)(B.Z,{xs:12,md:6,lg:4,children:(0,r.jsx)(q.Z,{children:(0,r.jsx)(G.Z,{children:(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,r.jsx)(O.Z,{sx:{backgroundColor:"warning.lightest",color:"warning.main",height:48,width:48},children:(0,r.jsx)(F.Z,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:"Pending"}),(0,r.jsx)(h.Z,{variant:"h6",children:"$276.87"}),(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:"from 2 invoices"})]})]})})})})]})});var H=n(32912),z=n(92077),J=n.n(z),Q=n(94723),U=n(7906),X=n(295),K=n(98102),Y=n(8896),ee=n(53816),et=n(63957),en=n(47559),er=n(38166),es=n(95940);let ei=e=>e.reduce((e,t)=>{let{status:n}=t;return{...e,[n]:[...e[n],t]}},{canceled:[],paid:[],pending:[]}),ea={canceled:"error",paid:"success",pending:"warning"},eo=e=>{let{invoice:t,...n}=e,s=ea[t.status],i=J()(t.totalAmount).format("0,0.00"),a=t.issueDate&&(0,H.Z)(t.issueDate,"dd/MM/yyyy"),o=t.dueDate&&(0,H.Z)(t.dueDate,"dd/MM/yyyy");return(0,r.jsxs)(ee.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},...n,children:[(0,r.jsx)(K.Z,{width:"25%",children:(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,component:et.r,href:er.H.dashboard.invoices.details,sx:{display:"inline-flex",textDecoration:"none",whiteSpace:"nowrap"},children:[(0,r.jsx)(O.Z,{sx:{height:42,width:42},children:(0,es.Q)(t.customer.name)}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{color:"text.primary",variant:"subtitle2",children:t.number}),(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:t.customer.name})]})]})}),(0,r.jsx)(K.Z,{children:(0,r.jsxs)(h.Z,{variant:"subtitle2",children:[t.currency,i]})}),(0,r.jsxs)(K.Z,{children:[(0,r.jsx)(h.Z,{variant:"subtitle2",children:"Issued"}),(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:a})]}),(0,r.jsxs)(K.Z,{children:[(0,r.jsx)(h.Z,{variant:"subtitle2",children:"Due"}),(0,r.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:o})]}),(0,r.jsx)(K.Z,{align:"right",children:(0,r.jsx)(en.I,{color:s,children:t.status})}),(0,r.jsx)(K.Z,{align:"right",children:(0,r.jsx)(S.Z,{component:et.r,href:er.H.dashboard.invoices.details,children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(Q.Z,{})})})})]})};eo.propTypes={invoice:y().object.isRequired};let ec=e=>{let t;let{group:n=!1,items:s=[],count:i=0,onPageChange:a=()=>{},onRowsPerPageChange:o,page:c=0,rowsPerPage:l=0}=e;if(n){let e=ei(s),n=Object.keys(e);t=(0,r.jsx)(d.Z,{spacing:6,children:n.map(t=>{let n=t.charAt(0).toUpperCase()+t.slice(1),s=e[t].length,i=e[t],a=i.length>0;return(0,r.jsxs)(d.Z,{spacing:2,children:[(0,r.jsxs)(h.Z,{color:"text.secondary",variant:"h6",children:[n," (",s,")"]}),a&&(0,r.jsx)(q.Z,{children:(0,r.jsx)(M.L,{children:(0,r.jsx)(U.Z,{sx:{minWidth:600},children:(0,r.jsx)(X.Z,{children:i.map(e=>(0,r.jsx)(eo,{invoice:e},e.id))})})})})]},n)})})}else t=(0,r.jsx)(q.Z,{children:(0,r.jsx)(U.Z,{children:(0,r.jsx)(X.Z,{children:s.map(e=>(0,r.jsx)(eo,{invoice:e},e.id))})})});return(0,r.jsxs)(d.Z,{spacing:4,children:[t,(0,r.jsx)(Y.Z,{component:"div",count:i,onPageChange:a,onRowsPerPageChange:o,page:c,rowsPerPage:l,rowsPerPageOptions:[5,10,25]})]})};ec.propTypes={count:y().number,group:y().bool,items:y().array,onPageChange:y().func,onRowsPerPageChange:y().func,page:y().number,rowsPerPage:y().number};let el=()=>{let[e,t]=(0,s.useState)({filters:{customers:[],endDate:void 0,query:"",startDate:void 0},page:0,rowsPerPage:5}),n=(0,s.useCallback)(e=>{t(t=>({...t,filters:e,page:0}))},[]),r=(0,s.useCallback)((e,n)=>{t(e=>({...e,page:n}))},[]),i=(0,s.useCallback)(e=>{t(t=>({...t,rowsPerPage:parseInt(e.target.value,10)}))},[]);return{handleFiltersChange:n,handlePageChange:r,handleRowsPerPageChange:i,state:e}},ed=e=>{let t=(0,g.s)(),[n,r]=(0,s.useState)({invoices:[],invoicesCount:0}),i=(0,s.useCallback)(async()=>{try{let n=await x.i.getInvoices(e);t()&&r({invoices:n.data,invoicesCount:n.count})}catch(e){console.error(e)}},[e,t]);return(0,s.useEffect)(()=>{i()},[e]),{...n}},eu=()=>{let e=(0,s.useRef)(null),t=(0,p.Z)(e=>e.breakpoints.up("lg")),n=el(),x=ed(n.state),[g,Z]=(0,s.useState)(!0),[f,b]=(0,s.useState)(t);(0,j.a)();let y=(0,s.useCallback)(e=>{Z(e.target.checked)},[]),C=(0,s.useCallback)(()=>{b(e=>!e)},[]),w=(0,s.useCallback)(()=>{b(!1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.p,{title:"Dashboard: Invoice List"}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(o.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:(0,r.jsxs)(o.Z,{ref:e,sx:{bottom:0,display:"flex",left:0,position:"absolute",right:0,top:0},children:[(0,r.jsx)(E,{container:e.current,filters:n.state.filters,group:g,onFiltersChange:n.handleFiltersChange,onClose:w,onGroupChange:y,open:f}),(0,r.jsx)(v,{open:f,children:(0,r.jsxs)(d.Z,{spacing:4,children:[(0,r.jsxs)(d.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{variant:"h4",children:"Invoices"})}),(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(c.Z,{color:"inherit",startIcon:(0,r.jsx)(u.Z,{children:(0,r.jsx)(i.Z,{})}),onClick:C,children:"Filters"}),(0,r.jsx)(c.Z,{startIcon:(0,r.jsx)(u.Z,{children:(0,r.jsx)(a.Z,{})}),variant:"contained",children:"New"})]})]}),(0,r.jsx)(W,{}),(0,r.jsx)(ec,{count:x.invoicesCount,group:g,items:x.invoices,onPageChange:n.handlePageChange,onRowsPerPageChange:n.handleRowsPerPageChange,page:n.state.page,rowsPerPage:n.state.rowsPerPage})]})})]})})]})};eu.getLayout=e=>(0,r.jsx)(Z.A,{children:e});var eh=eu},46395:function(e,t,n){"use strict";function r(e,t,n){return e.slice(t*n,t*n+n)}n.d(t,{i:function(){return r}})},49181:function(e,t,n){"use strict";n.d(t,{p:function(){return function e(t){return"object"!=typeof t||null===t?t:t instanceof Date?new Date(t.getTime()):t instanceof Array?t.reduce((t,n,r)=>(t[r]=e(n),t),[]):t instanceof Object?Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{}):void 0}}})},95940:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map(e=>e&&e[0].toUpperCase()).join("")}}},function(e){e.O(0,[4310,1425,8471,3155,3473,2777,2053,7483,7504,2077,7375,8896,6886,2813,9980,9300,8102,8502,6968,7673,9774,2888,179],function(){return e(e.s=47882)}),_N_E=e.O()}]);