(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"users":[{"id":"1","name":"Levon","surname":"Sargis","desc":"Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."},{"id":"2","name":"Poghos","surname":"Haig","desc":"Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."},{"id":"3","name":"Keghart","surname":"Petros","desc":"Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."},{"id":"4","name":"Vardan","surname":"Hakob","desc":"Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."},{"id":"5","name":"Ohannes","surname":"Sahak","desc":"Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."},{"id":"6","name":"Khajag","surname":"Stepan","desc":"Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."},{"id":"7","name":"Jirair","surname":"Ara","desc":"Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."},{"id":"8","name":"Sevan","surname":"Hagop","desc":"Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."},{"id":"9","name":"Daniel","surname":"Avetis","desc":"Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."},{"id":"10","name":"Levon","surname":"Sargis","desc":"Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."},{"id":"11","name":"Poghos","surname":"Haig","desc":"Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."},{"id":"12","name":"Keghart","surname":"Petros","desc":"Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."},{"id":"13","name":"Vardan","surname":"Hakob","desc":"Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."},{"id":"14","name":"Hagop","surname":"Rouben","desc":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."},{"id":"15","name":"Ohannes","surname":"Sahak","desc":"Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."},{"id":"16","name":"Khajag","surname":"Stepan","desc":"Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."},{"id":"17","name":"Jirair","surname":"Ara","desc":"Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."},{"id":"18","name":"Sevan","surname":"Hagop","desc":"Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."},{"id":"19","name":"Daniel","surname":"Avetis","desc":"Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."},{"id":"20","name":"Hagop","surname":"Rouben","desc":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."}]}')},13:function(e,a,t){e.exports=t(25)},18:function(e,a,t){},19:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),u=t(4),i=t.n(u),r=(t(18),t(19),t(2)),c=t(9),l=t(5),m=function(e){return{type:"SET_ACTIVEPAGE",value:e}},o=function(e){return e.users},d=function(e){return e.users.length},v=function(e){return e.activePage},p=function(e){return e.usersOnPage},g=Object(l.b)((function(e,a){switch(a.type){case"SET_USERS":return Object(c.a)({},e,{users:a.value});case"SET_ACTIVEPAGE":return Object(c.a)({},e,{activePage:a.value});default:return e}}),{users:[],activePage:1,usersOnPage:5}),f=Object(r.b)((function(e){return{users:o(e),usersLength:d(e),activePage:v(e),usersOnPage:p(e)}}),(function(e){return{changeActivePage:function(a){return e(m(a))}}}))((function(e){var a=e.users,t=e.usersLength,n=e.activePage,u=e.usersOnPage,i=n*u-u+1,r=n*u>=t?t:n*u;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"cards-box"},a.map((function(e,a){return a+1>=i&&a+1<=r&&s.a.createElement("div",{className:"card"},s.a.createElement("p",{className:"name"},"".concat(e.name," ").concat(e.surname)),s.a.createElement("p",null,e.desc))}))),s.a.createElement("p",{className:"count"},"".concat(i," - ").concat(r," of ").concat(t," users")))})),b=Object(r.b)((function(e){return{usersLength:d(e),activePage:v(e),usersOnPage:p(e)}}),(function(e){return{changeActivePage:function(a){return e(m(a))}}}))((function(e){var a=e.usersLength,t=e.activePage,n=e.usersOnPage,u=e.changeActivePage,i=Array(Math.ceil(a/n)).fill(""),r=function(e){console.log(e.target.innerText),"Next"===e.target.innerText?u(t+1>i.length?i.length:t+1):"Prev"===e.target.innerText?u(t-1<1?1:t-1):u(+e.target.innerText)};return s.a.createElement("div",null,s.a.createElement("button",{onClick:r,className:"button"},"Prev"),i.map((function(e,a){return s.a.createElement("button",{onClick:r,className:t===a+1?"button button--active":"button"},a+1)})),s.a.createElement("button",{onClick:r,className:"button"},"Next"))})),h=Object(r.b)((function(e){return{users:o(e)}}),(function(e){return{loadUsers:function(a){return e(function(e){return{type:"SET_USERS",value:e}}(a))},changeActivePage:function(a){return e(m(a))}}}))((function(e){var a=e.users,t=e.loadUsers;return s.a.createElement("div",null,0===a.length&&s.a.createElement("button",{type:"button",className:"load-button",onClick:function(){var e=E();t(e)}},"Click to load Users"),0!==a.length&&s.a.createElement("div",null,s.a.createElement("h1",{className:"header"},"users"),s.a.createElement(f,null),s.a.createElement(b,null)))})),P=t(12),E=function(){return P.users},S=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(r.a,{store:g},s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b10bff59.chunk.js.map