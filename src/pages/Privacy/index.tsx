import { useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import { Title, Button } from "../../styles/common";
import userProps from "../../userProps";
import { useRef } from "react";

const Privacy = ({user}: {user: userProps}) => {

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if(user.studentNumber === 0){
      alert("로그인을 먼저 해주세요.");
      window.location.href = "/";
    }
  },[])

  return (
    <>
      <Title>개인 정보 수정</Title>
      <S.Table>
        <S.Item>
          <S.Schema>아이디</S.Schema>
          <S.Instance>{user?.accountId ? user.accountId : ""}</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이름</S.Schema>
          <S.Instance>{user?.name ? user.name : ""}</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이메일</S.Schema>
          <S.InstanceInput ref={emailRef}/>
        </S.Item>
      </S.Table>
    </>
  );
};

export default Privacy;
