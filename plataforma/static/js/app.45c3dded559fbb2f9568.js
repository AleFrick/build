webpackJsonp([1],{"9M+g":function(t,o){},Jmt5:function(t,o){},NGoV:function(t,o){var e={Authorization:sessionStorage.getItem("_SessEntreLinhas")};t.exports={config:e}},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("//Fk"),s=e.n(a),n=e("7+uW"),r=e("mvHQ"),i=e.n(r),c=e("mtWM"),u=e.n(c),l={name:"NavBar",data:function(){return{usuario:"",senha:"",isLogged:!1,userName:"",userSex:"",MsgAviso:"",msgExibition:""}},mounted:function(){console.log(this.$session.get("_SessEntreLinhas"))},methods:{showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments[1];this.$bvToast.toast(o,{title:"Aviso",variant:t,solid:!0})},abrirPagina:function(t){this.$router.push({path:"/"+t})},login:function(){var t=this;u.a.get("http://142.93.194.142:3333".concat("/login"),{params:{login:this.usuario,pass:this.senha}}).then(function(o){if(t.isLogged=o.data.result,t.isLogged){t.userName=o.data.pessoa.NOME_PESSOA,t.userSex=o.data.pessoa.SEXO,t.$session.start(),console.log(o.data),t.$session.set("_SessEntreLinhas",o.data.token),"M"==t.userSex?t.msgExibition="Bem vindo "+t.userName:t.msgExibition="Bem vinda "+t.userName;i()({id_usuario:o.data.pessoa.ID_USUARIO,id_pessoa:o.data.pessoa.ID_PESSOA});t.$store.commit("setIdUsuario",o.data.pessoa.ID_USUARIO),t.$store.commit("setIdPessoa",o.data.pessoa.ID_PESSOA)}else t.showToast("warning",o.data.msg||"Verique os dados informados."),t.MsgAviso(o.data.msg)}).catch(function(t){console.log(t)})},logout:function(){this.isLogged=!1,this.usuario="",this.senha="",this.$session.destroy(),this.$router.push({path:"/"})},perfil:function(){this.$router.push({path:"/perfilusuario"})}}},d={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-navbar",{staticStyle:{background:"#A7DBDB"},attrs:{toggleable:"lg",type:"light",fixed:"top",sticky:""}},[e("b-navbar-brand",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],attrs:{href:"#sidebar-1"},on:{click:function(t){t.preventDefault()}}},[e("b-icon",{attrs:{icon:"list"}})],1),t._v(" "),e("b-navbar-brand",{attrs:{href:"#"}},[t._v("\n      EntreLinhas\n  ")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#/"}},[t._v("Home")]),t._v(" "),this.isLogged?e("b-dropdown",{attrs:{size:"sm",variant:"label","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("b-label",{staticStyle:{color:"rgba(0, 0, 0, 0.5)"}},[t._v("Correções")])]},proxy:!0}],null,!1,2762537730)},[t._v(" "),e("b-dropdown-item-button",{on:{click:function(o){return t.abrirPagina("cadastrocorrecoes")}}},[t._v("Cadastrar")]),t._v(" "),e("b-dropdown-item-button",{on:{click:function(o){return t.abrirPagina("correcoes")}}},[t._v("Localizar")])],1):t._e()],1),t._v(" "),0==this.isLogged?e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Usuário"},model:{value:t.usuario,callback:function(o){t.usuario=o},expression:"usuario"}}),t._v(" "),e("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"password",placeholder:"Senha"},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.login()}},model:{value:t.senha,callback:function(o){t.senha=o},expression:"senha"}}),t._v(" "),e("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",variant:"success"},on:{click:function(o){return t.login()}}},[t._v("Login")])],1):e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-dropdown",{attrs:{size:"md",right:"",text:t.msgExibition,variant:"outline"}},[e("b-dropdown-item-button",{on:{click:function(o){return t.perfil()}}},[e("b-icon",{attrs:{icon:"person-circle","aria-hidden":"true"}}),t._v("\n        Perfil "),e("span",{staticClass:"sr-only"})],1),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item-button",[t._v("Mensagens")]),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item-button",{attrs:{variant:"danger"},on:{click:function(o){return t.logout()}}},[e("b-icon",{attrs:{icon:"x-circle","aria-hidden":"true"}}),t._v("\n          Sair\n      ")],1)],1)],1)],1)],1)},staticRenderFns:[]},h={name:"App",components:{NavBar:e("VU/8")(l,d,!1,null,null,null).exports},data:function(){return{id_usuario:0,id_pessoa:0}},methods:{atualizarUsuarios:function(t){t=JSON.parse(t),this.id_usuario=t.id_usuario||0,this.id_pessoa=t.id_pessoa||0}}},m={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("NavBar",{attrs:{id_pessoa:this.id_pessoa,id_usuario:this.id_usuario},on:{"atualizar-usuarios":this.atualizarUsuarios}}),this._v(" "),o("router-view",{attrs:{id_pessoa:this.id_pessoa,id_usuario:this.id_usuario}})],1)},staticRenderFns:[]};var b=e("VU/8")(h,m,!1,function(t){e("zsFv")},null,null).exports,p=e("/ocq");e("ZcrD"),e("NGoV");var v={name:"Home",data:function(){return{}},methods:{testeStore:function(){u.a.get("http://142.93.194.142:3333".concat("/rotacliente"),{params:{titulo:this.modalTitulo}}).then(function(t){}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Home    \n")])},staticRenderFns:[]},g=e("VU/8")(v,f,!1,null,null,null).exports,_={name:"Correcoes",data:function(){return{id:"",modalTitulo:"",titulo:"",descricao:"",arquivo:"",items:[],baseImage:null}},beforeCreate:function(){u.a.get("http://142.93.194.142:3333".concat("/rotacliente"),{})},methods:{showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments[1];this.$bvToast.toast(o,{title:"Aviso",variant:t,solid:!0})},limparTela:function(){this.id=null,this.titulo="",this.descricao="",this.arquivo=null,this.items=[]},buscarCorrecoes:function(){var t=this,o=this;u.a.get("http://142.93.194.142:3333".concat("/buscacorrecoes"),{params:{titulo:this.modalTitulo}}).then(function(e){t.items=[];for(var a=e.data.dados,s=0;s<a.length;s++)o.items.push({codigo:a[s].id,titulo:a[s].titulo,usuario:a[s].usuario.pessoa.nome_pessoa})}).catch(function(o){"Unauthorized"==o.response.data&&t.$router.push({path:"/"})})},selecionaCorrecao:function(t,o){var e=this,a=this;u.a.get("http://142.93.194.142:3333".concat("/dadoscorrecao"),{params:{id:t.codigo}}).then(function(t){var o=t.data.dados;a.id=o.id,a.titulo=o.titulo,a.descricao=o.descricao,a.arquivo=o.arquivo,a.$bvModal.hide("modal-buscCorrecoes")}).catch(function(t){e.showToast("warning",t)})},salvarCorrecao:function(){var t=this;u.a.post("http://142.93.194.142:3333".concat("/setcorrecoes"),{id_correcao:this.id||null,titulo:this.titulo||null,descricao:this.descricao||null,arquivo:this.baseImage||null,usuarioId:this.$store.getters.id_usuario}).then(function(o){t.showToast("success","Correção Cadastrada"),t.limparTela()}).catch(function(o){t.showToast("warning",o)})},buscarDados:function(){u.a.get("http://142.93.194.142:3333".concat("/dadoscorrecao"),{params:{id:this.id}})},cancelar:function(){this.id=0,this.titulo="",this.descricao="",this.arquivo=null},onFileChange:function(t){var o=t.target.files||t.dataTransfer.files;o.length&&this.createImage(o[0])},createImage:function(t){var o=new FileReader,e=this;o.onload=function(t){e.baseImage=t.target.result},o.readAsDataURL(t)}}},j={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",[e("b-row",[e("b-col",[e("h1",[t._v("Cadastro de Correções")])])],1),t._v(" "),e("b-row",[e("b-col",[e("b-row",[e("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-titulo"}},[t._v("Titulo:")])]),t._v(" "),e("b-row",[e("b-input-group",[e("b-form-input",{attrs:{id:"input-titulo"},model:{value:t.titulo,callback:function(o){t.titulo=o},expression:"titulo"}}),t._v(" "),e("b-button-group",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-buscCorrecoes",modifiers:{"modal-buscCorrecoes":!0}}],attrs:{variant:"outline-primary"}},[e("b-icon",{attrs:{icon:"search","aria-label":"Help"}})],1)],1)],1)],1),t._v(" "),e("b-row",[e("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-descr"}},[t._v("Descrição:")]),t._v(" "),e("b-form-textarea",{attrs:{id:"input-descr"},model:{value:t.descricao,callback:function(o){t.descricao=o},expression:"descricao"}})],1),t._v(" "),e("b-row",[e("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-arq"}},[t._v("Arquivo:")]),t._v(" "),e("b-form-file",{attrs:{id:"input-arq"},on:{change:t.onFileChange},model:{value:t.arquivo,callback:function(o){t.arquivo=o},expression:"arquivo"}})],1),t._v(" "),e("b-row",{staticStyle:{"margin-top":"5px"}},[e("b-col",[e("b-button",{attrs:{variant:"success"},on:{click:function(o){return t.salvarCorrecao()}}},[t._v("\n            Salvar\n          ")]),t._v(" "),e("b-button",{attrs:{variant:"danger"},on:{click:function(o){return t.cancelar()}}},[t._v("\n            Cancelar\n          ")])],1)],1)],1)],1),t._v(" "),e("b-modal",{attrs:{id:"modal-buscCorrecoes",title:"Buscar Correções","ok-only":""}},[e("b-container",[e("b-row",[e("b-col",{attrs:{sm:"9"}},[e("b-form-input",{model:{value:t.modalTitulo,callback:function(o){t.modalTitulo=o},expression:"modalTitulo"}})],1),t._v(" "),e("b-col",{attrs:{sm:"2"}},[e("b-button",{on:{click:function(o){return t.buscarCorrecoes()}}},[t._v("Buscar")])],1)],1),t._v(" "),e("b-row",[e("b-table",{attrs:{striped:"",hover:"",items:t.items,selectedClass:"table-info"},on:{"row-dblclicked":t.selecionaCorrecao}})],1)],1)],1)],1)},staticRenderFns:[]},w=e("VU/8")(_,j,!1,null,null,null).exports,k={name:"PerfilUsuario",data:function(){return{id:0,id_usuario:0,nome:"",sexo:[{text:"Masculino",value:"M"},{text:"Feminino",value:"F"}],sexoSel:"M",login:"",senha1:"",senha2:""}},mounted:function(){this.buscarDados()},methods:{showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments[1];this.$bvToast.toast(o,{title:"Aviso",variant:t,solid:!0})},buscarDados:function(){var t=this;u.a.get("http://142.93.194.142:3333".concat("/dadosusuario"),{params:{id:this.$store.getters.id_usuario}}).then(function(o){t.nome=o.data.dados.nome_pessoa,t.sexoSel=o.data.dados.sexo,t.login=o.data.dados.login}).catch(function(o){t.showToast("warning",o)})},salvarDados:function(){var t=this;u.a.post("http://142.93.194.142:3333".concat("/atualizardadosusuario"),{id_usuario:this.$store.getters.id_usuario,login:this.login,nome:this.nome,senha:"U2FsdGVkX19Gzk22WdqioHzRLrQF61iYO90+UPk2aMw=",sexo:this.sexoSel}).then(function(o){t.buscarDados(),t.showToast("success",o.data.msg)}).catch(function(o){t.showToast("warning",o)})}}},x={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{attrs:{fluid:""}},[e("b-card",{attrs:{"no-body":""}},[e("b-tabs",{attrs:{card:""}},[e("b-tab",{attrs:{title:"Dados do usuário",active:""}},[e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("label",{staticStyle:{"text-align":"left"},attrs:{for:"input-live"}},[t._v("Nome:")])]),t._v(" "),e("b-row",[e("b-form-input",{attrs:{id:"perfilNome",state:t.nameState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Informe seu nome",trim:""},model:{value:t.nome,callback:function(o){t.nome=o},expression:"nome"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("label",{attrs:{for:"compSexo"}},[t._v("Sexo")]),t._v(" "),e("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(o){var a=o.ariaDescribedby;return[e("b-form-radio-group",{attrs:{id:"compSexo",options:t.sexo,"aria-describedby":a,name:"radio-inline"},model:{value:t.sexoSel,callback:function(o){t.sexoSel=o},expression:"sexoSel"}})]}}])})],1)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("label",{attrs:{for:"perfilNomeUsuario"}},[t._v("Login")])]),t._v(" "),e("b-row",[e("b-input-group",{attrs:{prepend:"@"}},[e("b-form-input",{attrs:{id:"perfilNomeUsuario",placeholder:"Login"},model:{value:t.login,callback:function(o){t.login=o},expression:"login"}})],1)],1)],1),t._v(" "),e("b-col",[e("b-row",[e("label",{staticStyle:{"margin-left":"15px"},attrs:{for:"perfilSenhaUsuario1"}},[t._v("Senha")])]),t._v(" "),e("b-row",[e("b-col",[e("b-form-input",{attrs:{type:"password",id:"perfilSenhaUsuario1",placeholder:"Senha"},model:{value:t.senha1,callback:function(o){t.senha1=o},expression:"senha1"}})],1),t._v(" "),e("b-col",[e("b-form-input",{attrs:{type:"password",id:"perfilSenhaUsuario2",placeholder:"Senha"},model:{value:t.senha2,callback:function(o){t.senha2=o},expression:"senha2"}})],1)],1)],1)],1),t._v(" "),e("b-row",{staticStyle:{"margin-top":"5px"}},[e("b-col",[e("b-button",{attrs:{variant:"outline-success"},on:{click:function(o){return t.salvarDados()}}},[t._v("Salvar Dados")]),t._v(" "),e("b-button",{attrs:{variant:"outline-danger"},on:{click:function(o){return t.buscarDados()}}},[t._v("Cancelar")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},y=e("VU/8")(k,x,!1,null,null,null).exports,S=e("vn6w"),C=e.n(S),z={name:"Marcador",props:{numero:Number},data:function(){return{id:0,width:0,height:0,x:20,y:20,observacao:"",marcacao_item:1,ORTOGRAFIA:"ORTOGRAFIA",GERAL:"GERAL",REGENCIA:"REGENCIA",SEMANTICA:"SEMANTICA",CONCORDANCIA:"CONCORDANCIA",cor:this.CONCORDANCIA,iconWhite:"",tipo:"GERAL"}},mounted:function(){this.buscaDadosMarcador()},methods:{buscar:function(t){this.tipo=this.verificaTipo(t),this.atualizarDados()},atualizarDados:function(){var t=this;u.a.post("http://142.93.194.142:3333".concat("/setmarcador"),{x:t.x,y:t.y,width:t.width,height:t.height,id_correcao:t.$route.params.idCorrecao,id_marcacao:t.numero,marcacao_item:t.marcacao_item,observacao:t.observacao}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},stopResize:function(t,o,e,a){var s=!1;this.x!=t?s=!0:this.y!=o?s=!0:this.width!=e?s=!0:this.height!=a&&(s=!0),this.x=t,this.y=o,this.width=e,this.height=a,s&&this.atualizarDados()},stopDrag:function(t,o){var e=!1;this.x!=t?e=!0:this.y!=o&&(e=!0),this.x=t,this.y=o,e&&this.atualizarDados()},verificaTipo:function(t){return"O"===t?(this.iconWhite="S",this.marcacao_item=1,this.ORTOGRAFIA):"G"===t?(this.iconWhite="",this.marcacao_item=2,this.GERAL):"R"===t?(this.iconWhite="S",this.marcacao_item=3,this.REGENCIA):"S"===t?(this.iconWhite="S",this.marcacao_item=4,this.SEMANTICA):(this.marcacao_item=5,this.iconWhite="S",this.CONCORDANCIA)},removerMarcador:function(t){u.a.post("http://142.93.194.142:3333".concat("/deletemarcador"),{id:t}).then(function(o){o.data.result&&document.getElementById("marc_"+t).remove()}).catch(function(t){console.log(t)})},buscaDadosMarcador:function(){var t=this;u.a.get("http://142.93.194.142:3333".concat("/getmarcador"),{params:{id:t.numero}}).then(function(o){var e=o.data.dados;switch(t.height=e.tam_h,t.width=e.tam_w,t.x=e.pos_x,t.y=e.pos_y,t.marcacao_item=e.marcacao_item,t.observacao=e.observacao,e.marcacao_item){case 1:t.tipo=t.ORTOGRAFIA;break;case 2:t.tipo=t.GERAL;break;case 3:t.tipo=t.REGENCIA;break;case 4:t.tipo=t.SEMANTICA;break;case 5:t.tipo=t.CONCORDANCIA}}).catch(function(t){console.log(t)})}}},E={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vue-draggable-resizable",{attrs:{w:this.width,h:this.height,x:t.x,y:t.y,parent:!0},on:{dragstop:t.stopDrag,resizestop:t.stopResize}},[e("div",{class:t.tipo,staticStyle:{height:"100%",width:"100%"}},[e("b-row",[e("b-col",[t._v("\n        "+t._s(this.numero)+"\n      ")]),t._v(" "),e("b-col",[e("b-dropdown",{attrs:{size:"sm",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([this.iconWhite?{key:"button-content",fn:function(){return[e("b-icon",{staticStyle:{color:"white"},attrs:{icon:"gear-fill","font-scale":"1.2"}})]},proxy:!0}:{key:"button-content",fn:function(){return[e("b-icon",{staticStyle:{color:"black"},attrs:{icon:"gear-fill","font-scale":"1.2"}})]},proxy:!0}],null,!0)},[t._v(" "),e("b-dropdown-header",[t._v("Opcoes")]),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item",{on:{click:function(o){return t.buscar("O")}}},[t._v(" Ortografia ")]),t._v(" "),e("b-dropdown-item",{on:{click:function(o){return t.buscar("G")}}},[t._v(" Geral ")]),t._v(" "),e("b-dropdown-item",{on:{click:function(o){return t.buscar("R")}}},[t._v(" Regência ")]),t._v(" "),e("b-dropdown-item",{on:{click:function(o){return t.buscar("S")}}},[t._v(" Semântica ")]),t._v(" "),e("b-dropdown-item",{on:{click:function(o){return t.buscar("C")}}},[t._v(" Concordância ")]),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modalObs"+t.numero,expression:"`modalObs${numero}`"}]},[t._v(" Observação ")]),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item",{on:{click:function(o){return t.removerMarcador(t.numero)}}},[t._v(" Excluir ")])],1)],1)],1),t._v(" "),[e("b-modal",{attrs:{id:"modalObs"+t.numero,title:"Observação","ok-only":""},on:{ok:function(o){return t.atualizarDados()}}},[e("b-form-textarea",{model:{value:t.observacao,callback:function(o){t.observacao=o},expression:"observacao"}})],1)]],2)])},staticRenderFns:[]};var N=e("VU/8")(z,E,!1,function(t){e("klv7")},null,null).exports,O={name:"SideBar",data:function(){return{}},methods:{},props:{btnClickHandler:{type:Function},nome:String}},R={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("b-sidebar",{attrs:{id:"sidebar-1",title:"Opções",shadow:""}},[o("div",{staticClass:"px-3 py-2"},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],on:{click:this.btnClickHandler}},[this._v(" Adicionar Marcação ")])],1)])],1)},staticRenderFns:[]},A={name:"Correcao",data:function(){return{listMarc:[],numero:0,arquivo:""}},components:{Marcador:N,SideBar:e("VU/8")(O,R,!1,null,null,null).exports},mounted:function(){this.buscarCorrecao(this.$route.params.idCorrecao)},methods:{addMarcacao:function(){var t=this;u.a.post("http://142.93.194.142:3333".concat("/setmarcador"),{x:100,y:10,width:120,height:50,marcacao_item:2,id_correcao:this.$route.params.idCorrecao}).then(function(o){t.listMarc.push(o.data.id)}).catch(function(t){console.log(t)})},excluir:function(){console.log("alex")},buscarCorrecao:function(t){var o=this;u.a.get("http://142.93.194.142:3333".concat("/dadoscorrecao"),{params:{id:t}}).then(function(e){o.arquivo=e.data.dados.arquivo,u.a.get("http://142.93.194.142:3333".concat("/getmarcadores"),{params:{id_correcao:t}}).then(function(t){for(var e=t.data.dados,a=0;a<=e.length;a++)o.listMarc.push(e[a].id)}).catch(function(t){console.log(t)})}).catch(function(t){alert(t)})}}},F={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("SideBar",{attrs:{btnClickHandler:this.addMarcacao,nome:"teste"}}),t._v(" "),t._l(t.listMarc,function(o){return e("Marcador",{key:o,attrs:{tipo:"GERAL",actExcluir:t.excluir,id:"marc_"+o,numero:o}})}),t._v(" "),e("b-img",{attrs:{src:this.arquivo,fluid:""}})],2)},staticRenderFns:[]},I=e("VU/8")(A,F,!1,null,null,null).exports,D=e("PJh5"),M=e.n(D),T={name:"ListaCorrecoes",data:function(){return{tituloCorrecao:"",dtInicio:"",dtFim:"",fields:["titulo","dataCriacao","opções"],items:[]}},methods:{abrirCorrecao:function(t){this.$router.push({path:"/correcao/"+t})},buscarCorrecoes:function(){var t=this,o=this;u.a.get("http://142.93.194.142:3333".concat("/buscacorrecoes"),{params:{titulo:this.tituloCorrecao,dtInicio:M()(this.dtInicio).format("yyyy-MM-DD"),dtFim:M()(this.dtFim).format("yyyy-MM-DD")}}).then(function(e){t.items=[];for(var a=e.data.dados,s=0;s<a.length;s++)o.items.push({codigo:a[s].id,titulo:a[s].titulo,dataCriacao:M()(a[s].dtCriacao).format("DD/MM/yyyy")})}).catch(function(o){"Unauthorized"==o.response.data&&t.$router.push({path:"/"})})}},created:function(){var t=new Date,o=new Date;this.dtInicio=o,this.dtFim=t,o.setMonth(o.getMonth()-1)}},U={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",[e("b-row",[e("b-col",[e("h1",[t._v(" Lista de Correções ")])])],1),t._v(" "),e("b-row",[e("b-input-group",[e("b-form-input",{attrs:{id:"input-titulo"},model:{value:t.tituloCorrecao,callback:function(o){t.tituloCorrecao=o},expression:"tituloCorrecao"}}),t._v(" "),e("b-button-group",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(o){return t.buscarCorrecoes()}}},[e("b-icon",{attrs:{icon:"search","aria-label":"Help"}})],1)],1)],1)],1),t._v(" "),e("b-row",[e("b-col",[e("label",{attrs:{for:"dtInicio"}},[t._v("Data inicio")]),t._v(" "),e("b-form-datepicker",{attrs:{id:"dtInicio"},model:{value:t.dtInicio,callback:function(o){t.dtInicio=o},expression:"dtInicio"}})],1),t._v(" "),e("b-col",[e("label",{attrs:{for:"dtFim"}},[t._v("Data Final")]),t._v(" "),e("b-form-datepicker",{attrs:{id:"dtFim"},model:{value:t.dtFim,callback:function(o){t.dtFim=o},expression:"dtFim"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("b-row",[e("b-table",{attrs:{items:t.items,fields:t.fields,striped:""},scopedSlots:t._u([{key:"cell(opções)",fn:function(o){return[e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.abrirCorrecao(o.item.codigo)}}},[e("b-icon",{attrs:{icon:"folder2-open","aria-label":"Help"}})],1)]}}])})],1)],1)},staticRenderFns:[]},q=e("VU/8")(T,U,!1,null,null,null).exports,L={render:function(){var t=this.$createElement;return(this._self._c||t)("b-container",[this._v("\n  alex\n")])},staticRenderFns:[]},H=e("VU/8")({name:"Teste",data:function(){return{}}},L,!1,null,null,null).exports;n.default.use(p.a);var P=[{path:"/",name:"Home",component:g},{path:"/teste",name:"Teste",componente:H},{path:"/cadastrocorrecoes",name:"CadastroCorrecoes",component:w},{path:"/perfilusuario",name:"Perfil",component:y},{path:"/correcao/:idCorrecao",name:"Correcao",component:I},{path:"/correcoes",name:"Correcoes",component:q}],G=new p.a({routes:P});G.beforeEach(function(t,o,e){t.matched.some(function(t){return t.meta.requiresSession});G.app.$session.exists("_SessEntreLinhas")?(console.log("tem"),e()):(console.log("naotem"),G.app.$session.destroy(),e())});var $=G,V=e("Tqaz"),B=(e("Jmt5"),e("9M+g"),e("nd5n"),e("MU8w"),e("NYxO"));n.default.use(B.a);var W=new B.a.Store({state:{id_usuario:0,id_pessoa:0},mutations:{setIdUsuario:function(t,o){t.id_usuario=o},setIdPessoa:function(t,o){t.id_pessoa=o}},getters:{id_usuario:function(t){return t.id_usuario},id_pessoa:function(t){return t.id_pessoa}}}),J=e("18Sv"),X=e.n(J),Q="";u.a.interceptors.request.use(function(t){return t.headers={"x-access-token":JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas,"Content-type":"application/json"},t},function(t){return s.a.reject(t)}),u.a.interceptors.response.use(function(t){return function(t){return 401===t.status&&(JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas=""),Q=t.data._sessEntreLinhasRefresh,JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas=Q,t}(t)},function(t){return function(t){return JSON.parse(sessionStorage["vue-session-key"])._SessEntreLinhas="",window.location="/",console.log("error"),s.a.reject(t)}(t)}),n.default.config.productionTip=!1,n.default.use(V.a),n.default.use(V.b),n.default.use(X.a),n.default.component("vue-draggable-resizable",C.a),new n.default({el:"#app",router:$,store:W,components:{App:b},template:"<App/>"})},klv7:function(t,o){},nd5n:function(t,o){},uslO:function(t,o,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function s(t){return e(n(t))}function n(t){var o=a[t];if(!(o+1))throw new Error("Cannot find module '"+t+"'.");return o}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="uslO"},zsFv:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.45c3dded559fbb2f9568.js.map