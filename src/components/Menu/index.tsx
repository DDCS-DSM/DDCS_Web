import Bike from "../Background/Bike/Image";
import MenuContent from "../Contents/Menu";

import * as S from "./styles";

const Menu = () => {
  return (
    <S.PreWrapper>
      <Bike />
      <S.Wrapper>
        <MenuContent index={1} />
        <MenuContent index={2} />
        <MenuContent index={3} />
      </S.Wrapper>
    </S.PreWrapper>
  );
};

export default Menu;
