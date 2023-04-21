import { useContext } from 'react';

import {Link} from 'react-router-dom';

import { Context } from '../contexts/Context';

export const ShowData = () => {
    const  {state, dispatch}= useContext(Context);
    // const {name, age, food} = useContext(Context); -> Outra opção sem reducers

    return (

        <div>
            tela de ShowData de {state.user.name} que tem {state.user.age} anos.
            <br/>
            <Link to = "/">Ir para SignUp</Link>
            
        </div>
    )
}