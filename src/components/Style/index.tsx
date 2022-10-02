import {StyleProps} from "../Modal/types";

export const Style = ({
    blackout,
    position,
    bg,
    color,
    animated = true,
    titleColor,
    btnBGColor,
    btnColor,
}: StyleProps) => {

    const center = `
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `
    const top = `
      top: 0;
      left: 0;
      right: 0;
    `
    const animation = animated ? 'descent 200ms ease-in' : 'none'

    return (
        <style>
            {`
                .wrapper {
                     background-color: ${blackout ? `rgba(94, 94, 94, 0.5)` : `transparent`};
                     z-index: 99999;
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                }
              
                .container {
                    position: fixed;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    ${position === 'center' ? center : top};
                }
                
                .dialog-window {
                    background-color: ${bg || 'white'};
                    animation: ${animation};
                    width: 300px;
                    min-height: 125px;
                    max-height: 100%;
                    border-radius: .5em;
                    box-shadow: 0 0 10px #c1c1c1;
                    overflow-x: hidden;
                    overflow-y: auto;
                    
                    white-space: normal;
                    word-break: break-all;
                    text-align: start;
                }
                .title {
                    font-size: 18px !important;
                    color: ${titleColor || "black"};
                    font-weight: bold;
                    padding: 0 .5em;
                      
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .body {
                    padding: 0 .5em .5em;
                    font-size: 16px !important;
                    color: ${color};
                }
                .footer {
                    display: flex;
                    position: relative;
                    width: 97%;
                    justify-content: end;
                    padding: 2px 2px .5em;
                }
                
                .button {
                    margin: 0 2px;
                    background-color: ${btnBGColor || "#027ad6"};
                    color: ${btnColor || "white"};
                    border: 0;
                    border-radius: 2px;
                    padding: .3em .5em;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 300ms all;
                    max-height: 30px;
                    
                      
                    max-width: 125px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    white-space: nowrap;
                    overflow: hidden;
                }
                
                .button:disabled {
                    background-color: #bbbbbb;
                    cursor: auto;
                }
                    
                .button:active {
                    background-color: #048df7 !important;
                }
                    
                .button:hover {
                    background-color: #006fc5;
                }
                .prompt_wrapper {
                    display: flex;
                    justify-content: center;
                }
                .prompt_input {
                    display: flex;
                    justify-content: center;
                    font-family: inherit;
                    width: 92%;
                    margin-bottom: 5px;
                    border: 0;
                    border-bottom: 1px solid #a1a1a1;
                    outline: 0;
                    color: black;
                    background: transparent;
                }
                
                @keyframes descent {
                    0% {
                      opacity: 0;
                      transform: translateY(-150%);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            `}
        </style>
    )
}