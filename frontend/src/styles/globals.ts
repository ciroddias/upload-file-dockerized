import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'Raleway', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    main {
        display: flex;
        align-items: center;
        height: 100vh;
    }

    h1 {
        font-size: 3rem;
        font-weight: 400;
    }

    h2 {
        font-size: 2rem;
        font-weight: 400;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    h4 {
        font-size: 1rem;
        font-weight: 400;
    }

    button {
        background: none;
        border: none;
        font-family: 'Raleway', sans-serif;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
`