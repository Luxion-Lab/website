import{j as r,s as a}from"./emotion-styled.browser.esm.BAEy4S5Y.js";import"./index.B_c3mTby.js";import{c as e}from"./emotion-react.browser.esm.CzTQSCbN.js";import{T as o}from"./index.RFzl5FCj.js";import{M as l}from"./index.pRwWRSYz.js";const w={src:"/_astro/icon-arrow-down.BDCzw7Ed.svg",width:30,height:30,format:"svg"},x={src:"/_astro/icon-arrow-circle.DUoOPlmj.svg",width:50,height:50,format:"svg"},f={src:"/_astro/icon-arrow-right.DqPTpFau.svg",width:20,height:20,format:"svg"},u={src:"/_astro/icon-facebook.CiZt8951.svg",width:15,height:32,format:"svg"},v={src:"/_astro/icon-instagram.BWvvhaKh.svg",width:50,height:50,format:"svg"},y={src:"/_astro/icon-twitter.-eebusCm.svg",width:50,height:50,format:"svg"},b={src:"/_astro/icon-linkedin.Cr8d3BTd.svg",width:50,height:50,format:"svg"},$={src:"/_astro/icon-github.DH9R7T2y.svg",width:50,height:50,format:"svg"},k={arrowDown:w,arrowCircle:x,arrowRight:f,facebook:u,instagram:v,twitter:y,linkedin:b,github:$},I=({alt:t,iconData:n,...s})=>{const i=k[n];return r.jsx("img",{src:i.src,alt:t,width:i.width,height:i.height,"data-icon":"true",...s})},B=a.div`
    display: flex;
    justify-content: ${({$align:t})=>t||"flex-start"};
    margin-top: 20px;
`,c=a.a`
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    position: relative;
    z-index: 2;

    ${({$variant:t})=>t==="primary"&&C};
    ${({$variant:t})=>t==="secondary"&&_};
`,j=c.withComponent("button"),C=e`
    display: inline-flex;
    align-items: center;
    font-size: 25px;
    line-height: 30px;
    padding: 10px;
    transition: color 0.5s;
    transition-delay: 0.2s;

    ${l.max("lg")} {
        font-size: 14px;
        line-height: 18px;
        margin-top: 20px;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0%;
        background: ${o.primary};
        z-index: -1;
        transition: width 0.5s;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${o.primary};
        transition: width 0.5s;
    }

    &:hover {
        color: ${o.secondary};

        &:before {
            width: 100%;
        }

        &:after {
            width: 0%;
        }

        img {
            margin-right: 30px;
            opacity: 1;
        }
    }

    img {
        transition-delay: 0.2s;
        filter: invert(1);
        opacity: 0;
        margin-right: -20px;
        transition: all 0.5s;
    }
`,_=e`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${o.tertiary};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: ${o.tertiary};
    color: ${o.primary};

    &:hover {
        background: transparent;
        color: ${o.secondary};
    }
`,E=({link:t,target:n,children:s,align:i,showIcon:h=!1,variant:g="primary",asButton:d,type:D,...p})=>{const m=d?j:c;return r.jsx(B,{$align:i,children:r.jsxs(m,{href:t,target:n,...p,$variant:g,children:[h&&r.jsx(I,{iconData:"arrowRight",alt:"arrow icon"}),s]})})};export{E as B,I};
