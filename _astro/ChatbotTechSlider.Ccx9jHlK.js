import{s as i,j as o}from"./emotion-styled.browser.esm.BejYkolB.js";import{k as h}from"./emotion-react.browser.esm.B7uvujjO.js";import{C as r,T as n}from"./index.uJQ7fLVk.js";import{F as a}from"./index.DzyvGRGF.js";import{M as e}from"./index.pRwWRSYz.js";import"./index.B_c3mTby.js";const f=h`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`,w=i.section`
    padding: 80px 0;
    background: ${r.white};
    overflow: hidden;

    ${e.max("md")} {
        padding: 60px 0;
    }
`,u=i.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    ${e.max("md")} {
        padding: 0 16px;
    }
`,v=i.div`
    text-align: center;
    margin-bottom: 60px;

    ${e.max("md")} {
        margin-bottom: 40px;
    }
`,y=i.p`
    font-family: ${a.primary};
    font-size: 14px;
    font-weight: 500;
    color: ${n.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 16px 0;
    opacity: 0.8;

    ${e.max("md")} {
        font-size: 12px;
        margin-bottom: 12px;
    }
`,$=i.h2`
    font-family: ${a.primary};
    font-size: 42px;
    font-weight: 700;
    color: ${n.secondary};
    margin: 0 0 16px 0;
    line-height: 1.2;

    ${e.max("md")} {
        font-size: 32px;
    }

    ${e.max("sm")} {
        font-size: 28px;
    }
`,b=i.p`
    font-family: ${a.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${n.secondary};
    margin: 0 auto;
    line-height: 1.6;
    text-align: center;
    opacity: 0.8;

    ${e.max("md")} {
        font-size: 16px;
    }

    ${e.max("sm")} {
        font-size: 14px;
    }
`,j=i.div`
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

    ${e.max("md")} {
        &::before,
        &::after {
            width: 50px;
        }
    }
`,T=i.div`
    display: flex;
    animation: ${f} 30s linear infinite;
    width: fit-content;
    padding: 20px 0;

    &:hover {
        animation-play-state: paused;
    }
`,m=i.div`
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

    ${e.max("md")} {
        min-width: 120px;
        height: 100px;
        margin: 0 15px;
        padding: 16px;
    }

    ${e.max("sm")} {
        min-width: 100px;
        height: 90px;
        margin: 0 10px;
        padding: 12px;
    }
`,l=i.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px;

    ${e.max("md")} {
        width: 36px;
        height: 36px;
        margin-bottom: 6px;
    }

    ${e.max("sm")} {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }
`,d=i.span`
    font-family: ${a.primary};
    font-size: 12px;
    font-weight: 600;
    color: ${n.secondary};
    text-align: center;
    line-height: 1.2;

    ${e.max("md")} {
        font-size: 11px;
    }

    ${e.max("sm")} {
        font-size: 10px;
    }
`,_=({title:g="Tecnologías de IA y automatización",subtitle:c="TECNOLOGÍAS DE CHATBOTS",description:x="Utilizamos las mejores herramientas de inteligencia artificial y procesamiento de lenguaje natural para crear chatbots inteligentes y efectivos."})=>{const p=[{name:"OpenAI GPT",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",isComponent:!1},{name:"Dialogflow",logo:"https://cloudaiworld.com/wp-content/uploads/2022/01/dialogflow-logo.png",isComponent:!1},{name:"Botpress",logo:"https://avatars.githubusercontent.com/u/23510677?s=200&v=4",isComponent:!1},{name:"IBM Watson",logo:"https://logodix.com/logo/44136.png",isComponent:!1},{name:"Hugging Face",logo:"https://cdn.worldvectorlogo.com/logos/huggingface-2.svg",isComponent:!1},{name:"LangChain",logo:"https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png",isComponent:!1},{name:"Microsoft Bot",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",isComponent:!1},{name:"Wit.ai",logo:"https://inten.to/img/api/wit_ai_detect_intent.png",isComponent:!1},{name:"TensorFlow",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",isComponent:!1},{name:"PyTorch",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",isComponent:!1}];return o.jsx(w,{children:o.jsxs(u,{children:[o.jsxs(v,{children:[o.jsx(y,{children:c}),o.jsx($,{children:g}),o.jsx(b,{children:x})]}),o.jsx(j,{children:o.jsxs(T,{children:[p.map((t,s)=>o.jsxs(m,{children:[t.isComponent?o.jsx("div",{style:{marginBottom:"8px"},children:t.logo}):o.jsx(l,{src:t.logo,alt:t.name}),o.jsx(d,{children:t.name})]},`first-${s}`)),p.map((t,s)=>o.jsxs(m,{children:[t.isComponent?o.jsx("div",{style:{marginBottom:"8px"},children:t.logo}):o.jsx(l,{src:t.logo,alt:t.name}),o.jsx(d,{children:t.name})]},`second-${s}`))]})})]})})};export{_ as ChatbotTechSlider};
