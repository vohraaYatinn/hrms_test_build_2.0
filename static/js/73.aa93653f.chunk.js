(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1162:function(n,e,t){"use strict";t.r(e);var r=t(4),a=t.n(r),r=t(54),R=t.n(r),S=t(0),B=t.n(S),W=t(582),U=t(139),k=t(798),H=t(583),V=t(853),K=t(207),Y=t(62),J=t(234),L=t(60),$=t(43),_=t(744),r=(t(735),t(596)),ee=t.n(r),te=t(763),re=t(294);function s(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function ne(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(e){a()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}e.default=function(){function t(){var e=P.getTime()-(new Date).getTime();0<e?l(Math.floor(e/1e3%60)):clearInterval(m.current)}function w(){N(!q)}function g(){var e={username:null===(e=o.current.values)||void 0===e?void 0:e.username};D(Object(K.d)(e))}var r=Object(re.b)().checkCacheStatus,e=Object(S.useState)({showMessage:!1,isError:!0,message:null}),e=R()(e,2),i=e[0],d=e[1],n=Object($.useParams)().url,u=Object($.useHistory)(),m=Object(S.useRef)(),e=Object(S.useState)(0),e=R()(e,2),b=e[0],l=e[1],e=Object(S.useState)(!1),e=R()(e,2),p=e[0],v=e[1],e=Object(S.useState)(""),e=R()(e,2),O=e[0],C=e[1],e=Object(S.useState)(!1),e=R()(e,2),h=e[0],c=e[1],e=Object(S.useState)(!0),e=R()(e,2),E=e[0],j=e[1],e=Object(S.useState)(!1),e=R()(e,2),M=e[0],x=e[1],P=new Date,e=(P.setSeconds(P.getSeconds()+60),Object(S.useState)(!0)),e=R()(e,2),q=e[0],N=e[1],e=Object(J.a)(),e=R()(e,4),z=e[0],a=e[1],y=e[2],F=e[3],e=Object(J.a)(),e=R()(e,4),A=e[0],s=e[1],G=e[2],D=e[3],o=Object(S.useRef)(),Z=Object(Y.b)(),T=Object(Y.c)(L.g),e=Object(S.useState)(!1),e=R()(e,2),f=e[0],Q=e[1],X=(Object(S.useEffect)(function(){var e;"Success"===(null==z?void 0:z.response)&&(r(),clearInterval(m.current),Z(Object(L.d)()),Z(Object(L.i)(!1)),null==o||null!==(e=o.current)&&void 0!==e&&e.resetForm(),n&&(e=(e=n.match(/redirect=([^"]+)/))&&e[1],u.push(decodeURIComponent(e))))},[z]),Object(S.useRef)(a)),I=Object(S.useRef)(s);Object(S.useEffect)(function(){var e,t,r,n;null!==(e=o.current)&&void 0!==e&&e.setSubmitting(!1),X.current!==a&&d({showMessage:!0,isError:!0,message:(null==a||null===(t=a.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null==a?void 0:a.message)}),I.current!==s&&d({showMessage:!0,isError:!0,message:(null==s||null===(n=s.response)||void 0===n?void 0:n.data)||(null==s?void 0:s.message)}),X.current=a,I.current=s},[a,s]),Object(S.useEffect)(function(){var e=document.querySelector(".modal-backdrop");e&&e.remove(),Z(Object(L.j)(!0))},[]),Object(S.useEffect)(function(){var e;"success"==(null==A?void 0:A.result)&&(o.current.setFieldValue("isOtpGenerated",!0),o.current.setFieldValue("password",""),o.current.setFieldTouched("password",!1),C(null===(e=o.current.values)||void 0===e?void 0:e.username),t(),clearInterval(m.current),m.current=setInterval(t,1e3),v(!0),c(!0))},[A]);return Object(S.useEffect)(function(){T&&E?_.b.error("Session time out",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):j(!0)},[T]),B.a.createElement(B.a.Fragment,null,B.a.createElement(W.a,null,B.a.createElement("title",null,"Login- Medplus HRMS"),B.a.createElement("meta",{name:"description",content:"Login page"})),B.a.createElement("div",{style:{wordSpacing:"5px"}},B.a.createElement(_.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})),B.a.createElement("div",{className:"account-content"},B.a.createElement("div",{className:"container"},B.a.createElement("div",{className:"account-logo"},B.a.createElement(U.b,{to:"/app/login"},B.a.createElement("img",{src:k.c,alt:"Medplus"}))),B.a.createElement("div",{className:"account-box"},B.a.createElement("div",{className:"account-wrapper"},B.a.createElement("h3",{className:"account-title"},"Login"),B.a.createElement("p",{className:"account-subtitle"},"Access to your dashboard"),B.a.createElement("div",null,B.a.createElement(H.c,{initialValues:{username:"",isOtpGenerated:!1,isPasswordLogin:!1,password:""},validationSchema:V.b,onSubmit:function(e,t){t=t.setSubmitting;d({showMessage:!1,isError:!1,message:""}),null!=e&&e.isPasswordLogin||null!=e&&e.isOtpGenerated?(j(!1),F(Object(K.e)(e))):g(),t(!1)},innerRef:o},function(e){var t=e.values,r=e.errors,n=e.touched,a=e.handleChange,s=e.handleBlur,o=e.handleSubmit,u=e.isSubmitting,l=e.setFieldValue,c=e.setFieldTouched,e=e.isValid;return B.a.createElement("form",{onSubmit:o},i.showMessage?B.a.createElement(te.a,{message:null==i?void 0:i.message,dismiss:function(){d(function(e){return ne(ne({},e),{},{showMessage:!1})})},isError:i.isError}):null,B.a.createElement("div",{className:"form-group ".concat(r.username&&n.username?"error-group":"")},B.a.createElement("div",{className:"row"},B.a.createElement("div",{className:"col"},B.a.createElement("label",null,"HRMS ID")),!f&&p?B.a.createElement("div",{className:"col-auto"},B.a.createElement("a",{className:"text-danger text-decoration-underline",onClick:function(){setTimeout(function(){l("isOtpGenerated",!1),l("password",""),l("username",""),c("username",!1),v(!1),C(""),d({showMessage:!1,isError:!0,message:null}),clearInterval(m.current)},0)}},B.a.createElement("p",{className:"font-weight-bold",style:{fontWeight:"bold"}},"Change?"))):null),B.a.createElement("input",{className:"form-control  ".concat(r.username&&n.username?"error-input":""),type:"text",value:t.username,name:"username",placeholder:"Enter your HRMS ID here",onChange:function(e){a(e),""==e.target.value&&d({showMessage:!1,isError:!1,message:""}),/^(m|M)(e|E)(d|D)\d{6,8}$/.test(e.target.value)?x(!0):x(!1)},onBlur:s,autoComplete:"off",disabled:!(null!=t&&t.isPasswordLogin)&&(null==t?void 0:t.isOtpGenerated)}),r.username&&n.username?B.a.createElement("small",null,null==r?void 0:r.username):null),f?B.a.createElement("div",{className:"form-group ".concat(r.password&&n.password?"error-group":"")},B.a.createElement("div",{className:"row"},B.a.createElement("div",{className:"col"},B.a.createElement("label",null,"Password")),B.a.createElement("div",{className:"col-auto"},B.a.createElement(U.b,{className:"text-muted",to:"/forgotpassword"},B.a.createElement("p",{className:"font-weight-bolder text-danger",style:{fontWeight:"bold"}},"Forgot password?")))),B.a.createElement("div",{className:"pass-group"},B.a.createElement("input",{type:q?"password":"text",className:"form-control  ".concat(r.password&&n.password?"error-input":""),value:t.password,name:"password",placeholder:"Enter your Password here",onChange:a,onBlur:s,autoComplete:"off"}),B.a.createElement("span",{onClick:w,className:'fa toggle-password" '.concat(q?"fa-eye-slash":"fa-eye")})),r.password&&n.password?B.a.createElement("small",null,null==r?void 0:r.password):null):B.a.createElement(B.a.Fragment,null,null!=t&&t.isOtpGenerated?B.a.createElement("div",{className:"form-group ".concat(r.password&&n.password?"error-group":"")},B.a.createElement("label",null,"OTP"),B.a.createElement(ee.a,{inputStyle:"form-control col-2 p-0 otp-input-text",errorStyle:"error-input",name:"password",value:t.password,onChange:function(e){6==e.length&&c("password",!0),l("password",e)},numInputs:6,isDisabled:!(null!=t&&t.isOtpGenerated),hasErrored:(null==r?void 0:r.password)&&(null==n?void 0:n.password),isInputNum:!0,isInputSecure:!1,shouldAutoFocus:h}),r.password&&n.password?B.a.createElement("small",null,null==r?void 0:r.password):null):null),B.a.createElement("div",{className:"form-group error-group text-center pt-2"},B.a.createElement("button",{className:"btn btn-primary account-btn justify-content-center",type:"submit",disabled:!e||u||y||G||!M},y||G?B.a.createElement("span",{className:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"}):B.a.createElement(B.a.Fragment,null,null!=t&&t.isOtpGenerated||f?"Login":"Generate OTP")),B.a.createElement("small",null,!f&&p?null==A?void 0:A.message:null)),B.a.createElement("div",{className:"text-center my-2"},p&&!f?B.a.createElement("div",null,0<b?B.a.createElement(B.a.Fragment,null,"Not received your code? Try again after"," ",B.a.createElement("strong",null,b," seconds")):B.a.createElement("a",{className:"text-decoration-underline blue-link",onClick:g},"Resend OTP")):null),B.a.createElement("div",{className:"col text-center"},B.a.createElement("a",{className:"text-muted text-decoration-underline",onClick:function(){setTimeout(function(){var e=!f;l("isPasswordLogin",e),l("isOtpGenerated",!e&&p),l("password",""),!e&&p&&O&&l("username",O),Q(e),c("password",!1)},0)}},f?B.a.createElement("p",{className:"text-danger text-decoration-underline",style:{fontWeight:"bold"}},"Login using OTP"):B.a.createElement("p",{className:"text-danger text-decoration-underline",style:{fontWeight:"bold"}},"Login using password"))))})))))))}},763:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return Object(n.useEffect)(function(){""===(null==e?void 0:e.message)&&void 0===(null==e?void 0:e.message)||window.scrollTo(0,0)},[e.message]),a.a.createElement("div",{className:"alert alert-dismissible fade show ".concat(null!=e&&e.alertType?null==e?void 0:e.alertType:null!=e&&e.isError?"alert-danger":"alert-success"),role:"alert"},null==e?void 0:e.message,a.a.createElement("button",{type:"button",className:"btn-close",onClick:function(){return null==e?void 0:e.dismiss()},"aria-label":"Close"},a.a.createElement("span",{"aria-hidden":"true"})))}},791:function(i,e,t){"use strict";t.d(e,"d",function(){return r}),t.d(e,"j",function(){return n}),t.d(e,"k",function(){return a}),t.d(e,"v",function(){return s}),t.d(e,"s",function(){return o}),t.d(e,"b",function(){return u}),t.d(e,"t",function(){return l}),t.d(e,"z",function(){return c}),t.d(e,"w",function(){return d}),t.d(e,"c",function(){return m}),t.d(e,"g",function(){return p}),t.d(e,"e",function(){return A}),t.d(e,"f",function(){return f}),t.d(e,"o",function(){return w}),t.d(e,"p",function(){return g}),t.d(e,"q",function(){return b}),t.d(e,"l",function(){return v}),t.d(e,"x",function(){return O}),t.d(e,"i",function(){return C}),t.d(e,"u",function(){return h}),t.d(e,"r",function(){return E}),t.d(e,"n",function(){return j}),t.d(e,"m",function(){return M}),t.d(e,"y",function(){return x}),t.d(e,"h",function(){return P}),t.d(e,"a",function(){return q});var r=/^[a-zA-Z0-9_ .-]*$/,n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/,a=/^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/,s=/^((91)?)[6-9]{1}[0-9]{9}$/,o=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,u=/(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/,l=/^([A-Z a-z]){1}([0-9]){7}$/,c=/^([a-zA-Z]){3}([0-9]){7}?$/,d=/^[1-9]{1}[0-9]{5}$/,m=/^[a-z_.-]*$/,p=/^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,A=/^[0-9]{9,18}$/,f=/^([A-Za-z]){4}0([A-Za-z0-9]){6}/,w=/^[A-Za-z]*$/,g=/^[A-Za-z]{1}$/,b=/^[A-Za-z]{2}$/,v=/^[A-Za-z][A-Za-z .]+\s*$/,O=/^\S/,C=/^[A-Za-z][A-Za-z ]+\s*$/,h=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@,#$&*()])[A-Za-z\d@,#$&*()]{8,14}$/,E=/^[0-9]{6}$/,j=/^(?!\s+$).*/,M=/^(?![!@#$~ ^%&*?><.,:;'"[/(){}_+=/|-]+$)/,x=/^[0-9]{12}$/,P=/^[A-Z]{3}$/,q=/^[0-9a-zA-Z]{6,17}$/},798:function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var n=r.p+"fonts/medplus_logo.svg",a=r.p+"fonts/MedPlus-HRMS-logo.svg",s="data:image/jpeg;base64,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"},853:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return a});var t=r(586),r=r(791),n=t.g().shape({username:t.i().required("HRMS ID is Required").trim(),isPasswordLogin:t.b(),isOtpGenerated:t.b(),password:t.i().when("isPasswordLogin",{is:!0,then:t.i().required("Password is Required"),otherwise:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("OTP is Required").matches(r.r,"Invalid OTP format"),otherwise:t.i().notRequired()})})}),a=t.g().shape({username:t.i().required("HRMS ID is Required").trim(),otp:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("OTP is Required").matches(r.r,"Invalid OTP format"),otherwise:t.i().notRequired()}),newPassword:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("Password is Required").matches(r.u,"Please follow the password requirements"),otherwise:t.i().notRequired()}),confirmPassword:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("Confirm Password is Required").oneOf([t.h("newPassword")],"Password and Confirm Password does not match"),otherwise:t.i().notRequired()})})}}]);