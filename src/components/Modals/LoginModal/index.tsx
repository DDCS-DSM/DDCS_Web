import axios from "axios";
import { useRef } from "react";
import * as S from "./styles";
import { useCookies } from 'react-cookie';

interface LoginModalInterface {
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
  setModalState: React.Dispatch<React.SetStateAction<String>>;
}

const LoginModal = ({ setLoginState, setModalState }: LoginModalInterface) => {

  const idInput = useRef<HTMLInputElement | null>(null);
  const pwInput = useRef<HTMLInputElement | null>(null);

  const [setCookie] = useCookies(['DCS_token']);

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
      })
      .then(res => {
        const expires = new Date();
        expires.setTime(expires.getTime() + (30 * 60 * 1000))
        //setCookie('access_token', res.data.access_token, { path: '/',  expires})
        //setCookie('refresh_token', res.data.refresh_token, {path: '/', expires})
        alert("로그인 완료");
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
              <S.Checkbox id="saveid" type="checkbox" />
              <S.Label htmlFor="saveid">아이디 저장</S.Label>
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
