## Custom hooks
- 재사용되는 코드들을 컴포넌트로 만들어 사용할 수 있다.
- vue의 mixin의 기능과 유사.

```jsx
// userFetch.js
import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetch(url){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [url]);

    return data;
}

```