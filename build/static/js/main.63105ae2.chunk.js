(this.webpackJsonptwit=this.webpackJsonptwit||[]).push([[0],{28:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c.n(r),n=c(29),a=c.n(n),i=c(5),o=c(25),d=c(6),l=c(8),j=c.n(l),b=c(15),u=c(19);c(36),c(51);u.a.apps.length?u.a.app():u.a.initializeApp({apiKey:"AIzaSyCrOCesdnW3CHzx882crvCcqbOLQraEQqo",authDomain:"daegeon-afe27.firebaseapp.com",projectId:"daegeon-afe27",storageBucket:"daegeon-afe27.appspot.com",messagingSenderId:"431730133479",appId:"1:431730133479:web:9048d58080a4cce9631542"});var O=u.a.auth(),x=u.a.firestore(),p=(c(39),c(1)),h=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],s=(t[1],Object(r.useState)("")),n=Object(i.a)(s,2),a=(n[0],n[1],Object(r.useState)(!0)),o=Object(i.a)(a,2),d=o[0],l=o[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),u=(b[0],b[1],function(){return l((function(e){return!e}))}),O=function(){if(!d){var e=document.login_form,t={"tgim4253@pess.cnehs.kr":{code:"1234"},"cloudmc@pess.cnehs.kr":{code:"1234"},"tgim3370@pess.cnehs.kr":{code:"1234"},"seojin0122@pess.cnehs.kr":{code:"1234"},"insa5557@pess.cnehs.kr":{code:"1234"}},r=function(e){if(""==e.password.value)return document.getElementById("alert_password").innerText="Please enter password.",!1;var t=e.password.value,c=t.search(/[0-9]/g),r=t.search(/[a-z]/gi),s=t.search(/[`~!@@#$%^&*|\u20a9\u20a9\u20a9'\u20a9";:\u20a9/?]/gi);if(t.length<6)return document.getElementById("alert_password").innerText="Password must be at least 6 characters.",!1;if(-1!=t.search(/\s/))return document.getElementById("alert_password").innerText="Please enter your password without spaces.",!1;if(c<0&&r<0&&s<0)return document.getElementById("alert_password").innerText="Password is not valid.",!1;return!0}(e),s=!!t[e.email.value];console.log(s);var n=e.confirm_code.value===(t[e.email.value]?t[e.email.value].code:""),a=function(e){if(""==e.password2.value)return document.getElementById("alert_password2").innerText="Password2 is required.",!1;if(e.password.value!==e.password2.value)return document.getElementById("alert_password2").innerText="Password and password2 is not match.",e.password.style.border="2px solid",e.password.style.borderColor="#FF0000",document.getElementById("alert_password").style.color="#FF0000",!1;return!0}(e);return console.log(void 0!=t[c]?t[c].code:""),s?(document.getElementById("alert_email").innerText="",e.email.style.border="2px solid",e.email.style.borderColor="#00D000"):(e.email.style.border="2px solid",e.email.style.borderColor="#FF0000",document.getElementById("alert_email").style.color="#FF0000"),r?(document.getElementById("alert_password").innerText="",e.password.style.border="2px solid",e.password.style.borderColor="#00D000"):(e.password.style.border="2px solid",e.password.style.borderColor="#FF0000",document.getElementById("alert_password").style.color="#FF0000"),n?(document.getElementById("alert_code").innerText="",e.confirm_code.style.border="2px solid",e.confirm_code.style.borderColor="#00D000"):(e.confirm_code.style.border="2px solid",e.confirm_code.style.borderColor="#FF0000",document.getElementById("alert_code").style.color="#FF0000"),a?(document.getElementById("alert_password2").innerText="",e.password2.style.border="2px solid",e.password2.style.borderColor="#00D000"):(e.password2.style.border="2px solid",e.password2.style.borderColor="#FF0000",document.getElementById("alert_password2").style.color="#FF0000"),s&&r&&a&&n}};return Object(p.jsx)(p.Fragment,{children:d?Object(p.jsx)(g,{resister:u,checkLogIn:O}):Object(p.jsx)(m,{resister:u,checkLogIn:O})})},m=function(e){var t=e.resister,c=e.checkLogIn,r=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,s,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=document.login_form,s=r.email.value,n=r.password.value,!1,!c()){e.next=16;break}return e.prev=6,e.next=9,O.createUserWithEmailAndPassword(s,n);case 9:a=e.sent,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(6),!0,console.log(e.t0.message);case 16:if(!a){e.next=19;break}return e.next=19,x.collection("users").doc(a.user.uid+"").set({createAt:"".concat(Date.now()),name:"\uc775\uba85",email:"".concat(s)});case 19:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{padding:" 30p"}}),Object(p.jsxs)("form",{name:"login_form",action:"/cookie",method:"get",children:[Object(p.jsx)("img",{src:"/image/dghs.png",alt:"dghs",class:"dghs_logo",width:"200"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"confirm_code",placeholder:"\uc778\uc99d \ucf54\ub4dc",className:"re-form_input"})}),Object(p.jsx)("div",{className:"form_text_alert_padding",children:Object(p.jsx)("div",{id:"alert_code",className:"form_text_alert"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"email",placeholder:"\uc544\uc774\ub514",className:"re-form_input"})}),Object(p.jsx)("div",{className:"form_text_alert_padding",children:Object(p.jsx)("div",{id:"alert_email",className:"form_text_alert"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",className:"re-form_input"})}),Object(p.jsx)("div",{className:"form_text_alert_padding",children:Object(p.jsx)("div",{id:"alert_password",className:"form_text_alert"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"password",name:"password2",placeholder:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc785\ub825",className:"re-form_input"})}),Object(p.jsx)("div",{className:"form_text_alert_padding",children:Object(p.jsx)("div",{id:"alert_password2",className:"form_text_alert"})})]}),Object(p.jsx)("div",{style:{height:"10px"}}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",className:"form_submitregister_button",onClick:r,children:"\ud68c\uc6d0\uac00\uc785"})}),Object(p.jsx)("div",{style:{height:"10px"}}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",className:"form_register_button",onClick:t,children:"\ub85c\uadf8\uc778"})})]})]})},g=function(e){var t=e.resister,c=(e.checkLogIn,Object(r.useState)("")),s=Object(i.a)(c,2),n=s[0],a=s[1],o=Object(r.useState)(""),d=Object(i.a)(o,2),l=d[0],u=d[1],x=Object(r.useState)(""),h=Object(i.a)(x,2),m=(h[0],h[1]),g=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.signInWithEmailAndPassword(n,l);case 4:e.sent,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message),m(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,c=t.name,r=t.value;"email"===c?a(r):"password"===c&&u(r)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{padding:"70px"}}),Object(p.jsxs)("form",{name:"login_form",submit:g,children:[Object(p.jsx)("img",{src:"/image/dghs.png",alt:"dghs",class:"dghs_logo",width:"200"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"email",value:n,placeholder:"\uc544\uc774\ub514",className:"form_input",onChange:f})}),Object(p.jsx)("div",{className:"form_text_alert_paddings",children:Object(p.jsx)("div",{id:"alert_email",className:"form_text_alert"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"password",name:"password",value:l,placeholder:"\ube44\ubc00\ubc88\ud638",className:"form_input",onChange:f})}),Object(p.jsx)("div",{className:"form_text_alert_padding",children:Object(p.jsx)("div",{id:"alert_password",className:"form_text_alert"})})]}),Object(p.jsx)("div",{style:{height:"10px"}}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",className:"form_submit_button",onClick:g,children:"\ub85c\uadf8\uc778"})}),Object(p.jsx)("div",{style:{height:"10px"}}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",className:"form_register_button",onClick:t,children:"\ud68c\uc6d0\uac00\uc785"})}),Object(p.jsx)("div",{style:{height:"10px"}}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",className:"form_findpasswd_button",children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"})})]})]})},f=c(16),v=c(22),w=(c(28),function(e){var t,c=e.userObj,s=e.toggleType,n=e.editDoc,a=Object(r.useState)(""),o=Object(i.a)(a,2),d=o[0],l=o[1],u=Object(r.useState)(""),O=Object(i.a)(u,2),h=O[0],m=O[1];Object(r.useEffect)(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),n&&(l(n.title),m(n.body));case 2:case"end":return e.stop()}}),e)}))),[n]);var g=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,a,i,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d.replace(/(\s*)/g,"").length<2)){e.next=3;break}return alert("\uc81c\ubaa9\uc744 2\uae00\uc790 \uc774\uc0c1\uc73c\ub85c \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 3:if(!(h.replace(/(\s*)/g,"").length<1)){e.next=6;break}return alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 6:if(t.preventDefault(),!n){e.next=13;break}return r=new Date,e.next=11,x.collection("documents").doc(n.id).update({date:"".concat(r.getFullYear(),"\ub144 ").concat(r.getMonth(),"\uc6d4 ").concat(r.getDate(),"\uc77c"),body:h,title:d});case 11:return s("view"),e.abrupt("return");case 13:return e.next=15,x.collection("inform").doc("page").get().then(function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.data()),void 0!==t.data().number){e.next=6;break}return c=Object(v.a)({number:1},t.data()),e.next=5,x.collection("inform").doc("page").set(c);case 5:return e.abrupt("return",1);case 6:return e.next=8,x.collection("inform").doc("page").update({number:"".concat(parseInt(t.data().number)+1)});case 8:return e.abrupt("return",parseInt(t.data().number)+1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:return a=e.sent,console.log(a),i=new Date,e.next=20,x.collection("documents").add({writerId:c.uid,writer:"\uc775\uba85",date:"".concat(i.getFullYear(),"\ub144 ").concat(i.getMonth(),"\uc6d4 ").concat(i.getDate(),"\uc77c"),number:a,body:h,title:d});case 20:return o=e.sent,e.next=23,x.collection("inform").doc("page").get().then((function(e){return e.data().articles}));case 23:return(l=e.sent).unshift({id:o.id,title:d,number:a,date:"".concat(i.getFullYear(),"\ub144 ").concat(i.getMonth(),"\uc6d4 ").concat(i.getDate(),"\uc77c")}),console.log(l),e.next=28,x.collection("inform").doc("page").update({articles:l});case 28:s("view");case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{class:"board_wrap",children:[Object(p.jsx)("div",{class:"board_title",children:Object(p.jsx)("strong",{children:"test"})}),Object(p.jsxs)("div",{class:"board_write_wrap",children:[Object(p.jsx)("div",{class:"board_write",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{class:"title",children:Object(p.jsxs)("dl",{children:[Object(p.jsx)("dt",{children:"\uc81c\ubaa9"}),Object(p.jsx)("dd",{children:Object(p.jsx)("input",{value:d,onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"\uc81c\ubaa9\uc785\ub825"})})]})}),Object(p.jsx)("div",{class:"cont",children:Object(p.jsx)("textarea",{value:h,onChange:function(e){var t=e.target.value;m(t)},type:"text",placeholder:"\ub0b4\uc6a9",required:!0})})]})}),Object(p.jsxs)("div",{class:"bt_wrap",children:[Object(p.jsx)("a",(t={class:"emphasize",onClick:g},Object(f.a)(t,"class","on"),Object(f.a)(t,"children","\ub4f1\ub85d"),t)),Object(p.jsx)("a",{href:"main.html",children:"\ucde8\uc18c"})]})]})]})}),_=(c(41),function(e){var t,c=e.userObj,s=e.toggleType,n=Object(r.useState)(1),a=Object(i.a)(n,2),o=a[0],d=(a[1],Object(r.useState)([])),l=Object(i.a)(d,2),u=l[0],O=l[1],h=Object(r.useState)("board"),m=Object(i.a)(h,2),g=m[0],_=m[1],k=Object(r.useState)(""),F=Object(i.a)(k,2),I=F[0],C=F[1],S=Object(r.useState)(""),E=Object(i.a)(S,2),N=E[0],B=E[1],D=Object(r.useState)(!0),T=Object(i.a)(D,2),z=T[0],L=T[1];Object(r.useEffect)(Object(b.a)(j.a.mark((function e(){var t,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,x.collection("inform").doc("page").get().then((function(e){return e.data().articles}));case 3:for(t=e.sent,c=[],r=0;r<t.length;r++)""!=t[r]&&void 0!=t[r]&&c.push(t[r]);console.log(c),O(c),L(!1);case 9:case"end":return e.stop()}}),e)}))),[o]),Object(r.useEffect)(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=I&&_("view");case 1:case"end":return e.stop()}}),e)}))),[I]);return Object(p.jsx)(p.Fragment,{children:z?Object(p.jsx)("h1",{children:"loading...."}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{children:{view:Object(p.jsx)(y,{userObj:c,doc:I,close:function(e){return _(e)},onEdit:function(e,t){_("edit"),B(Object(v.a)({id:e},t))}}),edit:Object(p.jsx)(w,{userObj:c,editDoc:N,toggleType:function(e){_("view"),C("")}}),board:Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{class:"board_wrap",children:[Object(p.jsx)("div",{class:"board_title",children:Object(p.jsx)("strong",{children:"\ud14c\uc2a4\ud2b8\ud14c\uc2a4\ud2b8"})}),Object(p.jsxs)("div",{class:"board_list_wrap",children:[Object(p.jsxs)("div",{class:"board_list",children:[Object(p.jsxs)("div",{class:"top",children:[Object(p.jsx)("div",{class:"num",children:"\ubc88\ud638"}),Object(p.jsx)("div",{class:"title",children:"\uc81c\ubaa9"}),Object(p.jsx)("div",{class:"writer",children:"\uae00\uc4f4\uc774"}),Object(p.jsx)("div",{class:"date",children:"\uc791\uc131\uc77c"}),Object(p.jsx)("div",{class:"count",children:"\uc870\ud68c"})]}),u.map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{class:"num",children:e.number}),Object(p.jsx)("div",{class:"title",children:Object(p.jsx)("a",{onClick:function(){!function(e){e===I&&_("view"),C(e)}(e)},children:e.title})}),Object(p.jsx)("div",{class:"writer",children:"\uc775\uba85"}),Object(p.jsx)("div",{class:"date",children:e.date}),Object(p.jsx)("div",{class:"count",children:"1"})]},t)}))]}),Object(p.jsx)("div",{class:"bt_wrap",children:Object(p.jsx)("a",(t={class:"emphasize",onClick:function(){return s("write")}},Object(f.a)(t,"class","on"),Object(f.a)(t,"children","\ub4f1\ub85d"),t))})]})]})})}[g]})})})}),y=function(e){var t,c=e.userObj,s=e.doc,n=e.onEdit,a=e.close,o=Object(r.useState)(),d=Object(i.a)(o,2),l=d[0],u=d[1],O=Object(r.useState)(!0),h=Object(i.a)(O,2),m=h[0],g=h[1],v=Object(r.useState)(!1),w=Object(i.a)(v,2),_=w[0],y=w[1];return Object(r.useEffect)(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,x.collection("documents").doc(s.id).get().then((function(e){return e.data()}));case 3:t=e.sent,u(t),g(!1),console.log(s),t.writerId===c.uid&&y(!0),console.log(s.writerId,c.uid);case 9:case"end":return e.stop()}}),e)}))),[s]),Object(p.jsx)(p.Fragment,{children:m?Object(p.jsx)("h3",{children:"Loading..."}):Object(p.jsxs)("div",{class:"board_wrap",children:[Object(p.jsx)("div",{class:"board_title",children:Object(p.jsx)("strong",{children:"test"})}),Object(p.jsxs)("div",{class:"board_view_wrap",children:[Object(p.jsxs)("div",{class:"board_view",children:[Object(p.jsx)("div",{class:"title",children:l.title}),Object(p.jsxs)("div",{class:"info",children:[Object(p.jsxs)("dl",{children:[Object(p.jsx)("dt",{children:"\ubc88\ud638"}),Object(p.jsx)("dd",{children:l.number})]}),Object(p.jsxs)("dl",{children:[Object(p.jsx)("dt",{children:"\uae00\uc4f4\uc774"}),Object(p.jsx)("dd",{children:l.writer})]}),Object(p.jsxs)("dl",{children:[Object(p.jsx)("dt",{children:"\uc791\uc131\uc77c"}),Object(p.jsx)("dd",{children:l.data})]}),Object(p.jsxs)("dl",{children:[Object(p.jsx)("dt",{children:"\uc870\ud68c"}),Object(p.jsx)("dd",{children:"33"})]})]}),Object(p.jsx)("div",{class:"cont",children:l.body})]}),Object(p.jsxs)("div",{class:"bt_wrap",children:[Object(p.jsx)("a",(t={class:"emphasize",onClick:function(){return a("board")}},Object(f.a)(t,"class","on"),Object(f.a)(t,"children","\ubaa9\ub85d"),t)),_&&Object(p.jsx)("a",{onClick:function(){return n(s.id,l)},children:"\uc218\uc815"})]})]})]})})},k=(c(42),function(e){var t=e.userObj,c=Object(r.useState)("view"),s=Object(i.a)(c,2),n=s[0],a=s[1],o=function(e){return a(e)};return Object(p.jsx)(p.Fragment,{children:{view:Object(p.jsx)(_,{userObj:t,toggleType:o}),write:Object(p.jsx)(w,{userObj:t,toggleType:o})}[n]})}),F=function(e){var t=e.isLoggedIn,c=e.userObj,s=Object(r.useState)(""),n=Object(i.a)(s,2);n[0],n[1];return Object(p.jsx)(o.a,{children:Object(p.jsx)(d.d,{children:t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{from:"/login",to:"/home"}),Object(p.jsx)(d.b,{exact:!0,path:"/home",children:Object(p.jsx)(k,{userObj:c})})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/login",children:Object(p.jsx)(h,{})}),Object(p.jsx)(d.a,{from:"*",to:"/login"})]})})})};var I=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(!1),a=Object(i.a)(n,2),o=a[0],d=a[1],l=Object(r.useState)(null),j=Object(i.a)(l,2),b=j[0],u=j[1];return Object(r.useEffect)((function(){O.onAuthStateChanged((function(e){console.log(e),e?(d(!0),u(e)):d(!1),s(!0)}))}),[]),Object(p.jsx)(p.Fragment,{children:c?Object(p.jsx)(F,{isLoggedIn:o,userObj:b}):"Initializing..."})};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.63105ae2.chunk.js.map