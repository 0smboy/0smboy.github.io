(function(t){function e(e){for(var a,r,l=e[0],o=e[1],c=e[2],m=0,f=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"px-0",attrs:{fluid:""}},[s("ais-instant-search",{attrs:{"index-name":"artWorks","search-client":t.searchClient}},[s("b-row",[s("b-col",{staticClass:"col-md-3 col-lg-2 nav-left"},[s("b-nav",{staticClass:"d-flex justify-content-center",attrs:{id:"sidebar-1"}},[s("b-navbar",{staticClass:"px-1 d-flex flex-column"},[s("div",{staticClass:"d-flex flex-column d-md-none"},[s("b-navbar-brand",{staticClass:"d-flex flex-column align-items-center navbar-mobile"},[s("img",{staticClass:"mb-3",attrs:{src:"https://raw.githubusercontent.com/meilisearch/integration-guides/master/assets/logos/logo.svg",alt:"MeiliSearch logo",width:"70",height:"70"}}),s("div",{staticClass:"d-flex flex-column align-items-center"},[s("p",{staticClass:"header-title"},[t._v("MeiliSearch x MoMA")]),s("p",{staticClass:"disclaimer"},[t._v("Enjoy searching with MeiliSearch!")])])])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"filters mt-5"},[s("ais-clear-refinements",{staticStyle:{"text-align":"center"},attrs:{"class-names":{"ais-ClearRefinements-button":"mybtn mybtn--clear","ais-ClearRefinements-button--disabled":"mybtn--clear--disabled"}}},[s("span",{attrs:{slot:"resetLabel"},slot:"resetLabel"},[t._v("Clear filters")])]),t._l(t.filters,(function(e,a){return s("div",{key:a,staticClass:"search-panel__filters d-flex flex-column align-items-start"},[s("h4",{staticClass:"filters mt-4",on:{click:function(t){t.preventDefault(),e.isExpanded=!e.isExpanded}}},[s("font-awesome-icon",{attrs:{icon:t.whichIcon(e.name),size:"xs"}}),t._v(" "+t._s(e.name)+" "),s("font-awesome-icon",{attrs:{icon:e.isExpanded?"chevron-up":"chevron-down",size:"xs"}})],1),s("div",{staticClass:"d-flex"},[s("ais-refinement-list",{directives:[{name:"show",rawName:"v-show",value:e.isExpanded,expression:"filter.isExpanded"}],attrs:{limit:5,"show-more":"Gender"!==e.name,"transform-items":t.transformRefinementListItem,attribute:e.name,"class-names":{"ais-RefinementList-showMore":"btn btn-secondary btn-sm","ais-RefinementList":"mx-auto"}}})],1)])}))],2),s("b-button",{staticClass:"d-md-none",attrs:{size:"sm",variant:"light"},on:{click:function(e){e.preventDefault(),t.show=!t.show}}},[t._v(t._s(this.show?"HIDE FILTERS":"SHOW FILTERS"))])],1)],1)],1),s("b-col",{staticClass:"col-md-9 col-lg-10"},[s("b-row",[s("b-col",[s("b-navbar",{staticClass:"pl-5 d-none d-md-flex flex-column align-items-start"},[s("b-navbar-brand",{staticClass:"d-flex justify-content-center align-items-center"},[s("img",{attrs:{src:"https://raw.githubusercontent.com/meilisearch/integration-guides/master/assets/logos/logo.svg",alt:"MeiliSearch logo",height:"60px"}}),s("p",{staticClass:"header-title my-0"},[t._v(" MeiliSearch x MoMA")])]),s("div",{staticClass:"disclaimer disclaimer-desktop"},[t._v("Enjoy searching with MeiliSearch!")])],1)],1)],1),s("b-row",{staticClass:"mt-5"},[s("b-col",{staticClass:"col-10 mx-auto "},[s("b-row",[s("b-col",{staticClass:"col-12 col-md-10 my-3 mx-auto d-flex up-bar"},[s("ais-stats"),s("ais-sort-by",{attrs:{items:[{value:"artWorks",label:"Featured"},{value:"artWorks:DateToSortBy:asc",label:"Date asc."},{value:"artWorks:DateToSortBy:desc",label:"Date desc."}],"class-names":{"ais-SortBy":"MyCustomSortBy"}}})],1)],1),s("b-row",[s("b-col",{staticClass:"col-12 col-md-10 mx-auto"},[s("ais-search-box",{staticClass:"search-box",attrs:{placeholder:"Search here...",autofocus:""}})],1)],1),s("b-row",[s("ais-current-refinements",{attrs:{"class-names":{"ais-CurrentRefinements":"MyCustomCurrentRefinements","ais-CurrentRefinements-item":"MyCustomCurrentRefinementsItem"}}})],1)],1)],1),s("b-row",{staticClass:"mt-3"},[s("b-col",{staticClass:"px-5"},[s("ais-infinite-hits",{staticClass:"hits",attrs:{"class-names":{"ais-InfiniteHits":"myInfiniteHits","ais-InfiniteHits-list":"myInfiniteHitsList","ais-InfiniteHits-item":"myInfiniteHitsItem"},"transform-items":t.transformHitItems},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[s("h4",{staticClass:"center-title"},[s("ais-highlight",{attrs:{attribute:"Title",hit:a,"class-names":{"ais-Highlight":"artwork-title"}}}),s("br"),s("ais-highlight",{attrs:{attribute:"Date",hit:a,"class-names":{"ais-Highlight":"artwork-date"}}})],1),a.ThumbnailURL?s("a",{attrs:{href:a.URL}},[s("img",{staticClass:"picture",attrs:{src:a.ThumbnailURL,alt:a.Title}})]):a.URL?s("p",{staticClass:"center-title"},[t._v("No picture available. "),s("br"),t._v(" "),s("a",{staticClass:"center-title",attrs:{href:a.URL}},[t._v("Go to MoMA's artwork website")])]):s("p",[t._v("No picture available")]),s("p",{staticClass:"center-title"},[s("ais-highlight",{attrs:{attribute:"Artist",hit:a}}),s("br"),s("ais-highlight",{directives:[{name:"show",rawName:"v-show",value:!a.VariousArtists,expression:"!item.VariousArtists"}],attrs:{attribute:"ArtistBio",hit:a}})],1),s("p",{staticClass:"center-title"},[t._v("Medium "),s("br"),s("ais-highlight",{attrs:{attribute:"Medium",hit:a}})],1),s("p",{staticClass:"center-title"},[t._v("Dimensions "),s("br"),s("ais-highlight",{attrs:{attribute:"Dimensions",hit:a}})],1),s("p",[t._v("Department of "),s("ais-highlight",{attrs:{attribute:"Department",hit:a}})],1)]}},{key:"loadMore",fn:function(e){var a=e.isLastPage,i=e.refineNext;return s("b-button",{staticClass:"mx-auto my-5",attrs:{disabled:a},on:{click:i}},[t._v(" Show more ")])}}])})],1)],1)],1)],1)],1)],1)},n=[],r=s("5530"),l=(s("d81d"),s("c2ca"),s("6c68")),o=(s("f9e3"),s("2dd8"),{data:function(){return{searchClient:Object(l["instantMeiliSearch"])("http://47.106.213.151:7007","2f488dbf46be2453252179f94b7f5f77"),show:!0,isExpanded:!0,filters:[{name:"Classification",isExpanded:!0},{name:"Nationality",isExpanded:!0},{name:"Gender",isExpanded:!0}]}},methods:{transformRefinementListItem:function(t){return t.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{label:""===t.label?"Unspecified":t.label})}))},transformHitItems:function(t){return t.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{_highlightResult:Object(r["a"])({},t._highlightResult)})}))},whichIcon:function(t){return"Gender"===t?"venus-mars":"Nationality"===t?"flag":"hashtag"}}}),c=o,u=(s("034f"),s("2877")),m=Object(u["a"])(c,i,n,!1,null,null,null),f=m.exports,d=s("9584"),h=s("5f5b"),b=s("b1e0"),p=s("ecee"),v=s("c074"),g=s("ad3d");p["c"].add(v["a"],v["b"],v["c"],v["e"],v["d"]),a["default"].component("font-awesome-icon",g["a"]),a["default"].use(d["a"]),a["default"].use(h["a"]),a["default"].use(b["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.a5f4cf2f.js.map
