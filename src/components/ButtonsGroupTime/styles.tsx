import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';
import { Container as ButtonTemplate } from './../Button/styles';

export const Container = styled.div`
    margin-top: 0.8rem;

    ${mediaQueries('large')`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
    `};
`;

export const Left = styled.div`
    height: 3.5rem;
    line-height: 3.5rem;
    padding-left: 3rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.black4};
    position: relative;

    ${mediaQueries('large')`
        flex: 0 0 8.5rem;
        width: 8.5rem;
        height: 4.8rem;
        line-height: 4.8rem;
    `};

    & svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`;

export const Right = styled.div`
    margin: 0 -0.4rem;

    ${mediaQueries('large')`
        margin: 0;
        flex: 0 0 39rem;
        max-width: 39rem;
    `};
`;

export const Button = styled(ButtonTemplate)`
    width: 8.8rem;
    margin: 0.4rem;
    padding: 0.8rem 0 0.9rem;
    font-size: 1.6rem;
    line-height: 1.333;
`;
