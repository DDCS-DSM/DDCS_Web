import * as S from "./styles"
import { Button, Title } from "../../styles/common"
import { useRef } from "react"
import axios from "axios";

const Write = () => {

    const titleInputRef = useRef<HTMLInputElement>(null);
    const contentTextAreaRef = useRef<HTMLTextAreaElement>(null);

    const registNotice = () => {
        if(titleInputRef.current?.value && contentTextAreaRef.current?.value){
            axios.post("/post")
                .then(res => alert("작성되었습니다."))
                .catch(err => alert(`에러. ${err.response.status}`))
        }
        else{
            alert("값을 모두 입력해 주세요.");
        }
    }

    return(
        <>
            <Title>공지사항 작성</Title>
            <S.WriteBody>
                <S.TitleInput ref={titleInputRef} placeholder="제목"/>
                <S.ContentTextArea ref={contentTextAreaRef}/>
                <Button onClick={()=>registNotice()}>작성</Button>
            </S.WriteBody>
        </>
    )
}

export default Write