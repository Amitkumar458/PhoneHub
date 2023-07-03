import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './styles/App.scss'
import './styles/colors.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/mediaquery.scss'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
