import {MainContainer,SideContainer,BodyContainer} from '../../globalStyle';
import {Login,Register,Card} from '../../components'
import Boards from '../Boards/Boards'

function Guest() {
  return (
  <MainContainer>
    <BodyContainer>
      <Boards/>
    </BodyContainer>
    <SideContainer>
      <Login/>
      <Register/>
    </SideContainer>
  </MainContainer>
  );
}

export default Guest;
