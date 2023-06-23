import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --transition-med: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --gradient-height: 420px;

    --text-color: #f8f8f8;
    --text-color--weak: #cccccc;
    --bg-brand: #7d4cdb;
    --bg-jordy-blue: #9fb9f9;
    --bg-neutral-2: #3d138d;
    --bg-dark-3: #777777;
    --bg-white: #ffffff;
    --bg-front: #444444;
    --bg-disabled: #ebebeb;
  }

  html,
  body {
  height: 100%;
  width: 100%;
  }

  #root,
  body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin: 0;
  }

  #iframe {
    top: 50% !important;
    left: 50% !important;
    right: unset !important;
    transform: translate(-50%, -50%);
  }


  input[type="time"]::-webkit-calendar-picker-indicator{
    background: none;
    display:none;
  }
`;

export default GlobalStyle;
