import styled from 'styled-components';
import {Link} from 'react-router-dom';
 

export const Title=styled.h4`
    width:100%;
    text-align:center;
    margin-top:1rem;
`;

 

export const Body=styled.div`
    display:flex;
    justify-content:space-around;
    margin-top:1rem;
`;

export const Topic=styled.div`
    display:flex;
    flex-direction: column;
    margin-top:1rem;
`;

export const Post=styled.div`
    display:flex;
    flex-direction: column;
    margin-top:1rem;
`;

export const NavLink=styled(Link)`
color:#000;
text-decoration:none;
`;
