(this.webpackJsonpsw=this.webpackJsonpsw||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(4),o=c.n(a),i=(c(12),c(2)),u=(c(13),Object(r.createContext)({})),l=c(5),h=c(6),j="".concat("https://swapi.dev/api/","people/"),b="".concat(j,"?page1"),x=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,[{key:"fetchList",value:function(){return fetch(b)}},{key:"fetchListByURL",value:function(e){return fetch(e)}},{key:"fetchDetails",value:function(e){return fetch(j+e)}},{key:"fetchSearch",value:function(e){return fetch(j+e)}}]),e}();function v(e){return Object(n.jsxs)("svg",{"aria-hidden":"true",width:e.width,height:e.height,focusable:"false","data-prefix":"fas","data-icon":"chevron-right",className:e.className,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:["'",Object(n.jsx)("path",{fill:e.fill,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})]})}c(14);function f(e){var t=Object(r.useState)(""),c=Object(i.a)(t,2),s=c[0],a=c[1],o=Object(r.useState)("0px"),u=Object(i.a)(o,2),l=u[0],h=u[1],j=Object(r.useState)("accordion__icon"),b=Object(i.a)(j,2),x=b[0],f=b[1],p=Object(r.useRef)(null),O="";for(var d in e.content)O+="".concat(d,": ").concat(e.content[d]," ");return Object(n.jsxs)("div",{className:"accordion__section",children:[Object(n.jsxs)("button",{className:"accordion ".concat(s),onClick:function(){a(""===s?"active":""),h("active"===s?"0px":"".concat(p.current.scrollHeight,"px")),f("active"===s?"accordion__icon":"accordion__icon rotate")},children:[Object(n.jsx)("p",{className:"accordion__title",children:e.title}),Object(n.jsx)(v,{className:x,width:10,fill:"#777"})]}),Object(n.jsx)("div",{ref:p,className:"accordion__content",style:{maxHeight:"".concat(l)},children:Object(n.jsx)("div",{className:"accordion__text",dangerouslySetInnerHTML:{__html:O}})})]})}function p(e){var t=new x,c=Object(r.useContext)(u),s=c.setCharacterList,a=c.setNextURL,o=c.setPreviousURL;return Object(n.jsxs)("button",{onClick:function(e){var c=e.target.value;t.fetchListByURL(c).then((function(e){return e.json()})).then((function(e){var t;s(e.results),e.next&&(t=e.next.replace(/http/g,"https"),a(t)),e.previous&&(t=e.previous.replace(/http/g,"https"),o(t))}))},className:"btn btn-secondary",value:e.value,children:[" ",e.text," "]})}function O(e){return Object(n.jsx)(n.Fragment,{children:e.previousURL&&Object(n.jsx)(p,{value:e.previousURL,text:" Back "})})}function d(e){return Object(n.jsx)(n.Fragment,{children:e.nextURL&&Object(n.jsx)(p,{value:e.nextURL,text:" Next "})})}function g(){var e=new x,t=Object(r.useContext)(u),c=t.setCharacterList,s=t.setNextURL,a=t.setPreviousURL,o=t.searchTerm;return Object(n.jsx)("button",{onClick:function(t){var n="?search=".concat(t.target.value);e.fetchSearch(n).then((function(e){return e.json()})).then((function(e){var t;c(e.results),e.next&&(t=e.next.replace(/http/g,"https"),s(t),console.log(t)),e.previous&&(t=e.previous.replace(/http/g,"https"),a(t),console.log(t))}))},className:"btn btn-primary",value:o,children:" Search "})}function L(){var e=Object(r.useContext)(u).setSearchTerm;return Object(n.jsx)("input",{type:"text",onChange:function(t){return e(t.target.value.replace(/</g,"&lt;").replace(/>/g,"&gt;"))}})}function m(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(L,{}),Object(n.jsx)(g,{})]})}function R(){var e=Object(r.useContext)(u),t=e.characterList,c=e.setCharacterList,s=e.nextURL,a=e.setNextURL,o=e.previousURL,i=e.setPreviousURL,l=new x;return Object(r.useEffect)((function(){l.fetchList().then((function(e){return e.json()})).then((function(e){var t;c(e.results),e.next&&(t=e.next.replace(/http/g,"https"),a(t),console.log(t)),e.previous&&(t=e.previous.replace(/http/g,"https"),i(t),console.log(t))}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),Object(n.jsx)(d,{nextURL:s}),Object(n.jsx)(O,{previousURL:o}),t&&t.map((function(e,t){var c={gender:e.gender,height:e.height,hairColor:e.hair_color,eyeColor:e.eye_color};return Object(n.jsx)(f,{title:e.name,content:c},t)}))]})}var U=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(null),o=Object(i.a)(a,2),l=o[0],h=o[1],j=Object(r.useState)(null),b=Object(i.a)(j,2),x=b[0],v=b[1],f=Object(r.useState)(null),p=Object(i.a)(f,2),O=p[0],d=p[1];return Object(n.jsx)("div",{children:Object(n.jsx)(u.Provider,{value:{characterList:l,setCharacterList:h,nextURL:x,setNextURL:v,previousURL:O,setPreviousURL:d,searchTerm:c,setSearchTerm:s},children:Object(n.jsx)(R,{})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c(15);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.a598cb3e.chunk.js.map