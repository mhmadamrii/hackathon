import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import { UserContext } from "./components/context/UserContext";
// import components
import Homepage from './pages/Homepage'
import Explore from './pages/Explore';
import Dashboard from "./pages/Dashboard";
import AddWisata from "./pages/AddWisata";


if (localStorage.token) {
  setAuthToken(localStorage.token)
};


function App() {

  const [ state, dispatch ] = useContext(UserContext);
  console.log(state);

  const checkAuth = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };
      const response = await API.get('/check-auth', config);

      if (response.status === 404) {
        return dispatch ({
          type: 'authError'
        })
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: 'userSuccess',
        payload
      })

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkAuth();
  },[]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-wisata' element={<AddWisata />} />
      </Routes>
    </Router>
  );
}

export default App;
