## useRef
- DOM 요소에 접근 - 특정 DOM을 선택해야할 때(javascript getElementById, querySelector 기능)
- 변수 관리 - 업데이트시 리렌더링이 필요하지 않은 변수

```jsx
const [text, setText] = useState('');

const nameInput = useRef();

const onChange = e => {
    setText(e.target.value)
}
const onReset = () => {
    setText('');
    nameInput.current.focus();
}

return(
    <div>
        <input
            name="name"
            onChange={onChange}
            value={text}
            ref={nameInput}
        />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>내용 :</b>
            {text}
        </div>
    </div>
)
```