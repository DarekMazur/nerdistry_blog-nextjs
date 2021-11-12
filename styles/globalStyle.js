import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Gentium+Book+Basic:wght@700&family=Hahmlet:wght@600&family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap');

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.mainFont};
        color: ${({ theme }) => theme.colors.blue};
        font-size: ${({ theme }) => theme.fontSize.m};
        width: 100vw;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.midWhite};
    }
`;
