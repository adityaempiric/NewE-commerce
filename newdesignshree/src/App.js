import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import HomePage from './Components/HomePage/HomePage';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
