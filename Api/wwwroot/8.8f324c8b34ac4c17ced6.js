(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(r,t,e){"use strict";e.r(t),e.d(t,"OrdersModule",function(){return g});var s=e("SVse"),o=e("PCNd"),c=e("iInd"),i=e("8Y7J"),b=e("GlbF"),n=e("AytR"),d=e("IheW");let a=(()=>{class r{constructor(r){this.http=r,this.baseUrl=n.a.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(r){return this.http.get(this.baseUrl+"orders/"+r)}}return r.\u0275fac=function(t){return new(t||r)(i.Wb(d.b))},r.\u0275prov=i.Ib({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var l=e("GJcC"),u=e("PoZw");function h(r,t){if(1&r&&(i.Sb(0,"div",2),i.Sb(1,"div",3),i.Nb(2,"app-basket-summary",4),i.Rb(),i.Sb(3,"div",5),i.Nb(4,"app-order-totals",6),i.Rb(),i.Rb()),2&r){const r=i.bc();i.Bb(2),i.hc("items",r.order.orderItems)("isBasket",!1)("isOrder",!0),i.Bb(2),i.hc("shippingPrice",r.order.shippingPrice)("subtotal",r.order.subtotal)("total",r.order.total)}}let p=(()=>{class r{constructor(r,t,e){this.route=r,this.breadcrumbService=t,this.orderService=e,this.breadcrumbService.set("@OrderDetailed"," ")}ngOnInit(){this.orderService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(r=>{this.order=r,this.breadcrumbService.set("@OrderDetailed",`Order# ${r.id} - ${r.status}`)},r=>{console.log(r)})}}return r.\u0275fac=function(t){return new(t||r)(i.Mb(c.a),i.Mb(b.c),i.Mb(a))},r.\u0275cmp=i.Gb({type:r,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(r,t){1&r&&(i.Sb(0,"div",0),i.xc(1,h,5,6,"div",1),i.Rb()),2&r&&(i.Bb(1),i.hc("ngIf",t.order))},directives:[s.m,l.a,u.a],styles:[""]}),r})();function S(r,t){if(1&r&&(i.Sb(0,"tr",6),i.Sb(1,"th"),i.zc(2),i.Rb(),i.Sb(3,"th"),i.zc(4),i.cc(5,"date"),i.Rb(),i.Sb(6,"th"),i.zc(7),i.cc(8,"currency"),i.Rb(),i.Sb(9,"th"),i.zc(10),i.Rb(),i.Rb()),2&r){const r=t.$implicit;i.jc("routerLink","/orders/",r.id,""),i.Bb(2),i.Bc("# ",r.id,""),i.Bb(2),i.Ac(i.ec(5,5,r.orderDate,"medium")),i.Bb(3),i.Ac(i.dc(8,8,r.total)),i.Bb(3),i.Ac(r.status)}}const f=[{path:"",component:(()=>{class r{constructor(r){this.orderService=r}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe(r=>{this.orders=r},r=>{console.log(r)})}}return r.\u0275fac=function(t){return new(t||r)(i.Mb(a))},r.\u0275cmp=i.Gb({type:r,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thread-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(r,t){1&r&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"table",3),i.Sb(4,"thead",4),i.Sb(5,"tr"),i.Sb(6,"th"),i.zc(7,"Order"),i.Rb(),i.Sb(8,"th"),i.zc(9,"Date"),i.Rb(),i.Sb(10,"th"),i.zc(11,"Total"),i.Rb(),i.Sb(12,"th"),i.zc(13,"Status"),i.Rb(),i.Rb(),i.Rb(),i.Sb(14,"tbody"),i.xc(15,S,11,10,"tr",5),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&r&&(i.Bb(15),i.hc("ngForOf",t.orders))},directives:[s.l,c.d],pipes:[s.f,s.d],styles:[""]}),r})()},{path:":id",component:p,data:{breadcrumb:{alias:"OrderDetailed"}}}];let m=(()=>{class r{}return r.\u0275mod=i.Kb({type:r}),r.\u0275inj=i.Jb({factory:function(t){return new(t||r)},imports:[[c.g.forChild(f)],c.g]}),r})(),g=(()=>{class r{}return r.\u0275mod=i.Kb({type:r}),r.\u0275inj=i.Jb({factory:function(t){return new(t||r)},imports:[[s.c,m,o.a]]}),r})()}}]);