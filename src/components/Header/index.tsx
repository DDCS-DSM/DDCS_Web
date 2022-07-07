import { useState } from "react";
import DropDown from "../DropDown/index";
import * as S from "./styles";
import { logo, login } from "../../assets/images";
import userProps from "../../userProps";

//import { initializeApp } from "firebase-admin/app";
//import admin from "firebase-admin";

//initializeApp();

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

  
  interface winProps extends globalThis.Window { 
    ReactNativeWebView?: {
      postMessage(msg: string): void; 
    }
  };

  const test = () => {
    const win: winProps = window;
    if(win.ReactNativeWebView)
      win.ReactNativeWebView.postMessage(JSON.stringify({type: "123", data: "123"}));
    const message = {
      topic: "123"
    }
    /*
  getMessaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })*/
  }

  return (
    <S.PreHeader>
      <S.Header>
        <S.LeftContents to="/">
          <S.Icon src={logo} />
          <S.Text>DCS</S.Text>
        </S.LeftContents>
        {loginState ? (
          <S.RightContents onClick={() => setDropDownVisible(true)}>
            <S.Text>{user.teacher || user.courier ? "어드민" : `${user.studentNumber} ${user.name}`}</S.Text>
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
