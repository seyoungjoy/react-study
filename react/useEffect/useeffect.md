## useEffect
- 데이터 변화가 감지되었을 때 실행
- 의존성 배열?
```jsx
const [words, setWord] = useState([])

useEffect(() => {
        axios.get(`http://localhost:3001/words?day=${day}`)
            .then(res => setWord(res.data))
    }, [])
```