(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1021:function(u,n,e){"use strict";e.r(n);function t(n){var e=null==n?void 0:n.empSalariesFetchData,t=null==n?void 0:n.empSalariesResponse,n=Object(o.useState)({}),r=(n=a()(n,2))[0],u=n[1];return Object(o.useEffect)(function(){e(Object(c.k)())},[]),Object(o.useEffect)(function(){var n,e=null==t?void 0:t.result;e&&(e=null==e||null===(n=e.employee_salary)||void 0===n?void 0:n.reduce(function(n,e){var t,r,u,a=null==e||null===(a=e.component)||void 0===a||null===(t=a.component_type)||void 0===t?void 0:t.value;return n[a]=null!==(t=n[a])&&void 0!==t?t:[],n[a].push({component_name:null==e||null===(r=e.component)||void 0===r?void 0:r.component_name,amount:null==e?void 0:e.amount,component_period:null==e||null===(u=e.component)||void 0===u?void 0:u.component_period}),n},{}),u(e))},[t]),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},(Object.keys(r)||[]).map(function(e){return l.a.createElement("div",{className:"col-md-6",key:e},l.a.createElement("h4",null,e),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Particulars"),l.a.createElement("th",{className:"text-end"},"Amount"," ",e!=i.c.OTHER?l.a.createElement(l.a.Fragment,null,e==i.c.MONTHLY||e==i.c.DEDUCTION?"P.M":"P.A"):null,"(Rs.)"))),l.a.createElement("tbody",null,r[e].map(function(n){return l.a.createElement("tr",{key:null==n?void 0:n.component_name},l.a.createElement("td",null,null==n?void 0:n.component_name," ",e==i.c.OTHER&&null!=n&&n.component_period?l.a.createElement("small",null,"(",i.b[null==n?void 0:n.component_period],")"):null),l.a.createElement("td",{className:"text-end"},(null==n?void 0:n.amount)||0))}),e==i.c.MONTHLY&&l.a.createElement("tr",null,l.a.createElement("td",{className:"fw-bold"},"Total"),l.a.createElement("td",{className:"fw-bold text-end"},r[e].reduce(function(n,e){return n+(null==e?void 0:e.amount)},0)||0)))))})))}var r=e(54),a=e.n(r),o=e(0),l=e.n(o),c=e(790),r=e(7),r=e.n(r),i=e(817);t.propTypes={empSalariesResponse:r.a.oneOfType([r.a.array,r.a.object]),empSalariesFetchData:r.a.func},n.default=t},790:function(E,n,e){"use strict";e.d(n,"g",function(){return a}),e.d(n,"p",function(){return o}),e.d(n,"o",function(){return l}),e.d(n,"n",function(){return c}),e.d(n,"i",function(){return i}),e.d(n,"f",function(){return d}),e.d(n,"h",function(){return m}),e.d(n,"m",function(){return T}),e.d(n,"j",function(){return f}),e.d(n,"k",function(){return A}),e.d(n,"l",function(){return s}),e.d(n,"e",function(){return _}),e.d(n,"a",function(){return p}),e.d(n,"b",function(){return L}),e.d(n,"c",function(){return v}),e.d(n,"d",function(){return O});var n=e(238),t=e(237),r=e(103),u=new n.a(t.a),a=function(n){return u.post(r.a.CREATE_SALARY_TEMPLATE,n)},o=function(n){return u.post(r.a.UPDATE_SALARY_TEMPLATE_STATUS,n)},l=function(n){return u.get(r.a.GET_SALARY_TEMPLATES,n)},c=function(n){return u.get(r.a.GET_SALARY_TEMPLATE_BY_ID,n)},i=function(n){return u.get(r.a.GET_ALL_SALARY_TEMPLATES,n)},d=function(n){return u.post(r.a.CREATE_SALARY_COMPONENT,n)},m=function(n){return u.post(r.a.DELETE_SALARY_COMPONENT,n)},T=function(n){return u.get(r.a.GET_SALARY_COMPONENTS,n)},f=function(n){return u.get(r.a.GET_EMPLOYEE_SALARIES,n)},A=function(n){return u.get(r.a.GET_MY_SALARY,n)},s=function(n){return u.get(r.a.GET_SALARY_BY_EMPLOYEE,n)},_=function(n){return u.post(r.a.ADD_TAX_DECLARATION,n)},p=function(n){return u.get(r.a.GET_TAX_DECLARATION,n)},L=function(n){return u.fileDownload(r.a.GET_TAX_DECLARATION_EXCEL,n)},v=function(n){return u.get(r.a.GET_TAX_DECLARATION_EXCEL,n)},O=function(n){return u.get(r.a.GET_USER_TAX_DECLARATION,n)}},817:function(i,n,e){"use strict";e.d(n,"f",function(){return t}),e.d(n,"e",function(){return r}),e.d(n,"d",function(){return u}),e.d(n,"g",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"b",function(){return l}),e.d(n,"a",function(){return c});var t={A:"Active",I:"Inactive"},r={ACTIVE:"A",INACTIVE:"I"},u={Apprentice:{min:0,max:20999},"Management (Above 90 K)":{min:9e4,max:1/0},"ESIC Eligible":{min:0,max:21e3},"Non-ESIC Non-Management":{min:21e3,max:9e4}},a={all:"All",existing:"Existing Scheme",new:"New Scheme"},o={MONTHLY:"Monthly",DEDUCTION:"Deduction",CTC:"CTC",OTHER:"Other"},l={ONE_TIME:"One Time",MONTHLY:"Monthly",QUARTERLY:"Quarterly",HALF_YEARLY:"Half Yearly",YEARLY:"Yearly"},c={Gross:"Gross",TotalCTC:"Total CTC",IndirectCTC:"Indirect CTC"}}}]);