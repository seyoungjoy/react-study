## `useState`
```jsx
import {useState} from "react";

export default function Hello(){
    const [name, setName] = useState('Mike')

    // (1) if else 문
    // const changeName = () => {
    //    if(name === 'Mike'){
    //        setName('Jane')
    //    } else{
    //        setName('Mike');
    //    }
    // }

    // (2) 함수로 값 반환
    // const changeName = () => name === 'Mike' ? 'Jane' : 'Mike';
    // const settingName = () => setName(changeName);

    // (3) 강의에서 나온 방식
    const changeName = () => {
        setName(name === 'Mike' ? 'Jane' : 'Mike')
    }

    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>이름 바꾸기</button>
        </div>
    )
}
```


## 만약 `useState` 없이 state 값을 관리하려면?
- 변수값이 변해도 DOM 없데이트를 해주지 않기 때문에 화면에서의 값은 변하지 않는다.
- 그래서 `useState`를 사용해 데이터가 변했을때 다시 렌더링 되도록 해줘야 하는듯?
```jsx
export default function Hello(){
    let name = 'Mike';
    const changeName = () => {
        name = name === 'Mike' ? 'Jane' : 'Mike';
        console.log(name)
        // 콘솔로 확인하면 changeName 함수가 잘 작동하나 DOM 업데이트를 따로 해줘야한다.
        document.getElementById('name').innerText = name;
    }

    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>이름 바꾸기</button>

        </div>
    )
}

```
