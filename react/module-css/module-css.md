## Module css
- css 전역으로 지정 -> `App.css`, `index.css`
- css 모듈화 -> `[component name].module.css`

```jsx
 // Hello.js
import styles from "./Hello.module.css";

export default function Hello(){
    return(
        <div>
            <h1 className={styles.title}>
                Hello
            </h1>
        </div>
    )
}

// Hello.module.css
.title{
    background-color:#eee;
}

```
