(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{887:function(e,t,n){"use strict";!function(je){function e(e){var l,a,t,n,i,m,o,r,v,E,p,y,_,N,f,b,P,g,A,h,O,k,x,D,F,R,j,I,L,w,C,V,G,K,q,Y,M,S,J,T,B,U,X,z,H,Q,W,Z,$,ee,le,ae,te,ne,ie,de,ce,ue,se,me,oe,re,ve,Ee,pe,d=e.facilityData,ye=e.closeModal,c=e.requestedFrom,e=Object(Ie.c)(Le.K),_e=Object(Ie.c)(Le.v),u=Object(Oe.useState)("details"),Ne=(u=Ae()(u,2))[0],fe=u[1],u=Object(Oe.useState)(),be=(u=Ae()(u,2))[0],Pe=u[1],u=Object(Oe.useState)({}),s=(u=Ae()(u,2))[0],ge=u[1];return je("#view_facility").on("show.bs.modal",function(e){fe("details")}),Object(Oe.useEffect)(function(){null!=d&&d.id&&"facility-head-count"!==c&&ge("facilities"==c?null==d?void 0:d.mapped_company_departments.reduce(function(e,l){return e[null==l?void 0:l.id]=l,e},{}):null==d?void 0:d.parent_companies.reduce(function(e,l){return e[null==l?void 0:l.id]=l,e},{}))},[d]),Object(Oe.useEffect)(function(){Object.keys(s).length&&Pe(Object.keys(s)[0])},[s]),ke.a.createElement("div",{className:"modal custom-modal fade",id:"view_facility",role:"dialog"},ke.a.createElement("div",{className:"modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"},ke.a.createElement("div",{className:"modal-content modal-fixed-height"},ke.a.createElement("div",{className:"modal-header"},ke.a.createElement("h5",{className:"modal-title"},"Facility Details"),ke.a.createElement("button",{type:"button",className:"close",onClick:function(){ye()},"aria-label":"Close"},ke.a.createElement("span",{"aria-hidden":"true"},"X"))),ke.a.createElement("div",{className:"modal-body"},ke.a.createElement(Fe.a.Container,{defaultActiveKey:"details",className:"mb-2",activeKey:Ne,onSelect:function(e){fe(e)}},ke.a.createElement(Re.a,{variant:"tabs"},ke.a.createElement(Re.a.Item,null,ke.a.createElement(Re.a.Link,{eventKey:"details"},"Facility Details")),"facility-head-count"!==c&&ke.a.createElement(Re.a.Item,null,ke.a.createElement(Re.a.Link,{eventKey:"companies"},"Facility-Company-Departments"))),ke.a.createElement(Fe.a.Content,null,ke.a.createElement(Fe.a.Pane,{eventKey:"details"},ke.a.createElement("div",{className:"row mx-0"},ke.a.createElement("div",{className:"col-4 p-1"},"Facility ID:"),ke.a.createElement("div",{className:"col-8 p-1 text-break"},ke.a.createElement("span",null,null==d?void 0:d.facility_id),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.facility_id)!==(null==d||null===(l=d.facility_data)||void 0===l?void 0:l.facility_id)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},null==d||null===(a=d.facility_data)||void 0===a?void 0:a.facility_id),"]"):null),ke.a.createElement("div",{className:"col-4 p-1"},"Facility Name:"),ke.a.createElement("div",{className:"col-8 p-1 text-break"},ke.a.createElement("span",null,null==d?void 0:d.facility_name),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.facility_name)!==(null==d||null===(t=d.facility_data)||void 0===t?void 0:t.facility_name)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},null==d||null===(n=d.facility_data)||void 0===n?void 0:n.facility_name),"]"):null),ke.a.createElement("div",{className:"col-4 p-1"},"Facility Type:"),ke.a.createElement("div",{className:"col-8 p-1"},ke.a.createElement("span",null,Object(De.l)(null==d||null===(i=d.facility_type)||void 0===i?void 0:i.value)),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d||null===(m=d.facility_type)||void 0===m?void 0:m.id)!==(null==d||null===(o=d.facility_data)||void 0===o||null===(r=o.facility_type)||void 0===r?void 0:r.id)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},Object(De.l)(null==d||null===(v=d.facility_data)||void 0===v||null===(E=v.facility_type)||void 0===E?void 0:E.value)),"]"):null),ke.a.createElement("div",{className:"col-4 p-1"},"facilities"==c?"Facility ":"Request "," ","Status:"),ke.a.createElement("div",{className:"col-8 p-1"},ke.a.createElement("span",null,xe.c[null==d?void 0:d.status]||xe.e[null==d?void 0:d.status])),(null==d?void 0:d.status)==xe.d.PENDING_APPROVAL&&ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1"},"Facility Status:"),ke.a.createElement("div",{className:"col-8 p-1"},ke.a.createElement("span",null,xe.c[null==d?void 0:d.facility_status]),(null==d?void 0:d.facility_status)!==(null==d||null===(p=d.facility_data)||void 0===p?void 0:p.status)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},xe.c[null==d||null===(y=d.facility_data)||void 0===y?void 0:y.status]),"]"):null)),ke.a.createElement("div",{className:"col-4 p-1"},"Address:"),ke.a.createElement("div",{className:"col-8 p-1 text-break"},"facilities"===c||"facility-head-count"===c?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",null,ke.a.createElement("span",null,null==d||null===(_=d.address_details)||void 0===_?void 0:_.line_1),","),(null==d||null===(N=d.address_details)||void 0===N?void 0:N.line_2)&&ke.a.createElement("div",null,ke.a.createElement("span",null,null==d||null===(f=d.address_details)||void 0===f?void 0:f.line_2),","),(null==d||null===(b=d.address_details)||void 0===b?void 0:b.locality)&&ke.a.createElement("div",null,ke.a.createElement("span",null,null==d||null===(P=d.address_details)||void 0===P?void 0:P.locality),","),ke.a.createElement("div",null,ke.a.createElement("span",null,_e[null==d||null===(g=d.address_details)||void 0===g?void 0:g.city]),","),ke.a.createElement("div",null,ke.a.createElement("span",null,e[null==d||null===(A=d.address_details)||void 0===A?void 0:A.state]),","),ke.a.createElement("div",null,ke.a.createElement("span",null,null==d||null===(h=d.address_details)||void 0===h?void 0:h.pin_code))):ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",null,ke.a.createElement("span",null,null==d?void 0:d.line_1),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.line_1)!==(null==d||null===(O=d.facility_data)||void 0===O||null===(k=O.address_details)||void 0===k?void 0:k.line_1)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},null==d||null===(x=d.facility_data)||void 0===x||null===(D=x.address_details)||void 0===D?void 0:D.line_1),"]"):null,","),null!=d&&d.line_2||null!=d&&null!==(F=d.facility_data)&&void 0!==F&&null!==(R=F.address_details)&&void 0!==R&&R.line_2?ke.a.createElement("div",null,ke.a.createElement("span",null,(null==d?void 0:d.line_2)||"N/A"),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.line_2)!==(null==d||null===(j=d.facility_data)||void 0===j||null===(I=j.address_details)||void 0===I?void 0:I.line_2)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},(null==d||null===(L=d.facility_data)||void 0===L||null===(w=L.address_details)||void 0===w?void 0:w.line_2)||"N/A"),"]"):null,","):null,null!=d&&d.locality||null!=d&&null!==(C=d.facility_data)&&void 0!==C&&null!==(V=C.address_details)&&void 0!==V&&V.locality?ke.a.createElement("div",null,ke.a.createElement("span",null,(null==d?void 0:d.locality)||"N/A"),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.locality)!==(null==d||null===(G=d.facility_data)||void 0===G||null===(K=G.address_details)||void 0===K?void 0:K.locality)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},(null==d||null===(q=d.facility_data)||void 0===q||null===(Y=q.address_details)||void 0===Y?void 0:Y.locality)||"N/A"),"]"):null,","):null,ke.a.createElement("div",null,ke.a.createElement("span",null,_e[null==d?void 0:d.city]),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.city)!==(null==d||null===(M=d.facility_data)||void 0===M||null===(S=M.address_details)||void 0===S?void 0:S.city)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},_e[null==d||null===(J=d.facility_data)||void 0===J||null===(T=J.address_details)||void 0===T?void 0:T.city]),"]"):null,","),ke.a.createElement("div",null,ke.a.createElement("span",null,e[null==d?void 0:d.state]),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.state)!==(null==d||null===(B=d.facility_data)||void 0===B||null===(U=B.address_details)||void 0===U?void 0:U.state)?ke.a.createElement("small",null,"[",ke.a.createElement("span",{className:"text-danger"},e[null==d||null===(X=d.facility_data)||void 0===X||null===(z=X.address_details)||void 0===z?void 0:z.state]),"]"):null,","),ke.a.createElement("div",null,ke.a.createElement("span",null,null==d?void 0:d.pin_code),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.pin_code)!==(null==d||null===(H=d.facility_data)||void 0===H||null===(Q=H.address_details)||void 0===Q?void 0:Q.pin_code)?ke.a.createElement("small",null,"[",ke.a.createElement("span",{className:"text-danger"},null==d||null===(W=d.facility_data)||void 0===W||null===(Z=W.address_details)||void 0===Z?void 0:Z.pin_code),"]"):null))),ke.a.createElement("div",{className:"col-4 p-1"},"Email:"),ke.a.createElement("div",{className:"col-8 p-1"},ke.a.createElement("span",null,(null==d?void 0:d.email)||"N/A"),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.email)!==(null==d||null===($=d.facility_data)||void 0===$?void 0:$.email)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},(null==d||null===(ee=d.facility_data)||void 0===ee?void 0:ee.email)||"N/A"),"]"):null),ke.a.createElement("div",{className:"col-4 p-1"},"Phone:"),ke.a.createElement("div",{className:"col-8 p-1"},ke.a.createElement("span",null,(null==d?void 0:d.phone)||"N/A"),(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL&&(null==d?void 0:d.phone)!==(null==d||null===(le=d.facility_data)||void 0===le?void 0:le.phone)?ke.a.createElement("small",null," ","[",ke.a.createElement("span",{className:"text-danger"},(null==d||null===(ae=d.facility_data)||void 0===ae?void 0:ae.phone)||"N/A"),"]"):null),"requests"==c?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1"},"Requested by:"),ke.a.createElement("div",{className:"col-8 p-1"},null==d||null===(te=d.requested_by)||void 0===te?void 0:te.full_name," ",ke.a.createElement("small",null,"(",null==d||null===(ne=d.requested_by)||void 0===ne?void 0:ne.user_id,")"))):null,"requests"==c&&"APPROVED"==(null==d?void 0:d.status)?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1"},"Approved by:"),ke.a.createElement("div",{className:"col-8 p-1"},null==d||null===(ie=d.approved_by)||void 0===ie?void 0:ie.full_name," ",ke.a.createElement("small",null,"(",null==d||null===(de=d.approved_by)||void 0===de?void 0:de.user_id,")"))):null,"requests"==c&&"REJECTED"==(null==d?void 0:d.status)?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1"},"Rejected by:"),ke.a.createElement("div",{className:"col-8 p-1"},null==d||null===(ce=d.rejected_by)||void 0===ce?void 0:ce.full_name," ",ke.a.createElement("small",null,"(",null==d||null===(ue=d.rejected_by)||void 0===ue?void 0:ue.user_id,")"))):null,"requests"!=c||"APPROVED"!=(null==d?void 0:d.status)&&"REJECTED"!=(null==d?void 0:d.status)?null:ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1"},"Comment:"),ke.a.createElement("div",{className:"col-8 p-1"},null!=d&&d.comment?null==d?void 0:d.comment:"N/A")),"facilities"==c||"facility-head-count"==c?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1 "},"Created By:"),ke.a.createElement("div",{className:"col-8 p-1  "},null!=d&&d.created_by?ke.a.createElement(ke.a.Fragment,null,null==d||null===(se=d.created_by)||void 0===se?void 0:se.full_name," ",ke.a.createElement("small",null,"(",null==d||null===(me=d.created_by)||void 0===me?void 0:me.user_id,")")):"N/A")):null,ke.a.createElement("div",{className:"col-4 p-1"},"Created:"),ke.a.createElement("div",{className:"col-8 p-1"},new he.a(null==d?void 0:d.created_at).format("D MMM, YYYY")),"facilities"==c?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-4 p-1 "},"Modified By:"),ke.a.createElement("div",{className:"col-8 p-1  "},null!=d&&d.modified_by?ke.a.createElement(ke.a.Fragment,null,null==d||null===(oe=d.modified_by)||void 0===oe?void 0:oe.full_name," ",ke.a.createElement("small",null,"(",null==d||null===(re=d.modified_by)||void 0===re?void 0:re.user_id,")")):"N/A")):null,ke.a.createElement("div",{className:"col-4 p-1"},"Last modified:"),ke.a.createElement("div",{className:"col-8 p-1"},new he.a(null==d?void 0:d.modified_at).format("D MMM, YYYY")))),ke.a.createElement(Fe.a.Pane,{eventKey:"companies"},ke.a.createElement("div",{className:"row mx-0"},"facilities"!==c||we.a.isEmpty(s)?ke.a.createElement(ke.a.Fragment,null,(null==d?void 0:d.status)===xe.d.PENDING_APPROVAL?ke.a.createElement(ke.a.Fragment,null,ke.a.createElement("div",{className:"col-12 p-1"},"Companies/Departments:"),ke.a.createElement("div",{className:"col-12 p-1"},ke.a.createElement("table",{className:"table table-bordered"},ke.a.createElement("thead",null,ke.a.createElement("tr",null,ke.a.createElement("th",null,"Current"),ke.a.createElement("th",null,"Updated",ke.a.createElement("span",{className:"text-danger"},"*")))),ke.a.createElement("tbody",null,ke.a.createElement("tr",null,ke.a.createElement("td",null,null==d||null===(ve=d.facility_data)||void 0===ve||null===(Ee=ve.mapped_company_departments)||void 0===Ee?void 0:Ee.sort(function(e,l){return e.id-l.id}).map(function(e){return ke.a.createElement("div",{key:null==e?void 0:e.short_name},null==e?void 0:e.short_name,ke.a.createElement("ul",null,null==e?void 0:e.departments.map(function(e){return ke.a.createElement("li",{key:null==e?void 0:e.value},null==e?void 0:e.value)})))})),ke.a.createElement("td",null,null==d||null===(pe=d.parent_companies)||void 0===pe?void 0:pe.sort(function(e,l){return e.id-l.id}).map(function(e){return ke.a.createElement("div",{key:null==e?void 0:e.short_name},null==e?void 0:e.short_name,ke.a.createElement("ul",null,null==e?void 0:e.departments.map(function(e){return ke.a.createElement("li",{key:null==e?void 0:e.value},null==e?void 0:e.value)})))}))))))):ke.a.createElement(Fe.a.Container,{id:"left-tabs-example",activeKey:be,onSelect:function(e){Pe(e)}},ke.a.createElement("div",{className:"row mx-0 mt-2"},ke.a.createElement("div",{className:"col-sm-4"},ke.a.createElement(Re.a,{variant:"pills",className:"flex-column"},Object.keys(s).map(function(e){var l;return ke.a.createElement(Re.a.Item,{key:e},ke.a.createElement(Re.a.Link,{key:e,eventKey:e},null===(l=s[e])||void 0===l?void 0:l.short_name," ",0<(null===(l=s[e])||void 0===l?void 0:l.departments.length)?ke.a.createElement(ke.a.Fragment,null,"(",null===(l=s[e])||void 0===l?void 0:l.departments.length,")"):null))}))),ke.a.createElement("div",{className:"col-sm-8"},ke.a.createElement(Fe.a.Content,{className:"pt-0"},Object.keys(s).map(function(e){return ke.a.createElement(ke.a.Fragment,null,ke.a.createElement(Fe.a.Pane,{key:e,eventKey:e},ke.a.createElement("label",null,"Departments"),ke.a.createElement("ul",{className:"mt-3",style:{height:"calc(100vh - 560px)",overflowY:"auto"}},null===(e=s[e].departments)||void 0===e?void 0:e.map(function(e){return ke.a.createElement("li",{key:null==e?void 0:e.id},null==e?void 0:e.value," ")}))))})),ke.a.createElement("div",null))))):ke.a.createElement(Fe.a.Container,{id:"left-tabs-example",activeKey:be,onSelect:function(e){Pe(e)}},ke.a.createElement("div",{className:"row mx-0 mt-2"},ke.a.createElement("div",{className:"col-sm-4"},ke.a.createElement(Re.a,{variant:"pills",className:"flex-column"},Object.keys(s).map(function(e){var l;return ke.a.createElement(Re.a.Item,{key:e},ke.a.createElement(Re.a.Link,{key:e,eventKey:e},null===(l=s[e])||void 0===l?void 0:l.short_name," ",0<(null===(l=s[e])||void 0===l?void 0:l.departments.length)?ke.a.createElement(ke.a.Fragment,null,"(",null===(l=s[e])||void 0===l?void 0:l.departments.length,")"):null))}))),ke.a.createElement("div",{className:"col-sm-8"},ke.a.createElement(Fe.a.Content,{className:"pt-0"},Object.keys(s).map(function(e){return ke.a.createElement(ke.a.Fragment,null,ke.a.createElement(Fe.a.Pane,{key:e,eventKey:e},ke.a.createElement("label",null,"Departments"),ke.a.createElement("ul",{className:"mt-3",style:{height:"calc(100vh - 320px)",overflowY:"auto"}},null===(e=s[e].departments)||void 0===e?void 0:e.map(function(e){return ke.a.createElement("li",{key:null==e?void 0:e.id},null==e?void 0:e.value," ")}))))})),ke.a.createElement("div",null))))))))))))}var l=n(46),Ae=n.n(l),l=n(8),he=n.n(l),Oe=n(0),ke=n.n(Oe),xe=n(834),l=n(7),l=n.n(l),De=n(784),Ie=n(65),Le=n(247),Fe=n(761),Re=n(347),a=n(598),we=n.n(a);e.propTypes={facilityData:l.a.object,closeModal:l.a.func,requestedFrom:l.a.string},t.a=e}.call(this,n(246))}}]);