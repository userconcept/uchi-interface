import React, { useState, useEffect } from 'react';
import Icon from './../Icon';
import Select from './../Select';
import ButtonsGroup from '../ButtonsGroup';
import ButtonsGroupDays from '../ButtonsGroupDays';
import ButtonsGroupTime from '../ButtonsGroupTime';
import { Container, Title, Wrapper, Top, TopText, Bottom, BottomTitle, BottomText } from './styles';

const Enroll: React.FC = () => {
    const [subjects, setSubjects] = useState([
        {
            id: 0,
            text: 'Русский язык',
            active: false,
        },
        {
            id: 1,
            text: 'Английский язык',
            active: false,
        },
        {
            id: 2,
            text: 'Алгебра',
            active: true,
        },
        {
            id: 3,
            text: 'Геометрия',
            active: false,
        },
        {
            id: 4,
            text: 'Физика',
            active: false,
        },
        {
            id: 5,
            text: 'Химия',
            active: false,
        },
        {
            id: 6,
            text: 'Биология',
            active: false,
        },
        {
            id: 7,
            text: 'История',
            active: false,
        },
        {
            id: 8,
            text: 'Обществознание',
            active: false,
        },
    ]);

    const [days, setDays] = useState([
        {
            id: 0,
            day: 'Сегодня',
            date: '14 марта',
            active: false,
        },
        {
            id: 1,
            day: 'Завтра',
            date: '15 марта',
            active: false,
        },
        {
            id: 2,
            day: 'Воскресенье',
            date: '16 марта',
            active: true,
        },
        {
            id: 3,
            day: 'Понедельник',
            date: '17 марта',
            active: false,
        },
        {
            id: 4,
            day: 'Вторник',
            date: '18 марта',
            active: false,
        },
        {
            id: 5,
            day: 'Среда',
            date: '19 марта',
            active: false,
        },
    ]);

    const [timeMorning, setTimeMorning] = useState([
        {
            id: 0,
            text: '9:00',
            active: false,
        },
        {
            id: 1,
            text: '9:40',
            active: false,
        },
        {
            id: 2,
            text: '10:20',
            active: true,
        },
        {
            id: 3,
            text: '11:40',
            active: false,
        },
    ]);

    const [timeDay, setTimeDay] = useState([
        {
            id: 0,
            text: '12:00',
            active: false,
        },
        {
            id: 1,
            text: '13:20',
            active: false,
        },
        {
            id: 2,
            text: '14:00',
            active: true,
        },
        {
            id: 3,
            text: '14:20',
            active: false,
        },
        {
            id: 4,
            text: '15:00',
            active: true,
        },
        {
            id: 5,
            text: '16:40',
            active: false,
        },
    ]);

    const [timeEvening, setTimeEvening] = useState([
        {
            id: 0,
            text: '18:00',
            active: false,
        },
        {
            id: 1,
            text: '19:30',
            active: false,
        },
        {
            id: 2,
            text: '20:00',
            active: true,
        },
        {
            id: 3,
            text: '21:20',
            active: false,
        },
    ]);

    useEffect(() => {
        console.log(subjects);
        console.log(days);
    }, [subjects, days]);

    const getButtonId = (id: number) => {
        setSubjects(subjects.map((obj) => ({ ...obj, active: obj.id === id })));
    };

    const getButtonDaysId = (id: number) => {
        setDays(days.map((obj) => ({ ...obj, active: obj.id === id })));
    };

    const getButtonTimeId = (id: number) => {
        console.log(id);
    };

    return (
        <Container>
            <Title>Запись на вводный урок</Title>
            <Wrapper>
                <Top>
                    <TopText>Выберите класс перед тем, как выбрать предмет обучения</TopText>
                    <Select />
                    <ButtonsGroup obj={subjects} change={getButtonId} />
                </Top>
                <Bottom>
                    <BottomTitle>Выберите дату и время урока</BottomTitle>
                    <BottomText>
                        В расписании указано время по часовому поясу Europe/Moscow. Сейчас 04:20.
                    </BottomText>
                    <ButtonsGroupDays obj={days} change={getButtonDaysId} />
                    <ButtonsGroupTime
                        obj={timeMorning}
                        change={getButtonTimeId}
                        icon={<Icon name="morning" csswidth="2.2" cssheight="2" color="#c4c4c4" />}
                        text={'Утро'}
                    />
                    <ButtonsGroupTime
                        obj={timeDay}
                        change={getButtonTimeId}
                        icon={<Icon name="day" csswidth="2.2" cssheight="2.2" color="#c4c4c4" />}
                        text={'День'}
                    />
                    <ButtonsGroupTime
                        obj={timeEvening}
                        change={getButtonTimeId}
                        icon={
                            <Icon name="evening" csswidth="2.2" cssheight="1.7" color="#c4c4c4" />
                        }
                        text={'Вечер'}
                    />
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default Enroll;
