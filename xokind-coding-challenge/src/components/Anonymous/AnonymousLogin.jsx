import React, { useCallback } from 'react';
import FirebaseLogo from '../../images/FirebaseLogo.png';
import { LoginTopContainer, LoginCard, Logo, Subtitle, Title, SignInButton } from './AnonymousLogin.elements';
import { useHistory } from 'react-router-dom';
import app, { auth } from '../../firebase';
import { withRouter } from "react-router";

const AnonymousLogin = () => {
    // useCallback is used to memoize the callback, similar to useEffect or useRef or useMemo
    const RouteHistory = useHistory();
    const handleSignUp = useCallback(async event => {
        // event.preventDefault() is called to prevent a page reload when the sign up button is clicked 
        event.preventDefault();
        try {
            // Call the firebase auth API for signInAnonymously
            // see: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinanonymously
            await auth.signInAnonymously();
            // if signed in anonymously, direct us to our home page
            RouteHistory.push("/");
        } catch (error) {
            alert(error);
        }
    }, [RouteHistory]);


    return (
        <LoginTopContainer>
            <LoginCard>
                <Logo src={FirebaseLogo} alt="Firebase Logo" />
                <Subtitle>XOKind - Frontend coding challenge</Subtitle>
                <Title>Anonymous Sign In</Title>
                <SignInButton onClick={handleSignUp}>ANONYMOUSLY SIGN IN</SignInButton>
            </LoginCard>
        </LoginTopContainer>
    );
}

export default withRouter(AnonymousLogin);