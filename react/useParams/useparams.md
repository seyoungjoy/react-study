## useParams
- 현재 라우터의 파라미터 값을 반환.

```jsx
// (1) useParams import
import {useParams} from "react-router-dom";

export default function Day(){
    // (2) useParams의 반환값을 변수에 저장 후 사용.
    const {day} = useParams();
}
```