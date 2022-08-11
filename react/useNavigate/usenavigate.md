## useNavigate
- 특정 라우터로 이동시키는 hook.
- `react-router-dom` 버전6에서는 useHistory() 대신 useNavigate를 사용한다.

```jsx
import {useNavigate} from "react-router-dom";

export default function CreateWord(){
    const nagivate = useNavigate();
    
    navigate("/success", { replace: true });

}
```