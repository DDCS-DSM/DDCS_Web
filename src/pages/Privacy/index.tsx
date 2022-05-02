import Title from "../../components/Title";
import * as S from "./styles";

const Privacy = () => {
  return (
    <>
      <Title />
      <S.Title>개인 정보 수정</S.Title>
      <S.Table>
        <S.Item>
          <S.Schema>아이디</S.Schema>
          <S.Instance>DummyId</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이름</S.Schema>
          <S.Instance>DummyName</S.Instance>
        </S.Item>
        <S.Item>
          <S.Schema>이메일</S.Schema>
          <S.Instance>DummyMail</S.Instance>
        </S.Item>
      </S.Table>

      <S.Button>수정하기</S.Button>
    </>
  );
};

export default Privacy;
