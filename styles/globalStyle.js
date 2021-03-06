import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Gentium+Book+Basic:wght@700&family=Hahmlet:wght@600&family=Montserrat:ital,wght@0,400;0,600;1,400&family=Share+Tech+Mono&display=swap');

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
        line-height: 2;
        width: 100vw;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.midWhite};
        padding: 0;
        margin: 0;

        &::-webkit-scrollbar {
            width: 1rem;
            background-color: transparent;
        }
        
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.yellow};
        }
    }

    p {
        margin: 2.7rem 0;
    }
`;
