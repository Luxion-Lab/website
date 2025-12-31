import{s as i,j as t}from"./emotion-styled.browser.esm.BejYkolB.js";import{C as o}from"./index.BqqOPCEy.js";import{M as r}from"./index.pRwWRSYz.js";import"./index.B_c3mTby.js";const a=i.section`
    padding: 100px 0;

    ${r.max("lg")} {
        padding: 60px 0;
    }
`,s=i.div`
    text-align: center;

    h2,
    h3,
    h4,
    h5 {
        margin-bottom: 70px;
        font-weight: 200;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        &,
        img {
            border-radius: 10px;

            width: 100%;
            height: auto;
            object-fit: cover;
            max-width: 970px;
            margin: 0 auto;
        }
    }
`,c=({children:e,...n})=>e?t.jsx(a,{...n,children:t.jsx(o,{children:t.jsx(s,{children:e})})}):null;export{c as ContentSection};
