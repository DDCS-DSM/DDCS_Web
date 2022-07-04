import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import { Title, Button } from "../../styles/common";
import userProps from "../../userProps";
import { useRef } from "react";

const Privacy = () => {

  const [user, setUser] = useState<userProps>();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    axios.get("/")
      .then(res => setUser(res.data))
      .catch(err => {
        alert("로그인을 먼저 해주세요.");
        window.location.href = "/";
      });
  },[])

  const rectifyPrivacy = () => {
    if(user?.email !== emailRef.current?.value) {
      axios.post("/")
        .then(res => {
          alert("성공했습니다.");
          window.location.href = "/";
        })
        .catch(err => alert(`에러가 발생했습니다. ${err.status}`));
    }
  }

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
          <S.InstanceInput />
        </S.Item>
      </S.Table>
      <Button onClick={()=>rectifyPrivacy()}>수정하기</Button>
    </>
  );
};

export default Privacy;
