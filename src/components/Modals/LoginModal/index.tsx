import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

import { setCookie } from "../../../Functions/cookie"

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
      })
      .then(res => {
        setCookie('access_token', res.data.access_token, 30);
        setCookie('refresh_token', res.data.refresh_token, 60*24*7);
        alert("로그인 완료.");
        navigate("/");
      })
      .catch(err => alert(`에러 ${err.status}`))
    }
  }

  return (
    <S.Filter>
      <S.Background>
        <S.Close onClick={() => setModalState("")}>✕</S.Close>
        <S.Title>로그인</S.Title>
        <S.Wrapper>
          <S.Input ref={idInput} placeholder="아이디" />
          <S.Input type="password" ref={pwInput} placeholder="비밀번호" />
          <S.CheckboxDiv>
            <S.CheckboxWrapper>
              <S.Checkbox onChange={(e)=>setToAdmin(e.target.checked)} checked={toAdmin} type="checkbox" />
              <S.Label>운영자 계정으로 로그인</S.Label>
            </S.CheckboxWrapper>
          </S.CheckboxDiv>

          <S.Button onClick={()=>login()}>로그인</S.Button>
        </S.Wrapper>
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
      </S.Background>
    </S.Filter>
  );
};

export default LoginModal;
