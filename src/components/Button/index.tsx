import React from 'react';
import { MouseEventHandler } from 'react';
import { Container } from './styles';

interface Props {
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    active?: boolean;
}

const Button: React.FC<Props> = ({ children, onClickHandler = undefined, active = false }) => {
    return (
        <Container onClick={onClickHandler} active={active}>
            {children}
        </Container>
    );
};

export default Button;
