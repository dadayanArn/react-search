(this["webpackJsonpreact-search"]=this["webpackJsonpreact-search"]||[]).push([[0],{132:function(e,t,r){e.exports=r(258)},256:function(e,t,r){},258:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(25),o=r.n(c),s=r(109),i=r(110),l=r(122),u=r(111),p=r(123),f=r(112),b=r(121),h=r(268),O=a.a.createContext();function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(){var e=Object(n.useState)({loading:!1}),t=Object(b.a)(e,2),r=t[0],c=t[1],o=Object(n.useContext)(O);return a.a.createElement("div",{className:"search-box"},a.a.createElement(h.a,{onChange:function(e){c(d({},r,{loading:!0}));var t=e.target.value,n=JSON.stringify({where:{title:{like:t}}});fetch("".concat("https://it-blog-posts.herokuapp.com/api/posts","?filter=").concat(n)).then((function(e){return e.json().then((function(e){c(d({},r,{loading:!1})),o.setPosts(e)}))})).catch((function(e){console.log("#AR: fetchData -> error",e),c(d({},r,{loading:!1}))}))},loading:r.loading,placeholder:"Search..."}))},v=r(267),g=function(){var e=Object(n.useContext)(O);return a.a.createElement("div",{className:"posts-box"},a.a.createElement(v.a.Group,null,e.results.map((function(e){return a.a.createElement(v.a,{key:e.id,fluid:!0,color:"yellow",header:e.title,description:e.description,meta:e.author})}))))},y=(r(256),function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).setPosts=function(e){r.setState({posts:e})},r.state={posts:[]},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.posts;return a.a.createElement(O.Provider,{value:{results:e,setPosts:this.setPosts}},a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"search"},a.a.createElement(j,null)),a.a.createElement("div",{className:"posts"},a.a.createElement(g,null))))}}]),t}(a.a.Component));r(257);o.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.f741039b.chunk.js.map