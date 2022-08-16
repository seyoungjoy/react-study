
## Recoil
### install
```
npm install recoil
```

### RecoilRoot
- 루트 컴포넌트에 recoilroot 추가.

### Atom
- 전역 상태 관리 라이브러리
```jsx
const textState = atom({
    key: 'textState',
    default:'',
})
```

- atom에 있는 상태를 읽고 수정하려면 `useRecoilState를` 사용한다.
```jsx
function CharacterCounter(){
    return(
        <div>
            <TextInput/>
            <CharacterCount/>
        </div>
    )
}

function TextInput(){
    const [text, setText] = useRecoilState(textState);
    
    const onChange = (event) => {
        setText(event.target.value);
    }
    
    return(
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <br/>
            Echo: {text}
        </div>
    )
}
```

### Selector
```jsx
const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);
        
        return text.length;
    }
})
```

```jsx
function CharacterCount(){
    const count = useRecoilValue(charCountState);
    
    return <>Character Count : {count}</>
}
```
