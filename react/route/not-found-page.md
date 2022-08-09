## 잘못된 url 접근시 notFound page 만들기
- Routes 내부에서 가장 마지막에 `path="/*"`로 notFound 컴포넌트를 연결시켜준다.
- 지정된 path가 존재하면 지정된 path와 연결된 컴포넌트를 라우팅.
- 지정된 path가 없는 url이면 `path="/*"`(All)조건에 걸리게 되어 NotFound 페이지를 보여주게 된다.

```jsx
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import NotFound from "./component/NotFound";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<DayList/>}></Route>
                <Route exact path="/day/:day" element={<Day/>}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

```