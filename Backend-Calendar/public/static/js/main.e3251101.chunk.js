(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(8),o=n.n(r),s=n(22),i=n(5),l="[ui] Open Modal",u="[ui] Close Modal",j="[event] Set Active",d="[event] Clear event logout",b="[event] Add new",m="[event] Clear active event",O="[event] Event updated",p="[event] Event deleted",f="[event] Events loaded",v="[auth] Finish checking login state",h="[auth] Login",x="[auth] Logout",g={checking:!0},y=n(55),w={events:[],activeEvent:null},N={modalOpen:!1},k=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case b:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case m:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case O:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case f:return Object(i.a)(Object(i.a)({},e),{},{events:Object(y.a)(t.payload)});case d:return Object(i.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)(Object(i.a)({},e),{},{checking:!1},t.payload);case v:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case x:return{checking:!1};default:return e}}}),E=n(63),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,C=Object(s.e)(k,S(Object(s.a)(E.a))),T=n(9),D=n(35),P=n(10),I=n(12),A=n.n(I),_=n(19),L="https://mern-calendar-willy.herokuapp.com/api",R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(L,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(L,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-Type":"application/json","x-token":c},body:JSON.stringify(t)})},M=n(18),F=n.n(M),V=n(16),H=n.n(V),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:H()(e.end).toDate(),start:H()(e.start).toDate()})}))},U=function(e){return{type:b,payload:e}},B=function(){return{type:m}},X=function(e){return{type:O,payload:e}},q=function(){return{type:p}},z=function(e){return{type:f,payload:e}},K=function(){return{type:v}},Q=function(){return{type:x}},W=function(e){return{type:h,payload:e}},Y=n(14),Z=n(25),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(Y.a)(t,2),a=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(i.a)(Object(i.a)({},a),{},Object(Z.a)({},t.name,t.value)))};return[a,s,o]},ee=(n(76),function(){var e=$({lEmail:"willy@gmail.com",lPassword:"123456"}),t=Object(Y.a)(e,2),n=t[0],c=t[1],r=$({rName:"jess",rEmail:"jess@gmail.com",rPassword1:"123456",rPassword2:"123456"}),o=Object(Y.a)(r,2),s=o[0],i=o[1],l=Object(T.b)(),u=n.lEmail,j=n.lPassword,d=s.rName,b=s.rEmail,m=s.rPassword1,O=s.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),l((t=u,n=j,function(){var e=Object(_.a)(A.a.mark((function e(a){var c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth",{email:t,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(W({uid:r.uid,name:r.name}))):F.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(e){var t,n,a;e.preventDefault(),m!==O&&F.a.fire("Error","Las contrase\xf1as no coinciden","error"),l((t=d,n=b,a=m,function(){var e=Object(_.a)(A.a.mark((function e(c){var r,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{name:t,email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),c(W({uid:o.uid,name:o.name}))):F.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),te=n(54),ne=function(){var e=Object(T.c)((function(e){return e.auth})).name,t=Object(T.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(function(){var e=Object(_.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t(Q()),t({type:d});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})},ae={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=(n(77),n(78),function(e){var t=e.event,n=t.title,c=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("span",{children:[" - ",c.name]})]})}),re=n(49),oe=n.n(re),se=n(51),ie=n.n(se),le=function(){return{type:l}},ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var je=H()().minutes(0).seconds(0).add(1,"hours"),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.ui})).modalOpen,n=Object(T.c)((function(e){return e.calendar})).activeEvent,r=Object(c.useState)(je.toDate()),o=Object(Y.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(de.toDate()),d=Object(Y.a)(j,2),b=d[0],m=d[1],O=Object(c.useState)(be),p=Object(Y.a)(O,2),f=p[0],v=p[1],h=Object(c.useState)(!0),x=Object(Y.a)(h,2),g=x[0],y=x[1],w=f.notes,N=f.title,k=f.start,E=f.end;Object(c.useEffect)((function(){v(n||be)}),[n,v]);var S=function(e){var t=e.target;v(Object(i.a)(Object(i.a)({},f),{},Object(Z.a)({},t.name,t.value)))},C=function(){e({type:u}),e(B()),v(be)};return Object(a.jsx)("div",{children:Object(a.jsxs)(ie.a,{isOpen:t,onRequestClose:C,closeTimeoutMS:200,style:ue,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,c=H()(k),r=H()(E);return c.isSameOrAfter(r)?F.a.fire("Error","La fecha fin debe de ser mayor a la de inicio","error"):N.trim().length<2?y(!1):(e(n?(a=f,function(){var e=Object(_.a)(A.a.mark((function e(t){var n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(X(a)):F.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return console.log(e),function(){var t=Object(_.a)(A.a.mark((function t(n,a){var c,r,o,s,i;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,G("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:r,name:o}),n(U(e)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(f)),y(!0),void C())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(oe.a,{onChange:function(e){l(e),v(Object(i.a)(Object(i.a)({},f),{},{start:e}))},value:s,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(oe.a,{onChange:function(e){m(e),v(Object(i.a)(Object(i.a)({},f),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",value:N,onChange:S,autoComplete:"off"}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:S}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar "})]})]})]})})},Oe=function(){var e=Object(T.b)();return Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(le())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})})},pe=function(){var e=Object(T.b)();return Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t,n){var a,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,G("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(q()):F.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(a.jsx)("i",{className:"fas fa-trash",children:Object(a.jsx)("span",{children:" Borrar evento"})})})})};H.a.locale("es");var fe=Object(te.b)(H.a),ve=function(){var e=Object(T.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,r=Object(T.c)((function(e){return e.auth})).uid,o=Object(T.b)(),s=Object(c.useState)(localStorage.getItem("lastView")||"month"),i=Object(Y.a)(s,2),l=i[0],u=i[1];Object(c.useEffect)((function(){o(function(){var e=Object(_.a)(A.a.mark((function e(t){var n,a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=J(a.eventos),t(z(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(ne,{}),Object(a.jsx)(te.a,{localizer:fe,events:t,startAccessor:"start",endAccessor:"end",messages:ae,onDoubleClickEvent:function(e){o(le())},onSelectEvent:function(e){o({type:j,payload:e})},onView:function(e){u(e),localStorage.setItem("lastView",e)},view:l,onSelectSlot:function(e){o(B())},selectable:!0,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:ce}}),Object(a.jsx)(Oe,{}),n&&Object(a.jsx)(pe,{}),Object(a.jsx)(me,{})]})},he=n(38),xe=function(e){var t=e.isAuthenticated,n=e.component,c=Object(he.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(i.a)(Object(i.a)({},c),{},{component:function(e){return t?Object(a.jsx)(P.a,{to:"/"}):Object(a.jsx)(n,Object(i.a)({},e))}}))},ge=function(e){var t=e.isAuthenticated,n=e.component,c=Object(he.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(i.a)(Object(i.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(i.a)({},e)):Object(a.jsx)(P.a,{to:"/login"})}}))},ye=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.auth})).uid;return Object(c.useEffect)((function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:a.uid,name:a.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("div",{children:Object(a.jsx)(D.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(P.d,{children:[Object(a.jsx)(xe,{exact:!0,path:"/login",component:ee,isAuthenticated:!!t}),Object(a.jsx)(ge,{exact:!0,path:"/",component:ve,isAuthenticated:!!t}),Object(a.jsx)(P.a,{to:"/"})]})})})})},we=function(){return Object(a.jsx)(T.a,{store:C,children:Object(a.jsx)(ye,{})})};n(114);o.a.render(Object(a.jsx)(we,{}),document.getElementById("root"))},76:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.e3251101.chunk.js.map