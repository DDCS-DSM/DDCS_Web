import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Title, Filter, Background, Close, Wrapper, Input } from "../styles";
import { leftArrow } from "../../../assets/images/icons"

interface RegisterModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterModal = ({ setModalState }: RegisterModalInterface) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const idInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const pwCheckInput = useRef<HTMLInputElement>(null);
  const phoneNumberInput = useRef<HTMLInputElement>(null);
  const verificationInput = useRef<HTMLInputElement>(null);

  const checkInput = () => {
    if (
      nameInput.current &&
      nameInput.current.value &&
      idInput.current &&
      idInput.current.value &&
      pwInput.current &&
      pwInput.current.value &&
      pwCheckInput.current &&
      pwCheckInput.current.value&&
      phoneNumberInput.current&&
      phoneNumberInput.current.value
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
/*
  const confirmRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(checkInput()){
      setModalState("login");
    }
  };*/

  const duplicationCheck = () => {

    if(idInput.current?.value){
      axios.head(`/users/account_id/${idInput.current.value}`)
        .catch(err => {
          console.log(err);
          if(err.response.status === 409){
            alert("이미 존재합니다.");
          }
          else if(err.response.status === 404){
            alert("가능합니다.");
          }
          else{
            alert(`에러 ${err.response.status}`);
          }
        })
    }
    else{
      alert("아이디를 입력해 주세요.")
    }
  }

  //전회번호 인증 요청
  const requestPhoneNumberVerification = () => {
    console.log(phoneNumberInput.current?.value);
    if(phoneNumberInput.current?.value) {
      axios.post("/users/email-verifications", {email: phoneNumberInput.current.value})
        .then(res => alert("요청 되었습니다."))
        .catch(err => alert(`에러 ${err.response.status}`))
      //setOnVerification(true);
    }
    else{
      alert("전회번호을 입력해주세요.");
    }
  }

  //전회번호 인증
  const phoneNumberAuthentication = () => {
    if(phoneNumberInput.current?.value && verificationInput.current?.value) {
      axios.put("/users/email-verifications", {email: phoneNumberInput.current?.value, code: verificationInput.current?.value})
        .then(res => {
          alert("인증 되었습니다.");
          //setOnVerification(true);
        })
        .catch(err => alert(`에러 ${err.status}`));
    }
    else{
      alert("전회번호과 코드를 입력해주세요.");
    }
  }

  const navigate = useNavigate();

  //회원가입
  const signup = () => {
    if(checkInput()){
      axios.post("/users", {
        accountId: idInput.current?.value, // 6자 이상 아이디
        password: pwInput.current?.value, // 영어, 숫자, 특수문자 포함 8자 이상
        name: nameInput.current?.value, // 이름
        phoneNumber: phoneNumberInput.current?.value, // 전화번호
      })
      .then(res => {
        alert("회원가입 완료.");
        navigate("/");
      })
      .catch(err => {
        alert(`에러 ${err.response.status}`);
      })
    }
  }

  return(
    <Filter>
      <Background>
        <Close
          src={leftArrow}
          onClick={() => {
            setModalState("policy");
          }}
        />
        <Title>회원가입</Title>
        <Wrapper onSubmit={() => signup()}>

          <Input ref={idInput} placeholder="아이디 (6자 이상)" />
          <S.Check onClick={()=>duplicationCheck()}>중복 확인</S.Check>

          <Input ref={nameInput} placeholder="이름" />

          <Input ref={phoneNumberInput} placeholder="전화번호" />
          <S.Check down={16} onClick={()=>requestPhoneNumberVerification()}>인증 요청</S.Check>

          <Input ref={verificationInput} placeholder="인증번호" />
          <S.Check down={24} onClick={()=>phoneNumberAuthentication()}>인증 확인</S.Check>

          <Input ref={pwInput} type="password" placeholder="비밀번호 (영어, 숫자, 특수문자 포함 8자 이상)" />
          <Input ref={pwCheckInput} type="password" placeholder="비밀번호 확인" />

          <S.Button onClick={()=>signup()}>회원가입</S.Button>
        </Wrapper>
      </Background>
    </Filter>
  );
};

export default RegisterModal;
