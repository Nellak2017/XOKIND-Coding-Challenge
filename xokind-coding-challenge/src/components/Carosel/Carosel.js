import React, { useEffect, useState, useRef } from 'react';
import app, { auth, colRef, firestore } from "../../firebase"; // Used to Talk to Firebase API
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"; // Used to talk to Firestore API
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FirebaseLogo from "../../images/FirebaseLogo.png"; // this is used for example only
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
    SpecialSpan,
    DeleteButton,
    Card,
    ButtonContainer,
    SliderContainer,
    StyledSlide,
    StyledSlider,
    BackButton,
    NextButton,
    CardText,
    CardImage,
    CardButton,
    CardButtonBlue
} from "./Carosel.elements";

const Carosel = ({ data, setData, isEditing, setIsEditing, isDeleting, setIsDeleting }) => {

    const [nameRef, setNameRef] = useState([]); // This is because the input likes to not focus, just like me
    const [ratingRef, setRatingRef] = useState([]);

    // add or remove refs for the input elements
    useEffect(() => {
        setNameRef((nameRefs) =>
            Array(data.length)
                .fill()
                .map((_, i) => nameRefs[i] || React.createRef()),
        );
        setRatingRef((ratingRefs) =>
            Array(data.length)
                .fill()
                .map((_, i) => ratingRefs[i] || React.createRef()),
        );
    }, [data]);

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={1}
            totalSlides={data.length}
            visibleSlides={3}
            step={3}
            infinite={true}
        >
            <ButtonContainer>
                <BackButton>
                    <FiChevronLeft size="1.5em" />
                </BackButton>
                <NextButton>
                    <FiChevronRight size="1.5em" />
                </NextButton>
            </ButtonContainer>
            <SliderContainer>
                <StyledSlider classNameAnimation="animating">
                    {data?.map((item, index) => (
                        <StyledSlide
                            key={index}
                            index={index}
                            classNameHidden="hidden"
                            classNameVisible="visible"
                        >
                            <Card>
                                <CardImage backgroundImage={item.imageUrl} />
                                <CardText>
                                    <SpecialSpan>

                                        {isEditing ?
                                            <input
                                                type="text"
                                                name="name"
                                                ref={nameRef[index]}
                                                placeholder={item.name}
                                                defaultValue={data[index].name}
                                                onClick={() => nameRef[index].current.focus()}
                                                onChange={e => {
                                                    setData(old => old.map((item, i) => {
                                                        // see also: https://redux.js.org/usage/structuring-reducers/immutable-update-patterns
                                                        // The point of this is to immutably update the data
                                                        if (i !== index) {
                                                            // if it isn't our item, don't change
                                                            return item;
                                                        }
                                                        // otherwise, return the updated value
                                                        return {
                                                            ...item,
                                                            name: e.target.value
                                                        }

                                                    })
                                                    )
                                                }}
                                                onBlur={() => {
                                                    const docRef = doc(firestore, 'Places', item.id);
                                                    setIsEditing(!isEditing);
                                                    updateDoc(docRef, { name: data[index].name })
                                                        .then()
                                                        .catch((err) => alert(err))
                                                }}
                                            />
                                            :
                                            <h2>{item.name}</h2>
                                        }
                                        {
                                            isDeleting ? 
                                            <DeleteButton onClick={() => {
                                                const docRef = doc(firestore, 'Places', item.id);
                                                setIsDeleting(false);
                                                deleteDoc(docRef)
                                                    .then()
                                                    .catch((err) => alert(err))

                                            }}>x</DeleteButton>
                                            :""
                                        }
                                    </SpecialSpan>
                                    <SpecialSpan>
                                        {isEditing ?
                                            <input
                                                style={{ width: '2rem' }}
                                                type="number"
                                                name="rating"
                                                min={1}
                                                max={5}
                                                ref={ratingRef[index]}
                                                placeholder={item.rating}
                                                defaultValue={data[index].rating}
                                                onClick={() => ratingRef[index].current.focus()}
                                                onChange={e =>
                                                    e.target.value >= 1 && e.target.value <= 5
                                                        ?
                                                        setData(old => old.map((item, i) => {
                                                            // see also: https://redux.js.org/usage/structuring-reducers/immutable-update-patterns
                                                            // The point of this is to immutably update the data
                                                            if (i !== index) {
                                                                // if it isn't our item, don't change
                                                                return item;
                                                            }
                                                            // otherwise, return the updated value
                                                            return {
                                                                ...item,
                                                                rating: e.target.value
                                                            }
                                                        }))
                                                        :
                                                        setData(old => old.map((item, i) => {
                                                            // see also: https://redux.js.org/usage/structuring-reducers/immutable-update-patterns
                                                            // The point of this is to immutably update the data
                                                            if (i !== index) {
                                                                // if it isn't our item, don't change
                                                                return item;
                                                            }
                                                            // otherwise, return the updated value
                                                            return {
                                                                ...item,
                                                                rating: 3
                                                            }

                                                        })
                                                        )
                                                }
                                                onBlur={() => {
                                                    const docRef = doc(firestore, 'Places', item.id);
                                                    setIsEditing(!isEditing);
                                                    updateDoc(docRef, { rating: data[index].rating })
                                                        .then()
                                                        .catch((err) => alert(err))
                                                }}
                                            />
                                            :
                                            <h3>{[...Array(Number(item.rating))].map((e, i) => <span key={i}>⭐</span>)}</h3>}
                                        <h3>{item.price}</h3>
                                    </SpecialSpan>
                                </CardText>
                                <CardButton />
                                <CardButtonBlue />
                            </Card>
                        </StyledSlide>
                    ))}
                </StyledSlider>
            </SliderContainer>
        </CarouselProvider>
    );
}

export default Carosel;