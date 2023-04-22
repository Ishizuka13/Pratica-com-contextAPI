import { useContext } from 'react';

import {Link} from 'react-router-dom';

import { Context } from '../contexts/Context';

export const ShowData = () => {
    const  {state, dispatch}= useContext(Context);
    // const {name, age, food} = useContext(Context); -> Outra opção sem reducers

    return (

        <div>
            <h3>tela de ShowData</h3>

                Nome: {state.user.name}<br/>
                Idade: {state.user.age}

            <br/>
            <Link to = "/">Ir para SignUp</Link>
            
        </div>
    )
}