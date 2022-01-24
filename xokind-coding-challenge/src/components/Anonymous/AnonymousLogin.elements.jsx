import styled from 'styled-components';

// Top level container used to hold nested flex boxes
export const LoginTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh; // So that it can use the full height of the viewport
    width: 100%;
`;

// Flex container that is used to hold Login elements
export const LoginCard = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;

    // Make a media query for Mobile Devices
    // 767px is the commonly accepted max-width for mobile devices
    @media all and (max-width:767px){
        width: 50%;
    }
`;
export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin: auto; // aligns the img inside the flex element
`;
// Will have the name of the Challenge
export const Subtitle = styled.h2`
    margin: 0;
    padding-top: 1rem;
    font-size: large;
`;
// Will have the sign in Method
export const Title = styled.h1`
    margin: 0;
    padding-bottom: 1rem;
    font-size: x-large;
`;

// Button made specifically for the AnonymousLogin, however, it may be used elsewhere
export const SignInButton = styled.button`
    background-color: rgb(255,111,4);
    border: 0;
    color: white;
    text-transform: uppercase;
    font-size: large;
    width: 100%;
    padding: .5rem;

    &:hover{
        transition: .25s;
        font-weight: bold;
        // box-shadow added to add depth on hover. Generated with online generator
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);
    }
`;