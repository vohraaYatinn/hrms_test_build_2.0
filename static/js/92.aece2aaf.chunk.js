(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{796:function(m,e,t){"use strict";t.d(e,"a",function(){return b});function a(){return u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(n.a,null,u.a.createElement("title",null,"Error"),u.a.createElement("meta",{name:"page title",content:"page title"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement("div",{className:"error-box"},u.a.createElement("h1",null,"Error"),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-warning"})," Oops! Something went wrong"),u.a.createElement("p",null,"Please try again after sometime."),u.a.createElement(i.b,{to:"/app",className:"btn btn-custom"},"Back to Home"))))}function r(){return u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(n.a,null,u.a.createElement("title",null,"Error 403"),u.a.createElement("meta",{name:"page title",content:"page title"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement("div",{className:"error-box"},u.a.createElement("h2",null,"Error 403"),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-warning"})," Permission Denied"),u.a.createElement("p",null,"You do not have permissions to access this resource."),u.a.createElement(i.b,{to:"/app",className:"btn btn-custom"},"Back to Home"))))}var e=t(41),l=t.n(e),e=t(42),c=t.n(e),e=t(57),s=t.n(e),e=t(218),f=t.n(e),e=t(84),o=t.n(e),e=t(0),u=t.n(e),n=t(595),i=t(124);function p(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=o()(n);return e=a?(e=o()(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),f()(this,e)}}var E=function(e){s()(n,e);var t=p(n);function n(e){return l()(this,n),(e=t.call(this,e)).state={hasError:!1,errorInfo:""},e}return c()(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return 403==this.state.errorInfo?u.a.createElement(r,null):this.state.hasError?u.a.createElement(a,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){var t=document.querySelector(".modal-backdrop");return t&&t.remove(),{hasError:!0,errorInfo:e}}}]),n}(u.a.Component),b=function(e){return u.a.createElement(E,null,u.a.createElement(e,null))}},962:function(m,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),r=t(43),n=t(126),l=t(115),c=t(796),o=Object(n.a)(function(){return Promise.all([t.e(0),t.e(7),t.e(71)]).then(t.bind(null,1074))},{fallback:a.a.createElement(l.a,null)}),u=Object(n.a)(function(){return Promise.all([t.e(0),t.e(7),t.e(62)]).then(t.bind(null,1076))},{fallback:a.a.createElement(l.a,null)}),s=Object(n.a)(function(){return Promise.all([t.e(0),t.e(59)]).then(t.bind(null,1079))},{fallback:a.a.createElement(l.a,null)}),f=Object(n.a)(function(){return t.e(78).then(t.bind(null,1081))},{fallback:a.a.createElement(l.a,null)}),p=Object(n.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(56)]).then(t.bind(null,1082))},{fallback:a.a.createElement(l.a,null)}),i=Object(n.a)(function(){return Promise.all([t.e(0),t.e(7),t.e(18),t.e(76)]).then(t.bind(null,1084))},{fallback:a.a.createElement(l.a,null)});Object(n.a)(function(){return Promise.all([t.e(0),t.e(18),t.e(77)]).then(t.bind(null,924))},{fallback:a.a.createElement(l.a,null)});e.default=function(e){e=e.match;return a.a.createElement(r.Switch,null,a.a.createElement(r.Redirect,{exact:!0,from:"".concat(e.url,"/"),to:"".concat(e.url,"/salary-templates")}),a.a.createElement(r.Route,{path:"".concat(e.url,"/salary-components"),component:function(){return Object(c.a)(o)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/salary-templates"),component:function(){return Object(c.a)(u)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/employee-salaries"),component:function(){return Object(c.a)(s)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/my-salary"),component:function(){return Object(c.a)(f)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/tax-declaration/edit"),component:function(){return Object(c.a)(i)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/tax-declaration"),component:function(){return Object(c.a)(i)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/tax-declaration/add"),component:function(){return Object(c.a)(i)}}),a.a.createElement(r.Route,{path:"".concat(e.url,"/tax-declaration-view"),component:function(){return Object(c.a)(p)}}))}}}]);