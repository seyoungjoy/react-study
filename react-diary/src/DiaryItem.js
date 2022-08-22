import {useRef, useState} from "react";

const DiaryItem = ({list, onDelete, onEdit}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [localContent, setLocalContent] = useState(list.content)

    const toggleIsEdit = () => {
        setIsEdit(!isEdit);
    }
    const toggleQuitEdit = () => {
        setIsEdit(!isEdit);
        setLocalContent(list.content)
    }
    const editHandler = () => {
        if(localContent.length<5){
            localInput.current.focus();
            return;
        }
        onEdit(list.id, localContent);
        setIsEdit(!isEdit);
    }

    const deleteHandler = () => {
        onDelete(list.id);
    }

    const localInput = useRef();


    return(
    <div>
        <div>작성자 : {list.author}</div>
        <div>일기 :
            {
                isEdit ?
                    <>
                        <textarea
                            value={localContent}
                            onChange={(e) => setLocalContent(e.target.value)}
                            ref={localInput}
                        />

                    </> :
                    <>{list.content}</>
            }
        </div>
        <div>감정 : {list.emotion}</div>
        <div>작성 시간(ms) : {new Date(list.created_date).toLocaleString()}</div>
        {isEdit ? <>
            <button onClick={toggleQuitEdit}>수정 취소</button>
            <button onClick={editHandler}>수정 완료</button>
        </> : <>
            <button onClick={deleteHandler}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
        </>}

    </div>
    )
}

export default DiaryItem;
//