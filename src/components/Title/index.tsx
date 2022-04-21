import * as S from "./styles";
import Banner from "../Background/Banner/Image";

const Title = () => {
  return (
    <>
      <Banner />
      <S.TitleWrapper>
        <S.Title>DCS</S.Title>
        <S.SubTitle>택배 확인 시스템</S.SubTitle>
      </S.TitleWrapper>
    </>
  );
};

export default Title;
