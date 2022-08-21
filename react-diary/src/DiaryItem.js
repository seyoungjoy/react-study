const DiaryItem = ({list}) => {
    console.log(list);
    return(
    <div>
        <div>작성자 : {list.author}</div>
        <div>일기 : {list.content}</div>
        <div>감정 : {list.emotion}</div>
        <div>작성 시간(ms) : {new Date(list.created_date).toLocaleString()}</div>
    </div>
    )
}

export default DiaryItem;