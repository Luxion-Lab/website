import{s as n,j as e}from"./emotion-styled.browser.esm.BejYkolB.js";import{k as h}from"./emotion-react.browser.esm.B7uvujjO.js";import{C as r,T as t}from"./index.uJQ7fLVk.js";import{F as a}from"./index.DzyvGRGF.js";import{M as i}from"./index.pRwWRSYz.js";import"./index.B_c3mTby.js";const v=h`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`,f=n.section`
    padding: 80px 0;
    background: ${r.white};
    overflow: hidden;

    ${i.max("md")} {
        padding: 60px 0;
    }
`,j=n.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    ${i.max("md")} {
        padding: 0 16px;
    }
`,b=n.div`
    text-align: center;
    margin-bottom: 60px;

    ${i.max("md")} {
        margin-bottom: 40px;
    }
`,w=n.p`
    font-family: ${a.primary};
    font-size: 14px;
    font-weight: 500;
    color: ${t.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 16px 0;
    opacity: 0.8;

    ${i.max("md")} {
        font-size: 12px;
        margin-bottom: 12px;
    }
`,$=n.h2`
    font-family: ${a.primary};
    font-size: 42px;
    font-weight: 700;
    color: ${t.secondary};
    margin: 0 0 16px 0;
    line-height: 1.2;

    ${i.max("md")} {
        font-size: 32px;
    }

    ${i.max("sm")} {
        font-size: 28px;
    }
`,u=n.p`
    font-family: ${a.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${t.secondary};
    margin: 0 auto;
    line-height: 1.6;
    text-align: center;
    opacity: 0.8;

    ${i.max("md")} {
        font-size: 16px;
    }

    ${i.max("sm")} {
        font-size: 14px;
    }
`,y=n.div`
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

    ${i.max("md")} {
        &::before,
        &::after {
            width: 50px;
        }
    }
`,T=n.div`
    display: flex;
    animation: ${v} 30s linear infinite;
    width: fit-content;
    padding: 20px 0;

    &:hover {
        animation-play-state: paused;
    }
`,c=n.div`
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

    ${i.max("md")} {
        min-width: 120px;
        height: 100px;
        margin: 0 15px;
        padding: 16px;
    }

    ${i.max("sm")} {
        min-width: 100px;
        height: 90px;
        margin: 0 10px;
        padding: 12px;
    }
`,l=n.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px;

    ${i.max("md")} {
        width: 36px;
        height: 36px;
        margin-bottom: 6px;
    }

    ${i.max("sm")} {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }
`,m=n.span`
    font-family: ${a.primary};
    font-size: 12px;
    font-weight: 600;
    color: ${t.secondary};
    text-align: center;
    line-height: 1.2;

    ${i.max("md")} {
        font-size: 11px;
    }

    ${i.max("sm")} {
        font-size: 10px;
    }
`,N=({title:p="Tecnologías que usamos",subtitle:g="STACK TECNOLÓGICO",description:x="Usamos herramientas confiables, seguras y de última generación para crear apps móviles robustas y escalables."})=>{const d=[{name:"React Native",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Flutter",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"},{name:"Swift",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"},{name:"Kotlin",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"},{name:"Java",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{name:"Dart",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"},{name:"Ionic",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"},{name:"Xamarin",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg"},{name:"Firebase",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"}];return e.jsx(f,{children:e.jsxs(j,{children:[e.jsxs(b,{children:[e.jsx(w,{children:g}),e.jsx($,{children:p}),e.jsx(u,{children:x})]}),e.jsx(y,{children:e.jsxs(T,{children:[d.map((o,s)=>e.jsxs(c,{children:[e.jsx(l,{src:o.logo,alt:o.name}),e.jsx(m,{children:o.name})]},`first-${s}`)),d.map((o,s)=>e.jsxs(c,{children:[e.jsx(l,{src:o.logo,alt:o.name}),e.jsx(m,{children:o.name})]},`second-${s}`))]})})]})})};export{N as MobileTechSlider};
