## Virtual DOM
- DOM : HTML element 들을 트리 구조로 내타낸 것.
- virtual DOM : 가상돔 객체를 만들어 dom 업데이트를 효율적으로 할 수 있게 만들어줌.
- 리액트는 항상 두 개의 가상돔을 가지고 있으며 변경 전, 변경 이후의 가상돔을 가진다.
- Diffing : 두 개의 가상돔을 비교하며 바뀐 부분 확인
- 바뀐 가상돔의 부분을 Batch Update를 통해 실제 DOM에 한번에 업데이트
- 이러한 과정을 Reconsiliation(재조정)이라 함.

- 즉,
- DOM을 일일이 접근해서 조작하는 것은 많은 단계들을 거쳐야함.
- 그래서 react는 메모리에 virtual DOM 객체를 만들어 DOM의 업데이트를 한번에 모아서 처리해줌.
- 이때 Diffing을 통해 바뀐 부분들을 확인하고
- Batch Update를 통해 실제 DOM에 한번에 업데이트
