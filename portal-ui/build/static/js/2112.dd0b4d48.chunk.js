"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2112],{32112:function(e,n,t){t.r(n);var a=t(29439),o=t(72791),r=t(51691),i=t(21435),c=t(61889),s=t(60364),l=t(9505),u=t(2148),p=t(62410),f=t(87995),d=t(80184);n.default=function(e){var n=e.deleteOpen,t=e.selectedPVC,m=e.closeDeleteModalAndRefresh,h=(0,s.I0)(),C=(0,o.useState)(""),x=(0,a.Z)(C,2),v=x[0],P=x[1],Z=(0,l.Z)((function(){return m(!0)}),(function(e){return h((0,f.Ih)(e))})),b=(0,a.Z)(Z,2),j=b[0],V=b[1];return(0,d.jsx)(u.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:n,titleIcon:(0,d.jsx)(p.NvT,{}),isLoading:j,onConfirm:function(){v===t.name?V("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.tenant,"/pvc/").concat(t.name)):h((0,f.Ih)({errorMessage:"PVC name is incorrect",detailedError:""}))},onClose:function(){return m(!1)},confirmButtonProps:{disabled:v!==t.name||j},confirmationContent:(0,d.jsxs)(r.Z,{children:["To continue please type ",(0,d.jsx)("b",{children:t.name})," in the box.",(0,d.jsx)(c.ZP,{item:!0,xs:12,children:(0,d.jsx)(i.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){P(e.target.value)},label:"",value:v})})]})})}}}]);
//# sourceMappingURL=2112.dd0b4d48.chunk.js.map