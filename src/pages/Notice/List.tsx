import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Title, Button } from "../../styles/common";
import * as S from "./styles"
import noticeProps from "./noticeProps";

const List = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [noticeList, setNoticeList] = useState<noticeProps[]>([{id: 1, title: "test", createdDate: "123213"}]);

    /*
    useEffect(()=>{
        axios.get(`/post?page=1&size=10`)
            .then(res => setNoticeList([...res.data]))
            .catch(err => {
                alert(`에러. ${err.response.status}`);
                navigate("/");
            })
    },[])*/

    return(
        <>
            <Title>공지사항</Title>
            <S.List>
                {noticeList.map((i : noticeProps) => {
                    return(
                        <S.Notice onClick={()=>navigate("/notice/1")}>
                            <span>{i.title}</span>
                            <S.Date>{i.createdDate}</S.Date>
                        </S.Notice>
                    )
                })}
            </S.List>
            <Button>더보기</Button>
        </>
    )
}

export default List