import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Title } from "../../styles/common";
import * as S from "./styles"
import noticeProps from "./noticeProps";

const List = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [noticeList, setNoticeList] = useState<noticeProps[]>([{id: 1, title: "test", createdDate: "123213"}]);

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
        </>
    )
}

export default List