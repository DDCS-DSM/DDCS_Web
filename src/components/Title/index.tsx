import * as S from "./styles";
import Banner from "../Background/Banner/Image";
import { home, developers, log, enlist, privacy, notice } from "../../assets/images/banners";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";

const Title = () => {

  const location = useLocation();
  const pathname = location.pathname;

  const [img, setImg] = useState<string>(home);
  const [subTitle, setSubTitle] = useState<string>("");

  useEffect(()=>{
    switch(pathname){
      case "/log":
        setImg(log);
        setSubTitle("택배 내역 확인");
        break;
      case "/developers":
        setImg(developers);
        setSubTitle("DCS 개발자 소개");
        break;
      case "/enlist":
        setImg(enlist);
        setSubTitle("택배 등록");
        break;
      case "/privacy":
        setImg(privacy);
        setSubTitle("개인정보");
        break;
      case "/notice":
        setImg(notice);
        setSubTitle("공지사항");
        break;
      case "/":
        setImg(home);
        setSubTitle("택배 리스트 확인");
        break;
    }
  },[pathname, ])

  return (
    <>
      <Banner img={img}/>
      <S.TitleWrapper>
        <S.Title>DCS</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.TitleWrapper>
    </>
  );
};

export default Title;
