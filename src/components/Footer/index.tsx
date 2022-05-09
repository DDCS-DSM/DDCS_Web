import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Table>
        <S.SchemaWrapper>
          <S.Schema>Front-End</S.Schema>
          <S.Schema>Back-End</S.Schema>
          <S.Schema>Android</S.Schema>
        </S.SchemaWrapper>

        <S.InstanceWrapper>
          <span>
            <S.Instance>biscrab</S.Instance>
            <S.Instance>__Rals</S.Instance>
          </span>
          <span>
            <S.Instance>choihee</S.Instance>
            <S.Instance>sangjin</S.Instance>
          </span>
          <span>
            <S.Instance>Dohanol_</S.Instance>
          </span>
        </S.InstanceWrapper>
      </S.Table>
    </S.Footer>
  );
};

export default Footer;
