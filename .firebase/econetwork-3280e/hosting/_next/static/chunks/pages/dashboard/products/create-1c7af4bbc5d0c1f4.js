(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3844],{70636:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/products/create",function(){return n(28951)}])},27930:function(e,r,n){"use strict";n.d(r,{$:function(){return l}});var o=n(85893),i=n(87357);let l=()=>(0,o.jsx)(i.Z,{sx:{backgroundColor:"neutral.500",borderRadius:"50%",height:4,width:4}})},10219:function(e,r,n){"use strict";n.d(r,{Y:function(){return C}});var o=n(85893),i=n(45697),l=n.n(i),t=n(21582),a=n(2957),s=n(45331),c=n(87952),d=n(87357),u=n(11057),h=n(93946),p=n(78462),x=n(19294),m=n(48885),b=n(59334),g=n(51233),j=n(53219),v=n(34386),Z=n(15861);let f={jpeg:"/assets/icons/icon-jpg.svg",jpg:"/assets/icons/icon-jpg.svg",mp4:"/assets/icons/icon-mp4.svg",pdf:"/assets/icons/icon-pdf.svg",png:"/assets/icons/icon-png.svg",svg:"/assets/icons/icon-svg.svg"},y=e=>{let r;let{extension:n}=e;return r=n&&f[n]||"/assets/icons/icon-other.svg",(0,o.jsx)("img",{src:r})};y.propTypes={extension:l().string};var k=n(30581);let C=e=>{let{caption:r,files:n=[],onRemove:i,onRemoveAll:l,onUpload:f,...C}=e,{getRootProps:w,getInputProps:B,isDragActive:P}=(0,t.uI)(C),q=n.length>0;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(d.Z,{sx:{alignItems:"center",border:1,borderRadius:1,borderStyle:"dashed",borderColor:"divider",display:"flex",flexWrap:"wrap",justifyContent:"center",outline:"none",p:6,...P&&{backgroundColor:"action.active",opacity:.5},"&:hover":{backgroundColor:"action.hover",cursor:"pointer",opacity:.5}},...w(),children:[(0,o.jsx)("input",{...B()}),(0,o.jsxs)(g.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,o.jsx)(c.Z,{sx:{height:64,width:64},children:(0,o.jsx)(j.Z,{children:(0,o.jsx)(a.Z,{})})}),(0,o.jsxs)(g.Z,{spacing:1,children:[(0,o.jsxs)(Z.Z,{sx:{"& span":{textDecoration:"underline"}},variant:"h6",children:[(0,o.jsx)("span",{children:"Click to upload"})," or drag and drop"]}),r&&(0,o.jsx)(Z.Z,{color:"text.secondary",variant:"body2",children:r})]})]})]}),q&&(0,o.jsxs)(d.Z,{sx:{mt:2},children:[(0,o.jsx)(p.Z,{children:n.map(e=>{let r=e.name.split(".").pop();return(0,o.jsxs)(x.ZP,{sx:{border:1,borderColor:"divider",borderRadius:1,"& + &":{mt:1}},children:[(0,o.jsx)(m.Z,{children:(0,o.jsx)(y,{extension:r})}),(0,o.jsx)(b.Z,{primary:e.name,primaryTypographyProps:{variant:"subtitle2"},secondary:(0,k.R)(e.size)}),(0,o.jsx)(v.Z,{title:"Remove",children:(0,o.jsx)(h.Z,{edge:"end",onClick:()=>null==i?void 0:i(e),children:(0,o.jsx)(j.Z,{children:(0,o.jsx)(s.Z,{})})})})]},e.path)})}),(0,o.jsxs)(g.Z,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:2,sx:{mt:2},children:[(0,o.jsx)(u.Z,{color:"inherit",onClick:l,size:"small",type:"button",children:"Remove All"}),(0,o.jsx)(u.Z,{onClick:f,size:"small",type:"button",variant:"contained",children:"Upload"})]})]})]})};C.propTypes={caption:l().string,files:l().array,onRemove:l().func,onRemoveAll:l().func,onUpload:l().func,accept:l().objectOf(l().arrayOf(l().string.isRequired).isRequired),disabled:l().bool,getFilesFromEvent:l().func,maxFiles:l().number,maxSize:l().number,minSize:l().number,noClick:l().bool,noDrag:l().bool,noDragEventsBubbling:l().bool,noKeyboard:l().bool,onDrop:l().func,onDropAccepted:l().func,onDropRejected:l().func,onFileDialogCancel:l().func,preventDropOnDocument:l().bool}},30916:function(e,r,n){"use strict";n.d(r,{B:function(){return a}});var o=n(5152),i=n.n(o),l=n(90948);let t=i()(()=>Promise.all([n.e(2937),n.e(8764),n.e(1167)]).then(n.t.bind(n,71167,23)),{loadableGenerated:{webpack:()=>[71167]},ssr:!1,loading:()=>null}),a=(0,l.ZP)(t)(e=>{let{theme:r}=e;return{border:1,borderColor:r.palette.divider,borderRadius:r.shape.borderRadius,borderStyle:"solid",display:"flex",flexDirection:"column",overflow:"hidden","& .quill":{display:"flex",flex:1,flexDirection:"column",overflow:"hidden"},"& .ql-snow.ql-toolbar":{borderColor:r.palette.divider,borderLeft:"none",borderRight:"none",borderTop:"none","& .ql-picker-label:hover":{color:r.palette.primary.main},"& .ql-picker-label.ql-active":{color:r.palette.primary.main},"& .ql-picker-item:hover":{color:r.palette.primary.main},"& .ql-picker-item.ql-selected":{color:r.palette.primary.main},"& button:hover":{color:r.palette.primary.main,"& .ql-stroke":{stroke:r.palette.primary.main}},"& button:focus":{color:r.palette.primary.main,"& .ql-stroke":{stroke:r.palette.primary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:r.palette.primary.main}},"& .ql-stroke":{stroke:r.palette.text.primary},"& .ql-picker":{color:r.palette.text.primary},"& .ql-picker-options":{backgroundColor:r.palette.background.paper,border:"none",borderRadius:r.shape.borderRadius,boxShadow:r.shadows[10],padding:r.spacing(2)}},"& .ql-snow.ql-container":{borderBottom:"none",borderColor:r.palette.divider,borderLeft:"none",borderRight:"none",display:"flex",flex:1,flexDirection:"column",height:"auto",overflow:"hidden","& .ql-editor":{color:r.palette.text.primary,flex:1,fontFamily:r.typography.body1.fontFamily,fontSize:r.typography.body1.fontSize,height:"auto",overflowY:"auto",padding:r.spacing(2),"&.ql-blank::before":{color:r.palette.text.secondary,fontStyle:"normal",left:r.spacing(2)}}}}})},28951:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return W}});var o=n(85893),i=n(87357),l=n(12963),t=n(65582),a=n(23795),s=n(51233),c=n(15861),d=n(27930),u=n(63957),h=n(59598),p=n(22842),x=n(88638),m=n(38166),b=n(67294),g=n(86501),j=n(16310),v=n(28482),Z=n(11057),f=n(66242),y=n(44267),k=n(50480),C=n(56815),w=n(27400),B=n(18972),P=n(45843),q=n(93155),R=n(10219),S=n(30916),D=n(98682);let _=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],F={barcode:"925487986526",category:"",description:"",images:[],name:"",newPrice:0,oldPrice:0,sku:"IYV-8745",submit:null},E=j.Ry({barcode:j.Z_().max(255),category:j.Z_().max(255),description:j.Z_().max(5e3),images:j.IX(),name:j.Z_().max(255).required(),newPrice:j.Rx().min(0).required(),oldPrice:j.Rx().min(0),sku:j.Z_().max(255)}),I=e=>{let r=(0,D.t)(),[n,l]=(0,b.useState)([]),t=(0,v.TA)({initialValues:F,validationSchema:E,onSubmit:async(e,n)=>{try{g.ZP.success("Product created"),r.push(m.H.dashboard.products.index)}catch(e){console.error(e),g.ZP.error("Something went wrong!"),n.setStatus({success:!1}),n.setErrors({submit:e.message}),n.setSubmitting(!1)}}}),a=(0,b.useCallback)(e=>{l(r=>[...r,...e])},[]),d=(0,b.useCallback)(e=>{l(r=>r.filter(r=>r.path!==e.path))},[]),u=(0,b.useCallback)(()=>{l([])},[]);return(0,o.jsx)("form",{onSubmit:t.handleSubmit,...e,children:(0,o.jsxs)(s.Z,{spacing:4,children:[(0,o.jsx)(f.Z,{children:(0,o.jsx)(y.Z,{children:(0,o.jsxs)(w.Z,{container:!0,spacing:3,children:[(0,o.jsx)(w.Z,{xs:12,md:4,children:(0,o.jsx)(c.Z,{variant:"h6",children:"Basic details"})}),(0,o.jsx)(w.Z,{xs:12,md:8,children:(0,o.jsxs)(s.Z,{spacing:3,children:[(0,o.jsx)(q.Z,{error:!!(t.touched.name&&t.errors.name),fullWidth:!0,helperText:t.touched.name&&t.errors.name,label:"Product Name",name:"name",onBlur:t.handleBlur,onChange:t.handleChange,value:t.values.name}),(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{color:"text.secondary",sx:{mb:2},variant:"subtitle2",children:"Description"}),(0,o.jsx)(S.B,{onChange:e=>{t.setFieldValue("description",e)},placeholder:"Write something",sx:{height:400},value:t.values.description}),!!(t.touched.description&&t.errors.description)&&(0,o.jsx)(i.Z,{sx:{mt:2},children:(0,o.jsx)(C.Z,{error:!0,children:t.errors.description})})]})]})})]})})}),(0,o.jsx)(f.Z,{children:(0,o.jsx)(y.Z,{children:(0,o.jsxs)(w.Z,{container:!0,spacing:3,children:[(0,o.jsx)(w.Z,{xs:12,md:4,children:(0,o.jsxs)(s.Z,{spacing:1,children:[(0,o.jsx)(c.Z,{variant:"h6",children:"Images"}),(0,o.jsx)(c.Z,{color:"text.secondary",variant:"body2",children:"Images will appear in the store front of your website."})]})}),(0,o.jsx)(w.Z,{xs:12,md:8,children:(0,o.jsx)(R.Y,{accept:{"image/*":[]},caption:"(SVG, JPG, PNG, or gif maximum 900x400)",files:n,onDrop:a,onRemove:d,onRemoveAll:u})})]})})}),(0,o.jsx)(f.Z,{children:(0,o.jsx)(y.Z,{children:(0,o.jsxs)(w.Z,{container:!0,spacing:3,children:[(0,o.jsx)(w.Z,{xs:12,md:4,children:(0,o.jsx)(c.Z,{variant:"h6",children:"Pricing"})}),(0,o.jsx)(w.Z,{xs:12,md:8,children:(0,o.jsxs)(s.Z,{spacing:3,children:[(0,o.jsx)(q.Z,{error:!!(t.touched.oldPrice&&t.errors.oldPrice),fullWidth:!0,label:"Old price",name:"oldPrice",onBlur:t.handleBlur,onChange:t.handleChange,type:"number",value:t.values.oldPrice}),(0,o.jsx)(q.Z,{error:!!(t.touched.newPrice&&t.errors.newPrice),fullWidth:!0,label:"New Price",name:"newPrice",onBlur:t.handleBlur,onChange:t.handleChange,type:"number",value:t.values.newPrice}),(0,o.jsx)("div",{children:(0,o.jsx)(k.Z,{control:(0,o.jsx)(P.Z,{defaultChecked:!0}),label:"Keep selling when stock is empty"})})]})})]})})}),(0,o.jsx)(f.Z,{children:(0,o.jsx)(y.Z,{children:(0,o.jsxs)(w.Z,{container:!0,spacing:3,children:[(0,o.jsx)(w.Z,{xs:12,md:4,children:(0,o.jsx)(c.Z,{variant:"h6",children:"Category"})}),(0,o.jsx)(w.Z,{xs:12,md:8,children:(0,o.jsxs)(s.Z,{spacing:3,children:[(0,o.jsx)(q.Z,{error:!!(t.touched.category&&t.errors.category),fullWidth:!0,label:"Category",name:"category",onBlur:t.handleBlur,onChange:t.handleChange,select:!0,value:t.values.category,children:_.map(e=>(0,o.jsx)(B.Z,{value:e.value,children:e.label},e.value))}),(0,o.jsx)(q.Z,{disabled:!0,error:!!(t.touched.barcode&&t.errors.barcode),fullWidth:!0,label:"Barcode",name:"barcode",onBlur:t.handleBlur,onChange:t.handleChange,value:t.values.barcode}),(0,o.jsx)(q.Z,{disabled:!0,error:!!(t.touched.sku&&t.errors.sku),fullWidth:!0,label:"SKU",name:"sku",onBlur:t.handleBlur,onChange:t.handleChange,value:t.values.sku})]})})]})})}),(0,o.jsxs)(s.Z,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:1,children:[(0,o.jsx)(Z.Z,{color:"inherit",children:"Cancel"}),(0,o.jsx)(Z.Z,{type:"submit",variant:"contained",children:"Create"})]})]})})},T=()=>((0,p.a)(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.p,{title:"Dashboard: Product Create"}),(0,o.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,o.jsx)(t.Z,{maxWidth:"xl",children:(0,o.jsxs)(s.Z,{spacing:3,children:[(0,o.jsxs)(s.Z,{spacing:1,children:[(0,o.jsx)(c.Z,{variant:"h4",children:"Create a new product"}),(0,o.jsxs)(l.Z,{separator:(0,o.jsx)(d.$,{}),children:[(0,o.jsx)(a.Z,{color:"text.primary",component:u.r,href:m.H.dashboard.index,variant:"subtitle2",children:"Dashboard"}),(0,o.jsx)(a.Z,{color:"text.primary",component:u.r,href:m.H.dashboard.products.index,variant:"subtitle2",children:"Products"}),(0,o.jsx)(c.Z,{color:"text.secondary",variant:"subtitle2",children:"Create"})]})]}),(0,o.jsx)(I,{})]})})})]}));T.getLayout=e=>(0,o.jsx)(x.A,{children:e});var W=T},30581:function(e,r,n){"use strict";n.d(r,{R:function(){return o}});let o=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";let n=r<0?0:r,o=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,o)).toFixed(n))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o])}}},function(e){e.O(0,[4310,1425,8471,3155,3473,2777,2053,7483,7504,5311,454,5377,8321,7279,9774,2888,179],function(){return e(e.s=70636)}),_N_E=e.O()}]);