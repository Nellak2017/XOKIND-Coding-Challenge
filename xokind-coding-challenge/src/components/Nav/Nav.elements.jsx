import styled from 'styled-components';

// Standard Nav bar styling, inspired by Material UI styles
export const Navbar = styled.nav`
    // All content inside of horizontal flex container, spaced far apart
    z-index: 999;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: rgba(0,162,232,1);

    & h1 {
        font-size: xx-large;
        padding: 0;
        margin: 1rem;
        padding-left: 6rem;
    }

    // Make a media query for Mobile Devices
    // 767px is the commonly accepted max-width for mobile devices
    @media all and (max-width:767px){
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        row-gap: 1rem;
        text-align: center;

        & h1 {
            padding: 0;
            margin: 0;
        }
    }

    // Instead of making a side nav styled component, reuse Nav component, just with side variant
    // This will hold the icons for 
    & .side-nav {
        position: static;
        display: flex;
        flex-direction: column;
        width: fit-content; // fit the icons placed inside
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        color: white;
        background-color: transparent;

    }

    & .button-group {
        display: flex;
        height: 100%;
        column-gap: 1rem;
        margin: 0;
        padding: 0 1rem 0 0;
        // Make a media query for Mobile Devices
        // 767px is the commonly accepted max-width for mobile devices
        @media all and (max-width:767px){
            width: 50%;
            padding: 0;
            padding-bottom: .5rem;
            flex-direction: row;
            justify-content: center;
            text-align: center;
        }
    }

    & .nav-button {
        border: 0;
        color: white;
        background-color: transparent;
        padding-bottom: .1rem;
        font-size: large;

        &:hover {
            transition: .1s;
            border-bottom: 1px solid white;
            margin-bottom: -1px;
            cursor: pointer;
        }
    }
`;