(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1127:function(t,a,e){"use strict";e.r(a);var l=e(31),n=e.n(l),l=e(4),$=e.n(l),l=e(129),ie=e.n(l),l=e(46),ee=e.n(l),le=e(0),te=e.n(le),de=e(595),ae=(e(356),e(158)),ue=e(777),se=e(783),ne=e(786),ce=e(789),me=e(779),pe=e(142),ve=e(243),oe=e(156),fe=e(201),he=e(764),_e=e(781),l=e(598),ye=e.n(l),l=e(8),ge=e.n(l),Ee=e(65),be=e(143),Ne=e(778),we=e(247),Se=e(785);function o(l,e){var t,a=Object.keys(l);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(l),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})),a.push.apply(a,t)),a}function re(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){$()(l,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))})}return l}function Oe(e){e=function(e,l){if("object"!==n()(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0===t)return("string"===l?String:Number)(e);t=t.call(e,l||"default");if("object"!==n()(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"===n()(e)?e:String(e)}a.default=function(){function r(){W(Object(ne.Ib)(a)),i()}function i(){U(Object(ne.K)())}function d(){var e,l=!0;for(e in N){var t=N[e];null!=t&&t.updateRoster||null!=t&&t.updateWorkShift?(null!=t&&t.updateRoster&&(null!=t&&t.rosterPattern||null!=t&&t.rosterPatternValue||(l=!1),"0000000"==(null==t?void 0:t.rosterPatternValue)&&(l=!1),S(null==t?void 0:t.rosterPatternValue)||(l=!1),null!=t&&t.rosterFrom||(l=!1)),null!=t&&t.updateWorkShift&&(null!=t&&t.shiftPattern||(l=!1),null!=t&&t.shiftFrom||(l=!1))):l=!1}l?L(Object(ne.o)(N)):m(!0)}function S(e){return!(e.match(/1/g)&&5<e.match(/1/g).length)}var u=Object(le.useState)({searchField:"",searchCompany:"",searchDepartment:"",searchDesignation:"",searchState:"",searchCity:"",pageNumber:1,numberOfItems:10}),u=ee()(u,2),a=u[0],e=u[1],s=Object(Ee.c)(we.K),u=Object(Ee.c)(we.I),c=Object(Ee.c)(we.w),l=Object(Ee.c)(be.k),O=new ge.a(null==l?void 0:l.from_date).startOf("day"),n=Object(le.useRef)(!0),l=Object(le.useState)(!1),l=ee()(l,2),E=l[0],m=l[1],l=Object(le.useState)([]),l=ee()(l,2),p=l[0],v=l[1],l=Object(le.useState)([]),l=ee()(l,2),f=l[0],h=l[1],l=Object(le.useState)([]),l=ee()(l,2),_=l[0],y=l[1],l=Object(le.useState)([]),l=ee()(l,2),g=l[0],k=l[1],l=Object(le.useState)([]),l=ee()(l,2),x=l[0],j=l[1],l=Object(le.useState)({showMessage:!1,isError:!0,message:""}),l=ee()(l,2),C=l[0],P=l[1],l=Object(le.useState)([]),l=ee()(l,2),F=(l[0],l[1]),l=Object(le.useState)([]),l=ee()(l,2),D=l[0],R=l[1],l=Object(ae.a)(),l=ee()(l,4),V=l[0],t=l[1],q=l[2],W=l[3],l=Object(ae.a)(),l=ee()(l,4),T=l[0],o=l[1],I=l[2],L=l[3],l=Object(ae.a)(),l=ee()(l,4),z=l[0],A=l[3],l=Object(ae.a)(),l=ee()(l,4),M=l[0],B=l[3],l=Object(ae.a)(),l=ee()(l,4),K=l[0],J=l[2],H=l[3],l=Object(ae.a)(),l=ee()(l,4),b=l[0],U=l[3],G=Object(le.useRef)(z),Q=(Object(le.useEffect)(function(){G.current!=z&&(F((null==z?void 0:z.roster_patterns)||[]),R((null==z?void 0:z.work_shifts)||[])),G.current=z},[z]),Object(le.useRef)(T)),X=Object(le.useRef)(o),Y=Object(le.useRef)(t),l=(Object(le.useEffect)(function(){var e,l;Q.current!=T&&(P({showMessage:!0,isError:!1,message:null==T?void 0:T.message}),r(),w({}),m(!1)),X.current!=o&&P({showMessage:!0,isError:!0,message:(null==o||null===(e=o.response)||void 0===e?void 0:e.data)||(null==o?void 0:o.message)}),Y.current!=t&&P({showMessage:!0,isError:!0,message:(null==t||null===(l=t.response)||void 0===l?void 0:l.data)||(null==t?void 0:t.message)}),Q.current=T,X.current=o,Y.current=t},[T,o,t]),Object(le.useEffect)(function(){A(Object(ne.Eb)()),Z()},[]),Object(le.useEffect)(function(){n.current&&(n.current=!1,r(),w({}))},[a]),Object(le.useState)({})),l=ee()(l,2),N=l[0],w=l[1],l=[{title:"Employee",dataIndex:"employee_id",render:function(e,l){var t;return te.a.createElement("div",{className:"row"},te.a.createElement("div",{className:"col-2 px-0 p-1 text-center"},te.a.createElement(pe.a,{checked:ye.a.has(N,null==l?void 0:l.employee_id),onChange:function(e){var t=null==l?void 0:l.employee_id;e.target.checked?w(function(e){return re(re({},e),{},$()({},t,re(re({},e[t]),{},{updateRoster:!1,rosterPattern:"",rosterPatternValue:"",rosterFromDate:"",rosterFrom:"",updateWorkShift:!1,shiftPattern:"",shiftFromDate:"",shfitFrom:""})))}):w(function(e){var l=t;return e[l],ie()(e,[l].map(Oe))})},disabled:(null==l?void 0:l.pending_roster_request)&&(null==l?void 0:l.pending_work_shift)})),te.a.createElement("div",{className:"col-10 p-1"},te.a.createElement("div",{className:"form-group ".concat(!E||!N[null==l?void 0:l.employee_id]||null!==(t=N[null==l?void 0:l.employee_id])&&void 0!==t&&t.updateRoster||null!==(t=N[null==l?void 0:l.employee_id])&&void 0!==t&&t.updateWorkShift?"":"error-group")},te.a.createElement("h2",{className:"text-ellipsis",title:null==l?void 0:l.full_name},null==l?void 0:l.full_name,te.a.createElement("span",null," ",null==l?void 0:l.user_id)),!E||!N[null==l?void 0:l.employee_id]||null!==(t=N[null==l?void 0:l.employee_id])&&void 0!==t&&t.updateRoster||null!==(t=N[null==l?void 0:l.employee_id])&&void 0!==t&&t.updateWorkShift?null:te.a.createElement("small",{style:{width:"100%",color:"red",display:"block",marginTop:"0.25rem",fontSize:"unset",whiteSpace:"pre-wrap"}},"Select Shift Off / Shift Timing"))))},width:"175px"},{title:"Current Shift Off & Shift Timing",dataIndex:"employee_id",render:function(s,e){var l,t,a,n,o,r,i,d,u,c,m,p;return te.a.createElement("div",{className:"row mx-0"},te.a.createElement("div",{className:"col-12 p-1 px-0"},te.a.createElement("div",{className:"row mx-0",style:{height:"65px"}},te.a.createElement("div",{className:"col-2 px-0 p-1 align-self-center text-center"},te.a.createElement(pe.a,{checked:N[null==e?void 0:e.employee_id]&&(null===(d=N[null==e?void 0:e.employee_id])||void 0===d?void 0:d.updateRoster),onChange:function(l){var t=null==e?void 0:e.employee_id;w(function(e){return re(re({},e),{},$()({},t,re(re({},e[t]),{},{updateRoster:l.target.checked,rosterPattern:"",rosterPatternValue:"",rosterFrom:"",rosterFromDate:""})))})},disabled:!ye.a.has(N,null==e?void 0:e.employee_id)||(null==e?void 0:e.pending_roster_request)})),te.a.createElement("div",{className:"col-10 p-1 align-self-center"},null!=e&&e.active_roster_request?te.a.createElement(te.a.Fragment,null,null!=e&&null!==(l=e.active_roster_request)&&void 0!==l&&l.roster_pattern_value?te.a.createElement("div",{className:"row",style:{minWidth:"200px",whiteSpace:"pre-wrap"}},null==e||null===(t=e.active_roster_request)||void 0===t||null===(a=t.roster_pattern_value)||void 0===a?void 0:a.split("").map(function(e,l){return te.a.createElement("div",{className:"col-1 text-center",style:{width:"13.5%"},key:l},ce.i[l],te.a.createElement("br",null),"1"==e?te.a.createElement("i",{className:"fa-solid fa-close text-danger fa-xs"}):te.a.createElement("i",{className:"fa-solid fa-check text-success fa-xs"}))})):te.a.createElement("h2",null,null==e||null===(n=e.active_roster_request)||void 0===n||null===(o=n.roster_pattern)||void 0===o?void 0:o.roster_name,te.a.createElement("span",null,null==e||null===(r=e.active_roster_request)||void 0===r||null===(i=r.roster_pattern)||void 0===i?void 0:i.display_name))):"N/A"))),te.a.createElement("div",{className:"col-12 px-0 p-1 mt-2"},te.a.createElement("div",{className:"row mx-0",style:{height:"65px"}},te.a.createElement("div",{className:"col-2 px-0 p-1 align-self-center text-center"},te.a.createElement(pe.a,{checked:N[null==e?void 0:e.employee_id]&&(null===(d=N[null==e?void 0:e.employee_id])||void 0===d?void 0:d.updateWorkShift),onChange:function(l){var t=null==e?void 0:e.employee_id;w(function(e){return re(re({},e),{},$()({},t,re(re({},e[t]),{},{updateWorkShift:l.target.checked,shiftPattern:"",shiftFrom:"",shiftFromDate:""})))})},disabled:!ye.a.has(N,null==e?void 0:e.employee_id)||(null==e?void 0:e.pending_work_shift)})),te.a.createElement("div",{className:"col-10 p-1 align-self-center"},null!=e&&e.active_work_shift?te.a.createElement("h2",null,null==e||null===(u=e.active_work_shift)||void 0===u||null===(c=u.work_shift)||void 0===c?void 0:c.shift_pattern,te.a.createElement("span",null,null==e||null===(m=e.active_work_shift)||void 0===m||null===(p=m.work_shift)||void 0===p?void 0:p.shift_display_name)):"N/A"))))},width:"225px"},{title:"Update Shift Off & Shift Timing",dataIndex:"employee_id",render:function(s,o){var e,c,l,t,a,m,p,v,f,n,h,r,_,i,d,u,y,g;return te.a.createElement("div",{className:"row mx-0"},te.a.createElement("div",{className:"col-12 p-1"},te.a.createElement("div",{className:"row mx-0",style:{height:"65px"}},te.a.createElement("div",{className:"col-4 p-1 employee-roster-container"},te.a.createElement("div",{className:"form-group ".concat(!(E&&N[null==o?void 0:o.employee_id]&&null!==(u=N[null==o?void 0:o.employee_id])&&void 0!==u&&u.updateRoster)||null!==(u=N[null==o?void 0:o.employee_id])&&void 0!==u&&u.rosterPatternValue&&"0000000"!=(null===(u=N[null==o?void 0:o.employee_id])||void 0===u?void 0:u.rosterPatternValue)&&S(null===(u=N[null==o?void 0:o.employee_id])||void 0===u?void 0:u.rosterPatternValue)?"":"error-group")},te.a.createElement("div",{className:"row mx-0 ".concat(!(E&&N[null==o?void 0:o.employee_id]&&null!==(i=N[null==o?void 0:o.employee_id])&&void 0!==i&&i.updateRoster)||null!==(u=N[null==o?void 0:o.employee_id])&&void 0!==u&&u.rosterPatternValue&&"0000000"!=(null===(i=N[null==o?void 0:o.employee_id])||void 0===i?void 0:i.rosterPatternValue)&&S(null===(u=N[null==o?void 0:o.employee_id])||void 0===u?void 0:u.rosterPatternValue)?"":"roster-pattern-error")},ce.i.map(function(e,n){var l;return te.a.createElement("div",{className:"col-1 text-center align-self-center",style:{width:"13.5%"},key:n},te.a.createElement("span",{className:(!N[null==o?void 0:o.employee_id]||!(null!==(l=N[null==o?void 0:o.employee_id])&&void 0!==l&&l.updateRoster))&&"text-muted"},e),te.a.createElement("br",null),te.a.createElement(pe.a,{checked:N[null==o?void 0:o.employee_id]&&!(null!==(l=N[null==o?void 0:o.employee_id])&&void 0!==l&&l.updateRoster)&&(null===(e=N[null==o?void 0:o.employee_id])||void 0===e?void 0:e.rosterPatternValue)||N[null==o?void 0:o.employee_id]&&(null===(l=N[null==o?void 0:o.employee_id])||void 0===l?void 0:l.rosterPatternValue)&&"1"==(null===(e=N[null==o?void 0:o.employee_id])||void 0===e?void 0:e.rosterPatternValue[n]),indeterminate:N[null==o?void 0:o.employee_id]&&(null===(l=N[null==o?void 0:o.employee_id])||void 0===l?void 0:l.rosterPatternValue)&&"1"==(null===(e=N[null==o?void 0:o.employee_id])||void 0===e?void 0:e.rosterPatternValue[n]),onChange:function(e){var l,t=null==o?void 0:o.employee_id,a=(a=null===(l=N[t])||void 0===l?void 0:l.rosterPatternValue)||"0000000";a=e.target.checked?a.substring(0,n)+"1"+a.substring(n+1):a.substring(0,n)+"0"+a.substring(n+1),w(function(e){return re(re({},e),{},$()({},t,re(re({},e[t]),{},{rosterPattern:"",rosterPatternValue:a})))})},disabled:!N[null==o?void 0:o.employee_id]||!(null!==(l=N[null==o?void 0:o.employee_id])&&void 0!==l&&l.updateRoster)}))})),E&&N[null==o?void 0:o.employee_id]&&null!==(t=N[null==o?void 0:o.employee_id])&&void 0!==t&&t.updateRoster?te.a.createElement(te.a.Fragment,null,null!==(i=N[null==o?void 0:o.employee_id])&&void 0!==i&&i.rosterPatternValue&&"0000000"!=(null===(u=N[null==o?void 0:o.employee_id])||void 0===u?void 0:u.rosterPatternValue)?te.a.createElement(te.a.Fragment,null,S(null===(t=N[null==o?void 0:o.employee_id])||void 0===t?void 0:t.rosterPatternValue)?null:te.a.createElement("small",{style:{width:"100%",color:"red",display:"block",marginTop:"0.25rem",fontSize:"unset"}},"A maximum of 5 Shift Offs are allowed")):te.a.createElement("small",{style:{width:"100%",color:"red",display:"block",marginTop:"0.25rem",fontSize:"unset"}},"Roster Pattern is required")):null)),te.a.createElement("div",{className:"col-4 p-1"},N[null==o?void 0:o.employee_id]&&null!==(n=N[null==o?void 0:o.employee_id])&&void 0!==n&&n.updateRoster&&null!==(r=N[null==o?void 0:o.employee_id])&&void 0!==r&&r.rosterPatternValue&&"0000000"!=(null===(i=N[null==o?void 0:o.employee_id])||void 0===i?void 0:i.rosterPatternValue)?te.a.createElement("small",{className:"text-wrap text-danger"},"* All"," ",null===(u=N[null==o?void 0:o.employee_id])||void 0===u||null===(e=u.rosterPatternValue)||void 0===e?void 0:e.split("").map(function(e,l){return"1"==e?ce.h[l]+"s":null}).filter(function(e){return null!=e}).join(", ")," ","off"):null),te.a.createElement("div",{className:"col-4 p-1"},te.a.createElement("div",{className:"form-group ".concat(E&&N[null==o?void 0:o.employee_id]&&null!==(l=N[null==o?void 0:o.employee_id])&&void 0!==l&&l.updateRoster&&(null===(t=N[null==o?void 0:o.employee_id])||void 0===t||!t.rosterFrom)?"error-group":"")},te.a.createElement(ve.a,{size:"large",placeholder:"Shift Off From Date",className:"form-control w-100 ".concat(E&&N[null==o?void 0:o.employee_id]&&null!==(a=N[null==o?void 0:o.employee_id])&&void 0!==a&&a.updateRoster&&(null===(n=N[null==o?void 0:o.employee_id])||void 0===n||!n.rosterFrom)?"error-input":""),disabledDate:function(e){return!e||e.isBefore(O)||(null==b?void 0:b.applyLock)&&(null==b?void 0:b.lockCycleEndDate)&&e.isSameOrBefore(new ge.a(null==b?void 0:b.lockCycleEndDate).endOf("day"))},onKeyDown:function(e){return e.preventDefault()},value:N[null==o?void 0:o.employee_id]&&(null===(r=N[null==o?void 0:o.employee_id])||void 0===r?void 0:r.rosterFromDate),onChange:function(l,t){var a=null==o?void 0:o.employee_id;w(function(e){return re(re({},e),{},$()({},a,re(re({},e[a]),{},{rosterFromDate:l,rosterFrom:t})))})},disabled:!N[null==o?void 0:o.employee_id]||!(null!==(i=N[null==o?void 0:o.employee_id])&&void 0!==i&&i.updateRoster)}),E&&N[null==o?void 0:o.employee_id]&&null!==(d=N[null==o?void 0:o.employee_id])&&void 0!==d&&d.updateRoster&&(null===(u=N[null==o?void 0:o.employee_id])||void 0===u||!u.rosterFrom)?te.a.createElement("small",{style:{width:"100%",color:"red",display:"block",marginTop:"0.25rem",fontSize:"unset"}},"From Date required"):null)))),te.a.createElement("div",{className:"col-12 p-1 mt-2"},te.a.createElement("div",{className:"row mx-0",style:{height:"65px"}},te.a.createElement("div",{className:"col-8 p-1"},te.a.createElement("div",{className:"form-group ".concat(E&&N[null==o?void 0:o.employee_id]&&null!==(g=N[null==o?void 0:o.employee_id])&&void 0!==g&&g.updateWorkShift&&(null===(e=N[null==o?void 0:o.employee_id])||void 0===e||!e.shiftPattern)?"error-group":"")},te.a.createElement(oe.a,{showSearch:!0,className:"form-control form-select py-2 ".concat(E&&N[null==o?void 0:o.employee_id]&&null!==(c=N[null==o?void 0:o.employee_id])&&void 0!==c&&c.updateWorkShift&&(null===(l=N[null==o?void 0:o.employee_id])||void 0===l||!l.shiftPattern)?"error-input":""),placeholder:"Select Shift Timing",value:N[null==o?void 0:o.employee_id]&&(null===(t=N[null==o?void 0:o.employee_id])||void 0===t?void 0:t.shiftPattern),optionFilterProp:"children",onChange:function(l){var t=null==o?void 0:o.employee_id;w(function(e){return re(re({},e),{},$()({},t,re(re({},e[t]),{},{shiftPattern:l})))})},disabled:!N[null==o?void 0:o.employee_id]||!(null!==(a=N[null==o?void 0:o.employee_id])&&void 0!==a&&a.updateWorkShift)},te.a.createElement(oe.a.Option,{defaultValue:!0,value:"",disabled:!0,hidden:!0},"Select Shift Timing"),D[null==o||null===(m=o.job_details[0].sub_company)||void 0===m?void 0:m.short_name]&&D[null==o||null===(p=o.job_details[0].sub_company)||void 0===p?void 0:p.short_name][null==o||null===(v=o.job_details[0].department)||void 0===v?void 0:v.value].map(function(e){return te.a.createElement(oe.a.Option,{key:null==e?void 0:e.mapping_shiftOff__id,value:null==e?void 0:e.mapping_shiftOff__id,className:"ant-select-custom-dropdown-option"},null==e?void 0:e.mapping_shiftOff__shift_pattern," -"," ",null==e?void 0:e.mapping_shiftOff__shift_display_name)})),E&&N[null==o?void 0:o.employee_id]&&null!==(f=N[null==o?void 0:o.employee_id])&&void 0!==f&&f.updateWorkShift&&(null===(n=N[null==o?void 0:o.employee_id])||void 0===n||!n.shiftPattern)?te.a.createElement("small",{style:{width:"100%",color:"red",display:"block",marginTop:"0.25rem",fontSize:"unset"}},"Shift Pattern is required"):null)),te.a.createElement("div",{className:"col-4 p-1"},te.a.createElement("div",{className:"form-group ".concat(E&&N[null==o?void 0:o.employee_id]&&null!==(h=N[null==o?void 0:o.employee_id])&&void 0!==h&&h.updateWorkShift&&(null===(r=N[null==o?void 0:o.employee_id])||void 0===r||!r.shiftFrom)?"error-group":"")},te.a.createElement(ve.a,{size:"large",placeholder:"Shift Timing From Date",className:"form-control w-100 ".concat(E&&N[null==o?void 0:o.employee_id]&&null!==(_=N[null==o?void 0:o.employee_id])&&void 0!==_&&_.updateWorkShift&&(null===(i=N[null==o?void 0:o.employee_id])||void 0===i||!i.shiftFrom)?"error-input":""),disabledDate:function(e){return!e||e.isBefore(O)||(null==b?void 0:b.applyLock)&&(null==b?void 0:b.lockCycleEndDate)&&e.isSameOrBefore(new ge.a(null==b?void 0:b.lockCycleEndDate).endOf("day"))},onKeyDown:function(e){return e.preventDefault()},value:N[null==o?void 0:o.employee_id]&&(null===(d=N[null==o?void 0:o.employee_id])||void 0===d?void 0:d.shiftFromDate),onChange:function(l,t){var a=null==o?void 0:o.employee_id;w(function(e){return re(re({},e),{},$()({},a,re(re({},e[a]),{},{shiftFromDate:l,shiftFrom:t})))})},disabled:!N[null==o?void 0:o.employee_id]||!(null!==(u=N[null==o?void 0:o.employee_id])&&void 0!==u&&u.updateWorkShift)}),E&&N[null==o?void 0:o.employee_id]&&null!==(y=N[null==o?void 0:o.employee_id])&&void 0!==y&&y.updateWorkShift&&(null===(g=N[null==o?void 0:o.employee_id])||void 0===g||!g.shiftFrom)?te.a.createElement("small",{style:{width:"100%",color:"red",display:"block",marginTop:"0.25rem",fontSize:"unset"}},"From Date required"):null)))))}},{title:"Pending SO & ST requests",dataIndex:"employee_id",render:function(s,e){var l,t,a,n,o,r,i,d,u,c,m;return te.a.createElement("div",{className:"row mx-0"},te.a.createElement("div",{className:"col-12 p-1"},te.a.createElement("div",{className:"row mx-0",style:{height:"65px"}},te.a.createElement("div",{className:"col-12 px-0 p-1 align-self-center"},null!=e&&e.pending_roster_request?te.a.createElement(te.a.Fragment,null,null!=e&&null!==(l=e.pending_roster_request)&&void 0!==l&&l.roster_pattern_value?te.a.createElement("div",{className:"row",style:{minWidth:"200px",whiteSpace:"pre-wrap"}},null==e||null===(t=e.pending_roster_request)||void 0===t||null===(a=t.roster_pattern_value)||void 0===a?void 0:a.split("").map(function(e,l){return te.a.createElement("div",{className:"col-1 text-center",style:{width:"13.5%"},key:l},ce.i[l],te.a.createElement("br",null),"1"==e?te.a.createElement("i",{className:"fa-solid fa-close text-danger fa-xs"}):te.a.createElement("i",{className:"fa-solid fa-check text-success fa-xs"}))})):te.a.createElement("h2",null,null==e||null===(n=e.pending_roster_request)||void 0===n||null===(o=n.roster_pattern)||void 0===o?void 0:o.roster_name,te.a.createElement("span",null,null==e||null===(r=e.pending_roster_request)||void 0===r||null===(i=r.roster_pattern)||void 0===i?void 0:i.display_name))):"N/A"))),te.a.createElement("div",{className:"col-12 p-1 mt-2"},te.a.createElement("div",{className:"row mx-0",style:{height:"65px"}},te.a.createElement("div",{className:"col-12 p-1 align-self-center"},null!=e&&e.pending_work_shift?te.a.createElement("h2",null,null==e||null===(d=e.pending_work_shift)||void 0===d||null===(u=d.work_shift)||void 0===u?void 0:u.shift_pattern,te.a.createElement("span",null,null==e||null===(c=e.pending_work_shift)||void 0===c||null===(m=c.work_shift)||void 0===m?void 0:m.shift_display_name)):"N/A"))))},width:"200px"}],Z=(Object(le.useEffect)(function(){null!=M&&M.result&&h(M.result||[])},[M]),Object(le.useEffect)(function(){var e;a.searchCompany?null==M||null!==(e=M.result)&&void 0!==e&&e.map(function(e){(null==e?void 0:e.id)===parseInt(a.searchCompany)&&y(null==e?void 0:e.mapping_company_department)}):y([])},[a.searchCompany]),Object(le.useEffect)(function(){null!=K&&K.data&&v(K.data)},[K]),function(){B(Object(Se.g)())});return te.a.createElement("div",{className:"page-wrapper"},te.a.createElement(de.a,null,te.a.createElement("title",null,"Add Employee Rosters"),te.a.createElement("meta",{name:"Add Employee Rosters",content:"Add Employee Rosters"})),te.a.createElement("div",{className:"content container-fluid"},null!=b&&b.applyLock?te.a.createElement("div",{className:"alert alert-dismissible fade show alert-danger",role:"alert"},null==b?void 0:b.message):null,C.showMessage?te.a.createElement(ue.a,{message:C.message,dismiss:function(){P(function(e){return re(re({},e),{},{showMessage:!1})})},isError:C.isError}):null,te.a.createElement("div",{className:"page-header"},te.a.createElement("div",{className:"row align-items-center"},te.a.createElement("div",{className:"col"},te.a.createElement(se.a,null)))),te.a.createElement("div",{className:"row filter-row"},te.a.createElement("div",{className:"col-sm-12 col-md-3"},te.a.createElement("div",{className:"form-group"},te.a.createElement("label",{className:"date-label"},"Search Employee"),te.a.createElement(oe.a,{className:"form-control floating ",id:"sync-fields",showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,style:{height:"50px !important"},onSearch:function(e){3<=e.length&&(e=e,v([]),H(Object(Ne.I)({searchText:e,from:"Subordinates"})))},placeholder:"Search With name or Id",type:"text",name:"employee",notFoundContent:J?te.a.createElement(fe.a,{size:"small"}):K.data&&0===p.length?te.a.createElement("div",{className:"text-danger p-1 text-center"},"No data found"):null,value:a.searchField?{key:a.searchField}:void 0,onChange:function(l){n.current=!0,e(function(e){return re(re({},e),{},{searchField:null==l?void 0:l.value})})}},p.map(function(e,l){return te.a.createElement(oe.a.Option,{key:l,value:null==e?void 0:e.employee_id},(null==e?void 0:e.full_name)+"("+(null==e?void 0:e.user_id)+")")})))),te.a.createElement("div",{className:"col-sm-6 col-md-3"},te.a.createElement("div",{className:"form-group"},te.a.createElement("label",{className:"date-label"},"Select Company"),te.a.createElement(oe.a,{className:"form-control floating",placeholder:"Select Company",allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(e,l){return(null!==(l=null==l?void 0:l.label)&&void 0!==l?l:"").toLowerCase().includes(e.toLowerCase())},value:a.searchCompany||void 0,onChange:function(l){n.current=!0,e(function(e){return re(re({},e),{},{searchCompany:l,searchDepartment:"",searchDesignation:"",pageNumber:1})})}},null==f?void 0:f.map(function(e){return te.a.createElement(oe.a.Option,{key:e.id,value:e.id,label:e.short_name},e.short_name)})))),te.a.createElement("div",{className:"col-sm-6 col-md-3 "},te.a.createElement("div",{className:"form-group"},te.a.createElement("label",{className:"date-label"},"Select Department"),te.a.createElement(oe.a,{className:"form-control floating",placeholder:"Select Department",allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(e,l){return(null!==(l=null==l?void 0:l.label)&&void 0!==l?l:"").toLowerCase().includes(e.toLowerCase())},disabled:!a.searchCompany,value:a.searchDepartment||void 0,onChange:function(t){n.current=!0,e(function(e){return re(re({},e),{},{searchDepartment:t,pageNumber:1})}),t?null!=_&&_.map(function(e){var l;(null==e||null===(l=e.mapping_department)||void 0===l?void 0:l.id)==t&&k(null==e?void 0:e.mapping_department_designation)}):k([])}},null==_?void 0:_.map(function(e,l){return te.a.createElement(oe.a.Option,{key:l,value:e.mapping_department.id,label:e.mapping_department.value},e.mapping_department.value)})))),te.a.createElement("div",{className:"col-sm-6 col-md-3"},te.a.createElement("div",{className:"form-group"},te.a.createElement("label",{className:"date-label"},"Select Designation"),te.a.createElement(oe.a,{className:" form-control floating",placeholder:"Select Designation",disabled:!a.searchDepartment,allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(e,l){return(null!==(l=null==l?void 0:l.label)&&void 0!==l?l:"").toLowerCase().includes(e.toLowerCase())},value:a.searchDesignation||void 0,onChange:function(l){n.current=!0,e(function(e){return re(re({},e),{},{searchDesignation:l,pageNumber:1})})}},null==g?void 0:g.map(function(e,l){var t,a,n;return te.a.createElement(oe.a.Option,{key:l,value:null==e||null===(t=e.mapping_designation)||void 0===t?void 0:t.id,label:null==e||null===(a=e.mapping_designation)||void 0===a?void 0:a.value},null==e||null===(n=e.mapping_designation)||void 0===n?void 0:n.value)})))),te.a.createElement("div",{className:"col-sm-6 col-md-3"},te.a.createElement("label",{className:"date-label"},"Select State"),te.a.createElement("div",{className:"form-group"},te.a.createElement(oe.a,{className:"form-control floating",placeholder:"Select State",allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(e,l){return(null!==(l=null==l?void 0:l.label)&&void 0!==l?l:"").toLowerCase().includes(e.toLowerCase())},value:a.searchState||void 0,onChange:function(l){n.current=!0,j(""===l?[]:c[s[l]]),e(function(e){return re(re({},e),{},{searchState:l,pageNumber:1,searchCity:""})})}},null==u?void 0:u.map(function(e){return te.a.createElement(oe.a.Option,{key:null==e?void 0:e.id,value:null==e?void 0:e.id,label:null==e?void 0:e.name},null==e?void 0:e.name)})))),te.a.createElement("div",{className:"col-sm-6 col-md-3"},te.a.createElement("div",{className:"form-group"},te.a.createElement("label",{className:"date-label"},"Select City"),te.a.createElement(oe.a,{className:"form-control floating",placeholder:"Select City",allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(e,l){return(null!==(l=null==l?void 0:l.label)&&void 0!==l?l:"").toLowerCase().includes(e.toLowerCase())},value:a.searchCity||void 0,disabled:!a.searchState,onChange:function(l){n.current=!0,e(function(e){return re(re({},e),{},{searchCity:l,pageNumber:1})})}},null==x?void 0:x.map(function(e){return te.a.createElement(oe.a.Option,{key:null==e?void 0:e.id,value:null==e?void 0:e.id,label:null==e?void 0:e.name},null==e?void 0:e.name)})))),te.a.createElement("div",{className:"col-sm-3 col-md-2"},te.a.createElement("label",{className:"date-label"}," "),te.a.createElement("div",{className:"form-group form-focus"},te.a.createElement("a",{className:"btn btn-danger btn-block w-100 px-1 py-2",style:{minHeight:"0px"},onClick:function(){n.current=!0,e(function(e){return re(re({},e),{},{searchField:"",searchCompany:"",searchDepartment:"",searchDesignation:"",searchState:"",searchCity:"",pageNumber:1})}),v([])}},"Reset")))),te.a.createElement("div",{className:"row"},te.a.createElement("div",{className:"col-md-12"},te.a.createElement("div",{className:"table-responsive"},ye.a.isEmpty(N)?null:te.a.createElement("div",{style:{marginBottom:16}},te.a.createElement("button",{type:"button",className:"btn btn-success text-light btn-sm m-r-5",onClick:function(){d()},disabled:I},te.a.createElement("i",{className:"fa fa-pencil m-r-5"})," Submit"),te.a.createElement("button",{type:"button",className:"btn btn-danger text-light btn-sm",onClick:function(){w({}),m(!1)},disabled:I},te.a.createElement("i",{className:"fa fa-trash m-r-5"})," Reset")),q?te.a.createElement(me.a,null):te.a.createElement(he.a,{className:"table-striped",pagination:{total:null==V?void 0:V.total_count,current:a.pageNumber,pageSize:a.numberOfItems,onChange:function(l,t){n.current=!0,e(function(e){return re(re({},e),{},{pageNumber:a.numberOfItems!=t?1:l,numberOfItems:t})})},showTotal:function(e,l){return"Showing ".concat(l[0]," to ").concat(l[1]," of ").concat(e," Roster Requests")},showSizeChanger:!0,itemRender:_e.a,loading:q,pageSizeOptions:[10,20]},columns:l,dataSource:null==V?void 0:V.data,rowKey:function(e){return null==e?void 0:e.id}}))))))}},779:function(e,l,t){"use strict";var a=t(0),n=t.n(a);l.a=function(){return n.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"10rem"}},n.a.createElement("div",{className:"spinner-border text-primary",style:{height:"5rem",width:"5rem"},role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading...")))}}}]);