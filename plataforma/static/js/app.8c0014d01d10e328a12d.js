webpackJsonp([1],{"9M+g":function(t,e){},GVnj:function(t,e){t.exports={getLoaderProperties:function(t){return{container:this.fullPage?null:t,canCancel:!1,color:"#17A2B8"}}}},Jmt5:function(t,e){},Jzji:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),s=i.n(a),o=i("7+uW"),n=i("mvHQ"),r=i.n(n),c=i("mtWM"),l=i.n(c),u={name:"NavBar",data:function(){return{usuario:"",senha:"",isLogged:!1,userName:"",userSex:"",MsgAviso:"",msgExibition:""}},mounted:function(){console.log(this.$session.get("_SessEntreLinhas"))},methods:{showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments[1];this.$bvToast.toast(e,{title:"Aviso",variant:t,solid:!0})},abrirPagina:function(t){this.$router.push({path:"/"+t})},login:function(){var t=this;l.a.get("http://142.93.194.142:3333".concat("/login"),{params:{login:this.usuario,pass:this.senha}}).then(function(e){if(t.isLogged=e.data.result,t.isLogged){t.userName=e.data.pessoa.NOME_PESSOA,t.userSex=e.data.pessoa.SEXO,t.$session.start(),console.log(e.data),t.$session.set("_SessEntreLinhas",e.data.token),"M"==t.userSex?t.msgExibition="Bem vindo "+t.userName:t.msgExibition="Bem vinda "+t.userName;r()({id_usuario:e.data.pessoa.ID_USUARIO,id_pessoa:e.data.pessoa.ID_PESSOA});t.$store.commit("setIdUsuario",e.data.pessoa.ID_USUARIO),t.$store.commit("setIdPessoa",e.data.pessoa.ID_PESSOA)}else t.showToast("warning",e.data.msg||"Verique os dados informados."),t.MsgAviso(e.data.msg)}).catch(function(t){console.log(t)})},logout:function(){this.isLogged=!1,this.usuario="",this.senha="",this.$session.destroy(),this.$router.push({path:"/"})},perfil:function(){this.$router.push({path:"/perfilusuario"})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar",{staticStyle:{background:"#A7DBDB"},attrs:{toggleable:"lg",type:"light",fixed:"top",sticky:""}},[i("b-navbar-brand",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],attrs:{href:"#sidebar-1"},on:{click:function(t){t.preventDefault()}}},[i("b-icon",{attrs:{icon:"list"}})],1),t._v(" "),i("b-navbar-brand",{attrs:{href:"#"}},[t._v("\n      EntreLinhas\n  ")]),t._v(" "),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{href:"#/"}},[t._v("Home")]),t._v(" "),this.isLogged?i("b-dropdown",{attrs:{size:"sm",variant:"label","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("b-label",{staticStyle:{color:"rgba(0, 0, 0, 0.5)"}},[t._v("Correções")])]},proxy:!0}],null,!1,2762537730)},[t._v(" "),i("b-dropdown-item-button",{on:{click:function(e){return t.abrirPagina("cadastrocorrecoes")}}},[t._v("Cadastrar")]),t._v(" "),i("b-dropdown-item-button",{on:{click:function(e){return t.abrirPagina("correcoes")}}},[t._v("Localizar")])],1):t._e()],1),t._v(" "),0==this.isLogged?i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Usuário"},model:{value:t.usuario,callback:function(e){t.usuario=e},expression:"usuario"}}),t._v(" "),i("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"password",placeholder:"Senha"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login()}},model:{value:t.senha,callback:function(e){t.senha=e},expression:"senha"}}),t._v(" "),i("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",variant:"success"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1):i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-dropdown",{attrs:{size:"md",right:"",text:t.msgExibition,variant:"outline"}},[i("b-dropdown-item-button",{on:{click:function(e){return t.perfil()}}},[i("b-icon",{attrs:{icon:"person-circle","aria-hidden":"true"}}),t._v("\n        Perfil "),i("span",{staticClass:"sr-only"})],1),t._v(" "),i("b-dropdown-divider"),t._v(" "),i("b-dropdown-item-button",[t._v("Mensagens")]),t._v(" "),i("b-dropdown-divider"),t._v(" "),i("b-dropdown-item-button",{attrs:{variant:"danger"},on:{click:function(e){return t.logout()}}},[i("b-icon",{attrs:{icon:"x-circle","aria-hidden":"true"}}),t._v("\n          Sair\n      ")],1)],1)],1)],1)],1)},staticRenderFns:[]},h={name:"App",components:{NavBar:i("VU/8")(u,d,!1,null,null,null).exports},data:function(){return{id_usuario:0,id_pessoa:0}},methods:{atualizarUsuarios:function(t){t=JSON.parse(t),this.id_usuario=t.id_usuario||0,this.id_pessoa=t.id_pessoa||0}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar",{attrs:{id:"navEntreLinhas",id_pessoa:this.id_pessoa,id_usuario:this.id_usuario},on:{"atualizar-usuarios":this.atualizarUsuarios}}),this._v(" "),e("router-view",{attrs:{id_pessoa:this.id_pessoa,id_usuario:this.id_usuario}})],1)},staticRenderFns:[]};var f=i("VU/8")(h,m,!1,function(t){i("p3xB")},null,null).exports,v=i("/ocq");i("ZcrD");var p=i("vn6w"),b=i.n(p),g=i("GVnj"),_=i.n(g),j={name:"Home",data:function(){return{width:0,height:0,x:0,y:0,iniX:0,iniY:0,fimX:0,fimY:0,tamW:0,tamH:0,aux:0,desenhar:!1}},mounted:function(){var t=document.getElementById("UgCanvas");t.width=window.innerWidth,t.height=window.innerHeight},methods:{pegaPosIni:function(t){this.iniX=t.clientX,this.iniY=t.clientY+3.5*document.getElementById("navEntreLinhas").offsetHeight,this.desenhar=!0,document.getElementById("UgCanvas").getContext("2d").fillStyle="rgb(60, 179, 113)"},pegaPosFim:function(t){this.desenhar&&(this.fimX=t.clientX,this.fimY=t.clientY+3.5*document.getElementById("navEntreLinhas").offsetHeight,this.fimX>this.iniX?this.tamH=this.fimX-this.iniX:(this.tamH=this.iniX-this.fimX,this.aux=this.fimX,this.fimX=this.iniX,this.iniX=this.aux),this.fimY>this.iniY?this.tamW=this.fimY-this.iniY:(this.tamW=this.iniY-this.fimY,this.aux=this.fimY,this.fimY=this.iniY,this.iniY=this.aux),document.getElementById("UgCanvas").getContext("2d").fillRect(this.iniX,this.iniY,this.tamH,this.tamW))},soltar:function(){this.desenhar=!1,console.log("oia "+this.iniX+" <-> "+this.iniY+"     tamanho = "+this.tamH+" <-> "+this.tamW),this.onResize(this.iniX,this.iniY,this.tamW,this.tamW);var t=document.getElementById("UgCanvas");t.getContext("2d").clearRect(0,0,t.width,t.height)},onResize:function(t,e,i,a){this.x=t,this.y=e,this.width=i,this.height=a},teste:function(){var t=this.$loading.show(_.a.getLoaderProperties(this.$refs.formContainer));setTimeout(function(){t.hide()},2e3)}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-button",{on:{click:this.teste}},[this._v("teste")])],1)},staticRenderFns:[]},y=i("VU/8")(j,w,!1,null,null,null).exports,x={name:"Correcoes",data:function(){return{id:"",modalTitulo:"",titulo:"",descricao:"",arquivo:"",items:[],baseImage:null}},beforeCreate:function(){l.a.get("http://142.93.194.142:3333".concat("/rotacliente"),{})},methods:{showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments[1];this.$bvToast.toast(e,{title:"Aviso",variant:t,solid:!0})},limparTela:function(){this.id=null,this.titulo="",this.descricao="",this.arquivo=null,this.items=[]},buscarCorrecoes:function(){var t=this,e=this;l.a.get("http://142.93.194.142:3333".concat("/buscacorrecoes"),{params:{titulo:this.modalTitulo}}).then(function(i){t.items=[];for(var a=i.data.dados,s=0;s<a.length;s++)e.items.push({codigo:a[s].id,titulo:a[s].titulo,usuario:a[s].usuario.pessoa.nome_pessoa})}).catch(function(e){"Unauthorized"==e.response.data&&t.$router.push({path:"/"})})},selecionaCorrecao:function(t,e){var i=this,a=this;l.a.get("http://142.93.194.142:3333".concat("/dadoscorrecao"),{params:{id:t.codigo}}).then(function(t){var e=t.data.dados;a.id=e.id,a.titulo=e.titulo,a.descricao=e.descricao,a.arquivo=e.arquivo,a.$bvModal.hide("modal-buscCorrecoes")}).catch(function(t){i.showToast("warning",t)})},salvarCorrecao:function(){var t=this;l.a.post("http://142.93.194.142:3333".concat("/setcorrecoes"),{id_correcao:this.id||null,titulo:this.titulo||null,descricao:this.descricao||null,arquivo:this.baseImage||null,usuarioId:this.$store.getters.id_usuario}).then(function(e){t.showToast("success","Correção Cadastrada"),t.limparTela()}).catch(function(e){t.showToast("warning",e)})},buscarDados:function(){l.a.get("http://142.93.194.142:3333".concat("/dadoscorrecao"),{params:{id:this.id}})},cancelar:function(){this.id=0,this.titulo="",this.descricao="",this.arquivo=null},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=new FileReader,i=this;e.onload=function(t){i.baseImage=t.target.result},e.readAsDataURL(t)}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("b-row",[i("b-col",[i("h1",[t._v("Cadastro de Correções")])])],1),t._v(" "),i("b-row",[i("b-col",[i("b-row",[i("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-titulo"}},[t._v("Titulo:")])]),t._v(" "),i("b-row",[i("b-input-group",[i("b-form-input",{attrs:{id:"input-titulo"},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}}),t._v(" "),i("b-button-group",[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-buscCorrecoes",modifiers:{"modal-buscCorrecoes":!0}}],attrs:{variant:"outline-primary"}},[i("b-icon",{attrs:{icon:"search","aria-label":"Help"}})],1)],1)],1)],1),t._v(" "),i("b-row",[i("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-descr"}},[t._v("Descrição:")]),t._v(" "),i("b-form-textarea",{attrs:{id:"input-descr"},model:{value:t.descricao,callback:function(e){t.descricao=e},expression:"descricao"}})],1),t._v(" "),i("b-row",[i("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-arq"}},[t._v("Arquivo:")]),t._v(" "),i("b-form-file",{attrs:{id:"input-arq"},on:{change:t.onFileChange},model:{value:t.arquivo,callback:function(e){t.arquivo=e},expression:"arquivo"}})],1),t._v(" "),i("b-row",{staticStyle:{"margin-top":"5px"}},[i("b-col",[i("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.salvarCorrecao()}}},[t._v("\n            Salvar\n          ")]),t._v(" "),i("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.cancelar()}}},[t._v("\n            Cancelar\n          ")])],1)],1)],1)],1),t._v(" "),i("b-modal",{attrs:{id:"modal-buscCorrecoes",title:"Buscar Correções","ok-only":""}},[i("b-container",[i("b-row",[i("b-col",{attrs:{sm:"9"}},[i("b-form-input",{model:{value:t.modalTitulo,callback:function(e){t.modalTitulo=e},expression:"modalTitulo"}})],1),t._v(" "),i("b-col",{attrs:{sm:"2"}},[i("b-button",{on:{click:function(e){return t.buscarCorrecoes()}}},[t._v("Buscar")])],1)],1),t._v(" "),i("b-row",[i("b-table",{attrs:{striped:"",hover:"",items:t.items,selectedClass:"table-info"},on:{"row-dblclicked":t.selecionaCorrecao}})],1)],1)],1)],1)},staticRenderFns:[]},k=i("VU/8")(x,C,!1,null,null,null).exports,S={name:"PerfilUsuario",data:function(){return{id:0,id_usuario:0,nome:"",sexo:[{text:"Masculino",value:"M"},{text:"Feminino",value:"F"}],sexoSel:"M",login:"",senha1:"",senha2:""}},mounted:function(){this.buscarDados()},methods:{showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments[1];this.$bvToast.toast(e,{title:"Aviso",variant:t,solid:!0})},buscarDados:function(){var t=this;l.a.get("http://142.93.194.142:3333".concat("/dadosusuario"),{params:{id:this.$store.getters.id_usuario}}).then(function(e){t.nome=e.data.dados.nome_pessoa,t.sexoSel=e.data.dados.sexo,t.login=e.data.dados.login}).catch(function(e){t.showToast("warning",e)})},salvarDados:function(){var t=this;l.a.post("http://142.93.194.142:3333".concat("/atualizardadosusuario"),{id_usuario:this.$store.getters.id_usuario,login:this.login,nome:this.nome,senha:"U2FsdGVkX19Gzk22WdqioHzRLrQF61iYO90+UPk2aMw=",sexo:this.sexoSel}).then(function(e){t.buscarDados(),t.showToast("success",e.data.msg)}).catch(function(e){t.showToast("warning",e)})}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("b-card",{attrs:{"no-body":""}},[i("b-tabs",{attrs:{card:""}},[i("b-tab",{attrs:{title:"Dados do usuário",active:""}},[i("b-row",[i("b-col",{attrs:{cols:"4"}},[i("b-row",[i("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-live"}},[t._v("Nome:")])]),t._v(" "),i("b-row",[i("b-form-input",{attrs:{id:"perfilNome",state:t.nameState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Informe seu nome",trim:""},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}})],1)],1),t._v(" "),i("b-col",{attrs:{cols:"4"}},[i("label",{attrs:{for:"compSexo"}},[t._v("Sexo")]),t._v(" "),i("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[i("b-form-radio-group",{attrs:{id:"compSexo",options:t.sexo,"aria-describedby":a,name:"radio-inline"},model:{value:t.sexoSel,callback:function(e){t.sexoSel=e},expression:"sexoSel"}})]}}])})],1)],1),t._v(" "),i("b-row",[i("b-col",{attrs:{cols:"4"}},[i("b-row",[i("label",{attrs:{for:"perfilNomeUsuario"}},[t._v("Login")])]),t._v(" "),i("b-row",[i("b-input-group",{attrs:{prepend:"@"}},[i("b-form-input",{attrs:{id:"perfilNomeUsuario",placeholder:"Login"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}})],1)],1)],1),t._v(" "),i("b-col",[i("b-row",[i("label",{staticStyle:{"margin-left":"15px"},attrs:{for:"perfilSenhaUsuario1"}},[t._v("Senha")])]),t._v(" "),i("b-row",[i("b-col",[i("b-form-input",{attrs:{type:"password",id:"perfilSenhaUsuario1",placeholder:"Senha"},model:{value:t.senha1,callback:function(e){t.senha1=e},expression:"senha1"}})],1),t._v(" "),i("b-col",[i("b-form-input",{attrs:{type:"password",id:"perfilSenhaUsuario2",placeholder:"Senha"},model:{value:t.senha2,callback:function(e){t.senha2=e},expression:"senha2"}})],1)],1)],1)],1),t._v(" "),i("b-row",{staticStyle:{"margin-top":"5px"}},[i("b-col",[i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.salvarDados()}}},[t._v("Salvar Dados")]),t._v(" "),i("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.buscarDados()}}},[t._v("Cancelar")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},I=i("VU/8")(S,E,!1,null,null,null).exports,z={name:"Marcador",props:{numero:Number,initialX:Number,initialY:Number,initialW:Number,initialH:Number},data:function(){return{id:0,width:this.initialW,height:this.initialH,x:this.initialX,y:this.initialY,observacao:"",marcacao_item:1,ORTOGRAFIA:"ORTOGRAFIA",GERAL:"GERAL",REGENCIA:"REGENCIA",SEMANTICA:"SEMANTICA",CONCORDANCIA:"CONCORDANCIA",cor:this.CONCORDANCIA,iconWhite:"",tipo:"GERAL"}},mounted:function(){this.buscaDadosMarcador()},methods:{buscar:function(t){this.tipo=this.verificaTipo(t),this.atualizarDados()},atualizarDados:function(){var t=this;l.a.post("http://142.93.194.142:3333".concat("/setmarcador"),{x:t.x,y:t.y,width:t.width,height:t.height,id_correcao:t.$route.params.idCorrecao,id_marcacao:t.numero,marcacao_item:t.marcacao_item,observacao:t.observacao}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},stopResize:function(t,e,i,a){var s=!1;this.x!=t?s=!0:this.y!=e?s=!0:this.width!=i?s=!0:this.height!=a&&(s=!0),this.x=t,this.y=e,this.width=i,this.height=a,s&&this.atualizarDados()},stopDrag:function(t,e){var i=!1;this.x!=t?i=!0:this.y!=e&&(i=!0),this.x=t,this.y=e,i&&this.atualizarDados()},verificaTipo:function(t){return"O"===t?(this.iconWhite="S",this.marcacao_item=1,this.ORTOGRAFIA):"G"===t?(this.iconWhite="",this.marcacao_item=2,this.GERAL):"R"===t?(this.iconWhite="S",this.marcacao_item=3,this.REGENCIA):"S"===t?(this.iconWhite="S",this.marcacao_item=4,this.SEMANTICA):(this.marcacao_item=5,this.iconWhite="S",this.CONCORDANCIA)},removerMarcador:function(t){l.a.post("http://142.93.194.142:3333".concat("/deletemarcador"),{id:t}).then(function(e){e.data.result&&document.getElementById("marc_"+t).remove()}).catch(function(t){console.log(t)})},buscaDadosMarcador:function(){var t=this;l.a.get("http://142.93.194.142:3333".concat("/getmarcador"),{params:{id:t.numero}}).then(function(e){var i=e.data.dados;switch(t.height=i.tam_h,t.width=i.tam_w,t.x=i.pos_x,t.y=i.pos_y,t.marcacao_item=i.marcacao_item,t.observacao=i.observacao,i.marcacao_item){case 1:t.tipo=t.ORTOGRAFIA;break;case 2:t.tipo=t.GERAL;break;case 3:t.tipo=t.REGENCIA;break;case 4:t.tipo=t.SEMANTICA;break;case 5:t.tipo=t.CONCORDANCIA}}).catch(function(t){console.log(t)})}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-draggable-resizable",{attrs:{w:this.width,z:1e3,h:this.height,x:t.x,y:t.y,parent:!0},on:{dragstop:t.stopDrag,resizestop:t.stopResize}},[i("div",{class:t.tipo,staticStyle:{height:"100%",width:"100%"}},[i("b-row",[i("b-col",[t._v("\n        "+t._s(this.numero)+"\n      ")]),t._v(" "),i("b-col",[i("b-dropdown",{attrs:{size:"sm",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([this.iconWhite?{key:"button-content",fn:function(){return[i("b-icon",{staticStyle:{color:"white"},attrs:{icon:"gear-fill","font-scale":"1.2"}})]},proxy:!0}:{key:"button-content",fn:function(){return[i("b-icon",{staticStyle:{color:"black"},attrs:{icon:"gear-fill","font-scale":"1.2"}})]},proxy:!0}],null,!0)},[t._v(" "),i("b-dropdown-header",[t._v("Opcoes")]),t._v(" "),i("b-dropdown-divider"),t._v(" "),i("b-dropdown-item",{on:{click:function(e){return t.buscar("O")}}},[t._v(" Ortografia ")]),t._v(" "),i("b-dropdown-item",{on:{click:function(e){return t.buscar("G")}}},[t._v(" Geral ")]),t._v(" "),i("b-dropdown-item",{on:{click:function(e){return t.buscar("R")}}},[t._v(" Regência ")]),t._v(" "),i("b-dropdown-item",{on:{click:function(e){return t.buscar("S")}}},[t._v(" Semântica ")]),t._v(" "),i("b-dropdown-item",{on:{click:function(e){return t.buscar("C")}}},[t._v(" Concordância ")]),t._v(" "),i("b-dropdown-divider"),t._v(" "),i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modalObs"+t.numero,expression:"`modalObs${numero}`"}]},[t._v(" Observação ")]),t._v(" "),i("b-dropdown-divider"),t._v(" "),i("b-dropdown-item",{on:{click:function(e){return t.removerMarcador(t.numero)}}},[t._v(" Excluir ")])],1)],1)],1),t._v(" "),[i("b-modal",{attrs:{id:"modalObs"+t.numero,title:"Observação","ok-only":""},on:{ok:function(e){return t.atualizarDados()}}},[i("b-form-textarea",{model:{value:t.observacao,callback:function(e){t.observacao=e},expression:"observacao"}})],1)]],2)])},staticRenderFns:[]};var N=i("VU/8")(z,R,!1,function(t){i("Jzji")},null,null).exports,O={name:"SideBar",data:function(){return{}},methods:{},props:{btnClickHandler:{type:Function},nome:String}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-sidebar",{attrs:{id:"sidebar-1",title:"Opções",shadow:""}},[e("div",{staticClass:"px-3 py-2"},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],on:{click:this.btnClickHandler}},[this._v(" Adicionar Marcação ")])],1)])],1)},staticRenderFns:[]},A={name:"Correcao",data:function(){return{listMarc:[],numero:0,arquivo:"",iniX:0,iniY:0,fimX:0,fimY:0,tamW:0,tamH:0,aux:0,desenhar:!1}},components:{Marcador:N,SideBar:i("VU/8")(O,X,!1,null,null,null).exports},mounted:function(){this.buscarCorrecao(this.$route.params.idCorrecao);var t=document.getElementById("UgCanvas");t.width=window.innerWidth,t.height=window.innerHeight},methods:{pegaPosIni:function(t){switch(t.which){case 1:this.iniX=t.clientX,this.iniY=t.clientY-document.getElementById("navEntreLinhas").offsetHeight+document.documentElement.scrollTop,this.desenhar=!0,this.fimX=0,this.fimY=0,document.getElementById("UgCanvas").getContext("2d").fillStyle="rgb(60, 179, 113)"}},pegaPosFim:function(t){if(this.desenhar){this.fimX=t.clientX,this.fimY=t.clientY-document.getElementById("navEntreLinhas").offsetHeight+document.documentElement.scrollTop,this.fimX>this.iniX?this.tamH=this.fimX-this.iniX:this.tamH=this.iniX-this.fimX,this.fimY>this.iniY?this.tamW=this.fimY-this.iniY:this.tamW=this.iniY-this.fimY;var e=document.getElementById("UgCanvas"),i=e.getContext("2d"),a=0,s=0;a=this.iniX>this.fimX?this.fimX:this.iniX,s=this.iniY>this.fimY?this.fimY:this.iniY,i.clearRect(0,0,e.width,e.height),i.fillRect(a,s,this.tamH,this.tamW)}},soltar:function(t){if(this.desenhar){this.desenhar=!1;this.iniX;var e=document.getElementById("UgCanvas");e.getContext("2d").clearRect(0,0,e.width,e.height);var i=this,a=0,s=0;a=this.iniX>this.fimX?this.fimX:this.iniX,s=this.iniY>this.fimY?this.fimY:this.iniY,this.iniX=a,this.iniY=s,this.iniX>0&&this.fimX>0&&l.a.post("http://142.93.194.142:3333".concat("/setmarcador"),{x:a,y:s,width:i.tamH,height:i.tamW,marcacao_item:2,id_correcao:i.$route.params.idCorrecao}).then(function(t){i.listMarc.push(t.data.id)}).catch(function(t){console.log(t)})}},addMarcacao:function(){var t=this;l.a.post("http://142.93.194.142:3333".concat("/setmarcador"),{x:100,y:10,width:120,height:50,marcacao_item:2,id_correcao:this.$route.params.idCorrecao}).then(function(e){t.listMarc.push(e.data.id)}).catch(function(t){console.log(t)})},excluir:function(){console.log("alex")},buscarCorrecao:function(t){var e=this.$loading.show(_.a.getLoaderProperties(this.$refs.formContainer)),i=this;l.a.get("http://142.93.194.142:3333".concat("/dadoscorrecao"),{params:{id:t}}).then(function(a){i.arquivo=a.data.dados.arquivo,l.a.get("http://142.93.194.142:3333".concat("/getmarcadores"),{params:{id_correcao:t}}).then(function(t){for(var a=t.data.dados,s=0;s<=a.length;s++){i.listMarc.push(a[s].id),document.getElementById("UgCanvas").height=document.getElementById("idImgCorrecao").height}document.getElementById("divPaiCorrecao").style.display="block",e.hide()}).catch(function(t){e.hide(),document.getElementById("divPaiCorrecao").style.display="block",console.log(t)})}).catch(function(t){document.getElementById("divPaiCorrecao").style.display="block",e.hide(),alert(t)})}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"divPaiCorrecao",width:"100%",height:"100%"}},[i("SideBar",{attrs:{btnClickHandler:this.addMarcacao,nome:"teste"}}),t._v(" "),t._l(t.listMarc,function(e){return i("Marcador",{key:e,attrs:{tipo:"GERAL",actExcluir:t.excluir,id:"marc_"+e,numero:e,initialX:t.iniX,initialY:t.iniY,initialW:t.tamH,initialH:t.tamW}})}),t._v(" "),i("b-img",{attrs:{id:"idImgCorrecao",src:this.arquivo,fluid:""}}),t._v(" "),i("div",{staticStyle:{height:"100%",width:"100%"},on:{mousedown:t.pegaPosIni,mousemove:t.pegaPosFim,mouseup:t.soltar}},[i("canvas",{staticStyle:{opacity:"0.5","z-index":"100",transform:"translateY(-100%)"},attrs:{id:"UgCanvas",width:"100%",height:"100%"}})])],2)},staticRenderFns:[]},U=i("VU/8")(A,F,!1,null,null,null).exports,Y=i("PJh5"),D=i.n(Y),M={name:"ListaCorrecoes",data:function(){return{tituloCorrecao:"",dtInicio:"",dtFim:"",fields:["titulo","dataCriacao","opções"],items:[]}},methods:{abrirCorrecao:function(t){this.$router.push({path:"/correcao/"+t})},buscarCorrecoes:function(){var t=this,e=this;l.a.get("http://142.93.194.142:3333".concat("/buscacorrecoes"),{params:{titulo:this.tituloCorrecao,dtInicio:D()(this.dtInicio).format("yyyy-MM-DD"),dtFim:D()(this.dtFim).format("yyyy-MM-DD")}}).then(function(i){t.items=[];for(var a=i.data.dados,s=0;s<a.length;s++)e.items.push({codigo:a[s].id,titulo:a[s].titulo,dataCriacao:D()(a[s].dtCriacao).format("DD/MM/yyyy")})}).catch(function(e){"Unauthorized"==e.response.data&&t.$router.push({path:"/"})})}},created:function(){var t=new Date,e=new Date;this.dtInicio=e,this.dtFim=t,e.setMonth(e.getMonth()-1)}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("b-row",[i("b-col",[i("h1",[t._v(" Lista de Correções ")])])],1),t._v(" "),i("b-row",[i("b-input-group",[i("b-form-input",{attrs:{id:"input-titulo"},model:{value:t.tituloCorrecao,callback:function(e){t.tituloCorrecao=e},expression:"tituloCorrecao"}}),t._v(" "),i("b-button-group",[i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.buscarCorrecoes()}}},[i("b-icon",{attrs:{icon:"search","aria-label":"Help"}})],1)],1)],1)],1),t._v(" "),i("b-row",[i("b-col",[i("label",{attrs:{for:"dtInicio"}},[t._v("Data inicio")]),t._v(" "),i("b-form-datepicker",{attrs:{id:"dtInicio"},model:{value:t.dtInicio,callback:function(e){t.dtInicio=e},expression:"dtInicio"}})],1),t._v(" "),i("b-col",[i("label",{attrs:{for:"dtFim"}},[t._v("Data Final")]),t._v(" "),i("b-form-datepicker",{attrs:{id:"dtFim"},model:{value:t.dtFim,callback:function(e){t.dtFim=e},expression:"dtFim"}})],1)],1),t._v(" "),i("br"),t._v(" "),i("b-row",[i("b-table",{attrs:{items:t.items,fields:t.fields,striped:""},scopedSlots:t._u([{key:"cell(opções)",fn:function(e){return[i("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(i){return t.abrirCorrecao(e.item.codigo)}}},[i("b-icon",{attrs:{icon:"folder2-open","aria-label":"Help"}})],1)]}}])})],1)],1)},staticRenderFns:[]},L=i("VU/8")(M,H,!1,null,null,null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("b-container",[this._v("\n  alex\n")])},staticRenderFns:[]},P=i("VU/8")({name:"Teste",data:function(){return{}}},T,!1,null,null,null).exports;o.default.use(v.a);var B=[{path:"/",name:"Home",component:y},{path:"/teste",name:"Teste",componente:P},{path:"/cadastrocorrecoes",name:"CadastroCorrecoes",component:k},{path:"/perfilusuario",name:"Perfil",component:I},{path:"/correcao/:idCorrecao",name:"Correcao",component:U},{path:"/correcoes",name:"Correcoes",component:L}],q=new v.a({routes:B});q.beforeEach(function(t,e,i){t.matched.some(function(t){return t.meta.requiresSession});q.app.$session.exists("_SessEntreLinhas")?(console.log("tem"),i()):(console.log("naotem"),q.app.$session.destroy(),i())});var W=q,$=i("Tqaz"),G=(i("Jmt5"),i("9M+g"),i("nd5n"),i("MU8w"),i("NYxO"));o.default.use(G.a);var V=new G.a.Store({state:{id_usuario:0,id_pessoa:0},mutations:{setIdUsuario:function(t,e){t.id_usuario=e},setIdPessoa:function(t,e){t.id_pessoa=e}},getters:{id_usuario:function(t){return t.id_usuario},id_pessoa:function(t){return t.id_pessoa}}}),J=i("ZZvs"),Q=i.n(J),K=(i("SYh3"),i("18Sv")),Z=i.n(K),tt="";l.a.interceptors.request.use(function(t){return t.headers={"x-access-token":JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas,"Content-type":"application/json"},t},function(t){return s.a.reject(t)}),l.a.interceptors.response.use(function(t){return function(t){return 401===t.status&&(JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas=""),tt=t.data._sessEntreLinhasRefresh,JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas=tt,t}(t)},function(t){return function(t){return JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas="",window.location="/",console.log("error"),s.a.reject(t)}(t)}),o.default.config.productionTip=!1,o.default.use($.a),o.default.use($.b),o.default.use(Z.a),o.default.use(Q.a),o.default.component("vue-draggable-resizable",b.a),new o.default({el:"#app",router:W,store:V,components:{App:f},template:"<App/>"})},SYh3:function(t,e){},nd5n:function(t,e){},p3xB:function(t,e){},uslO:function(t,e,i){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function s(t){return i(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.8c0014d01d10e328a12d.js.map