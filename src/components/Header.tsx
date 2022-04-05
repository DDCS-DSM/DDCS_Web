import React from "react";

import * as S from "../styles/Header";

const Logo = require("../assets/png/logo.png");
const Login = require("../assets/png/login.png");

const Header = () => {
  return (
    <S.PreHeader>
      <S.Header>
        <S.LeftContents to="/">
          <S.Icon src={Logo} />
          <S.Text>DCS</S.Text>
        </S.LeftContents>
        <S.RightContents>
          <S.Icon src={Login} />
        </S.RightContents>
      </S.Header>
    </S.PreHeader>
  );
};

export default Header;
