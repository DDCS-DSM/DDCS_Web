import axios from "axios";
import cookie from 'react-cookies'
//import { setCookie } from "../../cookie";
import * as S from "./styles";

interface DropDownProps {
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown = ({ setDropDownVisible }: DropDownProps) => {

  const logOut = () => {
    const accessToken = cookie.load("DCS_accessToken");
    axios.delete("/users/logout", {headers:{Authorization: `Bearer ${accessToken}`}})
      .then(res => {
        alert("로그아웃 되었습니다.");
        cookie.remove("DCS_accessToken");
        cookie.remove("DCS-refreshToken");
        axios.defaults.headers.common['Authorization'] = "";
        window.location.reload();
      })
      .catch(err => alert(`에러. ${err.response.status}`))
  }

  return (
    <S.Wrapper onClick={() => setDropDownVisible(false)}>
      <S.Background>
        <S.Content to="/privacy">프로필</S.Content>
        <S.Content onClick={()=>alert("미구현")} to="/">문의하기</S.Content>
        <S.Content onClick={()=>logOut()} to="/">로그아웃</S.Content>
      </S.Background>
    </S.Wrapper>
  );
};

export default DropDown;
