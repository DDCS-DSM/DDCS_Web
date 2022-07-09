import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Title } from "../../styles/common";
import noticeProps from "./noticeProps";
import * as S from "./styles"

const Notice = () => {

    const [notice, setNotice] = useState<noticeProps>({id: 1, title: "test", createdDate: "123213"});
    
    const navigate = useNavigate();
    const { id } = useParams();
/*
    useEffect(()=>{
        axios.get(`/notice/${id}`)
            .then(res => setNotice(res.data))
            .catch(err => {
                alert(`에러. ${err.response.status}`);
                navigate("/");
            })
    },[]);*/

    return(
        <>
            <S.Body>
                <S.NoticeTitle>{notice?.title}</S.NoticeTitle>
                <S.NoticeInfo>
                    <S.Date>{notice.createdDate}</S.Date>
                </S.NoticeInfo>
                <S.Content>
                    <span>{notice?.content}</span>
                </S.Content>
            </S.Body>
        </>
    )
}

export default Notice