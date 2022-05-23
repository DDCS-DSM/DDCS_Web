import { useEffect, useRef } from "react";
import * as S from "./styles";

interface RegisterModalInterface {
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPolicyVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal = ({
  setLoginVisible,
  setPolicyVisible,
  setRegisterVisible,
}: RegisterModalInterface) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const idInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setRegisterVisible(false);
        setPolicyVisible(true);
        window.removeEventListener("keydown", close);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setRegisterVisible, setPolicyVisible, ]);

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
      setRegisterVisible(false);
      setLoginVisible(true);
    } else alert("값을 모두 입력해주세요!");
  };

  return (
    <S.Filter>
      <S.Background>
        <S.Close
          onClick={() => {
            setRegisterVisible(false);
            setPolicyVisible(true);
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
