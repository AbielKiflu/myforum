import {Card} from '../../globalStyle';
import {Title,Body,Forum,Topic} from './Board.elements';
 


const Board = () => {
    return (
        <>
            <Card>
                <Title> Biology</Title>
                <Body>
                    <Forum>
                        <h3>Forum</h3>
                        <p>300</p>
                    </Forum>
                    <Topic>
                        <h3>Topic</h3>
                        <p>300</p>
                    </Topic>
                </Body>
            </Card>
        </>
    );
}

/* 
How to use this Login 

*/
export default Board;