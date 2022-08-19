import './App.css';
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

const dummyList = [
    {
        id:1,
        author:"양세영",
        content:"하이 1",
        emotion:5,
        created_date: new Date().getTime(),
    },
    {
        id:2,
        author:"홍세영",
        content:"하이 1",
        emotion:5,
        created_date: new Date().getTime(),
    },
    {
        id:3,
        author:"양길동",
        content:"하이 1",
        emotion:5,
        created_date: new Date().getTime(),
    }
]

function App() {

  return (
    <div className="App">
      <h1>오늘의 일기</h1>
      <DiaryEditor/>
        <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
