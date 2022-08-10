import Header from './component/Header';
import DayList from './component/DayList.tsx';
import CreateWord from './component/CreateWord.tsx';
import CreateDay from './component/CreateDay';
import Day from './component/Day.tsx';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<DayList/>}></Route>
                <Route exact path="/day/:day" element={<Day/>}></Route>
                <Route exact path="/create-word" element={<CreateWord/>}></Route>
                <Route exact path="/create-day" element={<CreateDay/>}></Route>
                <Route path="/*" element={<EmptyPage/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
