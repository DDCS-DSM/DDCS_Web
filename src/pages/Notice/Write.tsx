import * as S from "./styles"
import { Button, Title } from "../../styles/common"

const Write = () => {
    return(
        <>
            <Title>공지사항 작성</Title>
            <S.WriteBody>
                <S.TitleInput placeholder="제목"/>
                <S.ContentTextArea></S.ContentTextArea>
                <Button>작성</Button>
            </S.WriteBody>
        </>
    )
}

export default Write