(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{1440:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data",function(){return e(3795)}])},8123:function(n,t,e){"use strict";e.d(t,{l:function(){return p}});var r=e(7297),a=e(5893),i=(e(7294),e(6829)),o=e(1664),u=e.n(o),s=e(1163),c=e(6638),l=e(4682);function d(){var n=(0,r.Z)(["\n  width: 50px;\n  height: 100vh;\n  background-color: black;\n"]);return d=function(){return n},n}function h(){var n=(0,r.Z)(["\n  &:hover {\n    cursor: pointer;\n    background-color: # !important;\n    color: black !important;\n  }\n\n  ","\n"]);return h=function(){return n},n}var x=i.Z.div(d()),f=i.Z.div(h(),(function(n){return n.active&&"\nbackground-color: #04AA6D !important;\ncolor: white !important;\n  "})),p=function(){var n=(0,s.useRouter)();return(0,a.jsxs)(x,{children:[(0,a.jsx)(f,{active:"/"===n.pathname,children:(0,a.jsx)(u(),{href:"/",children:(0,a.jsx)(c.Z,{sx:{color:"white",padding:"8px"},fontSize:"large"})})}),(0,a.jsx)(f,{active:"/data"===n.pathname,children:(0,a.jsx)(u(),{href:"/data",children:(0,a.jsx)(l.Z,{sx:{color:"white",padding:"8px"},fontSize:"large"})})})]})}},3795:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return j}});var r=e(7568),a=e(4051),i=e.n(a),o=e(5893),u=e(7294),s=e(5333),c=e(1703),l=e(44),d=function(n){var t=n.value,e=n.onChange;return(0,o.jsx)(s.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(c.Z,{value:t,onChange:function(n,t){e(n,t)},children:[(0,o.jsx)(l.Z,{label:"Proximity Labeling"}),(0,o.jsx)(l.Z,{label:"Pulse Silac"}),(0,o.jsx)(l.Z,{label:"Localisation and Expression"})]})})},h=e(8123),x=e(7263),f=e(5819),p=function(n){var t=n.options,e=n.value,r=n.onChange;return(0,o.jsx)("div",{style:{padding:"5px"},children:(0,o.jsx)(x.Z,{sx:{height:"40px"},value:e,onChange:r,children:t.map((function(n){return(0,o.jsx)(f.Z,{"data-testid":"".concat("protein-select","-",n),value:n,children:n},n)}))})})},v=e(3471),g=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://raw.githubusercontent.com/laboFMB/DCAF-data/main/dcaf_list.txt",n.next=3,fetch("https://raw.githubusercontent.com/laboFMB/DCAF-data/main/dcaf_list.txt",{method:"get"});case 3:return t=n.sent,n.next=6,t.text();case 6:return e=n.sent,n.abrupt("return",e.split(/\r?\n/));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n,t=(0,v.useQuery)(["proteins"],g),e=t.status,r=t.data,a=(0,u.useState)(null!==(n=null===r||void 0===r?void 0:r[0])&&void 0!==n?n:""),i=a[0],s=a[1],c=(0,u.useState)(0),l=c[0],x=c[1];return"loading"===e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.l,{}),(0,o.jsx)("span",{children:"isLoading"})]}):(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)(h.l,{}),(0,o.jsx)(p,{options:r,value:i,onChange:function(n){s(n.target.value)}}),(0,o.jsx)(d,{value:l,onChange:function(n,t){x(t)}})]})}}},function(n){n.O(0,[177,630,774,888,179],(function(){return t=1440,n(n.s=t);var t}));var t=n.O();_N_E=t}]);