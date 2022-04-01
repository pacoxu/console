"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2653],{52653:function(e,t,c){c.r(t);var n=c(70885),a=c(1413),i=c(72791),s=c(60364),o=c(61889),l=c(40986),r=c(64554),u=c(36151),d=c(11135),h=c(25787),p=c(23814),x=c(42649),f=c(56028),m=c(81207),Z=c(92217),y=c(37516),j=c(21435),v=c(13048),g=c(80184),k={setModalErrorSnackMessage:x.zb},S=(0,s.$j)(null,k);t.default=(0,h.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)({},p.bl),p.ID))}))(S((function(e){var t=e.classes,c=e.open,a=e.closeModalAndRefresh,s=e.setModalErrorSnackMessage,d=(0,i.useState)(!1),h=(0,n.Z)(d,2),p=h[0],x=h[1],k=(0,i.useState)(""),S=(0,n.Z)(k,2),b=S[0],C=S[1],P=(0,i.useState)(""),K=(0,n.Z)(P,2),A=K[0],w=K[1],M=(0,i.useState)(""),N=(0,n.Z)(M,2),E=N[0],B=N[1],O=(0,i.useState)(!1),D=(0,n.Z)(O,2),I=D[0],T=D[1],z=(0,i.useState)(!1),R=(0,n.Z)(z,2),Y=R[0],_=R[1];(0,i.useEffect)((function(){p&&(Y?m.Z.invoke("POST","/api/v1/service-account-credentials",{policy:b,accessKey:A,secretKey:E}).then((function(e){x(!1),a(e)})).catch((function(e){x(!1),s(e)})):m.Z.invoke("POST","/api/v1/service-accounts",{policy:b}).then((function(e){x(!1),a(e)})).catch((function(e){x(!1),s(e)})))}),[p,x,s,b,a,Y,A,E]);return(0,g.jsx)(f.Z,{modalOpen:c,onClose:function(){a(null)},title:"Create Service Account",titleIcon:(0,g.jsx)(v.fr,{}),children:(0,g.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault(),x(!0)}(e)},children:[p&&(0,g.jsx)(o.ZP,{item:!0,xs:12,children:(0,g.jsx)(l.Z,{})}),(0,g.jsxs)(o.ZP,{container:!0,className:t.modalFormScrollable,children:[(0,g.jsx)(o.ZP,{item:!0,xs:12,children:(0,g.jsxs)("div",{className:t.infoDetails,children:["Service Accounts inherit the policy explicitly attached to the parent user and the policy attached to each group in which the parent user has membership. You can specify an optional JSON-formatted policy below to restrict the Service Account access to a subset of actions and resources explicitly allowed for the parent user.",(0,g.jsx)(r.Z,{sx:{paddingTop:"15px",paddingBottom:"15px"},children:"You cannot modify the Service Account optional policy after saving."})]})}),(0,g.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,g.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,g.jsx)(y.Z,{value:"locking",id:"locking",name:"locking",checked:Y,onChange:function(e){_(e.target.checked)},label:"Customize Credentials"}),Y&&(0,g.jsx)(o.ZP,{item:!0,xs:12,children:(0,g.jsxs)("div",{className:t.stackedInputs,children:[(0,g.jsx)(j.Z,{value:A,label:"Access Key",id:"accessKey",name:"accessKey",placeholder:"Enter Access Key",onChange:function(e){w(e.target.value)}}),(0,g.jsx)(j.Z,{value:E,label:"Secret Key",id:"secretKey",name:"secretKey",placeholder:"Enter Secret Key",onChange:function(e){B(e.target.value)}})]})})]}),(0,g.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,g.jsx)(y.Z,{value:"locking",id:"locking",name:"locking",checked:I,onChange:function(e){T(e.target.checked)},label:"Restrict with policy"}),I&&(0,g.jsx)(o.ZP,{item:!0,xs:12,className:t.codeMirrorContainer,children:(0,g.jsx)(Z.Z,{label:"Policy ",value:b,onBeforeChange:function(e,t,c){C(c)}})})]})]})]}),(0,g.jsx)(o.ZP,{container:!0,children:(0,g.jsxs)(o.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,g.jsx)(u.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){C("")},children:"Clear"}),(0,g.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",disabled:p,children:"Create"})]})})]})})})))}}]);
//# sourceMappingURL=2653.99c5025d.chunk.js.map