import styled from 'styled-components';
import { Container as ButtonTemplate } from './../Button/styles';

export const Container = styled.div`
    margin: 0 -0.4rem 2.8rem;
    position: relative;

    &:before {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 10rem;
        background-image: linear-gradient(90deg, transparent 0%, white 100%);
        pointer-events: none;
        z-index: 1;
    }
`;

export const Scroll = styled.div`
    padding-bottom: 1.4rem;
    white-space: nowrap;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.blue1} transparent;

    &::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.blue1};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export const Button = styled(ButtonTemplate)`
    margin: 0 0.4rem;
    padding: 0.9rem 1.6rem 1rem;
    font-size: 1.6rem;
    line-height: 1.333;
    text-align: left;
`;

export const ButtonTop = styled.span`
    display: block;
    font-size: 1.4rem;
`;

export const ButtonBottom = styled.span`
    display: block;
`;
