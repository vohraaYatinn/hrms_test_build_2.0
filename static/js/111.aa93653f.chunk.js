(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1024:function(e,t,a){"use strict";a.r(t),function(ue){var e=a(80),me=a.n(e),e=a(4),n=a.n(e),e=a(29),de=a.n(e),e=a(54),te=a.n(e),ae=a(0),ne=a.n(ae),fe=a(582),le=a(152),pe=a(189),ve=a(230),be=a(750),he=a(767),ye=(a(766),a(765)),re=a(234),Ee=a(774),ge=a(769),ce=a(819),Oe=a(777),we=a(874),Ne=a(763),Se=a(772),je=a(584),oe=a(235),ie=a(62),Ce=a(770),Ie=a(120),e=a(8),De=a.n(e);function l(t,e){var a,n=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)),n}function se(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach(function(e){n()(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function _e(e,t){var a,n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return n&&(e=n),a=0,{s:t=function(){},n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){c=!0,l=e},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var u,m,t=Object(ie.c)(Ie.g),e=(Object(ie.b)(),Object(ae.useState)({})),e=te()(e,2),d=e[0],f=e[1],e=Object(ae.useState)({showMessage:!1,isError:!0,message:""}),e=te()(e,2),p=e[0],v=e[1],b=(new Date).toISOString().slice(0,10),n=Object(ae.useRef)(!0),e=Object(re.a)(),e=te()(e,4),a=e[0],l=e[1],h=e[2],y=e[3],e=Object(re.a)(),e=te()(e,4),E=e[0],g=e[3],e=Object(re.a)(),e=te()(e,4),O=e[0],w=e[1],N=e[3],e=Object(re.a)(),e=te()(e,4),r=e[0],S=e[2],j=e[3],e=Object(ae.useState)({searchFacility:"",searchState:"",searchCity:"",searchCompany:"",searchDepartment:"",searchType:"",searchStatus:ce.a.ACTIVE,pageNumber:1,numberOfItems:20,date:b}),e=te()(e,2),c=e[0],o=e[1],e=Object(ae.useState)([]),e=te()(e,2),C=e[0],I=e[1],e=Object(ae.useState)([]),e=te()(e,2),D=e[0],_=e[1],e=Object(ae.useState)([]),e=te()(e,2),x=e[0],F=e[1],T=Object(ie.c)(oe.K),k=Object(ie.c)(oe.v),e=Object(ie.c)(oe.I),L=[],A=_e(Object(ie.c)(oe.E));try{for(A.s();!(m=A.n()).done;){var P=m.value,M={};M.name=T[P],M.id=P,L.push(M)}}catch(e){A.e(e)}finally{A.f()}0===L.length&&(L=e);function W(){H(!0),N(Object(Oe.g)(c))}function R(e,t,a){f(a),ue(e).modal(t)}var z=Object(ie.c)(oe.w),e=Object(ie.c)(oe.F),i=Object(ae.useState)([]),i=te()(i,2),U=i[0],Y=i[1],i=Object(ae.useState)(),i=te()(i,2),K=(i[0],i[1]),B=(Object(ae.useEffect)(function(){g(Object(Se.g)())},[]),Object(ae.useEffect)(function(){I((null==E?void 0:E.result)||[])},[E]),Object(ae.useRef)(a)),J=Object(ae.useRef)(l),i=Object(ae.useState)(!1),i=te()(i,2),V=i[0],X=i[1],i=Object(ae.useState)(!1),i=te()(i,2),q=i[0],s=i[1],i=Object(ae.useState)(!1),i=te()(i,2),G=i[0],H=i[1],$=(Object(ae.useEffect)(function(){X(!1),0<(null==a?void 0:a.totalCount)&&X(!0)},[a]),Object(ae.useEffect)(function(){q&&($(),s(!1))},[c]),Object(ae.useEffect)(function(){var e;"object"==de()(O)&&G&&(e=Ee.b[Ee.c.FACILITIES_MISSING_ATTENDANCE],Object(je.saveAs)(O,Object(ge.h)(e.FILE_NAME,e.FILE_EXTENSION)),H(!1))},[O]),Object(ae.useEffect)(function(){G&&(H(!1),v({showMessage:!0,isError:!0,message:"Unable to download please try later"}))},[w]),Object(ae.useEffect)(function(){var e;J.current!==l&&v({showMessage:!0,isError:!0,message:(null==l||null===(e=l.response)||void 0===e?void 0:e.data)||(null==l?void 0:l.message)}),B.current=a,J.current=l},[a,l]),Object(ae.useEffect)(function(){},[l]),Object(ae.useEffect)(function(){var e;null!=t&&t.employee_details&&K(null==t||null===(e=t.employee_details)||void 0===e?void 0:e.employee_id)},[t]),Object(ae.useEffect)(function(){n.current&&($(),n.current=!1)},[c]),Object(ae.useEffect)(function(){o({searchFacility:"",searchState:"",searchCity:"",searchCompany:"",searchDepartment:"",searchType:"",searchStatus:ce.a.ACTIVE,pageNumber:1,numberOfItems:20,date:b}),F([])},[]),ue("#view_facility").on("hide.bs.modal",function(e){f()}),function(){y(Object(Oe.p)(c))}),i=(Object(ae.useEffect)(function(){null!=r&&r.result&&F(r.result)},[r]),Object(ae.useState)(null)),w=te()(i,2),Q=w[0],Z=w[1],ee="#view_facility",i=[{title:"Facility ID",dataIndex:"facility",render:function(e,t){var a,n;return ne.a.createElement("h2",{style:{maxWidth:"300px",whiteSpace:"pre-wrap"}},ne.a.createElement("a",{className:"text-decoration-underline blue-link",onClick:function(){R(ee,"show",null==t?void 0:t.facility)}},null==t||null===(a=t.facility)||void 0===a?void 0:a.facility_id),ne.a.createElement("span",null,Object(ge.l)(null==t||null===(n=t.facility)||void 0===n?void 0:n.facility_type.value)))}},{title:"Name",dataIndex:"facility",render:function(e,t){var a;return ne.a.createElement("div",{style:{maxWidth:"300px",whiteSpace:"pre-wrap"}},null==t||null===(a=t.facility)||void 0===a?void 0:a.facility_name)}},{title:"Location",dataIndex:"state",render:function(e,t){var a,n,l;return ne.a.createElement("h2",null,k[null==t||null===(a=t.facility)||void 0===a||null===(n=a.address_details)||void 0===n?void 0:n.city],ne.a.createElement("span",null,T[null==t||null===(l=t.address_details)||void 0===l?void 0:l.state]))}},{title:"Phone",dataIndex:["facility","phone"]},{title:"Status",dataIndex:["facility","status"],render:function(e){return ne.a.createElement("div",null,ne.a.createElement("i",{className:"A"===e?"fa-regular fa-dot-circle text-success":"fa-regular fa-dot-circle text-danger"}),ne.a.createElement("span",{className:"ms-2"},ce.c[e]))}}];return ne.a.createElement("div",{className:"page-wrapper"},ne.a.createElement(fe.a,null,ne.a.createElement("title",null,"Unsynced Biometric Devices"),ne.a.createElement("meta",{name:"description",content:"Login page"})),ne.a.createElement("div",{className:"content container-fluid"},p.showMessage?ne.a.createElement(Ne.a,{message:p.message,dismiss:function(){v(function(e){return se(se({},e),{},{showMessage:!1})})},isError:p.isError}):null,ne.a.createElement("div",{className:"page-header"},ne.a.createElement("div",{className:"row align-items-center"},ne.a.createElement(Ce.a,null))),ne.a.createElement("div",{className:"row filter-row"},ne.a.createElement("div",{className:"col-sm-12 col-md-3"},ne.a.createElement("div",{className:"form-group"},ne.a.createElement("label",{className:"date-label"},"Search Facility"),ne.a.createElement(le.a,{className:"form-control floating",type:"text",showSearch:!0,allowClear:!0,filterOption:!1,placeholder:"Search Facility",onSearch:function(e){var t;3<=e.length&&(t=e,clearTimeout(Q),e=setTimeout(function(){F([]),j(Object(Oe.w)({searchText:t,includeInactive:!0}))},500),Z(e))},notFoundContent:S?ne.a.createElement(pe.a,{size:"small"}):0===(null==r||null===(u=r.result)||void 0===u?void 0:u.length)?ne.a.createElement("div",{className:"text-danger p-1 text-center"},"No data found"):null,value:null!=c&&c.searchFacility?{key:c.searchFacility}:void 0,onChange:function(t){o(function(e){return se(se({},e),{},{searchFacility:t,pageNumber:1})}),n.current=!0}},x.map(function(e,t){return ne.a.createElement(le.a.Option,{key:t,value:null==e?void 0:e.id},(null==e?void 0:e.facility_id)+"("+e.facility_name+")")})))),ne.a.createElement("div",{className:"col-sm-6 col-md-3"},ne.a.createElement("div",{className:"form-group"},ne.a.createElement("label",{className:"date-label"},"Select State"),ne.a.createElement(le.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select State",value:(null==c?void 0:c.searchState)||void 0,onChange:function(t){Y(t?z[T[t]]:[]),o(function(e){return se(se({},e),{},{searchState:t,searchCity:""})}),s(!0)},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().startsWith(e.toLowerCase())}},me()(L).sort(function(e,t){return(null==t?void 0:t.name)<(null==e?void 0:e.name)?1:-1}).map(function(e){return ne.a.createElement(le.a.Option,{key:null==e?void 0:e.id,value:null==e?void 0:e.id,className:"ant-select-custom-dropdown-option",label:null==e?void 0:e.name},null==e?void 0:e.name)})))),ne.a.createElement("div",{className:"col-sm-6 col-md-3"},ne.a.createElement("div",{className:"form-group "},ne.a.createElement("label",{className:"date-label"},"Select City"),ne.a.createElement(le.a,{showSearch:!0,allowClear:!0,className:"form-control floating",placeholder:"Select City",value:(null==c?void 0:c.searchCity)||void 0,onChange:function(t){o(function(e){return se(se({},e),{},{searchCity:t})}),s(!0)},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())},disabled:0===U.length},me()(U).sort(function(e,t){return(null==t?void 0:t.name)<(null==e?void 0:e.name)?1:-1}).map(function(e){return ne.a.createElement(le.a.Option,{key:null==e?void 0:e.id,value:null==e?void 0:e.id,className:"ant-select-custom-dropdown-option",label:null==e?void 0:e.name},null==e?void 0:e.name)})))),ne.a.createElement("div",{className:"col-sm-6 col-md-3"},ne.a.createElement("div",{className:"form-group "},ne.a.createElement("label",{className:"date-label"},"Select Status"),ne.a.createElement(le.a,{showSearch:!0,className:"form-control floating",placeholder:"Select Status",allowClear:"true",value:(null==c?void 0:c.searchStatus)||void 0,onChange:function(t){o(function(e){return se(se({},e),{},{searchStatus:t})}),s(!0)}},Object.keys(ce.b).map(function(e){return ne.a.createElement(le.a.Option,{key:e,value:e,className:"ant-select-custom-dropdown-option",label:ce.b[e]},ce.b[e])})))),ne.a.createElement("div",{className:"col-sm-6 col-md-3"},ne.a.createElement("div",{className:"form-group"},ne.a.createElement("label",{className:"date-label"},"Select Company"),ne.a.createElement(le.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select Company",value:(null==c?void 0:c.searchCompany)||void 0,onChange:function(t){t?null!=C&&C.map(function(e){(null==e?void 0:e.id)==t&&_(null==e?void 0:e.mapping_company_department)}):_([]),o(function(e){return se(se({},e),{},{searchCompany:t,searchDepartment:""})}),s(!0)},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().startsWith(e.toLowerCase())}},C.map(function(e){return ne.a.createElement(le.a.Option,{key:null==e?void 0:e.id,value:null==e?void 0:e.id,className:"ant-select-custom-dropdown-option",label:null==e?void 0:e.short_name},null==e?void 0:e.short_name)})))),ne.a.createElement("div",{className:"col-sm-6 col-md-3"},ne.a.createElement("div",{className:"form-group"},ne.a.createElement("label",{className:"date-label"},"Select Department"),ne.a.createElement(le.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select Department",value:(null==c?void 0:c.searchDepartment)||void 0,onChange:function(t){o(function(e){return se(se({},e),{},{searchDepartment:t})}),s(!0)},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().startsWith(e.toLowerCase())},disabled:!(null!=D&&D.length)},D.map(function(e){var t,a,n,l;return ne.a.createElement(le.a.Option,{key:null==e||null===(t=e.mapping_department)||void 0===t?void 0:t.id,value:null==e||null===(a=e.mapping_department)||void 0===a?void 0:a.id,className:"ant-select-custom-dropdown-option",label:null==e||null===(n=e.mapping_department)||void 0===n?void 0:n.value},null==e||null===(l=e.mapping_department)||void 0===l?void 0:l.value)})))),ne.a.createElement("div",{className:"col-sm-6 col-md-3"},ne.a.createElement("div",{className:"form-group"},ne.a.createElement("label",{className:"date-label"},"Select Facility Type"),ne.a.createElement(le.a,{allowClear:!0,showSearch:!0,className:"form-control floating",placeholder:"Select Facility Type",value:(null==c?void 0:c.searchType)||void 0,onChange:function(t){o(function(e){return se(se({},e),{},{searchType:t})}),s(!0)},optionFilterProp:"children",filterOption:function(e,t){return(null!==(t=null==t?void 0:t.label)&&void 0!==t?t:"").toLowerCase().startsWith(e.toLowerCase())},disabled:!(null!=e&&e.length)},null==e?void 0:e.map(function(e,t){return ne.a.createElement(le.a.Option,{key:t,value:null==e?void 0:e.id,className:"ant-select-custom-dropdown-option",label:null==e?void 0:e.value},null==e?void 0:e.value)})))),ne.a.createElement("div",{className:"col-sm-6 col-md-2"},ne.a.createElement("div",{className:"form-group"},ne.a.createElement("label",{className:"date-label"},"Date"),ne.a.createElement(ve.a,{size:"large",className:"form-control form-date px-3 py-3",placeholder:"Date",format:"YYYY-MM-DD",onKeyDown:function(e){return e.preventDefault()},value:De()(null==c?void 0:c.date),disabledDate:function(e){return e&&e.valueOf()>De()(b)},allowClear:!1,onChange:function(e,t){o(function(e){return se(se({},e),{},{date:t})}),s(!0)}}))),ne.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-2 col-xl-1"},ne.a.createElement("label",{className:"date-label"}," "),ne.a.createElement("div",{className:"form-group form-focus"},ne.a.createElement("a",{className:"btn btn-danger btn-block w-100 px-1 py-2",style:{minHeight:"0px"},onClick:function(){n.current=!0,Y([]),F([]),o(function(e){return se(se({},e),{},{searchFacility:"",searchState:"",searchCity:"",searchCompany:"",searchDepartment:"",searchType:"",searchStatus:"",pageNumber:1,date:b})})}},"Reset")))),ne.a.createElement("div",{className:"row"},ne.a.createElement("div",{className:"col-md-12"},ne.a.createElement("div",{className:"table-responsive"},h?ne.a.createElement(ye.a,null):ne.a.createElement(be.a,{className:"table-striped",pagination:{total:null==a?void 0:a.totalCount,current:null==c?void 0:c.pageNumber,pageSize:null==c?void 0:c.numberOfItems,onChange:function(t,a){n.current=!0,o(function(e){return se(se({},e),{},{pageNumber:(null==c?void 0:c.numberOfItems)!=a?1:t,numberOfItems:a})})},showTotal:function(e,t){return"Showing ".concat(t[0]," to ").concat(t[1]," of ").concat(e," Facilities")},showSizeChanger:!0,itemRender:he.a,loading:h},style:{overflowX:"auto"},columns:i,title:function(){return ne.a.createElement("div",{className:"row"},ne.a.createElement("div",{className:"col align-self-center py-2 py-sm-0"},ne.a.createElement("h4",{className:"mb-0"},"Unsynced Biometric Devices")),ne.a.createElement("div",{className:"col align-self-center py-2 py-sm-0"},ne.a.createElement("div",{className:"text-end"},ne.a.createElement("button",{className:"btn btn-warning btn-sm text-light px-2 py-1",onClick:W,disabled:!V},G?ne.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):ne.a.createElement(ne.a.Fragment,null,ne.a.createElement("i",{className:"fa-solid fa-cloud-arrow-down"})," Download")))))},dataSource:null==a?void 0:a.result,rowKey:function(e){return e.id}}))))),ne.a.createElement(we.a,{facilityData:d,modalId:"view_facility",requestedFrom:"facilities",closeModal:function(){return R(ee,"hide")}}))}}.call(this,a(233))}}]);