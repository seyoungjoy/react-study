import './App.css';
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import {useEffect, useRef, useState} from "react";
import axios from "axios";

function App() {
    useEffect(() => getData, [])

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.data);

        const initData = res.slice(0,20).map(item => {
            return{
                author : item.email,
                content: item.body,
                emotion : Math.floor(Math.random() * 5)+1,
                created_data : new Date().getTime(),
                id : dataId.current++
            }
        });
        setData(initData);
    }


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
        window.confirm(`${targetId}번 게시물을 삭제하시겠습니까?`)
        const newList = data.filter(item => item.id !== targetId)
        setData(newList);
    }

    const onEdit = (targetId, newContent) => {
        setData(
            data.map((item)=> item.id === targetId ?
                {...item, content:newContent} : item
            )
        )
    }

    return (
        <div className="App">
            <h1>오늘의 일기</h1>
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList onEdit={onEdit} onDelete={onDelete} data={data}/>
        </div>
    );
}

export default App;
