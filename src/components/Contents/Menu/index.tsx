import * as S from "./styles";

const Storage = require("../../../assets/images/storage.png");
const Note = require("../../../assets/images/note.png");
const Cat = require("../../../assets/images/cat.png");

interface MenuContentProps {
  index: number;
  setModalState?: React.Dispatch<React.SetStateAction<String>>;
}

const MenuContent = ({ index, setModalState }: MenuContentProps) => {
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
        <S.Wrapper
          to="/"
          onClick={() => {
            if (setModalState) setModalState("claim");
          }}
        >
          <S.Background src={Cat} />
          <S.Title>택배 수령 인증하기</S.Title>
          <S.SubTitle>택배 수령을 인증합니다.</S.SubTitle>
        </S.Wrapper>
      );
    case 3:
      return (
        <S.Wrapper to="/enlist">
          <S.Background src={Note} />
          <S.Title>수령한 택배 확인하기</S.Title>
          <S.SubTitle>수령한 택배를 확인합니다.</S.SubTitle>
        </S.Wrapper>
      );
  }

  return <></>;
};

export default MenuContent;
