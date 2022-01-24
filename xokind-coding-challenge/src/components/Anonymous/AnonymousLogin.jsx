import React from 'react';
import FirebaseLogo from '../../images/FirebaseLogo.png';
import {LoginTopContainer,LoginCard,Logo,Subtitle,Title,SignInButton} from './AnonymousLogin.elements';
import { useHistory } from 'react-router-dom';

const AnonymousLogin = () => {
    const history = useHistory();
    return ( 
        <LoginTopContainer>
            <LoginCard>
                <Logo src={FirebaseLogo} alt="Firebase Logo"/>
                <Subtitle>XOKind - Frontend coding challenge</Subtitle>
                <Title>Anonymous Sign In</Title>
                <SignInButton onClick={() => history.push('/')}>ANONYMOUSLY SIGN IN</SignInButton>
            </LoginCard>
        </LoginTopContainer>
    );
}
 
export default AnonymousLogin;