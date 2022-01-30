import React from 'react';
import styled from 'styled-components';

import Main from './components/Main';

import Enroll from './components/Enroll';

import { dataSubjects } from './../src/data';

const AppWrapper = styled.div`
    position: relative;
    min-height: 100%;
`;

const App: React.FC = () => {
    return (
        <AppWrapper>
            <Main>
                <Enroll data={dataSubjects} />
            </Main>
        </AppWrapper>
    );
};

export default App;
