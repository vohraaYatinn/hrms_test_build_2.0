(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{789:function(m,e,t){"use strict";t.d(e,"a",function(){return h});function a(){return u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(n.a,null,u.a.createElement("title",null,"Error"),u.a.createElement("meta",{name:"page title",content:"page title"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement("div",{className:"error-box"},u.a.createElement("h1",null,"Error"),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-warning"})," Oops! Something went wrong"),u.a.createElement("p",null,"Please try again after sometime."),u.a.createElement(i.b,{to:"/app",className:"btn btn-custom"},"Back to Home"))))}function r(){return u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(n.a,null,u.a.createElement("title",null,"Error 403"),u.a.createElement("meta",{name:"page title",content:"page title"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement("div",{className:"error-box"},u.a.createElement("h2",null,"Error 403"),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-warning"})," Permission Denied"),u.a.createElement("p",null,"You do not have permissions to access this resource."),u.a.createElement(i.b,{to:"/app",className:"btn btn-custom"},"Back to Home"))))}var e=t(41),c=t.n(e),e=t(42),l=t.n(e),e=t(57),s=t.n(e),e=t(207),f=t.n(e),e=t(82),o=t.n(e),e=t(0),u=t.n(e),n=t(584),i=t(139);function p(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=o()(n);return e=a?(e=o()(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),f()(this,e)}}var E=function(e){s()(n,e);var t=p(n);function n(e){return c()(this,n),(e=t.call(this,e)).state={hasError:!1,errorInfo:""},e}return l()(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return 403==this.state.errorInfo?u.a.createElement(r,null):this.state.hasError?u.a.createElement(a,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){var t=document.querySelector(".modal-backdrop");return t&&t.remove(),{hasError:!0,errorInfo:e}}}]),n}(u.a.Component),h=function(e){return u.a.createElement(E,null,u.a.createElement(e,null))}},945:function(m,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),r=t(43),n=t(112),c=t(789),l=t(121),o=Object(l.a)(function(){return Promise.all([t.e(0),t.e(39)]).then(t.bind(null,1046))},{fallback:a.a.createElement(n.a,null)}),u=Object(l.a)(function(){return Promise.all([t.e(0),t.e(50)]).then(t.bind(null,1052))},{fallback:a.a.createElement(n.a,null)}),i=Object(l.a)(function(){return Promise.all([t.e(0),t.e(49)]).then(t.bind(null,1054))},{fallback:a.a.createElement(n.a,null)});e.default=function(e){e=e.match;return a.a.createElement(r.Switch,null,a.a.createElement(r.Redirect,{exact:!0,from:"".concat(e.url,"/"),to:"".concat(e.url,"/all-policies")}),a.a.createElement(r.Route,{path:"".concat(e.url,"/all-policies"),component:function(){return Object(c.a)(o)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/hr-policies"),component:function(){return Object(c.a)(o)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/add-policy/:from/:id"),component:function(){return Object(c.a)(u)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/add-policy"),component:function(){return Object(c.a)(u)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/policy-view/:from/:id"),component:function(){return Object(c.a)(i)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/policy-view"),component:function(){return Object(c.a)(i)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/notifications"),component:function(){return Object(c.a)(o)}}))}}}]);