import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./contexts/Context";
import { useContext } from "react";

const App = () => {
  const { state, dispatch } = useContext(Context);

  const handleThemeChange = () => {
    if(state.theme.status === 'light') {
        dispatch({
        type: 'CHANGE_STATUS',
        payload: {
            status: 'dark'
        }
    });
    } else {
        dispatch({
            type: 'CHANGE_STATUS',
            payload: {
              status: 'light'
            }
        });
    }
  }

  return (
    <BrowserRouter>
    <div style={{
      backgroundColor: state.theme.status === 'light' ? '#FFF' : '#000',
      color: state.theme.status === 'light' ? '#000' : '#FFF',
      width: 1920,
      height: 1080
    }}>
        <h1>Título da página</h1>
        <button onClick={handleThemeChange}>{state.theme.status}</button>
        <hr />
        <Routes>
          <Route path = "/" element ={<SignUp />} />
          <Route path = "exibir" element ={<ShowData/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );  
}

export default App; 
