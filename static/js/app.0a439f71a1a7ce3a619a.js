webpackJsonp([0],[,,,,,,,,function(t,e,i){t.exports=i.p+"static/img/a1.783eb87.jpg"},function(t,e,i){t.exports=i.p+"static/img/a2.36e8faa.jpg"},function(t,e,i){t.exports=i.p+"static/img/a3.e6afb18.jpg"},function(t,e,i){function a(t){i(26)}var n=i(0)(null,i(63),a,"data-v-1a294cea",null);t.exports=n.exports},function(t,e,i){function a(t){i(27)}var n=i(0)(null,i(64),a,"data-v-4b0703b0",null);t.exports=n.exports},function(t,e,i){var a=i(0)(i(17),i(67),null,null,null);t.exports=a.exports},function(t,e,i){"use strict";var a=i(4),n=i(70),s=i(56),o=i.n(s),l=i(59),r=i.n(l);a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:o.a},{path:"/quantyst",name:"quantyst",component:r.a}]})},function(t,e,i){function a(t){i(23)}var n=i(0)(i(16),i(60),a,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(58),n=i.n(a),s=i(12),o=i.n(s),l=i(53),r=i.n(l);e.default={methods:{appear:function(t){var e=document.getElementById("blinds");r()(e,{translateX:"-100%"},{duration:400,delay:200}),r()(t,{opacity:1},{duration:0,delay:100})},beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){var i=document.getElementById("blinds");r()(t,{opacity:1},{duration:0,complete:window.scrollTo(0,0)}),r()(i,{translateX:"100%"},{duration:600,delay:50,complete:e})},leave:function(t,e){var i=document.getElementById("blinds");r()(t,{opacity:0},{duration:0,delay:400}),r()(i,{translateX:"-100%"},{duration:0}),r()(i,{translateX:"0%"},{duration:400,complete:e})}},components:{Toolbar:n.a,Credits:o.a,Velocity:r.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(36),n=i.n(a);e.default={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.init()},methods:{init:function(){this.flickity=new n.a(this.$el,this.options)},next:function(t,e){this.flickity.next(t,e)},previous:function(t,e){this.flickity.previous(t,e)},select:function(t,e,i){this.flickity.select(t,e,i)},selectedIndex:function(){return this.flickity.selectedIndex},selectCell:function(t,e,i){this.flickity.selectCell(t,e,i)},resize:function(){this.flickity.resize()},reposition:function(){this.flickity.reposition()},prepend:function(t){this.flickity.prepend(t)},append:function(t){this.flickity.append(t)},insert:function(t,e){this.flickity.insert(t,e)},remove:function(t){this.flickity.remove(t)},playPlayer:function(){this.flickity.playPlayer()},stopPlayer:function(){this.flickity.stopPlayer()},pausePlayer:function(){this.flickity.pausePlayer()},unpausePlayer:function(){this.flickity.unpausePlayer()},rerender:function(){this.flickity.destroy(),this.init()},destroy:function(){this.flickity.destroy()},reloadCells:function(){this.flickity.reloadCells()},getCellElements:function(){this.flickity.getCellElements()},data:function(){return n.a.data(this.$el)},on:function(t,e){this.flickity.on(t,e)},off:function(t,e){this.flickity.off(t,e)},once:function(t,e){this.flickity.once(t,e)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(55),n=i.n(a),s=i(11),o=i.n(s),l=i(13),r=i.n(l);e.default={mounted:function(){document.getElementById("navigationBar").className+=" expanded"},data:function(){return{flickityOptions:{freeScroll:!0,prevNextButtons:!0,pageDots:!0,wrapAround:!1,selectedAttraction:.032,friction:.28}}},components:{Hero:n.a,Card:o.a,Flickity:r.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(42),n=i.n(a);e.default={mounted:function(){var t=this;this.$nextTick(function(){t.initHeadroom()})},methods:{initHeadroom:function(){var t=document.querySelector("nav");new n.a(t,{tolerance:{up:0,down:0}}).init()}},components:{Headroom:n.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(54),n=i.n(a),s=i(11),o=i.n(s),l=i(57),r=i.n(l),c=i(12),h=i.n(c),u=i(13),d=i.n(u);e.default={mounted:function(){document.getElementById("navigationBar").classList.remove("expanded")},data:function(){return{flickityOptions:{freeScroll:!0,prevNextButtons:!0,pageDots:!0,wrapAround:!1,selectedAttraction:.032,friction:.28}}},components:{CaseHero:n.a,Card:o.a,LinkGroup:r.a,Credits:h.a,Flickity:d.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(4),n=i(15),s=i.n(n),o=i(14);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,function(t,e,i){t.exports=i.p+"static/img/a4.971d8da.jpg"},function(t,e,i){t.exports=i.p+"static/img/a5.b6f9ef1.jpg"},function(t,e,i){t.exports=i.p+"static/img/a6.277f0a3.jpg"},function(t,e,i){t.exports=i.p+"static/img/b1.0279b89.jpg"},function(t,e,i){t.exports=i.p+"static/img/b2.86fa5aa.jpg"},function(t,e,i){t.exports=i.p+"static/img/b3.21603af.jpg"},function(t,e,i){t.exports=i.p+"static/img/c1.166ef7b.jpg"},function(t,e,i){t.exports=i.p+"static/img/c2.4aa1cdc.jpg"},function(t,e,i){t.exports=i.p+"static/img/c3.d4bd384.jpg"},,function(t,e,i){function a(t){i(31)}var n=i(0)(null,i(69),a,"data-v-b1a749b8",null);t.exports=n.exports},function(t,e,i){function a(t){i(25)}var n=i(0)(null,i(62),a,"data-v-1479c658",null);t.exports=n.exports},function(t,e,i){function a(t){i(24)}var n=i(0)(i(18),i(61),a,"data-v-04a7718e",null);t.exports=n.exports},function(t,e,i){function a(t){i(28)}var n=i(0)(null,i(65),a,"data-v-5e01a68a",null);t.exports=n.exports},function(t,e,i){function a(t){i(29)}var n=i(0)(i(19),i(66),a,"data-v-6f6afbde",null);t.exports=n.exports},function(t,e,i){function a(t){i(30)}var n=i(0)(i(20),i(68),a,"data-v-9a40bc9e",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Toolbar"),t._v(" "),i("transition",{attrs:{mode:"out-in",css:!1},on:{appear:t.appear,"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[i("router-view",{staticClass:"view"})],1),t._v(" "),i("Credits"),t._v(" "),i("div",{attrs:{id:"blinds"}})],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"home"}},[a("Hero"),t._v(" "),a("Card",{staticClass:"light card-mg",attrs:{id:"quantyst"}},[a("h3",{slot:"cardTitle"},[t._v("Quantyst")]),t._v(" "),a("div",{slot:"cardContent"},[a("p",[a("span",[t._v("2014—2015")]),t._v("Quantyst is a data company. They utilize machine learning models to quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.")]),t._v(" "),a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button",attrs:{to:"/quantyst/"}},[a("span",{staticClass:"highlighter"},[t._v("Case study")]),a("svg",{attrs:{width:"9",height:"14",viewBox:"0 0 9 14"}},[a("path",{attrs:{"stroke-width":"1.8",d:"M1.5 1.5L7 7l-5.5 5.5",fill:"none","fill-rule":"evenodd"}})])])],1)]),t._v(" "),a("ul",{slot:"cardList"},[a("li",[a("h4",[t._v("Design")])]),t._v(" "),a("li",[a("h4",[t._v("Wireframing")])]),t._v(" "),a("li",[a("h4",[t._v("Prototyping")])]),t._v(" "),a("li",[a("h4",[t._v("Illustration")])]),t._v(" "),a("li",[a("h4",[t._v("Branding")])])]),t._v(" "),a("Flickity",{ref:"flickity",staticClass:"gallery",attrs:{options:t.flickityOptions},slot:"cardGallery"},[a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(8),alt:"quantyst Collection View",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(9),alt:"quantyst Artist View",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(10),alt:"quantyst Art View",width:"1280",height:"960"}})])])],1),t._v(" "),a("Card",{staticClass:"dark card-mg",attrs:{id:"mirage"}},[a("h3",{slot:"cardTitle"},[t._v("Wave")]),t._v(" "),a("div",{slot:"cardContent"},[a("p",[a("span",[t._v("2015")]),t._v("Wave is an app that you apparently sign in to, go to your profile and upload videos and photos, and then shop for watches and movies. Good thing Wave isn't a real app. These are just app mockups. You should add your own photos here. You know, since this is your portfolio now.")])]),t._v(" "),a("ul",{slot:"cardList"},[a("li",[a("h4",[t._v("Product Design")])]),t._v(" "),a("li",[a("h4",[t._v("Branding")])]),t._v(" "),a("li",[a("h4",[t._v("Art Direction")])]),t._v(" "),a("li",[a("h4",[t._v("Prototyping")])]),t._v(" "),a("li",[a("h4",[t._v("Wireframing")])])]),t._v(" "),a("Flickity",{ref:"flickity",staticClass:"gallery",attrs:{options:t.flickityOptions},slot:"cardGallery"},[a("figure",{staticClass:"item phone"},[a("img",{attrs:{src:i(47),alt:"Mirage Now Playing View",width:"750",height:"1334"}})]),t._v(" "),a("figure",{staticClass:"item phone"},[a("img",{attrs:{src:i(48),alt:"Mirage Collection View",width:"750",height:"1334"}})]),t._v(" "),a("figure",{staticClass:"item phone"},[a("img",{attrs:{src:i(49),alt:"Mirage Album View",width:"750",height:"1334"}})])])],1),t._v(" "),a("Card",{staticClass:"light",attrs:{id:"explain"}},[a("h3",{slot:"cardTitle"},[t._v("App Shmap")]),t._v(" "),a("div",{slot:"cardContent"},[a("p",[a("span",[t._v("2016")]),t._v("This is also not really a real thing. Just placeholders, waiting for you to put your own pictures. I don't know what else to say. Are you even still reading this? You put something here instead. This is for you. Aren't you happy about it? Come on, don't be like that.")])]),t._v(" "),a("ul",{slot:"cardList"},[a("li",[a("h4",[t._v("Shmap Design")])]),t._v(" "),a("li",[a("h4",[t._v("App Design")])]),t._v(" "),a("li",[a("h4",[t._v("Protoshmapping")])]),t._v(" "),a("li",[a("h4",[t._v("Illustration")])]),t._v(" "),a("li",[a("h4",[t._v("Wireframing")])])]),t._v(" "),a("Flickity",{ref:"flickity",staticClass:"gallery",attrs:{options:t.flickityOptions},slot:"cardGallery"},[a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(51),alt:"Explain Everything Collection View",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item phone"},[a("img",{attrs:{src:i(52),alt:"Explain Everything iPhone",width:"750",height:"1334"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(50),alt:"Explain Everything Art View",width:"1280",height:"960"}})])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"hero"},[i("div",{staticClass:"header-text"},[i("h1",[t._v("Volio")]),t._v(" "),i("h2",[t._v("What does your portfolio say about you?")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"card"},[i("div",{staticClass:"content"},[t._t("cardTitle"),t._v(" "),t._t("cardContent"),t._v(" "),t._t("cardList")],2),t._v(" "),i("keep-alive",[t._t("cardGallery")],2),t._v(" "),t._t("cardStatic")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"credits"},[i("div",{staticClass:"row"},[i("p",[i("em",[t._v("About"),i("br"),t._v("—")]),t._v("Volio is a Portfolio Boilerplate built using Vue. Utilizing "),i("span",{staticClass:"tooltip t00"},[t._v("Flickity")]),t._v(", Sass, "),i("span",{staticClass:"tooltip t01"},[t._v("Webpack")]),t._v(", and Vue-Router, this boilerplate has "),i("span",{staticClass:"tooltip t02"},[t._v("everything")]),t._v(" you need to start building a "),i("span",{staticClass:"tooltip t03"},[t._v("beautiful")]),t._v(", modern portfolio.\n      ")]),t._v(" "),i("p",[i("em",[t._v("Get in touch"),i("br"),t._v("—")]),t._v(" "),i("a",{attrs:{href:"mailto:talktojustintoday@gmail.com",title:"Email"}},[i("span",{staticClass:"highlighter"},[t._v("Email")])]),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{href:"https://twitter.com/justinformentin",title:"@justinformentin on Twitter",target:"_blank"}},[i("span",{staticClass:"highlighter"},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{href:"https://github.com/justinformentin",title:"GitHub",target:"_blank"}},[i("span",{staticClass:"highlighter"},[t._v("GitHub")])]),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{href:"https://linkedin.com/in/justinformentin",title:"LinkedIn",target:"_blank"}},[i("span",{staticClass:"highlighter"},[t._v("LinkedIn")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",[i("li",[t._t("backLink")],2),t._v(" "),i("li",[t._t("storeLink")],2),t._v(" "),i("li",[t._t("nextLink")],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{attrs:{id:"navigationBar"}},[i("router-link",{attrs:{to:"/"}},[i("h4",[t._v("Vue Portfolio Boilerplate")])]),t._v(" "),i("p",[t._v("Showcase your work using using modern tools and design.")]),t._v(" "),i("a",{staticClass:"social-icon",attrs:{href:"https://github.com/justinformentin",title:"GitHub"}},[i("svg",{attrs:{viewBox:"0 0 512 512",width:"35",height:"35",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"socialPath",d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z","fill-rule":"nonzero"}})])]),t._v(" "),i("a",{staticClass:"social-icon",attrs:{href:"https://linkedin.com/in/justinformentin",title:"LinkedIn"}},[i("svg",{attrs:{viewBox:"0 0 512 512",width:"35",height:"35",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"socialPath",d:"M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z","fill-rule":"nonzero"}})])]),t._v(" "),i("a",{staticClass:"social-icon",attrs:{href:"https://twitter.com/justinformentin",title:"Twitter"}},[i("svg",{attrs:{viewBox:"0 0 512 512",width:"35",height:"35",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"socialPath",d:"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}})])]),t._v(" "),i("a",{staticClass:"social-icon",attrs:{href:"mailto:talktojustintoday@gmail.com",title:"Email"}},[i("svg",{attrs:{viewBox:"0 0 512 512",width:"35",height:"35",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"socialPath",d:"M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z","fill-rule":"nonzero"}})])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"caseStudy",attrs:{id:"caseQuantyst"}},[a("CaseHero",[a("ul",{slot:"headerRole"},[a("li",[a("h5",[t._v("Role")])]),t._v(" "),a("li",[a("h5",[t._v("Lead designer")])])]),t._v(" "),a("ul",{slot:"headerScope"},[a("li",[a("h5",[t._v("Scope")])]),t._v(" "),a("li",[a("h5",[t._v("Product Design")])]),t._v(" "),a("li",[a("h5",[t._v("Branding")])]),t._v(" "),a("li",[a("h5",[t._v("Illustration")])]),t._v(" "),a("li",[a("h5",[t._v("Prototyping")])])]),t._v(" "),a("ul",{slot:"headerDeliverables"},[a("li",[a("h5",[t._v("Deliverables")])]),t._v(" "),a("li",[a("h5",[t._v("Guidelines")])]),t._v(" "),a("li",[a("h5",[t._v("Mockups")])]),t._v(" "),a("li",[a("h5",[t._v("Prototype")])])]),t._v(" "),a("ul",{slot:"headerDuration"},[a("li",[a("h5",[t._v("Duration")])]),t._v(" "),a("li",[a("h5",[t._v("5 months")])])]),t._v(" "),a("h3",{slot:"headerTitle"},[t._v("Quantyst")]),t._v(" "),a("ul",{slot:"headerChallenges"},[a("li",[a("h5",[t._v("Challenges")])]),t._v(" "),a("li",[a("div",[a("span",[t._v("1")]),a("p",[t._v("Creating personality and a brand for a data company.")])])]),t._v(" "),a("li",[a("div",[a("span",[t._v("2")]),a("p",[t._v("Designing the design.")])])]),t._v(" "),a("li",[a("div",[a("span",[t._v("3")]),a("p",[t._v("Delivering a website that doesn't look awful.")])])])]),t._v(" "),a("div",{staticClass:"h-pic",slot:"headerPic"})]),t._v(" "),a("article",[t._v("\n    Quantyst is a data company. They utilize machine learning models to quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts and guage trend direction. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.\n  ")]),t._v(" "),a("Card",{staticClass:"light"},[a("h3",{slot:"cardTitle"},[t._v("Brand")]),t._v(" "),a("div",{slot:"cardContent"},[a("p",[t._v("By now you should know that Quantyst is a data company. They do something to quantify something and it has to do with machine learning I think. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.")])]),t._v(" "),a("Flickity",{ref:"flickity",staticClass:"gallery",attrs:{options:t.flickityOptions},slot:"cardGallery"},[a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(44),alt:"Illustration",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(45),alt:"App Icon",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(46),alt:"Colour and type",width:"1280",height:"960"}})])])],1),t._v(" "),a("article",[t._v("\n    Is Quantyst is a data company? I don't know how they utilize machine learning models to quantify the massive amounts of data on the internet, but they do. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.\n  ")]),t._v(" "),a("Card",{staticClass:"light"},[a("h3",{slot:"cardTitle"},[t._v("Design")]),t._v(" "),a("div",{slot:"cardContent"},[a("p",[t._v("Why is Quantyst is a data company? Is that a rhetorical quantion? Something about machine learning models goes here so they can quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.")])]),t._v(" "),a("Flickity",{ref:"flickity",staticClass:"gallery",attrs:{options:t.flickityOptions},slot:"cardGallery"},[a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(8),alt:"Quantyst Collection View",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(9),alt:"Quantyst Artist View",width:"1280",height:"960"}})]),t._v(" "),a("figure",{staticClass:"item tablet"},[a("img",{attrs:{src:i(10),alt:"Quantyst Art View",width:"1280",height:"960"}})])])],1),t._v(" "),a("article",[t._v("\n    I don't know about you, but I think it's pretty cool that Quantyst is a data company. They utilize machine learning models to quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Yeah yeah, cold, lifeless something something holds data. We understand.\n  ")]),t._v(" "),a("LinkGroup",[a("router-link",{staticClass:"button",attrs:{to:"/"},slot:"backLink"},[a("span",{staticClass:"highlighter"},[t._v("Go back")])]),t._v(" "),a("a",{staticClass:"button",attrs:{href:"https://quantyst.com",target:"_blank"},slot:"storeLink"},[a("span",{staticClass:"highlighter"},[t._v("View Site")]),a("svg",{attrs:{width:"9",height:"14",viewBox:"0 0 9 14"}},[a("path",{attrs:{"stroke-width":"1.8",d:"M1.5 1.5L7 7l-5.5 5.5",fill:"none","fill-rule":"evenodd"}})])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"h-top"},[t._t("headerRole"),t._v(" "),t._t("headerScope"),t._v(" "),t._t("headerDeliverables"),t._v(" "),t._t("headerDuration")],2),t._v(" "),i("div",{staticClass:"h-wrapper"},[i("aside",[t._t("headerTitle"),t._v(" "),i("div",{staticClass:"challenges"},[t._t("headerChallenges")],2)],2),t._v(" "),i("div",{staticClass:"h-right"},[t._t("headerPic")],2)])])},staticRenderFns:[]}}],[21]);
//# sourceMappingURL=app.0a439f71a1a7ce3a619a.js.map