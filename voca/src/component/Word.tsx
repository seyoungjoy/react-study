import {useState} from "react";

interface IProps{
    word: IWord;
}

export interface IWord {
    day:string;
    eng:string;
    kor:string;
    isDone:boolean;
    id:number;
}

export default function Word({word : w}:IProps){
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(w.isDone);
    const [word, setWord] = useState(w);
    const toggleShow = () => {
        setIsShow(!isShow);
    }
    const toggleDone = () => {
        fetch(`http://localhost:3001/words/${w.id}`,{
            method:"PUT",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify({
                ...w,
                isDone: !isDone,
            })
        }).then(res => {
            if(res.ok){
                setIsDone(!isDone);
            }
        }).then(data => console.log(data))
    }
    const del = () => {
        if(window.confirm("삭제 하시겠습니까?")){
            fetch(`http://localhost:3001/words/${w.id}`, {
                method:"DELETE",
            }).then(res =>{
                if(res.ok){
                    setWord({
                        ...word,
                        id:0
                    })
                }
                }
            )
        }
    }
    if(word.id === 0){
        return null;
    }
    return(
        <tr className={isDone ? 'off' : ''}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
            <td>{w.eng}</td>
            <td>{isShow && w.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻{isShow ? '숨기기' : '보기'}</button>
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr>
    )
}