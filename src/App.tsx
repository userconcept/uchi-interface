import React from 'react';
import styled from 'styled-components';

import Main from './components/Main';

import Enroll from './components/Enroll';

const AppWrapper = styled.div`
    position: relative;
    min-height: 100%;
`;

const App: React.FC = () => {
    const dataSubjects = [
        {
            id: 0,
            text: 'Русский язык',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 1,
                    day: 'Завтра',
                    date: '15 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 2,
                    day: 'Воскресенье',
                    date: '16 марта',
                    active: true,
                    timeMorning: [
                        {
                            id: 0,
                            text: '9:40',
                            active: false,
                        },
                        {
                            id: 1,
                            text: '10:20',
                            active: true,
                        },
                        {
                            id: 2,
                            text: '11:40',
                            active: false,
                        },
                    ],
                    timeDay: [
                        {
                            id: 0,
                            text: '12:00',
                            active: false,
                        },
                        {
                            id: 1,
                            text: '14:20',
                            active: false,
                        },
                        {
                            id: 2,
                            text: '15:00',
                            active: true,
                        },
                        {
                            id: 3,
                            text: '16:40',
                            active: false,
                        },
                    ],
                    timeEvening: [
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
                            text: '21:20',
                            active: false,
                        },
                    ],
                },
                {
                    id: 3,
                    day: 'Понедельник',
                    date: '17 марта',
                    active: false,
                    timeMorning: [
                        {
                            id: 0,
                            text: '9:00',
                            active: false,
                        },
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 4,
                    day: 'Вторник',
                    date: '18 марта',
                    active: false,
                    timeMorning: [
                        {
                            id: 0,
                            text: '9:00',
                            active: false,
                        },
                        {
                            id: 1,
                            text: '10:20',
                            active: true,
                        },
                        {
                            id: 2,
                            text: '11:40',
                            active: false,
                        },
                    ],
                    timeDay: [
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
                            text: '16:40',
                            active: false,
                        },
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 5,
                    day: 'Среда',
                    date: '19 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 1,
            text: 'Английский язык',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 1,
                    day: 'Завтра',
                    date: '15 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
                        {
                            id: 0,
                            text: '12:00',
                            active: false,
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 2,
                    day: 'Воскресенье',
                    date: '16 марта',
                    active: true,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 2,
            text: 'Алгебра',
            active: true,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 1,
                    day: 'Завтра',
                    date: '15 марта',
                    active: false,
                    timeMorning: [
                        {
                            id: 0,
                            text: '9:00',
                            active: false,
                        },
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 2,
                    day: 'Воскресенье',
                    date: '16 марта',
                    active: true,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 3,
                    day: 'Понедельник',
                    date: '17 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 4,
                    day: 'Вторник',
                    date: '18 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 5,
                    day: 'Среда',
                    date: '19 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 3,
            text: 'Геометрия',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 1,
                    day: 'Завтра',
                    date: '15 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 2,
                    day: 'Воскресенье',
                    date: '16 марта',
                    active: true,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 3,
                    day: 'Понедельник',
                    date: '17 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 4,
            text: 'Физика',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 5,
            text: 'Химия',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 1,
                    day: 'Завтра',
                    date: '15 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 2,
                    day: 'Воскресенье',
                    date: '16 марта',
                    active: true,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 6,
            text: 'Биология',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 7,
            text: 'История',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 1,
                    day: 'Завтра',
                    date: '15 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 2,
                    day: 'Воскресенье',
                    date: '16 марта',
                    active: true,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
                {
                    id: 3,
                    day: 'Понедельник',
                    date: '17 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
        {
            id: 8,
            text: 'Обществознание',
            active: false,
            days: [
                {
                    id: 0,
                    day: 'Сегодня',
                    date: '14 марта',
                    active: false,
                    timeMorning: [
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
                    ],
                    timeDay: [
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
                    ],
                    timeEvening: [
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
                    ],
                },
            ],
        },
    ];

    return (
        <AppWrapper>
            <Main>
                <Enroll data={dataSubjects} />
            </Main>
        </AppWrapper>
    );
};

export default App;
