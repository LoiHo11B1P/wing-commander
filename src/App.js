import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IntroPage from './Components/IntroPage/IntroPage';
import DailyQuote from './Components/DailyQuote/DailyQuote';
import Planner from './Components/Planner/Planner';
import TimeKeeper from './Components/TimeKeeper/TimeKeeper';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route exact path = "/" element = {<IntroPage />} />
            <Route path = "/dailyquote" element = { <DailyQuote />}  />
            <Route path = "/planner" element = { <Planner />}  />
            <Route path = "/timekeeper" element = { <TimeKeeper />}  />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
