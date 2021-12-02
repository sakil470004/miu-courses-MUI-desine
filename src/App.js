
import './App.css';
import AppBarCustom from './Components/AppBar/AppBar';
import Carousel from './Components/Carousel/Carousel';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseDetails from './Components/CourseDetails/CourseDetails';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
     
      <Router>
      <AppBarCustom />
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/course/:courseId">
            <CourseDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Home />
          </Route>
        </Switch>
        {/* </div> */}
        <Footer />
      </Router>

    </div>
  );
}

export default App;
