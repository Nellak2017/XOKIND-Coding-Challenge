import React, { useEffect, useState } from 'react';
import { auth, colRef } from "../firebase.js"; // Used to Talk to Firebase API
import { getDocs, addDoc } from "firebase/firestore"; // Used to talk to Firestore API
import Nav from '../components/Nav/Nav';
import SideNav from '../components/SideNav/SideNav';
import Carosel from '../components/Carosel/Carosel';
import { CarouselContainer } from "../components/Carosel/Carosel.elements.js";
import { IconContext } from 'react-icons/lib';
import { IoMdAdd } from 'react-icons/io'; // Add Icon
import { AiFillEdit } from 'react-icons/ai'; // Edit Icon
import { MdDeleteForever } from 'react-icons/md'; // Delete Icon
import { useHistory } from 'react-router-dom';

const Home = () => {
    const RouteHistory = useHistory();

    const [places, setPlaces] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // Upon entering Home page, grab all the Places to be used only Once
    useEffect(() => {
        const docs = getDocs(colRef).then((snapshot) => {
            setPlaces([]);
            snapshot.docs.forEach((doc) => {
                setPlaces(old => [...old, { ...doc.data(), id: doc.id }]);
            })
        }).catch(err => {
            alert(err);
        });
    }, [isAdding, isEditing, isDeleting]);

    const handleAdd = () => {
        setIsAdding(!isAdding);
        addDoc(colRef, { 
            name: "Default Name",
            imageUrl: "https://picsum.photos/200",
            rating: 3,
            price: "$$"
        })
            .then()
            .catch((err) => alert(err))
    }
    const handleEdit = () => { setIsEditing(!isEditing) }
    const handleDelete = () => { setIsDeleting(!isDeleting) }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <>
                    <Nav>
                        <h1>Places</h1>
                        <span className="button-group">
                            <button className="nav-button">Sort by: Rating (placeholder)</button>
                            <button
                                className="nav-button"
                                onClick={() => { RouteHistory.push("/login"); auth.signOut(); }}
                            >
                                Sign Out
                            </button>
                        </span>
                    </Nav>
                    <SideNav>
                        <IoMdAdd size={32} className="icon" onClick={handleAdd} />
                        <AiFillEdit size={32} className="icon" onClick={handleEdit} />
                        <MdDeleteForever size={32} className="icon" onClick={handleDelete} />
                    </SideNav>
                    <CarouselContainer>
                        <h2 style={{ fontSize: '2rem', color: 'black', margin: '2rem 0 2rem 3.5rem' }}>
                            List of Places
                        </h2>
                        <Carosel data={places} setData={setPlaces} isAdding={isAdding} setIsAdding={setIsAdding} isEditing={isEditing} setIsEditing={setIsEditing} isDeleting={isDeleting} setIsDeleting={setIsDeleting} />
                    </CarouselContainer>
                </>
            </IconContext.Provider>
        </>
    );
}

export default Home;