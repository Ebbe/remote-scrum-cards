(this["webpackJsonpremote-scrum-cards"]=this["webpackJsonpremote-scrum-cards"]||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},18:function(n,e){function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=18},19:function(n,e,t){"use strict";t.r(e);var o=t(1),c=t.n(o),r=t(9),i=t.n(r),a=(t(14),t(3)),u=(t(15),t(0));function s(){var n=Object(o.useState)(""),e=Object(a.a)(n,2),t=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:["Start",Object(u.jsx)("form",{onSubmit:function(n){n.preventDefault(),window.location.href="?room=".concat(t)},children:Object(u.jsx)("input",{type:"text",name:"roomId",onChange:function(n){return c(n.target.value)}})})]})}function f(){return Object(u.jsx)(u.Fragment,{children:"Loading"})}var d=t(2),p=t.n(d),h=t(6),l=t(8),j=t.n(l),b=t(4),m=t(5),v=function(){function n(e){Object(b.a)(this,n),this.connection=void 0,this.connection=e,this.connection.on("data",(function(n){console.debug("Got data:",n)}))}return Object(m.a)(n,[{key:"addConnection",value:function(){}},{key:"setMyName",value:function(n){this.connection.send({myNameIs:n})}}]),n}(),O=function(){function n(e){var t=this;Object(b.a)(this,n),this.peer=void 0,this.connections=[],this.peer=e,this.peer.on("connection",(function(n){t.addConnection(n)}))}return Object(m.a)(n,[{key:"sendToAll",value:function(n){this.connections.forEach((function(e){e.send(n)}))}},{key:"setMyName",value:function(n){this.sendToAll({myNameIs:n})}},{key:"addConnection",value:function(n){this.connections.push(n),console.debug("new connection",n),n.on("data",(function(n){console.debug("Got data:",n)}))}}]),n}(),w={};function g(n){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,t){var o=new j.a("remote-scrum-cards-".concat(e),w);o.on("open",(function(e){console.log("My peer ID is: "+e),n(new O(o))})),o.on("error",(function(n){t()}))})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,t){var o=new j.a(void 0,w);o.on("open",(function(c){console.log("My peer ID is now: "+c);var r=o.connect("remote-scrum-cards-".concat(e));r.on("open",(function(){console.debug("Opened connection"),n(new v(r))})),r.on("error",(function(n){console.debug("error",n),t()}))}))})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(n){var e=n.id,t=Object(o.useState)(void 0),c=Object(a.a)(t,2),r=c[0],i=c[1];return Object(o.useEffect)((function(){function n(){return(n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=i,n.next=3,g(e).catch((function(){return x(e)}));case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}r||function(){n.apply(this,arguments)}()}),[r,e]),Object(u.jsxs)(u.Fragment,{children:["I rum ",e,Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",name:"name",onChange:function(n){return e=n.target.value,void((t=r)&&t.setMyName(e));var e,t}})]})}var F=function(){var n=Object(o.useState)(void 0),e=Object(a.a)(n,2),t=e[0],c=e[1];Object(o.useEffect)((function(){c(new URLSearchParams(window.location.search).get("room"))}),[]);var r=null===t?Object(u.jsx)(s,{}):void 0===t?Object(u.jsx)(f,{}):Object(u.jsx)(C,{id:t});return Object(u.jsx)("div",{className:"App",children:r})},I=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(e){var t=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),o(n),c(n),r(n),i(n)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),I()}},[[19,1,2]]]);
//# sourceMappingURL=main.86705324.chunk.js.map