import { useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import { Title, Button } from "../../styles/common";

const Privacy = () => {

  useEffect(()=>{

  },[])

  return (
    <>
      <Title>개인 정보 수정</Title>
      <S.Table>
        <S.Item>
          <S.Schema>아이디</S.Schema>
          <S.Instance>DummyId</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이름</S.Schema>
          <S.Instance>DummyName</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이메일</S.Schema>
          <S.InstanceInput />
        </S.Item>
      </S.Table>
      <Button>수정하기</Button>
    </>
  );
};

export default Privacy;
