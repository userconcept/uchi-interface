import styled from 'styled-components';

interface Props {
    active: boolean;
}

export const Container = styled.div`
    width: 100%;
    max-width: 35rem;
    margin: 0 auto;
    position: relative;
`;

export const Header = styled.div<Props>`
    padding: 1.1rem 0;
    font-size: 1.6rem;
    border-radius: 0.6rem;
    border: 1px solid
        ${(props) => (props.active ? props.theme.colors.blue1 : props.theme.colors.black6)};
    border-bottom: 1px solid
        ${(props) => (props.active ? 'transparent' : props.theme.colors.black6)};
    border-bottom-left-radius: ${(props) => (props.active ? '0' : '0.8rem')};
    border-bottom-right-radius: ${(props) => (props.active ? '0' : '0.8rem')};
    transition: ${(props) =>
        `${props.theme.transitions.small}color, ${
            props.active ? '0' : props.theme.transitions.small
        }border-color`};
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.blue1};
        border-color: ${(props) => props.theme.colors.blue1};
        border-bottom-color: ${(props) =>
            props.active ? 'transparent' : props.theme.colors.blue1};

        & svg {
            fill: ${(props) => props.theme.colors.blue1};
        }
    }

    & svg {
        position: absolute;
        top: 50%;
        right: 2rem;
        margin-top: -0.5rem;
    }
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    border: 1px solid ${(props) => props.theme.colors.blue1};
    border-top: none;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    background-color: white;
`;

export const ListItem = styled.li`
    padding: 1.1rem 0;
    transition: ${(props) => `${props.theme.transitions.small}color`};
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.blue1};
    }
`;
