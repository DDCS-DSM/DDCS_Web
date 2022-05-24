import * as S from "./styles";

const Storage = require("../../../assets/images/storage.png");
const Note = require("../../../assets/images/note.png");

interface MenuContentProps {
  index: number;
  setClaimVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContent = ({ index, setClaimVisible }: MenuContentProps) => {
  switch (index) {
    case 1:
      return (
        <S.Wrapper to="/list">
          <S.Background src={Storage} />
          <S.Title>택배 목록 확인하기</S.Title>
          <S.SubTitle>대기중인 택배를 확인합니다.</S.SubTitle>
        </S.Wrapper>
      );
    case 2:
      return (
        <S.Wrapper to="/">
          <S.Background src={Note} />
          <S.Title>수령한 택배 확인하기</S.Title>
          <S.SubTitle>수령한 택배를 확인합니다.</S.SubTitle>
        </S.Wrapper>
      );
  }

  return <></>;
};

export default MenuContent;
