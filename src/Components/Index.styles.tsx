import Styled, { keyframes } from "styled-components";

export const Container = Styled.div`
display : flex;
flex-direction:column;
align-items: center;
//justify-content: center;
min-height:95vh;



`;

export const Wrapper = Styled.div`


min-height:90vh;
display : flex;
align-items: center;
justify-content:center;
width:100%

`;

export const StartButton = Styled.button`
padding : 10px;
width:30%;
align-items:center;
background:yellow;
border:none;
border-radius: 5px;
color:Black;
font-family: 'Dongle', sans-serif;
font-weight:500;
font-size: 2rem
`;

export const QuestionWrapper = Styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:center;
width:95%;
margin: 0 5%;
min-height:80vh;



`;

export const Image = Styled.img`
width: 100%;
height:300px;
`;

export const ImageContainer = Styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;


@media only screen and (max-width: 1024px) {
    width: 100%;



}

`;

export const Score = Styled.h3`
font-family: 'Comfortaa', cursive;

`;

export const QuestionContinerBox = Styled.div`
margin:15px;
display:flex;
flex-direction:column;
justify-content: center;
text-align:left;





`;

export const QuestionContainer = Styled.div`
flex-direction:column;
`;

export const QuestionNo = Styled.h4`
font-family: 'Comfortaa', cursive;
font-size: 1.5rem;
margin-bottom: 15px

`;
export const Question = Styled.h3`
font-family: 'Dongle', sans-serif;
font-size: 2rem;
font-weight: 500;
line-height: 0.7;
margin-bottom:10px
`;

export const ButtonContainer = Styled.div`


`;

type Props = {
  correct: boolean;
  userClicked: boolean;
};

export const OptionsButtons = Styled.button<Props>`
background-color : ${({ correct }) => (correct === true ? "Green" : "yellow")};
padding: 8px;
border-radius: 5px;
border:1px thin black;
margin: 4px;
width: 70%;
max-width:80%;

&:hover {
 color: black   
}

&:active{
    background-color : ${({ userClicked }) =>
      userClicked === true ? "Green" : "red"};

}
`;

export const NextButton = Styled.button`
width: 50%;
margin-bottom: 5%;
background-color:black;
color:white;
align-items:center;
justify-content: center;
display:flex;
padding: 5px;
border-radius: 5px;
`;

export const ButtonWrapper = Styled.div`
`;

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

export const LoadingSpinner = Styled.div`
border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid yellow; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${rotate} 2s linear infinite;
`;
