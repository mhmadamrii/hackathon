import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import components
import Homepage from './pages/Homepage'
import Explore from './pages/Explore';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
