import{s as e,j as n}from"./emotion-styled.browser.esm.BAEy4S5Y.js";import{r as p}from"./index.B_c3mTby.js";import{FadeIn as m}from"./FadeIn.BFjQx4U_.js";import{k as f}from"./emotion-react.browser.esm.CzTQSCbN.js";import{T as r}from"./index.RFzl5FCj.js";import"./styled.DItTu-_m.js";f`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const h=e.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  
`,g=e.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${({currentIndex:t})=>t*100}%);
`,u=e.div`
  min-width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 32px;
  background: transparent;
  border: 1px solid ${r.tertiary}20;
  border-radius: 12px;
  box-sizing: border-box;
`,y=e.div`
  wdth:auto;
  margin-left:30px;
`;e.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${r.tertiary};
  color: ${r.primary};
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
`;const b=e.div`
  flex: 1;
  display: flex;
  justify-content:center;
  align-items: center;
`,j=e.h4`
  color: ${r.tertiary};
  font-size: 38px;
  font-weight: 700 !important;
  margin: 0 0 4px 0 !important;
  line-height: 1.3;
`,v=e.p`
  color: ${r.tertiary};
  font-size: 15px;
  margin: 0;
  opacity: 0.8;
  line-height: 1.4;
`;e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
`;e.button`
  background: ${({disabled:t})=>t?r.tertiary+"20":r.tertiary};
  color: ${({disabled:t})=>t?r.tertiary+"40":r.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: ${r.tertiary};
    transform: scale(1.1);
  }
`;const $=e.div`
  display: flex;
  justify-content:center;
  gap: 8px;
`,k=e.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${t=>t.active?r.tertiary:"rgba(0, 0, 0, 0.3)"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${t=>t.active?r.tertiary:"rgba(0, 0, 0, 0.5)"};
    transform: scale(1.1);
  }
`,D=({items:t,delay:d=0,autoPlay:a=!0,autoPlayInterval:s=4e3})=>{const[l,c]=p.useState(0);p.useEffect(()=>{if(!a||t.length<=1)return;const o=setInterval(()=>{c(i=>i===t.length-1?0:i+1)},s);return()=>clearInterval(o)},[a,s,t.length]);const x=o=>{c(o)};return n.jsx(m,{delay:d,children:n.jsxs(h,{children:[n.jsx(g,{currentIndex:l,totalItems:t.length,children:t.map((o,i)=>n.jsx(u,{children:n.jsx(b,{children:n.jsxs(y,{children:[n.jsx(j,{children:o.title}),n.jsx(v,{children:o.description})]})})},i))}),n.jsx($,{children:t.map((o,i)=>n.jsx(k,{active:i===l,onClick:()=>x(i),"aria-label":`Ir al slide ${i+1}`},i))})]})})};export{D as CompactChecklist};
