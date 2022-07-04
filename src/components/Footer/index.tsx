import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Table>
        <S.SchemaWrapper>
          <S.Schema>Front-End</S.Schema>
          <S.Schema>Back-End</S.Schema>
          <S.Schema>Android</S.Schema>
          <S.Schema>Design</S.Schema>
        </S.SchemaWrapper>

        <S.InstanceWrapper>
          <span>
            <S.Instance>이상운</S.Instance>
            <S.Instance>이진형</S.Instance>
            <S.Instance>박상민</S.Instance>
          </span>
          <span>
            <S.Instance>최 희</S.Instance>
            <S.Instance>박상진</S.Instance>
          </span>
          <span>
            <S.Instance>이상운</S.Instance>
          </span>
          <span>
            <S.Instance>이상운</S.Instance>
            <S.Instance>이진형</S.Instance>
            <S.Instance>박상민</S.Instance>
          </span>
        </S.InstanceWrapper>
      </S.Table>
    </S.Footer>
  );
};

export default Footer;
