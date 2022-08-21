import './App.css';
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import {useRef, useState} from "react";

function App() {
    const [data, setData] = useState([]);
    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id:dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    }

    const onDelete = (targetId) => {
        const newList = data.filter(it => it.id !== targetId);
        setData(newList);
    }

    return (
        <div className="App">
            <h1>오늘의 일기</h1>
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList onDelete={onDelete} data={data}/>
        </div>
    );
}

export default App;
