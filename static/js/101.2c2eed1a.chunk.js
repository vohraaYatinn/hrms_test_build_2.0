(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1026:function(c,e,t){"use strict";t.r(e);function n(e){var t=null==e?void 0:e.fetchJobData,n=null==e?void 0:e.userJobData,e=null==e?void 0:e.jobLoading,a=Object(f.c)(v.B);return Object(l.useEffect)(function(){t(Object(i.h)())},[]),o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement(r.a,{className:"table-striped",pagination:!1,style:{overflowX:"auto"},columns:[{title:"Company",dataIndex:["sub_company","short_name"]},{title:"Department",dataIndex:["department","value"]},{title:"Employment Type",dataIndex:["employment_type","value"]},{title:"Reporting Head",render:function(e){var t,n,a;return o.a.createElement("div",{className:"text"},null!=e&&null!==(t=e.reporting_manager)&&void 0!==t&&t.full_name?o.a.createElement("div",null,null==e||null===(n=e.reporting_manager)||void 0===n?void 0:n.full_name,"(",null==e||null===(a=e.reporting_manager)||void 0===a?void 0:a.user_id,")"):"N/A")}},{title:"Employment Level",dataIndex:["employment_level"],render:function(e){return a[e]}},{title:"Grade",dataIndex:["grade","value"]},{title:"Designation",dataIndex:["designation","value"]},{title:"Notice Period",dataIndex:["notice_period"],render:function(e){return d.H[e]}},{title:"Location",dataIndex:["location","facility_name"]},{title:"Effective From",dataIndex:["effective_from"],render:function(e){return e?new u.a(e).format("D MMM, YYYY"):"N/A"}},{title:"Effective Till",dataIndex:["effective_till"],render:function(e){return e?new u.a(e).format("D MMM, YYYY"):"N/A"}}],dataSource:null==n?void 0:n.data,rowKey:function(e){return null==e?void 0:e.employee_job_id},loading:e})))}var l=t(0),o=t.n(l),a=t(7),a=t.n(a),i=t(778),r=t(764),d=t(780),m=t(8),u=t.n(m),f=t(65),v=t(247);n.propTypes={userJobData:a.a.oneOfType([a.a.array,a.a.object]),fetchJobData:a.a.func,jobLoading:a.a.bool},e.default=n}}]);