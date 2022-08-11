## 데이터 로딩 처리
> 📌 TIP
>  - 개발자 모드 네트워크에서 `slow 3g`모드를 사용해 느린 네트워크 환경에서의 테스트가 가능.
>  - 단축평가 활용 !

- http 요청을 통해 받아오는 데이터의 length가 0 일때 loading중이라는 표시를 해준다.

```jsx
const days = userFetch('http://localhost:3001/days');
if(days.length === 0){
    return <span>Loading...</span>
}

// 단축평가 활용
{words.length === 0 && <span>Loading...</span>}
```