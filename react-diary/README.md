# React Diary App
## useRef로 input focusing 구현.
- useRef로 지정한 객체는 current라는 프로퍼티를 제공해 해당 요소에 접근 가능.

## list rendering
- defaultProps
    - props로 undefined가 들어와 에러가 뜨는 것을 방지하기 위해 defult설정이 가능.
```jsx
DiaryList.defaultProps ={
    diaryList:[],
}
```

- 12.06