(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(1),r=c(15),i=c.n(r),o=c(22),j=c(11),s=c(108),l=c(109),b=c(12),d=c(110),u=c(111),O=c(112),x=c(62);function h(e){var t=Object(j.g)(),c=Object(a.useState)(""),r=Object(b.a)(c,2),i=r[0],o=r[1],h=Object(a.useState)(""),p=Object(b.a)(h,2),g=p[0],m=p[1],f=Object(a.useState)("bobariga"),v=Object(b.a)(f,1)[0],S=Object(a.useState)("admin"),k=Object(b.a)(S,1)[0];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(d.a,{onSubmit:function(){i===k&&g===v?(localStorage.setItem("@SuaAplicacao:JWT_TOKEN","seutokenjwt"),t.push("/correcoes")):alert("errado")},children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(O.a,{name:"userLogin",value:i,onChange:function(e){return o(e.target.value)},id:"userLogin",placeholder:"Usu\xe1rio"}),Object(n.jsx)(O.a,{type:"password",name:"senhaLogin",id:"senhaLogin",placeholder:"Senha",value:g,onChange:function(e){return m(e.target.value)}}),Object(n.jsx)(x.a,{style:{marginTop:"10px"},type:"submit",children:"Entrar"})]})})})})})}function p(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(l.a,{sm:4}),Object(n.jsx)(l.a,{sm:4,children:Object(n.jsx)(h,{})}),Object(n.jsx)(l.a,{sm:4})]})})}var g=c(46),m=c(117),f=c(113),v=c(114),S=c(115),k=c(118),C=c(119),y=c(116),w=c(29),T=c.n(w),I=c(32),A=c(30),E=c(31);function P(e){var t,c=Object(a.useState)(e.marcacao),r=Object(b.a)(c,2),i=r[0],o=r[1],j=Object(a.useState)(e.numero),s=Object(b.a)(j,2),l=s[0],d=(s[1],Object(a.useState)("white")),u=Object(b.a)(d,2),x=(u[0],u[1],Object(a.useState)(!1)),h=Object(b.a)(x,2),p=h[0],g=h[1],w=Object(a.useState)(!1),P=Object(b.a)(w,2),_=P[0],L=P[1],z=function(){return L(!_)},J=Object(a.useState)(""),N=Object(b.a)(J,2),R=N[0],G=N[1];return Object(n.jsxs)("div",{id:e.id,style:{position:"absolute",zIndex:"".concat(l)},children:[Object(n.jsxs)(m.a,{isOpen:_,toggle:z,children:[Object(n.jsx)(f.a,{toggle:z,children:"Coment\xe1rio"}),Object(n.jsx)(v.a,{children:Object(n.jsx)(O.a,{type:"textarea",value:R,onChange:function(e){return G(e.target.value)}})})]}),Object(n.jsx)(T.a,{defaultPosition:{x:50,y:50},id:e.pId,children:Object(n.jsx)(I.a,{className:"item",defaultSize:{width:100,height:100},style:{backgroundColor:(t=i,"O"===t?"rgb(248, 3, 21,0.5)":"G"===t?"rgb(254, 224, 21, 0.5)":"R"===t?"rgb(252, 119, 2, 0.5)":"S"===t?"rgba(0, 185, 21, 0.5)":"rgb(199, 43, 234, 0.5)")},children:Object(n.jsx)("div",{children:Object(n.jsxs)(S.a,{isOpen:p,toggle:function(){return g((function(e){return!e}))},children:[Object(n.jsxs)(k.a,{tag:"span","data-toggle":"dropdown","aria-expanded":p,style:{fontFamily:"arial black",color:function(e){return"O"===e?"white":"G"===e?"black":"white"}(i)},children:[i," ",l," ",Object(n.jsx)(A.a,{icon:E.a})]}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(y.a,{onClick:function(e){return z()},children:"Coment\xe1rio"}),Object(n.jsx)(y.a,{divider:!0}),Object(n.jsx)(y.a,{onClick:function(e){return o("O")},children:"Ortografia"}),Object(n.jsx)(y.a,{onClick:function(e){return o("S")},children:"Sem\xe2ntica"}),Object(n.jsx)(y.a,{onClick:function(e){return o("R")},children:"Reg\xeancia"}),Object(n.jsx)(y.a,{onClick:function(e){return o("C")},children:"Concord\xe2ncia"}),Object(n.jsx)(y.a,{onClick:function(e){return o("G")},children:"Geral"}),Object(n.jsx)(y.a,{divider:!0}),Object(n.jsx)(y.a,{onClick:function(t){return c=e.id,void document.getElementById(c).remove();var c},children:"Remover"})]})]})})})})]})}function _(e){var t=Object(a.useState)(e.numero),c=Object(b.a)(t,2),r=c[0],i=(c[1],Object(a.useState)("black")),o=Object(b.a)(i,2),j=o[0],s=o[1],l=Object(a.useState)(!1),d=Object(b.a)(l,2),u=d[0],x=d[1],h=Object(a.useState)(!1),p=Object(b.a)(h,2),g=p[0],w=p[1],P=function(){return w(!g)},_=Object(a.useState)(""),L=Object(b.a)(_,2),z=L[0],J=L[1];return Object(n.jsxs)("div",{id:e.id,style:{position:"absolute",zIndex:"".concat(r)},children:[Object(n.jsxs)(m.a,{isOpen:g,toggle:P,children:[Object(n.jsx)(f.a,{toggle:P,children:"Coment\xe1rio"}),Object(n.jsx)(v.a,{children:Object(n.jsx)(O.a,{type:"textarea",value:z,onChange:function(e){return J(e.target.value)}})})]}),Object(n.jsx)(T.a,{defaultPosition:{x:50,y:50},id:e.pId,children:Object(n.jsx)(I.a,{className:"item",defaultSize:{width:70,height:40},style:{background:"rgb(252, 255, 240,0.5)",borderColor:j,borderStyle:"dashed"},children:Object(n.jsx)("div",{children:Object(n.jsxs)(S.a,{isOpen:u,toggle:function(){return x((function(e){return!e}))},children:[Object(n.jsxs)(k.a,{tag:"span","data-toggle":"dropdown","aria-expanded":u,style:{fontFamily:"arial black"},children:[r," ",Object(n.jsx)(A.a,{icon:E.a})]}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(y.a,{onClick:function(e){return s("rgb(254, 224, 21)")},children:"Amerelo"}),Object(n.jsx)(y.a,{onClick:function(e){return s("rgba(0, 185, 21)")},children:"verde"}),Object(n.jsx)(y.a,{onClick:function(e){return s("rgb(248, 3, 21)")},children:"Vermelho"}),Object(n.jsx)(y.a,{onClick:function(e){return s("rgb(252, 119, 2)")},children:"Laranja"}),Object(n.jsx)(y.a,{onClick:function(e){return s("rgb(199, 43, 234)")},children:"Lilas"}),Object(n.jsx)(y.a,{divider:!0}),Object(n.jsx)(y.a,{onClick:function(t){return c=e.id,void document.getElementById(c).remove();var c},children:"Remover"})]})]})})})})]})}c(104);function L(e){return Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)(x.a,{style:{width:"150px"},onClick:e.clickMarcacao,children:"+ Marca\xe7\xf5es"}),Object(n.jsx)(x.a,{style:{marginTop:"10px",width:"150px"},onClick:e.clickApontar,children:"+ Aponta\xe7\xf5es"})]}),Object(n.jsx)(l.a,{style:{bottom:"0",position:"absolute"},children:Object(n.jsx)(x.a,{color:"danger",style:{marginTop:"10px",width:"150px"},onClick:e.clickSair,children:"Sair"})})]})}function z(e){var t=e.history,c=Object(a.useState)([]),r=Object(b.a)(c,2),i=r[0],o=r[1],j=Object(a.useState)([]),d=Object(b.a)(j,2),u=d[0],O=d[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(l.a,{xs:2,id:"sidebar-wrapper",children:Object(n.jsx)(L,{clickMarcacao:function(e){o([].concat(Object(g.a)(i),["1"]))},clickApontar:function(e){O([].concat(Object(g.a)(u),["1"]))},clickSair:function(e){return localStorage.removeItem("@SuaAplicacao:JWT_TOKEN"),void t.push("/")}})}),Object(n.jsxs)(l.a,{xs:10,id:"page-content-wrapper",children:[Object(n.jsx)("img",{style:{position:"absolute",zIndex:"-1",left:"0px",top:"0px"},src:"https://image.slidesharecdn.com/7anoomelhortextodomundodostimoanoderecuperao-171129192230/95/7-ano-o-melhor-texto-do-mundo-do-stimo-ano-de-recuperao-1-638.jpg?cb=1511983379"}),i.map((function(e,t){return Object(n.jsx)(P,{id:"marcacao_".concat(t),numero:"1",marcacao:"S"},"marcacao_".concat(t))})),u.map((function(e,t){return Object(n.jsx)(_,{id:"apontador_".concat(t),numero:"1",marcacao:"S"},"apontador_".concat(t))}))]})]})})}var J=c(34),N=c(66);function R(e){var t=e.redirectTo,c=e.isPrivate,a=e.component,r=Object(N.a)(e,["redirectTo","isPrivate","component"]);return!localStorage.getItem("@SuaAplicacao:JWT_TOKEN")&&c?Object(n.jsx)(j.a,{to:t}):Object(n.jsx)(j.b,Object(J.a)(Object(J.a)({},r),{},{render:function(e){return Object(n.jsx)(a,Object(J.a)({},e))}}))}R.defaultProps={redirectTo:"/",isPrivate:!1};var G=R;function B(){return Object(n.jsxs)(j.d,{children:[Object(n.jsx)(G,{path:"/",exact:!0,component:p}),Object(n.jsx)(G,{path:"/correcoes",exact:!0,component:z,isPrivate:!0})]})}var F=function(){return Object(n.jsx)(o.a,{children:Object(n.jsx)(B,{})})};c(105);i.a.render(Object(n.jsx)(F,{}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.8d2a84c0.chunk.js.map