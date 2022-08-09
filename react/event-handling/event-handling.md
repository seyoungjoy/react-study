## 이벤트 처리

```jsx
export default function Hello(){
    const showName = () => {
        console.log('seyoung')
    };
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
        </div>
    )
}
```