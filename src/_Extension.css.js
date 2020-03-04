import { font, colors } from './_vars.css';

export const styles = `
    *, *:before, *:after {
        box-sizing: border-box;
    }
    #ext--dialogue {
        position: fixed;
        right: 0;
        top: 0;
        background: ${colors.white};
        color: $black; 
        font-family: ${font};
        font-size: 14px;
        text-align: center;
        width: 300px;
        min-height: 200px;
        max-height: 75vh;
        cursor: auto;
        user-select: none;  
        box-shadow: -8px 8px 16px 3px rgba(0,0,0,0.15);
        transition: all 260ms ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn;
        animation-duration: 260ms;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
    }
    h1, h2, h3, h4, h5, h6, p {
        color:  ${colors.black};
        font-size: 16px;
        font-weight: normal;
    }
    button {
        border: none;
        line-height: 34px;
        background: ${colors.blue};
        padding: 0 17px;
        border-radius: 4px;
        color: ${colors.white};
        outline: none;
    }
    @keyframes fadeIn {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;