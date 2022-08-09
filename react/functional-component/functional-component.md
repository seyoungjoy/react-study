## 함수형 컴포넌트 사용 추천(화살표 함수)

```jsx
// 함수형
import React from "react";

function Home(){
    return <h1>Home 화면입니다.</h1>;
}

export default Home;

//class형
import React, {Compoenet} from "react";

class Home extends Compoenet {
    render(){
        return <h1> Home 화면 입니다. </h1>    }
}
export default Home;
```