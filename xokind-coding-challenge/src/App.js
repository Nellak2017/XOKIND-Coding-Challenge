import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './contexts/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

/* 
TODO:
Make the carosel Mobile Responsive
Possibly move the X button to top right of each card
Figure out how to sort data by price or by ratings and implement
Ensure all buttons are functioning as intended. Example: Sign Out signs out of Anonymous Account
Get Rid of onBlur, it is annoying
Add the 3 dots to the bottom of the carosel
Clean up Code and make it more well documented and pretty
*/

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
