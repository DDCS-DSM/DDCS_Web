import Bike from "../Background/Bike/Image";
import Content from "./Content";

import * as S from "./styles";

const Menu = () => {
  return (
    <S.PreWrapper>
      <Bike />
      <S.Wrapper>
        <Content index={1} />
        <Content index={2} />
        <Content index={3} />
      </S.Wrapper>
    </S.PreWrapper>
  );
};

export default Menu;
