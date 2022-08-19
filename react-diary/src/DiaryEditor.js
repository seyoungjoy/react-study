import styled from '@emotion/styled';
import {useRef, useState} from "react";

const DiaryEditor = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        score:1,
    });
    const onChangeHandler = (e) => {
        setState({
            ...state,
            [e.target.id] : e.target.value
        });
    }

    const titleInput = useRef();
    const contentTextarea = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(state.title.length < 1){
            titleInput.current.focus();
            return;
        }
        if(state.content.length < 1){
            contentTextarea.current.focus();
            return;
        }
        alert('저장 완료!')
    }

    return(
        <div>
            <form>
                <dl>
                    <dt>
                        <label htmlFor="title">제목</label>
                    </dt>
                    <dd>
                        <input ref={titleInput} type="text" id={"title"} value={state.title} onChange={onChangeHandler}/>
                        {/*<div>{state.title}</div>*/}
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label htmlFor="content">내용</label>
                    </dt>
                    <dd>
                        <textarea
                           ref={contentTextarea} name="content" id="content" cols="30" rows="10" value={state.content} onChange={onChangeHandler}></textarea>
                        {/*<div>{state.content}</div>*/}
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label htmlFor="score">오늘의 감정점수 : {state.score}</label>
                    </dt>
                    <dd>
                        <select name="score" id="score" onChange={onChangeHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </dd>
                </dl>
                <button onClick={onSubmitHandler}>일기 저장하기</button>
            </form>
        </div>
    )
}

export default DiaryEditor;