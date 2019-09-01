(window["webpackJsonpreact-tetris"]=window["webpackJsonpreact-tetris"]||[]).push([[0],{11:function(e,n,t){e.exports=t.p+"static/media/bg.91ccc7dd.jpg"},15:function(e,n,t){e.exports=t(27)},20:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=(t(20),t(1)),u=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},l=function(e,n,t){for(var r=t.x,o=t.y,a=0;a<e.tetromino.length;a+=1)for(var c=0;c<e.tetromino[a].length;c+=1)if(0!==e.tetromino[a][c]&&(!n[a+e.pos.y+o]||!n[a+e.pos.y+o][c+e.pos.x+r]||"clear"!==n[a+e.pos.y+o][c+e.pos.x+r][1]))return!0},f=t(2),s=t(3);function d(){var e=Object(f.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return d=function(){return e},e}var p=s.a.div(d(),function(e){return e.color},function(e){return 0===e.type?"0px solid":"4px solid"},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color}),b={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},m=function(){var e="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return b[e]},v=o.a.memo(function(e){var n=e.type;return o.a.createElement(p,{type:n,color:b[n].color},console.log("rerendered"))});function g(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return g=function(){return e},e}var h=s.a.div(g(),function(e){return e.height},function(e){return e.width},function(e){return e.width}),O=function(e){var n=e.stage;return o.a.createElement(h,{width:n[0].length,height:n.length},n.map(function(e){return e.map(function(e,n){return o.a.createElement(v,{key:n,type:e[0]})})}))};function x(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return x=function(){return e},e}var y=s.a.div(x(),function(e){return e.gameOver?"red":"#999"}),w=function(e){var n=e.gameOver,t=e.text;return o.a.createElement(y,{gameOver:n},t)};function j(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return j=function(){return e},e}var E=s.a.button(j()),S=function(e){var n=e.callback;return o.a.createElement(E,{onClick:n},"Start Game")},k=t(11),I=t.n(k);function T(){var e=Object(f.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return T=function(){return e},e}function J(){var e=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return J=function(){return e},e}var P=s.a.div(J(),I.a),L=s.a.div(T()),A=t(12);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var Z=function(){var e=Object(r.useState)({pos:{x:0,y:0},tetromino:b[0].shape,collided:!1}),n=Object(i.a)(e,2),t=n[0],o=n[1],a=function(e,n){var t=e.map(function(n,t){return e.map(function(e){return e[t]})});return n>0?t.map(function(e){return e.reverse()}):t.reverse()},c=Object(r.useCallback)(function(){o({pos:{x:4,y:0},tetromino:m().shape,collided:!1})},[]);return[t,function(e){var n=e.x,t=e.y,r=e.collided;o(function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(t,!0).forEach(function(n){Object(A.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{pos:{x:e.pos.x+=n,y:e.pos.y+=t},collided:r})})},c,function(e,n){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,n);for(var c=r.pos.x,i=1;l(r,e,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-n),void(r.pos.x=c);o(r)}]},D=function(e,n){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)(function(){d(0);var t=function(t){var r=t.map(function(e){return e.map(function(e){return"clear"===e[1]?[0,"clear"]:e})});return e.tetromino.forEach(function(n,t){n.forEach(function(n,o){0!==n&&(r[t+e.pos.y][o+e.pos.x]=[n,"".concat(e.collided?"merged":"clear")])})}),e.collided?(n(),function(e){return e.reduce(function(n,t){return-1===t.findIndex(function(e){return 0===e[0]})?(d(function(e){return e+1}),n.unshift(new Array(e[0].length).fill([0,"clear"])),n):(n.push(t),n)},[])}(r)):r};c(function(e){return t(e)})},[e,n]),[a,c,s]};t(26);var z=function(){var e=Object(r.useState)(null),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),s=f[0],d=f[1],p=Z(),b=Object(i.a)(p,4),m=b[0],v=b[1],g=b[2],h=b[3],x=D(m,g),y=Object(i.a)(x,3),j=y[0],E=y[1],k=function(e){var n=Object(r.useState)(0),t=Object(i.a)(n,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],m=[40,100,300,1200],v=Object(r.useCallback)(function(){e>0&&(a(function(n){return n+m[e-1]*(p+1)}),f(function(n){return n+e}))},[p,m,e]);return Object(r.useEffect)(function(){v()},[v,e,o]),[o,a,l,f,p,b]}(y[2]),I=Object(i.a)(k,6),T=I[0],J=I[1],A=I[2],C=I[3],z=I[4],R=I[5];console.log("rerender");var W=function(e){l(m,j,{x:e,y:0})||v({x:e,y:0})},B=function(){A>10*(z+1)&&(R(function(e){return e+1}),a(1e3/(z+1)+200)),l(m,j,{x:0,y:1})?(m.pos.y<1&&(console.log("GAME OVER !!!"),d(!0),a(null)),v({x:0,y:0,collided:!0})):v({x:0,y:1,collided:!1})},H=function(e){var n=e.keyCode;s||(37===n?W(-1):39===n?W(1):40===n?(console.log("Interval off"),a(null),B()):38===n&&h(j,1))};return function(e,n){var t=Object(r.useRef)();Object(r.useEffect)(function(){t.current=e},[e]),Object(r.useEffect)(function(){if(null!==n){var e=setInterval(function(){t.current()},n);return function(){clearInterval(e)}}},[n])}(function(){B()},t),o.a.createElement(P,{role:"button",tabIndex:"0",onKeyDown:function(e){return H(e)},onKeyUp:function(e){var n=e.keyCode;s||40===n&&(console.log("Interval on"),a(1e3/(z+1)+200))}},o.a.createElement("h1",{className:"tetris-h1"},"TETRIS BUILT WITH REACT"),o.a.createElement(L,null,o.a.createElement(O,{stage:j}),o.a.createElement("aside",null,s?o.a.createElement(w,{gameOver:s,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(w,{text:"Score: ".concat(T)}),o.a.createElement(w,{text:"Rows: ".concat(A)}),o.a.createElement(w,{text:"Level: ".concat(z)})),o.a.createElement(S,{callback:function(){E(u()),a(500),g(),d(!1),J(0),C(0),R(0)}}),o.a.createElement("br",null),o.a.createElement("p",{style:{color:"white",fontWeight:"bold",whiteSpace:"nowrap"}},"Developed by Billy Huynh as a Learning Piece"),o.a.createElement("p",{style:{color:"white",fontWeight:"bold",whiteSpace:"nowrap"}},"Credits to by weibenfalk and freeCodeCamp.org"))))},R=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.add91248.chunk.js.map