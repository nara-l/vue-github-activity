!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define("github-feed",["axios"],t):"object"==typeof exports?exports["github-feed"]=t(require("axios")):e["github-feed"]=t(e.axios)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1);var r=n(6)(n(7),n(15),"data-v-266211d2",null);e.exports=r.exports},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(4)("51d28e6b",r,!0)},function(e,t,n){t=e.exports=n(3)(!1),t.push([e.id,".feed[data-v-266211d2]{position:relative;display:table;height:100%;min-height:200px;width:100%;min-width:500px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-size:1rem;color:#373a3c}.header-wrapper[data-v-266211d2]{display:table-row;height:1px}.header[data-v-266211d2]{display:table-cell;top:1px;left:1px;padding:10px;border-bottom:1px solid #ddd}.avatar-wrapper[data-v-266211d2]{display:inline;float:right;margin-right:10px;padding-right:20px;max-width:60px;height:67px}.avatar[data-v-266211d2]{padding:3px;height:100%;border:1px solid #ddd;box-shadow:1px 1px 3px #ccc}.github-octicon[data-v-266211d2]{font:normal normal 40px octicons}.github-icon[data-v-266211d2]{display:inline;float:left;padding:9px 0 0;width:35px;height:35px}.github-username[data-v-266211d2]{font-size:20px;font-style:normal;font-weight:300;line-height:24px;color:#666}.github-profile[data-v-266211d2]{display:inline-block;float:left;margin:0 auto;padding:6px 10px 5px;color:#495961;font-size:20px;text-decoration:none;margin-left:10px}.footer-wrapper[data-v-266211d2]{padding:5px;font-weight:700;font-size:13px;border-top:1px solid #ddd;font-family:Helvetica,arial,freesans,clean,sans-serif}.events-wrapper[data-v-266211d2]{height:100%;display:table-row}.feed-list[data-v-266211d2]{overflowY:auto;position:relative;display:table-cell}.event-list[data-v-266211d2]{position:absolute;width:100%;min-height:100px}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a),o=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var i=f++;r=p||(p=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document,c=n(5),l={},u=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var a=c(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=l[o.id];s.refs--,n.push(s)}t?(a=c(e,t),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete l[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],d=i[2],c=i[3],l={id:e+":"+a,css:s,media:d,sourceMap:c};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,r){var a,i=e=e||{},o=typeof e["default"];"object"!==o&&"function"!==o||(a=e,i=e["default"]);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var d=Object.create(s.computed||null);Object.keys(r).forEach(function(e){var t=r[e];d[e]=function(){return t}}),s.computed=d}return{esModule:a,exports:i,options:s}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),i=r(a),o=n(10),s=r(o);t["default"]={name:"github-feed",props:{login:{required:!0}},components:[s["default"]],data:function(){return{user:{},events:[],loading:!1,error:!1}},created:function(){var e=this;i["default"].user(this.login).then(function(t){e.user=t.data,i["default"].events(e.login).then(function(t){e.loading=!1,e.error=!1,e.events=t.data})["catch"](function(t){e.loading=!1,e.error=!0})})["catch"](function(t){e.loading=!1,e.error=!0})}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=i["default"].create({baseURL:"https://api.github.com/users/"});t["default"]={user:function(e){return o.get(e)},events:function(e){return o.get(e+"/events")}}},function(t,n){t.exports=e},function(e,t,n){n(11);var r=n(6)(n(13),n(14),"data-v-b83820d4",null);e.exports=r.exports},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(4)("94394ade",r,!0)},function(e,t,n){t=e.exports=n(3)(!1),t.push([e.id,"github-event[data-v-b83820d4]{border-top:1px solid #f1f1f1;padding:1em 0 0;padding:1.5em 0 1.5em 25px}event-octicon[data-v-b83820d4]{color:#bbb;margin-right:10px}event-time[data-v-b83820d4]{display:inline-block;font-size:12px;margin-left:3px;color:#bbb}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"feed-event",props:{event:{required:!0}},data:function(){return{actionType:"pushed",octicon:"octicon-issue-closed dashboard-event-icon",actionUrl:""}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"github-event"},[n("span",{staticClass:"event-octicon octicon","class":e.octicon}),e._v(" "),e.event?n("div",{staticStyle:{display:"inline-block","font-size":"13px"}},[n("a",[e._v(e._s(e.event.actor.login))]),e._v(" "+e._s(e.actionType)+"\n        "),n("a",{staticStyle:{color:"#0275d8"},attrs:{href:e.actionUrl?e.actionUrl:e.event.repo.url}},[e._v(" "+e._s(e.event.repo.name)+" ")])]):e._e(),e._v(" "),e.event?n("div",{staticClass:"event-time"},[e._v("\n        "+e._s(e.moment(e.event.created_at).fromNow())+"\n    ")]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feed"},[n("div",{staticClass:"header-wrapper"},[n("div",{staticClass:"header"},[e._m(0),e._v(" "),n("a",{staticClass:"github-profile",attrs:{href:e.user.html_url,target:"_blank"}},[n("div",{staticStyle:{"font-size":"26px","line-height":"30px"}},[e._v("\n                    "+e._s(e.user.name)+"\n                ")]),e._v(" "),n("div",{staticClass:"github-username"},[e._v("\n                    "+e._s(e.user.login)+"\n                ")])]),e._v(" "),n("div",{staticClass:"avatar-wrapper"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar_url}})])])]),e._v(" "),n("div",{staticClass:"events-wrapper"},[n("div",{staticClass:"feed-list"},[n("div",{staticClass:"event-list"},e._l(e.events,function(e){return n("div",{key:e.id},[n("feed-event",{attrs:{event:e}})],1)}))])]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"github-icon"},[n("span",{staticClass:"github-octicon octicon octicon-mark-github"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-wrapper"},[n("p",{staticStyle:{display:"inline"}},[e._v("Public Activity")]),e._v(" "),n("a",{staticStyle:{"float":"right",color:"#232323"},attrs:{target:"_blank",href:"https://github.com/lexmartinez/vue-github-activity"}},[e._v("GitHub Activity Feed")])])}]}}])});