import{s as i,j as e}from"./emotion-styled.browser.esm.BejYkolB.js";import{k as v}from"./emotion-react.browser.esm.B7uvujjO.js";import{C as r,T as t}from"./index.uJQ7fLVk.js";import{F as s}from"./index.DzyvGRGF.js";import{M as n}from"./index.pRwWRSYz.js";import"./index.B_c3mTby.js";const f=v`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`,j=i.section`
    padding: 80px 0;
    background: ${r.white};
    overflow: hidden;

    ${n.max("md")} {
        padding: 60px 0;
    }
`,w=i.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    ${n.max("md")} {
        padding: 0 16px;
    }
`,b=i.div`
    text-align: center;
    margin-bottom: 60px;

    ${n.max("md")} {
        margin-bottom: 40px;
    }
`,$=i.p`
    font-family: ${s.primary};
    font-size: 14px;
    font-weight: 500;
    color: ${t.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 16px 0;
    opacity: 0.8;

    ${n.max("md")} {
        font-size: 12px;
        margin-bottom: 12px;
    }
`,u=i.h2`
    font-family: ${s.primary};
    font-size: 42px;
    font-weight: 700;
    color: ${t.secondary};
    margin: 0 0 16px 0;
    line-height: 1.2;

    ${n.max("md")} {
        font-size: 32px;
    }

    ${n.max("sm")} {
        font-size: 28px;
    }
`,y=i.p`
    font-family: ${s.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${t.secondary};
    margin: 0 auto;
    line-height: 1.6;
    text-align: center;
    opacity: 0.8;

    ${n.max("md")} {
        font-size: 16px;
    }

    ${n.max("sm")} {
        font-size: 14px;
    }
`,M=i.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }
    
    &::before {
        left: 0;
        background: linear-gradient(to right, ${r.white}, transparent);
    }
    
    &::after {
        right: 0;
        background: linear-gradient(to left, ${r.white}, transparent);
    }

    ${n.max("md")} {
        &::before,
        &::after {
            width: 50px;
        }
    }
`,L=i.div`
    display: flex;
    animation: ${f} 30s linear infinite;
    width: fit-content;
    padding: 20px 0;

    &:hover {
        animation-play-state: paused;
    }
`,l=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    height: 120px;
    margin: 0 20px;
    padding: 20px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    ${n.max("md")} {
        min-width: 120px;
        height: 100px;
        margin: 0 15px;
        padding: 16px;
    }

    ${n.max("sm")} {
        min-width: 100px;
        height: 90px;
        margin: 0 10px;
        padding: 12px;
    }
`,m=i.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px;

    ${n.max("md")} {
        width: 36px;
        height: 36px;
        margin-bottom: 6px;
    }

    ${n.max("sm")} {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }
`,c=i.span`
    font-family: ${s.primary};
    font-size: 12px;
    font-weight: 600;
    color: ${t.secondary};
    text-align: center;
    line-height: 1.2;

    ${n.max("md")} {
        font-size: 11px;
    }

    ${n.max("sm")} {
        font-size: 10px;
    }
`,q=({title:g="Tecnologías que usamos",subtitle:p="STACK TECNOLÓGICO",description:x="Usamos herramientas confiables, seguras y de última generación para crear software robusto y escalable."})=>{const h=()=>e.jsx("svg",{width:"40",height:"40",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M41 9.88889L33 5.44444L25 9.88889M41 9.88889L33 14.3333M41 9.88889V18.7778L33 23.2222M25 9.88889V18.7778M25 9.88889L33 14.3333M25 18.7778L33 23.2222M25 18.7778L9 27.6667M33 23.2222V32.1111L17 41M33 23.2222V14.3333M33 23.2222L17 32.1111M9 27.6667L17 32.1111M9 27.6667V9.88889M1 5.44444L9 1L17 5.44444M1 5.44444V32.1111L17 41M1 5.44444L9 9.88889M17 41V32.1111M9 9.88889L17 5.44444M17 5.44444V23.2222",stroke:"#F53003",strokeWidth:"1.5"})}),d=[{name:"React",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Angular",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{name:"Astro",logo:"https://astro.build/assets/press/astro-icon-dark.svg"},{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Laravel",logo:e.jsx(h,{}),isComponent:!0},{name:"Django",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{name:"PostgreSQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"MySQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"Vercel",logo:"https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"}];return e.jsx(j,{children:e.jsxs(w,{children:[e.jsxs(b,{children:[e.jsx($,{children:p}),e.jsx(u,{children:g}),e.jsx(y,{children:x})]}),e.jsx(M,{children:e.jsxs(L,{children:[d.map((o,a)=>e.jsxs(l,{children:[o.isComponent?e.jsx("div",{style:{marginBottom:"8px"},children:o.logo}):e.jsx(m,{src:o.logo,alt:o.name}),e.jsx(c,{children:o.name})]},`first-${a}`)),d.map((o,a)=>e.jsxs(l,{children:[o.isComponent?e.jsx("div",{style:{marginBottom:"8px"},children:o.logo}):e.jsx(m,{src:o.logo,alt:o.name}),e.jsx(c,{children:o.name})]},`second-${a}`))]})})]})})};export{q as TechSlider};
