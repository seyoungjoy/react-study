# React Diary App
## useRef로 input focusing 구현.
- useRef로 지정한 객체는 current라는 프로퍼티를 제공해 해당 요소에 접근 가능.

## list rendering
- defaultProps
    - props로 undefined가 들어와 에러가 뜨는 것을 방지하기 위해 defult설정이 가능.
```jsx
DiaryList.defaultProps ={
    diaryList:[],
}
```
## 데이터 배열 추가하기
- React는 단방향 데이터 구조.
- 그래서 상위 컴포넌트 `App.js`에 `useState`로 데이터 배열과 setter 함수를 등록한다.
  - 하위 컴포넌트 `DiaryEditor` 에서 onCreate 함수를 통해 data를 업데이트
  - useState의 data가 바뀌므로 하위 컴포넌트 `DiaryList`의 data도 함께 리렌더링 됨.

![img.png](img.png)

```jsx
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

    return (
        <div className="App">
            <h1>오늘의 일기</h1>
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList data={data}/>
        </div>
    );
}

export default App;
```