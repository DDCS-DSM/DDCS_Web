import axios from "axios";
import cookie from 'react-cookies'
//import { setCookie } from "../../cookie";
import * as S from "./styles";
import { code, list, log, login, profile, notice} from "../../assets/images/icons"
import { useNavigate } from "react-router-dom";
import userProps from "../../userProps";

interface DropDownProps {
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>,
  loginState: boolean,
  setModalState: React.Dispatch<React.SetStateAction<string>>,
  user: userProps
}

const DropDown = ({ setDropDownVisible, setModalState, loginState, user }: DropDownProps) => {

  const logout = () => {
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

  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => setDropDownVisible(false)}>
      <S.Background>
        {loginState ?
        <S.Content onClick={()=>navigate("/privacy")}>
          <img src={profile}/>
          {user.name}
        </S.Content>
        :
        <></>
        }
        <S.Content onClick={()=>navigate("/")}>
          <img src={list}/>
          택배목록
        </S.Content>
        {loginState ?
          <S.Content onClick={()=>navigate("/log")}>
            <img src={log}/>
            수령내역
          </S.Content>
          :
          <></>
        }
        {!loginState ?
          <>
            <S.Content onClick={()=>setModalState("login")}>
              <img src={login}/>
              로그인
            </S.Content>
            <S.Content onClick={()=>setModalState("policy")}>
              <img src={login}/>
              회원가입
            </S.Content>
          </>
          :
          <S.Content onClick={()=>logout()}>
            <img src={login}/>
            로그아웃
          </S.Content>
        }
        <S.Content onClick={()=>navigate("/notice")}>
          <img src={notice}/>
          공지사항
        </S.Content>
        <S.Content onClick={()=>navigate("/developers")}>
          <img src={code}/>
          개발자 소개
        </S.Content>
      </S.Background>
    </S.Wrapper>
  );
};

export default DropDown;
