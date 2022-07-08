import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Title } from "../../styles/common";
import noticeProps from "./noticeProps";
import * as S from "./styles"

const Notice = () => {

    const [notice, setNotice] = useState<noticeProps>();
    
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`/notice/${id}`)
            .then(res => setNotice(res.data))
            .catch(err => {
                alert(`에러. ${err.response.status}`);
                navigate("/");
            })
    },[]);

    return(
        <>
            <Title>{notice?.title} ({notice?.createdDate})</Title>
            <S.List>
                <span>{notice?.content}</span>
            </S.List>
        </>
    )
}

export default Notice