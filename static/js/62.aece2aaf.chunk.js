(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1076:function(e,a,t){"use strict";t.r(a),function(J){var e=t(4),n=t.n(e),e=t(46),F=t.n(e),V=t(156),Q=t(764),L=t(0),H=t.n(L),q=t(595),W=t(777),Z=t(783),$=t(1077),ee=t(894),ae=t(1078),z=t(787),te=t(779),K=t(158),ne=(t(356),t(785)),le=t(781),B=t(824),U=t(814),G=t(795);function l(a,e){var t,n=Object.keys(a);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(a),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),n.push.apply(n,t)),n}function X(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach(function(e){n()(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}a.default=function(){function i(){C(Object(G.o)(a))}function u(e,a){e={templateId:e,templateStatus:a},M(Object(G.p)(e))}var e=Object(L.useState)({showMessage:!1,isError:!0,message:""}),e=F()(e,2),d=e[0],p=e[1],e=Object(L.useState)({}),e=F()(e,2),f=e[0],v=e[1],e=Object(L.useState)([]),e=F()(e,2),E=e[0],b=e[1],t=Object(L.useRef)(!0),y=Object(L.useRef)(""),e=Object(L.useState)({}),e=F()(e,2),g=e[0],N=e[1],e=Object(L.useState)({searchField:"",searchCompany:"",searchDepartment:"",pageNumber:1,numberOfItems:20}),e=F()(e,2),a=e[0],n=e[1],e=Object(K.a)(),e=F()(e,4),h=e[0],O=e[2],C=e[3],e=Object(K.a)(),e=F()(e,4),l=e[0],j=e[3],e=Object(K.a)(),e=F()(e,4),w=e[0],I=e[3],e=Object(K.a)(),e=F()(e,4),r=e[0],S=e[1],D=e[2],e=e[3],c=Object(K.a)(),c=F()(c,4),o=c[0],T=c[1],_=c[2],M=c[3],c=Object(L.useState)([]),c=F()(c,2),k=c[0],x=c[1],c=Object(L.useState)([]),c=F()(c,2),P=c[0],A=c[1],Y=Object(L.useRef)(r),R=Object(L.useRef)(o),c=(Object(L.useEffect)(function(){Y.current!==r&&(p({showMessage:!0,isError:!1,message:null==r?void 0:r.result}),i()),R.current!==o&&(p({showMessage:!0,isError:!1,message:null==o?void 0:o.message}),i()),Y.current=r,R.current=o},[r,o]),Object(L.useEffect)(function(){t.current&&(i(),t.current=!1)},[a]),Object(L.useEffect)(function(){I(Object(ne.g)()),j(Object(G.m)())},[]),Object(L.useEffect)(function(){x((null==w?void 0:w.result)||[])},[w]),Object(L.useEffect)(function(){v((null==l?void 0:l.result)||{}),b(null!=l&&l.result?Object.keys(null==l?void 0:l.result):[])},[l]),[{title:"Template",dataIndex:"template_name",render:function(e,a){return H.a.createElement("h2",null,H.a.createElement("a",{className:"text-decoration-underline blue-link",onClick:function(){m(s.viewSalaryTemplate,"show",a)}},e)," ",null!=a&&a.is_default?H.a.createElement("span",{className:"text-danger d-inline",title:"Default Template"},"*"):null)}},{title:"Company",dataIndex:"company",render:function(e){return null==e?void 0:e.short_name}},{title:"Department",dataIndex:"department",render:function(e){return e?null==e?void 0:e.value:"N/A"}},{title:H.a.createElement("div",{className:"text-center"},"Status"),dataIndex:"status",render:function(e,a){return H.a.createElement("div",{className:"row"},H.a.createElement("div",{className:"col text-center"},H.a.createElement("div",null,H.a.createElement("i",{className:e===B.e.ACTIVE?"fa-regular fa-dot-circle text-success":"fa-regular fa-dot-circle text-danger"}),H.a.createElement("span",{className:"ms-2"},B.f[e]))),H.a.createElement("div",{className:"col text-center"},H.a.createElement(z.a,{scope:U.g},e===B.e.ACTIVE?H.a.createElement("button",{type:"button",className:"btn btn-danger text-light btn-sm",onClick:function(){return m(s.deactivateConfirmation,"show",a)},disabled:null==a?void 0:a.is_default},H.a.createElement("i",{className:"fa fa-trash m-r-5"})," Deactivate"):H.a.createElement("button",{className:"btn btn-success text-light btn-sm",onClick:function(){return m(s.activateConfirmation,"show",a)}},H.a.createElement("i",{className:"fa fa-trash-can-arrow-up m-r-5"})," Activate"))))}}]),s={addSalaryTemplate:"#add_salary_template",viewSalaryTemplate:"#view_salary_template",activateConfirmation:"#activate_confirmation",deactivateConfirmation:"#deactivate_confirmation"},m=function(e,a,t){N(t),J(e).modal(a)};return H.a.createElement("div",{className:"page-wrapper"},H.a.createElement(q.a,null,H.a.createElement("title",null,"Salary Templates"),H.a.createElement("meta",{name:"Salary Templates",content:"Salary Templates"})),H.a.createElement("div",{className:"content container-fluid"},H.a.createElement(z.a,{scope:U.j},d.showMessage?H.a.createElement(W.a,{message:d.message,dismiss:function(){p(function(e){return X(X({},e),{},{showMessage:!1})})},isError:d.isError}):null,H.a.createElement("div",{className:"page-header"},H.a.createElement("div",{className:"row align-items-center"},H.a.createElement(Z.a,null),H.a.createElement(z.a,{scope:U.d},H.a.createElement("div",{className:"col-auto float-end ml-auto"},H.a.createElement("button",{className:"btn btn-primary submit-btn",onClick:function(){m(s.addSalaryTemplate,"show",{})}},H.a.createElement("i",{className:"fa fa-plus"})," Add Salary Template"))))),H.a.createElement("div",{className:"row filter-row"},H.a.createElement("div",{className:"col-sm-6 col-md-4"},H.a.createElement("div",{className:"form-group form-focus"},H.a.createElement("input",{type:"text",className:"form-control floating",placeholder:"Search with ID, Name",value:a.searchField,onChange:function(a){n(function(e){return X(X({},e),{},{searchField:a.target.value})})},onKeyPress:function(e){"Enter"===e.key&&(t.current=!0,n(function(e){return X(X({},e),{},{fetchData:!0,pageNumber:1})}))},onBlur:function(){3<=a.searchField.length&&a.searchField!=y.current&&(y.current=a.searchField,t.current=!0,n(function(e){return X(X({},e),{},{fetchData:!0,pageNumber:1})}))}}),H.a.createElement("label",{className:"focus-label"},"Search with Template Name"))),H.a.createElement("div",{className:"col-sm-6 col-md-3"},H.a.createElement("div",{className:"form-group form-focus"},H.a.createElement(V.a,{className:"form-control form-select py-2",placeholder:"Select Company",value:a.searchCompany,onChange:function(a){t.current=!0,n(function(e){return X(X({},e),{},{searchCompany:a,searchDepartment:"",pageNumber:1})}),a?k.map(function(e){(null==e?void 0:e.id)===a&&A(null==e?void 0:e.mapping_company_department)}):A([])}},H.a.createElement(V.a.Option,{defaultValue:!0,value:""},"-- Select Company --"),k.map(function(e){return H.a.createElement(V.a.Option,{key:e.id,value:e.id},e.short_name)})))),H.a.createElement("div",{className:"col-sm-6 col-md-3"},H.a.createElement("div",{className:"form-group form-focus"},H.a.createElement(V.a,{className:"form-control form-select py-2",placeholder:"Select Department",value:a.searchDepartment,onChange:function(a){t.current=!0,n(function(e){return X(X({},e),{},{searchDepartment:a,pageNumber:1})})},disabled:0===P.length},H.a.createElement(V.a.Option,{defaultValue:!0,value:""},"-- Select Department --"),P.map(function(e){var a,t,n;return H.a.createElement(V.a.Option,{key:null==e||null===(a=e.mapping_department)||void 0===a?void 0:a.id,value:null==e||null===(t=e.mapping_department)||void 0===t?void 0:t.id},null==e||null===(n=e.mapping_department)||void 0===n?void 0:n.value)})))),H.a.createElement("div",{className:"col-sm-6 col-md-2"},H.a.createElement("a",{className:"btn btn-danger btn-block w-100 px-2",onClick:function(){t.current=!0,n(function(e){return X(X({},e),{},{searchField:"",searchCompany:"",searchDepartment:"",pageNumber:1})}),A([])}},"Reset"))),H.a.createElement("div",{className:"row"},H.a.createElement("div",{className:"col-md-12"},H.a.createElement("div",{className:"table-responsive"},O?H.a.createElement(te.a,null):H.a.createElement(Q.a,{className:"table-striped",pagination:{total:null==h?void 0:h.totalCount,current:a.pageNumber,pageSize:a.numberOfItems,onChange:function(a){t.current=!0,n(function(e){return X(X({},e),{},{pageNumber:a})})},showTotal:function(e,a){return"Showing ".concat(a[0]," to ").concat(a[1]," of ").concat(e," Templates")},showSizeChanger:!0,onShowSizeChange:function(e,a){t.current=!0,n(function(e){return X(X({},e),{},{pageNumber:1,numberOfItems:a})})},itemRender:le.a,loading:O},style:{overflowX:"auto"},columns:c,dataSource:null==h?void 0:h.result,rowKey:function(e){return e.id}})))))),H.a.createElement($.a,{mode:"creation",modalId:"add_salary_template",salaryComponents:f,componentTypes:E,companies:k,submitData:e,responseData:r,error:S,loading:D,closeModal:function(){return m(s.addSalaryTemplate,"hide")}}),H.a.createElement(ae.a,{modalId:"view_salary_template",salaryTemplate:g,closeModal:function(){return m(s.viewSalaryTemplate,"hide")}}),H.a.createElement(ee.a,{modalId:"activate_confirmation",action:"activate",actionType:"Salary Template",responseData:o,loading:_,error:T,onConfirmation:function(){return u(null==g?void 0:g.id,B.e.ACTIVE)},closeModal:function(){return m(s.activateConfirmation,"hide")}}),H.a.createElement(ee.a,{modalId:"deactivate_confirmation",action:"deactivate",actionType:"Salary Template",responseData:o,loading:_,error:T,onConfirmation:function(){return u(null==g?void 0:g.id,B.e.INACTIVE)},closeModal:function(){return m(s.deactivateConfirmation,"hide")}}))}}.call(this,t(246))},1077:function(e,t,r){"use strict";!function(D){var e=r(4),l=r.n(e),e=r(46),N=r.n(e),h=r(0),O=r.n(h),T=r(596),_=r(777),M=r(893),k=r(795),C=r(761),j=r(347),w=r(156),I=r(142),e=r(7),e=r.n(e);function n(a,e){var t,n=Object.keys(a);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(a),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),n.push.apply(n,t)),n}function S(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach(function(e){l()(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function a(e){var t=Object(h.useRef)(),r=e.modalId,a=e.responseData,n=e.error,f=e.loading,c=e.submitData,o=e.closeModal,m=e.companies,i=e.componentTypes,u=e.salaryComponents,e=Object(h.useState)(),v=(e=N()(e,2))[0],E=e[1],e=Object(h.useState)([]),d=(e=N()(e,2))[0],p=e[1],e=Object(h.useState)({showMessage:!1,isError:!0,message:null}),l=(e=N()(e,2))[0],s=e[1],b=Object(h.useRef)(n),y=(Object(h.useEffect)(function(){var e,a;null!==(e=t.current)&&void 0!==e&&e.setSubmitting(!1),b.current!==n&&s({showMessage:!0,isError:!0,message:(null==n||null===(a=n.response)||void 0===a?void 0:a.data)||(null==n?void 0:n.message)})},[n]),Object(h.useEffect)(function(){y(),o()},[a]),D("#"+r).on("show.bs.modal",function(e){y()}),function(){var e;null!==(e=t.current)&&void 0!==e&&e.resetForm(),g({templateName:"",departmentId:"",companyId:"",isDefault:!1,salaryComponentIds:null==i?void 0:i.map(function(e){return u[e].map(function(e){return null!=e&&e.is_basic?null==e?void 0:e.id:null})}).flat().filter(function(e){return null!=e})}),s({showMessage:!1,isError:!0,message:null}),E(0<i.length&&(null===(e=i[0])||void 0===e?void 0:e.value)),p([])}),e=Object(h.useState)({templateName:"",departmentId:"",companyId:"",isDefault:!1,salaryComponentIds:[]}),e=(a=N()(e,2))[0],g=a[1];return O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{id:r,className:"modal custom-modal fade",role:"dialog"},O.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-xl",role:"document"},O.a.createElement("div",{className:"modal-content"},O.a.createElement("div",{className:"modal-header"},O.a.createElement("h5",{className:"modal-title"},"Add Salary Template"),O.a.createElement("button",{type:"button",className:"close",onClick:function(){return o()},"aria-label":"Close"},O.a.createElement("span",{"aria-hidden":"true"},"X"))),O.a.createElement("div",{className:"modal-body"},l.showMessage?O.a.createElement(_.a,{message:null==l?void 0:l.message,dismiss:function(){s(function(e){return S(S({},e),{},{showMessage:!1})})},isError:l.isError}):null,O.a.createElement(T.c,{initialValues:e,validationSchema:M.b,enableReinitialize:!0,innerRef:t,onSubmit:function(e){setTimeout(function(){c(Object(k.g)(e))},400)}},function(e){var a=e.values,t=e.errors,n=e.touched,l=e.handleChange,r=e.handleBlur,c=e.handleSubmit,o=e.isSubmitting,s=e.setFieldValue;return O.a.createElement("form",{onSubmit:c},O.a.createElement("div",{className:"row"},O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(t.templateName&&n.templateName?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Template Name",O.a.createElement("span",{className:"text-danger"},"*")),O.a.createElement("input",{className:"form-control ".concat(t.templateName&&n.templateName?"error-input":""),type:"text",name:"templateName",placeholder:"Enter Template Name Here",value:a.templateName,onChange:l,onBlur:r}),t.templateName&&n.templateName?O.a.createElement("small",null,null==t?void 0:t.templateName):null)),O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(t.companyId&&n.companyId?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Company",O.a.createElement("span",{className:"text-danger"},"*")),O.a.createElement(w.a,{className:"form-control ".concat(t.companyId&&n.companyId?"error-input":""),name:"companyId",placeholder:"Select Company",value:a.companyId,onChange:function(a){s("companyId",a),s("departmentId",""),a?m.map(function(e){(null==e?void 0:e.id)===a&&p(null==e?void 0:e.mapping_company_department)}):p([])},onBlur:r},O.a.createElement(w.a.Option,{defaultValue:!0,value:"",disabled:!0,hidden:!0},"-- Select Company --"),null==m?void 0:m.map(function(e,a){return O.a.createElement(w.a.Option,{key:a,value:e.id},e.short_name)})),t.companyId&&n.companyId?O.a.createElement("small",null,null==t?void 0:t.companyId):null)),O.a.createElement("div",{className:"col-md-6"},O.a.createElement("div",{className:"form-group ".concat(t.departmentId&&n.departmentId?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Department"),O.a.createElement(w.a,{className:"form-control ".concat(t.departmentId&&n.departmentId?"error-input":""),name:"departmentId",placeholder:"Select Department",value:a.departmentId,onChange:function(e){s("departmentId",e)},onBlur:r,disabled:0===d.length||(null==a?void 0:a.isDefault)},O.a.createElement(w.a.Option,{defaultValue:!0,value:"",disabled:!0,hidden:!0},"-- Select Department --"),null==d?void 0:d.map(function(e,a){var t,n;return O.a.createElement(w.a.Option,{key:a,value:null==e||null===(t=e.mapping_department)||void 0===t?void 0:t.id},null==e||null===(n=e.mapping_department)||void 0===n?void 0:n.value)})),t.departmentId&&n.departmentId?O.a.createElement("small",null,null==t?void 0:t.departmentId):null)),O.a.createElement("div",{className:"col-md-6 align-self-center"},O.a.createElement("div",{className:"form-group ".concat(null!=n&&n.isDefault&&null!=t&&t.isDefault?"error-group":"")},O.a.createElement("div",{className:"form-check form-check-inline"},O.a.createElement("input",{id:"isDefault",className:"form-check-input",type:"checkbox",name:"isDefault",value:!0,onChange:function(e){s("isDefault",e.target.checked),e.target.checked&&s("departmentId","")},checked:!!a.isDefault}),O.a.createElement("label",{className:"form-check-label",htmlFor:"isDefault"},"Is Default")),null!=n&&n.isDefault&&null!=t&&t.isDefault?O.a.createElement("small",null,null==t?void 0:t.isDefault):null)),O.a.createElement("div",{className:"col-12"},O.a.createElement("div",{className:"form-group ".concat(t.salaryComponentIds&&n.salaryComponentIds?"error-group":"")},O.a.createElement("label",{className:"col-form-label"},"Salary Components",O.a.createElement("span",{className:"text-danger"},"*")),i&&0<i.length?O.a.createElement(C.a.Container,{id:"left-tabs-example",defaultActiveKey:i[0],activeKey:v,onSelect:function(e){E(e)}},O.a.createElement("div",{className:"row mx-0 mt-2"},O.a.createElement("div",{className:"col-sm-4"},O.a.createElement(j.a,{variant:"pills",className:"flex-column"},i.map(function(e){return O.a.createElement(j.a.Item,{key:e},O.a.createElement(j.a.Link,{eventKey:e},e))}))),O.a.createElement("div",{className:"col-sm-8"},O.a.createElement(I.a.Group,{name:"salaryComponentIds",className:"col-12",value:a.salaryComponentIds,onChange:function(e){s("salaryComponentIds",e)}},O.a.createElement(C.a.Content,{className:"pt-0"},i.map(function(e){return O.a.createElement(C.a.Pane,{eventKey:e,key:e},O.a.createElement("div",{className:"row mx-0"},u[e]?u[e].map(function(e){return O.a.createElement("div",{className:"col-md-6 p-1",key:e.id},O.a.createElement("div",{className:"shadow-sm p-2"},O.a.createElement(I.a,{value:e.id,disabled:e.is_basic},O.a.createElement("h5",{className:"user-name mt-1 mb-0"},e.component_name,e.is_basic?O.a.createElement("span",{className:"text-danger"},"*"):null))))}):O.a.createElement("div",{className:"text-center"},"No components available")))})))))):null,t.salaryComponentIds&&n.salaryComponentIds?O.a.createElement("small",null,null==t?void 0:t.salaryComponentIds):null))),O.a.createElement("div",{className:"submit-section"},O.a.createElement("button",{className:"btn btn-primary submit-btn",disabled:o,type:"submit"},f?O.a.createElement("span",{className:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"}):"Submit")))}))))))}a.propTypes={modalId:e.a.string,responseData:e.a.oneOfType([e.a.array,e.a.object]),error:e.a.oneOfType([e.a.string,e.a.object]),loading:e.a.bool,submitData:e.a.func,closeModal:e.a.func,companies:e.a.array,componentTypes:e.a.array,salaryComponents:e.a.object},t.a=a}.call(this,r(246))},1078:function(l,e,a){"use strict";function t(e){var a,t,n=e.salaryTemplate,l=e.closeModal,e=Object(m.useState)({}),r=(e=o()(e,2))[0],c=e[1];return Object(m.useEffect)(function(){var e=null==n||null===(e=n.salary_template)||void 0===e?void 0:e.reduce(function(e,a){var t,n=null==a||null===(n=a.component)||void 0===n||null===(t=n.component_type)||void 0===t?void 0:t.value;return e[n]=null!==(t=e[n])&&void 0!==t?t:[],e[n].push(null==a?void 0:a.component),e},{});c(e)},[n]),i.a.createElement("div",{className:"modal custom-modal fade",id:"view_salary_template",role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title"},"Salary Template Details"),i.a.createElement("button",{type:"button",className:"close",onClick:function(){l()},"aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"X"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4 p-1"},"Template Name:"),i.a.createElement("div",{className:"col-8 p-1"},i.a.createElement("span",null,null==n?void 0:n.template_name)),i.a.createElement("div",{className:"col-4 p-1"},"Company:"),i.a.createElement("div",{className:"col-8 p-1"},i.a.createElement("span",null,null==n||null===(a=n.company)||void 0===a?void 0:a.short_name)),i.a.createElement("div",{className:"col-4 p-1"},"Department:"),i.a.createElement("div",{className:"col-8 p-1"},i.a.createElement("span",null,null!=n&&n.department?null==n||null===(t=n.department)||void 0===t?void 0:t.value:"N/A")),i.a.createElement("div",{className:"col-4 p-1"},"Status:"),i.a.createElement("div",{className:"col-8 p-1"},i.a.createElement("span",null,u.f[null==n?void 0:n.status])),i.a.createElement("div",{className:"col-4 p-1"},"Salary Components:"),i.a.createElement("div",{className:"col-8 p-1"},r?i.a.createElement(i.a.Fragment,null,Object.keys(r).map(function(e){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("h5",{className:"mb-1"},e),i.a.createElement("ul",{className:"mb-1"},r[e].map(function(e){return i.a.createElement("li",{key:null==e?void 0:e.component_name},null==e?void 0:e.component_name)})))})):"N/A"),i.a.createElement("div",{className:"col-4 p-1"},"Created:"),i.a.createElement("div",{className:"col-8 p-1"},new s.a(null==n?void 0:n.created_at).format("D MMM, YYYY")),i.a.createElement("div",{className:"col-4 p-1"},"Last modified:"),i.a.createElement("div",{className:"col-8 p-1"},new s.a(null==n?void 0:n.modified_at).format("D MMM, YYYY")))))))}var n=a(46),o=a.n(n),n=a(8),s=a.n(n),m=a(0),i=a.n(m),u=a(824),n=a(7),a=a.n(n);t.propTypes={salaryTemplate:a.a.object,closeModal:a.a.func},e.a=t},781:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return r});var a=t(0),n=t.n(a);function l(e,a,t){return"prev"===a?n.a.createElement("a",null,"Previous"):"next"===a?n.a.createElement("a",null,"Next"):t}function r(e,a){}},784:function(i,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"d",function(){return l}),a.d(e,"b",function(){return r}),a.d(e,"l",function(){return c}),a.d(e,"k",function(){return o}),a.d(e,"j",function(){return s}),a.d(e,"h",function(){return m}),a.d(e,"f",function(){return u}),a.d(e,"g",function(){return d}),a.d(e,"e",function(){return p}),a.d(e,"a",function(){return f}),a.d(e,"i",function(){return v});var e=a(8),t=a.n(e),n=function(n,l,r){return new Promise(function(t,e){var a;!(n instanceof File||"number"==typeof n)||"number"==typeof n?t(!0):((a=new FileReader).readAsDataURL(n),a.onload=function(e){var a=new Image;a.src=e.target.result,a.onload=function(){(null==a?void 0:a.width)<=l&&(null==a?void 0:a.height)<=r?t(!0):t(!1)}})})},l=function(e,a){return"number"==typeof e||(!e||(null==e?void 0:e.size)<1e3*a)},r=function(e,a){return"number"==typeof e||(!e||a.includes(null==e?void 0:e.type))},c=function(e){return e&&(null==e?void 0:e.replace(/^[a-z]|([\s-_][a-z])/gi,function(e){var a,t;return null==e||null===(a=e.toUpperCase())||void 0===a||null===(t=a.replace("-"," "))||void 0===t?void 0:t.replace("_"," ")}))},o=function(e,t){return null==e?void 0:e.reduce(function(e,a){return(e[a[t][t]]=e[a[t][t]]||[]).push(a),e},{})},s=function(e,t){return null==e?void 0:e.reduce(function(e,a){return(e[a[t]]=e[a[t][t]]||[]).push(a),e},{})},m=function(e,a){return e+"-"+(new t.a).format("YYYY-MM-DD-HH-mm-ss")+"."+a},u=function(e){var a=Math.floor(e/3600),t=Math.floor((e-3600*a)/60),e=e-3600*a-60*t,n="";return 0<a&&(n+=a+"h "),0<t&&(n+=t+"m "),0<e&&(n+=e+"s "),n},d=function(e){return{employee_id:null==e?void 0:e.employee_id,employee_id__full_name:null==e?void 0:e.full_name,employee_id__user_id:null==e?void 0:e.user_id}},p=function(e,a){return e.length===a.length&&e.every(function(t){return a.some(function(a){return Object.keys(t).every(function(e){return t[e]===a[e]})})})},f=function(e){return null==e?void 0:e.toLowerCase().replace(/\b\w/g,function(e){return null==e?void 0:e.toUpperCase()})},v=function(e,t){return null==e?void 0:e.reduce(function(e,a){return e[a[t]]=a,e},{})}},824:function(m,e,a){"use strict";a.d(e,"f",function(){return t}),a.d(e,"e",function(){return n}),a.d(e,"d",function(){return l}),a.d(e,"g",function(){return r}),a.d(e,"c",function(){return c}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return s});var t={A:"Active",I:"Inactive"},n={ACTIVE:"A",INACTIVE:"I"},l={Apprentice:{min:0,max:20999},"Management (Above 90 K)":{min:9e4,max:1/0},"ESIC Eligible":{min:0,max:21e3},"Non-ESIC Non-Management":{min:21e3,max:9e4}},r={all:"All",existing:"Existing Scheme",new:"New Scheme"},c={MONTHLY:"Monthly",DEDUCTION:"Deduction",CTC:"CTC",OTHER:"Other"},o={ONE_TIME:"One Time",MONTHLY:"Monthly",QUARTERLY:"Quarterly",HALF_YEARLY:"Half Yearly",YEARLY:"Yearly"},s={Gross:"Gross",TotalCTC:"Total CTC",IndirectCTC:"Indirect CTC"}},894:function(e,t,r){"use strict";!function(d){var e=r(4),n=r.n(e),e=r(46),p=r.n(e),f=r(0),v=r.n(f),y=r(777),e=r(7),e=r.n(e),E=r(784);function l(a,e){var t,n=Object.keys(a);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(a),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),n.push.apply(n,t)),n}function b(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach(function(e){n()(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function a(e){var a=e.modalId,t=e.action,n=e.actionType,l=e.responseData,r=e.loading,c=e.error,o=e.onConfirmation,i=e.closeModal,e=Object(f.useState)({showMessage:!1,isError:!0,message:null}),s=(e=p()(e,2))[0],m=e[1],u=Object(f.useRef)(c);return Object(f.useEffect)(function(){var e;u.current!==c&&m({showMessage:!0,isError:!0,message:(null==c||null===(e=c.response)||void 0===e?void 0:e.data)||(null==c?void 0:c.message)})},[c]),Object(f.useEffect)(function(){i()},[l]),d("#"+a).on("show.bs.modal",function(e){m({showMessage:!1,isError:!0,message:null})}),v.a.createElement("div",{className:"modal custom-modal fade",id:a,role:"dialog"},v.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},v.a.createElement("div",{className:"modal-content"},v.a.createElement("div",{className:"modal-body"},s.showMessage?v.a.createElement(y.a,{message:null==s?void 0:s.message,dismiss:function(){m(function(e){return b(b({},e),{},{showMessage:!1})})},isError:s.isError}):null,v.a.createElement("div",{className:"form-header mb-2"},v.a.createElement("h3",null,Object(E.l)(t)," ",n),v.a.createElement("p",null,"Are you sure want to ",t," the ",n)),v.a.createElement("div",{className:"modal-btn pt-4"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-6"},v.a.createElement("button",{className:"btn btn-primary submit-btn",disabled:r,onClick:o},Object(E.l)(t),r?v.a.createElement("span",{className:"spinner-border spinner-border-sm"}):null)),v.a.createElement("div",{className:"col-6"},v.a.createElement("a",{className:"btn btn-primary cancel-btn","data-bs-dismiss":"modal"},"Cancel"))))))))}a.propTypes={modalId:e.a.string,action:e.a.string,actionType:e.a.string,responseData:e.a.oneOfType([e.a.array,e.a.object]),error:e.a.oneOfType([e.a.string,e.a.object]),loading:e.a.bool,onConfirmation:e.a.func,closeModal:e.a.func},t.a=a}.call(this,r(246))}}]);