import {MainContainer,SideContainer,MainContainerBodyContainer} from '../../globalStyle';
import {Login,Register,Card} from '../../components'
import Boards from '../Boards/Boards'

function Guest() {
  return (
  <MainContainer>
    <MainContainerBodyContainer>
      <Boards/>
    </MainContainerBodyContainer>
    <SideContainer>
      <Login/>
      <Register/>
    </SideContainer>
  </MainContainer>
  );
}

export default Guest;
