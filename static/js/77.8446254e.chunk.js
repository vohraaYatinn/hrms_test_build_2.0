(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1072:function(e,n,a){"use strict";a.r(n),function(Y){var e=a(4),r=a.n(e),e=a(54),k=a.n(e),_=a(153),H=a(756),I=a(0),M=a.n(I),V=a(584),U=a(769),z=a(776),G=a(1073),J=a(887),D=a(782),K=a(771),L=a(235),Q=(a(772),a(823)),X=a(817),F=a(805),R=a(790);function t(n,e){var a,t=Object.keys(n);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(n),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)),t}function W(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(e){r()(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}n.default=function(){var e=Object(I.useState)({showMessage:!1,isError:!0,message:""}),e=k()(e,2),n=e[0],a=e[1],e=Object(I.useState)({}),e=k()(e,2),m=e[0],u=e[1],e=Object(I.useState)({}),e=k()(e,2),d=e[0],p=e[1],e=Object(I.useState)([]),e=k()(e,2),f=e[0],b=e[1],e=Object(I.useState)(),e=k()(e,2),g=e[0],v=e[1],e=Object(L.a)(),e=k()(e,4),t=e[0],r=e[1],E=e[2],y=e[3],e=Object(L.a)(),e=k()(e,4),l=e[0],h=e[1],N=e[2],e=e[3],o=Object(L.a)(),o=k()(o,4),c=o[0],O=o[1],j=o[2],C=o[3],o=Object(L.a)(),o=k()(o,4),w=o[0],P=o[3],T=Object(I.useRef)(r),x=Object(I.useRef)(l),S=Object(I.useRef)(c),o=(Object(I.useEffect)(function(){var e;T.current!==r&&a({showMessage:!0,isError:!0,message:(null==r||null===(e=r.response)||void 0===e?void 0:e.data)||(null==r?void 0:r.message)}),x.current!==l&&(a({showMessage:!0,isError:!1,message:null==l?void 0:l.message}),A()),S.current!==c&&(a({showMessage:!0,isError:!1,message:null==c?void 0:c.message}),A()),T.current=r,x.current=l,S.current=c},[r,l,c]),Object(I.useEffect)(function(){B(),A()},[]),Object(I.useEffect)(function(){p((null==t?void 0:t.result)||{}),v(null!=t&&t.result?Object.keys(null==t?void 0:t.result)[0]:"")},[t]),Object(I.useEffect)(function(){b((null==w?void 0:w.salary_component_type)||[])},[w]),[{title:"Name",dataIndex:"component_name",render:function(e,n){return M.a.createElement(M.a.Fragment,null,e," ",null!=n&&n.is_basic?M.a.createElement("span",{className:"text-danger",title:"Basic Component"},"*"):null)}},{title:"Is Taxable",dataIndex:"is_taxable",render:function(e){return e?"Yes":"No"}},{title:"Is Payabale",dataIndex:"is_payable",render:function(e){return e?"Yes":"No"}},{title:"Fixed Amount",dataIndex:"fixed_amount",render:function(e){return e||"N/A"}},{title:"Percentage",dataIndex:"percentage",render:function(e){return e||"N/A"}},{title:"Percentage Basis",dataIndex:"percentage_basis",render:function(e){return e||"N/A"}},{title:"Component Period",dataIndex:"component_period",render:function(e){return e?X.b[e]:"N/A"}},{title:"Amount Limit",dataIndex:"amount_limit"},{title:"Action",dataIndex:"id",render:function(e,n){return M.a.createElement(D.a,{scope:F.e},M.a.createElement("button",{className:"btn btn-danger text-light btn-sm m-r-5",onClick:function(){s(i.deleteConfirmation,"show",n)},disabled:j},M.a.createElement("i",{className:"fa-solid fa-trash"})," Delete"))}}]),A=function(){y(Object(R.m)())},B=function(){P(Object(Q.h)({masterTypes:["salary_component_type"]}))},i={addSalaryComponent:"#add_salary_component",deleteConfirmation:"#delete_confirmation"},s=function(e,n,a){u(a),Y(e).modal(n)};return M.a.createElement("div",{className:"page-wrapper"},M.a.createElement(V.a,null,M.a.createElement("title",null,"Salary Components"),M.a.createElement("meta",{name:"Salary Components",content:"Salary Components"})),M.a.createElement("div",{className:"content container-fluid"},M.a.createElement(D.a,{scope:F.i},n.showMessage?M.a.createElement(U.a,{message:n.message,dismiss:function(){a(function(e){return W(W({},e),{},{showMessage:!1})})},isError:n.isError}):null,M.a.createElement("div",{className:"page-header"},M.a.createElement("div",{className:"row align-items-center"},M.a.createElement(z.a,null),M.a.createElement(D.a,{scope:F.c},M.a.createElement("div",{className:"col-auto float-end ml-auto"},M.a.createElement("button",{className:"btn btn-primary submit-btn",onClick:function(){s(i.addSalaryComponent,"show",{})}},M.a.createElement("i",{className:"fa fa-plus"})," Add Salary Component"))))),M.a.createElement("div",{className:"row filter-row"},M.a.createElement("div",{className:"col-sm-6 col-md-3"},M.a.createElement("div",{className:"form-group"},M.a.createElement(_.a,{showSearch:!0,className:"form-control floating",placeholder:"Select Component Type",value:g||null,onChange:function(e){return v(e)},optionFilterProp:"children",filterOption:function(e,n){return(null!==(n=null==n?void 0:n.label)&&void 0!==n?n:"").toLowerCase().startsWith(e.toLowerCase())}},f.map(function(e){return M.a.createElement(_.a.Option,{key:null==e?void 0:e.value,value:null==e?void 0:e.value,label:null==e?void 0:e.value},null==e?void 0:e.value)}))))),M.a.createElement("div",{className:"row"},M.a.createElement("div",{className:"col-md-12"},M.a.createElement("div",{className:"table-responsive"},E?M.a.createElement(K.a,null):M.a.createElement(H.a,{className:"table-striped",pagination:!1,style:{overflowX:"auto"},columns:o,dataSource:d[g],rowKey:function(e){return e.id}})))))),M.a.createElement(G.a,{mode:"creation",modalId:"add_salary_component",salaryComponents:d,componentTypes:f,submitData:e,responseData:l,error:h,loading:N,closeModal:function(){return s(i.addSalaryComponent,"hide")}}),M.a.createElement(J.a,{modalId:"delete_confirmation",action:"delete",actionType:"Salary Component",responseData:c,loading:j,error:O,onConfirmation:function(){var e=null==m?void 0:m.id;e={componentId:e},C(Object(R.h)(e))},closeModal:function(){return s(i.deleteConfirmation,"hide")}}))}}.call(this,a(234))},1073:function(e,a,l){"use strict";!function(y){var e=l(4),r=l.n(e),e=l(54),h=l.n(e),N=l(0),O=l.n(N),P=l(585),T=l(769),x=l(886),S=l(790),j=l(153),e=l(7),e=l.n(e),C=l(817);function t(n,e){var a,t=Object.keys(n);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(n),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)),t}function w(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(e){r()(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function n(e){var a=Object(N.useRef)(),n=e.modalId,t=e.responseData,r=e.error,p=e.loading,i=e.submitData,l=e.closeModal,u=e.componentTypes,f=e.salaryComponents,e=Object(N.useState)({showMessage:!1,isError:!0,message:null}),o=(e=h()(e,2))[0],c=e[1],e=Object(N.useState)(),b=(e=h()(e,2))[0],d=e[1],e=Object(N.useState)([]),g=(e=h()(e,2))[0],v=e[1],s=Object(N.useRef)(r),m=(Object(N.useEffect)(function(){var e,n;null!==(e=a.current)&&void 0!==e&&e.setSubmitting(!1),s.current!==r&&c({showMessage:!0,isError:!0,message:(null==r||null===(n=r.response)||void 0===n?void 0:n.data)||(null==r?void 0:r.message)})},[r]),Object(N.useEffect)(function(){m(),l()},[t]),y("#"+n).on("show.bs.modal",function(e){m()}),function(){var e;null!==(e=a.current)&&void 0!==e&&e.resetForm(),E({componentName:"",componentType:"",componentPeriod:"",isBasic:"",isTaxable:"",isPayable:"",fixedAmount:"",percentage:"",percentageBasis:"",amountLimit:""}),d(""),c({showMessage:!1,isError:!0,message:null})}),e=Object(N.useState)({componentName:"",componentType:"",componentPeriod:"",isBasic:"",isTaxable:"",isPayable:"",fixedAmount:"",percentage:"",percentageBasis:"",amountLimit:""}),e=(t=h()(e,2))[0],E=t[1];return O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{id:n,className:"modal custom-modal fade",role:"dialog"},O.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-xl",role:"document"},O.a.createElement("div",{className:"modal-content"},O.a.createElement("div",{className:"modal-header"},O.a.createElement("h5",{className:"modal-title"},"Add Salary Component"),O.a.createElement("button",{type:"button",className:"close",onClick:function(){return l()},"aria-label":"Close"},O.a.createElement("span",{"aria-hidden":"true"},"X"))),O.a.createElement("div",{className:"modal-body"},o.showMessage?O.a.createElement(T.a,{message:null==o?void 0:o.message,dismiss:function(){c(function(e){return w(w({},e),{},{showMessage:!1})})},isError:o.isError}):null,O.a.createElement(P.c,{initialValues:e,validationSchema:x.a,enableReinitialize:!0,innerRef:a,onSubmit:function(e){setTimeout(function(){i(Object(S.f)(e))},400)}},function(e){var n=e.values,a=e.errors,t=e.touched,r=e.handleChange,l=e.handleBlur,o=e.handleSubmit,c=e.isSubmitting,m=e.isValid,i=e.setFieldValue,s=e.setFieldTouched;return O.a.createElement("form",{onSubmit:o},O.a.createElement("div",{className:"row"},O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.componentName&&t.componentName?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Component Name",O.a.createElement("span",{className:"text-danger"},"*")),O.a.createElement("input",{className:"form-control ".concat(a.componentName&&t.componentName?"error-input":""),type:"text",name:"componentName",placeholder:"Enter Component Name",value:n.componentName,onChange:r,onBlur:l}),a.componentName&&t.componentName?O.a.createElement("small",null,null==a?void 0:a.componentName):null)),O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.componentType&&t.componentType?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Component Type",O.a.createElement("span",{className:"text-danger"},"*")),O.a.createElement(j.a,{className:"form-control ".concat(a.componentType&&t.componentType?"error-input":""),name:"componentType",placeholder:"Select Component Type",value:n.componentType,onChange:function(e,n){i("componentType",e),d(null==n?void 0:n.children),v(f[null==n?void 0:n.children].map(function(e){return null==e?void 0:e.component_name}))},onBlur:function(e){return s("componentType",e)},disabled:0===u.length},O.a.createElement(j.a.Option,{defaultValue:!0,value:"",disabled:!0,hidden:!0},"-- Select Component Type --"),null==u?void 0:u.map(function(e,n){return O.a.createElement(j.a.Option,{key:n,value:null==e?void 0:e.id},null==e?void 0:e.value)})),a.componentType&&t.componentType?O.a.createElement("small",null,null==a?void 0:a.componentType):null)),"Other"==b?O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.componentPeriod&&t.componentPeriod?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Component Period"),O.a.createElement(j.a,{className:"form-control ".concat(a.componentPeriod&&t.componentPeriod?"error-input":""),name:"componentPeriod",placeholder:"Select Component Period",value:n.componentPeriod,onChange:function(e){i("componentPeriod",e)},onBlur:function(e){return s("componentPeriod",e)}},O.a.createElement(j.a.Option,{defaultValue:!0,value:"",disabled:!0,hidden:!0},"-- Select Component Period --"),Object.keys(C.b).map(function(e){return O.a.createElement(j.a.Option,{value:e,key:e},C.b[e])})),a.componentPeriod&&t.componentPeriod?O.a.createElement("small",null,null==a?void 0:a.componentPeriod):null)):null,O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.fixedAmount&&t.fixedAmount?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Fixed Amount"),O.a.createElement("input",{className:"form-control ".concat(a.fixedAmount&&t.fixedAmount?"error-input":""),type:"number",name:"fixedAmount",placeholder:"Enter Fixed Amount Here",value:n.fixedAmount,onChange:r,onBlur:l,disabled:null==n?void 0:n.percentage}),a.fixedAmount&&t.fixedAmount?O.a.createElement("small",null,null==a?void 0:a.fixedAmount):null)),O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.percentage&&t.percentage?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Percentage"),O.a.createElement("input",{className:"form-control ".concat(a.percentage&&t.percentage?"error-input":""),type:"number",name:"percentage",placeholder:"Enter Percentage Here",value:n.percentage,onChange:r,onBlur:l,disabled:null==n?void 0:n.fixedAmount}),a.percentage&&t.percentage?O.a.createElement("small",null,null==a?void 0:a.percentage):null)),O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.percentageBasis&&t.percentageBasis?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Percentage Basis"),O.a.createElement(j.a,{className:"form-control ".concat(a.percentageBasis&&t.percentageBasis?"error-input":""),name:"percentageBasis",placeholder:"Select Percentage Basis",value:n.percentageBasis,onChange:function(e){i("percentageBasis",e)},onBlur:function(e){return s("percentageBasis",e)},disabled:(null==n?void 0:n.fixedAmount)||!(null!=n&&n.percentage)},O.a.createElement(j.a.Option,{defaultValue:!0,value:"",disabled:!0,hidden:!0},"-- Select Percentage Basis --"),null===(e=Object.keys(C.a))||void 0===e?void 0:e.map(function(e){return O.a.createElement(j.a.Option,{key:e,value:e},C.a[e])}),null==g?void 0:g.map(function(e,n){return O.a.createElement(j.a.Option,{key:n,value:e},e)})),a.percentageBasis&&t.percentageBasis?O.a.createElement("small",null,null==a?void 0:a.percentageBasis):null)),O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(a.amountLimit&&t.amountLimit?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Amount Limit"),O.a.createElement("input",{className:"form-control ".concat(a.amountLimit&&t.amountLimit?"error-input":""),type:"number",name:"amountLimit",placeholder:"Enter Amount Limit Here",value:n.amountLimit,onChange:r,onBlur:l}),a.amountLimit&&t.amountLimit?O.a.createElement("small",null,null==a?void 0:a.amountLimit):null)),O.a.createElement("div",{className:"col-12 row mx-0"},O.a.createElement("div",{className:"col-12 col-md-4 align-self-center"},O.a.createElement("div",{className:"form-group ".concat(null!=t&&t.isBasic&&null!=a&&a.isBasic?"error-group":"")},O.a.createElement("div",{className:"form-check form-check-inline"},O.a.createElement("input",{id:"isBasic",className:"form-check-input",type:"checkbox",name:"isBasic",value:!0,onChange:r,checked:!!n.isBasic}),O.a.createElement("label",{className:"form-check-label",htmlFor:"isBasic"},"Is Basic")),null!=t&&t.isBasic&&null!=a&&a.isBasic?O.a.createElement("small",null,null==a?void 0:a.isBasic):null)),O.a.createElement("div",{className:"col-12 col-md-4 align-self-center"},O.a.createElement("div",{className:"form-group ".concat(null!=t&&t.isPayable&&null!=a&&a.isPayable?"error-group":"")},O.a.createElement("div",{className:"form-check form-check-inline"},O.a.createElement("input",{id:"isPayable",className:"form-check-input",type:"checkbox",name:"isPayable",value:!0,onChange:r,checked:!!n.isPayable}),O.a.createElement("label",{className:"form-check-label",htmlFor:"isPayable"},"Is Payable")),null!=t&&t.isPayable&&null!=a&&a.isPayable?O.a.createElement("small",null,null==a?void 0:a.isPayable):null)),O.a.createElement("div",{className:"col-12 col-md-4 align-self-center"},O.a.createElement("div",{className:"form-group ".concat(null!=t&&t.isTaxable&&null!=a&&a.isTaxable?"error-group":"")},O.a.createElement("div",{className:"form-check form-check-inline"},O.a.createElement("input",{id:"isTaxable",className:"form-check-input",type:"checkbox",name:"isTaxable",value:!0,onChange:r,checked:!!n.isTaxable}),O.a.createElement("label",{className:"form-check-label",htmlFor:"isTaxable"},"Is Taxable")),null!=t&&t.isTaxable&&null!=a&&a.isTaxable?O.a.createElement("small",null,null==a?void 0:a.isTaxable):null)))),O.a.createElement("div",{className:"submit-section"},O.a.createElement("button",{className:"btn btn-primary submit-btn",disabled:c||!m,type:"submit"},p?O.a.createElement("span",{className:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"}):"Submit")))}))))))}n.propTypes={modalId:e.a.string,responseData:e.a.oneOfType([e.a.array,e.a.object]),error:e.a.oneOfType([e.a.string,e.a.object]),loading:e.a.bool,submitData:e.a.func,closeModal:e.a.func,companies:e.a.array,componentTypes:e.a.array,salaryComponents:e.a.object},a.a=n}.call(this,l(234))},775:function(m,e,n){"use strict";n.d(e,"c",function(){return t}),n.d(e,"d",function(){return r}),n.d(e,"b",function(){return l}),n.d(e,"l",function(){return o}),n.d(e,"k",function(){return c}),n.d(e,"j",function(){return i}),n.d(e,"h",function(){return s}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return d}),n.d(e,"e",function(){return p}),n.d(e,"a",function(){return f}),n.d(e,"i",function(){return b});var e=n(8),a=n.n(e),t=function(t,r,l){return new Promise(function(a,e){var n;!(t instanceof File||"number"==typeof t)||"number"==typeof t?a(!0):((n=new FileReader).readAsDataURL(t),n.onload=function(e){var n=new Image;n.src=e.target.result,n.onload=function(){(null==n?void 0:n.width)<=r&&(null==n?void 0:n.height)<=l?a(!0):a(!1)}})})},r=function(e,n){return"number"==typeof e||(!e||(null==e?void 0:e.size)<1e3*n)},l=function(e,n){return"number"==typeof e||(!e||n.includes(null==e?void 0:e.type))},o=function(e){return e&&(null==e?void 0:e.replace(/^[a-z]|([\s-_][a-z])/gi,function(e){var n,a;return null==e||null===(n=e.toUpperCase())||void 0===n||null===(a=n.replace("-"," "))||void 0===a?void 0:a.replace("_"," ")}))},c=function(e,a){return null==e?void 0:e.reduce(function(e,n){return(e[n[a][a]]=e[n[a][a]]||[]).push(n),e},{})},i=function(e,a){return null==e?void 0:e.reduce(function(e,n){return(e[n[a]]=e[n[a][a]]||[]).push(n),e},{})},s=function(e,n){return e+"-"+(new a.a).format("YYYY-MM-DD-HH-mm-ss")+"."+n},u=function(e){var n=Math.floor(e/3600),a=Math.floor((e-3600*n)/60),e=e-3600*n-60*a,t="";return 0<n&&(t+=n+"h "),0<a&&(t+=a+"m "),0<e&&(t+=e+"s "),t},d=function(e){return{employee_id:null==e?void 0:e.employee_id,employee_id__full_name:null==e?void 0:e.full_name,employee_id__user_id:null==e?void 0:e.user_id}},p=function(e,n){return e.length===n.length&&e.every(function(a){return n.some(function(n){return Object.keys(a).every(function(e){return a[e]===n[e]})})})},f=function(e){return null==e?void 0:e.toLowerCase().replace(/\b\w/g,function(e){return null==e?void 0:e.toUpperCase()})},b=function(e,a){return null==e?void 0:e.reduce(function(e,n){return e[n[a]]=n,e},{})}},817:function(s,e,n){"use strict";n.d(e,"f",function(){return a}),n.d(e,"e",function(){return t}),n.d(e,"d",function(){return r}),n.d(e,"g",function(){return l}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return i});var a={A:"Active",I:"Inactive"},t={ACTIVE:"A",INACTIVE:"I"},r={Apprentice:{min:0,max:20999},"Management (Above 90 K)":{min:9e4,max:1/0},"ESIC Eligible":{min:0,max:21e3},"Non-ESIC Non-Management":{min:21e3,max:9e4}},l={all:"All",existing:"Existing Scheme",new:"New Scheme"},o={MONTHLY:"Monthly",DEDUCTION:"Deduction",CTC:"CTC",OTHER:"Other"},c={ONE_TIME:"One Time",MONTHLY:"Monthly",QUARTERLY:"Quarterly",HALF_YEARLY:"Half Yearly",YEARLY:"Yearly"},i={Gross:"Gross",TotalCTC:"Total CTC",IndirectCTC:"Indirect CTC"}},887:function(e,a,l){"use strict";!function(d){var e=l(4),t=l.n(e),e=l(54),p=l.n(e),f=l(0),b=l.n(f),E=l(769),e=l(7),e=l.n(e),g=l(775);function r(n,e){var a,t=Object.keys(n);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(n),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)),t}function v(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach(function(e){t()(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function n(e){var n=e.modalId,a=e.action,t=e.actionType,r=e.responseData,l=e.loading,o=e.error,c=e.onConfirmation,m=e.closeModal,e=Object(f.useState)({showMessage:!1,isError:!0,message:null}),i=(e=p()(e,2))[0],s=e[1],u=Object(f.useRef)(o);return Object(f.useEffect)(function(){var e;u.current!==o&&s({showMessage:!0,isError:!0,message:(null==o||null===(e=o.response)||void 0===e?void 0:e.data)||(null==o?void 0:o.message)})},[o]),Object(f.useEffect)(function(){m()},[r]),d("#"+n).on("show.bs.modal",function(e){s({showMessage:!1,isError:!0,message:null})}),b.a.createElement("div",{className:"modal custom-modal fade",id:n,role:"dialog"},b.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},b.a.createElement("div",{className:"modal-content"},b.a.createElement("div",{className:"modal-body"},i.showMessage?b.a.createElement(E.a,{message:null==i?void 0:i.message,dismiss:function(){s(function(e){return v(v({},e),{},{showMessage:!1})})},isError:i.isError}):null,b.a.createElement("div",{className:"form-header mb-2"},b.a.createElement("h3",null,Object(g.l)(a)," ",t),b.a.createElement("p",null,"Are you sure want to ",a," the ",t)),b.a.createElement("div",{className:"modal-btn pt-4"},b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-6"},b.a.createElement("button",{className:"btn btn-primary submit-btn",disabled:l,onClick:c},Object(g.l)(a),l?b.a.createElement("span",{className:"spinner-border spinner-border-sm"}):null)),b.a.createElement("div",{className:"col-6"},b.a.createElement("a",{className:"btn btn-primary cancel-btn","data-bs-dismiss":"modal"},"Cancel"))))))))}n.propTypes={modalId:e.a.string,action:e.a.string,actionType:e.a.string,responseData:e.a.oneOfType([e.a.array,e.a.object]),error:e.a.oneOfType([e.a.string,e.a.object]),loading:e.a.bool,onConfirmation:e.a.func,closeModal:e.a.func},a.a=n}.call(this,l(234))}}]);