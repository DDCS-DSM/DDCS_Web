import { Location, NavigateFunction } from "react-router-dom";
import userProps from "./userProps";
import isLogined from "./isLogined";

const accessCheck = (user: userProps, location: Location, navigate: NavigateFunction) => {
  if(!isLogined(user) && location.pathname !== "/"){
    alert("로그인을 먼저 해주십쇼.");
    navigate("/");  
  }
  else if(user.admin === false && user.courier === false && (location.pathname === "/enlist" || location.pathname === "/accept")) {
    alert("권한이 없습니다.");
    navigate("/");
  }
}

export default accessCheck;