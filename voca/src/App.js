import Header from './component/Header';
import DayList from './component/DayList.tsx';
import CreateWord from './component/CreateWord.tsx';
import CreateDay from './component/CreateDay';
import Day from './component/Day.tsx';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import HookPractice from "./component/HookPractice"
import UseState from "./component/hook-practice/UseState"
import UseEffect from "./component/hook-practice/UseEffect"
import UseRef from "./component/hook-practice/UseRef"
import UseContext from "./component/hook-practice/Use-Context-API"

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
                <Route exact path="/hook-practice" element={<HookPractice/>}></Route>
                <Route exact path="/hook-practice/use-state" element={<UseState/>}></Route>
                <Route exact path="/hook-practice/use-effect" element={<UseEffect/>}></Route>
                <Route exact path="/hook-practice/use-ref" element={<UseRef/>}></Route>
                <Route exact path="/hook-practice/use-context" element={<UseContext/>}></Route>
                <Route path="/*" element={<EmptyPage/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
