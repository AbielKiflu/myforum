import {Btn} from '../Button/Button.elements'
import {Input} from './Register.elements'
import {InputContainer,ButtonContainer,ColumnContainer} from '../../globalStyle';
 


const Login = () => {
    return (
        <>
            <ColumnContainer>
            <InputContainer>
                <Input type="text" placeholder="Nick Name" aria-label="email"/>
                <Input type="text" placeholder="Email" aria-label="email"/>
                <Input type="password" placeholder="Password" aria-label="password"/>
            </InputContainer>

            <ButtonContainer>
                <Btn>Register</Btn>
            </ButtonContainer>
            </ColumnContainer>
        </>
    );
}

/* 
How to use this Login 

*/
export default Login;