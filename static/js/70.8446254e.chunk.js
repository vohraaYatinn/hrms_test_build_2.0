(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1169:function(e,t,a){"use strict";a.r(t),function(V){var e=a(4),r=a.n(e),e=a(54),S=a.n(e),R=a(0),B=a.n(R),J=a(584),Y=a(140),$=a(804),_=a(585),ee=a(859),K=a(208),L=a(62),k=a(235),W=a(60),H=a(43),te=a(748),e=(a(738),a(598)),ae=a.n(e),re=a(769),ne=a(296),se=(a(241),a(737),a(922));function n(t,e){var a,r=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)),r}function oe(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach(function(e){r()(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}t.default=function(){function t(){var e=M.getTime()-(new Date).getTime();0<e?u(Math.floor(e/1e3%60)):clearInterval(m.current)}function w(){y(!q)}function g(){var e={username:null===(e=o.current.values)||void 0===e?void 0:e.username};T(Object(K.d)(e))}var a=Object(ne.b)().checkCacheStatus,e=Object(R.useState)({showMessage:!1,isError:!0,message:null}),e=S()(e,2),i=e[0],d=e[1],r=Object(H.useParams)().url,l=Object(H.useHistory)(),m=Object(R.useRef)(),e=Object(R.useState)(0),e=S()(e,2),b=e[0],u=e[1],e=Object(R.useState)(!1),e=S()(e,2),p=e[0],v=e[1],e=Object(R.useState)(""),e=S()(e,2),h=e[0],E=e[1],e=Object(R.useState)(!1),e=S()(e,2),C=e[0],c=e[1],e=Object(R.useState)(!0),e=S()(e,2),O=e[0],j=e[1],e=Object(R.useState)(!1),e=S()(e,2),N=e[0],x=e[1],M=new Date,P=(M.setSeconds(M.getSeconds()+60),"#downloadId"),e=Object(R.useState)(!0),e=S()(e,2),q=e[0],y=e[1],e=Object(k.a)(),e=S()(e,4),z=e[0],n=e[1],F=e[2],G=e[3],e=Object(k.a)(),e=S()(e,4),A=e[0],s=e[1],D=e[2],T=e[3],o=Object(R.useRef)(),Z=Object(L.b)(),I=Object(L.c)(W.g),e=Object(R.useState)(!1),e=S()(e,2),f=e[0],Q=e[1],X=(Object(R.useEffect)(function(){var e;"Success"===(null==z?void 0:z.response)&&(a(),clearInterval(m.current),Z(Object(W.d)()),Z(Object(W.i)(!1)),null==o||null!==(e=o.current)&&void 0!==e&&e.resetForm(),r&&(e=(e=r.match(/redirect=([^"]+)/))&&e[1],l.push(decodeURIComponent(e))))},[z]),Object(R.useRef)(n)),U=Object(R.useRef)(s);Object(R.useEffect)(function(){var e,t,a,r;null!==(e=o.current)&&void 0!==e&&e.setSubmitting(!1),X.current!==n&&d({showMessage:!0,isError:!0,message:(null==n||null===(t=n.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||(null==n?void 0:n.message)}),U.current!==s&&d({showMessage:!0,isError:!0,message:(null==s||null===(r=s.response)||void 0===r?void 0:r.data)||(null==s?void 0:s.message)}),X.current=n,U.current=s},[n,s]),Object(R.useEffect)(function(){var e=document.querySelector(".modal-backdrop");e&&e.remove(),Z(Object(W.j)(!0))},[]),Object(R.useEffect)(function(){var e;"success"==(null==A?void 0:A.result)&&(o.current.setFieldValue("isOtpGenerated",!0),o.current.setFieldValue("password",""),o.current.setFieldTouched("password",!1),E(null===(e=o.current.values)||void 0===e?void 0:e.username),t(),clearInterval(m.current),m.current=setInterval(t,1e3),v(!0),c(!0))},[A]);return Object(R.useEffect)(function(){I&&O?te.b.error("Session time out",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):j(!0)},[I]),B.a.createElement(B.a.Fragment,null,B.a.createElement(J.a,null,B.a.createElement("title",null,"Login- Medplus HRMS"),B.a.createElement("meta",{name:"description",content:"Login page"})),B.a.createElement("div",{style:{wordSpacing:"5px"}},B.a.createElement(te.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})),B.a.createElement("div",{className:"account-content"},B.a.createElement("div",{className:"container"},B.a.createElement("div",{className:"account-logo"},B.a.createElement(Y.b,{to:"/app/login"},B.a.createElement("img",{src:$.c,alt:"Medplus"}))),B.a.createElement("div",{className:"account-box"},B.a.createElement("div",{className:"account-wrapper"},B.a.createElement("h3",{className:"account-title"},"Login"),B.a.createElement("p",{className:"account-subtitle"},"version 1.0"),B.a.createElement("div",null,B.a.createElement(_.c,{initialValues:{username:"",isOtpGenerated:!1,isPasswordLogin:!1,password:""},validationSchema:ee.b,onSubmit:function(e,t){t=t.setSubmitting;d({showMessage:!1,isError:!1,message:""}),null!=e&&e.isPasswordLogin||null!=e&&e.isOtpGenerated?(j(!1),G(Object(K.e)(e))):g(),t(!1)},innerRef:o},function(e){var t=e.values,a=e.errors,r=e.touched,n=e.handleChange,s=e.handleBlur,o=e.handleSubmit,l=e.isSubmitting,u=e.setFieldValue,c=e.setFieldTouched,e=e.isValid;return B.a.createElement("form",{onSubmit:o},i.showMessage?B.a.createElement(re.a,{message:null==i?void 0:i.message,dismiss:function(){d(function(e){return oe(oe({},e),{},{showMessage:!1})})},isError:i.isError}):null,B.a.createElement("div",{className:"form-group ".concat(a.username&&r.username?"error-group":"")},B.a.createElement("div",{className:"row"},B.a.createElement("div",{className:"col"}),!f&&p?B.a.createElement("div",{className:"col-auto"},B.a.createElement("a",{className:"text-danger text-decoration-underline",onClick:function(){setTimeout(function(){u("isOtpGenerated",!1),u("password",""),u("username",""),c("username",!1),v(!1),E(""),d({showMessage:!1,isError:!0,message:null}),clearInterval(m.current)},0)}},B.a.createElement("p",{className:"font-weight-bold",style:{fontWeight:"bold"}},"Change?"))):null),B.a.createElement("input",{className:"form-control  ".concat(a.username&&r.username?"error-input":""),type:"text",value:t.username,name:"username",placeholder:"Enter your HRMS ID here",onChange:function(e){n(e),""==e.target.value&&d({showMessage:!1,isError:!1,message:""}),/^(m|M)(e|E)(d|D)\d{6,8}$/.test(e.target.value)?x(!0):x(!1)},onBlur:s,autoComplete:"off",disabled:!(null!=t&&t.isPasswordLogin)&&(null==t?void 0:t.isOtpGenerated)}),a.username&&r.username?B.a.createElement("small",null,null==a?void 0:a.username):null),f?B.a.createElement("div",{className:"form-group ".concat(a.password&&r.password?"error-group":"")},B.a.createElement("div",{className:"row"},B.a.createElement("div",{className:"col"},B.a.createElement("label",null,"Password")),B.a.createElement("div",{className:"col-auto"},B.a.createElement(Y.b,{className:"text-muted",to:"/forgotpassword"},B.a.createElement("p",{className:"font-weight-bolder text-danger",style:{fontWeight:"bold"}},"Forgot password?")))),B.a.createElement("div",{className:"pass-group"},B.a.createElement("input",{type:q?"password":"text",className:"form-control  ".concat(a.password&&r.password?"error-input":""),value:t.password,name:"password",placeholder:"Enter your Password here",onChange:n,onBlur:s,autoComplete:"off"}),B.a.createElement("span",{onClick:w,className:'fa toggle-password" '.concat(q?"fa-eye-slash":"fa-eye")})),a.password&&r.password?B.a.createElement("small",null,null==a?void 0:a.password):null):B.a.createElement(B.a.Fragment,null,null!=t&&t.isOtpGenerated?B.a.createElement("div",{className:"form-group ".concat(a.password&&r.password?"error-group":"")},B.a.createElement("label",null,"OTP"),B.a.createElement(ae.a,{inputStyle:"form-control col-2 p-0 otp-input-text",errorStyle:"error-input",name:"password",value:t.password,onChange:function(e){6==e.length&&c("password",!0),u("password",e)},numInputs:6,isDisabled:!(null!=t&&t.isOtpGenerated),hasErrored:(null==a?void 0:a.password)&&(null==r?void 0:r.password),isInputNum:!0,isInputSecure:!1,shouldAutoFocus:C}),a.password&&r.password?B.a.createElement("small",null,null==a?void 0:a.password):null):null),B.a.createElement("div",{className:"form-group error-group text-center pt-2"},B.a.createElement("button",{className:"btn btn-primary account-btn justify-content-center",type:"submit",disabled:!e||l||F||D||!N},F||D?B.a.createElement("span",{className:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"}):B.a.createElement(B.a.Fragment,null,null!=t&&t.isOtpGenerated||f?"Login":"Generate OTP")),B.a.createElement("small",null,!f&&p?null==A?void 0:A.message:null)),B.a.createElement("div",{className:"text-center my-2"},p&&!f?B.a.createElement("div",null,0<b?B.a.createElement(B.a.Fragment,null,"Not received your code? Try again after"," ",B.a.createElement("strong",null,b," seconds")):B.a.createElement("a",{className:"text-decoration-underline blue-link",onClick:g},"Resend OTP")):null),B.a.createElement("div",{className:"col text-center"},B.a.createElement("a",{className:"text-muted text-decoration-underline",onClick:function(){setTimeout(function(){var e=!f;u("isPasswordLogin",e),u("isOtpGenerated",!e&&p),u("password",""),!e&&p&&h&&u("username",h),Q(e),c("password",!1)},0)}},f?B.a.createElement("p",{className:"text-danger text-decoration-underline",style:{fontWeight:"bold"}},"Login using OTP"):B.a.createElement("p",{className:"text-danger text-decoration-underline",style:{fontWeight:"bold"}},"Login using password"))))})))))),B.a.createElement(se.a,{modalId:"downloadId"}),B.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",style:{position:"absolute",left:"40vw"},onClick:function(){var e;e="show",V(P).modal(e)}},"Check For Updates"))}}.call(this,a(234))},769:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return Object(r.useEffect)(function(){""===(null==e?void 0:e.message)&&void 0===(null==e?void 0:e.message)||window.scrollTo(0,0)},[e.message]),n.a.createElement("div",{className:"alert alert-dismissible fade show ".concat(null!=e&&e.alertType?null==e?void 0:e.alertType:null!=e&&e.isError?"alert-danger":"alert-success"),role:"alert"},null==e?void 0:e.message,n.a.createElement("button",{type:"button",className:"btn-close",onClick:function(){return null==e?void 0:e.dismiss()},"aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"})))}},797:function(i,e,t){"use strict";t.d(e,"d",function(){return a}),t.d(e,"j",function(){return r}),t.d(e,"k",function(){return n}),t.d(e,"v",function(){return s}),t.d(e,"s",function(){return o}),t.d(e,"b",function(){return l}),t.d(e,"t",function(){return u}),t.d(e,"z",function(){return c}),t.d(e,"w",function(){return d}),t.d(e,"c",function(){return m}),t.d(e,"g",function(){return p}),t.d(e,"e",function(){return A}),t.d(e,"f",function(){return f}),t.d(e,"o",function(){return w}),t.d(e,"p",function(){return g}),t.d(e,"q",function(){return b}),t.d(e,"l",function(){return v}),t.d(e,"x",function(){return h}),t.d(e,"i",function(){return E}),t.d(e,"u",function(){return C}),t.d(e,"r",function(){return O}),t.d(e,"n",function(){return j}),t.d(e,"m",function(){return N}),t.d(e,"y",function(){return x}),t.d(e,"h",function(){return M}),t.d(e,"a",function(){return P});var a=/^[a-zA-Z0-9_ .-]*$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/,n=/^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/,s=/^((91)?)[6-9]{1}[0-9]{9}$/,o=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,l=/(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/,u=/^([A-Z a-z]){1}([0-9]){7}$/,c=/^([a-zA-Z]){3}([0-9]){7}?$/,d=/^[1-9]{1}[0-9]{5}$/,m=/^[a-z_.-]*$/,p=/^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,A=/^[0-9]{9,18}$/,f=/^([A-Za-z]){4}0([A-Za-z0-9]){6}/,w=/^[A-Za-z]*$/,g=/^[A-Za-z]{1}$/,b=/^[A-Za-z]{2}$/,v=/^[A-Za-z][A-Za-z .]+\s*$/,h=/^\S/,E=/^[A-Za-z][A-Za-z ]+\s*$/,C=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@,#$&*()])[A-Za-z\d@,#$&*()]{8,14}$/,O=/^[0-9]{6}$/,j=/^(?!\s+$).*/,N=/^(?![!@#$~ ^%&*?><.,:;'"[/(){}_+=/|-]+$)/,x=/^[0-9]{12}$/,M=/^[A-Z]{3}$/,P=/^[0-9a-zA-Z]{6,17}$/},804:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return s});var r=a.p+"fonts/medplus_logo.svg",n=a.p+"fonts/MedPlus-HRMS-logo.svg",s="data:image/jpeg;base64,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"},859:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return n});var t=a(588),a=a(797),r=t.g().shape({username:t.i().required("HRMS ID is Required").trim(),isPasswordLogin:t.b(),isOtpGenerated:t.b(),password:t.i().when("isPasswordLogin",{is:!0,then:t.i().required("Password is Required"),otherwise:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("OTP is Required").matches(a.r,"Invalid OTP format"),otherwise:t.i().notRequired()})})}),n=t.g().shape({username:t.i().required("HRMS ID is Required").trim(),otp:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("OTP is Required").matches(a.r,"Invalid OTP format"),otherwise:t.i().notRequired()}),newPassword:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("Password is Required").matches(a.u,"Please follow the password requirements"),otherwise:t.i().notRequired()}),confirmPassword:t.i().when("isOtpGenerated",{is:!0,then:t.i().required("Confirm Password is Required").oneOf([t.h("newPassword")],"Password and Confirm Password does not match"),otherwise:t.i().notRequired()})})},922:function(r,e,t){"use strict";var a=t(239),n=t.n(a),a=t(54),s=t.n(a),a=t(50),o=t.n(a),l=t(737),u=t(241),c=t(0),i=t.n(c),d=t(746);e.a=function(e){var e=e.modalId,t=Object(c.useState)(!1),t=s()(t,2),a=t[0],r=t[1];return i.a.createElement("div",{className:"modal custom-modal fade",id:e,role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"form-header"},i.a.createElement("h3",null,"Update Available"),i.a.createElement("p",null,"Click on update button to avail new updates!")),i.a.createElement("div",{className:"modal-btn"},i.a.createElement("div",{className:"row",style:{marginTop:"1.75rem"}},i.a.createElement("div",{className:"col-6"},i.a.createElement("button",{className:"btn btn-primary submit-btn",disabled:a,onClick:n()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(25),e.next=3,u.a.download({url:"https://github.com/vohraaYatinn/hrms_test_build_2.0/archive/refs/heads/main.zip",version:"2.0.0"});case 3:t=e.sent,r(100),setTimeout(n()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.a.show(),e.prev=1,e.next=4,u.a.set({id:t.id});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),l.a.hide(),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,6]])})),2500);case 6:case"end":return e.stop()}},e)}))},"Update")),i.a.createElement("div",{className:"col-6"},i.a.createElement("a",{className:"btn btn-primary cancel-btn","data-bs-dismiss":"modal"},"Not Now"))))),i.a.createElement(d.a,{animated:!0,now:a}),100==a&&i.a.createElement("p",null,"Updating the App, Please Wait!"))))}}}]);