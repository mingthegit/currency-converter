(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{248:function(e,t,a){},249:function(e,t,a){},304:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n,c=a(13),r=a(0),s=a.n(r),o=a(30),u=a.n(o),l=(a(248),a(48)),i=a.n(l),b=a(100),j=a(44),h=a(398),x=a(394),O=a(403),p=a(388),d=a(389),f=a(65),m=a(395),g=a(397),v=a(401);!function(e){e.GBP="GBP",e.EUR="EUR",e.USD="USD",e.CAD="CAD",e.CNY="CNY",e.JPY="JPY",e.RUB="RUB",e.HKD="HKD"}(n||(n={}));var y,D,Y=[{value:n.GBP,label:"Pound sterling (GBP)"},{value:n.EUR,label:"Euro (EUR)"},{value:n.USD,label:"United States Dollar (USD)"},{value:n.CAD,label:"Canadian Dollar (CAD)"},{value:n.CNY,label:"Chinese Yuan (CNY)"},{value:n.JPY,label:"Japanese Yen (JPY)"},{value:n.RUB,label:"Russian Ruble (RUB)"},{value:n.HKD,label:"Hong Kong Dollar (HKD)"}];!function(e){e.Base="base",e.Target="target"}(y||(y={})),function(e){e.FiveDays="5D",e.OneMonth="1M",e.OneYear="1Y"}(D||(D={}));a(249);var C={className:"CurrencySelector",showSearch:!0,options:Y,placeholder:"Select...",filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0}},R=function(e){var t=e.formValues,a=e.setFormValues,n=e.exchangeRate,r=function(e,n){var c,r,s=t.base,o=t.target;e===y.Base?(c=n,r=n===o?s:o):(r=n,c=n===s?o:s),a(Object(f.a)(Object(f.a)({},t),{},{base:c,target:r}))},s=t.base,o=t.target,u=t.amount,l=u||1,i=n?(l*n).toFixed(2):"";return Object(c.jsxs)(m.a,{size:"large",layout:"vertical",className:"CurrencyForm",children:[Object(c.jsxs)(p.a,{gutter:24,children:[Object(c.jsx)(d.a,{xs:24,children:Object(c.jsx)(m.a.Item,{label:"From",children:Object(c.jsx)(g.a,Object(f.a)(Object(f.a)({},C),{},{value:t.base,onSelect:function(e){r(y.Base,e)}}))})}),Object(c.jsx)(d.a,{xs:24,children:Object(c.jsx)(m.a.Item,{label:"To",children:Object(c.jsx)(g.a,Object(f.a)(Object(f.a)({},C),{},{value:t.target,onSelect:function(e){r(y.Target,e)}}))})}),Object(c.jsx)(d.a,{xs:24,children:Object(c.jsx)(m.a.Item,{label:"Amount",children:Object(c.jsx)(v.a,{className:"AmountInput",placeholder:"In Base Currency",min:0,value:u,onChange:function(e){e&&a(Object(f.a)(Object(f.a)({},t),{},{amount:e}))}})})})]}),Object(c.jsx)(p.a,{children:Object(c.jsx)(d.a,{span:24,children:n&&Object(c.jsxs)("div",{className:"ResultBox",children:["".concat(l," ").concat(s," equals "),Object(c.jsx)("strong",{children:"".concat(i," ").concat(o)})]})})})]})},k=a(400),S=a(402),w=a(396),B=a(393),N=a(229),U=a(230),P=a(148),E=a(236),F=(a(304),function(e){var t=e.graphData,a=e.dateRange,n=e.setDateRange;return Object(c.jsxs)(p.a,{justify:"center",className:"HistoryGraph",children:[Object(c.jsx)(d.a,{span:24,children:Object(c.jsx)(x.a.Paragraph,{className:"Title",children:"Exchange History"})}),Object(c.jsx)(d.a,{span:24,className:"RangeSelector",children:Object(c.jsx)(O.b,{children:Object.values(D).map((function(e){return Object(c.jsx)(k.a,{type:e===a?"primary":"default",onClick:function(){return function(e){n(e)}(e)},children:e},e)}))})}),Object(c.jsx)(d.a,{span:24,children:Object(c.jsx)(S.a,{children:Object(c.jsxs)(w.a,{width:600,height:300,data:t,margin:{top:0,right:0,left:0,bottom:0},children:[Object(c.jsx)(B.a,{strokeDasharray:"3 3"}),Object(c.jsx)(N.a,{dataKey:"date"}),Object(c.jsx)(U.a,{padding:{top:64}}),Object(c.jsx)(P.a,{}),Object(c.jsx)(E.a,{type:"monotone",dataKey:"rate",stroke:"#82ca9d",fill:"#82ca9d"})]})})})]})}),M=a(118),H=a.n(M),T="https://api.exchangeratesapi.io",A={fetchExchangeRate:function(){var e=Object(b.a)(i.a.mark((function e(t){var a,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.base,n=t.target,e.prev=1,e.next=4,fetch("".concat(T,"/latest?base=").concat(a,"&symbols=").concat(n));case 4:return c=e.sent,e.next=7,c.json();case 7:if(r=e.sent,!n){e.next=12;break}return e.abrupt("return",r.rates[n]);case 12:return e.abrupt("return");case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),fetchHistoryData:function(){var e=Object(b.a)(i.a.mark((function e(t,a){var n,c,r,s,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=t.base,c=t.target,s=H()().format("YYYY-MM-DD"),e.t0=a,e.next=e.t0===D.FiveDays?6:e.t0===D.OneYear?8:10;break;case 6:return r=H()().subtract(5,"day").format("YYYY-MM-DD"),e.abrupt("break",11);case 8:return r=H()().subtract(1,"year").format("YYYY-MM-DD"),e.abrupt("break",11);case 10:r=H()().subtract(1,"month").format("YYYY-MM-DD");case 11:return e.next=13,fetch("".concat(T,"/history?start_at=").concat(r,"&end_at=").concat(s,"&base=").concat(n,"&symbols=").concat(c));case 13:return o=e.sent,e.next=16,o.json();case 16:return u=e.sent,l=Object.keys(u.rates).sort().map((function(e){return{date:e,rate:u.rates[e][c]}})),e.abrupt("return",l);case 21:throw e.prev=21,e.t1=e.catch(0),e.t1;case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t,a){return e.apply(this,arguments)}}()},I=(a(384),h.a.Header),J=h.a.Content,K=h.a.Footer,G=x.a.Title,L=x.a.Text,V=function(){var e=Object(r.useState)({base:n.GBP,target:n.EUR,amount:void 0}),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(r.useState)(),u=Object(j.a)(o,2),l=u[0],x=u[1],f=Object(r.useState)(D.OneMonth),m=Object(j.a)(f,2),g=m[0],v=m[1],y=Object(r.useState)([]),Y=Object(j.a)(y,2),C=Y[0],k=Y[1];return Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.fetchExchangeRate(t);case 3:a=e.sent,x(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(a)}),[a.base,a.target]),Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=k,e.next=4,A.fetchHistoryData(t,a);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(t,a){e.apply(this,arguments)}(a,g)}),[a.base,a.target,g]),Object(c.jsxs)(h.a,{className:"AppLayout",children:[Object(c.jsx)(I,{className:"Header",children:Object(c.jsx)(G,{children:"Currency Converter"})}),Object(c.jsxs)(J,{className:"Content",children:[Object(c.jsx)(O.b,{size:"large"}),Object(c.jsxs)(p.a,{justify:"center",gutter:24,children:[Object(c.jsx)(d.a,{xs:22,sm:16,md:8,xl:5,className:"Column",children:Object(c.jsx)(R,{formValues:a,setFormValues:s,exchangeRate:l})}),Object(c.jsx)(d.a,{xs:22,sm:16,md:10,xl:8,className:"Column",children:Object(c.jsx)(F,{graphData:C,dateRange:g,setDateRange:v})})]})]}),Object(c.jsx)(K,{children:Object(c.jsx)(L,{children:"Data provided by https://exchangeratesapi.io"})})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,404)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),z()}},[[385,1,2]]]);
//# sourceMappingURL=main.bc50dc93.chunk.js.map