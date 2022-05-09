import Title from "../../../components/Title";
import PackageContent from "../../../components/Contents/Package";
import * as S from "./styles";

const PackageList = () => {
  return (
    <>
      <Title />
      <S.Title>택배 목록</S.Title>
      <S.SchemaWrapper>
        <S.Schema>배송사</S.Schema>
        <S.Schema>수령자</S.Schema>
        <S.Schema>날짜</S.Schema>
      </S.SchemaWrapper>
      <PackageContent company="한진택배" presentee="최희" date="2022-04-10" />
      <PackageContent
        company="CJ대한통운"
        presentee="박상진"
        date="2022-04-13"
      />
      <PackageContent company="한진택배" presentee="이상운" date="2022-04-16" />
      <PackageContent
        company="CJ대한통운"
        presentee="박상민"
        date="2022-04-19"
      />
      <PackageContent company="한진택배" presentee="이진형" date="2022-04-22" />
      <S.Button>더보기</S.Button>
    </>
  );
};

export default PackageList;
