import userProps from "./userProps";

const isLogined = (user: userProps) => {
    if(user.phoneNumber || user.admin || user.courier)
      return true;
    else
      return false;
}

export default isLogined