import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './contexts/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

/* 
TODO:
X Set up Anonymous Authentication with Firebase
Set up Firestore with Firebase
Store place details in Firestore
Enable CUD operations for the Add, Edit, and Delete buttons (Affect the carosel elements when pressed, calls for a context or redux)
Enable Private routes that can only be accessed when logged in
Make the carosel Mobile Responsive, and possibly move the buttons
Figure out how to sort data by price or by ratings and implement
Ensure all buttons are functioning as intended. Example: Sign Out signs out of Anonymous Account
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
