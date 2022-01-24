import React from 'react';
import Nav from '../components/Nav/Nav';
import SideNav from '../components/SideNav/SideNav';
import Carosel from '../components/Carosel/Carosel';
import { CarouselContainer } from "../components/Carosel/Carosel.elements.js";
import { IconContext } from 'react-icons/lib';
import { IoMdAdd } from 'react-icons/io'; // Add Icon
import { AiFillEdit } from 'react-icons/ai'; // Edit Icon
import { MdDeleteForever } from 'react-icons/md'; // Delete Icon

const Home = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <>
                    <Nav>
                        <h1>Places</h1>
                        <span className="button-group">
                            <button className="nav-button">Sort by: Rating (placeholder)</button>
                            <button className="nav-button">Sign Out</button>
                        </span>
                    </Nav>
                    <SideNav>
                        <IoMdAdd size={64} className="icon" />
                        <AiFillEdit size={64} className="icon" />
                        <MdDeleteForever size={64} className="icon" />
                    </SideNav>
                    <CarouselContainer>
                        <h2 style={{ fontSize: '2rem', color: 'black', margin: '2rem 0 2rem 3.5rem' }}>
                            List of Places
                        </h2>
                        <Carosel />
                    </CarouselContainer>
                </>
            </IconContext.Provider>
        </>
    );
}

export default Home;