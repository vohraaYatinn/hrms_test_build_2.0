(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{771:function(e,i,n){"use strict";var r=n(0),t=n.n(r);i.a=function(){return t.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"10rem"}},t.a.createElement("div",{className:"spinner-border text-primary",style:{height:"5rem",width:"5rem"},role:"status"},t.a.createElement("span",{className:"visually-hidden"},"Loading...")))}},775:function(o,e,i){"use strict";i.d(e,"c",function(){return r}),i.d(e,"d",function(){return t}),i.d(e,"b",function(){return a}),i.d(e,"l",function(){return u}),i.d(e,"k",function(){return d}),i.d(e,"j",function(){return l}),i.d(e,"h",function(){return s}),i.d(e,"f",function(){return c}),i.d(e,"g",function(){return p}),i.d(e,"e",function(){return m}),i.d(e,"a",function(){return f}),i.d(e,"i",function(){return g});var e=i(8),n=i.n(e),r=function(r,t,a){return new Promise(function(n,e){var i;!(r instanceof File||"number"==typeof r)||"number"==typeof r?n(!0):((i=new FileReader).readAsDataURL(r),i.onload=function(e){var i=new Image;i.src=e.target.result,i.onload=function(){(null==i?void 0:i.width)<=t&&(null==i?void 0:i.height)<=a?n(!0):n(!1)}})})},t=function(e,i){return"number"==typeof e||(!e||(null==e?void 0:e.size)<1e3*i)},a=function(e,i){return"number"==typeof e||(!e||i.includes(null==e?void 0:e.type))},u=function(e){return e&&(null==e?void 0:e.replace(/^[a-z]|([\s-_][a-z])/gi,function(e){var i,n;return null==e||null===(i=e.toUpperCase())||void 0===i||null===(n=i.replace("-"," "))||void 0===n?void 0:n.replace("_"," ")}))},d=function(e,n){return null==e?void 0:e.reduce(function(e,i){return(e[i[n][n]]=e[i[n][n]]||[]).push(i),e},{})},l=function(e,n){return null==e?void 0:e.reduce(function(e,i){return(e[i[n]]=e[i[n][n]]||[]).push(i),e},{})},s=function(e,i){return e+"-"+(new n.a).format("YYYY-MM-DD-HH-mm-ss")+"."+i},c=function(e){var i=Math.floor(e/3600),n=Math.floor((e-3600*i)/60),e=e-3600*i-60*n,r="";return 0<i&&(r+=i+"h "),0<n&&(r+=n+"m "),0<e&&(r+=e+"s "),r},p=function(e){return{employee_id:null==e?void 0:e.employee_id,employee_id__full_name:null==e?void 0:e.full_name,employee_id__user_id:null==e?void 0:e.user_id}},m=function(e,i){return e.length===i.length&&e.every(function(n){return i.some(function(i){return Object.keys(n).every(function(e){return n[e]===i[e]})})})},f=function(e){return null==e?void 0:e.toLowerCase().replace(/\b\w/g,function(e){return null==e?void 0:e.toUpperCase()})},g=function(e,n){return null==e?void 0:e.reduce(function(e,i){return e[i[n]]=i,e},{})}},797:function(o,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"j",function(){return r}),i.d(e,"k",function(){return t}),i.d(e,"v",function(){return a}),i.d(e,"s",function(){return u}),i.d(e,"b",function(){return d}),i.d(e,"t",function(){return l}),i.d(e,"z",function(){return s}),i.d(e,"w",function(){return c}),i.d(e,"c",function(){return p}),i.d(e,"g",function(){return m}),i.d(e,"e",function(){return f}),i.d(e,"f",function(){return g}),i.d(e,"o",function(){return b}),i.d(e,"p",function(){return q}),i.d(e,"q",function(){return h}),i.d(e,"l",function(){return j}),i.d(e,"x",function(){return v}),i.d(e,"i",function(){return w}),i.d(e,"u",function(){return y}),i.d(e,"r",function(){return D}),i.d(e,"n",function(){return R}),i.d(e,"m",function(){return N}),i.d(e,"y",function(){return I}),i.d(e,"h",function(){return A}),i.d(e,"a",function(){return z});var n=/^[a-zA-Z0-9_ .-]*$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/,t=/^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/,a=/^((91)?)[6-9]{1}[0-9]{9}$/,u=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,d=/(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/,l=/^([A-Z a-z]){1}([0-9]){7}$/,s=/^([a-zA-Z]){3}([0-9]){7}?$/,c=/^[1-9]{1}[0-9]{5}$/,p=/^[a-z_.-]*$/,m=/^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,f=/^[0-9]{9,18}$/,g=/^([A-Za-z]){4}0([A-Za-z0-9]){6}/,b=/^[A-Za-z]*$/,q=/^[A-Za-z]{1}$/,h=/^[A-Za-z]{2}$/,j=/^[A-Za-z][A-Za-z .]+\s*$/,v=/^\S/,w=/^[A-Za-z][A-Za-z ]+\s*$/,y=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@,#$&*()])[A-Za-z\d@,#$&*()]{8,14}$/,D=/^[0-9]{6}$/,R=/^(?!\s+$).*/,N=/^(?![!@#$~ ^%&*?><.,:;'"[/(){}_+=/|-]+$)/,I=/^[0-9]{12}$/,A=/^[A-Z]{3}$/,z=/^[0-9a-zA-Z]{6,17}$/},801:function(o,e,i){"use strict";i.d(e,"d",function(){return s}),i.d(e,"c",function(){return c}),i.d(e,"g",function(){return p}),i.d(e,"j",function(){return m}),i.d(e,"e",function(){return f}),i.d(e,"b",function(){return g}),i.d(e,"f",function(){return q}),i.d(e,"a",function(){return j}),i.d(e,"h",function(){return v}),i.d(e,"k",function(){return w}),i.d(e,"i",function(){return y});var r=i(588),t=i(747),n=i(745),a=i(775),u=i(797),d=new Date;function l(e){var e=new Date(e),i=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2);return[e.getYear(),i,n].join("-")}d.setDate(+d.getDate());var e=r.g().shape({jobDetails:r.g().shape({age:r.f(),departmentId:r.i().required("Department  is Required"),company:r.i().required("Company is Required"),gradeId:r.i().required("Grade  is Required"),designationId:r.i().required("Designation  is Required"),locationId:r.i().required("Location is Required"),effectiveFrom:r.d().required(" Effective From Date is Required"),shiftTimings:r.i().required("Shift Timings is Required"),employmentType:r.i().required("Employee Type is Required"),reportingManager:r.i().when("reportingManagerValidator",function(e){return e?r.i().required("Reporting Head is Required"):r.i().nullable()}),employmentLevel:r.i().when("age",function(i){return i&&58<=i?r.i().required("Employment Level  is Required").test("employmentLevel","This employment Level can't be set for age more than or equal to 58",function(e){return!(58<=i&&6!=e)}):r.i().required("Employment Level  is Required")}),noticePeriod:r.i().required("Notice Period is Required and must be Greater Than 0").test("noticePeriod","Invalid Notice Period",function(e){return 0<e})})}),s=r.g().shape({educationType:r.i().required("Education Type is Required"),educationLevel:r.i().required(" Education Level is Required"),instituteName:r.i().required(" Institute Name is Required"),instituteCity:r.i().required(" Institute City is Required"),instituteState:r.i().required(" Institute State is Required"),studiedFrom:r.i().required(" From Date is Required").test("studiedFrom","Invalid StudiedFrom",function(e){return new Date(e)<=new Date}),studiedTo:r.i().when("studiedFrom",function(i){return i?r.i().required("Studied To is required").test("studiedTo","invalid StudiedTo",function(e){return new Date(e)>new Date(i)&&new Date(e)<new Date}):r.i().required("Studied To is required")}),provisionalCertificateFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(a.d)(e,1024)}),courseCompletionCertificateFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(a.d)(e,1024)}),otherEducationCertificateFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(a.d)(e,1024)})}),c=r.g().shape({name:r.i().required("Name  is Required").matches(u.l,"invalid  Name").nullable(),gender:r.i().required("Gender is Required").nullable(),dob:r.d().required("Date Of Birth is Required").nullable().test("dob","Invalid Date of Birth",function(e){return new Date(e)<=new Date}),relation:r.i().required("Relation is Required").nullable(),isNominee:r.c().required("Nominee is required"),address:r.i().when("isNominee",function(e){return(e?r.i().required("Address is required "):r.i()).nullable()}),phoneNumber:r.i().when("isNominee",function(e){return(e?r.i().required("Phone Number is required "):r.i()).matches(u.v,"Invalid Phone Number").nullable()}),aadharNumber:r.i().when("isNominee",function(e){return(e?r.i().required("Aadhar Number is required "):r.i()).matches(u.b,"Invalid Aadhar Number").nullable()})}),p=r.g().shape({jobType:r.i().required("job Type  is Required"),jobDesignation:r.i().required("Job Designation  is Required").matches(u.l,"invalid Job Designation").nullable(),companyName:r.i().required("Company Name  is Required").nullable(),companyCity:r.i().required("Company City  is Required"),companyState:r.i().required("Company State  is Required"),workedFrom:r.i().required("WorkedFrom  is Required").nullable(),relievingLetter:r.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(a.d)(e,1024)}),experienceLetter:r.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(a.d)(e,1024)}),paySlip:r.e().test("fileFormat","jpeg, jpg, png, pdf files only accepted",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 1 Mb",function(e){return Object(a.d)(e,1024)}),workedTo:r.i().when("workedFrom",function(i){return i?r.i().required("Worked To is required").nullable().test("workedTo","invalid workedTo",function(e){return new Date(e)>new Date(i)&&new Date(e)<new Date}):r.i().required("Worked To is required")})}),m=r.g().shape({referenceType:r.i().required("Reference Type  is Required"),name:r.i().required("Name is Required").matches(u.l,"Invalid Name"),company:r.i().nullable(),phoneNumber:r.i().when("referenceType",function(e){return"I"===e?r.i().matches(u.v,"Invalid Phone Number"):r.i().matches(u.v,"Invalid Phone Number").required("Phone Number is Required")}),email:r.i().matches(u.j,"Invalid Email").nullable(),referredEmployeeId:r.i().when("referenceType",function(e){return"I"===e?r.i().required("Employee ID is Required"):r.i().nullable()})}),f=r.g().shape({departmentId:r.i().required("Department  is Required"),company:r.i().required("Company is Required"),gradeId:r.i().required("Grade  is Required"),designationId:r.i().required("Designation  is Required"),locationId:r.i().required("Location is Required"),effectiveFrom:r.i().when(["id","minEffectiveFrom"],function(e,n){return e?r.i().required("Effective To is required"):r.i().required("Effective From To is required").test("effectiveFrom","invalid Effective From",function(e){var i=new Date;return i.setDate(i.getDate()-n),l(e)>=l(i)&&l(e)<=l(d)})}),employmentType:r.i().required("Employee Type is Required"),reportingManager:r.i().required("Reporting Head is Required"),employmentLevel:r.i().required("Employment Level  is Required"),noticePeriod:r.i().required("Notice Period is Required").test("noticePeriod","Invalid Notice Period",function(e){return 0<e})}),g=(r.g().shape({basicDetails:r.g().shape({fullName:r.i().required("Full Name is Required").matches(u.l,"invalid Full Name"),joiningDate:r.i().required("Joining Date is Required"),probationDuration:r.i().nullable()})}),r.g().shape({basicDetails:r.g().shape({fullName:r.i().required("Full Name is Required").matches(u.l,"invalid Full Name"),joiningDate:r.i().required("Joining Date is Required")}),nameChangeProofCertificate:r.e().when("basicDetails.nameChangeValidator",function(e){if(e)return r.e().required("Name Change Proof Certificate Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),nameChangeProofId:r.e().when("basicDetails.nameChangeValidator",function(e){if(e)return r.e().required("New ID Proof Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),certificateType:r.i().when("basicDetails.nameChangeValidator",function(e){if(e)return r.i().required("Certificate Type Is Required")})})),i=r.g().shape({basicDetails:r.g().shape({fullName:r.i().required("Full Name is Required").matches(u.l,"invalid Full Name"),joiningDate:r.i().required("Joining Date is Required"),probationDuration:r.i().nullable()})}),b=(r.g().shape({personalDetails:r.g().shape({gender:r.i().required("Gender is Required"),dob:r.d().required("Date Of Birth is Required").nullable().test("dob","Invalid Date of Birth",function(e){return 18<=Object(t.a)(new Date,new Date(e))&&Object(t.a)(new Date,new Date(e))<=100}),personalPhone:r.i().required("Phone Number is Required").matches(u.v,"Invalid Phone Number").nullable(),workPhone:r.i().matches(u.v,"Invalid Phone Number").nullable(),esiNumber:r.i().matches(u.a,"Invalid ESI Number").nullable(),aadhaarNumber:r.i().required("Aadhar Number is Required").matches(u.b,"Invalid Aadhar Number").nullable(),workEmail:r.i().matches(u.j,"Invalid Email").nullable(),personalEmail:r.i().matches(u.j,"Invalid Email").nullable(),maritalStatus:r.i().required("Maritial Status is Required"),panNumber:r.i().matches(u.s,"Invalid Pan Card Number").nullable(),emergencyContactNumber:r.i().matches(u.v,"Invalid Phone Number").nullable(),emergencyContactRelation:r.i().matches(u.l,"Invalid emergency Contact Relation"),emergencyContactName:r.i().matches(u.l,"Invalid emergency Contact Name"),passportNumber:r.i().matches(u.t,"Invalid Passport Number").nullable(),voterNumber:r.i().matches(u.z,"Invalid Voter Id").nullable(),bankAccountNumber:r.i().matches(u.e,"Invalid Bank Account Number").nullable(),bankIfscCode:r.i().when("bankAccountNumber",function(e){return(e?r.i().required("Bank IFSC Code  is Required"):r.i()).matches(u.f,"Invalid Bank Ifsc Code").nullable()})})}),r.g().shape({profilePic:r.e().test("fileFormat","jpeg, jpg, png formats only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png"])}).test("fileSize","Max size accepted is 20kb",function(e){return Object(a.d)(e,20)}),aadharCardFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),bankAccountProof:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),panCardFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),passportFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),voterCardFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),drivingLicenseFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),personalDetails:r.g().shape({gender:r.i().required("Gender is Required"),dob:r.d().required("Date Of Birth is Required").nullable().test("dob","Invalid Date of Birth",function(e){return 15<=Object(t.a)(new Date,new Date(e))&&Object(t.a)(new Date,new Date(e))<=100}),personalPhone:r.i().required("Phone Number is Required").matches(u.v,"Invalid Phone Number").nullable(),workPhone:r.i().matches(u.v,"Invalid Phone Number").nullable(),esiNumber:r.i().matches(u.a,"Invalid ESI Number").nullable(),aadhaarNumber:r.i().required("Aadhar Number is Required").matches(u.b,"Invalid Aadhar Number").nullable(),workEmail:r.i().matches(u.j,"Invalid Email").nullable(),personalEmail:r.i().matches(u.j,"Invalid Email").nullable(),maritalStatus:r.i().required("Maritial Status is Required").nullable(),panNumber:r.i().matches(u.s,"Invalid Pan Card Number").nullable(),emergencyContactNumber:r.i().matches(u.v,"Invalid Phone Number").nullable(),emergencyContactRelation:r.i().matches(u.l,"Invalid emergency Contact Relation").nullable(),emergencyContactName:r.i().matches(u.l,"Invalid emergency Contact Name").nullable(),passportNumber:r.i().matches(u.t,"Invalid Passport Number").nullable(),voterNumber:r.i().matches(u.z,"Invalid Voter Id").nullable(),bankAccountNumber:r.i().matches(u.e,"Invalid Bank Account Number").nullable(),bankIfscCode:r.i().when("bankAccountNumber",function(e){return(e?r.i().required("Bank IFSC Code  is Required"):r.i()).matches(u.f,"Invalid Bank Ifsc Code").nullable()}),uanNumber:r.i().matches(u.y,"Invalid Uan Number").nullable(),bankBranchName:r.i().nullable(),bankAddress:r.i().nullable(),bankState:r.i().nullable(),bankCity:r.i().nullable(),presentAddressLine1:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),presentAddressState:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),presentAddressCity:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),presentAddressPincode:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required").matches(u.w,"invalid Pincode"):r.i().nullable()}),permanentAddressLine1:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),permanentAddressState:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),permanentAddressCity:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),permanentAddressPincode:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required").matches(u.w,"invalid Pincode"):r.i().nullable()}),spouseName:r.i().when(["maritalStatus","gender"],function(e,i){return("married"===e&&"F"===i?r.i().required("Spouse Name is Required").matches(u.l,"invalid Spouse Name"):r.i()).nullable()}),marriageDate:r.d().when(["maritalStatus","gender","dob"],function(e,i,n){return"married"===e&&"F"===i?r.d().required("Marriage Date is Required").nullable().test("MarriageDate","Invalid Marriage Date",function(e){return new Date>=new Date(e)&&18<=Object(t.a)(new Date(e),new Date(n))}):"married"===e&&"M"===i?r.d().nullable().test("MarriageDate","Invalid Marriage Date",function(e){return!e||new Date>=new Date(e)&&18<=Object(t.a)(new Date(e),new Date(n))}):r.d().nullable()})})})),q=r.g().shape({aadharCardFile:r.e().when("personalDetails.aadhaarChangeValidator",function(e){return e?r.e().required("Aadhaar File Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}):r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),bankAccountProof:r.e().when("personalDetails.bankChangeValidator",function(e){return e?r.e().required("Bank Proof File Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}):r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),panCardFile:r.e().when("personalDetails.panChangeValidator",function(e){return e?r.e().required("Pan Card File Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}):r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),permanentAddressChangeProof:r.e().when("personalDetails.permanentAddressChangeValidator",function(e){if(e)return r.e().required("Permanent Address Change Proof Certificate Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),presentAddressChangeProof:r.e().when("personalDetails.presentAddressChangeValidator",function(e){if(e)return r.e().required("Present Address Change Proof Certificate Is Required").test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)})}),profilePic:r.e().test("fileFormat","jpeg, jpg, png formats only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png"])}).test("fileSize","Max size accepted is 20kb",function(e){return Object(a.d)(e,20)}),passportFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),voterCardFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),drivingLicenseFile:r.e().test("fileFormat","jpeg, jpg, png, pdf files only",function(e){return Object(a.b)(e,["image/jpeg","image/jpg","image/png","application/pdf"])}).test("fileSize","Max size accepted is 500kb",function(e){return Object(a.d)(e,500)}),personalDetails:r.g().shape({gender:r.i().required("Gender is Required"),dob:r.d().required("Date Of Birth is Required").nullable().test("dob","Invalid Date of Birth",function(e){return 15<=Object(t.a)(new Date,new Date(e))&&Object(t.a)(new Date,new Date(e))<=100}),personalPhone:r.i().required("Phone Number is Required").matches(u.v,"Invalid Phone Number").nullable(),workPhone:r.i().matches(u.v,"Invalid Phone Number").nullable(),esiNumber:r.i().matches(u.a,"Invalid ESI Number").nullable(),aadhaarNumber:r.i().required("Aadhar Number is Required").matches(u.b,"Invalid Aadhar Number").nullable(),workEmail:r.i().matches(u.j,"Invalid Email").nullable(),personalEmail:r.i().matches(u.j,"Invalid Email").nullable(),maritalStatus:r.i().required("Maritial Status is Required").nullable(),presentAddressLine1:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),presentAddressState:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),presentAddressCity:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),presentAddressPincode:r.i().when("presentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required").matches(u.w,"invalid Pincode"):r.i().nullable()}),permanentAddressLine1:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),permanentAddressState:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),permanentAddressCity:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required"):r.i().nullable()}),permanentAddressPincode:r.i().when("permanentAddressValidator",function(e){return e?r.i().required("Present Address Line1 is Required").matches(u.w,"invalid Pincode"):r.i().nullable()}),panNumber:r.i().matches(u.s,"Invalid Pan Card Number").nullable(),emergencyContactNumber:r.i().matches(u.v,"Invalid Phone Number").nullable(),emergencyContactRelation:r.i().matches(u.l,"Invalid emergency Contact Relation").nullable(),emergencyContactName:r.i().matches(u.l,"Invalid emergency Contact Name").nullable(),passportNumber:r.i().matches(u.t,"Invalid Passport Number").nullable(),voterNumber:r.i().matches(u.z,"Invalid Voter Id").nullable(),bankAccountNumber:r.i().matches(u.e,"Invalid Bank Account Number").nullable(),bankIfscCode:r.i().when("bankAccountNumber",function(e){return(e?r.i().required("Bank IFSC Code  is Required"):r.i()).matches(u.f,"Invalid Bank Ifsc Code").nullable()}),uanNumber:r.i().matches(u.y,"Invalid Uan Number").nullable(),bankBranchName:r.i().nullable(),bankAddress:r.i().nullable(),bankState:r.i().nullable(),bankCity:r.i().nullable(),spouseName:r.i().when(["maritalStatus","gender"],function(e,i){return("married"===e&&"F"===i?r.i().required("Spouse Name is Required").matches(u.l,"invalid Spouse Name"):r.i()).nullable()}),marriageDate:r.d().when(["maritalStatus","gender","dob"],function(e,i,n){return"married"===e&&"F"===i?r.d().required("Marriage Date is Required").nullable().test("MarriageDate","Invalid Marriage Date",function(e){return new Date>=new Date(e)&&18<=Object(t.a)(new Date(e),new Date(n))}):"married"===e&&"M"===i?r.d().nullable().test("MarriageDate","Invalid Marriage Date",function(e){return!e||new Date>=new Date(e)&&18<=Object(t.a)(new Date(e),new Date(n))}):r.d().nullable()})})}),h=r.g().shape({salaryDetails:r.g().shape({templateId:r.i().required("Template is Required"),ctcPa:r.f().notRequired().min(0,"CTC should be greater than 0"),grossPa:r.f().required("Gross per Month is required").moreThan(0,"Gross should be greater than 0").when("ctcPa",{is:function(e){return!!e},then:r.f().test("max","Gross Per Month should be less than CTC",function(e,i){return e<=parseFloat(i.parent.ctcPa/12)}),otherwise:r.f()})})}),j=e.concat(i).concat(b).concat(h),v=r.g().shape({requestTab:r.i(),employeeId:r.i().when("requestTab",{is:"other",then:r.i().required("Must select employee")}),exitType:r.i().required("Exit Type is Required"),dateOfResignation:r.i().required("Date of Resignation is Required").test("dateOfResignation","Date should be valid and less than 7 days",function(e){return Object(n.a)(new Date(e),new Date)<=7&&0<=Object(n.a)(new Date(e),new Date)}),reason:r.i().required("Reason is required").trim("Reason cannot include leading and trailing spaces"),noticeEndDate:r.i(),requestedLastWorkingDate:r.i().when(["noticeEndDate","dateOfResignation"],function(e,i){i=new Date(new Date(i).getTime()+86400).toString();if(e)return r.d().min(i,"Date should be in Future").required("Requested date is compulsory")})}),w=r.g().shape({destinationReportingManager:r.i().required("reporting head is Required"),employeeId:r.i().required("Employee is Required"),destinationFacility:r.i().required("Destination Facility is required"),destinationDepartment:r.i().required("Destination Department is required"),effectiveFrom:r.i().required("Effective From is required"),comment:r.i().required("Comment is required")}),y=r.g().shape({fromDate:r.i().required("From Date is Required"),companyId:r.i().required("Company is Required"),stateIds:r.a(),departmentIds:r.a(),employmentLevelIds:r.a(),designationIds:r.a(),lockMessage:r.i().trim().required("Lock Message is Required")})}}]);