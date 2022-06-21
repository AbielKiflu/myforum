import React from 'react'
import {Nav,NavBarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,
  NavItem} from './NavBar.elements'
import { FaBars, FaTimes } from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import {changeHamburger} from '../../redux/reducers/uiStateReducer'


const NavBar = () => {
  const dispatch = useDispatch();
  const {hamburger}=useSelector((state) =>state.uiState);

  const handleHamburger=(e)=>{
    dispatch(changeHamburger())
    console.log(hamburger);
  }

  return (
    <Nav>
        <NavBarContainer>
          <NavLogo to="./">
              <NavIcon/>
          </NavLogo>
 
          <MobileIcon onClick={handleHamburger}>
            {hamburger?<FaTimes/>:<FaBars/>}
          </MobileIcon>

          <NavMenu>
          <NavItem>
             login 
          </NavItem>
          <NavItem>
             Register 
          </NavItem>
          <NavItem>
             Home 
          </NavItem>
        </NavMenu>

       
          
        </NavBarContainer>
    </Nav>
  )
}

export default NavBar