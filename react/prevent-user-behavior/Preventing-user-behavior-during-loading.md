## 통신중일때 사용자 동작 막기
> 📌 TIP
> - `isLoading`이라는 상태를 만들어 true일때는 함수가 호출되지 않도록 설정한다.
> - 버튼 태그에도 isLoading 상태에 따른 스타일을 지정해주면 사용자가 쉽게 인식할 수 있다.
```jsx
// (1) loading state 설정. 
const [isLoading, setIsLoading] = useState(false);

const onSubmit = (e) => {
    e.preventDefault();
    // (2) loading중이 아닐 때만 실행.
    if(!isLoaidng){
    // (3) onSubmit 함수가 동작할때는 loading을 true로 바꿔줌.
        setIsLoading(true);
        fetch...
        .then(res => {
            if(res.ok){
                alert('전송 완료!')
                // (4) 전송이 완료되면 다시 loading을 false로 변경.
                setIsLoading(false);
            }
        })
    }
}

return(
    // (5) loading 상태에 따른 button 스타일 추가
    <button style={{opacity: isLoading ? 0.3 : 1}}>
        {isLoading ? "Saving..." : "저장"}
    </button>
)
```