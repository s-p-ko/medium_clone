import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topBar'
import Footer from 'components/footer'
import { CurrentUserProvider } from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

function App() {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <TopBar />
                    <Routes />
                    <Footer />
                </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

export default App;
