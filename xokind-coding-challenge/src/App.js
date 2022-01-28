import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './contexts/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

/* 
TODO:
~~ (Completed in a Hacky way) Add the Change $$$ functionality ==> https://formik.org/docs/overview 
Clean up Code and make it more well documented and pretty
Make the carosel Mobile Responsive
Ensure all buttons are functioning as intended. Example: Sign Out signs out of Anonymous Account
Possibly move the X button to top right of each card
Figure out how to sort data by price or by ratings and implement
Add the 3 dots to the bottom of the carosel
Figure out why the env variables won't work properly
Figure out more about databases
Figure out about testing 
...
*/

/* 
Biggest time wasters:
1. Getting Inputs and Forms to work as intended due to passing references and other crap
2. Figuring out how to immutably update a list to push it to the firestore onClick 
3. Figuring out how to use Firebase Auth, Firestore, etc.
4. Figuring out how to use Carosel component (Unexpected Styling behaviors)

Time waster solutions:

1. Use a third party library that automates this and has intended behaviors ==> https://formik.org/docs/overview
2. Use a third party that can help you to immutably update information ==> https://github.com/kolodny/immutability-helper
3. Simply work with Firebase alot to get an intuition for how it works, and look at docs for query ref
4. Make your own or use a better third party library
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
