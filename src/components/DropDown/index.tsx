import axios from "axios";
//import { setCookie } from "../../cookie";
import * as S from "./styles";

interface DropDownProps {
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown = ({ setDropDownVisible }: DropDownProps) => {

  const logOut = () => {
    axios.delete("/users/logout")
      .then(res => {
        window.location.reload();
      })
      .catch(err => alert("로그아웃에 실패했습니다."))
  }

  return (
    <S.Wrapper onClick={() => setDropDownVisible(false)}>
      <S.Background>
        <S.Content to="/privacy">정보 변경</S.Content>
        <S.Content onClick={()=>alert("미구현")} to="/">문의하기</S.Content>
        <S.Content onClick={()=>logOut()} to="/">로그아웃</S.Content>
      </S.Background>
    </S.Wrapper>
  );
};

export default DropDown;
