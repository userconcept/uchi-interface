import React, { useState } from 'react';
import Icon from './../Icon';
import { Container, Header, List, ListItem } from './styles';

const options = ['7 класс', '8 класс', '9 класс'];

const Select: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<null | string>(null);

    const toggling = () => setOpen(!open);

    const onOptionClicked = (value: string) => {
        setSelectedOption(value);
        setOpen(false);
    };

    return (
        <Container>
            <Header onClick={toggling} $active={open}>
                {selectedOption || '9 класс'}
                <Icon name="arrow_down" csswidth="1.8" cssheight="2" color="grey" />
            </Header>
            {open && (
                <List>
                    {options.map((option, i) => (
                        <ListItem onClick={() => onOptionClicked(option)} key={i}>
                            {option}
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default Select;
