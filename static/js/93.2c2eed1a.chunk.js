(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{796:function(m,e,t){"use strict";t.d(e,"a",function(){return h});function a(){return u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(n.a,null,u.a.createElement("title",null,"Error"),u.a.createElement("meta",{name:"page title",content:"page title"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement("div",{className:"error-box"},u.a.createElement("h1",null,"Error"),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-warning"})," Oops! Something went wrong"),u.a.createElement("p",null,"Please try again after sometime."),u.a.createElement(i.b,{to:"/app",className:"btn btn-custom"},"Back to Home"))))}function r(){return u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(n.a,null,u.a.createElement("title",null,"Error 403"),u.a.createElement("meta",{name:"page title",content:"page title"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement("div",{className:"error-box"},u.a.createElement("h2",null,"Error 403"),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-warning"})," Permission Denied"),u.a.createElement("p",null,"You do not have permissions to access this resource."),u.a.createElement(i.b,{to:"/app",className:"btn btn-custom"},"Back to Home"))))}var e=t(41),c=t.n(e),e=t(42),l=t.n(e),e=t(57),s=t.n(e),e=t(218),f=t.n(e),e=t(84),o=t.n(e),e=t(0),u=t.n(e),n=t(595),i=t(124);function p(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=o()(n);return e=a?(e=o()(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),f()(this,e)}}var E=function(e){s()(n,e);var t=p(n);function n(e){return c()(this,n),(e=t.call(this,e)).state={hasError:!1,errorInfo:""},e}return l()(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return 403==this.state.errorInfo?u.a.createElement(r,null):this.state.hasError?u.a.createElement(a,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){var t=document.querySelector(".modal-backdrop");return t&&t.remove(),{hasError:!0,errorInfo:e}}}]),n}(u.a.Component),h=function(e){return u.a.createElement(E,null,u.a.createElement(e,null))}},960:function(i,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),r=t(43),n=t(126),c=t(115),l=t(796),o=Object(n.a)(function(){return Promise.all([t.e(0),t.e(55)]).then(t.bind(null,1061))},{fallback:a.a.createElement(c.a,null)}),u=Object(n.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(31)]).then(t.bind(null,1064))},{fallback:a.a.createElement(c.a,null)});e.default=function(e){e=e.match;return a.a.createElement(r.Switch,null,a.a.createElement(r.Redirect,{exact:!0,from:"".concat(e.url,"/"),to:"".concat(e.url,"/permission-group")}),a.a.createElement(r.Route,{path:"".concat(e.url,"/permission-group"),component:function(){return Object(l.a)(o)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/user-group"),component:function(){return Object(l.a)(u)}}))}}}]);