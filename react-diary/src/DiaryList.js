import DiaryItem from "./DiaryItem";
const DiaryList = ({data, onDelete}) => {

    return(
        <div>
            <h2>일기 리스트</h2>
            <h4>{data.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    data.map(list => (
                        <DiaryItem onDelete={onDelete} key={list.id} list={list}/>
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