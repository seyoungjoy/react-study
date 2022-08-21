import styled from '@emotion/styled';
import {useRef, useState} from "react";

const DiaryEditor = ({onCreate}) => {
    const [state, setState] = useState({
        author:"",
        content: '',
        emotion:1,

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
        if(state.author.length < 1){
            titleInput.current.focus();
            return;
        }
        if(state.content.length < 1){
            contentTextarea.current.focus();
            return;
        }
        onCreate(state.author, state.content, state.emotion);
        alert('저장 완료!')
    }

    return(
        <div>
            <form>
                <dl>
                    <dt>
                        <label htmlFor="title">글쓴이</label>
                    </dt>
                    <dd>
                        <input ref={titleInput} type="text" id={"author"} value={state.author} onChange={onChangeHandler}/>
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
                        <label htmlFor="emotion">오늘의 감정점수 : {state.emotion}</label>
                    </dt>
                    <dd>
                        <select name="emotion" id="emotion" onChange={onChangeHandler}>
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