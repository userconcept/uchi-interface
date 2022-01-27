import React from 'react';
import styled from 'styled-components';

import Main from './components/Main';

import Enroll from './components/Enroll';

const AppWrapper = styled.div`
    position: relative;
    min-height: 100%;
`;

const App: React.FC = () => {
    return (
        <AppWrapper>
            <Main>
                <Enroll />
            </Main>
        </AppWrapper>
    );
};

export default App;
