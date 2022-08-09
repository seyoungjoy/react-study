## route

- url에 특정 컴포넌트를 맵핑시켜 렌더링시켜줌.
- 리액트에서는 보통 `react-router-dom`사용.
1. `react-router-dom` 설치
```
npm install react-router-dom@6
```

2. index.js 설정
```jsx
import {BrowserRouter} from 'react-router-dom';

<React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
</React.StrictMode>
```

3. App.js 설정
```jsx
import Home from "./pages/Home";
import About from "./pages/About";
import {Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link> | <Link to="/about"> About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;

```