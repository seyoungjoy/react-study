## toggle state
- vue에서는 Boolean 값에 따른 토글상태를 v-show, v-if를 통해서 처리했는데
- react에서는 상태 토글과 해당값을 `&&` 연산자를 이용한 단축평가를 통해 처리 가능.
```jsx
// 내가 생각한 방법
export default function Word({word}){
    // 초기값을 빈값으로 설정.
    const [kor, setKor] = useState('');
    // if 문으로 처리.
    const showWord = () => {
        setKor(kor === '' ? word.kor : '');
    }
    return(
        <tr>
            <td><input type="checkbox"/></td>
            <td>{word.eng}</td>
            <td>{kor}</td>
            <td>
                <button onClick={showWord}>뜻보기</button>
            </td>
        </tr>
    )
}

// 강의에서 나온 방법
export default function Word({word}){
    // useState 초기값을 false로 지정.
    const [isShow, setIsShow] = useState(false);
    const toggleShow = () => {
        setIsShow(!isShow);
    }
    return(
        <tr>
            <td><input type="checkbox"/></td>
            <td>{word.eng}</td>
            {/* isShow가 true일때 해당 뜻이 보이도록 설정.*/}
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻보기</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}
```
