import { useState } from "react";

import DropDown from "../DropDown/index";
import * as S from "./styles";
import { logo, login } from "../../assets/images";

interface HeaderInterface {
  loginState: boolean;
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ loginState, setLoginVisible }: HeaderInterface): JSX.Element => {
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
            <S.Text>{"2216 이진형"}</S.Text>
            <S.Icon src={login} />
          </S.RightContents>
        ) : (
          <S.RightContents onClick={() => setLoginVisible(true)}>
            <S.Text>로그인 후 이용해주세요</S.Text>
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
