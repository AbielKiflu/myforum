import {MainContainer,SideContainer,BodyContainer} from '../../globalStyle';
import {Login,Register} from '../../components'
import Boards from '../Boards/Boards'
import {useSelector} from 'react-redux';

function Guest() {
  const {logged}=useSelector((state) =>state.uiState);
  const menuItemsLogin=(logged)=>{
    if(logged === "false"){
      return (
        <SideContainer>
          <Login/>
          <Register/>
        </SideContainer>
      );
    }
  }

  return (
  <MainContainer>
    <BodyContainer>
      <Boards/>
    </BodyContainer>
    {menuItemsLogin(logged)}
  </MainContainer>
  );
}

export default Guest;
