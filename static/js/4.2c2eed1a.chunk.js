(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{831:function(e,a,l){"use strict";!function(K){var e=l(4),t=l.n(e),e=l(46),z=l.n(e),J=l(0),W=l.n(J),ee=l(596),e=l(8),X=l.n(e),G=l(243),Q=l(156),ae=l(793),le=l(984),te=l(125),ne=l(777),Z=l(65),e=l(598),oe=l.n(e),$=(l(803),l(143));function n(a,e){var l,t=Object.keys(a);return Object.getOwnPropertySymbols&&(l=Object.getOwnPropertySymbols(a),e&&(l=l.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),t.push.apply(t,l)),t}function ie(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?n(Object(l),!0).forEach(function(e){t()(a,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))})}return a}a.a=function(e){var n=e.leaveId,o=e.closeModal,i=e.formResponse,c=e.submitData,y=e.leaveLoading,l=e.leaveerror,p=e.maternitySecond,L=e.maternityToDate,r=(e.dismissEror,e.leaveTypeData),E=e.leaveShiftType,s=e.setLeaveShiftType,m=e.attendancePage,a=e.attendanceData,v=e.setAttendanceData,d=e.lockResponse,t=Object(J.useRef)(),f=Object(J.useRef)(),e=Object(J.useState)(!0),e=z()(e,2),b=e[0],A=e[1],e=Object(J.useState)(!1),e=z()(e,2),M=e[0],g=e[1],e=Object(J.useState)(!1),e=z()(e,2),F=e[0],D=e[1],e=Object(J.useState)(0),e=z()(e,2),T=e[0],_=e[1],N=Object(Z.c)(te.g),O=Object(Z.c)($.a),u=Object(Z.c)($.e),e=(Object(J.useEffect)(function(){var e,a;null!=N&&N.employee_details&&(e=X()(null==N||null===(e=N.employee_details)||void 0===e?void 0:e.joining_date),a=X()(),Y(365<a.diff(e,"days")))},[N]),Object(J.useState)(!0)),e=z()(e,2),h=e[0],S=e[1],e=Object(J.useState)(!1),e=z()(e,2),V=e[0],Y=e[1],e=Object(J.useState)(!0),e=z()(e,2),j=e[0],R=e[1],e=Object(J.useState)({fromDate:"",toDate:"",initialDayLeaveMode:"FULL DAY",finalDayLeaveMode:"FULL DAY",leaveTypeValue:"",leaveType:"",purpose:"",document:""}),e=z()(e,2),C=e[0],w=e[1],e=Object(J.useState)({showMessage:!1,isError:!0,message:""}),e=z()(e,2),I=e[0],U=e[1],e=Object(J.useState)(""),e=z()(e,2),H=e[0],k=e[1],e=Object(J.useState)(""),e=z()(e,2),B=e[0],q=e[1],x="YYYY-MM-DD",P=Object(J.useRef)(l);Object(J.useEffect)(function(){var e,a;null!==(e=t.current)&&void 0!==e&&e.setSubmitting(!1),P.current!==l&&U({showMessage:!0,isError:!0,message:(null==l||null===(a=l.response)||void 0===a?void 0:a.data)||(null==l?void 0:l.message)||""})},[l]),Object(J.useEffect)(function(){var e,a=null==t||null===(a=t.current)||void 0===a?void 0:a.values;a.fromDate==a.toDate?null==t||null!==(e=t.current)&&void 0!==e&&e.setFieldValue("finalDayLeaveMode",""):(""==a.initialDayLeaveMode&&(null==t||null!==(e=t.current)&&void 0!==e&&e.setFieldValue("initialDayLeaveMode","FULL DAY")),""==a.finalDayLeaveMode&&(null==t||null!==(e=t.current)&&void 0!==e&&e.setFieldValue("finalDayLeaveMode","FULL DAY")))},[null==t?void 0:t.current]),Object(J.useEffect)(function(){var e;"Attendance"==m&&null!=(null==a?void 0:a.date)&&(q(X()(null==a?void 0:a.date)),k(X()(null==a?void 0:a.date)),null==t||null!==(e=t.current)&&void 0!==e&&e.setFieldValue("fromDate",null==a?void 0:a.date),null==t||null!==(e=t.current)&&void 0!==e&&e.setFieldValue("toDate",null==a?void 0:a.date),null==t||null!==(e=t.current)&&void 0!==e&&e.setFieldValue("initialDayLeaveMode","full_day"==E?"FULL DAY":"shift_one"==E?"FIRST HALF":"shift_two"==E?"SECOND HALF":null))},[a]);return Object(J.useEffect)(function(){var e;null!==(e=t.current)&&void 0!==e&&e.resetForm(),o()},[i]),K("#"+n).on("hide.bs.modal",function(e){E&&s(""),a&&v("")}),K("#"+n).on("show.bs.modal",function(e){var a;U({showMessage:!1,isError:!0,message:""}),null!==(a=t.current)&&void 0!==a&&a.resetForm(),w({fromDate:"",toDate:"",initialDayLeaveMode:"FULL DAY",finalDayLeaveMode:"FULL DAY",leaveTypeValue:"",leaveType:"",purpose:"",document:""}),q(""),k(""),f.current.value=null}),W.a.createElement("div",{id:n,className:"modal custom-modal fade",role:"dialog"},W.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document"},W.a.createElement("div",{className:"modal-content"},W.a.createElement("div",{className:"modal-header"},W.a.createElement("h5",{className:"modal-title"},"Apply Leave",W.a.createElement("span",null,void 0!==(null==a?void 0:a.date)?"("+new X.a(null==a?void 0:a.date).format("DD MMM YYYY")+")":"")),W.a.createElement("button",{type:"button",className:"close",onClick:function(){return o()},"aria-label":"Close"},W.a.createElement("span",{"aria-hidden":"true"},"X"))),W.a.createElement("div",{className:"modal-body"},I.showMessage?W.a.createElement(ne.a,{message:null==I?void 0:I.message,dismiss:function(){U(function(e){return ie(ie({},e),{},{showMessage:!1})})},isError:I.isError}):null,W.a.createElement(ee.c,{initialValues:C,validationSchema:le.a,innerRef:t,onSubmit:function(e){setTimeout(function(){c(Object(ae.a)(e))},400)}},function(e){var s=e.values,a=e.errors,l=e.touched,t=e.handleChange,n=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting,v=e.setFieldValue,e=e.isValid;return W.a.createElement("form",{onSubmit:o},W.a.createElement("div",{className:"row"},W.a.createElement("div",null,W.a.createElement("label",{className:"col-form-label"},"Leave Type",W.a.createElement("span",{className:"text-danger"},"*")),W.a.createElement("div",{className:"row"},r.map(function(c){var e,a,l,t,n,o,i,r,d;return(null==c?void 0:c.is_active)&&W.a.createElement("div",{className:"col-lg-4",key:null==c?void 0:c.id},W.a.createElement("div",{className:"card"},W.a.createElement("div",{className:"card-body",style:{padding:"7px 7px"}},W.a.createElement("div",{className:"form-check form-check-inline"},W.a.createElement("input",{className:"form-check-input",id:null==c||null===(e=c.leave_type)||void 0===e?void 0:e.id,type:"radio",name:"leaveType",value:null==c||null===(a=c.leave_type)||void 0===a?void 0:a.id,disabled:"Attendance"==m&&"full_day"!==E&&!(null!=c&&null!==(l=c.leave_type)&&void 0!==l&&l.allow_half_day)||"LEAVE WITHOUT PAY"!=(null==c||null===(t=c.leave_type)||void 0===t?void 0:t.leave_type)&&0==(null==c?void 0:c.balance_leaves)||"EARNED LEAVE"==(null==c||null===(n=c.leave_type)||void 0===n?void 0:n.leave_type)&&!V||!(null!=c&&c.is_active),onChange:function(e){var a,l,t,n,o,i,r,d,u;v("leaveType",null==e||null===(a=e.target)||void 0===a?void 0:a.value),v("leaveTypeValue",null==c||null===(l=c.leave_type)||void 0===l?void 0:l.leave_type),p&&"MATERNITY LEAVE"==(null==c||null===(t=c.leave_type)||void 0===t?void 0:t.leave_type)&&(q(X()(L).add(2,"days")),v("fromDate",X()(L).add(2,"days").format(x)),k(X()(L).add((null==c?void 0:c.balance_leaves)+1,"days")),v("toDate",X()(L).add((null==c?void 0:c.balance_leaves)+1,"days").format(x)),v("initialDayLeaveMode","FULL DAY"),v("finalDayLeaveMode","FULL DAY")),"SICK LEAVE"!=(null==c||null===(n=c.leave_type)||void 0===n?void 0:n.leave_type)?(v("document",null),f.current.value=null,g(!0)):"Attendance"!==m&&(g(!1),X()(null==s?void 0:s.fromDate).isAfter()&&(v("fromDate",""),v("initialDayLeaveMode","FULL DAY"),q("")),X()(null==s?void 0:s.toDate).isAfter()&&(v("toDate",""),v("finalDayLeaveMode","FULL DAY"),k(""))),""===s.toDate&&""===H||(!(2<X()(s.toDate).diff(X()(s.fromDate),"days")+1&&"SICK LEAVE"==(null==c||null===(u=c.leave_type)||void 0===u?void 0:u.leave_type))||X()(s.toDate).diff(X()(s.fromDate),"days")+1==3&&"SECOND HALF"==s.initialDayLeaveMode&&"FIRST HALF"==s.finalDayLeaveMode?(D(!1),v("document",null),f.current.value=null):D(!0)),s.fromDate===s.toDate&&(v("finalDayLeaveMode",""),""!==s.fromDate&&R(!1)),"MATERNITY LEAVE"!=(null==c||null===(o=c.leave_type)||void 0===o?void 0:o.leave_type)&&p&&"Attendance"!==m&&(g(!1),v("fromDate",""),v("toDate",""),v("initialDayLeaveMode","FULL DAY"),v("finalDayLeaveMode","FULL DAY"),q(""),k(""),v("document",null),f.current.value=null),A(!(null!=c&&null!==(i=c.leave_type)&&void 0!==i&&i.allow_half_day)),S(!(null!=c&&null!==(r=c.leave_type)&&void 0!==r&&r.allow_half_day)),!1===(null==c||null===(d=c.leave_type)||void 0===d?void 0:d.allow_half_day)&&((null==s?void 0:s.fromDate)==(null==s?void 0:s.toDate)?(v("initialDayLeaveMode","FULL DAY"),v("finalDayLeaveMode","")):(v("initialDayLeaveMode","FULL DAY"),v("finalDayLeaveMode","FULL DAY")))},checked:parseInt(s.leaveType)===(null==c||null===(o=c.leave_type)||void 0===o?void 0:o.id)}),W.a.createElement("label",{className:"form-check-label",htmlFor:null==c||null===(i=c.leave_type)||void 0===i?void 0:i.id},null==c||null===(r=c.leave_type)||void 0===r?void 0:r.leave_type,"LEAVE WITHOUT PAY"!=(null==c||null===(d=c.leave_type)||void 0===d?void 0:d.leave_type)?W.a.createElement("span",null,"(",null==c?void 0:c.balance_leaves,")"):null)))))}))),W.a.createElement("div",{className:"col-md-6"},W.a.createElement("div",{className:"form-group ".concat(a.fromDate&&l.fromDate?"error-group":"")},W.a.createElement("label",{className:"col-form-label"},"From Date",W.a.createElement("span",{className:"text-danger"},"*")),W.a.createElement(G.a,{size:"large",className:"form-control  ".concat(a.fromDate&&l.fromDate?"error-input":""),name:"fromDate",placeholder:"From Date",format:x,onKeyDown:function(e){return e.preventDefault()},disabledDate:function(e){return!e||e.isSameOrBefore(X()(null==u?void 0:u.to_date).add(1,"days"))&&(null==u?void 0:u.lock)||e.isBefore(X()(O.lastLastCycleStartDate))||e.isAfter(X()(null==O?void 0:O.nextCycleEndDate).add(1,"days"))||e.isAfter(X()(null==s?void 0:s.toDate).add(1,"days"))||"SICK LEAVE"==s.leaveTypeValue&&e.isSameOrAfter()||"MATERNITY LEAVE"==s.leaveTypeValue&&p&&(e.isBefore(X()(L).add(2,"days"))||e.isAfter(X()(L).add(3,"days")))||(null==d?void 0:d.applyLock)&&(null==d?void 0:d.lockCycleEndDate)&&e.isSameOrBefore(new X.a(null==d?void 0:d.lockCycleEndDate).endOf("day"))},disabled:""===s.leaveType||p&&"MATERNITY LEAVE"==s.leaveTypeValue||"Attendance"===m,value:B,onChange:function(e,a){q(e),v("fromDate",a),""===s.toDate&&""===H||(!(2<X()(s.toDate).diff(X()(a),"days")+1&&"SICK LEAVE"==s.leaveTypeValue)||X()(s.toDate).diff(X()(a),"days")+1==3&&"SECOND HALF"==s.initialDayLeaveMode&&"FIRST HALF"==s.finalDayLeaveMode?(D(!1),v("document",null),f.current.value=null):D(!0)),"MATERNITY LEAVE"==s.leaveTypeValue&&""!=e&&(v("toDate",""),k("")),""==a&&v("initialDayLeaveMode","FULL DAY"),a==(null==s?void 0:s.toDate)&&(v("finalDayLeaveMode",""),R(!1)),a!==(null==s?void 0:s.toDate)&&"FIRST HALF"==s.initialDayLeaveMode&&v("initialDayLeaveMode","FULL DAY"),h&&a!==(null==s?void 0:s.toDate)&&v("finalDayLeaveMode","FULL DAY")},onBlur:n}),a.fromDate&&l.fromDate?W.a.createElement("small",null,null==a?void 0:a.fromDate):null)),W.a.createElement("div",{className:"col-md-3"},W.a.createElement("div",{className:"form-group ".concat(a.initialDayLeaveMode&&l.rc_select_0?"error-group":"")},W.a.createElement("label",{className:"col-form-label"},"Leave Mode",W.a.createElement("span",{className:"text-danger"},"*")),W.a.createElement(Q.a,{className:"form-control  ".concat(a.initialDayLeaveMode&&l.rc_select_0?"error-input":""),name:"initialDayLeaveMode",disabled:""===s.leaveType||""===s.fromDate||b||"full_day"!==E&&"Attendance"==m,value:s.initialDayLeaveMode,onChange:function(e){v("initialDayLeaveMode",e),X()(s.toDate).diff(X()(s.fromDate),"days")+1==3&&"FIRST HALF"==s.finalDayLeaveMode&&("SECOND HALF"==e?(D(!1),v("document",null),f.current.value=null):D(!0)),s.fromDate===s.toDate&&(v("finalDayLeaveMode",""),R(!1))},onBlur:n},W.a.createElement(Q.a.Option,{value:"FULL DAY"},"Full Day"),W.a.createElement(Q.a.Option,{value:"FIRST HALF",disabled:""!=(null==s?void 0:s.fromDate)&&""!=(null==s?void 0:s.toDate)&&(null==s?void 0:s.fromDate)!=(null==s?void 0:s.toDate)},"First Half"),W.a.createElement(Q.a.Option,{value:"SECOND HALF"},"Second Half")),a.initialDayLeaveMode&&l.rc_select_0?W.a.createElement("small",null,null==a?void 0:a.initialDayLeaveMode):null)),W.a.createElement("div",{className:"col-md-6"},W.a.createElement("div",{className:"form-group ".concat(a.toDate&&l.toDate?"error-group":"")},W.a.createElement("label",{className:"col-form-label"},"To Date",W.a.createElement("span",{className:"text-danger"},"*")),W.a.createElement(G.a,{size:"large",className:"form-control  ".concat(a.toDate&&l.toDate?"error-input":""),name:"toDate",placeholder:"To Date",format:x,onKeyDown:function(e){return e.preventDefault()},defaultPickerValue:B?X()(B).startOf("month"):null,disabledDate:function(e){return!e||e.isSameOrBefore(X()(null==u?void 0:u.to_date).add(1,"days"))&&(null==u?void 0:u.lock)||e.isBefore(X()(null==s?void 0:s.fromDate))||e.isBefore(X()(O.lastLastCycleStartDate))||"SICK LEAVE"==s.leaveTypeValue&&e.isSameOrAfter()||"MATERNITY LEAVE"==s.leaveTypeValue&&function(){for(var e,a,l=0;l<=r.length;l++)if("MATERNITY LEAVE"==(null===(a=r[l])||void 0===a||null===(e=a.leave_type)||void 0===e?void 0:e.leave_type)&&(null===(a=r[l])||void 0===a?void 0:a.entitled_leaves)-((null===(a=r[l])||void 0===a?void 0:a.used_leaves)+(null===(a=r[l])||void 0===a?void 0:a.scheduled_leaves))<182)return _((null===(a=r[l])||void 0===a?void 0:a.entitled_leaves)-((null===(a=r[l])||void 0===a?void 0:a.used_leaves)+(null===(a=r[l])||void 0===a?void 0:a.scheduled_leaves))),!1;return!0}()&&(e.isBefore(X()(s.fromDate).add(30,"days"))||e.isAfter(X()(s.fromDate).add(90,"days")))||"MATERNITY LEAVE"==s.leaveTypeValue&&p&&e.isAfter(X()(s.fromDate).add(T+1,"days"))||(null==d?void 0:d.applyLock)&&(null==d?void 0:d.lockCycleEndDate)&&e.isSameOrBefore(new X.a(null==d?void 0:d.lockCycleEndDate).endOf("day"))},disabled:""===s.leaveType||"MATERNITY LEAVE"==s.leaveTypeValue&&""==s.fromDate||p&&"MATERNITY LEAVE"==s.leaveTypeValue||"Attendance"===m,value:H,onChange:function(e,a){k(e),v("toDate",a),""===s.fromDate&&""===B||(!(2<X()(a).diff(X()(s.fromDate),"days")+1&&"SICK LEAVE"==s.leaveTypeValue)||X()(a).diff(X()(s.fromDate),"days")+1==3&&"SECOND HALF"==s.initialDayLeaveMode&&"FIRST HALF"==s.finalDayLeaveMode?(D(!1),v("document",null),f.current.value=null):D(!0)),a!=s.fromDate&&""!=a||(v("finalDayLeaveMode",""),R(!1)),a!==(null==s?void 0:s.fromDate)&&"FIRST HALF"==s.initialDayLeaveMode&&v("initialDayLeaveMode","FULL DAY"),h&&a!==(null==s?void 0:s.fromDate)&&v("finalDayLeaveMode","FULL DAY")},onBlur:n}),a.toDate&&l.toDate?W.a.createElement("small",null,null==a?void 0:a.toDate):null)),W.a.createElement("div",{className:"col-md-3"},W.a.createElement("div",{className:"form-group ".concat(a.finalDayLeaveMode&&l.rc_select_1?"error-group":"")},W.a.createElement("label",{className:"col-form-label"},"Leave Mode ",j?W.a.createElement("span",{className:"text-danger"},"*"):null),W.a.createElement(Q.a,{className:"form-control  ".concat(a.finalDayLeaveMode&&l.rc_select_1?"error-input":""),name:"finalDayLeaveMode",value:s.finalDayLeaveMode,disabled:s.fromDate===s.toDate||""===s.toDate||h,onChange:function(e){v("finalDayLeaveMode",e),X()(s.toDate).diff(X()(s.fromDate),"days")+1==3&&"SECOND HALF"==s.initialDayLeaveMode&&("FIRST HALF"==e?(D(!1),v("document",null),f.current.value=null):D(!0))},onBlur:n},W.a.createElement(Q.a.Option,{defaultValue:!0,value:"FULL DAY"},"Full Day"),W.a.createElement(Q.a.Option,{value:"FIRST HALF"},"First Half")),a.finalDayLeaveMode&&l.rc_select_1?W.a.createElement("small",null,null==a?void 0:a.finalDayLeaveMode):null)),W.a.createElement("div",{className:"col-md-6"},W.a.createElement("div",{className:"form-group ".concat(a.purpose&&l.purpose?"error-group":"")},W.a.createElement("label",{className:"col-form-label"},"Purpose",W.a.createElement("span",{className:"text-danger"},"*")),W.a.createElement("textarea",{className:"form-control ".concat(a.purpose&&l.purpose?"error-input":""),type:"text",name:"purpose",disabled:""===s.leaveType,placeholder:"Purpose for leave",value:s.purpose,onChange:t,onBlur:n}," "),a.purpose&&l.purpose?W.a.createElement("small",null,null==a?void 0:a.purpose):null)),W.a.createElement("div",{className:"col-md-6"},W.a.createElement("div",{className:"form-group ".concat(a.document&&l.document?"error-group":"")},W.a.createElement("label",{className:"col-form-label"},"Document ",F?W.a.createElement("span",{className:"text-danger"},"*"):null),W.a.createElement("input",{className:"form-control file",type:"file",ref:f,name:"document",disabled:M,placeholder:"Upload file here",onChange:function(e){v("document",e.target.files[0])},onBlur:n}),a.document&&l.document?W.a.createElement("small",null,null==a?void 0:a.document):null)),W.a.createElement("div",{className:"submit-section"},W.a.createElement("button",{className:"btn btn-primary submit-btn",disabled:!e||i||oe.a.isEqual(s,C),type:"submit"},y?W.a.createElement("span",{className:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"}):"Apply"))))})))))}}.call(this,l(246))},984:function(e,a,l){"use strict";l.d(a,"a",function(){return n});var a=l(8),o=l.n(a),a=l(599),t=l(784),n=a.g().shape({fromDate:a.i().required("From Date is Required"),toDate:a.i().required("To Date is Required"),initialDayLeaveMode:a.i().required("Leave Mode is Required"),finalDayLeaveMode:a.i().when(["fromDate","toDate"],{is:function(e,a){return e!==a},then:a.i().required("Leave Mode is Required")}),leaveType:a.i().required("Leave Type is Required"),leaveTypeValue:a.i(),purpose:a.i().trim().required("Purpose for Leave Required").max(100,"Can't exceed more than 100 letters"),document:a.e().when(["fromDate","toDate","leaveTypeValue","initialDayLeaveMode","finalDayLeaveMode"],{is:function(e,a,l,t,n){return"SICK LEAVE"===l&&2<o()(a).diff(o()(e),"days")+1&&!(o()(a).diff(o()(e),"days")+1==3&&"SECOND HALF"===t&&"FIRST HALF"===n)},then:a.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(t.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(t.d)(e,1024)}).required("Doctor Certified document is Required for Sick Leave more than 2 days")})})}}]);