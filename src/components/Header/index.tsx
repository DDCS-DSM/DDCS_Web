import { useState } from "react";

import DropDown from "../DropDown/index";
import * as S from "./styles";
import { logo, login } from "../../assets/images";

const Header = () => {
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

  return (
    <S.PreHeader>
      <S.Header>
        <S.LeftContents to="/">
          <S.Icon src={logo} />
          <S.Text>DCS</S.Text>
        </S.LeftContents>
        <S.RightContents>
          <S.Icon src={login} onClick={() => setDropDownVisible(true)} />
        </S.RightContents>{" "}
        {dropDownVisible === true && (
          <DropDown setDropDownVisible={setDropDownVisible} />
        )}
      </S.Header>
    </S.PreHeader>
  );
};

export default Header;
