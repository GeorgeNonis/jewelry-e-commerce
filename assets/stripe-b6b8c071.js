import{a as S,E as j,u as E,aa as g,ab as y,r,ac as o,ad as b,j as e}from"./index-a7dbd6ae.js";import{u as _}from"./useDispatch-7988ad6e.js";const N="_StripeElement_1735s_65",l={"dummy-stripe-form":"_dummy-stripe-form_1735s_2",StripeElement:N,"error-message":"_error-message_1735s_76","success-message":"_success-message_1735s_81"},F=()=>{const{purchaseState:s}=S(i=>i.cart),a=j(),t=E(),c=_(),m=g(),n=y(),[C,u]=r.useState(!1),[d,p]=r.useState(""),[h,x]=r.useState(""),[f,v]=r.useState("");return r.useEffect(()=>{t.pathname.split("/")[1]==="checkout"&&!s&&a("/")},[t,s,a]),{values:{firstName:d,email:h,location:f},handlers:{setFirstName:p,setEmail:x,setLocation:v,setComplete:u,handleSubmit:async i=>{i.preventDefault(),!(!m||!n||!n.getElement(o))&&(c(b()),a("/checkout/order-received"))}}}},H=()=>{const{handlers:s,values:a}=F();return e.jsxs("div",{className:l["dummy-stripe-form"],children:[e.jsx("h1",{children:"Dummy Stripe Form"}),e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"firstName",children:"First Name:"}),e.jsx("input",{type:"text",id:"firstName",value:a.firstName,onChange:t=>s.setFirstName(t.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",value:a.email,onChange:t=>s.setEmail(t.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"location",children:"Location:"}),e.jsx("input",{type:"text",id:"location",value:a.location,onChange:t=>s.setLocation(t.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cardDetails",children:"Card details:"}),e.jsx(o,{id:"cardDetails",className:l.StripeElement,options:{style:{base:{fontSize:"16px"}}},onChange:t=>s.setComplete(t.complete)})]}),e.jsx("button",{type:"submit",children:"Pay"})]})]})};export{H as default};
