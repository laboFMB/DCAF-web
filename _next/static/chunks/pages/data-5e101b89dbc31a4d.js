(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{1440:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data",function(){return n(391)}])},3419:function(e,t,n){"use strict";n.d(t,{l:function(){return f}});var r=n(2729),i=n(5893);n(7294);var l=n(6829),a=n(1664),o=n.n(a),s=n(1163),d=n(6638),c=n(4682);function u(){let e=(0,r._)(["\n  width: 50px;\n  min-height: 100%;\n  background-color: black;\n"]);return u=function(){return e},e}function h(){let e=(0,r._)(["\n  &:hover {\n    cursor: pointer;\n    background-color: # !important;\n    color: black !important;\n  }\n\n  ","\n"]);return h=function(){return e},e}let x=l.Z.nav(u()),p=l.Z.div(h(),e=>{let{active:t}=e;return t&&"\nbackground-color: #04AA6D !important;\ncolor: white !important;\n  "}),f=()=>{let e=(0,s.useRouter)();return(0,i.jsxs)(x,{children:[(0,i.jsx)(p,{active:"/"===e.pathname,children:(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)(d.Z,{sx:{color:"white",padding:"8px"},fontSize:"large"})})}),(0,i.jsx)(p,{active:"/data"===e.pathname,children:(0,i.jsx)(o(),{href:"/data",children:(0,i.jsx)(c.Z,{sx:{color:"white",padding:"8px"},fontSize:"large"})})})]})}},4273:function(e,t,n){"use strict";n.d(t,{S:function(){return o},Y:function(){return s}});var r=n(2729),i=n(6829);function l(){let e=(0,r._)(["\n  display: flex;\n  height: 100%;\n"]);return l=function(){return e},e}function a(){let e=(0,r._)(["\n  padding: 0px 20px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  width: 100%;\n"]);return a=function(){return e},e}let o=i.Z.div(l()),s=i.Z.main(a())},391:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eU}});var r=n(5893),i=n(7294),l=n(7357),a=n(4273),o=n(8409),s=n(44);let d=e=>{let{value:t,onChange:n}=e;return(0,r.jsxs)(o.Z,{variant:"fullWidth",value:t,onChange:(e,t)=>{n(e,t)},children:[(0,r.jsx)(s.Z,{disableRipple:!0,label:"Proximity Labeling"}),(0,r.jsx)(s.Z,{disableRipple:!0,label:"Pulse Silac"}),(0,r.jsx)(s.Z,{disableRipple:!0,label:"Localisation and Expression"})]})};var c=n(3419),u=n(9551),h=n(8972);let x=e=>{let{options:t,value:n,onChange:i}=e;return(0,r.jsx)("div",{style:{padding:"10px"},children:(0,r.jsx)(u.Z,{sx:{height:"40px"},value:n,onChange:i,children:t.map(e=>(0,r.jsx)(h.Z,{"data-testid":"".concat("protein-select","-",e),value:e,children:e},e))})})};var p=n(7837),f=n(2729),g=n(6829),m=n(8456),j=n(9332),v=n(3841),b=n(4054),w=n(3321),y=n(6877);function C(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}let F=(e,t)=>{let n="",r=t.map(e=>e.field);for(let t of(n+=r.join(",")+"\n",e))n+=r.map(e=>t[e]).join(",")+"\n";return n},S=e=>e.charAt(0).toUpperCase()+e.slice(1),k=e=>{let{saintData:t,protein:n}=e,{rows:i,columns:a}=function(e){let{header:t,rows:n}=e,r=t.map(e=>({field:e.split(" ").map((e,t)=>0===t?e.toLowerCase():S(e)).join(""),type:["Saint Score","log2FC","id"].includes(e)?"number":"string",headerName:S(e),headerClassName:"grid-header",width:"id"===e?50:100})),i=n.map(e=>({id:e.id.toString(),bait:e.bait,preyGene:e.prey,saintScore:e.saintScore.toFixed(3),log2fc:e.log2FC.toFixed(3)}));return{rows:i,columns:r}}(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{sx:{height:400,width:600,"& .grid-header":{borderBottom:"1px solid grey"}},children:(0,r.jsx)(y._,{rowHeight:25,disableColumnMenu:!0,rows:i,columns:a})}),(0,r.jsx)(w.Z,{onClick:()=>C("saint_".concat(n,".csv"),F(i,a)),children:"Export"})]})};var Z=n(338),M=n(3023),A=n(5358),_=n(6657),L=n(9746),D=n(4888),B=n(3558);function N(){let e=(0,f._)(["\n  display: block;\n  padding: 5px;\n  border-style: ridge;\n  background-color: white;\n"]);return N=function(){return e},e}let z=g.Z.div(N()),P=e=>{let{active:t,payload:n}=e;return t&&n&&n.length?(0,r.jsx)(z,{className:"custom-tooltip",children:(0,r.jsx)("div",{children:n[0].payload.name})}):null},E="#FF0000",R="#9900CC",V="#0000FF",K="#AAAAAA",I="#04AA6D",U=e=>({name:e.prey,x:e.log2FC,y:e.saintScore,z:1}),W=e=>{let{saintData:t,filterMask:n,protein:i}=e,l=t.rows,a=[],o=[],s=[],d=[],c=[];return l.length!==n.length?(console.error("data and filterMask length mismatch"),null):(l.forEach((e,t)=>{"CUL4A"===e.prey||"CUL4B"===e[2]?d.push(U(e)):"DDB1"===e.prey?s.push(U(e)):e.prey===i?c.push(U(e)):n[t]?a.push(U(e)):o.push(U(e))}),(0,r.jsxs)(Z.G,{width:600,height:450,margin:{top:50,right:20,bottom:20,left:10},children:[(0,r.jsx)(M.K,{label:{value:"log2FC",position:"bottom",textAnchor:"middle"},dataKey:"x",domain:[e=>Math.floor(e),e=>Math.ceil(e)],type:"number",name:"log2FC"}),(0,r.jsx)(A.B,{label:{value:"SaintScore",angle:-90,position:"insideLeft",textAnchor:"middle"},dataKey:"y",domain:[0,1],type:"number",name:"saint score"}),(0,r.jsx)(_.d,{dataKey:"z",range:[0,30]}),(0,r.jsx)(L.b,{name:"Other",data:a,fill:I}),(0,r.jsx)(L.b,{name:"filtered",data:o,fill:K}),(0,r.jsx)(L.b,{name:"Cul4A & Cul4B",data:d,fill:R}),(0,r.jsx)(L.b,{name:"DDB1",data:s,fill:V}),(0,r.jsx)(L.b,{name:"DCAF",data:c,fill:E}),(0,r.jsx)(D.u,{content:(0,r.jsx)(P,{}),cursor:{strokeDasharray:"3 3"}}),(0,r.jsx)(B.D,{verticalAlign:"top",height:36,payload:[{value:"DCAF",color:E},{value:"CUL4A & CUL4B",color:R},{value:"DDB1",color:V}]})]}))};function O(e){return!isNaN(parseFloat(e))&&isFinite(e)}function X(e){return O(e)?parseFloat(e):-1e4}function Y(){let e=(0,f._)(["\n  height: 450px;\n  min-width: 600px;\n"]);return Y=function(){return e},e}function G(){let e=(0,f._)(["\n  display: flex;\n"]);return G=function(){return e},e}let T=e=>{let{protein:t,saintService:n}=e;return"loading"===n.status?(0,r.jsx)(m.Z,{}):"error"===n.status?(0,r.jsx)("div",{style:{color:"red"},children:"Failed to recover the data."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(J,{children:[(0,r.jsxs)(Q,{children:[(0,r.jsx)(q,{minSaintScore:n.minSaintScore,setMinSaintScore:n.setMinSaintScore}),(0,r.jsx)(H,{minLog2FC:n.minLog2FC,setMinLog2FC:n.setMinLog2FC})]}),(0,r.jsx)(k,{saintData:n.filter(),protein:t})]}),(0,r.jsx)(J,{children:(0,r.jsx)(W,{saintData:n.data,filterMask:n.getFilterMask(),protein:t})})]})},q=e=>{let{minSaintScore:t,setMinSaintScore:n}=e;return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(v.Z,{children:"Minimum Saint Score"}),(0,r.jsx)(j.Z,{sx:{width:"200px"},value:t,onChange:e=>n(e.target.value),error:!O(t)&&""!==t})]})},H=e=>{let{minLog2FC:t,setMinLog2FC:n}=e;return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(v.Z,{children:"Minimum log2 fold change"}),(0,r.jsx)(j.Z,{sx:{width:"250px"},value:t,onChange:e=>n(e.target.value),error:!O(t)&&""!==t})]})},J=g.Z.div(Y()),Q=g.Z.div(G());var $=n(7460),ee=n.n($);let et=async e=>{let t=new Promise((t,n)=>ee().parse(e,{skipEmptyLines:!0,download:!0,complete:e=>{t(e.data)},error:e=>{n(e)}})),n=await t;return n},en=e=>(0,p.a)(["saint",e],()=>er(e)),er=async e=>{let t=await et("https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/".concat(e,"/IP/saint_score_web.csv"));return ei(t)},ei=e=>{let t=e[0].map(e=>e.trim()||"id"),n=e.slice(1).map(e=>({id:parseInt(e[0]),bait:e[1],prey:e[2],saintScore:parseFloat(e[3]),log2FC:parseFloat(e[4])}));return{header:t,rows:n}},el=e=>{let{status:t,data:n}=en(e),[r,l]=(0,i.useState)("0.7"),[a,o]=(0,i.useState)("");function s(){let e=X(r),t=X(a);return n.rows.map(n=>n.saintScore>=e&&n.log2FC>=t)}return{status:t,data:n,filter:function(){let e=s();return{header:n.header,rows:n.rows.filter((t,n)=>e[n])}},getFilterMask:s,minSaintScore:r,setMinSaintScore:l,minLog2FC:a,setMinLog2FC:o}},ea=e=>{let{pulseData:t,protein:n}=e,{rows:i,columns:a}=function(e){let{header:t,rows:n}=e,r=t.map(e=>({field:e.replace("("," ").replace(")"," ").replace("-"," ").split(" ").map((e,t)=>0===t?e.toLowerCase():S(e)).join(""),headerName:S(e),type:["log2(Fold change)","P-value","id"].includes(e)?"number":"string",headerClassName:"grid-header",width:"id"===e?70:140})),i=n.map(e=>({id:e.id.toString(),geneName:e.geneName,log2FoldChange:e.log2FC.toFixed(3),pValue:e.pValue.toExponential(2)}));return{rows:i,columns:r}}(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{sx:{height:400,width:600,"& .grid-header":{borderBottom:"1px solid grey"}},children:(0,r.jsx)(y._,{rowHeight:25,disableColumnMenu:!0,rows:i,columns:a})}),(0,r.jsx)(w.Z,{onClick:()=>C("pulse_".concat(n,".csv"),F(i,a)),children:"Export"})]})};var eo=n(2763);let es=e=>({name:e.geneName,x:e.log2FC,y:e.log10pVal,z:1}),ed=e=>{let{pulseData:t,filterMask:n}=e,i=t.rows,l=[],a=[];return i.length!==n.length?(console.error("data and filterMask length mismatch"),null):(i.forEach((e,t)=>{n[t]?l.push(es(e)):a.push(es(e))}),(0,r.jsxs)(Z.G,{width:600,height:450,margin:{top:50,right:20,bottom:20,left:10},children:[(0,r.jsx)(L.b,{name:"Other",data:l,fill:I}),(0,r.jsx)(L.b,{name:"filtered",data:a,fill:K}),(0,r.jsx)(eo.e,{dataKey:"name"}),(0,r.jsx)(M.K,{label:{value:"log2FC",position:"bottom",textAnchor:"middle"},dataKey:"x",domain:[e=>Math.floor(e),e=>Math.ceil(e)],type:"number",name:"log2FC"}),(0,r.jsx)(A.B,{label:{value:"-log10pvalue",angle:-90,position:"insideLeft",textAnchor:"middle"},domain:[e=>Math.floor(e),e=>Math.ceil(e)],dataKey:"y",name:"-log10pvalue"}),(0,r.jsx)(_.d,{dataKey:"z",range:[0,30]}),(0,r.jsx)(D.u,{content:(0,r.jsx)(P,{}),cursor:{strokeDasharray:"3 3"}})]}))};function ec(){let e=(0,f._)(["\n  height: 450px;\n  min-width: 600px;\n"]);return ec=function(){return e},e}function eu(){let e=(0,f._)(["\n  display: flex;\n"]);return eu=function(){return e},e}let eh=e=>{let{protein:t,pulseService:n}=e;return"loading"===n.status?(0,r.jsx)(m.Z,{}):"error"===n.status?(0,r.jsx)("div",{style:{color:"red"},children:"Failed to recover the data."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ef,{children:[(0,r.jsxs)(eg,{children:[(0,r.jsx)(ex,{minPValue:n.minPValue,setMinPValue:n.setMinPValue}),(0,r.jsx)(ep,{maxLog2FC:n.maxLog2FC,setMaxLog2FC:n.setMaxLog2FC})]}),(0,r.jsx)(ea,{pulseData:n.filter(),protein:t})]}),(0,r.jsx)(ef,{children:(0,r.jsx)(ed,{pulseData:n.data,filterMask:n.getFilterMask()})})]})},ex=e=>{let{minPValue:t,setMinPValue:n}=e;return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(v.Z,{children:"Minimum P-value"}),(0,r.jsx)(j.Z,{sx:{width:"200px"},value:t,onChange:e=>n(e.target.value),error:!O(t)&&""!==t})]})},ep=e=>{let{maxLog2FC:t,setMaxLog2FC:n}=e;return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(v.Z,{children:"Maximum log2 fold change"}),(0,r.jsx)(j.Z,{sx:{width:"250px"},value:t,onChange:e=>n(e.target.value),error:!O(t)&&""!==t})]})},ef=g.Z.div(ec()),eg=g.Z.div(eu()),em=e=>(0,p.a)(["pulse",e],()=>ej(e)),ej=async e=>{let t=await et("https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/".concat(e,"/PULSE/volcano_plot_web.csv"));return ev(t)},ev=e=>{let t=e[0].map(e=>e.trim()||"id"),n=e.slice(1).map(e=>({id:parseInt(e[0]),geneName:e[1],log2FC:parseFloat(e[2]),pValue:parseFloat(e[3]),log10pVal:-1*Math.log10(parseFloat(e[3]))}));return{header:t,rows:n}},eb=e=>{let{status:t,data:n}=em(e),[r,l]=(0,i.useState)("3"),[a,o]=(0,i.useState)("-1");function s(){let e=X(r),t=X(a);return n.rows.map(n=>n.log10pVal>=e&&n.log2FC<=t)}return{status:t,data:n,filter:function(){let e=s();return{header:n.header,rows:n.rows.filter((t,n)=>e[n])}},getFilterMask:s,minPValue:r,setMinPValue:l,maxLog2FC:a,setMaxLog2FC:o}};var ew=n(8462),ey=n(891),eC=n(9334);function eF(){let e=(0,f._)(["\n  max-height: 200px;\n  min-width: 70px;\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  padding: 0;\n  .MuiListItem-root {\n    padding: 0;\n  }\n  .MuiListItemText-root {\n    margin: 0;\n  }\n  background-color: white;\n  border: 1px solid black;\n"]);return eF=function(){return e},e}function eS(){let e=(0,f._)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  diplay: ",";\n"]);return eS=function(){return e},e}function ek(){let e=(0,f._)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n"]);return ek=function(){return e},e}let eZ=(0,g.Z)(ew.Z)(eF()),eM=g.Z.div(eS(),e=>{let{top:t}=e;return t},e=>{let{left:t}=e;return t},e=>{let{hidden:t}=e;return t?"none":"block"}),eA=e=>{let{pos:t,list:n,hidden:i}=e;return(0,r.jsx)(eM,{hidden:i,top:t.top,left:t.left,children:(0,r.jsx)(eZ,{dense:!0,children:n.map(e=>(0,r.jsx)(ey.ZP,{children:(0,r.jsx)(eC.Z,{primary:e})},e))})})},e_=e=>{let{saintService:t,pulseService:n}=e;if("loading"===t.status||"loading"===n.status||"error"===t.status||"error"===n.status)return null;let i=t.filter(),l=n.filter(),[a,o,s]=function(e,t){let n=new Set,r=new Set,i=new Set;for(let t of e.rows)for(let e of t.prey.split(";"))n.add(e);for(let e of t.rows)for(let t of e.geneName.split(";"))n.has(t)?(r.add(t),n.delete(t)):i.add(t);return[n,r,i]}(i,l);return(0,r.jsx)(eD,{leftSet:a,leftLabel:"Proximity Labeling",rightSet:s,rightLabel:"Pulse Silac",overlapSet:o})};function eL(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{state:e,position:{top:t,left:n}}}let eD=e=>{let{leftSet:t,leftLabel:n,rightSet:l,rightLabel:a,overlapSet:o}=e,s=(0,i.useRef)(null),d=(0,i.useRef)(null),c=(0,i.useRef)(null),[u,h]=(0,i.useState)(eL());return(0,r.jsxs)(eB,{ref:c,onClick:function(e){if(null===s.current||null===d.current)return;let t=s.current.getBoundingClientRect(),n=d.current.getBoundingClientRect(),r=c.current.getBoundingClientRect(),i=e.clientX-r.left,l=e.clientY-r.top,a={x:t.left+t.width/2,y:t.top+t.height/2},o={x:n.left+n.width/2,y:n.top+n.height/2},x=Math.sqrt(Math.pow(a.x-e.clientX,2)+Math.pow(a.y-e.clientY,2)),p=Math.sqrt(Math.pow(o.x-e.clientX,2)+Math.pow(o.y-e.clientY,2)),f=x<150,g=p<150;f&&g&&"overlap"!==u.state?h(eL("overlap",l,i)):f&&!g&&"left"!==u.state?h(eL("left",l,i)):!f&&g&&"right"!==u.state?h(eL("right",l,i)):h(eL("none",l,i))},children:[(0,r.jsxs)("svg",{height:"350",width:"450",children:[(0,r.jsx)("path",{id:"left",d:"M 150, 200 m -150, 0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0",fill:"red",fillOpacity:"0.2",ref:s}),(0,r.jsx)("path",{id:"right",d:"M 300, 200 m -150, 0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0",fill:"blue",fillOpacity:"0.2",ref:d}),(0,r.jsx)("text",{fontSize:"1.3rem",stroke:"black",strokeWidth:"0",x:"100",y:"40",textAnchor:"middle",fill:"black",children:n}),(0,r.jsx)("text",{fontSize:"1.3rem",stroke:"black",strokeWidth:"0",x:"350",y:"40",textAnchor:"middle",fill:"black",children:a}),(0,r.jsx)("text",{fontSize:"1.4rem",stroke:"black",strokeWidth:"0",x:"100",y:"200",textAnchor:"middle",fill:"black",children:t.size}),(0,r.jsx)("text",{fontSize:"1.4rem",stroke:"black",strokeWidth:"0",x:"350",y:"200",textAnchor:"middle",fill:"black",children:l.size}),(0,r.jsx)("text",{fontSize:"1.4rem",stroke:"black",strokeWidth:"0",x:"225",y:"200",textAnchor:"middle",fill:"black",children:o.size})]}),(0,r.jsx)(eA,{pos:u.position,hidden:"left"!=u.state||0==t.size,list:Array.from(t)}),(0,r.jsx)(eA,{pos:u.position,hidden:"overlap"!=u.state||0==o.size,list:Array.from(o)}),(0,r.jsx)(eA,{pos:u.position,hidden:"right"!=u.state||0==l.size,list:Array.from(l)})]})},eB=g.Z.div(ek()),eN=e=>{let{protein:t}=e,n="https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/".concat(t,"/IF/").concat(t,"-Final.jpg"),i="https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/".concat(t,"/WB/").concat(t,".jpg");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{alt:"N/A",src:i,height:"500px"}),(0,r.jsx)("img",{alt:"N/A",src:n,height:"500px"})]})};function ez(){let e=(0,f._)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 30px;\n  gap: 20px;\n  & > div {\n    flex: 50%;\n    max-width: 600px;\n  }\n"]);return ez=function(){return e},e}let eP=g.Z.div(ez()),eE=e=>{let{section:t,protein:n}=e,i=el(n),l=eb(n);return 0===t?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(eP,{children:[(0,r.jsx)(T,{saintService:i,protein:n}),(0,r.jsx)(e_,{saintService:i,pulseService:l})]})}):1===t?(0,r.jsxs)(eP,{children:[(0,r.jsx)(eh,{pulseService:l,protein:n}),(0,r.jsx)(e_,{saintService:i,pulseService:l})]}):2===t?(0,r.jsx)(eP,{children:(0,r.jsx)(eN,{protein:n})}):(0,r.jsx)(eP,{children:"dataDisplay"})};var eR=n(1265),eV=n(2430);let eK=async()=>{let e=await fetch("https://raw.githubusercontent.com/laboFMB/DCAF-data/main/dcaf_list.txt",{method:"get"}),t=await e.text(),n=t.split(/\r?\n/).filter(e=>e);return n},eI=(0,eR.Z)({palette:{primary:{main:I},secondary:{main:I}}});var eU=()=>{let{status:e,data:t}=(0,p.a)(["proteins"],eK),[n,o]=(0,i.useState)("AMBRA1"),[s,u]=(0,i.useState)(0);return"loading"===e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.l,{}),(0,r.jsx)("span",{children:"isLoading"})]}):(0,r.jsx)(eV.Z,{theme:eI,children:(0,r.jsxs)(a.S,{children:[(0,r.jsx)(c.l,{}),(0,r.jsxs)(a.Y,{children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",borderBottom:"1px solid grey"},children:[(0,r.jsx)(x,{options:t,value:n,onChange:e=>{o(e.target.value)}}),(0,r.jsx)(d,{value:s,onChange:(e,t)=>{u(t)}})]}),(0,r.jsx)(eE,{section:s,protein:n})]})]})})}}},function(e){e.O(0,[387,371,774,888,179],function(){return e(e.s=1440)}),_N_E=e.O()}]);