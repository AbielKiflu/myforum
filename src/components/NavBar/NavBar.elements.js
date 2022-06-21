import styled from 'styled-components';
import {Container} from '../../globalStyle'
import {FaBookReader} from 'react-icons/fa';
import {Link} from  'react-router-dom';



export const Nav=styled.nav`
    background:#082a3d;
    height:5rem;
    display:flex;
    justify-content: center;
    position:sticky;
    top:0;
    z-index:1000;
`;



export const NavBarContainer=styled(Container)`
    display:flex;
    position:relative;
    justify-content:space-between;
    height:5rem;
    ${Container}
`;


export const NavLogo=styled(Link)`
    color:#fff;
    text-decoration:none;
    display:flex;
    align-items:center;
    padding-left:1rem;
    padding-right:1rem;
`;



export const NavIcon=styled(FaBookReader)`
    margin-right:0.5rem;
    font-size:2rem;
 
`;



export const MobileIcon=styled.div`
    color:#fff;
    font-size:1.5rem;
    text-decoration:none;
    display:flex;
    align-items:center;
    padding-left:1rem;
    padding-right:1rem;

    @media only screen and (min-width: 700px) {
        display:none;
    }
`;

//outline:solid 3px white;

export const NavMenu=styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    background:#082a3d;
    color:#fff;
    font-size:1.5rem;
    width:100%;
    gap:0.5rem;
    align-items:center;
    align-self:center;
    position:absolute;
    top:5rem;

  

    @media only screen and (min-width: 700px) {
        display:flex;
        flex-direction:row;
        list-style:none;
        justify-content:flex-end;
        position:static;
        gap:1rem;
        align-self:center;
        padding-right:1rem;
    }

`;


export const NavItem=styled.li`
    cursor:pointer;
     &:hover{
        border-bottom:2px solid #fff;
     }
`;