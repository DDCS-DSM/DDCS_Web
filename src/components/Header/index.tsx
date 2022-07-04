import { useState } from "react";

import DropDown from "../DropDown/index";
import * as S from "./styles";
import { logo, login } from "../../assets/images";
import userProps from "../../userProps";

interface HeaderInterface {
  loginState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<string>>;
  user: userProps;
}

const Header = ({
  loginState,
  setModalState,
  user
}: HeaderInterface): JSX.Element => {
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

  return (
    <S.PreHeader>
      <S.Header>
        <S.LeftContents to="/">
          <S.Icon src={logo} />
          <S.Text>DCS</S.Text>
        </S.LeftContents>
        {loginState ? (
          <S.RightContents onClick={() => setDropDownVisible(true)}>
            <S.Text>{user.studentNumber} {user.name}</S.Text>
            <S.Icon src={login} />
          </S.RightContents>
        ) : (
          <S.RightContents onClick={() => setModalState("login")}>
            <S.Text>로그인</S.Text>
            <S.Icon src={login} />
          </S.RightContents>
        )}
        {dropDownVisible === true && (
          <DropDown setDropDownVisible={setDropDownVisible} />
        )}
      </S.Header>
    </S.PreHeader>
  );
};

export default Header;
