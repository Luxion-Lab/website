import{s as o,j as a}from"./emotion-styled.browser.esm.BAEy4S5Y.js";import{r as h}from"./index.B_c3mTby.js";import{k as s}from"./emotion-react.browser.esm.CzTQSCbN.js";import{T as r}from"./index.RFzl5FCj.js";import{M as u}from"./index.pRwWRSYz.js";import{FadeIn as f}from"./FadeIn.BFjQx4U_.js";import"./styled.DItTu-_m.js";s`
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-8px) scale(1.02);
  }
`;const l=s`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
`;s`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
  }
`;const m=s`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,$=o.div`
  display: flex;
  align-items: ${({variant:e})=>e==="horizontal"?"center":"flex-start"};
  flex-direction: ${({variant:e})=>e==="horizontal"?"row":"column"};
  gap: ${({variant:e})=>e==="horizontal"?"20px":"12px"};
  padding: ${({variant:e})=>{switch(e){case"benefit":return"25px";case"checklist":return"20px";case"horizontal":return"20px";default:return"25px"}}};
  background: ${({variant:e})=>{switch(e){case"benefit":return r.secondary;case"checklist":return r.primary;case"horizontal":return r.secondary;default:return r.secondary}}};
  border-radius: ${({variant:e})=>{switch(e){case"benefit":return"12px";case"checklist":return"10px";case"horizontal":return"16px";default:return"12px"}}};
  border: ${({variant:e})=>e==="horizontal"?`1px solid ${r.tertiary}`:"none"};
  text-align: ${({variant:e})=>"left"};
  cursor: ${({onClick:e})=>e?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-6px);
    transition: transform 0.3s ease;
    ${({variant:e})=>e==="benefit"&&`
      background: linear-gradient(135deg, ${r.secondary} 0%, ${r.tertiary} 100%);
    `}
    ${({variant:e})=>e==="horizontal"&&`
      border-color: ${r.secondary};
      box-shadow: 0 8px 25px rgba(0, 212, 255, 0.15);
    `}
  }
  
  &:not(:hover) {
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  ${u.max("lg")} {
    ${({variant:e})=>e==="horizontal"&&`
      flex-direction: column;
      text-align: center;
      gap: 12px;
    `}
  }
`,b=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  
  ${({variant:e,isHovered:t})=>e==="checklist"&&`
    width: 24px;
    height: 24px;
    background: ${r.tertiary};
    border-radius: 50%;
    margin-top: 2px;
    ${t?`animation: ${l} 0.6s ease-in-out;`:""}
  `}
  
  ${({variant:e,isHovered:t})=>e==="benefit"&&`
    margin-bottom: 5px;
    ${t?`animation: ${l} 0.6s ease-in-out;`:""}
  `}
  
  ${({variant:e,isHovered:t})=>e==="horizontal"&&`
    ${t?`animation: ${l} 0.6s ease-in-out;`:""}
  `}
`,y=o.span`
  color: ${r.primary};
  font-weight: bold;
  font-size: 14px;
`,g=o.span`
  font-size: ${({variant:e})=>{switch(e){case"horizontal":return"48px";default:return"32px"}}};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`,z=o.div`
  flex: 1;
  animation: ${m} 0.6s ease-out;
`,k=o.h3`
  color: ${({variant:e})=>{switch(e){case"benefit":return r.primary;case"checklist":return r.secondary;case"horizontal":return r.primary;default:return r.primary}}};
  font-size: ${({variant:e})=>{switch(e){case"benefit":return"18px";case"checklist":return"16px";case"horizontal":return"16px";default:return"18px"}}};
  margin-bottom: ${({variant:e})=>e==="checklist"?"6px":"8px"};
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${({isHovered:e,variant:t})=>e&&`
    transform: translateX(3px);
    color: ${t==="checklist"?r.tertiary:r.primary};
  `}
`,w=o.p`
  color: ${({variant:e})=>{switch(e){case"benefit":return r.primary;case"checklist":return r.secondary;case"horizontal":return r.primary;default:return r.primary}}};
  margin: 0;
  opacity: ${({variant:e})=>"0.8"};
  font-size: ${({variant:e})=>{switch(e){case"benefit":return"14px";case"checklist":return"13px";case"horizontal":return"13px";default:return"14px"}}};
  line-height: 1.4;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`,T=({icon:e,title:t,description:x,delay:d=0,variant:n="benefit",onClick:i})=>{const[c,p]=h.useState(!1);return a.jsx(f,{delay:d,children:a.jsxs($,{variant:n,isHovered:c,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:i,role:i?"button":void 0,tabIndex:i?0:void 0,children:[(n==="checklist"||e)&&a.jsx(b,{variant:n,isHovered:c,children:n==="checklist"?a.jsx(y,{children:"✓"}):a.jsx(g,{variant:n,children:e})}),a.jsxs(z,{variant:n,children:[a.jsx(k,{variant:n,isHovered:c,children:t}),a.jsx(w,{variant:n,children:x})]})]})})};export{T as AnimatedCard};
