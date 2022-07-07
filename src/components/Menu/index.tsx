import Bike from "../Background/Bike/Image";
import MenuContent from "../Contents/Menu";
import Card from "../Contents/MenuCard";

import { useMediaQuery } from "react-responsive";

import * as S from "./styles";

import userProps from "../../userProps";

type MenuProps = React.Dispatch<React.SetStateAction<string>>



const Menu = ({setModalState, user}: {setModalState: MenuProps, user: userProps}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <S.PreWrapper>
      {isMobile ? <></> : <Bike />}
      {isMobile ? (
        <S.CardDiv>
          <Card index={1} />
          <Card index={2} user={user} setModalState={setModalState} />
          <Card index={3} />
        </S.CardDiv>
      ) : (
        <S.Wrapper>
          <MenuContent index={1} />
          <MenuContent index={2} user={user} setModalState={setModalState} />
          <MenuContent index={3} />
        </S.Wrapper>
      )}
    </S.PreWrapper>
  );
};

export default Menu;
