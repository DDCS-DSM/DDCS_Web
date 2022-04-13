import { useState } from "react";

import DropDown from "../DropDown/index";
import * as S from "./style";

const logo = require("../../assets/png/logo.png");
const login = require("../../assets/png/login.png");

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
          {dropDownVisible === true && (
            <DropDown setDropDownVisible={setDropDownVisible} />
          )}
        </S.RightContents>
      </S.Header>
    </S.PreHeader>
  );
};

export default Header;
