import * as S from "./styles";

interface DropDownProps {
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown = ({ setDropDownVisible }: DropDownProps) => {
  return (
    <S.Wrapper onClick={() => setDropDownVisible(false)}>
      <S.Background>
        <S.Content to="/privacy">정보 변경</S.Content>
        <S.Content to="/">문의하기</S.Content>
        <S.Content to="/">로그아웃</S.Content>
      </S.Background>
    </S.Wrapper>
  );
};

export default DropDown;
