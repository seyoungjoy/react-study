## useMemo
### useMemo란?
- memoization 된 값을 반환.
### 왜 사용?
- 복잡한 연산이 있을 때 리렌더링될때마다 연산하면 메모리 낭비.
그래서 특정 값(dependency array)이 변하지 않을 때는 메모리에 저장된 값을 사용하고
특정 값이 변할때는 재연산한다.
### 주의할 점
- useMemo는 콜백함수의 리턴값을 반환하며 함수로 사용할 수 없다.

```jsx
    const getDiaryAnalysis = useMemo (() => {
        console.log('기분 분석 시작')
        const goodCount = data.filter(item => item.emotion > 2).length;
        const badCount = data.length - goodCount;
        const goodRatio = (goodCount/data.length) * 100;
        return {goodRatio, goodCount, badCount};
    }, [data.length]);

    // [주의] useMemo는 콜백함수의 리턴값만 반환하며 함수로 사용할 수 없다.
    // const {goodRatio, goodCount, badCount} = getDiaryAnalysis();
    const {goodRatio, goodCount, badCount} = getDiaryAnalysis;
```