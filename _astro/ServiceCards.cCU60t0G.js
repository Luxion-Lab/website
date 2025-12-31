import{s as n,j as e}from"./emotion-styled.browser.esm.BejYkolB.js";import"./index.B_c3mTby.js";import{T as o}from"./index.uJQ7fLVk.js";import{M as s}from"./index.pRwWRSYz.js";import{c}from"./emotion-react.browser.esm.B7uvujjO.js";import{C as h}from"./index.BqqOPCEy.js";import{FadeIn as d}from"./FadeIn.B3aYFwiE.js";import"./styled.C_MIjCrQ.js";const m=n.section`
    background: ${o.primary};
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`,g=n.div`
    color: ${o.secondary};

    margin-bottom: 40px;

    p {
        color: ${o.tertiary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${s.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`,f=n.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    ${s.max("lg")} {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    h3 {
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.5px;
        opacity: 0.8;
    }
`,l=n.div`
    padding: 30px;
    border-radius: 10px;
    background: ${o.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: block;
    height: 100%;
    color: ${o.secondary};
    border-radius: 15px;

    ${t=>t.$variant==="background-text"&&y};
`,u=l.withComponent("a"),j=n.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;

    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -7px;
    z-index: 1;
    color: ${o.primary};
    opacity: 0.5;

    ${s.max("xxl")} {
        font-size: 80px;
    }

    ${s.max("xl")} {
        font-size: 60px;
        letter-spacing: -3px;
    }
`,b=n.div`
    position: relative;
    z-index: 2;

    ${s.max("md")} {
        max-width: 80%;
    }
`,y=c`
    position: relative;
    overflow: hidden;
    padding: 20px;

    h2,
    h3,
    h4 {
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.2;

        &:after {
            content: none;
        }
    }

    h4,
    p {
        position: relative;
        z-index: 2;
    }

    p {
        line-height: 1.2;
    }
`,v=({children:t,variant:i,bgText:r,boxAsLink:x,...p})=>{const a=x?u:l;return e.jsxs(a,{$variant:i,...p,children:[i==="background-text"&&r&&e.jsx(j,{children:r}),e.jsx(b,{children:t})]})},E=({cards:t,description:i,title:r})=>{if(!t||!t.length)return null;const x=t.map((p,a)=>e.jsx(d,{children:e.jsxs(v,{children:[e.jsx("h3",{children:p.title}),e.jsx("p",{children:p.description})]})},a));return e.jsx(m,{children:e.jsxs(h,{children:[r&&i&&e.jsx(d,{children:e.jsxs(g,{children:[i&&e.jsx("p",{children:i}),r&&e.jsx("h2",{children:r})]})}),e.jsx(f,{children:x})]})})};export{E as ServiceCards};
