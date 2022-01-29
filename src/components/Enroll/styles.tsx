import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const Container = styled.section`
    max-width: 76.8rem;
    margin: 0 auto;
    padding: 2.4rem 1.6rem;

    ${mediaQueries('large')`
        padding: 3rem 2.4rem;
    `};
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 2.8rem;
    font-weight: 600;
    font-family: 'Source Sans Pro';
    text-align: center;

    ${mediaQueries('large')`
        font-size: 4.4rem;
    `};
`;

export const Wrapper = styled.div`
    margin-top: 2.4rem;
    border: 1px solid ${(props) => props.theme.colors.black5};
    border-radius: 1.5rem;

    ${mediaQueries('large')`
        margin-top: 3rem;
    `};
`;

export const Top = styled.div`
    padding: 3.2rem 1.6rem 2.8rem;
    text-align: center;

    ${mediaQueries('large')`
        padding: 3.2rem 4rem 3.6rem;
    `};
`;

export const TopText = styled.p`
    max-width: 24rem;
    margin: 0 auto 2rem;
`;

export const Bottom = styled.div`
    padding: 3.2rem 1.6rem;
    border-top: 1px solid ${(props) => props.theme.colors.black5};

    ${mediaQueries('large')`
        padding: 6rem 4rem 5.6rem;
    `};
`;

export const BottomTitle = styled.h2`
    margin: 0;
    font-size: 2.4rem;
    font-weight: 600;
    font-family: 'Source Sans Pro';
`;

export const BottomText = styled.p`
    margin: 0.5rem 0 2.4rem;
`;
