import userProps from "./userProps";

const isLogined = (user: userProps) => {
    if(user.studentNumber || user.teacher || user.courier)
      return true;
    else
      return false;
}

export default isLogined