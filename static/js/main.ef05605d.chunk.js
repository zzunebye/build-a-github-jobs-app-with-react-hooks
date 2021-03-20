(this["webpackJsonpbuild-a-github-jobs-app-with-react-hooks"]=this["webpackJsonpbuild-a-github-jobs-app-with-react-hooks"]||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=t(19),s=t(7),i=t(11),m=t(12),u=t.n(m),p="make-request",b="get-data",d="error",E="update-has-next-page";function g(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case b:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case d:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case E:return Object(s.a)(Object(s.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var h=t(161),f=t(164),j=t(159),y=t(160),v=t(163),k=t(30),N=t.n(k);function O(e){var a=e.job,t=Object(n.useState)(!1),c=Object(i.a)(t,2),l=c[0],o=c[1];return r.a.createElement(f.a,{className:"mb-3"},r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(f.a.Title,null,a.title," -  ",r.a.createElement("span",{className:"text-muted font-weight-light"}," ",a.company)),r.a.createElement(f.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(j.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(j.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(N.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:"{job.company}",src:"{job.company_logo}"})),r.a.createElement(f.a.Text,null,r.a.createElement(y.a,{variant:"primary",onClick:function(){o((function(e){return!e}))}},l?"Hide Details":"View Details")),r.a.createElement(v.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(N.a,{source:a.description})))))}var x=t(165);function C(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement("div",null,r.a.createElement(x.a,null,1!==a&&r.a.createElement(x.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(x.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(x.a.Ellipsis,null),a>2&&r.a.createElement(x.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(x.a.Item,{active:!0},a),n&&r.a.createElement(x.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(x.a.Next,{onClick:function(){return c(1)}})))}var w=t(162),P=t(51);function T(e){var a=e.params,t=e.onParamChange;return r.a.createElement(w.a,{className:"mb-4"},r.a.createElement(w.a.Row,{className:"align-items-end"},r.a.createElement(w.a.Group,{as:P.a},r.a.createElement(w.a.Label,null,"Description"),r.a.createElement(w.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(w.a.Group,{as:P.a},r.a.createElement(w.a.Label,null,"Location"),r.a.createElement(w.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(w.a.Group,{as:P.a,xs:"auto",className:"ml-2"},r.a.createElement(w.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var S=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),m=Object(i.a)(l,2),f=m[0],j=m[1],y=function(e,a){var t=Object(n.useReducer)(g,{jobs:[],loading:!0}),r=Object(i.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();l({type:p}),u.a.get("/positions.json",{cancelToken:t.token,params:Object(s.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||l({type:d,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get("/positions.json",{cancelToken:n.token,params:Object(s.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:E,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||l({type:d,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,f),v=y.jobs,k=y.loading,N=y.error,x=y.hasNextPage;return r.a.createElement(h.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"GitHub Jobs"),r.a.createElement(T,{params:t,onParamChange:function(e){var a=e.target.name,n=e.target.value;j(1),c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},a,n))})),console.log(t)}}),r.a.createElement(C,{page:f,setPage:j,hasNextPage:x}),k&&r.a.createElement("h1",null,"Loading..."),N&&r.a.createElement("h1",null,"Error. Try Refreshing."),v.map((function(e){return r.a.createElement(O,{key:e.id,job:e})})),r.a.createElement(C,{page:f,setPage:j,hasNextPage:x}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))},52:function(e,a,t){e.exports=t(157)}},[[52,1,2]]]);
//# sourceMappingURL=main.ef05605d.chunk.js.map