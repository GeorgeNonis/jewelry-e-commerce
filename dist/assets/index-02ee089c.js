import{r,j as e,U as c,V as p}from"./index-19b8ef38.js";const x=()=>{const[t,n]=r.useState(null);return{handleQuestionClick:s=>{n(s)},openIndex:t}},m=({a:t,q:n,isOpen:a,handler:s,i:d})=>{var o;const[i,h]=r.useState(!1),l=r.useRef(null),u=(o=l.current)==null?void 0:o.scrollHeight,f=()=>{s(d),h(!i)};return e.jsxs("div",{className:c.faqDiv,onClick:f,children:[e.jsxs("div",{className:c.faqQuestion,children:[e.jsx("h3",{children:n}),e.jsx("button",{children:a&&i?"-":"+"})]}),e.jsx("div",{className:c.answer,style:a&&i?{height:u,marginBlock:"3rem"}:{height:0},ref:l,children:e.jsx("p",{children:t})})]})},g=()=>{const{handleQuestionClick:t,openIndex:n}=x();return e.jsxs("section",{className:c.faqpage,children:[e.jsx("img",{src:"https://cdn.discordapp.com/attachments/1056419450473152533/1108715091609784390/Neilyo77_Please_generate_a_description_for_an_image_showcasing__32d3d23b-d0f0-4ff4-9767-5811bdc181fa.png",alt:"faq_picture"}),e.jsx("h1",{children:"Most asked questions"}),e.jsx("div",{className:c.faqSenction,children:p.map((a,s)=>e.jsx(m,{...a,isOpen:s===n,handler:t,i:s},s))})]})};export{g as default};
