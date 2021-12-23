import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import Home from './Home';
import Search from './Search';
import Login from './login';
import { Routes, Route } from 'react-router-dom';

const Main = () => {


    const restoreOriginalUri = () => {
        // Callback function to restore URI during login
    };
    console.log(window.location.host);
    return (

        <Security
            clientId={`0oa3euf1wsa8hq0h65d7`}
            issuer={`https://dev-91868223.okta.com/oauth2/default`}
            redirectUri={`http://${window.location.host}/search`}
            scopes={['openid', 'profile', 'email']}
            pkce={true}
            restoreOriginalUri={restoreOriginalUri}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path={`http://${window.location.host}/search`} element={<LoginCallback />} />
            </Routes>
        </Security>
    )



}

export default Main