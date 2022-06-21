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

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding:0.5rem;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding:0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;

`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap:wrap;
 
`;

export const MainContainer = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;


  @media only screen and (min-width: 700px) {
        flex-direction: row;
    }
`;

export const SideContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column; 
`;


export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin:0.2rem;
  padding:0.2rem;
  width: 40%;
  border-radius: 5px;

&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;



export default GlobalStyles;