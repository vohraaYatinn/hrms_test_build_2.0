(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{924:function(i,e,t){"use strict";t.r(e);var l=t(4),s=t.n(l),l=t(46),Fl=t.n(l),Wl=t(0),Jl=t.n(Wl),Bl=(t(595),t(158)),zl=t(777),l=t(8),Gl=t.n(l),ql=t(795),Kl=t(106),Ql=t(779),Ul=t(43),Rl=t(769),Vl=t(787),Xl=t(783),Zl=t(814);function a(t,e){var l,a=Object.keys(t);return Object.getOwnPropertySymbols&&(l=Object.getOwnPropertySymbols(t),e&&(l=l.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,l)),a}function Tl(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach(function(e){s()(t,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))})}return t}e.default=function(){var e,t,l,a,u,d,r,v,x,N,E,_,b,p,f,y,g,h,S,A,L,O,w,P,j,C,k,D,I,M,H,Y,F,W,J,G,R,T,B,z,q,K,Q,U,V,X,Z,$,ee,te,le,ae,ie,se,oe,me,ne,ce,ue,de,re,ve,xe,Ne,Ee,_e,be,pe,fe,ye,ge,he,Se,Ae,Le,Oe,we,Pe,je,Ce,ke,De,Ie,Me,He,Ye,Fe,We,Je,Ge,Re,Te,Be,ze,qe,Ke,Qe,Ue,Ve,Xe,Ze,$e,et,tt,lt,at,it,st,ot,mt,nt,ct,ut,dt,rt,vt,xt,Nt,Et,_t,bt,pt,ft,yt,gt,ht,St,At,Lt,Ot,wt,Pt,jt,Ct,kt,Dt,It,Mt,Ht,Yt,Ft,Wt,Jt,Gt,Rt,Tt,Bt,zt,qt,Kt,Qt,Ut,Vt,Xt,Zt,$t,el,tl,ll,al,il,sl,ol,ml,nl,cl,ul,dl,rl,vl,xl,Nl,El,_l,bl,pl,fl,yl,gl,hl,Sl,Al,Ll,Ol,wl,Pl,jl,Cl,i=Rl.a.Panel,s=Object(Wl.useState)(window.innerWidth),s=Fl()(s,2),o=s[0],s=(s[1],o<=992),o=new Date,m=Object(Bl.a)(),m=Fl()(m,4),n=m[0],c=m[1],kl=m[2],Dl=m[3],m=Object(Wl.useState)({showMessage:!1,isError:!0,message:""}),m=Fl()(m,2),Il=m[0],Ml=m[1],Hl=Object(Wl.useRef)(c),Yl=Object(Ul.useHistory)();return Object(Wl.useEffect)(function(){Dl(Object(ql.d)())},[]),Object(Wl.useEffect)(function(){var e,t,l;Hl.current!==c&&Ml({showMessage:!0,isError:!0,message:(null==c||null===(e=c.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==c||null===(l=c.response)||void 0===l?void 0:l.data)||(null==c?void 0:c.message)}),Hl.current=c},[c]),Object(Wl.useEffect)(function(){},[n]),Jl.a.createElement("div",{className:"page-wrapper"},Jl.a.createElement("div",{className:"content container-fluid"},Il.showMessage?Jl.a.createElement(zl.a,{message:Il.message,dismiss:function(){Ml(function(e){return Tl(Tl({},e),{},{showMessage:!1})})},isError:Il.isError}):null,Jl.a.createElement("div",{className:"page-header"},Jl.a.createElement("div",{className:"row align-items-center"},Jl.a.createElement(Xl.a,null),Jl.a.createElement("div",{className:"col-auto float-end ml-auto"},Jl.a.createElement(Vl.a,{scope:Zl.a},null!=n&&null!==(e=n.data)&&void 0!==e&&e.length?Jl.a.createElement("button",{className:"btn btn-primary submit-btn",onClick:function(){return Yl.push("/app/salary/tax-declaration/edit")}},Jl.a.createElement("i",{className:"fa fa-plus"})," Edit Tax Declaration"):null)))),kl?Jl.a.createElement(Ql.a,null):null!=n&&null!==(t=n.data)&&void 0!==t&&t.length?Jl.a.createElement("div",{className:"modal-body",style:{height:"600px",overflowY:"scroll"}},Jl.a.createElement("div",{className:"row",style:{marginBottom:"20px"}},Jl.a.createElement("div",{className:"col-md-12 col-6 p-1"}," ",Jl.a.createElement("span",{style:{fontWeight:"bold"}},"Financial Year:"),Jl.a.createElement("span",null,"  ",null==n||null===(l=n.data)||void 0===l||null===(a=l[0])||void 0===a?void 0:a.declaration_year)),Jl.a.createElement("div",{className:"col-md-12 col-6 p-1"},Jl.a.createElement("span",{style:{fontWeight:"bold"}},"Tax Scheme:"),Jl.a.createElement("span",null,"  ","New Scheme"==(null==n||null===(u=n.data)||void 0===u||null===(d=u[0])||void 0===d?void 0:d.tax_scheme)?"New Scheme":" Existing Scheme")),Jl.a.createElement("div",{className:"col-6 p-1"},Jl.a.createElement("span",{style:{fontWeight:"bold"}},"Employee Name:"),Jl.a.createElement("span",null," ",null!=n&&null!==(r=n.data)&&void 0!==r&&null!==(v=r[0])&&void 0!==v&&null!==(x=v.employee)&&void 0!==x&&x.full_name?null==n||null===(N=n.data)||void 0===N||null===(E=N[0])||void 0===E||null===(_=E.employee)||void 0===_?void 0:_.full_name:"N/A")),Jl.a.createElement("div",{className:"col-6 p-1"},Jl.a.createElement("span",{style:{fontWeight:"bold"}},"Employee ID:"),Jl.a.createElement("span",null," ",null!=n&&null!==(b=n.data)&&void 0!==b&&null!==(p=b[0])&&void 0!==p&&null!==(f=p.employee)&&void 0!==f&&f.user_id?null==n||null===(y=n.data)||void 0===y||null===(g=y[0])||void 0===g||null===(h=g.employee)||void 0===h?void 0:h.user_id:"N/A")),Jl.a.createElement("div",{className:"col-6 p-1"},Jl.a.createElement("span",{style:{fontWeight:"bold"}},"Last Modified at:"),Jl.a.createElement("span",null,"  ",new Gl.a(null==n||null===(S=n.data)||void 0===S||null===(A=S[0])||void 0===A?void 0:A.created_at).format("D MMM YYYY"))),Jl.a.createElement(Rl.a,{accordion:!0},Jl.a.createElement(i,{header:"Section 80C",key:"0"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Life Insurance Premium Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(L=n.data)&&void 0!==L&&null!==(O=L[0])&&void 0!==O&&O.lic_premium_sec_80c?"₹ "+(null==n||null===(w=n.data)||void 0===w||null===(P=w[0])||void 0===P?void 0:P.lic_premium_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," Tuition Fee Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(j=n.data)&&void 0!==j&&null!==(C=j[0])&&void 0!==C&&C.tution_fee_sec_80c?"₹ "+(null==n||null===(k=n.data)||void 0===k||null===(D=k[0])||void 0===D?void 0:D.tution_fee_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Housing Loan (Principal amount only) Sec 80C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(I=n.data)&&void 0!==I&&null!==(M=I[0])&&void 0!==M&&M.housing_loan_sec_80c?"₹ "+(null==n||null===(H=n.data)||void 0===H||null===(Y=H[0])||void 0===Y?void 0:Y.housing_loan_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Contribution to Public Provident Fund Sec 80C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(F=n.data)&&void 0!==F&&null!==(W=F[0])&&void 0!==W&&W.ppf_sec_80c?"₹ "+(null==n||null===(J=n.data)||void 0===J||null===(G=J[0])||void 0===G?void 0:G.ppf_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Mutual Fund Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(R=n.data)&&void 0!==R&&null!==(T=R[0])&&void 0!==T&&T.mutual_fund_sec_80c?"₹ "+(null==n||null===(B=n.data)||void 0===B||null===(z=B[0])||void 0===z?void 0:z.mutual_fund_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"NSC Bond Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(q=n.data)&&void 0!==q&&null!==(K=q[0])&&void 0!==K&&K.nsc_bonds_sec_80c?"₹ "+(null==n||null===(Q=n.data)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.nsc_bonds_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Tax Saving Fixed Deposits Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(V=n.data)&&void 0!==V&&null!==(X=V[0])&&void 0!==X&&X.tax_saving_fd_sec_80c?"₹ "+(null==n||null===(Z=n.data)||void 0===Z||null===($=Z[0])||void 0===$?void 0:$.tax_saving_fd_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," Others Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ee=n.data)&&void 0!==ee&&null!==(te=ee[0])&&void 0!==te&&te.other_sec_80c?"₹ "+(null==n||null===(le=n.data)||void 0===le||null===(ae=le[0])||void 0===ae?void 0:ae.other_sec_80c.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Other Remarks Sec 80 C :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ie=n.data)&&void 0!==ie&&null!==(se=ie[0])&&void 0!==se&&se.other_remarks_sec_80c?null==n||null===(oe=n.data)||void 0===oe||null===(me=oe[0])||void 0===me?void 0:me.other_remarks_sec_80c:"N/A")))),Jl.a.createElement(i,{header:"NPS Sec 80CCD(1B)",key:"1"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"NPC Sec 80 CCD :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ne=n.data)&&void 0!==ne&&null!==(ce=ne[0])&&void 0!==ce&&ce.nps_sec_80ccd?"₹ "+(null==n||null===(ue=n.data)||void 0===ue||null===(de=ue[0])||void 0===de?void 0:de.nps_sec_80ccd.toLocaleString())+" /-":"N/A")))),Jl.a.createElement(i,{header:"Section 80 D",key:"2"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Medical Insurance Premium (Self/Spouse/Child) Sec 80D :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(re=n.data)&&void 0!==re&&null!==(ve=re[0])&&void 0!==ve&&ve.medical_insurance_premium_self_sec_80d?"₹ "+(null==n||null===(xe=n.data)||void 0===xe||null===(Ne=xe[0])||void 0===Ne?void 0:Ne.medical_insurance_premium_self_sec_80d.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Any Senior Citizen in Self/Spouse/Child in respect of whom Medical Insurance Premium is paid (Yes/No) :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Ee=n.data)&&void 0!==Ee&&null!==(_e=Ee[0])&&void 0!==_e&&_e.is_medical_insurance_self_senior_paid_sec_80d?"Yes":"No")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Medical Insurance Premium (Parents) Sec 80 D:"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(be=n.data)&&void 0!==be&&null!==(pe=be[0])&&void 0!==pe&&pe.medical_insurance_premium_senior_sec_80d?"₹ "+(null==n||null===(fe=n.data)||void 0===fe||null===(ye=fe[0])||void 0===ye?void 0:ye.medical_insurance_premium_senior_sec_80d.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Any Senior Citizen in Parents in respect of whom Medical Insurance Premium is paid(Yes/No) :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ge=n.data)&&void 0!==ge&&null!==(he=ge[0])&&void 0!==he&&he.is_medical_insurance_senior_paid_sec_80d?"Yes":"No")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Preventive health Checkup(Self/Spouse/Child/Parents) Sec 80D :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Se=n.data)&&void 0!==Se&&null!==(Ae=Se[0])&&void 0!==Ae&&Ae.health_checkup_sec_80d?"₹ "+(null==n||null===(Le=n.data)||void 0===Le||null===(Oe=Le[0])||void 0===Oe?void 0:Oe.health_checkup_sec_80d.toLocaleString())+" /-":"N/A")))),Jl.a.createElement(i,{header:"Section 80 E",key:"3"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Interest on Education Loan Sec 80E :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(we=n.data)&&void 0!==we&&null!==(Pe=we[0])&&void 0!==Pe&&Pe.education_loan_interest_sec_80E?"₹ "+(null==n||null===(je=n.data)||void 0===je||null===(Ce=je[0])||void 0===Ce?void 0:Ce.education_loan_interest_sec_80E.toLocaleString())+" /-":"N/A")))),Jl.a.createElement(i,{header:"Section 80 G",key:"4"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," Donation Sec 80G:"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ke=n.data)&&void 0!==ke&&null!==(De=ke[0])&&void 0!==De&&De.donation_sec_80G?"₹ "+(null==n||null===(Ie=n.data)||void 0===Ie||null===(Me=Ie[0])||void 0===Me?void 0:Me.donation_sec_80G.toLocaleString())+" /-":"N/A")))),Jl.a.createElement(i,{header:"Housing Loan Interest (Self Occupied property)",key:"5"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Interest on Housing Loan (Self Occupied property):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(He=n.data)&&void 0!==He&&null!==(Ye=He[0])&&void 0!==Ye&&Ye.housing_loan_interest_self?"₹ "+(null==n||null===(Fe=n.data)||void 0===Fe||null===(We=Fe[0])||void 0===We?void 0:We.housing_loan_interest_self.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"PAN of the lender (Home Loan):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Je=n.data)&&void 0!==Je&&null!==(Ge=Je[0])&&void 0!==Ge&&Ge.self_pan_card?null==n||null===(Re=n.data)||void 0===Re||null===(Te=Re[0])||void 0===Te?void 0:Te.self_pan_card:"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Name of the lender (Home Loan):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Be=n.data)&&void 0!==Be&&null!==(ze=Be[0])&&void 0!==ze&&ze.self_name?null==n||null===(qe=n.data)||void 0===qe||null===(Ke=qe[0])||void 0===Ke?void 0:Ke.self_name:"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Address of the lender (Home Loan):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Qe=n.data)&&void 0!==Qe&&null!==(Ue=Qe[0])&&void 0!==Ue&&Ue.self_address?null==n||null===(Ve=n.data)||void 0===Ve||null===(Xe=Ve[0])||void 0===Xe?void 0:Xe.self_address:"N/A")))),Jl.a.createElement(i,{header:"Interest on Housing Loan (Letout property)",key:"6"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Interest on Housing Loan (Letout property):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Ze=n.data)&&void 0!==Ze&&null!==($e=Ze[0])&&void 0!==$e&&$e.housing_loan_interest_letout?"₹ "+(null==n||null===(et=n.data)||void 0===et||null===(tt=et[0])||void 0===tt?void 0:tt.housing_loan_interest_letout.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Rental Income (if any):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(lt=n.data)&&void 0!==lt&&null!==(at=lt[0])&&void 0!==at&&at.rental_income?"₹ "+(null==n||null===(it=n.data)||void 0===it||null===(st=it[0])||void 0===st?void 0:st.rental_income.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"PAN of the lender (Home Loan):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ot=n.data)&&void 0!==ot&&null!==(mt=ot[0])&&void 0!==mt&&mt.lender_pan_card?null==n||null===(nt=n.data)||void 0===nt||null===(ct=nt[0])||void 0===ct?void 0:ct.lender_pan_card:"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Name of the lender (Home Loan):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(ut=n.data)&&void 0!==ut&&null!==(dt=ut[0])&&void 0!==dt&&dt.lender_name?null==n||null===(rt=n.data)||void 0===rt||null===(vt=rt[0])||void 0===vt?void 0:vt.lender_name:"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Address of the lender (Home Loan):"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(xt=n.data)&&void 0!==xt&&null!==(Nt=xt[0])&&void 0!==Nt&&Nt.lender_address?null==n||null===(Et=n.data)||void 0===Et||null===(_t=Et[0])||void 0===_t?void 0:_t.lender_address:"N/A")))),Jl.a.createElement(i,{header:"Rent Paid in the Financial Year",key:"7"},Jl.a.createElement("ul",{className:"custom-ul-tax"},Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"April  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(bt=n.data)&&void 0!==bt&&null!==(pt=bt[0])&&void 0!==pt&&pt.rent_apr?"₹ "+(null==n||null===(ft=n.data)||void 0===ft||null===(yt=ft[0])||void 0===yt?void 0:yt.rent_apr.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"May  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(gt=n.data)&&void 0!==gt&&null!==(ht=gt[0])&&void 0!==ht&&ht.rent_may?"₹ "+(null==n||null===(St=n.data)||void 0===St||null===(At=St[0])||void 0===At?void 0:At.rent_may.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"June  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Lt=n.data)&&void 0!==Lt&&null!==(Ot=Lt[0])&&void 0!==Ot&&Ot.rent_june?"₹ "+(null==n||null===(wt=n.data)||void 0===wt||null===(Pt=wt[0])||void 0===Pt?void 0:Pt.rent_june.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"July  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(jt=n.data)&&void 0!==jt&&null!==(Ct=jt[0])&&void 0!==Ct&&Ct.rent_july?"₹ "+(null==n||null===(kt=n.data)||void 0===kt||null===(Dt=kt[0])||void 0===Dt?void 0:Dt.rent_july.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"August  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(It=n.data)&&void 0!==It&&null!==(Mt=It[0])&&void 0!==Mt&&Mt.rent_aug?"₹ "+(null==n||null===(Ht=n.data)||void 0===Ht||null===(Yt=Ht[0])||void 0===Yt?void 0:Yt.rent_aug.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"September  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Ft=n.data)&&void 0!==Ft&&null!==(Wt=Ft[0])&&void 0!==Wt&&Wt.rent_sep?"₹ "+(null==n||null===(Jt=n.data)||void 0===Jt||null===(Gt=Jt[0])||void 0===Gt?void 0:Gt.rent_sep.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"October  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Rt=n.data)&&void 0!==Rt&&null!==(Tt=Rt[0])&&void 0!==Tt&&Tt.rent_oct?"₹ "+(null==n||null===(Bt=n.data)||void 0===Bt||null===(zt=Bt[0])||void 0===zt?void 0:zt.rent_oct.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"November  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(qt=n.data)&&void 0!==qt&&null!==(Kt=qt[0])&&void 0!==Kt&&Kt.rent_nov?"₹ "+(null==n||null===(Qt=n.data)||void 0===Qt||null===(Ut=Qt[0])||void 0===Ut?void 0:Ut.rent_nov.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"December  "+Gl()(o).year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Vt=n.data)&&void 0!==Vt&&null!==(Xt=Vt[0])&&void 0!==Xt&&Xt.rent_dec?"₹ "+(null==n||null===(Zt=n.data)||void 0===Zt||null===($t=Zt[0])||void 0===$t?void 0:$t.rent_dec.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"January  "+Gl()(o).add(1,"years").year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(el=n.data)&&void 0!==el&&null!==(tl=el[0])&&void 0!==tl&&tl.rent_jan?"₹ "+(null==n||null===(ll=n.data)||void 0===ll||null===(al=ll[0])||void 0===al?void 0:al.rent_jan.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"February  "+Gl()(o).add(1,"years").year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(il=n.data)&&void 0!==il&&null!==(sl=il[0])&&void 0!==sl&&sl.rent_feb?"₹ "+(null==n||null===(ol=n.data)||void 0===ol||null===(ml=ol[0])||void 0===ml?void 0:ml.rent_feb.toLocaleString())+" /-":"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"March  "+Gl()(o).add(1,"years").year()," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(nl=n.data)&&void 0!==nl&&null!==(cl=nl[0])&&void 0!==cl&&cl.rent_mar?"₹ "+(null==n||null===(ul=n.data)||void 0===ul||null===(dl=ul[0])||void 0===dl?void 0:dl.rent_mar.toLocaleString())+" /-":"N/A")),Jl.a.createElement("br",null),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Landlord PAN"," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(rl=n.data)&&void 0!==rl&&null!==(vl=rl[0])&&void 0!==vl&&vl.landlord_pan_card?null==n||null===(xl=n.data)||void 0===xl||null===(Nl=xl[0])||void 0===Nl?void 0:Nl.landlord_pan_card:"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Landlord Name"," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(El=n.data)&&void 0!==El&&null!==(_l=El[0])&&void 0!==_l&&_l.landlord_name?null==n||null===(bl=n.data)||void 0===bl||null===(pl=bl[0])||void 0===pl?void 0:pl.landlord_name:"N/A")),Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Landlord Address"," :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(fl=n.data)&&void 0!==fl&&null!==(yl=fl[0])&&void 0!==yl&&yl.landlord_address?null==n||null===(gl=n.data)||void 0===gl||null===(hl=gl[0])||void 0===hl?void 0:hl.landlord_address:"N/A")))),Jl.a.createElement(i,{header:"Other Income (If any)",key:"8"},Jl.a.createElement("ul",null,Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"},"Other Income :"),Jl.a.createElement("div",{className:"custom-text-tax"},null!=n&&null!==(Sl=n.data)&&void 0!==Sl&&null!==(Al=Sl[0])&&void 0!==Al&&Al.other_income?"₹ "+(null==n||null===(Ll=n.data)||void 0===Ll||null===(Ol=Ll[0])||void 0===Ol?void 0:Ol.other_income.toLocaleString())+" /-":"N/A")))),Jl.a.createElement(i,{header:"Previous Employment Salary",key:"9"},Jl.a.createElement("ul",null,Jl.a.createElement("li",{className:s?"custom-list-items-tax-mobile":"custom-list-items-tax"},Jl.a.createElement("div",{className:s?"custom-title-tax-mobile":"custom-title-tax"}," ","Previous Employment Salary(Applicable if joined after 01-04-2023):"),Jl.a.createElement("div",{className:"custom-text-tax"}," ",null!=n&&null!==(wl=n.data)&&void 0!==wl&&null!==(Pl=wl[0])&&void 0!==Pl&&Pl.previous_employment_salary?null==n||null===(jl=n.data)||void 0===jl||null===(Cl=jl[0])||void 0===Cl?void 0:Cl.previous_employment_salary:"N/A"))))),Jl.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"40px"}}))):Jl.a.createElement(Kl.a,null)))}}}]);