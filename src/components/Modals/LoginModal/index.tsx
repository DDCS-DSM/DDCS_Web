import { useRef } from "react";
import * as S from "./styles";

interface LoginModalInterface {
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
  setModalState: React.Dispatch<React.SetStateAction<String>>;
}

const LoginModal = ({ setLoginState, setModalState }: LoginModalInterface) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <S.Filter>
      <S.Background>
        <S.Close onClick={() => setModalState("")}>✕</S.Close>
        <S.Title>로그인</S.Title>
        <S.Wrapper>
          <S.Input ref={inputRef} placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.CheckboxDiv>
            <S.CheckboxWrapper>
              <S.Checkbox id="saveid" type="checkbox" />
              <S.Label htmlFor="saveid">아이디 저장</S.Label>
            </S.CheckboxWrapper>
          </S.CheckboxDiv>

          <S.Button>로그인</S.Button>
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
