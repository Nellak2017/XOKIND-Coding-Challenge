import styled from 'styled-components';

// Standard Nav bar styling, inspired by Material UI styles
export const Navbar = styled.nav`
    z-index: 999;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    row-gap: 1rem;
    width: fit-content;
    height: 100%;
    align-items: center;
    color: black;
    background-color: rgba(51,51,51,1);

    // Make a media query for Mobile Devices
    // 767px is the commonly accepted max-width for mobile devices
    @media all and (max-width:767px){
        position: fixed;
        bottom: 0;
        padding-left: 0;
        padding-right: 0;
        width: 100%;
        height: 5rem;
        flex-direction: row;
        justify-content: center;
        justify-items: center;
        align-items: center;
        column-gap: 1rem;
        text-align: center;

    }

    // Style any icons inside the container
    & .icon {
        transition: all 0.25s ease-in-out;
        background-color: rgba(0,162,232);
        color: white;
        border-radius: 50%; // make the icon look embedded in a blue circle
        padding: .5rem;
        //border: 1px solid white;

        &:hover {
            transition: all 0.25s ease-in-out;
            //border: 1px solid black;
            cursor: pointer;
            border-radius: 25%; 
        }
    }
`;