import Menu from "../../components/Menu";
import * as S from "./styles";
import { Title } from "../../styles/common";

interface HomeProps {
  setClaimVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ setClaimVisible }: HomeProps) {
  return (
    <>
      <Title>DCS란 무엇인가요?</Title>
      <S.PhraseWrapper>
        <S.Phrase>DCS란 Delivery Check System 의 약자로,</S.Phrase>
        <S.Phrase>기존에는 기숙사로 오는 택배의 정보를</S.Phrase>
        <S.Phrase>종이에 작성하는 방식이 채택되고 있었습니다.</S.Phrase>
        <S.Phrase>DCS는 온라인으로 명부를 작성하고</S.Phrase>
        <S.Phrase>온라인으로 명부를 확인할 수 있는 시스템입니다.</S.Phrase>
      </S.PhraseWrapper>
      <Menu setClaimVisible={setClaimVisible} />
    </>
  );
}

export default Home;
