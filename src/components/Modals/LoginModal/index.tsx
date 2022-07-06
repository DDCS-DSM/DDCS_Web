import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Title, Wrapper, Filter, Background, Close, Input } from "../styles";

import cookie from 'react-cookies'

interface LoginModalInterface {
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const LoginModal = ({ setLoginState, setModalState }: LoginModalInterface) => {

  const idInput = useRef<HTMLInputElement | null>(null);
  const pwInput = useRef<HTMLInputElement | null>(null);

  const [toAdmin, setToAdmin] = useState<boolean>(false);

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

  const navigate = useNavigate();

  const login = () => {
    if(checkInput()) {
      axios.post(`${toAdmin ? "/admin" : "/users/token"}`, {
        accountId: idInput.current?.value,
        password: pwInput.current?.value
      },
      {
        headers:{Authorization: ""}
      })
      .then(res => {
        cookie.save('DCS_accessToken', res.data.accessToken, { path: '/' });
        cookie.save('DCS_refreshToken', res.data.refreshToken, { path: '/' });
        navigate("/");
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
        <Close onClick={() => setModalState("")}>✕</Close>
        <Title>로그인</Title>
        <Wrapper onSubmit={()=> login()}>
          <Input ref={idInput} placeholder="아이디" />
          <Input type="password" ref={pwInput} placeholder="비밀번호" />
          <S.CheckboxDiv>
            <S.CheckboxWrapper>
              <S.Checkbox onChange={(e)=>setToAdmin(e.target.checked)} checked={toAdmin} type="checkbox" />
              <S.Label>운영자 계정으로 로그인</S.Label>
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
          <S.Link onClick={() => setModalState("findid")}>아이디 찾기</S.Link>
          <S.Link onClick={() => setModalState("findpw")}>비밀번호 찾기</S.Link>
        </S.TextWrapper>
      </Background>
    </Filter>
  );
};

export default LoginModal;
