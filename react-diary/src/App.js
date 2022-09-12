import './App.css';
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import {useEffect, useMemo, useRef, useState} from "react";
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

    const getDiaryAnalysis = useMemo (() => {
        console.log('기분 분석 시작')
        const goodCount = data.filter(item => item.emotion > 2).length;
        const badCount = data.length - goodCount;
        const goodRatio = (goodCount/data.length) * 100;
        return {goodRatio, goodCount, badCount};
    }, [data.length]);
    // [주의] useMemo는 콜백함수의 리턴값만 반환하며 함수로 사용할 수 없다.
    // const {goodRatio, goodCount, badCount} = getDiaryAnalysis();
    const {goodRatio, goodCount, badCount} = getDiaryAnalysis;

    return (
        <div className="App">
            <h1>오늘의 일기</h1>
            <DiaryEditor onCreate={onCreate}/>
            <div>전체 일기 : {data.length}</div>
            <div>기분 좋은 일기 개수 : {goodCount}</div>
            <div>기분 나쁜 일기 개수 : {badCount}</div>
            <div>기분 좋은 일기 비율 : {goodRatio}%</div>
            <DiaryList onEdit={onEdit} onDelete={onDelete} data={data}/>
        </div>
    );
}

export default App;
