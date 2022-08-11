## 함수형 컴포넌트
- 화살표 함수형 사용을 추천.

```jsx
// 함수형
import React from "react";

function Home(){
    return <h1>Home 화면입니다.</h1>;
}

export default Home;

// 화살표 함수
import React from "react";

const Home = () => {
    return()
}
export default home;

//class형
import React, {Compoenet} from "react";

class Home extends Compoenet {
    render(){
        return <h1> Home 화면 입니다. </h1>    }
}
export default Home;
```