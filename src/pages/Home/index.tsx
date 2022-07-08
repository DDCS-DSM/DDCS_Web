import { useState } from "react";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common";
import userProps from '../../userProps';
import Package from "../../components/Contents/Package";
import PackageContentProps from "../../components/Contents/Package/type";

type HomeProps = React.Dispatch<React.SetStateAction<string>>;

function Home({user}: {user: userProps}) {

  const [lists, setLists] = useState<PackageContentProps[]>([{
    id: 1,
    courierCompany: "string",
    name: "string",
    date: "string",
  }]);

  return (
    <>
      <Title>택배 목록</Title>
      <SchemaWrapper>
        <Schema>배송사</Schema>
        <Schema>수령자</Schema>
        <Schema>날짜</Schema>
      </SchemaWrapper>
      <Package lists={lists}/>
      <Button>더보기</Button>
    </>
  );
}

export default Home;

/*
      <Title>DCS란 무엇인가요?</Title>
      <S.PhraseWrapper>
        <S.Phrase>DCS란 Delivery Check System 의 약자로,</S.Phrase>
        <S.Phrase>기존에는 기숙사로 오는 택배의 정보를</S.Phrase>
        <S.Phrase>종이에 작성하는 방식이 채택되고 있었습니다.</S.Phrase>
        <S.Phrase>DCS는 온라인으로 명부를 작성하고</S.Phrase>
        <S.Phrase>온라인으로 명부를 확인할 수 있는 시스템입니다.</S.Phrase>
      </S.PhraseWrapper>
      <Menu user={user} setModalState={setModalState}/>
*/