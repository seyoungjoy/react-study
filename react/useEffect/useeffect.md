## useEffect
- 컴포넌트가 mount, unmount, update 될때 특정 함수를 실행시켜주는 hook
> * vue에서는?
> mounted, unmounted, updated 훅이 있는데 이것을 모아놓은 느낌

### 기본 형태
```
useEffect(function, deps)
```

### 사용 방법 3가지
1. `deps`에 빈 array
- 컴포넌트가 mount 되었을 때 실행.
- 컴포넌트가 unmount 되었을 때는 clean up function 실행.
```jsx
import {useEffect} from "react";

useEffect(() => {
    console.log('mount');
    // clean up function
    return () => {
        console.log('unmount')
    }
}, [])
```
- 그래서 api 요청시 사용하면 좋음.
```jsx
const [words, setWord] = useState([])

useEffect(() => {
axios.get(`http://localhost:3001/words?day=${day}`)
.then(res => setWord(res.data))
}, [])
```



2. `deps`에 state 설정.
- 컴포넌트가 mount 될때 실행
- state가 update 될때마다 실행
- clean up : state가 변경되기 직전 실행
```jsx
import {useEffect} from "react";

useEffect(() => {
    console.log('update');
    // clean up
    return () => {
        console.log('before update')
    }
},[state])
```

3. `deps` 생략
- 리렌더링 될때마다 호출
```jsx
    useEffect(() => {
        console.log('렌더링')
    })
```



## Reference
- [https://xiubindev.tistory.com/100](https://xiubindev.tistory.com/100)