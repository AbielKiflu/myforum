import {MainContainer,SideContainer,BodyContainer} from '../../globalStyle';
import {Login,Register,Card} from '../../components'

function Guest() {
  return (
  <>
      <MainContainer>
        <BodyContainer>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </BodyContainer>
        <SideContainer>
          <Login/>
          <Register/>
      </SideContainer>
      </MainContainer>

  </>

  );
}

export default Guest;
