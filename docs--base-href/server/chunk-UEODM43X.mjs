import './polyfills.server.mjs';
import{a as L}from"./chunk-FAFVEN6D.mjs";import{a as M}from"./chunk-VDTRH2DN.mjs";import{a as F}from"./chunk-HZ2ARV5H.mjs";import"./chunk-FWEJKC2A.mjs";import{m as V}from"./chunk-OTRX2MO3.mjs";import{p as C}from"./chunk-XKNWOYGI.mjs";import{b as E,c as R,d as B}from"./chunk-QQIPCKVA.mjs";import{Ab as g,Bb as u,Ja as s,Pa as y,T as f,X as b,bb as S,fa as o,ga as l,gb as e,hb as n,ib as d,jb as N,kb as _,qa as w,rb as I,sb as k,tb as x,ub as c,vb as v,wb as T,yb as h}from"./chunk-PLEOA6LX.mjs";import"./chunk-VVCT4QZE.mjs";var A=["navbarSupportedContent"],D=(()=>{class m{constructor(){this._UserService=f(F),this._NytranslateService=f(M),this._TranslateService=f(E),this._PLATFORM_ID=f(w),this._Renderer2=f(y)}ngOnInit(){C(this._PLATFORM_ID)&&localStorage.getItem("lang")!=null&&this._NytranslateService.useChoiceLang()}ngAfterContentInit(){C(this._PLATFORM_ID)&&localStorage.getItem("gender")!==null&&(localStorage.getItem("gender")=="boy"?this.boy():localStorage.getItem("gender")=="girl"&&this.girl())}boy(){localStorage.setItem("gender","boy");let r=document.getElementById("body"),t=document.getElementById("addmodal");this._Renderer2.removeClass(r,"girl-light"),this._Renderer2.addClass(r,"boy-light"),this._Renderer2.removeClass(t,"girl-light"),this._Renderer2.addClass(t,"boy-light")}girl(){localStorage.setItem("gender","girl");let r=document.getElementById("body"),t=document.getElementById("addmodal");this._Renderer2.removeClass(r,"boy-light"),this._Renderer2.addClass(r,"girl-light"),this._Renderer2.removeClass(t,"boy-light"),this._Renderer2.addClass(t,"girl-light")}logout(){this._UserService.logout()}lang(r){this._NytranslateService.changeLang(r)}closeIteamModal(){this.navbarSupportedContent.nativeElement.classList.contains("show")&&this._Renderer2.removeClass(this.navbarSupportedContent.nativeElement,"show")}static{this.\u0275fac=function(t){return new(t||m)}}static{this.\u0275cmp=b({type:m,selectors:[["app-nav-node"]],viewQuery:function(t,i){if(t&1&&I(A,5),t&2){let a;k(a=x())&&(i.navbarSupportedContent=a.first)}},standalone:!0,features:[h],decls:52,vars:28,consts:[["navbarSupportedContent",""],["id-","navbar2",1,"navbar","navbar-expand-lg","position-fixed","top-0","w-100","py-3","my-nav2"],[1,"container-fluid"],["routerLink","/home",1,"navbar-brand"],["src","./assets/images/logo.jpg","width","50px","alt","logo image",1,"rounded-circle"],[1,"mx-1"],[1,"fa-brands","fa-d-and-d"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end","align-items-center"],[1,"navbar-nav","mb-2","mb-lg-0"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle","text-light"],[1,"fa-regular","fa-face-smile","text-primary-emphasis"],[1,"fa-regular","fa-face-smile","text-danger-emphasis","mx-1"],[1,"dropdown-menu","text-center"],[3,"click"],[1,"dropdown-item","bg-primary-subtle","text-primary-emphasis"],[1,"dropdown-divider"],[1,"dropdown-item","bg-danger-subtle","text-danger-emphasis"],[1,"fa-solid","fa-language","mx-1","text-main"],[1,"dropdown-item","text-main"],[1,"nav-item","bg-danger-subtle","rounded-3","text-center","w-100",3,"click"],[1,"nav-link","text-main",3,"click"]],template:function(t,i){if(t&1){let a=N();e(0,"nav",1)(1,"div",2)(2,"a",3),d(3,"img",4),e(4,"b",5),c(5),g(6,"translate"),n(),e(7,"b"),d(8,"i",6),n(),e(9,"b",5),c(10),g(11,"translate"),n()(),e(12,"button",7),d(13,"span",8),n(),e(14,"div",9,0)(16,"ul",10)(17,"li",11)(18,"a",12),d(19,"i",13)(20,"i",14),n(),e(21,"ul",15)(22,"li",16),_("click",function(){return o(a),l(i.closeIteamModal())})("click",function(){return o(a),l(i.boy())}),e(23,"a",17),c(24),g(25,"translate"),n()(),e(26,"li"),d(27,"hr",18),n(),e(28,"li",16),_("click",function(){return o(a),l(i.closeIteamModal())})("click",function(){return o(a),l(i.girl())}),e(29,"a",19),c(30),g(31,"translate"),n()()()(),e(32,"li",11)(33,"a",12),c(34),g(35,"translate"),d(36,"i",20),n(),e(37,"ul",15)(38,"li",16),_("click",function(){return o(a),l(i.closeIteamModal())})("click",function(){return o(a),l(i.lang("ar"))}),e(39,"a",21),c(40),g(41,"translate"),n()(),e(42,"li"),d(43,"hr",18),n(),e(44,"li",16),_("click",function(){return o(a),l(i.closeIteamModal())})("click",function(){return o(a),l(i.lang("en"))}),e(45,"a",21),c(46),g(47,"translate"),n()()()(),e(48,"li",22),_("click",function(){return o(a),l(i.closeIteamModal())}),e(49,"a",23),_("click",function(){return o(a),l(i.logout())}),c(50),g(51,"translate"),n()()()()()()}t&2&&(s(5),v(u(6,12,"navbar.pen")),s(5),v(u(11,14,"navbar.pepar")),s(14),v(u(25,16,"navnode.Boy")),s(6),v(u(31,18,"navnode.Girl")),s(4),T(" ",u(35,20,"navnode.Lang"),""),s(4),S("bg-success-subtle",i._TranslateService.currentLang=="ar"),s(2),v(u(41,22,"navnode.Arabic")),s(4),S("bg-success-subtle",i._TranslateService.currentLang=="en"),s(2),v(u(47,24,"navnode.English")),s(4),v(u(51,26,"navnode.Logout")))},dependencies:[B,R]})}}return m})();var Y=(()=>{class m{static{this.\u0275fac=function(t){return new(t||m)}}static{this.\u0275cmp=b({type:m,selectors:[["app-node-blank"]],standalone:!0,features:[h],decls:3,vars:0,template:function(t,i){t&1&&d(0,"app-nav-node")(1,"router-outlet")(2,"app-footer")},dependencies:[V,D,L]})}}return m})();export{Y as NodeBlankComponent};
