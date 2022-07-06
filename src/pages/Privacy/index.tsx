import * as S from "./styles";
import { Title, Button } from "../../styles/common";
import userProps from "../../userProps";
import { useRef } from "react";

const Privacy = ({user}: {user: userProps}) => {

  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Title>개인 정보</Title>
      <S.Table>
        <S.Item>
          <S.Schema>아이디</S.Schema>
          <S.Instance>{user.accountId}</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이름</S.Schema>
          <S.Instance>{user.name}</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이메일</S.Schema>
          <S.Instance>{user.email}</S.Instance>
        </S.Item>
      </S.Table>
    </>
  );
};

export default Privacy;
