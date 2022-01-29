import React, { useState } from 'react';
import { IButtonsGroupDays, IDataSubjectDay } from './../../interfaces';
import { Container, Scroll, Button, ButtonTop, ButtonBottom } from './styles';

const ButtonsGroupDays: React.FC<IButtonsGroupDays> = ({ obj, change }) => {
    const [active, setActive] = useState(0);

    const buttonClick = (id: number) => {
        setActive(id);
        change(id);
    };

    return (
        <Container>
            <Scroll>
                {obj.map((obj: IDataSubjectDay) => (
                    <Button
                        onClick={() => buttonClick(obj.id)}
                        active={obj.id === active ? true : false}
                        key={obj.id}>
                        <ButtonTop>{obj.day}</ButtonTop>
                        <ButtonBottom>{obj.date}</ButtonBottom>
                    </Button>
                ))}
            </Scroll>
        </Container>
    );
};

export default ButtonsGroupDays;
