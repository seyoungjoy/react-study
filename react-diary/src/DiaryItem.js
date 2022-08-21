const DiaryItem = ({list, onDelete}) => {
    const deleteHandler = () => {
        window.confirm(`${list.id}번 게시물을 삭제하시겠습니까?`);
        onDelete(list.id);
    }

    return(
    <div>
        <div>작성자 : {list.author}</div>
        <div>일기 : {list.content}</div>
        <div>감정 : {list.emotion}</div>
        <div>작성 시간(ms) : {new Date(list.created_date).toLocaleString()}</div>
        <button>삭제</button>

    </div>
    )
}

export default DiaryItem;
//