(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{WMCE:function(t,e,n){"use strict";n.r(e),n.d(e,"routes",function(){return h}),n.d(e,"LandingModule",function(){return b});var c=n("ofXK"),o=n("tyNb"),i=n("PCNd"),a=n("/RaO"),r=n("fXoL"),g=n("XhcP"),s=n("XiUz"),d=n("bTqV"),p=n("Wp6s"),m=n("NFeN"),l=n("/t3+"),u=n("znSr");const h=[{path:"",component:(()=>{class t{constructor(t,e){this.appSettings=t,this.router=e,this.settings=this.appSettings.settings}ngOnInit(){this.settings.rtl=!1}getDemo(t){1==t&&(this.settings.theme="green",this.settings.rtl=!1,this.router.navigate(["/"])),2==t&&(this.settings.theme="green",this.settings.rtl=!0,this.router.navigate(["/"])),3==t&&(this.settings.theme="blue",this.settings.rtl=!1,this.router.navigate(["/admin"])),4==t&&(this.settings.theme="blue",this.settings.rtl=!0,this.router.navigate(["/admin"]))}getSkin(t){1==t&&(this.settings.theme="blue"),2==t&&(this.settings.theme="green"),3==t&&(this.settings.theme="red"),4==t&&(this.settings.theme="pink"),5==t&&(this.settings.theme="purple"),6==t&&(this.settings.theme="grey"),this.settings.rtl=!1,this.router.navigate(["/"])}scrollToDemos(){document.getElementById("demos").scrollIntoView({behavior:"smooth"})}goToTop(){document.getElementById("top").scrollIntoView({behavior:"smooth"})}}return t.\u0275fac=function(e){return new(e||t)(r.Xb(a.a),r.Xb(o.d))},t.\u0275cmp=r.Rb({type:t,selectors:[["app-landing"]],decls:88,vars:16,consts:[[1,"landing-page"],["id","top",1,"p-3","header-section"],[1,"theme-container"],["fxLayout","row wrap",1,"content"],["fxFlex","100",1,"mb-5","py-3"],["routerLink","/admin","fxLayout","row","fxLayoutAlign","start center",1,"logo"],["fxFlex","100",1,"py-5"],[1,"mt-3"],[1,"py-5"],["mat-raised-button","","color","primary",1,"uppercase","mx-2",3,"click"],["mat-raised-button","","color","warn","href","https://themeforest.net/item/emporium-angular-material-design-ecommerce-template/21668189","target","_blank",1,"uppercase","mx-2"],[1,"p-3"],["fxLayout","row wrap","fxLayoutAlign","center","id","demos"],["fxFlex","100",1,"text-center","py-4"],[1,"fw-500"],["fxFlex","100",1,"main-wrapper"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","50",1,"box"],["mat-raised-button","","color","primary","type","submit",1,"uppercase",3,"click"],["mat-raised-button","","color","warn","type","submit",1,"uppercase",3,"click"],["fxFlex","100",1,"text-center","mt-3"],["fxFlex","100","fxFlex.gt-sm","33.3","fxFlex.sm","50",1,"box"],["fxFlex","100",1,"py-4","px-3","text-right"],["mat-mini-fab","","color","warn",3,"click"],[1,"copyright"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","space-between center",1,"w-100"],["ngClass.xs","mt-1"],["mat-button","","href","http://themeseason.com/","target","_blank"]],template:function(t,e){1&t&&(r.dc(0,"mat-drawer-container",0),r.dc(1,"div",1),r.dc(2,"div",2),r.dc(3,"div",3),r.dc(4,"div",4),r.dc(5,"a",5),r.dc(6,"span"),r.Qc(7,"Emporium"),r.cc(),r.cc(),r.cc(),r.dc(8,"div",6),r.dc(9,"h1"),r.Qc(10,"Angular Material Design eCommerce Template"),r.cc(),r.dc(11,"h4",7),r.Qc(12,"Emporium implements the official Angular Material Design components and built with Angular CLI."),r.cc(),r.dc(13,"h4"),r.Qc(14,"No Bootstrap!, No jQuery! and Only TypeScript! Start creating your app with Emporium template, 6 color styles, 20+ pages."),r.cc(),r.dc(15,"div",8),r.dc(16,"button",9),r.lc("click",function(){return e.scrollToDemos()}),r.Qc(17,"View demos"),r.cc(),r.dc(18,"a",10),r.Qc(19,"Purchase now"),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(20,"div",11),r.dc(21,"div",2),r.dc(22,"div",12),r.dc(23,"div",13),r.dc(24,"h1",14),r.Qc(25,"Check out our demo styles"),r.cc(),r.dc(26,"p"),r.Qc(27,"Fully responsive, organized folder structure, clean & customizable code, easy to use and much more..."),r.cc(),r.cc(),r.dc(28,"div",15),r.dc(29,"div",16),r.dc(30,"div",17),r.dc(31,"h2"),r.Qc(32,"eCommerce"),r.cc(),r.Yb(33,"mat-card"),r.dc(34,"button",18),r.lc("click",function(){return e.getDemo(1)}),r.Qc(35,"View demo"),r.cc(),r.dc(36,"button",19),r.lc("click",function(){return e.getDemo(2)}),r.Qc(37,"RTL"),r.cc(),r.cc(),r.dc(38,"div",17),r.dc(39,"h2"),r.Qc(40,"Admin Panel"),r.cc(),r.Yb(41,"mat-card"),r.dc(42,"button",18),r.lc("click",function(){return e.getDemo(3)}),r.Qc(43,"View demo"),r.cc(),r.dc(44,"button",19),r.lc("click",function(){return e.getDemo(4)}),r.Qc(45,"RTL"),r.cc(),r.cc(),r.dc(46,"div",20),r.dc(47,"h1"),r.Qc(48,"Skins"),r.cc(),r.dc(49,"p"),r.Qc(50,"Choose one of your favorite color style"),r.cc(),r.cc(),r.dc(51,"div",21),r.dc(52,"h2"),r.Qc(53,"Blue"),r.cc(),r.Yb(54,"mat-card"),r.cc(),r.dc(55,"div",21),r.dc(56,"h2"),r.Qc(57,"Green"),r.cc(),r.Yb(58,"mat-card"),r.cc(),r.dc(59,"div",21),r.dc(60,"h2"),r.Qc(61,"Red"),r.cc(),r.Yb(62,"mat-card"),r.cc(),r.dc(63,"div",21),r.dc(64,"h2"),r.Qc(65,"Pink"),r.cc(),r.Yb(66,"mat-card"),r.cc(),r.dc(67,"div",21),r.dc(68,"h2"),r.Qc(69,"Purple"),r.cc(),r.Yb(70,"mat-card"),r.cc(),r.dc(71,"div",21),r.dc(72,"h2"),r.Qc(73,"Grey"),r.cc(),r.Yb(74,"mat-card"),r.cc(),r.dc(75,"div",22),r.dc(76,"button",23),r.lc("click",function(){return e.goToTop()}),r.dc(77,"mat-icon"),r.Qc(78,"keyboard_arrow_up"),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(79,"mat-toolbar",24),r.dc(80,"div",2),r.dc(81,"div",25),r.dc(82,"p",26),r.Qc(83,"Copyright \xa9 2019 All Rights Reserved"),r.cc(),r.dc(84,"p"),r.Qc(85,"Designed & Developed by "),r.dc(86,"a",27),r.Qc(87,"ThemeSeason"),r.cc(),r.cc(),r.cc(),r.cc(),r.cc(),r.cc()),2&t&&(r.Lb(33),r.Lc("background-image","url(assets/images/demos/homepage.jpg)"),r.Lb(8),r.Lc("background-image","url(assets/images/demos/admin.jpg)"),r.Lb(13),r.Lc("background-image","url(assets/images/demos/blue.jpg)"),r.Lb(4),r.Lc("background-image","url(assets/images/demos/green.jpg)"),r.Lb(4),r.Lc("background-image","url(assets/images/demos/red.jpg)"),r.Lb(4),r.Lc("background-image","url(assets/images/demos/pink.jpg)"),r.Lb(4),r.Lc("background-image","url(assets/images/demos/purple.jpg)"),r.Lb(4),r.Lc("background-image","url(assets/images/demos/grey.jpg)"))},directives:[g.b,s.d,s.a,o.f,s.c,d.b,d.a,p.a,m.a,l.a,u.a],styles:['.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]{position:relative;overflow:hidden;background-repeat:no-repeat;background-size:cover;background-position:50%;background-image:url(bg.ad46aecda9e54b51096f.jpg)}.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;z-index:1;width:100%;height:100%;background:rgba(0,0,0,.81)}.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;z-index:9;color:#fff;text-align:center}.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px;font-weight:400}.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:300;max-width:850px;margin:0 auto}.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]{margin:-16px}.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{text-align:center;padding:16px;margin-bottom:24px}.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:16px 0;font-weight:500}.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{margin-bottom:24px;background-size:cover;height:300px;background-position:top;transition:5s;box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .mat-card[_ngcontent-%COMP%]{background-position:bottom}.landing-page[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0 6px}.landing-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.landing-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{margin-top:36px;height:64px}.landing-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:400;margin-bottom:0;line-height:1.2}']}),t})(),pathMatch:"full"}];let b=(()=>{class t{}return t.\u0275mod=r.Vb({type:t}),t.\u0275inj=r.Ub({factory:function(e){return new(e||t)},imports:[[c.c,o.g.forChild(h),i.a]]}),t})()}}]);