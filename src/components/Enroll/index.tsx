import React, { useState } from 'react';
import Icon from './../Icon';
import Select from './../Select';
import ButtonsGroup from '../ButtonsGroup';
import ButtonsGroupDays from '../ButtonsGroupDays';
import ButtonsGroupTime from '../ButtonsGroupTime';
import { IDataSubject } from '../../interfaces';
import { Container, Title, Wrapper, Top, TopText, Bottom, BottomTitle, BottomText } from './styles';

interface Props {
    data: Array<IDataSubject>;
}

const Enroll: React.FC<Props> = ({ data }) => {
    const [subjects, setSubjects] = useState(data);

    const [days, setDays] = useState(subjects[0].days);

    const [timeMorning, setTimeMorning] = useState(subjects[0].days[0].timeMorning);

    const [timeDay, setTimeDay] = useState(subjects[0].days[0].timeDay);

    const [timeEvening, setTimeEvening] = useState(subjects[0].days[0].timeEvening);

    const getButtonId = (id: number) => {
        const activeSubject = subjects.map((obj: any) => ({ ...obj, active: obj.id === id }));
        setSubjects(activeSubject);
        setDays(activeSubject[id].days);
    };

    const getButtonDaysId = (id: number) => {
        const activeDay = days.map((obj: any) => ({ ...obj, active: obj.id === id }));
        setDays(activeDay);
        setTimeMorning(activeDay[id].timeMorning);
        setTimeDay(activeDay[id].timeDay);
        setTimeEvening(activeDay[id].timeEvening);
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
