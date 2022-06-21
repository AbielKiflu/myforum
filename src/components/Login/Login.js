import {Btn} from '../Button/Button.elements'
import {Input} from './Login.elements'
import {InputContainer,ButtonContainer,ColumnContainer} from '../../globalStyle';
 


const Login = () => {
    return (
        <>
            <ColumnContainer>
            <InputContainer>
                <Input type="text" placeholder="Email" aria-label="email"/>
                <Input type="password" placeholder="Password" aria-label="password"/>
            </InputContainer>

            <ButtonContainer>
                <Btn>Login</Btn>
            </ButtonContainer>
            </ColumnContainer>
        </>
    );
}

/* 
How to use this Login 

*/
export default Login;