(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1081:function(i,e,a){"use strict";a.r(e);var t=a(4),n=a.n(t),t=a(46),m=a.n(t),p=a(0),u=a.n(p),c=a(595),d=a(777),g=a(783),y=a(787),P=a(158),x=(a(356),a(814)),E=a(795);function r(a,e){var t,n=Object.keys(a);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(a),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),n.push.apply(n,t)),n}function T(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach(function(e){n()(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}e.default=function(){var e=Object(p.useState)({showMessage:!1,isError:!0,message:""}),e=m()(e,2),a=e[0],t=e[1],e=Object(P.a)(),e=m()(e,4),n=e[0],r=e[1],i=e[3],l=Object(p.useRef)(r),e=Object(p.useState)({}),e=m()(e,2),o=e[0],s=e[1];return Object(p.useEffect)(function(){var e;l.current!==r&&t({showMessage:!0,isError:!0,message:(null==r||null===(e=r.response)||void 0===e?void 0:e.data)||(null==r?void 0:r.message)}),l.current=r},[r]),Object(p.useEffect)(function(){i(Object(E.k)())},[]),Object(p.useEffect)(function(){var e,a=null==n?void 0:n.result;a&&(a=null==a||null===(e=a.employee_salary)||void 0===e?void 0:e.reduce(function(e,a){var t,n,r=null==a||null===(r=a.component)||void 0===r||null===(t=r.component_type)||void 0===t?void 0:t.value;return e[r]=null!==(t=e[r])&&void 0!==t?t:[],e[r].push({component_name:null==a||null===(n=a.component)||void 0===n?void 0:n.component_name,amount:null==a?void 0:a.amount}),e},{}),s(a))},[n]),u.a.createElement("div",{className:"page-wrapper"},u.a.createElement(c.a,null,u.a.createElement("title",null,"Employee Salary"),u.a.createElement("meta",{name:"Employee Salary",content:"Employee Salary"})),u.a.createElement("div",{className:"content container-fluid"},u.a.createElement(y.a,{scope:x.h},a.showMessage?u.a.createElement(d.a,{message:a.message,dismiss:function(){t(function(e){return T(T({},e),{},{showMessage:!1})})},isError:a.isError}):null,u.a.createElement("div",{className:"page-header"},u.a.createElement("div",{className:"row align-items-center"},u.a.createElement(g.a,null))),u.a.createElement("div",{className:"row"},(Object.keys(o)||[]).map(function(e){return u.a.createElement("div",{className:"col-md-6",key:e},u.a.createElement("h4",null,e),u.a.createElement("table",{className:"table table-striped"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Particulars"),u.a.createElement("th",{className:"text-end"},"Salary P.A (Rs.)"))),u.a.createElement("tbody",null,o[e].map(function(e){return u.a.createElement("tr",{key:null==e?void 0:e.component_name},u.a.createElement("td",null,null==e?void 0:e.component_name),u.a.createElement("td",{className:"text-end"},(null==e?void 0:e.amount)||0))}),u.a.createElement("tr",null,u.a.createElement("td",{className:"fw-bold"},"Total"),u.a.createElement("td",{className:"fw-bold text-end"},o[e].reduce(function(e,a){return e+(null==a?void 0:a.amount)},0)||0)))))})))))}},783:function(e,a,t){"use strict";var r=t(71),n=t(0),i=t.n(n),l=t(43);a.a=function(){var e,a=Object(l.useLocation)().pathname,t=Object(l.useHistory)(),n={"/app/dashboard/employee-dashboard":{headerText:"Home",mainPageTitle:"Employee",currentPageTitle:"Home"},"/app/facility/all-facilities":{headerText:"All Facilities",mainPageTitle:"Configuration",currentPageTitle:"All Facilities"},"/app/access-control/user-group":{headerText:"User Group",mainPageTitle:"Configuration",currentPageTitle:"User Group"},"/app/company/all-companies":{headerText:"All Companies",mainPageTitle:"Configuration",currentPageTitle:"All Companies"},"/app/access-control/permission-group":{headerText:"All Permissions",mainPageTitle:"Configuration",currentPageTitle:"All Permissions"},"/app/company/hod-cxo":{headerText:"HOD And CXO",mainPageTitle:"Configuration",currentPageTitle:"HOD-CXO"},"/app/facility/facility-supervisors":{headerText:"Facility Supervisors",mainPageTitle:"Facilities",currentPageTitle:"Facility Supervisors"},"/app/attendance/all-holidays":{headerText:"All Holidays",mainPageTitle:"Configuration",currentPageTitle:"All Holidays"},"/app/state-city/all-state-cities":{headerText:"State cities",mainPageTitle:"Configuration",currentPageTitle:"State cities"},"/app/salary/salary-components":{headerText:"Salary Components",mainPageTitle:"Salary",currentPageTitle:"Salary Components"},"/app/salary/salary-templates":{headerText:"Salary Templates",mainPageTitle:"Salary",currentPageTitle:"Salary Templates"},"/app/salary/employee-salaries":{headerText:"Employee Salaries",mainPageTitle:"Salary",currentPageTitle:"Employee Salaries"},"/app/salary/my-salary":{headerText:"My Salary",mainPageTitle:"Salary",currentPageTitle:"My Salary"},"/app/attendance/lock-attendance":{headerText:"Lock Attendance",mainPageTitle:"Locks",currentPageTitle:"Lock Attendance"},"/app/attendance/payroll-lock":{headerText:"Lock Payroll",mainPageTitle:"Locks",currentPageTitle:"Lock Payroll"},"/app/attendance/wfh/my-wfh":{headerText:"My WFH",mainPageTitle:"Employee",currentPageTitle:"My WFH"},"/app/attendance/holidays":{headerText:"My Holidays",mainPageTitle:"Employee",currentPageTitle:"My Holidays"},"/app/attendance/sync-attendance":{headerText:"Sync Attendance",mainPageTitle:"Attendance",currentPageTitle:"Sync Attendance"},"/app/employee/all-employees":{headerText:"All Employees",mainPageTitle:"Employee",currentPageTitle:"All Employees"},"/app/profile/my-profile":{headerText:"My Profile",mainPageTitle:"Employee",currentPageTitle:"My Profile"},"/app/profile/my-exit-request":{headerText:"All Profile",mainPageTitle:"Employee",currentPageTitle:"All Profile"},"/app/attendance/wfh/subordinate-wfh":{headerText:"WFH Subordinate Requests",mainPageTitle:"My Team",currentPageTitle:"WFH Subordinate Requests"},"/app/employee/employee-reportees":{headerText:"My Subordinate Employees",mainPageTitle:"My Team",currentPageTitle:"My Subordinate Employees"},"/app/attendance/wfh/extended-subordinate-wfh":{headerText:"WFH Requests",mainPageTitle:"My Extended Team",currentPageTitle:"WFH Requests"},"/app/attendance/wfh/regional-wfh-requests":{headerText:"Regional Employees WFH Requests",mainPageTitle:"HR Group",currentPageTitle:"WFH Requests"},"/app/policy/all-policies":{headerText:"All Policies",mainPageTitle:"Employee",currentPageTitle:"All Policies"},"/app/policy/hr-policies":{headerText:"All Policies",mainPageTitle:"HR Group",currentPageTitle:"HR Policies"},"/app/master/all-masters":{headerText:"All Masters",mainPageTitle:"Configuration",currentPageTitle:"All Masters"},"/app/leave/my-leaves":{headerText:"My Leaves",mainPageTitle:"Employee",currentPageTitle:"My Leaves"},"/app/leave/my-subordinates":{headerText:"My Team Leave Requests",mainPageTitle:"My Team",currentPageTitle:"My Team Leave Requests"},"/app/leave/my-team-leaves":{headerText:"My Extended Team Leave Requests",mainPageTitle:"My Extended Team",currentPageTitle:"My Extended Team Leave Requests"},"/app/leave/my-department-leaves":{headerText:"My Department Leave Requests",mainPageTitle:"My Department",currentPageTitle:"My Department Leave Requests"},"/app/leave/regional-leave-requests":{headerText:"Regional Employees Leave Requests",mainPageTitle:"HR Group",currentPageTitle:"Leave Requests"},"/app/leave/my-leave-cancellation-requests":{headerText:"My Leave Cancellation Requests",mainPageTitle:"Employee",currentPageTitle:"My Leave Cancellation"},"/app/leave/subordinates-leave-cancellation-requests":{headerText:"My Team Leave Cancellation Requests",mainPageTitle:"My Team",currentPageTitle:"My Team Leave Cancellation Requests"},"/app/leave/team-leave-cancellation-requests":{headerText:"Extended Team Leave Cancellation Requests",mainPageTitle:"My Extended Team",currentPageTitle:"Extended Team Leave Cancellation Requests"},"/app/leave/my-department-leave-cancellation-requests":{headerText:"My Department Leave Cancellation",mainPageTitle:"My Department",currentPageTitle:"My Department Leave Cancellation"},"/app/leave/my-subordinates-leave-summary":{headerText:"My Team Leave Summary",mainPageTitle:"My Team",currentPageTitle:"My Team Leave Summary"},"/app/leave/my-team-leave-summary":{headerText:"Extended Team Leave Summary",mainPageTitle:"My Extended Team",currentPageTitle:"Extended Team Leave Summary"},"/app/leave/my-department-leave-summary":{headerText:"My Department Team Leave Summary",mainPageTitle:"My Department",currentPageTitle:"My Department Leave Summary"},"/app/leave/regional-leave-summary":{headerText:"Regional Leave Summary",mainPageTitle:"HR Group",currentPageTitle:"Regional Leave Summary"},"/app/employee/employee-team":{headerText:"Extended Team Employees",mainPageTitle:"My Extended Team",currentPageTitle:"Extended Team Employees"},"/app/employee/employee-department":{headerText:"My Department Employees",mainPageTitle:"My Department",currentPageTitle:"My Department"},"/app/leave/regional-leave-cancellation-requests":{headerText:"Regional Employees Leave Cancellation Requests",mainPageTitle:"HR Group",currentPageTitle:"Leave Cancellation"},"/app/employee/regional-exit-request":{headerText:"Regional Exit Requests",mainPageTitle:"HR Group",currentPageTitle:"Regional Exit Requests"},"/app/employee/extended-exit-request":{headerText:"Extended Exit Requests",mainPageTitle:"My Extended Team",currentPageTitle:"Extended Exit Requests"},"/app/employee/team-exit-request":{headerText:"Team Exit Requests",mainPageTitle:"My Team",currentPageTitle:"Team Exit Requests"},"/app/employee/department-exit-request":{headerText:"Department Exit Requests",mainPageTitle:"My Department",currentPageTitle:"Department Exit Requests"},"/app/employee/employee-list-as-on-date":{headerText:"Employee List As On Date",indexPageTitle:"HR Group",mainPageTitle:"Employee Reports",currentPageTitle:"List As on Date"},"/app/employee/payroll-cycle-employee-list":{headerText:"Payroll Cycle Employee List",indexPageTitle:"HR Group",mainPageTitle:"Employee Reports",currentPageTitle:"Payroll Cycle Report"},"/app/employee/payroll-cycle-attendance-report":{headerText:"Payroll Cycle Employee Attendance Report",indexPageTitle:"HR Group",mainPageTitle:"Employee Reports",currentPageTitle:"Payroll Cycle Attendance Report"},"/app/employee/activity-report":{headerText:"Employee Activity Report",indexPageTitle:"HR Group",mainPageTitle:"Employee Reports",currentPageTitle:"Activity Report"},"/app/employee/job-history-report":{headerText:"Employee Job History Report",indexPageTitle:"HR Group",mainPageTitle:"Employee Reports",currentPageTitle:"Job History Report"},"/app/employee/exception-report":{headerText:"Employee Exception Report",indexPageTitle:"HR Group",mainPageTitle:"Employee Reports",currentPageTitle:"Exception Report"},"/app/asset/all-assets/subordinate-assets":{headerText:"My Subordinate Assets",mainPageTitle:"My Team",currentPageTitle:"My Subordinate Assets"},"/app/asset/all-assets/assets":{headerText:"All Assets",mainPageTitle:"Assets",currentPageTitle:"All Assets"},"/app/asset/all-assets/my-assets":{headerText:"My Assets",mainPageTitle:"Assets",currentPageTitle:"My Assets"},"/app/asset/all-assets/team-assets":{headerText:"Team Assets",mainPageTitle:"Assets",currentPageTitle:"Team Assets"},"/app/asset/all-assets/department-assets":{headerText:"My Department Assets",mainPageTitle:"My Department",currentPageTitle:"My Department Assets"},"/app/attendance/my-comp-off-requests":{headerText:"My CompOff Requests",indexPageTitle:"Employee",mainPageTitle:"Attendance",currentPageTitle:"My CompOff Requests"},"/app/attendance/my-subordinate-comp-off-requests":{headerText:"My Subordinate Compoff Requests",mainPageTitle:"My Team",currentPageTitle:"My Subordinate Compoff Requests"},"/app/attendance/extended-team-comp-off-requests":{headerText:"Extended Team CompOff Requests",mainPageTitle:"My Extended Team ",currentPageTitle:"Extended Team CompOff Requests"},"/app/attendance/my-department-comp-off":{headerText:"My Department CompOff Requests",mainPageTitle:"My Department",currentPageTitle:"My Department CompOff Requests"},"/app/attendance/regional-comp-off-requests":{headerText:"Regional CompOff Requests",mainPageTitle:"HR Group",currentPageTitle:"Regional CompOff Requests"},"/app/attendance/my-regularization":{headerText:"My Regularization Requests",indexPageTitle:"Employee",mainPageTitle:"Attendance",currentPageTitle:"My Regularization Requests"},"/app/attendance/subordinate-regularization":{headerText:"My Subordinate Regularization Requests",mainPageTitle:"My Team",currentPageTitle:"My Subordinate Regularization Requests"},"/app/attendance/my-regularization-cancellation":{headerText:"My Regularization Cancellation Requests",indexPageTitle:"Employee",mainPageTitle:"Attendance",currentPageTitle:"My Regularization Cancellation Requests"},"/app/attendance/team-cancellation-regularization":{headerText:"Team Regularization Cancellation",mainPageTitle:"My Team",currentPageTitle:"Team Regularization Cancellation"},"/app/attendance/extended-team-regularization-cancellation":{headerText:"Extended Team Regularization Cancellation",mainPageTitle:"My Extended Team ",currentPageTitle:"Extended Team Regularization Cancellation"},"/app/attendance/my-department-regularization-cancellation":{headerText:"My Department Regularization Cancellation",mainPageTitle:"My Department",currentPageTitle:"My Department Regularization Cancellation"},"/app/attendance/my-department-regularization":{headerText:"My Department Regularization",mainPageTitle:"My Department",currentPageTitle:"My Department Regularization"},"/app/attendance/regional-cancellation-regularization":{headerText:"Regional Regularization Cancellation",mainPageTitle:"HR Group",currentPageTitle:"Regional Regularization Cancellation"},"/app/attendance/subordinate-regularization-travel":{headerText:"My Subordinate Travel Requests",mainPageTitle:"My Team",currentPageTitle:"My Subordinate Travel Requests"},"/app/attendance/extended-team-regularization":{headerText:"Extended Team Regularization Requests",mainPageTitle:"My Extended Team ",currentPageTitle:"Extended Team Regularization Requests"},"/app/attendance/my-regional-regularization":{headerText:"Regional Regularization Requests",mainPageTitle:"HR Group",currentPageTitle:"Regional Regularization Requests"},"/app/attendance/my-attendance/attendance":{headerText:"My Attendance",indexPageTitle:"Employee",mainPageTitle:"Attendance",currentPageTitle:"My Attendance"},"/app/attendance/my-attendance/sub-ordinates":{headerText:"My Subordinates Attendance",mainPageTitle:"My Team",currentPageTitle:"My Subordinates Attendance"},"/app/attendance/my-team-roster-requests":{headerText:"My Team Roster Requests",mainPageTitle:"My Team",currentPageTitle:"Roster Requests"},"/app/attendance/add-employee-rosters":{headerText:"Add Employee Roster",mainPageTitle:"My Team",currentPageTitle:"Add Employee Roster  "},"/app/attendance/extended-team-attendance":{headerText:"Extended Team Attendance",mainPageTitle:"My Extended Team",currentPageTitle:"Extended Team Attendance"},"/app/attendance/my-department-attendance":{headerText:"My Department Attendance",mainPageTitle:"My Department",currentPageTitle:"My Department Attendance"},"/app/attendance/regional-attendance":{headerText:"Regional Attendance",mainPageTitle:"HR Groups",currentPageTitle:"Regional Attendance"},"/app/employee/regional-employees":{headerText:"Regional Employees",mainPageTitle:"HR Groups",currentPageTitle:"Regional Employees"},"/app/employee/onboard-request":{headerText:"All Onboard Requests",mainPageTitle:"Employees",currentPageTitle:"All Requests"},"/app/employee/bulk-action":{headerText:"Bulk Action Employees",mainPageTitle:"HR Groups",currentPageTitle:"Bulk Action Employees"},"/app/policy/notifications":{headerText:"Notifications",mainPageTitle:"Configuration",currentPageTitle:"Notifications"},"/app/employee/edit-approval-request":{headerText:"Change Requests",mainPageTitle:"HR Group",currentPageTitle:"Change Requests"},"/app/recruitment/mrf":{headerText:"MRFs",mainPageTitle:"Configuration",currentPageTitle:"MRFs"},"/app/salary/tax-declaration/add":{headerText:"Tax Declarations",mainPageTitle:"Home",currentPageTitle:"Tax Declaration Form"},"/app/salary/tax-declaration":{headerText:"Tax Declarations",mainPageTitle:"Home",currentPageTitle:"Tax Declaration Form"},"/app/salary/tax-declaration/edit":{headerText:"Edit Tax Declarations",mainPageTitle:"Payroll",currentPageTitle:"Tax Declaration Form"},"/app/salary/tax-declaration-view":{headerText:"Tax Declarations",mainPageTitle:"Payroll",currentPageTitle:"Regional Tax Declaration View"},"/app/expense-reimbursement/expense-category-configuration":{headerText:"Expense Category Configuration",mainPageTitle:"Configuration",currentPageTitle:"Expense Category Configuration"},"/app/attendance/hod-regularization-travel":{headerText:"HOD Travel Requests",mainPageTitle:"Attendance",currentPageTitle:"Travel Requests"},"/app/attendance/cxo-regularization-travel":{headerText:"CXO Travel Requests",mainPageTitle:"Attendance",currentPageTitle:"Travel Requests"},"/app/expense-reimbursement/my-expense-reimbursement":{headerText:"My Expense Reimbursement",mainPageTitle:"Expense Management",currentPageTitle:"My Expense Reimbursement"},"/app/expense-reimbursement/team-expense-reimbursement":{headerText:"Team Expense Reimbursement",mainPageTitle:"Expense Management View",currentPageTitle:"Team Expense Reimbursement"},"/app/expense-reimbursement/regional-expense-reimbursement":{headerText:"Regional Expense Reimbursement",mainPageTitle:"Expense Management View",currentPageTitle:"Regional Expense Reimbursement"},"/app/expense-reimbursement/cxo-expense-reimbursement":{headerText:"CXO Expense Reimbursement",mainPageTitle:"Expense Management View",currentPageTitle:"CXO Expense Reimbursement"},"/app/expense-reimbursement/hod-expense-reimbursement":{headerText:"HOD Expense Reimbursement",mainPageTitle:"Expense Management View",currentPageTitle:"HOD Expense Reimbursement"},"/app/employee/team-transfer-request":{headerText:"Employee Transfer Request",mainPageTitle:"Employee Transfer Request",currentPageTitle:"All Request"},"/app/employee/team-transfer-request/approvals":{headerText:"Employee Transfer Request",mainPageTitle:"Employee Transfer Request",currentPageTitle:"All Request"},"/app/employee/regional-transfer-request":{headerText:"Employee Transfer Request",mainPageTitle:"Employee Transfer Request",currentPageTitle:"All Request"},"/app/data-validation/log-statements":{headerText:"Data Validation",mainPageTitle:"Configuration",currentPageTitle:"Statement Logs"},"/app/data-validation/logs-view":{headerText:"Validation Logs",mainPageTitle:"Data Validation",currentPageTitle:"Statement Logs"},"/app/employee/lock-employee-onboard":{headerText:"Freeze Employee Onboarding",mainPageTitle:"Freeze Employee Onboarding",currentPageTitle:"Freeze Onboard"},"/app/leave/regional-maternity-requests":{headerText:"Regional Employees Maternity Requests",mainPageTitle:"HR Group",currentPageTitle:"Maternity Requests"},"/app/facility/facilities-missing-attendance":{headerText:"Unsynced Biometric Devices",mainPageTitle:"Employee Reports",currentPageTitle:"Unsynced Biometric Devices"},"/app/facility/facility-wise-headcount-report":{headerText:"Facility Wise Headcount Report",mainPageTitle:"Employee Reports",currentPageTitle:"Facility Wise Headcount Report"},"/app/attendance/my-regularization-travel":{headerText:"Travel Requests",mainPageTitle:"My Travel Requests",currentPageTitle:"Travel Requests"},"/app/attendance/extended-team-regularization-travel":{headerText:"My Extended Travel Requests",mainPageTitle:"My Extended Team",currentPageTitle:"My Extended Travel Requests"},"/app/attendance/my-regional-regularization-travel":{headerText:"Regional Travel Requests",mainPageTitle:"HR Groups",currentPageTitle:"Regional Travel Requests"},"/app/recruitment/mrf-permission-configuration":{headerText:"MRF Permissions Configuration",mainPageTitle:"Configuration",currentPageTitle:"MRF Permissions Configuration"}};return i.a.createElement("div",{className:"col"},i.a.createElement("h3",{className:"page-title"},i.a.createElement("a",{className:"back",onClick:function(){t.goBack()}},i.a.createElement(r.a,{title:"Back"},i.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"}))),null===(e=n[a])||void 0===e?void 0:e.headerText),i.a.createElement("ul",{className:"breadcrumb"},null!==(e=n[a])&&void 0!==e&&e.indexPageTitle?i.a.createElement("li",{className:"breadcrumb-item active"},null===(e=n[a])||void 0===e?void 0:e.indexPageTitle):null,i.a.createElement("li",{className:"breadcrumb-item active"},null===(e=n[a])||void 0===e?void 0:e.mainPageTitle),i.a.createElement("li",{className:"breadcrumb-item active"},null===(e=n[a])||void 0===e?void 0:e.currentPageTitle)))}},795:function(p,e,a){"use strict";a.d(e,"g",function(){return i}),a.d(e,"p",function(){return l}),a.d(e,"o",function(){return o}),a.d(e,"n",function(){return s}),a.d(e,"i",function(){return m}),a.d(e,"f",function(){return u}),a.d(e,"h",function(){return c}),a.d(e,"m",function(){return T}),a.d(e,"j",function(){return d}),a.d(e,"k",function(){return g}),a.d(e,"l",function(){return y}),a.d(e,"e",function(){return P}),a.d(e,"a",function(){return x}),a.d(e,"b",function(){return E}),a.d(e,"c",function(){return R}),a.d(e,"d",function(){return f});var e=a(161),t=a(160),n=a(88),r=new e.a(t.a),i=function(e){return r.post(n.a.CREATE_SALARY_TEMPLATE,e)},l=function(e){return r.post(n.a.UPDATE_SALARY_TEMPLATE_STATUS,e)},o=function(e){return r.get(n.a.GET_SALARY_TEMPLATES,e)},s=function(e){return r.get(n.a.GET_SALARY_TEMPLATE_BY_ID,e)},m=function(e){return r.get(n.a.GET_ALL_SALARY_TEMPLATES,e)},u=function(e){return r.post(n.a.CREATE_SALARY_COMPONENT,e)},c=function(e){return r.post(n.a.DELETE_SALARY_COMPONENT,e)},T=function(e){return r.get(n.a.GET_SALARY_COMPONENTS,e)},d=function(e){return r.get(n.a.GET_EMPLOYEE_SALARIES,e)},g=function(e){return r.get(n.a.GET_MY_SALARY,e)},y=function(e){return r.get(n.a.GET_SALARY_BY_EMPLOYEE,e)},P=function(e){return r.post(n.a.ADD_TAX_DECLARATION,e)},x=function(e){return r.get(n.a.GET_TAX_DECLARATION,e)},E=function(e){return r.fileDownload(n.a.GET_TAX_DECLARATION_EXCEL,e)},R=function(e){return r.get(n.a.GET_TAX_DECLARATION_EXCEL,e)},f=function(e){return r.get(n.a.GET_USER_TAX_DECLARATION,e)}}}]);