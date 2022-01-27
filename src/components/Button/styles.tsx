import styled from 'styled-components';

interface Props {
    active?: boolean;
}

export const Container = styled.button<Props>`
    display: inline-block;
    vertical-align: top;
    margin: 0;
    padding: 0.9rem 2rem 1rem;
    border: 1px solid
        ${(props) => (props.active ? props.theme.colors.blue1 : props.theme.colors.blue2)};
    font-size: 1.8rem;
    line-height: 1.5;
    font-family: 'PT Root UI';
    color: ${(props) => (props.active ? 'white' : props.theme.colors.blue1)};
    background-color: ${(props) =>
        props.active ? props.theme.colors.blue1 : props.theme.colors.blue2};
    border-radius: 0.6rem;
    text-align: center;
    transition: ${(props) =>
        `${props.theme.transitions.small}color, ${props.theme.transitions.small}background-color, ${props.theme.transitions.small}border-color`};
    position: relative;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: ${(props) => props.theme.colors.blue1};
        border-color: ${(props) => props.theme.colors.blue1};
    }
`;
