import React, { useState } from 'react';
import Button from './../Button';
import { IButtonsGroup, IButtonsGroupItem } from './../../interfaces';
import { Container } from './styles';

const ButtonsGroup: React.FC<IButtonsGroup> = ({ obj, change }) => {
    const [active, setActive] = useState(0);

    const buttonClick = (id: number) => {
        setActive(id);
        change(id);
    };

    return (
        <Container>
            {obj.map((obj: IButtonsGroupItem) => (
                <Button
                    onClickHandler={() => buttonClick(obj.id)}
                    $active={obj.id === active ? true : false}
                    key={obj.id}>
                    {obj.text}
                </Button>
            ))}
        </Container>
    );
};

export default ButtonsGroup;
