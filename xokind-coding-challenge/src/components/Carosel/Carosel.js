import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FirebaseLogo from "../../images/FirebaseLogo.png"; // this is used for example only
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
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

// Dummy data that will later be fetched by the firestore API
const data = [
    {
        title: "Flat Tire",
        rating: "⭐⭐⭐⭐",
        price: "$$",
        src: FirebaseLogo
    },
    {
        title: "Star Bucks",
        rating: "⭐⭐⭐",
        price: "$$$",
        src: FirebaseLogo
    },
    {
        title: "Burger King",
        rating: "⭐⭐",
        price: "$",
        src: FirebaseLogo
    },
    {
        title: "Taco bell",
        rating: "⭐⭐",
        price: "$",
        src: FirebaseLogo
    },
    {
        title: "Subway",
        rating: "⭐⭐⭐",
        price: "$",
        src: FirebaseLogo
    },
    {
        title: "Mcallistars",
        rating: "⭐⭐⭐⭐",
        price: "$$$",
        src: FirebaseLogo
    },
];

const Carosel = () => {

    return (
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={50}
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
                                <CardImage backgroundImage={item.src} />
                                <CardText>
                                    <h2>{item.title}</h2>
                                    <span style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',padding:'0 2rem 0 0'}}>
                                        <h3>{item.rating}</h3>
                                        <h3>{item.price}</h3>
                                    </span>
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