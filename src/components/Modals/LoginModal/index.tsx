import axios from "axios";
import { useRef, useState } from "react";
import * as S from "./styles";
import { Title, Wrapper, Filter, Background, Close, Input } from "../styles";
import { del } from "../../../assets/images/icons"
import cookie from 'react-cookies'

interface LoginModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const LoginModal = ({ setModalState }: LoginModalInterface) => {

  const idInput = useRef<HTMLInputElement | null>(null);
  const pwInput = useRef<HTMLInputElement | null>(null);

  const checkInput = () => {
    if(
      idInput.current &&
      idInput.current.value &&
      pwInput.current &&
      pwInput.current.value
    )
    {
      return true;
    }
    else {
      alert("값을 모두 입력해주세요.");
      return false;
    }
  }

  const login = () => {
    if(checkInput()) {
      axios.post("/users/token", {
        accountId: idInput.current?.value,
        password: pwInput.current?.value
      },
      {headers:{Authorization: ""}})
      .then(res => {
        cookie.save('DCS_accessToken', res.data.accessToken, { path: '/'});
        cookie.save('DCS_refreshToken', res.data.refreshToken, { path: '/'});
        window.location.reload();
      })
      .catch(err => {
        alert(`에러 ${err.response.status}`)
      })
    }
  }

  return (
    <Filter>
      <Background>
        <Close src={del} onClick={() => setModalState("")} />
        <Title>로그인</Title>
        <Wrapper>
          <Input ref={idInput} placeholder="아이디" />
          <Input type="password" ref={pwInput} placeholder="비밀번호" />
          <S.CheckboxDiv>
            <S.CheckboxWrapper>
              <S.Checkbox type="checkbox" />
              <S.Label>아이디 저장</S.Label>
            </S.CheckboxWrapper>
          </S.CheckboxDiv>

          <S.Button onClick={()=>login()}>로그인</S.Button>
        </Wrapper >
        <S.TextWrapper>
          <S.Text>
            계정이 없으신가요?
            <S.Link
              onClick={() => {
                setModalState("policy");
              }}
            >
              회원가입
            </S.Link>
          </S.Text>
          <S.FindDiv>
            <S.Find onClick={() => setModalState("findid")}>아이디 찾기</S.Find>
            <span>{"&"}</span>
            <S.Find onClick={() => setModalState("findpw")}>비밀번호 찾기</S.Find>
          </S.FindDiv>
        </S.TextWrapper>
      </Background>
    </Filter>
  );
};

export default LoginModal;
