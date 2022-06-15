import { useRef, useState } from "react";
import * as S from "./styles";

interface RegisterModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<String>>;
}

const PolicyModal = ({ setModalState }: RegisterModalInterface) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [checkedState, setCheckedState] = useState<boolean>(true);

  return (
    <S.Filter>
      <S.Background>
        <S.Close
          onClick={() => {
            setModalState("login");
          }}
        >
          ←
        </S.Close>
        <S.Title>회원가입</S.Title>
        <S.Text>이용 고객 (또는 회원) 은(는) 서비스 회원가입,</S.Text>
        <S.Text>고객 상담 및 고지사항 전달 등을 위해 </S.Text>
        <S.Text>아래와 같이 개인정보를 수집 및 이용합니다.</S.Text>
        <S.SchemaWrapper>
          <S.Schema>수집 항목</S.Schema>
          <S.Schema>수집 목적</S.Schema>
          <S.Schema>보유 기간</S.Schema>
        </S.SchemaWrapper>
        <S.InstanceWrapper>
          <S.Instance>
            <span>이름</span>
            <span>이메일</span>
            <span>아이디</span>
            <span>비밀번호</span>
          </S.Instance>
          <S.Instance>
            <span>이용자 식별 및</span>
            <span>본인 여부 확인</span>
          </S.Instance>
          <S.Instance>
            <span>회원 탈퇴 시까지</span>
          </S.Instance>
        </S.InstanceWrapper>
        <S.CheckboxWrapper>
          <S.Label htmlFor="saveid">
            위 개인정보 수집 및 이용에 동의합니다.
          </S.Label>
          <S.Checkbox
            id="saveid"
            type="checkbox"
            ref={inputRef}
            onChange={() => setCheckedState(!inputRef.current?.checked)}
          />
        </S.CheckboxWrapper>
        <S.SubText>
          개인정보 수집 및 이용에 대해서는 거부할 수 있으며,
        </S.SubText>
        <S.SubText>거부 시에는 회원가입이 불가합니다.</S.SubText>
        <S.SubText>ㅤ</S.SubText>
        <S.SubText>
          서비스 제공을 위해서 반드시 필요한 최소한의 개인정보이므로
        </S.SubText>
        <S.SubText>동의를 하셔야 서비스 이용이 가능합니다.</S.SubText>
        <S.SubText>ㅤ</S.SubText>
        <S.SubText>이 외 서비스 이용과정에서 별도 동의를 통해</S.SubText>
        <S.SubText>추가정보 수집이 있을 수 있습니다.</S.SubText>
        <S.Button
          onClick={() => {
            setModalState("register");
          }}
          disabled={checkedState}
        >
          다음
        </S.Button>
      </S.Background>
    </S.Filter>
  );
};

export default PolicyModal;
