const DiaryList = ({diaryList}) => {

    return(
        <div>
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    diaryList.map(list => (
                        <div key={list.id}>
                            <div>작성자 : {list.author}</div>
                            <div>일기 : {list.content}</div>
                            <div>감정 : {list.emotion}</div>
                            <div>작성 시간(ms) : {list.created_date}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

DiaryList.defaultProps ={
    diaryList:[],
}

export default DiaryList;