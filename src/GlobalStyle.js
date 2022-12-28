import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --main-color: #95c1ff;
        --txt-color: #333333;
        --border-color: #C4C4C4;
        --sub-border-color: #E0E0E0;
        --bg-color: #F2F2F2;
        --emphasis-txt-color: #EB5757;
        --sub-txt-color: #828282;
        --button-border: #BDBDBD;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body, button {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-size:16px;
    line-height:24px;
    font-weight:400;
    color: var(--txt-color);
    }   

    img {
        width: 100%;
        height: auto;
        vertical-align: top;
    }
    a {
        display: block;
        text-decoration: none;
        color: #000;
    }
    .ir {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
`;

export default GlobalStyle;
