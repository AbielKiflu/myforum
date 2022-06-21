import {Btn} from '../Button/Button.elements'
import {Input} from './Register.elements'
import {InputContainer,ButtonContainer} from '../../globalStyle';
 


const Register = () => {
    return (
        <>
 
            <InputContainer>
                <Input type="text" placeholder="Nick Name" aria-label="email"/>
                <Input type="text" placeholder="Email" aria-label="email"/>
                <Input type="password" placeholder="Password" aria-label="password"/>
            </InputContainer>

            <ButtonContainer>
                <Btn>Register</Btn>
            </ButtonContainer>
 
        </>
    );
}

/* 
How to use this Login 

*/
export default Register;