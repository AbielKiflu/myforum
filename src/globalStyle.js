import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyles =createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}

 
`;



export const Container=styled.div`
z-index:1;
width:100%;
margin-right:auto;
margin-left:auto;

`;



export default GlobalStyles;