(this.webpackJsonpspiral=this.webpackJsonpspiral||[]).push([[0],{42:function(e,n,t){e.exports=t.p+"static/media/PayDay.bb2d3388.jpg"},44:function(e,n,t){e.exports=t(57)},49:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),c=t.n(r),l=t(23),o=t.n(l),i=(t(49),t(17)),u=t(4),s=t(13),m=t(25);function d(){var e=Object(a.a)(["\n  border-radius: 20px;\n  padding: 10px 20px;\n  line-height: 16px;\n  height: 36px;\n  border: 1px solid ",";\n  color: ",";\n  background-color: ",";\n  transition: color 250ms, background-color 250ms;\n  &:hover {\n    background-color: ",";\n    color: white;\n  }\n"]);return d=function(){return e},e}var p=u.b.button(d(),(function(e){return e.color||"#d83275"}),(function(e){return e.color||"#d83275"}),(function(e){return e.backgroundColor||"transparent"}),(function(e){return e.color||"#d83275"}));function f(){var e=Object(a.a)([""]);return f=function(){return e},e}function g(){var e=Object(a.a)(["\n  padding: 10px 0;\n  width: 100%;\n  box-sizing: border-box;\n  height: 40px;\n  border: 0;\n  border-bottom: 1px solid ",";\n  color: ",";\n  background-color: transparent;\n  transition: border-bottom-color 250ms;\n  &:focus {\n    border-bottom-color: ",";\n  }\n  &:placeholder {\n    color: ",";\n  }\n"]);return g=function(){return e},e}var b=u.b.input.attrs((function(e){return{placeholder:e.placeholder}}))(g(),"#aaa",(function(e){return e.color||"#d83275"}),(function(e){return e.color||"#d83275"}),"#aaa"),h=Object(u.b)(b).attrs({type:"password"})(f());function v(){var e=Object(a.a)(["\n  .title {\n    font-size: 24px;\n    margin: 5px 0;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  & > * {\n    margin-top: 10px;\n    width: 100%;\n  }\n"]);return x=function(){return e},e}var E=u.b.form(x()),k=u.b.label(v());function O(e){var n=e.title,t=e.children;return c.a.createElement(k,null,c.a.createElement("div",{className:"title"},n),t)}var w=t(11),y=t(21);function j(e,n){var t=Object(w.e)(e),a=Object(w.d)();return Object(r.useEffect)((function(){if(!t){var e=JSON.parse(localStorage.getItem("user"));e&&a(Object(y.a)({type:"LOGIN_SUCCEEDED"},e))}}),n),t}function N(){var e=Object(a.a)(["\n  padding: 50px;\n  .login-wrapper {\n    margin: 0 auto;\n    max-width: 500px;\n    .loginTitle {\n      display: inline-block;\n      font-weight: bold;\n      font-size: 26px;\n      border-bottom: 2px solid ",";\n    }\n    .loginForm {\n      margin: 50px 0;\n    }\n  }\n"]);return N=function(){return e},e}var C=u.b.div(N(),"#d83275");function I(){var e=Object(r.useState)({login:"",password:""}),n=Object(m.a)(e,2),t=n[0],a=t.login,l=t.password,o=n[1],i=Object(s.g)(),u=Object(w.d)(),d=j((function(e){return e.user}));return Object(r.useEffect)((function(){d&&i.push("/home")})),c.a.createElement(C,null,c.a.createElement("div",{className:"login-wrapper"},c.a.createElement("h2",{className:"loginTitle"},"Login"),c.a.createElement(E,{className:"loginForm"},c.a.createElement(O,{title:"Login"},c.a.createElement(b,{value:a,onChange:function(e){var n=e.target.value;return o({login:n,password:l})},placeholder:"Your email address"})),c.a.createElement(O,{title:"Password"},c.a.createElement(h,{value:l,onChange:function(e){var n=e.target.value;return o({login:a,password:n})},placeholder:"Password"})),c.a.createElement(p,{onClick:function(e){e.preventDefault(),o({login:"",password:""}),u(function(e,n){return{type:"LOGIN_REQUESTED",login:e,password:n}}(a,l))}},"LOGIN"))))}var L=t(26);function S(){var e=Object(a.a)(["\n  background: center / contain no-repeat;\n  background-color: ",";\n  ",";\n  background-image: url(",");\n  width: ",";\n  height: ",";\n"]);return S=function(){return e},e}var D=u.b.div(S(),(function(e){return e.backgroundColor||"white"}),(function(e){return e.circle?"border-radius: 50%;":""}),(function(e){return e.imageUrl||""}),(function(e){return e.width||"100%"}),(function(e){return e.height||"100%"}));function G(){var e=Object(a.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n"]);return G=function(){return e},e}function z(){var e=Object(a.a)(["\n  padding: 10px;\n"]);return z=function(){return e},e}function T(){var e=Object(a.a)(["\n  padding: 0 10px;\n  text-align: ",";\n"]);return T=function(){return e},e}function U(){var e=Object(a.a)(["\n  background: center / cover no-repeat;\n  background-image: url(",");\n  height: 200px;\n"]);return U=function(){return e},e}function A(){var e=Object(a.a)(["\n  & > :not(:first-child) {\n    border-top: 1px solid ",";\n  }\n"]);return A=function(){return e},e}function P(){var e=Object(a.a)(["\n  display: flex;\n  height: 40px;\n  padding: 10px;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  "," {\n    margin-right: 20px;\n  }\n  .title {\n    font-size: 20px;\n    margin-bottom: 5px;\n  }\n  .subtitle {\n    color: ",";\n    font-weight: 100;\n  }\n  .value {\n    font-size: 26px;\n    flex: 1 0;\n    text-align: end;\n  }\n"]);return P=function(){return e},e}function J(){var e=Object(a.a)(["\n  min-width: 275px;\n  min-width: 275px;\n  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n  border-radius: 4px;\n  background-color: white;\n  overflow: hidden;\n  hr {\n    border: 0;\n    border-top: 1px solid #ccc;\n  }\n  /* & > :not(:first-child) {\n    margin-top: 10px;\n  } */\n"]);return J=function(){return e},e}var M=u.b.div(J()),F=u.b.div(P(),(function(e){return e.fontColor||"black"}),(function(e){return e.backgroundColor||"white"}),D,(function(e){return e.fontColor||"#aaa"}));function _(e){var n,t=e.title,a=e.subtitle,r=e.value,l=e.image,o=Object(L.a)(e,["title","subtitle","value","image"]);return n="string"===typeof l?c.a.createElement(D,{width:"40px",height:"40px",imageUrl:l,circle:!0}):l,c.a.createElement(F,o,n,c.a.createElement("div",null,c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"subtitle"},a)),r&&c.a.createElement("div",{className:"value"},r))}var $=u.b.div(A(),"#aaa"),q=Object(u.b)(D)(U(),(function(e){return e.image})),W=u.b.div(T(),(function(e){return e.centered?"center":"start"})),B=u.b.p(z()),H=u.b.div(G()),Q={month:"short",day:"2-digit",year:"numeric"};function R(e){var n=e.userName,t=e.className,a=new Date,r=a.getHours(),l="";return r>=0&&r<=4?l="Why aren't you sleeping?":r>4&&r<12?l="Good morning":r>=12&&r<18?l="Good Afternoon":r>18&&(l="Good Evening"),c.a.createElement("div",{className:t},l," ",n," | ",a.toLocaleString("default",Q))}function Y(e){var n=Object(r.useState)({data:null,isLoading:!0}),t=Object(m.a)(n,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){e().then((function(e){return c({data:e,isLoading:!1})}))})),a}var K=t(40),V=t(41),X=t(59),Z=[{id:Object(X.a)(),name:"Cheking",type:"Main account (...0353)",count:1500},{id:Object(X.a)(),name:"Savings",type:"Main account (...0353)",count:5e3},{id:Object(X.a)(),name:"Goodnes Points",type:"Main account (...0353)",count:500}],ee={login:"test@test.com",name:"Test User",avatar:"https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"},ne={employerName:"Facebook Inc",count:3e3};function te(e){return Promise.resolve(e).then((t=250,a=2e3,t=Math.ceil(t),a=Math.floor(a),n=Math.floor(Math.random()*(a-t+1))+t,function(e){return new Promise((function(t){setTimeout((function(){return t(e)}),n)}))}));var n,t,a}var ae=new(function(){function e(){Object(K.a)(this,e)}return Object(V.a)(e,[{key:"logIn",value:function(e,n){if("test@test.com"===e&&"test"===n)return te(ee);throw new Error("Wrong login or password")}},{key:"fetchAccounts",value:function(){return te(Z)}},{key:"fetchPayDay",value:function(){return te(ne)}}]),e}());function re(){var e=Object(a.a)(["\n  & {\n    margin: 100px auto;\n    width: 50px;\n    height: 50px;\n    position: relative;\n\n    .sk-circle {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n\n    .sk-circle:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: ",";\n      border-radius: 100%;\n      animation: "," 1.2s infinite ease-in-out both;\n    }\n    .sk-circle2 {\n      transform: rotate(30deg);\n    }\n    .sk-circle3 {\n      transform: rotate(60deg);\n    }\n    .sk-circle4 {\n      transform: rotate(90deg);\n    }\n    .sk-circle5 {\n      transform: rotate(120deg);\n    }\n    .sk-circle6 {\n      transform: rotate(150deg);\n    }\n    .sk-circle7 {\n      transform: rotate(180deg);\n    }\n    .sk-circle8 {\n      transform: rotate(210deg);\n    }\n    .sk-circle9 {\n      transform: rotate(240deg);\n    }\n    .sk-circle10 {\n      transform: rotate(270deg);\n    }\n    .sk-circle11 {\n      transform: rotate(300deg); \n    }\n    .sk-circle12 {\n      transform: rotate(330deg); \n    }\n    .sk-circle2:before {\n      animation-delay: -1.1s; \n    }\n    .sk-circle3:before {\n      animation-delay: -1s; \n    }\n    .sk-circle4:before {\n      animation-delay: -0.9s; \n    }\n    .sk-circle5:before {\n      animation-delay: -0.8s; \n    }\n    .sk-circle6:before {\n      animation-delay: -0.7s; \n    }\n    .sk-circle7:before {\n      animation-delay: -0.6s; \n    }\n    .sk-circle8:before {\n      animation-delay: -0.5s; \n    }\n    .sk-circle9:before {\n      animation-delay: -0.4s;\n    }\n    .sk-circle10:before {\n      animation-delay: -0.3s;\n    }\n    .sk-circle11:before {\n      animation-delay: -0.2s;\n    }\n    .sk-circle12:before {\n      animation-delay: -0.1s;\n    }\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(a.a)(["\n  0%, 39%, 100% { opacity: 0; }\n  40% { opacity: 1; } \n"]);return ce=function(){return e},e}var le=Object(u.c)(ce()),oe=u.b.div(re(),(function(e){return e.color||"#d83275"}),le);function ie(e){return c.a.createElement(oe,e,c.a.createElement("div",{class:"sk-circle1 sk-circle"}),c.a.createElement("div",{class:"sk-circle2 sk-circle"}),c.a.createElement("div",{class:"sk-circle3 sk-circle"}),c.a.createElement("div",{class:"sk-circle4 sk-circle"}),c.a.createElement("div",{class:"sk-circle5 sk-circle"}),c.a.createElement("div",{class:"sk-circle6 sk-circle"}),c.a.createElement("div",{class:"sk-circle7 sk-circle"}),c.a.createElement("div",{class:"sk-circle8 sk-circle"}),c.a.createElement("div",{class:"sk-circle9 sk-circle"}),c.a.createElement("div",{class:"sk-circle10 sk-circle"}),c.a.createElement("div",{class:"sk-circle11 sk-circle"}),c.a.createElement("div",{class:"sk-circle12 sk-circle"}))}var ue=t(42),se=t.n(ue);function me(){var e=Object(a.a)(["\n  color: ",";\n"]);return me=function(){return e},e}function de(){var e=Object(a.a)(["\n  font-size: 25px;\n  padding: 50px 20px 30px;\n"]);return de=function(){return e},e}function pe(){var e=Object(a.a)(["\n  .header {\n    margin-top: 20px;\n    font-size: 20px;\n  }\n  .balance {\n    margin-top: 20px;\n    font-size: 28px;\n  }\n  .total {\n    margin-top: 10px;\n    color: ",";\n  }\n"]);return pe=function(){return e},e}function fe(){var e=Object(a.a)(["\n  .greeting {\n    margin: 10px;\n  }\n"]);return fe=function(){return e},e}function ge(){var e=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  & > * {\n    margin: 10px;\n    flex: 1 1 300px;\n    max-width: 500px;\n  }\n"]);return ge=function(){return e},e}var be=u.b.div(ge()),he=u.b.div(fe());function ve(){return c.a.createElement(he,null,c.a.createElement(R,{className:"greeting",userName:"Danny"}),c.a.createElement(be,null,c.a.createElement(Ee,null),c.a.createElement(ke,{titleImage:"https://cms-tc.pbskids.org/parents/expert-tips-and-advice/helping-young-children-learn-to-make-friends-hero.jpg?mtime=20181008025027",backgroundImage:"https://cms-tc.pbskids.org/parents/expert-tips-and-advice/helping-young-children-learn-to-make-friends-hero.jpg?mtime=20181008025027",title:"ST Jude",subtitle:"Your giving impact 5m ago",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r Integer luctus ligula quis mollis rhoncus. Nulla facilisi.\r Donec consectetur lacus vel quam ullamcorper egestas."}),c.a.createElement(Oe,null),c.a.createElement(we,null),c.a.createElement(ye,null),c.a.createElement(Ce,{quote:"That which does not kill us makes us stronger.",author:"Friedrich Nietzsche"})))}var xe=Object(u.b)(W)(pe(),"#aaa");function Ee(){var e=Y(ae.fetchAccounts),n=e.data,t=e.isLoading,a=(n||[]).reduce((function(e,n){return e+n.count}),0);return c.a.createElement(M,null,c.a.createElement(xe,{centered:!0},c.a.createElement("h3",{className:"header"},"Accounts Overview"),c.a.createElement("div",{className:"balance"},"$",a),c.a.createElement("div",{className:"total"},"Total Available cash")),t?c.a.createElement(ie,null):c.a.createElement($,null,n.map((function(e){var n=e.id,t=e.name,a=e.type,r=e.count;return c.a.createElement(_,{key:n,title:t,subtitle:a,value:"$".concat(r)})}))))}function ke(e){var n=e.titleImage,t=e.backgroundImage,a=e.title,r=e.subtitle,l=e.description;return c.a.createElement(M,null,c.a.createElement(_,{image:n,title:a,subtitle:r}),c.a.createElement(q,{image:t}),c.a.createElement(B,null,l),c.a.createElement(H,null,c.a.createElement(p,null,"Share to spread the world")))}function Oe(){var e=Y(ae.fetchAccounts),n=e.data,t=e.isLoading;return c.a.createElement(M,null,c.a.createElement(_,{title:"Recent Transactions",subtitle:"Jun 29",backgroundColor:"#d83275",fontColor:"white"}),t?c.a.createElement(ie,null):c.a.createElement($,null,n.map((function(e){var n=e.id,t=e.name,a=e.type,r=e.count;return c.a.createElement(_,{key:n,title:t,subtitle:a,value:"$".concat(r)})}))),c.a.createElement(H,null,c.a.createElement(p,null,"See more transactions")))}function we(){var e=Y(ae.fetchPayDay),n=e.data,t=e.isLoading;return c.a.createElement(M,null,c.a.createElement(_,{title:"It's your payday",subtitle:"Jul 31",fontColor:"white",backgroundColor:"#0e994d"}),t?c.a.createElement(ie,{color:"#0e994d"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,{centered:!0},c.a.createElement("div",{className:"balance"},"+$",n.count),c.a.createElement("div",{className:"total"},n.employerName)),c.a.createElement(q,{image:se.a})),c.a.createElement(H,null,c.a.createElement(p,{color:"#0e994d"},"See more transactions")))}function ye(){var e=Y(ae.fetchAccounts),n=e.data,t=e.isLoading;return c.a.createElement(M,null,c.a.createElement(_,{title:"Upcoming big payments card",subtitle:"Jun 29",fontColor:"white",backgroundColor:"#d83275"}),t?c.a.createElement(ie,null):c.a.createElement($,null,n.map((function(e){var n=e.id,t=e.name,a=e.type,r=e.count;return c.a.createElement(_,{key:n,title:t,subtitle:a,value:"$".concat(r)})}))),c.a.createElement(B,null,"Total cash in your checking account:"),c.a.createElement(H,null,c.a.createElement(p,null,"I need a lone"),c.a.createElement(p,null,"Transfer")))}var je=u.b.h3(de()),Ne=u.b.h3(me(),"#aaa");function Ce(e){var n=e.quote,t=e.author;return c.a.createElement(M,null,c.a.createElement(_,{title:"Quote of the day",subtitle:"Jun 29",fontColor:"white",backgroundColor:"#d83275"}),c.a.createElement(W,{centered:!0},c.a.createElement(je,null,"\u201c",n,"\u201d"),c.a.createElement(Ne,null,t)),c.a.createElement(H,null,c.a.createElement(p,null,"Share to spread the world")))}function Ie(){var e=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .title {\n    font-size: 32px;\n    color: ",";\n    margin-bottom: 20px;\n    margin-top: -20%;\n  }\n"]);return Ie=function(){return e},e}var Le=u.b.div(Ie(),"#d83275");function Se(){var e=Object(s.g)();return c.a.createElement(Le,null,c.a.createElement("div",{className:"title"},"Page is not implemented"),c.a.createElement(p,{onClick:function(){return e.goBack()}},"Go back"))}function De(){var e=Object(a.a)(["\n  display: flex;\n  background-color: ",";\n  height: 50px;\n  line-height: 50px;\n  box-sizing: border-box;\n  color: white;\n  font-size: 26px;\n  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n  .header-logo {\n    flex: 1 1 200px;\n    text-align: right;\n    margin-right: 30px;\n    .logo {\n      padding-right: 10px;\n    }\n  }\n  .header {\n    flex: 5 1 500px;\n    .header-content {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      max-width: 1080px;\n      .user {\n        display: flex;\n        flex: 0 0 300px;\n        margin: 0 10px;\n        justify-content: flex-end;\n        .name {\n          font-size: 20px;\n        }\n        "," {\n          margin: 5px 5px 5px 20px;\n          flex: 0 0 40px;\n        }\n      }\n    }\n  }\n"]);return De=function(){return e},e}var Ge=u.b.header(De(),"#d83275",D);function ze(e){var n=e.className,t=(Object(s.g)(),Object(w.d)()),a=j((function(e){return e.user}));return c.a.createElement(Ge,{className:n},c.a.createElement("div",{className:"header-logo"},c.a.createElement("div",{className:"logo"},"Spiral")),c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-content"},c.a.createElement("div",{className:"user"},c.a.createElement("div",{className:"name"},a?a.name:""),c.a.createElement(D,{width:"40px",height:"40px",imageUrl:a?a.avatar:"https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/2-512.png",circle:!0,onClick:function(){return t({type:"LOGOUT"})}})))))}function Te(){var e=Object(a.a)(["\n  color: ",";\n  text-decoration: none;\n  &.active {\n    color: ",";\n    outline: none;\n  }\n  &:hover {\n    color: ",";\n  }\n"]);return Te=function(){return e},e}var Ue=Object(u.b)(i.b)(Te(),"#aaa","#d83275","#d83275");function Ae(){var e=Object(a.a)(["\n  flex: 1 1 200px;\n  text-align: right;\n  margin-right: 30px;\n  @media only screen and (max-width: 730px) {\n    display: none;\n  }\n  ul {\n    li {\n      font-size: 24px;\n      padding: 10px;\n      &.small {\n        padding: 5px 10px;\n        font-size: 16px;\n      }\n    }\n  }\n"]);return Ae=function(){return e},e}var Pe=u.b.nav(Ae());function Je(e){var n=e.className;return c.a.createElement(Pe,{className:n},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(Ue,{to:"/home"},"Home")),c.a.createElement("li",null,c.a.createElement(Ue,{to:"/accounts"},"Accounts")),c.a.createElement("li",null,c.a.createElement(Ue,{to:"/giving"},"Giving")),c.a.createElement("li",null,c.a.createElement(Ue,{to:"/payments"},"Payments")),c.a.createElement("li",null,c.a.createElement(Ue,{to:"/cards"},"Cards")),c.a.createElement("li",{className:"small"},c.a.createElement(Ue,{to:"/help"},"Help and support")),c.a.createElement("li",{className:"small"},c.a.createElement(Ue,{to:"/alerts-settings"},"Alerts settings")),c.a.createElement("li",{className:"small"},c.a.createElement(Ue,{to:"/accessebility"},"Accessebility")),c.a.createElement("li",{className:"small"},c.a.createElement(Ue,{to:"/policies"},"Policies and Terms"))))}function Me(){var e=Object(a.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  & > .page {\n    flex: 1 1;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: calc(100% - 50px);\n    & > .content {\n      flex: 5 1 500px;\n      overflow-y: auto;\n      height: 100%;\n      & > * {\n        max-width: 1080px;\n      }\n    }\n  }\n"]);return Me=function(){return e},e}var Fe=u.b.div(Me(),"#f7f8fb");function _e(){var e=j((function(e){return e.user}));return c.a.createElement(Fe,null,c.a.createElement(ze,null,"Spiral"),c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/login"},c.a.createElement(I,null)),c.a.createElement(s.a,{exact:!0,path:"/",to:"/login"}),e&&c.a.createElement("div",{className:"page"},c.a.createElement(Je,null),c.a.createElement("main",{className:"content"},c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/home"},c.a.createElement(ve,null)),c.a.createElement(s.b,{path:"/accounts"},c.a.createElement(Se,null)),c.a.createElement(s.b,{path:"/giving"},c.a.createElement(Se,null)),c.a.createElement(s.b,{path:"/payments"},c.a.createElement(Se,null)),c.a.createElement(s.b,{path:"/cards"},c.a.createElement(Se,null))))),c.a.createElement(s.a,{path:"*",to:"/login"})))}var $e=function(){return c.a.createElement(i.a,null,c.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=t(15),We=t(34),Be=t(43),He=t(22),Qe=t(10),Re=Object(Qe.a)(),Ye=Object(He.b)(Re),Ke=Object(qe.c)({router:Ye,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=Object(L.a)(n,["type"]);switch(t){case"LOGIN_SUCCEEDED":return Object(y.a)({},e,{},a);case"LOGIN_FAILED":return e;case"LOGOUT":return null;default:return e}}}),Ve=t(14),Xe=t.n(Ve),Ze=t(19),en=Xe.a.mark(tn),nn=Xe.a.mark(an);function tn(){return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ze.d)("LOGIN_REQUESTED",Xe.a.mark((function e(n){var t,a,r;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.login,a=n.password,e.prev=1,e.next=4,Object(Ze.b)((function(){return ae.logIn(t,a)}));case 4:return r=e.sent,localStorage.setItem("user",JSON.stringify(r)),e.next=8,Object(Ze.c)(Object(y.a)({type:"LOGIN_SUCCEEDED"},r));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(Ze.c)({type:"LOGIN_FAILED",message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));case 2:case"end":return e.stop()}}),en)}function an(){return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ze.d)("LOGOUT",Xe.a.mark((function e(){return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("user"),e.next=3,null;case 3:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),nn)}var rn=Xe.a.mark(cn);function cn(){return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ze.a)([tn(),an()]);case 2:case"end":return e.stop()}}),rn)}var ln=Object(Be.a)(),on=Object(qe.e)(Ke,Object(qe.d)(Object(qe.a)(Object(We.a)(Re),ln)));function un(){var e=Object(a.a)(["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  \n  ::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n  \n  ::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 8px;\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return un=function(){return e},e}ln.run(cn);var sn=Object(u.a)(un(),"#f7f8fb","#aaa","#d83275");o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(sn,null),c.a.createElement(w.a,{store:on},c.a.createElement(He.a,{history:Re},c.a.createElement($e,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.35cda141.chunk.js.map