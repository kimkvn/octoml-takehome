(this["webpackJsonpoctoml-takehome"]=this["webpackJsonpoctoml-takehome"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(11),s=n.n(i),l=(n(108),n(42)),o=n(14),d=(n(109),n(18)),j=n(43),u=n.n(j),b=n(68),h=n(7),O=n(157),p=n(160),m=n(124),x=n(161),f=n(165),g=n(177),v=n(166),w=n(84),C=n.n(w),y=n(2),S=Object(O.a)((function(){return{targetsHeader:{display:"flex",justifyContent:"space-between"},listItemDropdown:{width:"100%"}}})),k=function(e){var t,n,a,r,i,s,l=e.targetData,o=e.allTargets,d=e.unavailableInstances,j=e.handleUpdateTarget,u=e.deleteItem,b=e.disableDelete,h=l.id,O=l.provider,w=l.instance,k=S(),I=c.a.createRef(),N=c.a.createRef(),R=function(e){return d.includes(e)};return Object(y.jsx)(m.a,{children:Object(y.jsxs)(p.a,{container:!0,spacing:1,justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(p.a,{item:!0,md:2,children:Object(y.jsx)(x.a,{variant:"outlined",ref:I,className:k.listItemDropdown,children:Object(y.jsxs)(g.a,{labelId:"provider-dropdown",id:"provider-dropdown",value:O,onChange:function(e){return j({id:h,provider:e.target.value,instance:"",cpu:0,memory:0})},children:[Object(y.jsx)(f.a,{value:"",disabled:!0,children:"Select Provider"}),Object.keys(o).map((function(e){return Object(y.jsx)(f.a,{value:e,children:e},e)}))]})})}),Object(y.jsx)(p.a,{item:!0,md:4,children:Object(y.jsx)(x.a,{variant:"outlined",ref:N,className:k.listItemDropdown,children:Object(y.jsxs)(g.a,{labelId:"instance-dropdown",id:"instance-dropdown",value:w,onChange:function(e){var t=e.target.value;j({id:h,provider:O,instance:t,cpu:o[O].instances[t].cpu,memory:o[O].instances[t].memory})},disabled:!O,children:[" ",Object(y.jsx)(f.a,{value:"",disabled:!0,children:"Select Instance"}),O?Object.keys(o[O].instances).map((function(e){return Object(y.jsx)(f.a,{value:e,disabled:R(e),children:e},e)})):Object(y.jsx)(f.a,{})]})})}),Object(y.jsx)(p.a,{item:!0,md:1,children:Object(y.jsx)("div",{className:"cpuValue",children:null!==(t=null===(n=o[O])||void 0===n||null===(a=n.instances[w])||void 0===a?void 0:a.cpu)&&void 0!==t?t:"-"})}),Object(y.jsx)(p.a,{item:!0,md:1,children:Object(y.jsx)("div",{className:"memoryValue",children:null!==(r=null===(i=o[O])||void 0===i||null===(s=i.instances[w])||void 0===s?void 0:s.memory)&&void 0!==r?r:"-"})}),Object(y.jsx)(p.a,{item:!0,md:1,children:b?Object(y.jsx)(y.Fragment,{}):Object(y.jsx)(v.a,{children:Object(y.jsx)(C.a,{onClick:function(){u(h)}})})})]})})},I=n(167),N=n(164),R=Object(O.a)((function(){return{targetsHeader:{display:"flex",justifyContent:"space-between"},listHeaders:{padding:"0 14px"},targetsHeaderText:{fontSize:"12px"},listItem:{justifyContent:"space-between"}}})),T=function(e){var t=e.hardwareTargets,n=e.allInstances,a=e.updateCurrentTargets,r=R(),i=c.a.useState(!1),s=Object(h.a)(i,2),l=s[0],o=s[1],j=c.a.useState([]),u=Object(h.a)(j,2),b=u[0],O=u[1],m=c.a.useState([{id:0,provider:"",instance:"",cpu:0}]),x=Object(h.a)(m,2),f=x[0],g=x[1];c.a.useEffect((function(){C(),S()}),[f]);var w=function(e){g(e);var t=e.filter((function(e){return""!==e.instance}));a(t)},C=function(){for(var e=0;e<f.length;){if(""===f[e].instance)return void o(!1);e++}o(!0),f.length===n.length&&o(!1)},S=function(){var e=f.map((function(e){return e.instance}));O(e)},T=function(e){var t=e.id,n=e.provider,a=e.instance,r=e.cpu,c=e.memory,i=f.map((function(e){return e.id===t?{id:a,provider:n,instance:a,cpu:r,memory:c}:e}));w(i)},D=function(e){var t=f.filter((function(t){return t.id!==e}));w(t)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:r.targetsHeader,children:[Object(y.jsx)("h4",{children:"Hardware targets"}),Object(y.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){var e=[].concat(Object(d.a)(f),[{id:0,provider:"",instance:"",cpu:0}]);w(e)},disabled:!l,children:"Add"})]}),Object(y.jsx)("section",{className:r.listHeaders,children:Object(y.jsxs)(p.a,{container:!0,spacing:2,justifyContent:"space-between",children:[Object(y.jsx)(p.a,{item:!0,md:2,children:Object(y.jsx)("p",{className:r.targetsHeaderText,children:"PROVIDER"})}),Object(y.jsx)(p.a,{item:!0,md:4,children:Object(y.jsx)("p",{className:r.targetsHeaderText,children:"INSTANCE"})}),Object(y.jsx)(p.a,{item:!0,md:1,children:Object(y.jsx)("p",{className:r.targetsHeaderText,children:"VCPU"})}),Object(y.jsx)(p.a,{item:!0,md:1,children:Object(y.jsx)("p",{className:r.targetsHeaderText,children:"MEMORY (GB)"})}),Object(y.jsx)(p.a,{item:!0,md:1})]})}),Object(y.jsx)(I.a,{}),Object(y.jsx)(N.a,{children:f.map((function(e,n){return Object(y.jsx)(k,{targetData:e,allTargets:t,unavailableInstances:b,handleUpdateTarget:T,deleteItem:D,disableDelete:0===n},n)}))})]})},D=n(183),B=n(184),E=n(181),H=n(168),L=n(170),F=n(67),A=n.n(F),V=n(179),P=n(169),G=Object(O.a)((function(){return{accordionSummary:{display:"flex",flexDirection:"column"},benchmarkDropdown:{width:"100%"}}})),M=function(e){var t=e.hardwareData,n=e.updateBenchmarkOptions,a=e.confirmBenchmarkRequest,r=G(),i=c.a.useState(!1),s=Object(h.a)(i,2),l=s[0],o=s[1],d=c.a.useState(""),j=Object(h.a)(d,2),u=j[0],b=j[1],O=c.a.useState(0),m=Object(h.a)(O,2),v=m[0],w=m[1],C=c.a.useState(0),S=Object(h.a)(C,2),k=S[0],I=S[1],N=c.a.useState(!1),R=Object(h.a)(N,2),T=R[0],F=R[1],M=c.a.useState(!1),z=Object(h.a)(M,2),_=z[0],q=z[1],K=c.a.useState({}),U=Object(h.a)(K,2),J=U[0],$=U[1];c.a.useEffect((function(){W()}),[u,J,v,k]);var W=function(){n({engine:u,hardware:J,num_trials:v,runs_per_trial:k})};return Object(y.jsxs)(E.a,{children:[Object(y.jsxs)(H.a,{expandIcon:Object(y.jsx)(A.a,{}),children:[Object(y.jsx)(P.a,{control:Object(y.jsx)(V.a,{checked:l,onClick:function(e){e.stopPropagation(),o(!l),a(!l)},name:"benchmark",color:"primary"})}),Object(y.jsxs)("div",{className:r.accordionSummary,children:[Object(y.jsx)("b",{children:"Benchmark"})," ",Object(y.jsx)("p",{children:"This is some sub content to explain benchmarking"})]})]}),Object(y.jsx)(L.a,{children:Object(y.jsxs)("form",{children:[Object(y.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:1,children:[Object(y.jsx)(p.a,{item:!0,md:6,children:Object(y.jsxs)(x.a,{variant:"outlined",className:r.benchmarkDropdown,children:[Object(y.jsx)(D.a,{htmlFor:"engine-dropdown",children:"Engine"}),Object(y.jsxs)(g.a,{labelId:"engine-dropdown",id:"engine-dropdown",value:u,onChange:function(e){return b(e.target.value)},label:"Engine",children:[" ",Object(y.jsx)(f.a,{value:"onyx",children:"Onyx"}),Object(y.jsx)(f.a,{value:"tvm",children:"TVM"})]})]})}),Object(y.jsx)(p.a,{item:!0,md:6,children:Object(y.jsxs)(x.a,{variant:"outlined",className:r.benchmarkDropdown,children:[Object(y.jsx)(D.a,{htmlFor:"hardware-dropdown",children:"Hardware"}),Object(y.jsx)(g.a,{labelId:"hardware-dropdown",id:"hardware-dropdown",value:J,onChange:function(e){return $(e.target.value)},label:"Hardware",children:t.map((function(e){return Object(y.jsxs)(f.a,{value:e,children:[e.provider," - ",e.instance," - ",e.cpu," -"," ",e.memory]},e.instance)}))})]})})]}),Object(y.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:1,children:[Object(y.jsx)(p.a,{item:!0,children:Object(y.jsx)(B.a,{id:"outlined-basic",label:"Number of Trials",variant:"outlined",error:T,helperText:T?"Input must be a valid number":"",onChange:function(e){var t=e.target.value;t.match(/^[0-9]*$/)?(F(!1),w(t)):F(!0)}})}),Object(y.jsx)(p.a,{item:!0,children:Object(y.jsx)(B.a,{id:"outlined-basic",label:"Runs per Trials",variant:"outlined",error:_,helperText:_?"Input must be a valid number":"",onChange:function(e){var t=e.target.value;t.match(/^[0-9]*$/)?(q(!1),I(t)):q(!0)}})})]})]})})]})},z=Object(O.a)((function(e){return{accordionSummary:{display:"flex",flexDirection:"column"},accelerateDropdown:{width:"100%"}}})),_=function(e){var t=e.hardwareData,n=e.updateAccelerateOptions,a=e.formData,r=e.confirmAccelerateRequest,i=z(),s=c.a.useState(!1),o=Object(h.a)(s,2),d=o[0],j=o[1],u=c.a.useState(""),b=Object(h.a)(u,2),O=b[0],m=b[1],v=c.a.useState({}),w=Object(h.a)(v,2),C=w[0],S=w[1],k=c.a.useState(!1),I=Object(h.a)(k,2),N=I[0],R=I[1],T=c.a.useState(!1),F=Object(h.a)(T,2),G=F[0],M=F[1];c.a.useEffect((function(){var e=Object(l.a)(Object(l.a)({},a),{},{engine:O,hardware:C});n(e)}),[O]);return Object(y.jsxs)(E.a,{children:[Object(y.jsxs)(H.a,{expandIcon:Object(y.jsx)(A.a,{}),children:[Object(y.jsx)(P.a,{control:Object(y.jsx)(V.a,{checked:d,onClick:function(e){e.stopPropagation(),j(!d),r(!d)},name:"accelerate",color:"primary"})}),Object(y.jsxs)("div",{className:i.accordionSummary,children:[Object(y.jsx)("b",{children:"Accelerate"}),Object(y.jsxs)("p",{children:["Make your models go ",Object(y.jsx)("i",{children:"fast"})]})]})]}),Object(y.jsx)(L.a,{children:Object(y.jsxs)(p.a,{container:!0,spacing:1,children:[Object(y.jsx)(p.a,{item:!0,md:4,children:Object(y.jsxs)(x.a,{variant:"outlined",className:i.accelerateDropdown,children:[Object(y.jsx)(D.a,{htmlFor:"engine-dropdown",children:"Engine"}),Object(y.jsxs)(g.a,{labelId:"engine-dropdown",id:"engine-dropdown",value:O,onChange:function(e){var t=e.target.value.toUpperCase();R("TVM"===t),m(t)},label:"Engine",children:[" ",Object(y.jsx)(f.a,{value:"ONYX",children:"Onyx"}),Object(y.jsx)(f.a,{value:"TVM",children:"TVM"})]})]})}),N?Object(y.jsx)(p.a,{item:!0,md:4,children:Object(y.jsx)(B.a,{id:"outlined-basic",label:"Kernel Trials",variant:"outlined",error:G,helperText:G?"Input must be a valid number":"",onChange:function(e){e.target.value.match(/^[0-9]*$/)?(M(!1),function(e){var t=e.target.value,r=Object(l.a)(Object(l.a)({},a),{},{engine:{TVM:{kernel_trials:t}}});n(r)}(e)):M(!0)}})}):"",Object(y.jsx)(p.a,{item:!0,md:4,children:Object(y.jsxs)(x.a,{variant:"outlined",className:i.accelerateDropdown,children:[Object(y.jsx)(D.a,{id:"hardware-dropdown",children:"Hardware"}),Object(y.jsx)(g.a,{labelId:"hardware-dropdown",id:"hardware-dropdown",value:C,onChange:function(e){return S(e.target.value)},label:"Hardware",children:t.map((function(e){return Object(y.jsxs)(f.a,{value:e,children:[e.provider," - ",e.instance," - ",e.cpu," -"," ",e.memory]},e.instance)}))})]})})]})})]})},q=n(171),K=n(4),U=Object(O.a)((function(){return{totalRunsCard:{padding:"14px"},totalRunsHeader:{display:"flex",flexDirection:"column",alignItems:"end"},totalRunsSubHeaderText:{fontSize:"12px",fontWeight:"bold",margin:0},totalRunsValue:{margin:"4px 0 "},totalRunsItem:{padding:"4px 0"},targetInfoCore:{margin:"2px 0",fontSize:"12px"},targetRunValue:{fontWeight:"bold",margin:0},totalRunsTargetInfo:{},totalRunsGreen:{color:"#4DB396"},totalRunsButton:{width:"100%"}}})),J=function(e){var t=e.currentTargets,n=e.runBenchmark,a=e.runAcceleration,r=e.clickOctomize,c=U();return Object(y.jsxs)(q.a,{className:c.totalRunsCard,children:[Object(y.jsxs)("header",{className:c.totalRunsHeader,children:[Object(y.jsx)("p",{className:c.totalRunsSubHeaderText,children:"Total Runs: "}),Object(y.jsx)("h2",{className:Object(K.a)(c.totalRunsGreen,c.totalRunsValue),children:t.length})]}),Object(y.jsxs)("section",{children:[n?Object(y.jsx)("h4",{className:c.totalRunsGreen,children:"* Run Benchmark *"}):"",a?Object(y.jsx)("h4",{className:c.totalRunsGreen,children:"* Run Acceleration *"}):""]}),Object(y.jsx)(N.a,{children:t.map((function(e){return null!==e.instance?Object(y.jsx)(m.a,{className:c.totalRunsItem,children:Object(y.jsxs)(p.a,{container:!0,justifyContent:"space-between",children:[Object(y.jsx)(p.a,{item:!0,children:Object(y.jsxs)("div",{className:c.totalRunsTargetInfo,children:[Object(y.jsx)("b",{children:e.instance}),Object(y.jsxs)("p",{className:c.targetInfoCore,children:[e.cpu," cores"]})]})}),Object(y.jsx)(p.a,{item:!0,children:Object(y.jsx)("p",{className:Object(K.a)(c.totalRunsGreen,c.targetRunValue),children:"1"})})]})},e.id):null}))}),Object(y.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){return r()},disabled:0===t.length,className:c.totalRunsButton,children:"Octomize"})]})},$=n(176),W=n(172),X=n(173),Y="http://netheria.takehome.octoml.ai",Z=Object(O.a)((function(){return{box:{display:"flex",flexDirection:"column"},targetsListSection:{margin:"24px 0 0 0"}}})),Q={engine:"",hardware:{},num_trials:0,runs_per_trial:0},ee={engine:"",hardware:{}},te=function(){var e=Z(),t=c.a.useState(!0),n=Object(h.a)(t,2),a=n[0],r=n[1],i=c.a.useState({}),s=Object(h.a)(i,2),l=s[0],o=s[1],j=c.a.useState(null),O=Object(h.a)(j,2),m=O[0],x=O[1],f=c.a.useState([]),g=Object(h.a)(f,2),v=g[0],w=g[1],C=c.a.useState([]),S=Object(h.a)(C,2),k=S[0],I=S[1],N=c.a.useState(!1),R=Object(h.a)(N,2),D=R[0],B=R[1],E=c.a.useState(!1),H=Object(h.a)(E,2),L=H[0],F=H[1],A=c.a.useState(Q),V=Object(h.a)(A,2),P=V[0],G=V[1],z=c.a.useState(ee),K=Object(h.a)(z,2),U=K[0],te=K[1];function ne(){return ae.apply(this,arguments)}function ae(){return(ae=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Y,"/hardware"),{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function re(){return(re=Object(b.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:t=e.sent,o(t),n={},a=function(e){n[e.provider].instances[e.instance]={name:e.instance,cpu:e.cpu,memory:e.memory},w((function(t){return[].concat(Object(d.a)(t),[e.instance])}))},t.forEach((function(e){n[e.provider]||(n[e.provider]={instances:{}}),a(e)})),x(n),r(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.a.useEffect((function(){!function(){re.apply(this,arguments)}()}),[]);function ce(){return(ce=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Y,"/benchmark"),{method:"POST",body:JSON.stringify(P),headers:{"Content-Type":"application/json"},mode:"no-cors"});case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(y.jsxs)($.a,{className:e.box,children:[Object(y.jsxs)("header",{children:[Object(y.jsx)("h2",{children:"Shufflenet-v2.onnx"}),Object(y.jsx)("p",{children:"Created three days ago by Kevin Kim"})]}),Object(y.jsxs)(p.a,{container:!0,justifyContent:"center",spacing:2,children:[Object(y.jsx)(p.a,{item:!0,md:9,children:Object(y.jsxs)(q.a,{children:[Object(y.jsx)(W.a,{title:"Octomize"}),Object(y.jsxs)(X.a,{children:[Object(y.jsx)("section",{children:a?Object(y.jsx)("h1",{children:"LOADING"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(M,{hardwareData:l,updateBenchmarkOptions:function(e){return G(e)},confirmBenchmarkRequest:function(e){return B(e)}}),Object(y.jsx)(_,{formData:U,updateAccelerateOptions:function(e){return te(e)},hardwareData:l,confirmAccelerateRequest:function(e){return F(e)}})]})}),Object(y.jsx)("section",{className:e.targetsListSection,children:Object(y.jsx)("div",{className:"targetsList",children:a?Object(y.jsx)("h1",{children:"LOADING"}):Object(y.jsx)(T,{currentTargets:k,hardwareTargets:m,allInstances:v,updateCurrentTargets:function(e){return I(e)}})})})]})]})}),Object(y.jsx)(p.a,{item:!0,md:3,children:Object(y.jsx)(J,{currentTargets:k,runBenchmark:D,runAcceleration:L,clickOctomize:function(){!function(){ce.apply(this,arguments)}()}})})]})]})},ne=function(){return Object(y.jsx)("h1",{children:"BENCHMARKS PAGE"})},ae=["title","titleId"];function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,c=e.titleId,i=ce(e,ae);return r.createElement("svg",re({width:24,height:30,viewBox:"0 0 24 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,a||(a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 3.87311C8.03815 3.87311 4.82644 7.09045 4.82644 11.0592C4.82644 11.9333 4.83906 12.3 4.94499 12.7109C5.05466 13.1363 5.29196 13.6985 5.92166 14.8144C6.13573 15.1937 6.73703 15.9388 7.68317 16.9641C8.58839 17.9451 9.69818 19.0659 10.8117 20.1592C11.9228 21.2502 13.0258 22.3022 13.9141 23.1444C14.1389 23.3576 14.3527 23.5598 14.5505 23.747C15.1173 24.2832 15.5537 24.6961 15.7472 24.89C16.6204 25.7648 17.2452 26.1269 17.9835 26.1269C19.4806 26.1269 20.6942 24.9112 20.6942 23.4114C20.6942 22.8419 20.521 22.3578 20.1817 21.8882C19.6465 21.1474 19.812 20.1122 20.5515 19.576C21.291 19.0399 22.3244 19.2057 22.8596 19.9465C23.5602 20.9161 24 22.0685 24 23.4114C24 26.7401 21.3063 29.4385 17.9835 29.4385C15.8904 29.4385 14.4535 28.2774 13.4095 27.2315C13.252 27.0737 12.8762 26.718 12.336 26.207C12.1279 26.0101 11.8955 25.7901 11.6417 25.5495C10.7486 24.7028 9.62939 23.6354 8.49768 22.5242C7.36826 21.4153 6.21447 20.2511 5.25565 19.212C4.33774 18.2173 3.47454 17.2072 3.04388 16.4441C2.38411 15.2749 1.9668 14.4023 1.74423 13.539C1.52059 12.6715 1.52062 11.9037 1.52066 11.0886L1.52066 11.0592C1.52066 5.26151 6.21241 0.561523 12 0.561523C17.7876 0.561523 22.4793 5.26151 22.4793 11.0592C22.4793 13.0752 21.9104 14.9631 20.9239 16.5649C20.6234 17.0527 20.0943 17.6667 19.5777 18.2315C19.0307 18.8293 18.3912 19.4854 17.7888 20.088C17.1845 20.6926 16.6079 21.253 16.183 21.6618C15.9703 21.8664 15.795 22.0335 15.6726 22.1498C15.6114 22.208 15.5633 22.2535 15.5304 22.2846C15.5139 22.3002 15.5012 22.3122 15.4925 22.3204L15.4798 22.3324L15.479 22.3331L15.4788 22.3333C15.4788 22.3333 15.4787 22.3334 14.3471 21.1265C13.2156 19.9195 13.2155 19.9195 13.2155 19.9195L13.216 19.9191L13.2267 19.909C13.2345 19.9017 13.2462 19.8906 13.2617 19.8759C13.2928 19.8466 13.3388 19.803 13.3978 19.7469C13.516 19.6347 13.6862 19.4723 13.8934 19.2731C14.3081 18.8741 14.8684 18.3295 15.4528 17.7448C16.0392 17.1583 16.6404 16.5408 17.1406 15.994C17.6712 15.414 17.9959 15.0122 18.1105 14.826C18.7844 13.7319 19.1736 12.4436 19.1736 11.0592C19.1736 7.09045 15.9618 3.87311 12 3.87311ZM3.4485 19.576C4.18798 20.1122 4.35354 21.1474 3.81828 21.8882C3.47896 22.3578 3.30578 22.8419 3.30578 23.4114C3.30578 24.9112 4.51943 26.1269 6.01653 26.1269C6.73742 26.1269 7.42276 25.7544 8.48412 24.6912L10.8217 27.0328C9.63509 28.2215 8.12707 29.4385 6.01653 29.4385C2.69369 29.4385 0 26.7401 0 23.4114C0 22.0685 0.439815 20.9161 1.14039 19.9465C1.67565 19.2057 2.70902 19.0399 3.4485 19.576Z",fill:"#0180FF"})))}var se=r.forwardRef(ie),le=(n.p,n(69)),oe=n(12),de=n(180),je=n(87),ue=n.n(je),be=n(86),he=n.n(be),Oe=n(174),pe=n(175),me=240,xe=Object(O.a)((function(e){return{root:{display:"flex"},octoLogo:{display:"flex",justifyContent:"center",marginLeft:"-15px"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:me,width:"calc(100% - ".concat(me,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:me,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:me,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(o.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),background:"#F5F5F5"}}}));var fe=function(){var e,t,n=xe(),a=!1;return Object(y.jsx)("div",{className:n.root,children:Object(y.jsxs)(le.a,{children:[Object(y.jsx)(de.a,{variant:"permanent",className:Object(K.a)(n.drawer,(e={},Object(o.a)(e,n.drawerOpen,a),Object(o.a)(e,n.drawerClose,!0),e)),classes:{paper:Object(K.a)((t={},Object(o.a)(t,n.drawerOpen,a),Object(o.a)(t,n.drawerClose,!0),t))},children:Object(y.jsxs)(N.a,{children:[Object(y.jsx)("span",{className:n.octoLogo,children:Object(y.jsx)(se,{})}),Object(y.jsx)(le.b,{to:"/",children:Object(y.jsxs)(m.a,{button:!0,children:[Object(y.jsx)(Oe.a,{children:Object(y.jsx)(he.a,{})}),Object(y.jsx)(pe.a,{primary:"Dashboard"})]})}),Object(y.jsx)(le.b,{to:"/benchmarks",children:Object(y.jsxs)(m.a,{button:!0,children:[Object(y.jsx)(Oe.a,{children:Object(y.jsx)(ue.a,{})}),Object(y.jsx)(pe.a,{primary:"Benchmarks"})]})})]})}),Object(y.jsx)("main",{className:n.content,children:Object(y.jsxs)(oe.c,{children:[Object(y.jsx)(oe.a,{exact:!0,path:"/",children:Object(y.jsx)(te,{})}),Object(y.jsx)(oe.a,{path:"/benchmarks",children:Object(y.jsx)(ne,{})})]})})]})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(y.jsx)(fe,{}),document.getElementById("root")),ge()}},[[122,1,2]]]);
//# sourceMappingURL=main.1e68d764.chunk.js.map