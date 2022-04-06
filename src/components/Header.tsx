import React, { useState } from "react";

import DropDown from "./DropDown";

import * as S from "../styles/Header";

const Logo = require("../assets/png/logo.png");
const Login = require("../assets/png/login.png");

const Header = () => {
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

  return (
    <S.PreHeader>
      <S.Header>
        <S.LeftContents to="/">
          <S.Icon src={Logo} />
          <S.Text>DCS</S.Text>
        </S.LeftContents>
        <S.RightContents>
          <S.Icon src={Login} onClick={() => setDropDownVisible(true)} />
          {dropDownVisible === true && (
            <DropDown setDropDownVisible={setDropDownVisible} />
          )}
        </S.RightContents>
      </S.Header>
    </S.PreHeader>
  );
};

export default Header;
