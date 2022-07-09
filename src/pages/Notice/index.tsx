import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../../styles/common";
import * as S from "./styles"
import NoticeId from "./Id";
import { useEffect, useState } from "react";
import noticeProps from "./noticeProps";
import axios from "axios";

const Notice = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [noticeList, setNoticeList] = useState<noticeProps[]>([{id: 1, title: "test", createdDate: "123213"}]);
/*
    useEffect(()=>{
        axios.get(`/notice/${id}`)
            .then(res => setNoticeList(res.data))
            .catch(err => {
                alert(`에러. ${err.response.status}`);
                navigate("/");
            })
    },[])*/
    
    return(
        <>  
            {id ?
                <NoticeId/>
                :
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
            }
        </>
    )
}

export default Notice