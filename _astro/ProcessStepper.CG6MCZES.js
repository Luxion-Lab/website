import{s as e,j as t}from"./emotion-styled.browser.esm.BAEy4S5Y.js";import"./index.B_c3mTby.js";import{k as s}from"./emotion-react.browser.esm.CzTQSCbN.js";import{T as i,C as c}from"./index.RFzl5FCj.js";import{F as a}from"./index.Bf-duk9l.js";import{M as o}from"./index.pRwWRSYz.js";import{C as h}from"./index.C4K47rtN.js";const g={src:"/_astro/infinite-img-1.C1BCkNiX.webp"},l=s`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,y=s`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,$=s`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,b=s`
    0%, 100% {
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    }
    50% {
        box-shadow: 0 15px 50px rgba(0, 212, 255, 0.3);
    }
`,u=s`
    from {
        height: 0;
        opacity: 0;
    }
    to {
        height: 60px;
        opacity: 1;
    }
`,w=e.section`
    padding: 100px 0;
    background: ${i.primary};
`,S=e.div`
    text-align: center;
    margin-bottom: 80px;
    animation: ${l} 0.8s ease-out;
`,j=e.p`
     font-family: ${a.primary};
    font-size: 14px;
    font-weight: 500;
    color: ${i.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 16px 0;
    opacity: 0.8;

    ${o.max("md")} {
        font-size: 12px;
        margin-bottom: 12px;
    }
`,z=e.h2`
    font-family: ${a.primary};
    font-size: 42px;
    font-weight: 700;
    color: ${i.secondary};
    margin: 0 0 16px 0;
    line-height: 1.2;

    ${o.max("md")} {
        font-size: 32px;
    }

    ${o.max("sm")} {
        font-size: 28px;
    }
`,P=e.p`
    font-family: ${a.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${i.secondary};
    margin: 0 auto;
    line-height: 1.6;
    text-align: center;
    opacity: 0.8;

    ${o.max("md")} {
        font-size: 16px;
    }

    ${o.max("sm")} {
        font-size: 14px;
    }
`,v=e.div`
    display: flex;
    gap: 60px;
    align-items: flex-start;
    
    ${o.max("lg")} {
        flex-direction: column;
        gap: 40px;
    }
`,C=e.div`
    flex: 0 0 400px;
    animation: ${y} 0.8s ease-out 0.3s both;
    
    ${o.max("lg")} {
        flex: none;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
`,k=e.img`
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
    }
`,I=e.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    position: relative;
    flex: 1;
    animation: ${$} 0.8s ease-out 0.5s both;
`,X=e.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    position: relative;
    flex: 1;
    padding: 0 10px;
    gap: 30px;
    opacity: 0;
    animation: ${l} 0.6s ease-out forwards;
    animation-delay: ${({index:r})=>`${.7+(r||0)*.2}s`};

    &:not(:last-child) {
        &::after {
            content: '';
            position: absolute;
            bottom: -30px;
            left: 50px;
            width: 2px;
            height: 60px;
            background: linear-gradient(to bottom, ${i.tertiary}, ${c.darkLighter});
            z-index: 1;
            animation: ${u} 0.8s ease-out forwards;
            animation-delay: ${({index:r})=>`${1.2+(r||0)*.2}s`};
        }
    }
`,F=e.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${i.tertiary}, ${c.darkLighter});
    color: ${i.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${a.primary};
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    position: relative;
    z-index: 2;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-6px) scale(1.05);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        animation: ${b} 2s ease-in-out infinite;
    }

    ${o.max("md")} {
        width: 60px;
        height: 60px;
        font-size: 20px;
    }
`,T=e.div`
    max-width: 500px;
    flex: 1;
`,Y=e.h3`
    font-family: ${a.primary};
    font-size: 22px;
    font-weight: 600;
    color: ${i.secondary};
    margin: 0 0 16px 0;
    line-height: 1.3;
    transition: color 0.3s ease;

    ${o.max("lg")} {
        font-size: 20px;
        margin-bottom: 14px;
    }

    ${o.max("md")} {
        font-size: 18px;
        margin-bottom: 12px;
    }
`,L=e.p`
    font-family: ${a.primary};
    font-size: 14px;
    font-weight: 400;
    color: ${i.secondary};
    line-height: 1.5;
    margin: 0;
    opacity: 0.85;
    transition: opacity 0.3s ease;

    ${o.max("md")} {
        font-size: 13px;
        line-height: 1.4;
    }
`,H=({title:r,subtitle:n,description:x,steps:d,image:f=g.src})=>t.jsx(w,{children:t.jsxs(h,{children:[(r||n)&&t.jsxs(S,{children:[n&&t.jsx(j,{children:n}),r&&t.jsx(z,{children:r}),x&&t.jsx(P,{children:x})]}),t.jsxs(v,{children:[t.jsx(C,{children:t.jsx(k,{src:f,alt:"Process illustration"})}),t.jsx(I,{children:d.map((p,m)=>t.jsxs(X,{index:m,children:[t.jsx(F,{children:p.number}),t.jsxs(T,{children:[t.jsx(Y,{children:p.title}),t.jsx(L,{children:p.description})]})]},m))})]})]})});export{H as ProcessStepper};
