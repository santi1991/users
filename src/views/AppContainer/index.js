import React, { useState } from 'react';
import Splash from '../Splash';
import Home from '../Home';
import Container from '@material-ui/core/Container';

const AppContainer = () => {

    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Splash endLoading={() => setIsLoading(false)} />;
    }
    return (
        <>
            <Container maxWidth='md'>
                <h4>Users Management App</h4>
                {
                    !isLoading && <Home />
                }
            </Container>
        </>
    );
};

export default AppContainer;
