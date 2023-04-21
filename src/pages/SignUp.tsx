import { useContext } from 'react';
import {Link} from 'react-router-dom';

import { Context } from '../contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);
    
    const handleChangeName = () => {
        if(state.user.name !== 'Pedro') {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Pedro'
            }
        });
        } else {
            dispatch({
                type: 'CHANGE_NAME',
                payload: {
                    name: 'Miguel'
                }
            }); 
        }
    }

    return (

        <div> 
            <h3>Tela SignUp</h3>
            <br/>
        
            <Link to = "/exibir">Ir para ShowData</Link>
        </div>
    )
}