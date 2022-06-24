import {Btn} from '../Button/Button.elements'
import {Input} from './Login.elements'
import {InputContainer,ButtonContainer,FormContainer} from '../../globalStyle';
 


const Login = () => {

const loginHandler=(e)=>{
     
}




return (
          <fieldset>
    <legend>Login:</legend>
            <FormContainer>
                <form>
                <InputContainer>
                <Input type="text" placeholder="Email" aria-label="email"/>
                <Input type="password" placeholder="Password" aria-label="password"/>
            </InputContainer>

            <ButtonContainer>
                <Btn onClick={loginHandler}>Login</Btn>
            </ButtonContainer>
                </form>
            </FormContainer>
            
    </fieldset>
    );
}

/* 
How to use this Login 

*/
export default Login;