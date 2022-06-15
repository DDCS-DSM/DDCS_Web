import { useRef } from "react";
import * as S from "./styles";

interface RegisterModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<String>>;
}

const RegisterModal = ({ setModalState }: RegisterModalInterface) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const idInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);

  const confirmRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nameInput.current &&
      nameInput.current.value &&
      emailInput.current &&
      emailInput.current.value &&
      idInput.current &&
      idInput.current.value &&
      pwInput.current &&
      pwInput.current.value
    ) {
      setModalState("login");
    } else alert("값을 모두 입력해주세요!");
  };

  return (
    <S.Filter>
      <S.Background>
        <S.Close
          onClick={() => {
            setModalState("policy");
          }}
        >
          ←
        </S.Close>
        <S.Title>회원가입</S.Title>

        <S.Wrapper onSubmit={(e) => confirmRegister(e)}>
          <S.Input ref={nameInput} placeholder="이름" />
          <S.Input ref={emailInput} placeholder="이메일" />
          <S.Input placeholder="이메일 인증 번호" />
          <S.VerifyEmail>전송 요청</S.VerifyEmail>
          <S.Input ref={idInput} placeholder="아이디" />
          <S.Input ref={pwInput} placeholder="비밀번호" />
          <S.Input placeholder="비밀번호 확인" />

          <S.Button>회원가입</S.Button>
        </S.Wrapper>
      </S.Background>
    </S.Filter>
  );
};

export default RegisterModal;
