(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,a,t){e.exports=t.p+"static/media/loader2.99b2a16f.gif"},132:function(e,a,t){e.exports=t(162)},161:function(e,a,t){},162:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),i=t.n(c),l=t(26),o=t(15),s=t(13),m=t(36),u=t(208),d=t(218),p=t(204),f=t(163),E=t(205),g=t(206),b=t(203),h=t(207),x=t(70),y=t.n(x),v=t(65),N=t.n(v),O=t(66),C=t.n(O),j=t(67),w=t.n(j),k=t(61),A=t.n(k),T=t(104),I=t.n(T),R=t(105),S=t.n(R),P=[{title:"Mobiles",path:"/products/category/mobiles",icon:r.a.createElement(A.a,null)},{title:"Laptops",path:"/products/category/laptops",icon:r.a.createElement(N.a,null)},{title:"Headsets",path:"/products/category/headsets",icon:r.a.createElement(C.a,null)},{title:"Speakers",path:"/products/category/speakers",icon:r.a.createElement(w.a,null)}],_=[{title:"Order",path:"/order",icon:r.a.createElement(I.a,null)},{title:"My profile",path:"/my-profile",icon:r.a.createElement(S.a,null)}],D=t(202),U=Object(D.a)((function(e){var a,t,n;return{drawer:{width:"250px"},header:(a={display:"flex",flexDirection:"column"},Object(s.a)(a,e.breakpoints.up("sm"),{flexDirection:"row",alignItems:"center"}),Object(s.a)(a,"justifyContent","space-between"),Object(s.a)(a,"alignItems","flex-start"),Object(s.a)(a,"backgroundColor","#fff"),Object(s.a)(a,"color","#4E5DAA"),Object(s.a)(a,"padding","10px"),a),top:{display:"flex",justifyContent:"space-between"},smallCart:Object(s.a)({},e.breakpoints.up("md"),{display:"none"}),themeColor:{color:"#4E5DAA"},sidenav:(t={},Object(s.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(s.a)(t,"display","inline"),t),topnav:(n={},Object(s.a)(n,e.breakpoints.up("md"),{display:"flex",justifyContent:"center",alignItems:"center"}),Object(s.a)(n,"display","none"),Object(s.a)(n,"& button",{marginRight:"10px"}),n),center:{display:"flex",alignItems:"center",justifyContent:"center",padding:"0 15px"},icon:{color:"#4E5DAA",fontSize:"20px",fontFamily:"Roboto Slab",fontWeight:800},searchBox:{display:"flex",justifyContent:"center",padding:"5px 0",width:"100%"},srearchField:{width:"100%"},srcbtn:{marginLeft:"-10px",backgroundColor:"#3f51b5"}}}),{index:1}),B=function(e){var a=e.anchor,t=e.toggleDrawer,n=e.isAuth,c=e.logout,i=U(),l=Object(o.g)(),s=function(){return r.a.createElement("div",{onClick:t("left",!1),className:i.drawer},r.a.createElement(b.a,null),r.a.createElement(p.a,null,P.map((function(e,a){var t=e.icon,n=e.title,c=e.path;return r.a.createElement(f.a,{button:!0,key:a,onClick:function(){return l.push(c)}},r.a.createElement(E.a,null,t),r.a.createElement(g.a,{primary:n}))}))),r.a.createElement(b.a,null),r.a.createElement(p.a,null,_.map((function(e,a){var t=e.icon,n=e.title,c=e.path;return r.a.createElement(f.a,{button:!0,key:a,onClick:function(){return l.push(c)}},r.a.createElement(E.a,null,t),r.a.createElement(g.a,{primary:n}))})),n?r.a.createElement(f.a,{button:!0,onClick:c},r.a.createElement(E.a,null,r.a.createElement(y.a,null)),r.a.createElement(g.a,{primary:"logout"})):null))};return r.a.createElement(d.a,{anchor:"left",open:a.left,onClose:t("left",!1)},r.a.createElement(h.a,null),r.a.createElement(s,null))},z=t(211),L=t(209),G=t(210),q=t(212),F=t(216),M=t(121),H=t(213),Y=t(108),Q=t.n(Y),V=t(110),Z=t.n(V),W=t(84),X=t.n(W),J=t(83),K=t.n(J),$=t(19),ee=t(9),ae=t(22),te=t.n(ae),ne=function(e){e({type:"RESETCART"}),e({type:"LOGOUT_USER"})};var re=Object($.b)((function(e){var a=e.cart,t=e.auth;return{noOfItems:a.noOfItems,isAuth:t.isAuth}}))((function(e){var a=e.noOfItems,t=e.isAuth,c=e.dispatch,i=Object(n.useState)({left:!1}),l=Object(m.a)(i,2),d=l[0],p=l[1],f=r.a.useState(null),b=Object(m.a)(f,2),h=b[0],x=b[1],v=r.a.useState(null),N=Object(m.a)(v,2),O=N[0],C=N[1],j=Object(o.g)(),w=U(),k=function(){return c(ne)},A=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&p(Object(s.a)({},e,a))}};return r.a.createElement(u.a,{className:w.header,position:"static"},r.a.createElement(L.a,{container:!0},r.a.createElement(L.a,{item:!0,xs:12,md:2},r.a.createElement("div",{className:w.top},r.a.createElement("div",null,r.a.createElement("div",{className:w.sidenav},r.a.createElement(G.a,{onClick:A("left",!0)},r.a.createElement(Q.a,{className:w.themeColor})),r.a.createElement(B,{anchor:d,toggleDrawer:A,isAuth:t,logout:k})),r.a.createElement(z.a,{className:w.icon,onClick:function(){return j.push("/")}},"ECART")),r.a.createElement(G.a,{color:"primary",className:w.smallCart,onClick:function(){j.push("/user/cart")}},r.a.createElement(q.a,{badgeContent:a,color:"primary"}," ",r.a.createElement(K.a,null)," ")," "))),r.a.createElement(L.a,{item:!0,xs:12,md:6,className:w.center},r.a.createElement("div",{className:w.searchBox},r.a.createElement(F.a,{className:w.srearchField,label:"Search Product",variant:"outlined",size:"small"}),r.a.createElement(z.a,{className:w.srcbtn,variant:"contained",color:"primary",size:"small"},r.a.createElement(Z.a,null)))),r.a.createElement(L.a,{item:!0,md:4,className:w.topnav},r.a.createElement(z.a,{className:w.themeColor,onClick:function(e){x(e.currentTarget)},disableElevation:!0},"Category ",r.a.createElement(X.a,{className:w.themeColor})),r.a.createElement(M.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:function(){x(null)}},P.map((function(e,a){return r.a.createElement(H.a,{key:a,onClick:function(){x(null),j.push(e.path)}},r.a.createElement(E.a,null,e.icon),r.a.createElement(g.a,{primary:e.title}))}))),r.a.createElement(z.a,{className:w.themeColor,onClick:function(e){C(e.currentTarget)},disableElevation:!0},"option ",r.a.createElement(X.a,{className:w.themeColor})),r.a.createElement(M.a,{id:"simple-menu",anchorEl:O,keepMounted:!0,open:Boolean(O),onClose:function(){C(null)}},_.map((function(e,a){return"Cart"===e.title?null:r.a.createElement(H.a,{key:a,onClick:function(){C(null),j.push(e.path)}},r.a.createElement(E.a,null,e.icon),r.a.createElement(g.a,{primary:e.title}))})),t?r.a.createElement(H.a,{onClick:function(){C(null),k()}},r.a.createElement(E.a,null,r.a.createElement(y.a,null)),r.a.createElement(g.a,{primary:"logout"})):null),r.a.createElement(G.a,{color:"primary",onClick:function(){j.push("/user/cart")}},r.a.createElement(q.a,{badgeContent:a,color:"primary"}," ",r.a.createElement(K.a,null)," ")," "))))})),ce=t(112),ie=t.n(ce),le=t(12),oe=t.n(le),se=t(27),me=t(86),ue=t(76),de=t(87),pe=t(220),fe=t(111),Ee=t.n(fe),ge=function(){return r.a.createElement("div",{style:{display:"flex",marginRight:"auto",marginLeft:"auto"}},r.a.createElement("img",{src:Ee.a,alt:"Loading...",style:{width:"150px",margin:" 40px auto",display:"block"}}))},be=function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(h.a,null),r.a.createElement(L.a,{container:!0},r.a.createElement(L.a,{item:!0,xs:1,sm:2}),r.a.createElement(L.a,{item:!0,xs:10,sm:8},a),r.a.createElement(L.a,{item:!0,xs:1,sm:2})),r.a.createElement(h.a,null))},he=Object(D.a)((function(e){return{box:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",height:"130px"},productName:{fontSize:"1rem"},productPrice:{fontSize:"1.3rem"},card:{height:"100%",border:"0.5px solid #ecf0f1",padding:"10px"},flexBox1:{alignItems:"center",border:"1px solid #eee",boxShadow:"0 10px 6px -6px #d4d4d4",margin:"20px 0",borderRadius:"5px",backgroundColor:"#fff"},box2:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"flex-start"},grid:{margin:"10px 0 10px 0"},mainHeading:{color:"#7f8c8d",fontSize:"18px"}}})),xe=Object($.b)((function(e){var a=e.getProducts;return{loading:a.loading,category:a.category,products:a.products}}))((function(e){var a=e.history,t=e.loading,c=e.category,i=e.products,l=e.dispatch,s=he(),m=Object(o.h)().name;return Object(n.useEffect)((function(){l(function(e){return function(a){a({type:"LOADING_PRODUCTS"}),te.a.get("/api/v1/ecartproducts/category/".concat(e)).then((function(t){a({type:"GET_PRODUCTS",payload:{products:Object(me.a)(t.data.data),category:e}})}))}}(m))}),[m]),r.a.createElement(be,null,r.a.createElement("div",{style:{overflow:"hidden"}},t?r.a.createElement(ge,null):r.a.createElement(r.a.Fragment,null," ",r.a.createElement(ue.a,{variant:"h4",className:s.mainHeading},"Category / ",c.toUpperCase()),i.map((function(e,t){return r.a.createElement(L.a,{container:!0,key:t,className:s.flexBox1},r.a.createElement(L.a,{item:!0,xs:12,sm:4,className:s.box},r.a.createElement("img",{src:"/api/v1/ecartproducts/product_image/".concat(e._id,"/").concat(e.images[0]),alt:"product",style:{maxWidth:"100%",height:"100%"}})),r.a.createElement(L.a,{item:!0,xs:12,sm:8,className:s.box2},r.a.createElement(de.a,{onClick:function(){return a.push("/product/".concat(e._id))}},r.a.createElement(ue.a,{className:s.productName}," ",e.name)),e.averageRating&&r.a.createElement(pe.a,{size:"small",style:{backgroundColor:"#27ae60",color:"#fff"},label:e.averageRating,icon:r.a.createElement(ie.a,{style:{color:"#fff"}})}),r.a.createElement(ue.a,{className:s.productPrice},"\u20b9",e.price.toLocaleString())))})))))})),ye=t(164),ve=Object(D.a)({main:{backgroundColor:"#fff",padding:"20px"},button:{margin:"10px auto 10px auto"},buttonArea:{display:"flex",marginTop:"50px"},imageBox:{display:"flex",justifyContent:"center",alignItems:"center"},avatar:{backgroundColor:"green"},review:{display:"flex",flexDirection:"column",padding:"10px",justifyContent:"flex-start",marginTop:"5px"},paper:{padding:"15px"},price:{fontSize:"1.3rem"},name:{fontSize:"1.5rem"},description:{fontSize:"1 rem"}},{index:1}),Ne=function(e){var a=e.product,t=e.classes;return a?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(L.a,{item:!0},r.a.createElement(h.a,null),r.a.createElement(ue.a,{className:t.name},a.name)," ",r.a.createElement(h.a,null)),r.a.createElement(L.a,{item:!0,className:t.imageBox},r.a.createElement("img",{src:"/api/v1/ecartproducts/product_image/".concat(a._id,"/").concat(a.images[1]),alt:"product",style:{maxWidth:"100%"}})),r.a.createElement(L.a,{item:!0},r.a.createElement(h.a,null)," ",r.a.createElement(ue.a,{className:t.price}," ","\u20b9 ",a.price.toLocaleString()," ")),r.a.createElement(L.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(ue.a,{className:t.description},a.description)))," "):null},Oe=t(219),Ce=function(e){var a=e.rating;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{variant:"h4"},"Rating : ",a," "),r.a.createElement(Oe.a,{name:"half-rating",defaultValue:a,precision:.1,size:"large",readOnly:!0})):r.a.createElement(ue.a,{variant:"h4"},"Rating: Not Available")},je=t(221),we=function(e){var a=e.productReviews,t=e.classes;return a.length?a.map((function(e,a){return r.a.createElement("div",{className:t.review,key:a},r.a.createElement(je.a,{className:t.avatar}," ",e.user.name[0]," "),r.a.createElement(ue.a,{variant:"subtitle1"},e.user.name),r.a.createElement(ue.a,{variant:"caption"}," ",e.review," "),r.a.createElement(Oe.a,{name:"half-rating",defaultValue:e.rating,precision:.5,size:"small",readOnly:!0}),r.a.createElement(b.a,null))})):r.a.createElement(ue.a,{variant:"subtitle1"},"Not Available")};function ke(e){return e?e.map((function(e){return e.totalPrice})).reduce((function(e,a){return e+a}),0):0}var Ae=function(e,a,t){return"del"===t?te.a.delete(e,{headers:{authorization:"Bearer ".concat(a)}}):te.a.get(e,{headers:{authorization:"Bearer ".concat(a)}})};var Te=function(e){var a=e.classes,t=e.product,n=e.dispatch,c=e.inCart,i=e.token,l=e.history,o=e.location;return c?r.a.createElement(z.a,{variant:"contained",color:"primary",size:"large",className:a.button,disabled:!0},"In Cart"):r.a.createElement(z.a,{variant:"contained",color:"primary",size:"large",className:a.button,onClick:function(){i?n(function(e,a){return function(){var t=Object(se.a)(oe.a.mark((function t(n){var r;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOADING_CART"}),t.next=3,Ae("/api/v1/ecartproducts/product/".concat(e,"/addtocart"),a);case 3:r=t.sent,n({type:"ADD_ITEM",payload:{cart:r.data.data,totalPrice:ke(r.data.data)}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t._id,i)):l.push({pathname:"/user/login",state:{from:o}})}},"Add To Cart")},Ie=t(73),Re=t(122),Se=t(214),Pe=function(e){var a=e.text,t=Object(Re.a)(e,["text"]);return r.a.createElement(z.a,Object.assign({},t,{variation:"contained",color:"primary",disabled:!0}),r.a.createElement(Se.a,{size:15,style:{marginRight:"5px"}}),a)},_e=Object(Ie.a)("pk_test_51HoAvtGaNOaCdqY8zStX6zrmS85OqUYM8kbJEQypYe9mO57w4RKuOkIUFPeCQb6hXNsBCyjVxInCU7bEEj0Fqlnu00D3595kX7"),De=Object($.b)((function(e){var a=e.getProduct,t=e.cart,n=e.auth;return{product:a.product,reviews:a.reviews,loadingPage:a.loading,inCart:t.inCart,token:n.token,cartLoading:t.loading,isAuth:n.isAuth}}))((function(e){var a=e.history,t=e.location,c=e.loadingPage,i=e.product,l=e.reviews,s=e.dispatch,u=e.inCart,d=e.token,p=e.cartLoading,f=e.isAuth,E=ve(),g=Object(n.useState)(!1),b=Object(m.a)(g,2),x=b[0],y=b[1],v=Object(o.h)().id;Object(n.useEffect)((function(){s(function(e){return function(){var a=Object(se.a)(oe.a.mark((function a(t){var n,r;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"LOADING_PRODUCT"}),a.next=3,te.a.get("/api/v1/ecartproducts/product/".concat(e));case 3:return n=a.sent,a.next=6,te.a.get("/api/v1/ecartproducts/product/".concat(e,"/reviews"));case 6:r=a.sent,t({type:"CHECK_PRODUCT_IN_CART",payload:n.data.data._id}),t({type:"GET_PRODUCT",payload:{product:n.data.data,reviews:Object(me.a)(r.data.data)}});case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(v))}),[v]);var N=function(){var e=Object(se.a)(oe.a.mark((function e(n){var r,c,l,o;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=17;break}return e.next=3,_e;case 3:return r=e.sent,y(!0),c=[{id:i._id,name:i.name,price:i.price,quantity:1}],e.next=8,te.a.post("/api/v1/ecartproducts/create-checkout-session",{products:c},{headers:{Authorization:"Bearer ".concat(d)}});case 8:return l=e.sent,y(!1),o=l.data,e.next=13,r.redirectToCheckout({sessionId:o.id});case 13:e.sent.error&&a.push("/error"),e.next=18;break;case 17:a.push({pathname:"/login",state:{from:t}});case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(be,null,c?r.a.createElement(ge,null):r.a.createElement(L.a,{container:!0,direction:"column",className:E.main},r.a.createElement(Ne,{product:i,classes:E}),r.a.createElement(L.a,{container:!0,item:!0},r.a.createElement(L.a,{item:!0,xs:12,sm:6,className:E.buttonArea},x?r.a.createElement(Pe,{text:"Buy Now",className:E.button}):r.a.createElement(z.a,{variant:"contained",color:"primary",size:"large",className:E.button,onClick:N},"Buy Now")),r.a.createElement(L.a,{item:!0,xs:12,sm:6,className:E.buttonArea},p?r.a.createElement(Pe,{text:"Add to cart",size:"large",style:{margin:"10px auto 10px auto"}}):r.a.createElement(Te,{classes:E,product:i,inCart:u,dispatch:s,token:d,history:a,location:t}))),r.a.createElement(L.a,{item:!0},r.a.createElement(h.a,null),r.a.createElement(Ce,{rating:i.averageRating})),r.a.createElement(L.a,{item:!0},r.a.createElement(h.a,null),r.a.createElement(ye.a,{className:E.paper},r.a.createElement(ue.a,{variant:"h4"},"Reviews"),r.a.createElement(we,{productReviews:l,classes:E})))))})),Ue=t(48),Be=Object(D.a)((function(e){var a;return{form:(a={display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},Object(s.a)(a,e.breakpoints.up("md"),{width:"60%"}),Object(s.a)(a,"margin","auto"),Object(s.a)(a,"borderRadius","20px"),Object(s.a)(a,"padding","10px 0"),Object(s.a)(a,"backgroundColor","#fff"),Object(s.a)(a,"boxShadow","0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"),a),input:{margin:"20px 0"},subBnt:{margin:"10px 0"}}}),{index:1});var ze=Object($.b)((function(e){var a=e.auth;return{isAuth:a.isAuth,loading:a.loading}}))((function(e){var a=e.dispatch,t=e.loading,n=e.isAuth,c=e.location,i=Be(),s=(c.state||{from:{pathname:"/"}}).from,m=Object(Ue.a)({initialValues:{email:"",password:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Email is Required",e.password||(a.password="Password is Required"),a},onSubmit:function(e){var t;a((t=e,function(e){e({type:"LOADING_AUTH"}),te()({method:"POST",url:"/api/v1/ecartUsers/login",data:Object(ee.a)({},t)}).then((function(a){e({type:"USER_AUTH",payload:a.data.data})}))}))}}),u=m.errors,d=m.touched,p=m.handleSubmit,f=m.getFieldProps;return n?r.a.createElement(o.a,{to:s}):r.a.createElement(be,null,r.a.createElement("form",{className:i.form,onSubmit:p},r.a.createElement("h3",null,"Login to ECART"),r.a.createElement(F.a,Object.assign({className:i.input,id:"email",type:"email",variant:"outlined",label:"Email"},f("email"),{error:d.email&&u.email&&!0,helperText:d.email&&u.email})),r.a.createElement(F.a,Object.assign({className:i.input,id:"password",variant:"outlined",label:"Password",type:"password"},f("password"),{error:d.password&&u.password&&!0,helperText:d.password&&u.password})),t?r.a.createElement(Pe,{text:"login"}):r.a.createElement(z.a,{type:"submit",className:i.subBnt,variant:"contained",color:"primary"},"Login"),r.a.createElement("p",null,"Create new account ",r.a.createElement(l.b,{to:"/user/signin"},"Sign in"))))}));var Le=Object($.b)((function(e){var a=e.auth;return{isAuth:a.isAuth,loading:a.loading}}))((function(e){var a=e.dispatch,t=e.loading,n=e.isAuth,c=e.location,i=Be(),s=(c.state||{from:{pathname:"/"}}).from,m=Object(Ue.a)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validate:function(e){var a={};return e.firstName||(a.firstName="Required"),e.lastName||(a.lastName="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password?e.password.length<8&&(a.password="Password length must be 8 or more"):a.password="Required",e.confirmPassword?e.confirmPassword!==e.password&&(a.confirmPassword="Password not matched"):a.confirmPassword="Required",a},onSubmit:function(e){var t;a((t=e,function(e){e({type:"LOADING_AUTH"}),te()({method:"POST",url:"/api/v1/ecartUsers/signup",data:Object(ee.a)({},t)}).then((function(a){e({type:"USER_AUTH",payload:a.data.data})}))}))}}),u=m.errors,d=m.touched,p=m.handleSubmit,f=m.getFieldProps,E=function(e,a){return a?d[e]&&u[e]:d[e]&&u[e]&&!0};return n?r.a.createElement(o.a,{to:s}):r.a.createElement(be,null,r.a.createElement("form",{className:i.form,onSubmit:p},r.a.createElement("h3",null,"Create your account in ECART"),r.a.createElement(F.a,Object.assign({className:i.input,id:"firstName",type:"text",variant:"outlined",label:"firstName"},f("firstName"),{error:E("firstName"),helperText:E("firstName",!0)})),r.a.createElement(F.a,Object.assign({className:i.input,id:"lastName",type:"text",variant:"outlined",label:"lastName"},f("lastName"),{error:E("lastName"),helperText:E("lastName",!0)})),r.a.createElement(F.a,Object.assign({className:i.input,id:"email",type:"email",variant:"outlined",label:"Email"},f("email"),{error:E("email"),helperText:E("email",!0)})),r.a.createElement(F.a,Object.assign({className:i.input,id:"password",variant:"outlined",label:"Password",type:"password"},f("password"),{error:E("password"),helperText:E("password",!0)})),r.a.createElement(F.a,Object.assign({className:i.input,id:"confirmPassword",variant:"outlined",label:"ConfirmPassword",type:"password"},f("confirmPassword"),{error:E("confirmPassword"),helperText:E("confirmPassword",!0)})),t?r.a.createElement(Pe,{text:"signin"}):r.a.createElement(z.a,{type:"submit",className:i.subBnt,variant:"contained",color:"primary"},"sign in"),r.a.createElement("p",null,"Already have an account ? ",r.a.createElement(l.b,{to:"/user/login"},"login"))))})),Ge=Object(D.a)((function(e){return{root:{padding:"12px",margin:"0 10px"},items:{backgroundColor:"#fff",padding:"15px",border:"1px solid #e2e8ea"},imgBox:{display:"flex",justifyContent:"center",height:"130px",padding:"10px"},info:{padding:"10px"},cartProduct:{border:"1px solid #ecf0f1",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.15)",marginTop:"15px"},name:{fontSize:"18px",marginTop:"10px"},price:{fontSize:"20px",marginTop:"10px"},qtyBtn:{minWidth:"5px",padding:"5px 10px"},qty:{display:"flex",alignItems:"center","& p":{marginRight:"10px"}},prdQty:{display:"inline",width:"30px",textAlign:"center"},cartOptn:{display:"flex",justifyContent:"space-between",marginTop:"15px"},priceDtl:{margin:"15px 0"},priceItems:{display:"flex",justifyContent:"center"},orderBtn:{marginTop:"15px"},main:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",height:"100vh","& h6":{marginBottom:"15px"}},emptyCart:{display:"flex",width:"300px",height:"200px",border:"1px solid #ecf0f1"},disable:{display:function(e){return e?"block":"none"},position:"absolute",width:"100%",height:"100vh",zIndex:1,backgroundColor:"#f6f8f8",opacity:.5},spinner:{display:function(e){return e?"block":"none"},position:"absolute",zIndex:2,left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}}),{index:1}),qe=t(215),Fe=t(115),Me=t.n(Fe),He=Object(Ie.a)("pk_test_51HoAvtGaNOaCdqY8zStX6zrmS85OqUYM8kbJEQypYe9mO57w4RKuOkIUFPeCQb6hXNsBCyjVxInCU7bEEj0Fqlnu00D3595kX7");var Ye=Object($.b)((function(e){var a=e.cart,t=e.auth;return{cart:a.cart,noOfItems:a.noOfItems,totalPrice:a.totalPrice,login:t.isAuth,token:t.token,loading:a.loading}}))((function(e){var a=e.cart,t=e.noOfItems,c=e.totalPrice,i=e.dispatch,l=e.history,o=e.login,s=e.loading,u=e.token,d=e.location,p=Ge(s),f=Object(n.useState)(!1),E=Object(m.a)(f,2),g=E[0],b=E[1],x=function(){var e=Object(se.a)(oe.a.mark((function e(t){var n,r,c;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=16;break}return e.next=3,He;case 3:return n=e.sent,b(!0),e.next=7,te.a.post("/api/v1/ecartproducts/create-checkout-session/cart",{products:a},{headers:{Authorization:"Bearer ".concat(u)}});case 7:return r=e.sent,b(!1),c=r.data,e.next=12,n.redirectToCheckout({sessionId:c.id});case 12:e.sent.error&&l.push("/error"),e.next=17;break;case 16:l.push({pathname:"/login",state:{from:d}});case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),y=function(){return r.a.createElement(qe.a,{className:p.main},r.a.createElement(ue.a,{variant:"h6"},"Your Cart is Empty !"),r.a.createElement("div",{className:p.emptyCart},r.a.createElement("img",{src:"../resources/emptyCart.png",alt:"empty",style:{width:"100%",height:"100%"}})))};return o?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:p.spinner}," ",r.a.createElement(ge,null)," "),r.a.createElement("div",{className:p.disable}," "),0===t?r.a.createElement(y,null):r.a.createElement("div",{className:p.root},r.a.createElement(h.a,null),r.a.createElement(L.a,{container:!0,spacing:3},r.a.createElement(L.a,{item:!0,xs:12,md:8},r.a.createElement("div",{className:p.items},r.a.createElement("h2",null,"My cart (",t,")"),a.map((function(e){return r.a.createElement(L.a,{container:!0,className:p.cartProduct},r.a.createElement(L.a,{item:!0,xs:12,sm:4,className:p.imgBox},r.a.createElement("img",{src:"/api/v1/ecartproducts/product_image/".concat(e.product._id,"/").concat(e.product.images[0]),alt:"product",style:{maxWidth:"100%",height:"100%"}})),r.a.createElement(L.a,{item:!0,xs:12,sm:8,className:p.info},r.a.createElement(de.a,{onClick:function(){return l.push("/product/".concat(e.product._id))}},r.a.createElement(ue.a,{className:p.name},e.product.name)),r.a.createElement(ue.a,{className:p.price},"\u20b9",e.totalPrice.toLocaleString()),r.a.createElement("div",{className:p.cartOptn},r.a.createElement("div",{className:p.qty},r.a.createElement("p",null,"QTY "),r.a.createElement(z.a,{variant:"contained",color:"primary",className:p.qtyBtn,onClick:function(){return 1!=e.qty&&i(function(e,a){return function(){var t=Object(se.a)(oe.a.mark((function t(n){var r;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOADING_CART"}),t.next=3,Ae("/api/v1/ecartproducts/cart/updateqty/".concat(e,"/dec"),a);case 3:r=t.sent,n({type:"DEC_QTY",payload:{cart:r.data.data,totalPrice:ke(r.data.data)}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e._id,u))}},"-"),r.a.createElement("div",{className:p.prdQty},e.qty),r.a.createElement(z.a,{variant:"contained",color:"primary",className:p.qtyBtn,onClick:function(){return i(function(e,a){return function(){var t=Object(se.a)(oe.a.mark((function t(n){var r;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOADING_CART"}),t.next=3,Ae("/api/v1/ecartproducts/cart/updateqty/".concat(e,"/inc"),a);case 3:r=t.sent,n({type:"INC_QTY",payload:{cart:r.data.data,totalPrice:ke(r.data.data)}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e._id,u))}},"+")),r.a.createElement(G.a,{color:"primary",onClick:function(){return i(function(e,a){return function(){var t=Object(se.a)(oe.a.mark((function t(n){var r;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOADING_CART"}),t.next=3,Ae("/api/v1/ecartproducts/cart/item/".concat(e,"/remove"),a,"del");case 3:r=t.sent,n({type:"REMOVE_ITEM",payload:{cart:r.data.data,totalPrice:ke(r.data.data)}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e._id,u))}},r.a.createElement(Me.a,null)))))})))),r.a.createElement(L.a,{item:!0,xs:12,md:4},r.a.createElement("div",{className:p.items}," ",r.a.createElement(ue.a,{variant:"h5"},"Price details "),r.a.createElement("hr",null),r.a.createElement(L.a,{container:!0,spacing:3,className:p.priceDtl},r.a.createElement(L.a,{item:!0,xs:6,className:p.priceItems},r.a.createElement(ue.a,{variant:"subtitle1"},"Price (",t," ",t>1?"items":"item",")"," ")),r.a.createElement(L.a,{item:!0,xs:6,className:p.priceItems},r.a.createElement(ue.a,{variant:"subtitle1"}," ","\u20b9",c.toLocaleString()," ")),r.a.createElement(L.a,{item:!0,xs:6,className:p.priceItems},r.a.createElement(ue.a,{variant:"subtitle1"}," ","Delivery Charges"," ")),r.a.createElement(L.a,{item:!0,xs:6,className:p.priceItems},r.a.createElement(ue.a,{variant:"subtitle1"},"Free")),r.a.createElement(L.a,{item:!0,xs:6,className:p.priceItems},r.a.createElement(ue.a,{variant:"h6"},"Total Amount ")),r.a.createElement(L.a,{item:!0,xs:6,className:p.priceItems},r.a.createElement(ue.a,{variant:"h6"}," ","\u20b9",c.toLocaleString()," ")),r.a.createElement(L.a,{item:!0,xs:12,className:p.priceItems},g?r.a.createElement(Pe,{text:"place order",variant:"contained",color:"primary",className:p.orderBtn}):r.a.createElement(z.a,{variant:"contained",color:"primary",className:p.orderBtn,onClick:x},"Place Order")))))))):r.a.createElement(qe.a,{className:p.main},r.a.createElement(ue.a,{variant:"h6"},"Login to access your cart"),r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:function(){return l.push({pathname:"/user/login",state:{from:d}})}},"login"," "))})),Qe=t(116),Ve=t.n(Qe),Ze=t(117),We=t.n(Ze),Xe=t(118),Je=t.n(Xe),Ke=Object(D.a)((function(e){return{infoSection:{marginTop:"50px"},info:{display:"flex",justifyContent:"center",alignItems:"center"},infoBox:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"#fff",width:"200px",padding:"20px 0",boxShadow:" 0px 6px 15px rgba(0, 0, 0, 0.25)",borderRadius:"15px",color:"#001893"},midSection:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px",backgroundColor:"#fff",padding:"20px "},infoIcons:{fontSize:"3rem"},badge:{background:"linear-gradient(180deg, rgba(243, 156, 18, 0.6) 0%, #F39C12 100%)",color:"#fff",boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.25)",padding:"15px 40px",borderRadius:"50px",fontSize:"1.5rem"},shopCategory:{margin:"50px 0"},category:{display:"flex",justifyContent:"center",alignItems:"center"},shopIcon:{color:"#FAA720",fontSize:"4rem"},shopCatg:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",textDecoration:"none",color:"black",backgroundColor:"#fff","&:hover":{boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.25)"}}}}),{index:1});var $e=function(){var e=Ke();return r.a.createElement(L.a,{container:!0},r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement("img",{src:"./resources/background.svg",style:{width:"100%",height:"100%"}})),r.a.createElement(L.a,{container:!0,item:!0,xs:12,spacing:3,className:e.infoSection},r.a.createElement(L.a,{item:!0,xs:12,sm:4,className:e.info},r.a.createElement("div",{className:e.infoBox},r.a.createElement(Ve.a,{className:e.infoIcons}),r.a.createElement(ue.a,{variant:"subtitle1"},"countries"),r.a.createElement(ue.a,{variant:"subtitle1"},"12 +"))),r.a.createElement(L.a,{item:!0,xs:12,sm:4,className:e.info},r.a.createElement("div",{className:e.infoBox},r.a.createElement(We.a,{className:e.infoIcons}),r.a.createElement(ue.a,{variant:"subtitle1"},"customers"),r.a.createElement(ue.a,{variant:"subtitle1"},"15000 +"))),r.a.createElement(L.a,{item:!0,xs:12,sm:4,className:e.info},r.a.createElement("div",{className:e.infoBox},r.a.createElement(Je.a,{className:e.infoIcons}),r.a.createElement(ue.a,{variant:"subtitle1"},"stores"),r.a.createElement(ue.a,{variant:"subtitle1"},"250 +")))),r.a.createElement(L.a,{item:!0,xs:12,className:e.midSection},r.a.createElement("div",{className:e.badge},"Shop By Category")),r.a.createElement(L.a,{container:!0,item:!0,xs:12,spacing:3,className:e.shopCategory},r.a.createElement(L.a,{item:!0,xs:6,sm:3}," ",r.a.createElement(l.b,{to:"/products/category/mobiles",className:e.shopCatg},r.a.createElement(A.a,{className:e.shopIcon}),r.a.createElement(ue.a,{variant:"subtitle2"}," Mobiles"))),r.a.createElement(L.a,{item:!0,xs:6,sm:3},r.a.createElement(l.b,{to:"/products/category/laptops",className:e.shopCatg},r.a.createElement(N.a,{className:e.shopIcon}),r.a.createElement(ue.a,{variant:"subtitle2"},"Laptops"))),r.a.createElement(L.a,{item:!0,xs:6,sm:3},r.a.createElement(l.b,{to:"/products/category/headsets",className:e.shopCatg}," ",r.a.createElement(C.a,{className:e.shopIcon}),r.a.createElement(ue.a,{variant:"subtitle2"},"Headsets"))),r.a.createElement(L.a,{item:!0,xs:6,sm:3},r.a.createElement(l.b,{to:"/products/category/speakers",className:e.shopCatg},r.a.createElement(w.a,{className:e.shopIcon}),r.a.createElement(ue.a,{variant:"subtitle2"},"Speakers")))))},ea=Object(D.a)({main:{backgroundColor:"#fff"},root:{"& .MuiTextField-root":{margin:"10px"},display:"flex",flexDirection:"column",alignItems:"center",padding:"10px"},personalInfo:{display:"flex",flexDirection:"column",marginBottom:"20px"},mobileNo:{marginBottom:"20px"},email:{marginBottom:"20px"},address:{marginBottom:"20px"},avatar:{width:"100%",borderRadius:"50px"},intro:{padding:"10px"},edit:{marginTop:"10px"}},{index:1});var aa=[{path:"/",component:$e,public:!0,exact:!0},{path:"/products/category/:name",component:xe,public:!0},{path:"/product/:id",component:De,public:!0},{path:"/user/login",component:ze,public:!0},{path:"/user/signin",component:Le,public:!0},{path:"/user/cart",component:Ye,public:!0},{path:"/my-profile",component:Object($.b)((function(e){var a=e.auth,t=e.user;return{user:t,loading:t.loading,token:a.token,updating:t.updating}}))((function(e){var a=e.dispatch,t=e.user,c=e.loading,i=e.token,l=e.updating,o=ea(),s=Object(n.useState)(!0),u=Object(m.a)(s,2),d=u[0],p=u[1];Object(n.useEffect)((function(){a(function(e){return function(){var a=Object(se.a)(oe.a.mark((function a(t){var n;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=6;break}return t({type:"LOADING_USER"}),a.next=4,te.a.get("/api/v1/ecartusers/user",{headers:{authorization:"Bearer ".concat(e)}});case 4:n=a.sent,t({type:"GET_USER",payload:n.data.data});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(i))}),[]);var f=function(e){e.preventDefault(),p(!d)},E=Object(Ue.a)({initialValues:{firstName:t.firstName,lastName:t.lastName,mobileNo:t.mobileNo,email:t.email,address:t.address},validate:function(e){var a={};return e.firstName||(a.firstName="Required"),e.lastName||(a.lastName="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},enableReinitialize:!0,onSubmit:function(e){a(function(e,a){return function(){var t=Object(se.a)(oe.a.mark((function t(n){var r;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"UPDATING"}),t.next=3,te.a.post("/api/v1/ecartusers/updateuser",Object(ee.a)({},e),{headers:{authorization:"Bearer ".concat(a)}});case 3:"Success"===(r=t.sent).data.status&&n({type:"UPDATE_USER",payload:r.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e,i))}}),g=E.errors,b=E.touched,h=E.handleSubmit,x=E.getFieldProps;return r.a.createElement(be,null,c?r.a.createElement(ge,null):r.a.createElement(L.a,{container:!0,className:o.main},r.a.createElement(L.a,{item:!0,md:4,sm:12},r.a.createElement(qe.a,{className:o.intro},r.a.createElement("img",{src:"../resources/userAvatar.png",className:o.avatar}))),r.a.createElement(L.a,{item:!0,md:8,sm:12},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:h,className:o.root},r.a.createElement(qe.a,{className:o.personalInfo},r.a.createElement(ue.a,{variant:"h6"},"Personal Information"),r.a.createElement(F.a,Object.assign({label:"First Name",variant:"outlined",id:"firstName"},x("firstName"),{error:b.firstName&&g.firstName&&!0,helperText:b.firstName&&g.firstName,disabled:d})),r.a.createElement(F.a,Object.assign({label:"Last Name",variant:"outlined",id:"lastName"},x("lastName"),{error:b.lastName&&g.lastName&&!0,helperText:b.lastName&&g.lastName,disabled:d}))),r.a.createElement(qe.a,{className:o.mobileNo},r.a.createElement(ue.a,{variant:"h6"},"Mobile Number"),r.a.createElement(F.a,Object.assign({label:"Mobile Number",variant:"outlined",id:"mobileNo",disabled:d},x("mobileNo"),{fullWidth:!0}))),r.a.createElement(qe.a,{className:o.email},r.a.createElement(ue.a,{variant:"h6"},"Email Address"),r.a.createElement(F.a,Object.assign({label:"Email Address",variant:"outlined",id:"email",disabled:d},x("email"),{error:b.email&&g.email&&!0,helperText:b.email&&g.email,fullWidth:!0}))),r.a.createElement(qe.a,{className:o.address},r.a.createElement(ue.a,{variant:"h6"},"Address"),r.a.createElement(F.a,Object.assign({label:"Address",variant:"outlined",id:"address"},x("address"),{multiline:!0,rows:4,disabled:d}))),d?r.a.createElement(z.a,{variant:"contained",color:"primary",className:o.edit,onClick:f},"Edit"):r.a.createElement(r.a.Fragment,null," ",l?r.a.createElement(Pe,{text:"save"}):r.a.createElement(z.a,{variant:"contained",color:"primary",className:o.edit,type:"submit"},"save"),r.a.createElement("a",{className:o.edit,onClick:f,href:"#"},"back")))))))})),public:!0}];var ta=Object($.b)((function(e){return{token:e.auth.token}}))((function(e){var a=e.token,t=e.dispatch;return Object(n.useEffect)((function(){t(function(e){return function(){var a=Object(se.a)(oe.a.mark((function a(t){var n;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=6;break}return t({type:"LOADING_CART"}),a.next=4,Ae("/api/v1/ecartproducts/cart",e);case 4:n=a.sent,t({type:"LOAD_CART",payload:{cart:n.data.data,totalPrice:ke(n.data.data)}});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(re,null),r.a.createElement(o.d,null,aa.map((function(e,a){return r.a.createElement(o.b,{exact:e.exact,key:a,path:e.path,component:e.component})})))))})),na=t(40),ra=t(119),ca=t(120),ia={products:[],totalproducts:0,loading:!0,category:""};var la=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ia,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PRODUCTS":return Object(ee.a)({},e,{products:a.payload.products,totalproducts:a.payload.products.length,category:a.payload.category,loading:!1});case"LOADING_PRODUCTS":return Object(ee.a)({},e,{loading:!0});default:return e}},oa={product:{},loading:!0,reviews:[]};var sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PRODUCT":return Object(ee.a)({},e,{product:Object(ee.a)({},a.payload.product,{inCart:a.payload.inCart}),reviews:a.payload.reviews,loading:!1});case"LOADING_PRODUCT":return Object(ee.a)({},e,{loading:!0});default:return e}},ma=t(85),ua=t.n(ma),da=function(){return ua.a.get("jwt")},pa={isAuth:!!da(),token:da(),authError:null,loading:!1};var fa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_USER":return Object(ee.a)({},e,{user:a.payload,loading:!1});case"USER_AUTH":return Object(ee.a)({},e,{token:da(),isAuth:!0,loading:!1});case"LOADING_USER":return Object(ee.a)({},e,{loading:!0});case"AUTH_ERROR":return Object(ee.a)({},e,{authError:a.payload,loading:!1});case"LOGOUT_USER":return ua.a.remove("jwt"),Object(ee.a)({},e,{token:null,isAuth:!1});default:return e}},Ea={cart:[],noOfItems:0,totalPrice:0,inCart:!1,loading:!1};var ga=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ea,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING_CART":return Object(ee.a)({},e,{loading:!0});case"LOAD_CART":return Object(ee.a)({},e,{cart:a.payload.cart,noOfItems:a.payload.cart.length,totalPrice:a.payload.totalPrice,loading:!1});case"ADD_ITEM":return Object(ee.a)({},e,{cart:a.payload.cart,noOfItems:a.payload.cart.length,totalPrice:a.payload.totalPrice,inCart:!0,loading:!1});case"REMOVE_ITEM":return Object(ee.a)({},e,{cart:a.payload.cart,noOfItems:a.payload.cart.length,totalPrice:a.payload.totalPrice,loading:!1});case"INC_QTY":case"DEC_QTY":return Object(ee.a)({},e,{cart:a.payload.cart,totalPrice:a.payload.totalPrice,loading:!1});case"CHECK_PRODUCT_IN_CART":var t=e.cart.find((function(e){return e.product._id===a.payload}));return Object(ee.a)({},e,{inCart:!!t});case"RESETCART":return Object(ee.a)({},e,{},Ea);default:return e}},ba={firstName:"",lastName:"",email:"",mobileNo:null,address:"",gender:"",loading:!0,updating:!1};var ha=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ba,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_USER":return Object(ee.a)({},e,{},a.payload,{loading:!1});case"LOADING_USER":return Object(ee.a)({},e,{loading:!0});case"UPDATING":return Object(ee.a)({},e,{updating:!0});case"UPDATE_USER":return Object(ee.a)({},e,{},a.payload,{updating:!1});default:return e}},xa=Object(na.combineReducers)({getProducts:la,getProduct:sa,auth:fa,cart:ga,user:ha}),ya=[ra.a],va=Object(na.createStore)(xa,Object(ca.composeWithDevTools)(na.applyMiddleware.apply(void 0,ya)));t(161);i.a.render(r.a.createElement($.a,{store:va},r.a.createElement(ta,null)," "),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.f022144e.chunk.js.map