import { useRef } from "react";
import * as S from "../styles";

interface LoginModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const FindIdModal = ({ setModalState }: LoginModalInterface) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <S.Filter>
      <S.Background>
        <S.Close onClick={() => setModalState("login")}>←</S.Close>
        <S.Title>아이디 찾기</S.Title>
        <S.Wrapper>
          <S.Input ref={inputRef} placeholder="이름" />
          <S.Input type="password" placeholder="이메일" />
          <S.Button>아이디 찾기</S.Button>
        </S.Wrapper>
      </S.Background>
    </S.Filter>
  );
};

export default FindIdModal;
