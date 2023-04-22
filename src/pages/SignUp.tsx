import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import {  Context } from '../contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: e.target.value
            }
        });
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: e.target.value
            }
        });

    }

    

    return (

        <div> 
            <h3>Tela SignUp (Tema: {state.theme.status})</h3>
            <input 
            type='text'
            placeholder='Digite um nome'
            value={state.user.name}
            onChange={handleNameChange} 
            />
            <input 
            type='text'
            placeholder='Digite uma idade'
            value={state.user.age}
            onChange={handleAgeChange} 
            />

            <Link to = "/exibir">Ir para ShowData</Link>
        </div>
    )
}