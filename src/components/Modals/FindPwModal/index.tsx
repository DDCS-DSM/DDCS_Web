import { useRef } from "react";
import * as S from "./styles";

interface LoginModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<String>>;
}

const FindPwModal = ({ setModalState }: LoginModalInterface) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <S.Filter>
      <S.Background>
        <S.Close onClick={() => setModalState("login")}>←</S.Close>
        <S.Title>비밀번호 찾기</S.Title>
        <S.Wrapper>
          <S.Input ref={inputRef} placeholder="아이디" />
          <S.Input type="password" placeholder="이메일" />
          <S.Button>비밀번호 찾기</S.Button>
        </S.Wrapper>
      </S.Background>
    </S.Filter>
  );
};

export default FindPwModal;
