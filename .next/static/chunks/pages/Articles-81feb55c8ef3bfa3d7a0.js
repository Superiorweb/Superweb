_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{Fdpp:function(t,e,a){t.exports={logo:"Catgorys_logo__12jRH",bgsection:"Catgorys_bgsection__1bAq-",titleslide:"Catgorys_titleslide__11AC0",textslide:"Catgorys_textslide__2KBHD",btnslide:"Catgorys_btnslide__2Brgu",items:"Catgorys_items__yaNDJ",item:"Catgorys_item__3I6bA",animitem:"Catgorys_animitem__M1Sgl",titleT:"Catgorys_titleT__1clPy",bg_primary:"Catgorys_bg_primary__2P5Jx",card:"Catgorys_card__FYZ5q",iconcard:"Catgorys_iconcard__1LhR6",textslidetwo:"Catgorys_textslidetwo__2sgtI",customwith:"Catgorys_customwith__l5MLk",select:"Catgorys_select__svH_f"}},"HaE+":function(t,e,a){"use strict";function n(t,e,a,n,c,i,r){try{var s=t[i](r),o=s.value}catch(l){return void a(l)}s.done?e(o):Promise.resolve(o).then(n,c)}function c(t){return function(){var e=this,a=arguments;return new Promise((function(c,i){var r=t.apply(e,a);function s(t){n(r,c,i,s,o,"next",t)}function o(t){n(r,c,i,s,o,"throw",t)}s(void 0)}))}}a.d(e,"a",(function(){return c}))},RKWg:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Articles",function(){return a("h4g4")}])},h4g4:function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSG",(function(){return w}));var n=a("KQm4"),c=a("o0o1"),i=a.n(c),r=a("HaE+"),s=a("q1tI"),o=a.n(s),l=a("ifbw"),u=a("Fdpp"),m=a.n(u),f=a("vDqi"),d=a.n(f),p=a("fhwx"),g=a.n(p),_=a("8Kt/"),y=a.n(_),v=a("YFqc"),h=a.n(v),N=o.a.createElement,w=!0;e.default=function(t){var e=t.data,a=t.catgories,c=Object(s.useState)(e),o=c[0],u=c[1];e=o;var f=Math.round(e.length/12);return N(l.default,null,N("section",{className:"bg-dark",style:{height:"auto"}},N(y.a,null,N("title",null,"\u0628\u0644\u0627\u06af | \u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a | \u0645\u0642\u0627\u0644\u0627\u062a "),N("meta",{name:"description",content:"\u0627\u062e\u0631\u06cc\u0646 \u0648 \u0628\u0647 \u0631\u0648\u0632\u062a\u0631\u06cc\u0646 \u0627\u062e\u0628\u0627\u0631 \u0648 \u0645\u0642\u0627\u0644\u0627\u062a \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u06cc\u062f "}),N("meta",{name:"keywords",content:a.map((function(t){return t.name}))}),N("meta",{name:"author",content:"majid javadi"}),N("meta",{property:"og:url",content:"https://superiorweb.ir/"}),N("link",{rel:"shortcut icon",href:"./logo.ico"})),N("div",{className:"w-100 mb-5 d-flex justify-content-center"},N("div",{className:m.a.customwith},N("h1",{onClick:console.log("error"),className:m.a.titleT+" text-center text-white"},"\u0645\u0642\u0627\u0644\u0627\u062a \u0633\u0648\u067e\u0631\u06cc\u0648\u0631 \u0648\u0628"),N("p",{className:"w-100 text-white text-center mt-4 "+m.a.textslidetwo},"\u0634\u0645\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u062e\u0631\u06cc\u0646 \u0645\u0642\u0627\u0644\u0627\u062a \u0648 \u0627\u062e\u0628\u0627\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062f\u0646\u06cc\u0627\u06cc \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0648 \u0637\u0631\u0627\u062d\u06cc \u0648\u0628 \u0633\u0627\u06cc\u062a \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u06cc\u062f \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0633\u0648\u0627\u0644\u0627\u062a \u062e\u0648\u062f \u0631\u0627 \u0627\u0632 \u0645\u0627 \u0628\u067e\u0631\u0633\u06cc\u062f"))),N("div",{id:"posts",className:m.a.bg_primary+" row justify-content-center mt-5 pt-5 pb-5 mr-0 ml-0"},N("div",{className:"row w-100 justify-content-center mb-5"},N("div",{className:"col-12 col-lg-4"},N("div",{className:m.a.select},N("select",{onChange:function(t){return function(t){var e=d.a.get("/api/post/CatgoryFinder?catgory=".concat(t),{}).then((function(t){return t.data}));!function(){var t=Object(r.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:a=t.sent,u(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}(t.target.value)},className:"w-100 text-center",name:"slct",id:"slct"},N("option",{selected:!0,disabled:!0},"\u0645\u0648\u0636\u0648\u0639 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u062c\u0633\u062a \u0648 \u062c\u0648 \u06a9\u0646\u06cc\u062f"),a.map((function(t){return N("option",null,t.name)})))))),e.map((function(t){return N("div",{style:{cursor:"pointer"},className:"col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 d-flex text-white justify-content-center m-0 p-2"},N(h.a,{href:{pathname:"/Article",query:{pts:t.id}}},N("div",{className:m.a.card+" card border-0"},N("img",{src:"https://api.superiorweb.ir//postimage/"+t.img,className:"card-img-top",alt:t.title}),N("ul",{className:m.a.iconcard+" d-flex pr-1 pl-1 w-50"},N("li",null,N("i",{className:"fas fa-2x fa-angle-right"})),N("li",{style:{marginRight:" -1vw",background:"#ff0000a3"}},N("i",{className:"fa fa-share-alt","aria-hidden":"true"}))),N("div",{className:"card-body"},N("h5",{className:"card-title"},t.title),N("p",{style:{textAlign:"justify"},className:"card-text"},g()(t.description)),N(h.a,{href:{pathname:"/Article",query:{pts:t.id}}},N("button",{className:"btn btn-primary"},"Read Post"))))))})),N("div",{className:"d-flex justify-content-center w-100 position-relative mb-3 mt-3"},N("nav",{"aria-label":"Page navigation example"},N("ul",{className:"pagination"},N("li",{className:"page-item"},N("a",{className:"page-link"},"Previous")),Object(n.a)(new Array(f)).map((function(t,e){return N("li",{className:"page-item"},N("a",{onClick:function(t){return function(t,e){var a=d.a.get("/api/post/rsultpagin?count=".concat(e),{}).then((function(t){return t.data}));!function(){var t=Object(r.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:e=t.sent,u(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}(0,e+1)},className:"page-link"},e+1))})),N("li",{className:"page-item"},N("a",{className:"page-link"},"Next"))))))))}},ifbw:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return g}));var n=a("1OyB"),c=a("vuIU"),i=a("Ji7U"),r=a("md7G"),s=a("foSv"),o=a("q1tI"),l=a.n(o),u=a("Fdpp"),m=a.n(u),f=a("ARU5"),d=l.a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(s.a)(t);if(e){var c=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var g=function(t){Object(i.a)(a,t);var e=p(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return d("div",null,d(f.default,null),d("section",{className:m.a.bgsection+" row justify-content-center align-items-center text-white mr-0 ml-0"},d("div",{className:"col-12 pr-0 pl-0"},d("div",{className:"w-100 h-100 d-flex justify-content-center align-items-center text-center"},d("div",{style:{width:"90%"}},d("h1",{className:m.a.titleslide},"\u0645\u0642\u0627\u0644\u0627\u062a"),d("p",{className:m.a.textslide},"\u062a\u06cc\u0645 \u0633\u0646\u06cc\u0648\u0631 \u0648\u0628 \u062f\u0631 \u062a\u0644\u0627\u0634 \u0627\u0633\u062a \u062a\u0627 \u0628\u0627 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0646 \u0645\u0637\u0627\u0644\u0628 \u0627\u0645\u0648\u0632\u0646\u062f\u0647 \u062f\u0631 \u062d\u0648\u0632\u0647 \u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0648 \u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a \u0648 SEO \u0628\u0647 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0644 \u0645\u0634\u06a9\u0644\u0627\u062a \u0648 \u0633\u0648\u0627\u0644\u0627\u062a \u0634\u0645\u0627 \u06a9\u0645\u06a9 \u06a9\u0646\u062f"),d("div",null,d("a",{href:"#posts"},d("button",{className:m.a.btnslide},"\u062f\u06cc\u062f\u0646 \u067e\u0633\u062a \u0647\u0627"))),d("div",{className:m.a.items+" row justify-content-center mr-0 ml-0 align-items-center"},d("div",{className:"col-lg-2 col-3 d-flex justify-content-end justify-content-lg-center"},d("div",{className:m.a.item},d("i",{className:"fab fa-java"}))),d("div",{className:"col-lg-2 col-3 d-flex justify-content-center"},d("div",{className:m.a.item},d("i",{className:"fab fa-microsoft"}))),d("div",{className:"col-lg-2 col-3 d-flex justify-content-center text-center"},d("div",{className:m.a.item},d("i",{className:"fab fa-php"}))),d("div",{className:"col-lg-2 col-3 d-flex justify-content-start justify-content-lg-center"},d("div",{className:m.a.item},d("i",{className:"fab fa-react"})))))))),this.props.children)}}]),a}(o.Component)}},[["RKWg",0,1,2,4,3,5,7]]]);