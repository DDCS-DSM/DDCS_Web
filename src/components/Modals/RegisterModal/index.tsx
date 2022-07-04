import axios from "axios";
import { useRef, useState } from "react";
import * as S from "./styles";

interface RegisterModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterModal = ({ setModalState }: RegisterModalInterface) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const emailCheckInput = useRef<HTMLInputElement>(null);
  const idInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const pwCheckInput = useRef<HTMLInputElement>(null);

  const [onVerification, setOnVerification] = useState<boolean>(false);

  const [check, setCheck] = useState({});

  const checkInput = () => {
    if (
      nameInput.current &&
      nameInput.current.value &&
      emailInput.current &&
      emailInput.current.value &&
      idInput.current &&
      idInput.current.value &&
      pwInput.current &&
      pwInput.current.value &&
      pwCheckInput.current &&
      pwCheckInput.current.value
    ) {
      if(pwInput.current.value === pwCheckInput.current.value) 
        return true;
      else {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }
    } 
    else {
      alert("값을 모두 입력해주세요.");
      return false;
    }
  }

  const confirmRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(checkInput()){
      setModalState("login");
    }
  };

  //이메일 인증 요청
  const requestEmailVerification = () => {
    if(emailInput.current?.value){
      axios.post("/email-verifications", {action: "SIGNUP", value: pwInput})
        .then(res => alert("요청 되었습니다."))
        .catch(err => alert(`에러 ${err.status}`))
    }
  }

  //이메일 인증
  const emailAuthentication = () => {
    if(emailInput.current?.value && emailCheckInput.current?.value) {
      axios.put("/users/email-verifications", {email: emailInput.current?.value, code: emailCheckInput.current?.value})
        .then(res => alert("인증 되었습니다."))
        .catch(err => alert(`에러 ${err.status}`))
    }
  }

  //회원가입
  const signup = () => {
    if(checkInput()){
      axios.post("/users", {
        accountId: idInput.current?.value, // 6자 이상 아이디
        password: pwInput.current?.value, // 영어, 숫자, 특수문자 포함 8자 이상
        email: emailInput.current?.value, // 학교 이메일
        name: nameInput.current?.value, // 이름
        phoneNumber: "010-1122-1211", // 전화번호
        studentNumber: "2211" // 학번
      })
    }
  }

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
          <S.Input ref={idInput} placeholder="아이디" />
          <S.Check down={0}>중복 확인</S.Check>
          <S.Input ref={nameInput} placeholder="학번" />
          <S.Check down={16}>중복 확인</S.Check>
          <S.Input ref={nameInput} placeholder="이름" />
          <S.Input ref={nameInput} placeholder="전화번호" />
          <S.Check down={50}>중복 확인</S.Check>
          <S.Input ref={emailInput} placeholder="이메일" />
          <S.Check down={66}>중복 확인</S.Check>
          <S.Input ref={emailCheckInput} placeholder="이메일 인증 번호" />
          {onVerification ?
            <S.Check down={83} onClick={()=>emailAuthentication()}>인증</S.Check>
            :
            <S.Check down={83} onClick={()=>requestEmailVerification()}>전송 요청</S.Check>
          }
          <S.Input ref={pwInput} placeholder="비밀번호" />
          <S.Input placeholder="비밀번호 확인" />

          <S.Button onClick={()=>signup()}>회원가입</S.Button>
        </S.Wrapper>
      </S.Background>
    </S.Filter>
  );
};

export default RegisterModal;
