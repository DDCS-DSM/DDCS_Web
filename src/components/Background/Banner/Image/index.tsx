import * as S from "./styles";
import { home, list, enlist, accept } from "../../../../assets/images";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";

const Banner = () => {

  const location = useLocation();
  const pathname = location.pathname;

  const [img, setImg] = useState<string>(home);

  useEffect(()=>{
    switch(pathname){
      case "/list":
        setImg(list);
        break;
      case "/enlist":
        setImg(enlist);
        break;
      case "/accept":
        setImg(accept);
        break;
      case "/":
        setImg(home);
        break;
    }
  },[pathname, ])

  return <S.Image src={img} />;
};

export default Banner;
