(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1007:function(e,t,n){"use strict";n.r(t),function(H){var e=n(29),J=n.n(e),e=n(4),a=n.n(e),e=n(54),X=n.n(e),Q=n(0),V=n.n(Q),K=n(584),e=(n(772),n(8)),k=n.n(e),W=n(235),$=n(231),ee=n(153),te=n(756),ne=n(773),B=n(770),ae=n(771),q=n(236),Z=n(62),le=n(769),e=n(586),re=n.n(e),Ee=n(155),e=n(595),ce=n.n(e),oe=n(780),ie=n(781),se=n(787),ue=n(803),de=n(802),me=n(794),_e=n(777);function l(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)),a}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}t.default=function(){$.a.RangePicker;function s(){var e={reportType:oe.l.GMIP_REPORT};Y(Object(ie.c)(e)),u(R,"show")}function u(e,t,n){O(n),H(e).modal(t)}var d=Object(Z.c)(q.v),m=Object(Z.c)(q.K),e=Object(Q.useState)([]),e=X()(e,2),_=e[0],T=e[1],e=Object(Q.useState)([]),e=X()(e,2),N=(e[0],e[1]),e=Object(Q.useState)([]),e=X()(e,2),A=e[0],f=e[1],e=Object(Q.useState)({}),e=X()(e,2),O=(e[0],e[1]),e=Object(Q.useState)(void 0),e=X()(e,2),I=e[0],e=(e[1],Object(Z.c)(Ee.h)),p=Object(Z.c)(q.I),t="YYYY-MM",n=Object(W.a)(),n=X()(n,4),a=n[0],l=n[1],L=n[2],S=n[3],n=Object(Q.useState)({month:k()().format("YYYY-MM"),searchState:"",searchCompany:"",searchDepartment:"",facilityId:"",pageNumber:1,numberOfItems:20}),n=X()(n,2),r=n[0],E=n[1],R="#gmip_report_download_excel",n=Object(Q.useState)({showMessage:!1,isError:!0,message:""}),n=X()(n,2),b=n[0],c=n[1],n=Object(Q.useState)(!1),n=X()(n,2),v=n[0],g=n[1],n=Object(Q.useState)(0),n=X()(n,2),D=(n[0],n[1]),n=Object(Q.useState)(!1),n=X()(n,2),M=(n[0],n[1]),o=Object(Q.useRef)(!0),G=(Object(Q.useRef)(),Object(Q.useRef)(l)),h=Object(Q.useRef)(!1),n=(Object(Q.useEffect)(function(){T(p)},[e]),Object(Q.useEffect)(function(){a.download_limit&&D(a.download_limit),a.data&&0<a.data.length&&M(!0)},[a]),Object(Q.useEffect)(function(){o.current&&(D(0),S(Object(B.lb)(r)),o.current=!1),h.current&&(h.current=!1,null!=r&&r.directDownload?(g(!0),C(Object(B.pb)(r))):j(Object(B.Rb)(r)))},[r]),Object(Q.useEffect)(function(){var e,t,n;(null==G?void 0:G.current)!==l&&c({showMessage:!0,isError:!0,message:(null==l||null===(e=l.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==l||null===(n=l.response)||void 0===n?void 0:n.data)||(null==l?void 0:l.message)}),E(function(e){return z(z({},e),{},{pageNumber:1})}),G.current=l},[l]),Object(W.a)()),e=X()(n,5),F=e[0],n=e[1],x=e[2],C=e[3],e=(e[4],Object(W.a)()),e=X()(e,4),i=e[0],y=(e[1],e[2]),j=e[3],e=Object(W.a)(),e=X()(e,4),w=e[0],U=e[1],P=e[2],Y=e[3],e=(Object(Q.useEffect)(function(){"object"==J()(F)&&v&&(re()(F,"EmployeeDependent_DetailsData.xlsx"),g(!1))},[F]),Object(Q.useEffect)(function(){v&&(g(!1),c({showMessage:!0,isError:!0,message:"Unable to download please try later"}))},[n]),Object(Q.useEffect)(function(){"Failure"==(null==a?void 0:a.result)&&c({showMessage:!0,isError:!0,message:(null==a?void 0:a.message)||a})},[a]),Object(Q.useEffect)(function(){"Success"==(null==i?void 0:i.result)&&c({showMessage:!0,isError:!1,message:(null==i?void 0:i.message)||i}),"Failure"==(null==i?void 0:i.result)&&c({showMessage:!0,isError:!0,message:(null==i?void 0:i.message)||i})},[i]),[{title:"Employee",dataIndex:"full_name",render:function(e,t){return V.a.createElement("h2",null,V.a.createElement("div",null,e),V.a.createElement("span",null,null==t?void 0:t.user_id))}},{title:"State",dataIndex:["active_job_details","0","location","state"],render:function(e,t){var n,a,l,r,E,c;return V.a.createElement("h2",null,m[null==t||null===(n=t.active_job_details)||void 0===n||null===(a=n[0])||void 0===a||null===(l=a.location)||void 0===l?void 0:l.state],V.a.createElement("span",null,d[null==t||null===(r=t.active_job_details)||void 0===r||null===(E=r[0])||void 0===E||null===(c=E.location)||void 0===c?void 0:c.city]))}},{title:"Company",dataIndex:["active_job_details","0","sub_company","short_name"]},{title:"Department",dataIndex:["active_job_details","0","department","value"],render:function(e){return V.a.createElement("h2",null,e)}},{title:"Work Location",dataIndex:["active_job_details","0","location","facility_id"],render:function(e){return V.a.createElement("h2",null,e)}},{title:V.a.createElement("div",{className:"text-center"},"Dependent 1"),dataIndex:["dependent_details","0"],render:function(e,t){return e?V.a.createElement(V.a.Fragment,null,V.a.createElement("div",null,"Name:",V.a.createElement("span",null,null==e?void 0:e.name),V.a.createElement("br",null),"Gender:",V.a.createElement("span",null,"M"===(null==e?void 0:e.gender)?"Male":"F"===(null==e?void 0:e.gender)?"Female":"T"===(null==e?void 0:e.gender)?"Transgender":"N/A"),V.a.createElement("br",null),"Relation:",V.a.createElement("span",null,null==e?void 0:e.relation),V.a.createElement("br",null),"DOB:",V.a.createElement("span",null,null==e?void 0:e.dob))):V.a.createElement("div",{className:"text-center"},"N/A")}},{title:V.a.createElement("div",{className:"text-center"},"Dependent 2"),dataIndex:["dependent_details","1"],render:function(e,t){return e?V.a.createElement(V.a.Fragment,null,V.a.createElement("div",null,"Name:",V.a.createElement("span",null,null==e?void 0:e.name),V.a.createElement("br",null),"Gender:",V.a.createElement("span",null,"M"===(null==e?void 0:e.gender)?"Male":"F"===(null==e?void 0:e.gender)?"Female":"T"===(null==e?void 0:e.gender)?"Transgender":"N/A"),V.a.createElement("br",null),"Relation:",V.a.createElement("span",null,null==e?void 0:e.relation),V.a.createElement("br",null),"DOB:",V.a.createElement("span",null,null==e?void 0:e.dob))):V.a.createElement("div",{className:"text-center"},"N/A")}},{title:V.a.createElement("div",{className:"text-center"},"Dependent 3"),dataIndex:["dependent_details","2"],render:function(e,t){return e?V.a.createElement(V.a.Fragment,null,V.a.createElement("div",null,"Name:",V.a.createElement("span",null,null==e?void 0:e.name),V.a.createElement("br",null),"Gender:",V.a.createElement("span",null,"M"===(null==e?void 0:e.gender)?"Male":"F"===(null==e?void 0:e.gender)?"Female":"T"===(null==e?void 0:e.gender)?"Transgender":"N/A"),V.a.createElement("br",null),"Relation:",V.a.createElement("span",null,null==e?void 0:e.relation),V.a.createElement("br",null),"DOB:",V.a.createElement("span",null,null==e?void 0:e.dob))):V.a.createElement("div",{className:"text-center"},"N/A")}},{title:V.a.createElement("div",{className:"text-center"},"Dependent 4"),dataIndex:["dependent_details","3"],render:function(e,t){return e?V.a.createElement(V.a.Fragment,null,V.a.createElement("div",null,"Name:",V.a.createElement("span",null,null==e?void 0:e.name),V.a.createElement("br",null),"Gender:",V.a.createElement("span",null,"M"===(null==e?void 0:e.gender)?"Male":"F"===(null==e?void 0:e.gender)?"Female":"T"===(null==e?void 0:e.gender)?"Transgender":"N/A"),V.a.createElement("br",null),"Relation:",V.a.createElement("span",null,null==e?void 0:e.relation),V.a.createElement("br",null),"DOB:",V.a.createElement("span",null,null==e?void 0:e.dob))):V.a.createElement("div",{className:"text-center"},"N/A")}},{title:V.a.createElement("div",{className:"text-center"},"Dependent 5"),dataIndex:["dependent_details","4"],render:function(e,t){return e?V.a.createElement(V.a.Fragment,null,V.a.createElement("div",null,"Name:",V.a.createElement("span",null,null==e?void 0:e.name),V.a.createElement("br",null),"Gender:",V.a.createElement("span",null,"M"===(null==e?void 0:e.gender)?"Male":"F"===(null==e?void 0:e.gender)?"Female":"T"===(null==e?void 0:e.gender)?"Transgender":"N/A"),V.a.createElement("br",null),"Relation:",V.a.createElement("span",null,null==e?void 0:e.relation),V.a.createElement("br",null),"DOB:",V.a.createElement("span",null,null==e?void 0:e.dob))):V.a.createElement("div",{className:"text-center"},"N/A")}},{title:V.a.createElement("div",{className:"text-center"},"Dependent 6"),dataIndex:["dependent_details","5"],render:function(e,t){return e?V.a.createElement(V.a.Fragment,null,V.a.createElement("div",null,"Name:",V.a.createElement("span",null,null==e?void 0:e.name),V.a.createElement("br",null),"Gender:",V.a.createElement("span",null,"M"===(null==e?void 0:e.gender)?"Male":"F"===(null==e?void 0:e.gender)?"Female":"T"===(null==e?void 0:e.gender)?"Transgender":"N/A"),V.a.createElement("br",null),"Relation:",V.a.createElement("span",null,null==e?void 0:e.relation),V.a.createElement("br",null),"DOB:",V.a.createElement("span",null,null==e?void 0:e.dob))):V.a.createElement("div",{className:"text-center"},"N/A")}}]);return V.a.createElement(V.a.Fragment,null,V.a.createElement("div",{className:"page-wrapper"},V.a.createElement(K.a,null,V.a.createElement("title",null,"GMIP Dependent Reports"),V.a.createElement("meta",{name:"description",content:"Login page"})),V.a.createElement("div",{className:"content container-fluid"},b.showMessage?V.a.createElement(le.a,{message:b.message,dismiss:function(){c(function(e){return z(z({},e),{},{showMessage:!1})})},isError:b.isError}):null,V.a.createElement("div",{className:"page-header"},V.a.createElement("div",{className:"row align-items-center"},V.a.createElement("div",{className:"col"},V.a.createElement("h3",{className:"page-title"},"GMIP Dependent Report"),V.a.createElement("ul",{className:"breadcrumb"},V.a.createElement("li",{className:"breadcrumb-item active"},"HR Group"),V.a.createElement("li",{className:"breadcrumb-item active"},"Employee Reports"),V.a.createElement("li",{className:"breadcrumb-item active"},"Dependent Report"))),V.a.createElement("div",{className:"col-auto float-end ml-auto"}))),V.a.createElement("div",{className:"row filter-row"},V.a.createElement("div",{className:"col-sm-6 col-md-3"},V.a.createElement("div",{className:"form-group"},V.a.createElement("label",{className:"date-label"},"Select Joining Month",V.a.createElement("span",{className:"text-danger"},"*")),V.a.createElement($.a,{size:"large",className:"form-control form-date px-3 py-3",disabledDate:function(e){var t=k()().format("YYYY-MM");return e>k()(t,"YYYY-MM")},allowClear:!1,defaultValue:r.month?ce()(r.month,t):"",value:r.month?ce()(r.month,t):"",onChange:function(e,t){M(!1),o.current=!0,E(function(e){return z(z({},e),{},{month:t,pageNumber:1})})},picker:"month",format:t}))),V.a.createElement("div",{className:"col-sm-6 col-md-3"},V.a.createElement("div",{className:"form-group"},V.a.createElement("label",{className:"date-label"},"Select State"),V.a.createElement(ee.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select State",value:r.searchState||null,onChange:function(t){M(!1),o.current=!0,E(function(e){return z(z({},e),{},{searchState:t,pageNumber:1})})},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().startsWith(e.toLowerCase())}},null==_?void 0:_.map(function(e){return V.a.createElement(ee.a.Option,{key:null==e?void 0:e.id,value:null==e?void 0:e.id,label:null==e?void 0:e.name},null==e?void 0:e.name)})))),V.a.createElement("div",{className:"col-sm-6 col-md-3"},V.a.createElement(de.a,{filter:r,setFilter:E,doFetchData:o,setDepartments:f})),V.a.createElement("div",{className:"col-sm-6 col-md-3"},V.a.createElement(ue.a,{filter:r,setFilter:E,doFetchData:o,departments:A,setDesignationData:N})),V.a.createElement("div",{className:"col-sm-12 col-md-3"},V.a.createElement(me.a,{filter:r,setFilter:E,doFetchData:o,accessPermission:_e.f.REGIONAL_EMPLOYEES_VIEW})),V.a.createElement("div",{className:"col-sm-3 col-md-2"},V.a.createElement("label",{className:"date-label"}," "),V.a.createElement("div",{className:"form-group form-focus"},V.a.createElement("a",{className:"btn btn-danger btn-block w-100 px-1 py-2",style:{minHeight:"0px"},type:"button",onClick:function(){o.current=!0,E(function(e){return z(z({},e),{},{month:k()().format(t),searchState:"",searchCompany:"",searchDepartment:"",facilityId:"",pageNumber:1})}),f([]),N([])}},"Reset")))),V.a.createElement("div",{className:"row"},V.a.createElement("div",{className:"col-md-12"},V.a.createElement("div",{className:"table-responsive"},L?V.a.createElement(ae.a,null):V.a.createElement(te.a,{className:"table-striped",pagination:{total:null==a?void 0:a.total_no_of_objs,current:r.pageNumber,pageSize:r.numberOfItems,onChange:function(t,n){o.current=!0,E(function(e){return z(z({},e),{},{pageNumber:n!=r.numberOfItems?1:t,numberOfItems:n})})},showTotal:function(e,t){return"Showing ".concat(t[0]," to ").concat(t[1]," of ").concat(e," Employees")},showSizeChanger:!0,itemRender:ne.a,loading:L},style:{overflowX:"auto"},columns:I||e,dataSource:null==a?void 0:a.data,rowKey:function(e){return null==e?void 0:e.employee_id},scroll:"scroll",title:function(){return V.a.createElement("div",{className:"row"},V.a.createElement("div",{className:"col align-self-center py-2 py-sm-0"},V.a.createElement("h4",{className:"mb-0"},"GMIP Dependent Report")),V.a.createElement("div",{className:"col align-self-center py-2 py-sm-0"},V.a.createElement("div",{className:"text-end"},V.a.createElement("button",{className:"btn btn-primary btn-sm px-2 py-1 m-r-5",onClick:function(){s()},disabled:P},P?V.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):V.a.createElement(V.a.Fragment,null,V.a.createElement("i",{className:"fa-solid fa-file"})," View Reports")),V.a.createElement("button",{className:"btn btn-warning btn-sm text-light px-2 py-1",onClick:function(){h.current=!0,E(function(e){return z(z({},e),{},{directDownload:(null==a?void 0:a.download_limit)>=(null==a?void 0:a.total_no_of_objs)})})},disabled:!(null!=a&&a.total_no_of_objs)},y||x?V.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):V.a.createElement(V.a.Fragment,null,V.a.createElement("i",{className:"fa-solid fa-cloud-arrow-down"})," ","Download")))))}})))))),V.a.createElement(se.a,{modalId:"gmip_report_download_excel",pendingReports:null==w?void 0:w.data,pendingReportFunction:s,pendingReportsLoading:P,pendingReportsError:U,closeModal:function(){return u(R,"hide")}}))}}.call(this,n(234))},771:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(){return l.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"10rem"}},l.a.createElement("div",{className:"spinner-border text-primary",style:{height:"5rem",width:"5rem"},role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading...")))}},773:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return r});var t=n(0),a=n.n(t);function l(e,t,n){return"prev"===t?a.a.createElement("a",null,"Previous"):"next"===t?a.a.createElement("a",null,"Next"):n}function r(e,t){}},775:function(s,e,t){"use strict";t.d(e,"c",function(){return a}),t.d(e,"d",function(){return l}),t.d(e,"b",function(){return r}),t.d(e,"l",function(){return E}),t.d(e,"k",function(){return c}),t.d(e,"j",function(){return o}),t.d(e,"h",function(){return i}),t.d(e,"f",function(){return u}),t.d(e,"g",function(){return d}),t.d(e,"e",function(){return m}),t.d(e,"a",function(){return _}),t.d(e,"i",function(){return T});var e=t(8),n=t.n(e),a=function(a,l,r){return new Promise(function(n,e){var t;!(a instanceof File||"number"==typeof a)||"number"==typeof a?n(!0):((t=new FileReader).readAsDataURL(a),t.onload=function(e){var t=new Image;t.src=e.target.result,t.onload=function(){(null==t?void 0:t.width)<=l&&(null==t?void 0:t.height)<=r?n(!0):n(!1)}})})},l=function(e,t){return"number"==typeof e||(!e||(null==e?void 0:e.size)<1e3*t)},r=function(e,t){return"number"==typeof e||(!e||t.includes(null==e?void 0:e.type))},E=function(e){return e&&(null==e?void 0:e.replace(/^[a-z]|([\s-_][a-z])/gi,function(e){var t,n;return null==e||null===(t=e.toUpperCase())||void 0===t||null===(n=t.replace("-"," "))||void 0===n?void 0:n.replace("_"," ")}))},c=function(e,n){return null==e?void 0:e.reduce(function(e,t){return(e[t[n][n]]=e[t[n][n]]||[]).push(t),e},{})},o=function(e,n){return null==e?void 0:e.reduce(function(e,t){return(e[t[n]]=e[t[n][n]]||[]).push(t),e},{})},i=function(e,t){return e+"-"+(new n.a).format("YYYY-MM-DD-HH-mm-ss")+"."+t},u=function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),e=e-3600*t-60*n,a="";return 0<t&&(a+=t+"h "),0<n&&(a+=n+"m "),0<e&&(a+=e+"s "),a},d=function(e){return{employee_id:null==e?void 0:e.employee_id,employee_id__full_name:null==e?void 0:e.full_name,employee_id__user_id:null==e?void 0:e.user_id}},m=function(e,t){return e.length===t.length&&e.every(function(n){return t.some(function(t){return Object.keys(n).every(function(e){return n[e]===t[e]})})})},_=function(e){return null==e?void 0:e.toLowerCase().replace(/\b\w/g,function(e){return null==e?void 0:e.toUpperCase()})},T=function(e,n){return null==e?void 0:e.reduce(function(e,t){return e[t[n]]=t,e},{})}},780:function(s,e,t){"use strict";t.d(e,"l",function(){return n}),t.d(e,"e",function(){return a}),t.d(e,"g",function(){return l}),t.d(e,"c",function(){return r}),t.d(e,"i",function(){return E}),t.d(e,"d",function(){return c}),t.d(e,"m",function(){return o}),t.d(e,"b",function(){return i}),t.d(e,"f",function(){return u}),t.d(e,"j",function(){return d}),t.d(e,"k",function(){return m}),t.d(e,"a",function(){return _}),t.d(e,"h",function(){return T});var n={ALL_EMPLOYEES_AS_ON_DATE:"ALL_EMPLOYEES_AS_ON_DATE",LEAVE_CREDIT_REPORT:"LEAVE_CREDIT_REPORT",ALL_EMPLOYEES_JOINING_ACTIVITY_EXIT_REPORT:"ALL_EMPLOYEES_JOINING_ACTIVITY_EXIT_REPORT",GET_REGIONAL_REGULARIZATION_REQUESTS:"GET_REGIONAL_REGULARIZATION_REQUEST",GET_REGIONAL_REGULARIZATION_CANCELLATION_REQUESTS:"GET_REGIONAL_REGULARIZATION_CANCELLATION_REQUESTS",GET_EXTENDED_REGULARIZATION_CANCELLATION_REQUESTS:"GET_EXTENDED_REGULARIZATION_CANCELLATION_REQUESTS",GET_SUBORDINATES_REGULARIZATION_CANCELLATION_REQUESTS:"GET_SUBORDINATES_REGULARIZATION_CANCELLATION_REQUESTS",GET_EXTENDED_TEAM_REGULARIZATION_REQUESTS:"GET_EXTENDED_TEAM_REGULARIZATION_REQUESTS",GET_MY_SUBORDINATE_REGULARIZATION_REQUESTS:"GET_MY_SUBORDINATE_REGULARIZATION_REQUESTS",GET_MY_REGULARIZATION_REQUESTS:"GET_MY_REGULARIZATION_REQUESTS",GET_MY_LEAVE_CANCELLATION_VIEW:"GET_MY_LEAVE_CANCELLATION_VIEW",GET_MY_SUBORDINATE_LEAVE_CANCELLATION_VIEW:"GET_MY_SUBORDINATE_LEAVE_CANCELLATION_VIEW",GET_EXTENDED_TEAM_LEAVE_CANCELLATION_VIEW:"GET_EXTENDED_TEAM_LEAVE_CANCELLATION_VIEW",GET_REGIONAL_LEAVE_CANCELLATION_VIEW:"GET_REGIONAL_LEAVE_CANCELLATION_VIEW",MY_ATTENDANCE_DATA:"MY_ATTENDANCE_DATA",GET_REGIONAL_AGGREGATE_ATTENDANCE:"REGIONAL_AGGREGATE_ATTENDANCE",GET_EXTENDED_TEAM_AGGREGATE_ATTENDANCE:"EXTENDED_TEAM_AGGREGATE_ATTENDANCE",GET_REGIONAL_COMPOFF_REQUESTS:"GET_REGIONAL_COMPOFF_REQUESTS",GET_EXTENDED_TEAM_COMPOFF_REQUESTS:"GET_EXTENDED_TEAM_COMPOFF_REQUESTS",GET_MY_SUBORDINATE_COMPOFF_REQUESTS:"GET_MY_SUBORDINATE_COMPOFF_REQUESTS",GET_MY_COMPOFF_REQUESTS:"GET_MY_COMPOFF_REQUESTS",GET_EXTENDED_TEAM_VIEW:"GET_EXTENDED_TEAM_VIEW",GET_REGIONAL_EMPLOYEE_VIEW:"GET_REGIONAL_EMPLOYEE_VIEW",GET_REGIONAL_ATTENDANCE_DETAILED_REQUESTS:"GET_REGIONAL_ATTENDANCE_DETAILED_REQUESTS",GET_MRF_SUBMITTED_REQUESTS:"GET_MRF_SUBMITTED_REQUESTS",GET_EXTENDED_TEAM_ATTENDANCE_DETAILED_REQUESTS:"GET_EXTENDED_TEAM_ATTENDANCE_DETAILED_REQUESTS",GET_MY_SUBORDINATE_ATTENDANCE_DETAILED_REQUESTS:"GET_MY_SUBORDINATE_ATTENDANCE_DETAILED_REQUESTS",USER_GROUP_MAPPING:"USER_GROUP_MAPPING",GMIP_REPORT:"GMIP_REPORT",GET_LEAVE_SUMMARY_REQUESTS:"GET_LEAVE_SUMMARY_REQUESTS",GET_REGIONAL_EXIT_REQUESTS:"GET_REGIONAL_EXIT_REQUESTS",GET_SUBORDINATES_EXIT_REQUESTS:"GET_SUBORDINATES_EXIT_REQUESTS",GET_EXTENDED_EXIT_REQUESTS:"GET_EXTENDED_EXIT_REQUESTS",MRF_EXCEL_DOWNLOADS:"MRF_EXCEL_DOWNLOADS",GET_TAX_DECLARATION_VIEW:"GET_TAX_DECLARATION_VIEW",ALL_ASSETS_MAPPING:"ALL_ASSETS_MAPPING",MY_ASSETS:"MY_ASSETS",GET_FACILITY_HEAD_COUNT_REPORT:"GET_FACILITY_HEAD_COUNT_REPORT",GET_MATERNITY_REQUESTS:"GET_MATERNITY_REQUESTS",EMPLOYEE_PAYROLL_DATA_REPORT:"EMPLOYEE_PAYROLL_DATA_REPORT"},a={ALL_LEAVE_REQUEST:"ALL_LEAVE_REQUEST",LEAVE_SUMMARY_REQUEST:"LEAVE_SUMMARY_REQUEST"},l={ALL_MASTER:"ALL_MASTER"},r={ALL_FACILITY:"ALL_FACILITY",FACILITIES_MISSING_ATTENDANCE:"FACILITIES_MISSING_ATTENDANCE",FACILITIES_HEAD_COUNT:"FACILITIES_HEAD_COUNT"},E={GET_REGIONAL_EXIT_REQUESTS:{FILE_NAME:"RegionalExitRequests",FILE_EXTENSION:"xlsx"},GET_SUBORDINATES_REGULARIZATION_CANCELLATION_REQUESTS:{FILE_NAME:"SubordinatesRegularizationCancellationRequests",FILE_EXTENSION:"xlsx"},GET_EXTENDED_REGULARIZATION_CANCELLATION_REQUESTS:{FILE_NAME:"ExtendedRegularizationCancellationRequests",FILE_EXTENSION:"xlsx"},GET_EXTENDED_EXIT_REQUESTS:{FILE_NAME:"ExtendedExitRequests",FILE_EXTENSION:"xlsx"},GET_SUBORDINATES_EXIT_REQUESTS:{FILE_NAME:"SubordinatesExitRequests",FILE_EXTENSION:"xlsx"},ALL_EMPLOYEES_AS_ON_DATE:{FILE_NAME:"EmployeeListAsOnDate",FILE_EXTENSION:"xlsx"},LEAVE_CREDIT_REPORT:{FILE_NAME:"leaveCreditReport",FILE_EXTENSION:"xlsx"},ALL_EMPLOYEES_JOINING_ACTIVITY_EXIT_REPORT:{FILE_NAME:"EmployeeJoiningActivityExitReport",FILE_EXTENSION:"xlsx"},GET_REGIONAL_REGULARIZATION_REQUEST:{FILE_NAME:"GetRegionalRegularizationRequests",FILE_EXTENSION:"xlsx"},GET_EXTENDED_TEAM_REGULARIZATION_REQUESTS:{FILE_NAME:"GetExtendedTeamRegularizationRequests",FILE_EXTENSION:"xlsx"},GET_MY_SUBORDINATE_REGULARIZATION_REQUESTS:{FILE_NAME:"GetMySubordinateRegularizationRequests",FILE_EXTENSION:"xlsx"},GET_MY_REGULARIZATION_REQUESTS:{FILE_NAME:"GetMyRegularizationRequests",FILE_EXTENSION:"xlsx"},MY_ATTENDANCE_DATA:{FILE_NAME:"MyAttendanceData",FILE_EXTENSION:"xlsx"},GET_REGIONAL_ATTENDANCE_DETAILED_REQUESTS:{FILE_NAME:"GetRegionalAttendanceDetailedRequests",FILE_EXTENSION:"xlsx"},GET_EXTENDED_TEAM_ATTENDANCE_DETAILED_REQUESTS:{FILE_NAME:"GetExtendedTeamAttendanceDetailedRequests",FILE_EXTENSION:"xlsx"},GET_MRF_SUBMITTED_REQUESTS:{FILE_NAME:"GetMrfSubmittedRequests",FILE_EXTENSION:"xlsx"},GET_REGIONAL_AGGREGATE_ATTENDANCE:{FILE_NAME:"GetRegionalAttendanceAggregatedRequests",FILE_EXTENSION:"xlsx"},GET_EXTENDED_TEAM_AGGREGATE_ATTENDANCE:{FILE_NAME:"GetExtendedTeamAttendanceAggregatedRequests",FILE_EXTENSION:"xlsx"},GET_MY_SUBORDINATE_ATTENDANCE_DETAILED_REQUESTS:{FILE_NAME:"GetMySubordinateAttendanceDetailedRequests",FILE_EXTENSION:"xlsx"},GET_REGIONAL_COMPOFF_REQUESTS:{FILE_NAME:"GetRegionalCompOffRequests",FILE_EXTENSION:"xlsx"},GET_EXTENDED_TEAM_COMPOFF_REQUESTS:{FILE_NAME:"GetExtendedTeamCompOffRequests",FILE_EXTENSION:"xlsx"},GET_MY_SUBORDINATE_COMPOFF_REQUESTS:{FILE_NAME:"GetMySubordinateCompOffRequests",FILE_EXTENSION:"xlsx"},GET_MY_COMPOFF_REQUESTS:{FILE_NAME:"GetMyCompOffRequests",FILE_EXTENSION:"xlsx"},MRF_EXCEL_DOWNLOADS:{FILE_NAME:"MrfRequests",FILE_EXTENSION:"xlsx"},GET_TAX_DECLARATION_VIEW:{FILE_NAME:"TaxDeclarationExcel",FILE_EXTENSION:"xlsx"},GET_REGIONAL_REGULARIZATION_CANCELLATION_REQUESTS:{FILE_NAME:"regionalRegularizationCancellationExcel",FILE_EXTENSION:"xlsx"},GET_MATERNITY_REQUESTS:{FILE_NAME:"MaternityRequests",FILE_EXTENSION:"xlsx"},EMPLOYEE_PAYROLL_DATA_REPORT:{FILE_NAME:"PayrollEmployeesData",FILE_EXTENSION:"xlsx"}},c={ALL_LEAVE_REQUEST:{FILE_NAME:"LeaveRequest",FILE_EXTENSION:"xlsx"},LEAVE_SUMMARY_REQUEST:{FILE_NAME:"LeaveSummaryRequest",FILE_EXTENSION:"xlsx"},GET_MY_LEAVE_CANCELLATION_VIEW:{FILE_NAME:"myLeaveCancellationExcel",FILE_EXTENSION:"xlsx"},GET_MY_SUBORDINATE_LEAVE_CANCELLATION_VIEW:{FILE_NAME:"subordinateLeaveCancellationExcel",FILE_EXTENSION:"xlsx"},GET_EXTENDED_TEAM_LEAVE_CANCELLATION_VIEW:{FILE_NAME:"extendedTeamLeaveCancellationExcel",FILE_EXTENSION:"xlsx"},GET_REGIONAL_LEAVE_CANCELLATION_VIEW:{FILE_NAME:"regionalLeaveCancellationExcel",FILE_EXTENSION:"xlsx"}},o={USER_GROUP_MAPPING:{FILE_NAME:"UserGroup",FILE_EXTENSION:"xlsx"}},i={ALL_FACILITY:{FILE_NAME:"AllFacility",FILE_EXTENSION:"xlsx"},FACILITIES_MISSING_ATTENDANCE:{FILE_NAME:"UnsyncedBiometricDevices",FILE_EXTENSION:"xlsx"},FACILITIES_HEAD_COUNT:{FILE_NAME:"FacilityHeadCount",FILE_EXTENSION:"xlsx"}},u={ALL_MASTER:{FILE_NAME:"MASTER",FILE_EXTENSION:"xlsx"}},d={PENDING:"PENDING",COMPLETED:"COMPLETED",FAILED:"FAILED"},m={PENDING:"Pending",COMPLETED:"Completed",FAILED:"Failed"},_={ALL_ASSETS_MAPPING:{FILE_NAME:"AllAssets",FILE_EXTENSION:"xlsx"}},T={MY_ASSETS:{FILE_NAME:"MyAssets",FILE_EXTENSION:"xlsx"}}},781:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return E}),n.d(t,"a",function(){return c});var t=n(237),a=n(103),l=new(n(238).a)(t.a),r=function(e){return l.get(a.a.GET_PENDING_REPORTS,e)},E=function(e){return l.get(a.a.GET_HOLIDAYS_TRACKING_REPORTS,e)},c=function(e){return l.post(a.a.DELETE_REPORT,e)}},786:function(r,e,t){"use strict";var n=t(29),f=t.n(n),n=t(54),O=t.n(n),I=t(0),p=t.n(I),n=t(7),n=t.n(n),L=t(235),a=t(586),S=t.n(a),R=t(781);function l(e){var s=e.status,t=e.selectedRecord,e=Object(I.useState)(!1),e=O()(e,2),u=e[0],d=e[1],e=Object(I.useState)(!1),e=O()(e,2),m=e[0],a=e[1],e=Object(L.a)(),e=O()(e,4),n=e[0],l=e[1],_=e[2],e=(e[3],Object(L.a)()),e=O()(e,4),r=e[0],E=e[1],T=e[2],N=e[3],c=Object(I.useRef)(n),o=Object(I.useRef)(r),i=Object(I.useRef)(l),A=Object(I.useRef)(E);Object(I.useEffect)(function(){c.current!=n&&"object"==f()(n)&&S()(n,null==t?void 0:t.file_name),o.current!=r&&d(!0),i.current==l&&A.current==E||a(!0),c.current=n,o.current=r,i.current=l,A.current=E},[n,r,l,E]);return p.a.createElement("div",{className:"text-center"},m?p.a.createElement("div",{className:"row mx-0 text-danger"},p.a.createElement("div",{className:"col align-self-center"},"Error occurred!"),p.a.createElement("div",{className:"col align-self-center"},p.a.createElement("button",{className:"btn btn-danger text-light btn-sm m-l-5",onClick:function(){a(!1)}},p.a.createElement("i",{className:"fa-solid fa-xmark"})))):p.a.createElement(p.a.Fragment,null,u?p.a.createElement("div",{className:"text-danger"},"Deleted!"):p.a.createElement(p.a.Fragment,null,"COMPLETED"==s?p.a.createElement("button",{className:"btn btn-warning text-light btn-sm m-r-5",onClick:function(){var e,n;e=null==t?void 0:t.pre_signed_url,n=null==t?void 0:t.file_name,fetch(e).then(function(e){e.blob().then(function(e){var e=window.URL.createObjectURL(e),t=document.createElement("a");t.href=e,t.download=n,t.click()})}).catch(function(e){a(!0)})},disabled:_},p.a.createElement("i",{className:"fa-solid fa-download m-r-5"})," Download"):null,p.a.createElement("button",{className:"btn btn-danger text-light btn-sm m-r-5",onClick:function(){var e={reportId:null==t?void 0:t.id};N(Object(R.a)(e))},disabled:T},p.a.createElement("i",{className:"fa-solid fa-trash"})," Delete"))))}l.propTypes={status:n.a.string,selectedRecord:n.a.object},e.a=l},787:function(e,r,E){"use strict";!function(m){var e=E(4),l=E.n(e),e=E(54),_=E.n(e),T=E(0),N=E.n(T),e=E(7),e=E.n(e),I=E(756),p=E(758),L=E(101),n=E(8),A=E.n(n),S=(E(771),E(786)),R=E(769),f=E(780),b=E(775);function a(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)),a}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){l()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function t(e){var t=e.modalId,n=e.pendingReports,a=e.pendingReportsLoading,l=e.pendingReportsError,s=e.closeModal,u=e.pendingReportFunction,e=Object(T.useState)(0),r=(e=_()(e,2))[0],d=e[1],e=Object(T.useState)({showMessage:!1,isError:!0,message:null}),E=(e=_()(e,2))[0],c=e[1],o=(m("#"+t).on("show.bs.modal",function(e){c({showMessage:!1,isError:!0,message:null})}),Object(T.useRef)(l)),i=Object(T.useRef)(n);return Object(T.useEffect)(function(){var e,t;o.current!==l&&c({showMessage:!0,isError:!0,message:(null==l||null===(e=l.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||(null==l?void 0:l.message)}),i.current!==n&&d(null==n?void 0:n.length),o.current=l,i.current=n},[l,n]),N.a.createElement("div",{className:"modal custom-modal fade",id:t,role:"dialog"},N.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-xl"},N.a.createElement("div",{className:"modal-content"},N.a.createElement("div",{className:"modal-header"},N.a.createElement("button",{type:"button",className:"close",onClick:function(){s()},"aria-label":"Close"},N.a.createElement("span",{"aria-hidden":"true"},"X"))),N.a.createElement("div",{className:"modal-body"},E.showMessage?N.a.createElement(R.a,{message:null==E?void 0:E.message,dismiss:function(){c(function(e){return O(O({},e),{},{showMessage:!1})})},isError:E.isError}):null,N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-12"},N.a.createElement("div",{className:"table-responsive"},N.a.createElement(I.a,{className:"table-striped",pagination:!1,style:{overflowX:"auto"},columns:[{title:"File Name",dataIndex:"file_name"},{title:"Requested On",dataIndex:"created_at",render:function(e){return new A.a(e).format("D MMM YYYY, hh:mm:ss a")}},{title:"Expires On",dataIndex:"expires_on",render:function(e){return e?new A.a(e).format("D MMM YYYY, hh:mm:ss a"):"N/A"}},{title:N.a.createElement("div",{className:"text-center"},"Time Taken"),dataIndex:"time_taken",render:function(e,t){return N.a.createElement("div",{className:"text-center"},N.a.createElement("span",null,(null==t?void 0:t.status)===f.j.COMPLETED?Object(b.f)(null==t?void 0:t.time_taken):""))}},{title:N.a.createElement("div",{className:"text-center"},"Status"),dataIndex:"status",render:function(e){return N.a.createElement("div",{className:"text-center"},N.a.createElement("i",{className:e===f.j.PENDING?"fa-regular fa-dot-circle text-warning":e===f.j.COMPLETED?"fa-regular fa-dot-circle text-success":"fa-regular fa-dot-circle text-danger"}),N.a.createElement("span",{className:"ms-2"},f.k[e]))}},{title:N.a.createElement("div",{className:"text-center"},"Action"),dataIndex:"status",render:function(e,t){return N.a.createElement(S.a,{status:e,selectedRecord:t})}}],dataSource:a?[]:n,rowKey:function(e){return e.id},locale:{emptyText:a?N.a.createElement(p.a,{active:!0,paragraph:{rows:0<r?r:5}}):N.a.createElement(L.a,null)},title:function(){return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col align-self-center py-2 py-sm-0"},N.a.createElement("h4",{className:"mb-0"},"Download Reports")),N.a.createElement("div",{className:"col align-self-center py-2 py-sm-0"},N.a.createElement("div",{className:"text-end"},N.a.createElement("button",{className:"btn btn-primary btn-sm px-2 py-1 m-r-5",onClick:function(){u()},disabled:a},a?N.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):N.a.createElement(N.a.Fragment,null,N.a.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"}),N.a.createElement("span",null," ","Reload "))))))}}))))))))}t.propTypes={modalId:e.a.string,pendingReportFunction:e.a.func,pendingReports:e.a.array,pendingReportsLoading:e.a.bool,pendingReportsError:e.a.oneOfType([e.a.string,e.a.object]),closeModal:e.a.func},r.a=t}.call(this,E(234))},794:function(r,e,t){"use strict";var n=t(4),a=t.n(n),n=t(54),N=t.n(n),A=t(0),f=t.n(A),p=t(235),O=t(153),L=t(190),S=(t(772),t(783));function l(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)),a}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}e.a=function(e){function t(){s(window.innerWidth)}var n,a=e.filter,l=e.setFilter,r=e.doFetchData,E=e.accessPermission,e=Object(A.useState)(window.innerWidth),e=N()(e,2),c=e[0],s=e[1],e=Object(A.useState)([]),e=N()(e,2),u=e[0],o=e[1],d=(Object(A.useEffect)(function(){return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]),c<=769),e=Object(A.useState)(null),c=N()(e,2),m=c[0],_=c[1],e=Object(p.a)(),c=N()(e,5),i=c[0],e=(c[1],c[2]),T=c[3];c[4],Object(A.useEffect)(function(){null!=i&&i.result&&o(null==i?void 0:i.result)},[i]);return f.a.createElement("div",{className:"form-group"},f.a.createElement("label",{className:"date-label"},"Work Location"),f.a.createElement(O.a,{className:"form-control floating",id:"sync-fields",showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,style:{height:"50px !important"},onSearch:function(e){var t;3<=e.length&&(t=e,clearTimeout(m),e=setTimeout(function(){o([]);var e={searchText:t,searchState:null==a?void 0:a.searchState,searchCity:null==a?void 0:a.searchCity,accessPermission:E||null};T(Object(S.w)(e))},500),_(e))},placeholder:"Search By Work Location",type:"text",notFoundContent:e?f.a.createElement(L.a,{size:"small"}):0===(null==i||null===(n=i.result)||void 0===n?void 0:n.length)?f.a.createElement("div",{className:"text-danger p-1 text-center"},"No data found"):null,value:null!=a&&a.facilityId?{key:null==a?void 0:a.facilityId}:void 0,onChange:function(t){r.current=!0,l(d?function(e){return I(I({},e),{},{facilityId:null==t?void 0:t.value,facilityIdName:null==t?void 0:t.label})}:function(e){return I(I({},e),{},{facilityId:null==t?void 0:t.value})})}},u.map(function(e,t){return f.a.createElement(O.a.Option,{key:t,value:null==e?void 0:e.id},(null==e?void 0:e.facility_id)+"("+e.facility_name+")")})))}},802:function(r,e,t){"use strict";var n=t(4),a=t.n(n),n=t(54),u=t.n(n),d=t(0),m=t.n(d),N=t(235),_=t(153),A=(t(772),t(778));function l(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)),a}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}e.a=function(e){function t(){E(window.innerWidth)}var n=e.filter,a=e.setFilter,l=e.doFetchData,r=e.setDepartments,e=Object(d.useState)(window.innerWidth),e=u()(e,2),E=(e[0],e[1]),e=(Object(d.useEffect)(function(){return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]),Object(N.a)()),e=u()(e,4),c=e[0],o=e[3],e=Object(d.useState)(null),e=u()(e,2),e=(e[0],e[1],Object(d.useState)([])),e=u()(e,2),i=e[0],s=e[1];return Object(d.useEffect)(function(){null!=c&&c.result&&s(c.result||[])},[c]),Object(d.useEffect)(function(){o(Object(A.g)())},[]),Object(d.useEffect)(function(){var e;null!=n&&n.searchCompany?null==c||null!==(e=c.result)&&void 0!==e&&e.map(function(e){(null==e?void 0:e.id)===parseInt(null==n?void 0:n.searchCompany)&&r(null==e?void 0:e.mapping_company_department)}):r([])},[null==n?void 0:n.searchCompany]),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"date-label"},"Select Company"),m.a.createElement(_.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select Company",value:n.searchCompany?null==n?void 0:n.searchCompany:null,onChange:function(t){l.current=!0,null!=n&&n.searchDesignation?a(function(e){return T(T({},e),{},{searchCompany:t,searchDepartment:"",searchDesignation:"",pageNumber:1})}):a(function(e){return T(T({},e),{},{searchCompany:t,searchDepartment:"",pageNumber:1})})},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())}},null==i?void 0:i.map(function(e){return m.a.createElement(_.a.Option,{key:e.id,value:e.id,label:e.short_name},e.short_name)})))}},803:function(r,e,t){"use strict";var n=t(4),a=t.n(n),n=t(54),o=t.n(n),i=t(0),s=t.n(i),u=t(153);t(772);function l(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)),a}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}e.a=function(e){function t(){c(window.innerWidth)}var n=e.filter,a=e.setFilter,l=e.doFetchData,r=e.departments,E=e.setDesignationData,e=Object(i.useState)(window.innerWidth),e=o()(e,2),c=(e[0],e[1]);Object(i.useEffect)(function(){return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]);return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"date-label"},"Select Department"),s.a.createElement(u.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select Department",disabled:""===(null==n?void 0:n.searchCompany)||0==(null==r?void 0:r.length),value:n.searchDepartment||null,onChange:function(n){l.current=!0,a(E?function(e){return d(d({},e),{},{searchDepartment:n,searchDesignation:"",pageNumber:1})}:function(e){return d(d({},e),{},{searchDepartment:n,pageNumber:1})}),n?null!=r&&r.map(function(e){var t;(null==e||null===(t=e.mapping_department)||void 0===t?void 0:t.id)==n&&E&&E(null==e?void 0:e.mapping_department_designation)}):E&&E([])},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())}},null==r?void 0:r.map(function(e,t){return s.a.createElement(u.a.Option,{key:t,value:e.mapping_department.id,label:e.mapping_department.value},e.mapping_department.value)})))}}}]);