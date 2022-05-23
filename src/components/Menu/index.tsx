import Bike from "../Background/Bike/Image";
import MenuContent from "../Contents/Menu";
import Card from "../Contents/MenuCard";

import { useMediaQuery } from "react-responsive";

import * as S from "./styles";

const Menu = () => {

  const isMobile = useMediaQuery({query: '(max-width: 426px)'});

  return (
    <S.PreWrapper>
      {isMobile ?
        <></>
        :
        <Bike />
      }
      {isMobile ?
        <S.CardDiv>
          <Card index={1}/>
          <Card index={2}/>
          <Card index={3}/>
        </S.CardDiv>
        :
        <S.Wrapper>
          <MenuContent index={1} />
          <MenuContent index={2} />
          <MenuContent index={3} />
        </S.Wrapper>
      }
    </S.PreWrapper>
  );
};

export default Menu;
