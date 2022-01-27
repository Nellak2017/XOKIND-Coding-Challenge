import styled from "styled-components";
import { Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import { motion } from "framer-motion";

// Span used to hold the ratings and $$$, along with the name and the X
export const SpecialSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem 0 0;
  margin-right: 2rem;
  height: 1rem;
  align-items: center;
`;

// Delete button used in the carousel
// Optional idea, make the X button appear in the top right corner of the Card as expected
export const DeleteButton = styled.button`
  transition: all 0.25s ease-in-out;
  border: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: red;
  color: white;
  padding: .5rem;

  &:hover {
    transition: all 0.25s ease-in-out;
    border-radius: 25%;
    font-weight: bold;
    text-transform: uppercase;
    font-size: x-large;
    padding-top: .25rem;
  }
`;

export const CardButton = styled(motion.div)`
  width: 100%;
  height: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #242a3a;
  transition: scale 500ms linear;
`;

export const CardButtonBlue = styled(motion.div)`
  display: flex;
  text-align: center;
  width: 100%;
  height: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: aqua;
  transition: all 500ms ease-in-out;
`;

export const CardImage = styled.img`
  height: 125px;
  background-color: gray;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  transition: all 500ms linear;
  overflow: hidden;
`;

export const Card = styled.div`
  &:focus-visible{
    outline: none!important;
  }
  transition: all 100ms ease-in !important;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
  width: 250px;
  background-color: white;
  box-shadow: -2px 0px 10px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: -2px 0px 10px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -2px 0px 10px -2px rgba(0,0,0,0.75);
  transition: transform 1s;
  overflow: hidden;
  &:hover {
    transition: all 50ms ease-in;  
    height: 320px;
    width: 290px;  
    box-shadow: -2px 9px 15px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: -2px 9px 15px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 9px 15px -2px rgba(0,0,0,0.75);
    ${CardButton} {
      display: none;
    }
    ${CardButtonBlue} {
      display: block;
      transform: scaleY(1.5);
    }
    ${CardImage} {
      background-size: 110%;
    }
  }
`;

export const CardText = styled.div`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
  height: 60%;

  & > h2 {
      font-size: 1.5rem;
      font-weight: bold;
  }

  & > h3 {
      font-size: 1rem;
      font-weight: 100;
  }

  & input {
    height: 1rem;
    width: 10rem;
  }

  &:focus-visible{
    outline: none!important;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #242a3a60;
  //background-color: transparent;
  position: absolute;
  width: 350px;
  left: 0;
  height: 21rem;
`;

export const SliderContainer = styled.div`
  &:focus-visible{
    outline: none!important;
  }
  position: relative;
  left: 60px;
  height: 10rem;
  width: 80%;
  padding: 1rem 0 1rem 2rem;

  //background-color: rgba(121,204,238,.5);
  background-color: transparent;

  & ul.animating {
    transition: all 100ms ease-in;
  }
`;

export const BackButton = styled(ButtonBack)`
  //background-color: white;
  z-index: 999;
  padding: 10px;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  //background-color: #242a3a;
  background-color: transparent;
  border: 2px solid white;
  //color: #242a3a;
  color: white;
  transition: 0.4s;
  &:hover {
    color: aqua;
    border: 3px solid aqua;
  }
`;

export const NextButton = styled(ButtonNext)`
  //background-color: white;
  z-index: 999;
  padding: 10px;
  border-radius: 50%;
  margin: 15px;
  width: 50px;
  height: 50px;
  display: inline-block;
  //background-color: #242a3a;
  background-color: transparent;
  //color: #242a3a;
  color: white;
  border: 2px solid white;
  transition: 0.4s;
  &:hover {
    color: aqua;
    border: 3px solid aqua;
  }
`;

export const StyledSlide = styled(Slide)`
  &:focus-visible{
    outline: none!important;
  }
  &:focus{
    outline: none!important;
  }
  transition: all 700ms linear;
  &.hidden {
    transition-delay: ${({ index }) => (index % 3) * 150}ms;
    transform: translateX(-150px);
    opacity: 0;
  }
  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledSlider = styled(Slider)`
  overflow: unset;
  & :focus-visible{
    outline: none!important;
  }
`;

export const CarouselContainer = styled.div`
  & :focus-visible{
    outline: none!important;
  }
  overflow: hidden;
  height: 100%;
  width: calc(100% - 150px);
  margin-left: 150px;
`;
