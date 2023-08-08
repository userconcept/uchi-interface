import React, { useState } from 'react';
import { IButtonsGroupTime, IDataSubjectTime } from './../../interfaces';
import { Container, Button, Left, Right } from './styles';

const ButtonsGroupTime: React.FC<IButtonsGroupTime> = ({ obj, change, icon, text }) => {
    const [active, setActive] = useState(0);

    const buttonClick = (id: number) => {
        setActive(id);
        change(id);
    };

    return (
        <Container>
            <Left>
                {icon}
                {text}
            </Left>
            <Right>
                {obj.map((obj: IDataSubjectTime) => (
                    <Button
                        onClick={() => buttonClick(obj.id)}
                        $active={obj.id === active ? true : false}
                        key={obj.id}>
                        {obj.text}
                    </Button>
                ))}
            </Right>
        </Container>
    );
};

export default ButtonsGroupTime;
