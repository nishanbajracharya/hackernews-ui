(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},32:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),i=(a(30),a(32),a(6)),c=a(7),l=a(9),u=a(8),d=a(10),m=a(60),h=a(61),p=a(11),v=a.n(p),f=a(12),g=a(59),E=a(22),k=a.n(E),w=Object({NODE_ENV:"production",PUBLIC_URL:"/hackernews-ui"}).REACT_APP_API_URL||"https://hacker-news.firebaseio.com/v0",b=k.a.create({baseURL:w,responseType:"json"});var y={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.responseType,s=void 0===r?"json":r,o=t.headers;return b({url:e,params:n,headers:void 0===o?{}:o,responseType:s,method:"get"}).then(function(e){return e.data})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,s=void 0===r?{}:r,o=t.headers;return b({url:e,params:n,headers:void 0===o?{}:o,data:s,method:"put"}).then(function(e){return e.data})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,s=void 0===r?{}:r,o=t.headers;return b({url:e,headers:void 0===o?{}:o,params:n,data:s,method:"post"}).then(function(e){return e.data})},delete:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).params;return b({url:e,headers:{},params:void 0===t?{}:t,method:"delete"}).then(function(e){return e.data})}},j=function(e){var t=e.onClick,a=void 0===t?function(e){return e}:t,n=e.className,s=void 0===n?"":n;return r.a.createElement("svg",{width:"32",className:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",onClick:a},r.a.createElement("path",{fill:"#fff",d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}))},O=a(1),N=function(e){var t=e.stroke,a=void 0===t?"#49c":t;return r.a.createElement("svg",{width:"38",height:"38",xmlns:"http://www.w3.org/2000/svg",stroke:a},r.a.createElement("g",{transform:"translate(1 1)",strokeWidth:"2",fill:"none",fillRule:"evenodd"},r.a.createElement("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),r.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}))))},C=function(e){var t=e.className,a=void 0===t?"":t;return r.a.createElement("div",{className:"loading ".concat(a)})};C.PropTypes={className:a.n(O).a.string};var x=C,L=function(e){var t=e.page,a=void 0===t?0:t,n=e.changePage,s=void 0===n?function(e){return e}:n;return r.a.createElement("div",{className:"pages"},r.a.createElement(j,{onClick:function(){return s(-1)}}),a+1,r.a.createElement(j,{className:"forward",onClick:function(){return s(1)}}))},P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={loading:!0,data:{}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/item/".concat(this.props.id,".json"));case 2:t=e.sent,this.setState({data:t,loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"list-item"},this.state.loading&&r.a.createElement(x,{className:"centered"}),this.state.data.id&&r.a.createElement("div",null,r.a.createElement(g.a,{to:{state:{data:this.state.data},pathname:"/story/".concat(this.props.id)}},this.state.data.title)))}}]),t}(r.a.PureComponent),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).changePage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;0===e.state.page&&-1===t||e.setState({page:e.state.page+t})},e.state={page:0,pageSize:50,loading:!0,list:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/topstories.json");case 2:t=e.sent,this.setState({list:t,loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"main-title"},"Hacker News Stories",r.a.createElement(L,{page:this.state.page,changePage:this.changePage})),this.state.loading&&r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement("p",null,"Fetching Stories")),r.a.createElement("div",{className:"container"},this.state.list.slice(this.state.page*this.state.pageSize,(this.state.page+1)*this.state.pageSize).map(function(e){return r.a.createElement(P,{id:e,key:e})})))}}]),t}(r.a.PureComponent),R=function(e){var t=e.onClick,a=void 0===t?function(e){return e}:t,n=e.className,s=e.fill,o=void 0===s?"#a22":s;return r.a.createElement("svg",{className:n,width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",onClick:a},r.a.createElement("path",{fill:o,d:"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}))};var T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={loading:!0,data:{}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/item/".concat(this.props.id,".json"));case 2:t=e.sent,this.setState({data:t,loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},this.state.loading&&r.a.createElement(x,null),this.state.data.id&&r.a.createElement("div",{className:"comment-body"},r.a.createElement("h4",null,this.state.data.by),r.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:this.state.data.text}})),this.state.data.kids&&this.state.data.kids.length>0&&r.a.createElement("div",{className:"comment-sub"},this.state.data.kids.map(function(e,a){return r.a.createElement(t,{id:e,key:a})})))}}]),t}(r.a.PureComponent),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onRequestClose=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({className:""}),setTimeout(function(){return(t&&"Escape"===t.key||a)&&e.props.history.goBack()},250)},e.onHandleOverlayClick=function(t){t.target===e.content||function(e,t){for(var a=t.parentNode;null!=a;){if(a===e)return!0;a=a.parentNode}return!1}(e.content,t.target)||e.onRequestClose(null,!0)},e.state={className:"",data:{kids:[]}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({className:"open"})}),this.props.location&&this.props.location.state&&this.setState({data:this.props.location.state.data}),document.addEventListener("keydown",this.onRequestClose)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal-overlay",onClick:this.onHandleOverlayClick},r.a.createElement("div",{className:"modal-content ".concat(this.state.className),ref:function(t){return e.content=t}},r.a.createElement(R,{className:"close",onClick:function(){return e.onRequestClose(null,!0)}}),r.a.createElement("h2",null,r.a.createElement("a",{href:this.state.data.url,target:"_blank",rel:"noopener noreferrer"},this.state.data.title)),this.state.data.kids&&this.state.data.kids.length>0&&r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),this.state.data.kids.map(function(e,t){return r.a.createElement(T,{id:e,key:t})}))))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onRequestClose)}}]),t}(r.a.PureComponent),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/hackernews-ui"},r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{path:"/",component:S}),r.a.createElement(h.a,{path:"/story/:storyId",component:M})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.321404c1.chunk.js.map