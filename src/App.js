
import './App.css';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import React from 'react';
import Home from './components/Home';
import Search from './components/Search';
import { BrowserRouter , Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <header>
        <h3>ProHooks</h3>
        <nav>
          <Link to="react-prohooks/" className="links" >Home</Link>
          <Link to="react-prohooks/" className="links" >Search</Link>
        </nav>
      </header>
      <Security issuer='https://dev-91868223.okta.com/oauth2/default'
        clientId='0oa3euf1wsa8hq0h65d7'
        redirectUri={window.location.origin + '/callback'}
        pkce={true}>
        <Route path='/'  component={Home} />
        <SecureRoute path='/search' exact={true} component={Search} />
        <Route path='/callback' element={LoginCallback} />
      </Security>
    </BrowserRouter>
  );
}

export default App;
