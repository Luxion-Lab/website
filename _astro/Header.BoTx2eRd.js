import{s as o,j as t}from"./emotion-styled.browser.esm.BAEy4S5Y.js";import{T as r}from"./index.RFzl5FCj.js";import{r as d}from"./index.B_c3mTby.js";import{M as i}from"./index.pRwWRSYz.js";import{F as m}from"./styled.DItTu-_m.js";import{c as p}from"./emotion-react.browser.esm.CzTQSCbN.js";o.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${r.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 50px;
            width: 63px;
            object-fit: contain;
        }
    }
`;const h=o.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            color: ${r.primary};
            letter-spacing: 5px;
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${r.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }
    }
`,b=()=>t.jsx(h,{children:t.jsx("a",{href:"/",children:t.jsx("span",{children:"luxion"})})}),u=o.header`
    width: 100%;

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    animation: ${m} 1s;
    animation-delay: 0.4s;
    transition: background 0.5s;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`,y=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${i.max("lg")} {
        padding: 0 20px;
    }
`,w=o.div`
    display: flex;
    gap: 50px;

    ${i.max("xl")} {
        gap: 20px;
    }
`,v=o.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${i.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${r.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:e})=>e&&p`
                right: 0;
                transform: translateX(0);
            `};
    }
`,$=o.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${i.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${i.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${r.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${i.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${r.primary};
            color: ${r.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${i.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`,j=o.div`
    position: relative;
    display: inline-block;
`,k=o.div`
    text-decoration: none;
    color: ${r.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    padding: 12px 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    ${i.max("lg")} {
        padding: 12px 20px;
        border: none;
        background: transparent;
        
        &::before {
            display: none;
        }
    }

    &:hover {
        background: linear-gradient(135deg, ${r.primary} 0%, rgba(255, 255, 255, 0.9) 100%);
        color: ${r.secondary};
        text-shadow: none;
        border-color: ${r.primary};
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);

        &::before {
            left: 100%;
        }

        ${i.max("lg")} {
            background: ${r.primary};
            transform: none;
            box-shadow: none;
        }

        & span {
            color: ${r.secondary} !important;
        }
    }
`,z=o.span`
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({$isOpen:e})=>e?"rotate(180deg) scale(1.1)":"rotate(0deg) scale(1)"};
    color: ${({$isOpen:e})=>e?r.primary:"inherit"};
    filter: ${({$isOpen:e})=>e?"drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))":"none"};
`,S=o.div`
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(145deg, ${r.secondary} 0%, rgba(0, 0, 0, 0.95) 100%);
    border-radius: 6px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: ${({$isOpen:e})=>e?1:0};
    visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
    transform: ${({$isOpen:e})=>e?"translateX(-50%) translateY(0) scale(1)":"translateX(-50%) translateY(-15px) scale(0.95)"};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    min-width: 280px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid ${r.primary};
        z-index: 1001;
    }

    &::after {
        content: '';
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid ${r.secondary};
        z-index: 1002;
    }

    ${i.max("lg")} {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        background: transparent;
        backdrop-filter: none;
        min-width: auto;
        width: 100%;
        margin-left: 20px;
        border-radius: 0;
        display: ${({$isOpen:e})=>e?"block":"none"};

        &::before,
        &::after {
            display: none;
        }
    }
`,a=o.a`
    display: block !important;
    padding: 16px 24px !important;
    color: ${r.primary} !important;
    text-decoration: none !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    letter-spacing: 0.5px !important;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent !important;
    text-align: left !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    text-transform: none !important;
    text-shadow: none !important;
    border-radius: 0 !important;

    &:hover {
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%) !important;
        color: ${r.primary} !important;
        padding-left: 32px !important;
        border-left: 3px solid ${r.primary};
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
        
        &::before {
            content: '→';
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: ${r.primary};
            font-weight: bold;
            opacity: 1;
            transition: all 0.3s ease;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:last-child {
        border-bottom: none;
    }

    &:active {
        transform: translateX(2px) scale(0.98);
    }

    ${i.max("lg")} {
        padding: 12px 16px;
        font-size: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        &::before,
        &::after {
            display: none;
        }

        &:hover {
            padding-left: 16px;
            transform: none;
            background: rgba(255, 255, 255, 0.1);
        }

        &:active {
            transform: none;
        }
    }
`,L=o.button`
    position: relative;
    z-index: 3;

    background: ${r.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${i.min("lg")} {
        display: none;
    }
`,g=o.span`
    background: ${r.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${i.max("lg")} {
        height: 2px;
    }

    ${({$open:e})=>e?p`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:p`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:e})=>e?p`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:p`
                      top: calc(50% + 4px);
                  `}
    }
`,O=({state:e})=>{const{open:n,setOpen:s}=e,l=()=>{s(!n)},c=f=>{const x=f.target;!x.closest("nav")&&n&&x.tagName!=="BUTTON"&&s(!1)};return d.useEffect(()=>{if(n)return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[n]),t.jsxs(L,{$open:n,onClick:l,"aria-label":"Menu","aria-expanded":n,role:"button",tabIndex:0,children:[t.jsx(g,{$open:n}),t.jsx(g,{$open:n})]})},E=()=>{const[e,n]=d.useState(!1),[s,l]=d.useState(!1);return t.jsxs(w,{children:[t.jsx(v,{$isOpen:e,children:t.jsxs($,{children:[t.jsx("li",{children:t.jsx("a",{href:"/",children:"Inicio"})}),t.jsx("li",{children:t.jsxs(j,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[t.jsxs(k,{children:["Servicios",t.jsx(z,{$isOpen:s,children:"▼"})]}),t.jsxs(S,{$isOpen:s,children:[t.jsx(a,{href:"/servicios/software-a-medida",children:"Software a medida"}),t.jsx(a,{href:"/servicios/automatizaciones",children:"Automatizaciones"}),t.jsx(a,{href:"/servicios/integraciones",children:"Integraciones"}),t.jsx(a,{href:"/servicios/apps-moviles",children:"Apps Moviles"}),t.jsx(a,{href:"/servicios/ia-chatbots",children:"IA Chatbots"}),t.jsx(a,{href:"/servicios/soporte",children:"Soporte"}),t.jsx(a,{href:"/servicios/sitio-web-express",children:"Sitio web Express"})]})]})}),t.jsx("li",{children:t.jsx("a",{href:"/contacto",children:"Contacto"})})]})}),t.jsx(O,{state:{open:e,setOpen:n}})]})},T=()=>(d.useEffect(()=>{const e=document.querySelector("header"),n=()=>{window.scrollY>0?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),t.jsx(u,{children:t.jsxs(y,{children:[t.jsx(b,{}),t.jsx(E,{})]})}));export{T as Header};
