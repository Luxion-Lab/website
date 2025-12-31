import{s as e,j as t}from"./emotion-styled.browser.esm.BejYkolB.js";import"./index.B_c3mTby.js";import{T as r}from"./index.uJQ7fLVk.js";import{M as i}from"./index.pRwWRSYz.js";import{C as s}from"./index.BqqOPCEy.js";import{FadeIn as p}from"./FadeIn.B3aYFwiE.js";import"./emotion-react.browser.esm.B7uvujjO.js";import"./styled.C_MIjCrQ.js";const x=e.section`
  background: ${r.primary};
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`,m=e.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,d=e.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`,l=e.p`
  color: ${r.tertiary};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  opacity: 0.9;

  ${i.max("lg")} {
    font-size: 12px;
  }
`,c=e.h2`
  color: ${r.tertiary};
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
  text-align: center;

  ${i.max("lg")} {
    font-size: 36px;
  }

  ${i.max("md")} {
    font-size: 28px;
  }
`,v=({tagline:o,mainText:n,variant:a="default"})=>t.jsxs(x,{variant:a,children:[t.jsx(m,{}),t.jsx(s,{children:t.jsx(p,{children:t.jsxs(d,{children:[o&&t.jsx(l,{children:o}),t.jsx(c,{children:n})]})})})]});export{v as HighlightBanner};
