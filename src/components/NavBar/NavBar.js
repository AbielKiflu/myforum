import React from 'react'
import {Nav,NavBarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,
  NavItem,NavLink} from './NavBar.elements'
import { FaBars, FaTimes } from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import {changeHamburger} from '../../redux/reducers/uiStateReducer'


const NavBar = () => {
  const dispatch = useDispatch();
  const {hamburger,logged}=useSelector((state) =>state.uiState);
  const handleHamburger=(e)=>{
    dispatch(changeHamburger())
    
    }

    const menuItems=(logged)=>{
      if(logged === "true"){
        return (
          <>  
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout">Logout</NavLink> 
            </NavItem>
          </>
        );
      }else{
        return (
          <>
              <NavItem>
                <NavLink to="/login">Login</NavLink> 
              </NavItem>

              <NavItem>
                <NavLink to="/register">Register</NavLink> 
            </NavItem>
          </>
        );
      }

    }

  return (
    <Nav>
        <NavBarContainer>
          <NavLogo to="./">
              <NavIcon/>
          </NavLogo>
 
          <MobileIcon onClick={handleHamburger}>
            {hamburger?<FaBars/>:<FaTimes/>}
          </MobileIcon>


          
          <NavMenu onClick={handleHamburger} click={!hamburger} >
              {menuItems(logged)}
          </NavMenu>     

 

       
          
        </NavBarContainer>
    </Nav>
  )
}

export default NavBar