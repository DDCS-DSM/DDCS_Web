import { useState } from "react";

import DropDown from "../DropDown/index";
import * as S from "./style";

const Header = () => {
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

  return (
    <S.PreHeader>
      <S.Header>
        <S.LeftContents to="/">
          <S.Icon src="https://cdn.discordapp.com/attachments/921423896270491668/961795761077633034/logo.png" />
          <S.Text>DCS</S.Text>
        </S.LeftContents>
        <S.RightContents>
          <S.Icon
            src="https://cdn.discordapp.com/attachments/921423896270491668/961795748431794286/login.png"
            onClick={() => setDropDownVisible(true)}
          />
          {dropDownVisible === true && (
            <DropDown setDropDownVisible={setDropDownVisible} />
          )}
        </S.RightContents>
      </S.Header>
    </S.PreHeader>
  );
};

export default Header;
