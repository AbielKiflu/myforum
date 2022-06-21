import {Btn} from '../Button/Button.elements'
import {Input} from './Login.elements'
import {InputContainer,ButtonContainer,FormContainer} from '../../globalStyle';
 


const Login = () => {
    return (
  <fieldset>
    <legend>Login:</legend>
            <FormContainer>
            <InputContainer>
                <Input type="text" placeholder="Email" aria-label="email"/>
                <Input type="password" placeholder="Password" aria-label="password"/>
            </InputContainer>

            <ButtonContainer>
                <Btn>Login</Btn>
            </ButtonContainer>
            </FormContainer>
            
    </fieldset>
    );
}

/* 
How to use this Login 

*/
export default Login;