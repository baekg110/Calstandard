import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
      --main-color: #ffcc00;
      --txt-color: #333333;
      --border-color: #c4c4c4;
      --sub-border-color: #e0e0e0;
      --bg-color: #f2f2f2;
      --emphasis-txt-color: #eb5757;
      --sub-txt-color: #828282;
      --button-border: #bdbdbd;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body, button {
    font-family: 'Pretendard-Regular';
    font-size:14px;
    line-height:24px;
    font-weight:400;
    color: var(--txt-color);
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
