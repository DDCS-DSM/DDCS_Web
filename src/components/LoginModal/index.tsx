import { useEffect, useRef } from "react";
import * as S from "./styles";

interface LoginModalInterface {
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
  setPolicyVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({
  setLoginVisible,
  setLoginState,
  setPolicyVisible,
}: LoginModalInterface) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const close = (e: any) => {
      if (e.keyCode === 27) {
        setLoginVisible(false);
        window.removeEventListener("keydown", close);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const onClose = (e: any) => {};

  return (
    <S.Filter onClick={(e) => onClose(e)}>
      <S.Background>
        <S.Close onClick={() => setLoginVisible(false)}>✕</S.Close>
        <S.Title>로그인</S.Title>
        <S.Wrapper>
          <S.Input ref={inputRef} placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.CheckboxWrapper>
            <S.Checkbox id="saveid" type="checkbox" />
            <S.Label htmlFor="saveid">아이디 저장</S.Label>
          </S.CheckboxWrapper>
          <S.Button>로그인</S.Button>
        </S.Wrapper>
        <S.TextWrapper>
          <S.Text>
            계정이 없으신가요?
            <S.Link
              onClick={() => {
                setLoginVisible(false);
                setPolicyVisible(true);
              }}
            >
              회원가입
            </S.Link>
          </S.Text>
          <S.Link>아이디 / 비밀번호 찾기</S.Link>
        </S.TextWrapper>
      </S.Background>
    </S.Filter>
  );
};

export default LoginModal;
