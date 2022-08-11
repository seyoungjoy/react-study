## state 말고 변수로 데이터를 설정하면 안되나?
- 변수의 값을 수정해도 dom update가 이루어지지 않아 화면상에서는 수정된 변수값을 확인할 수 없다.
- `document.getElementById('name').innerText` 를 통해 dom update를 따로 해줘야 하는 번거로움이 생긴다. 
- `useState` 를 사용해 상태값을 바꾸면 DOM 재렌더링이 일어나 수정된 상태값을 화면에서 확인할 수 있다.
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

