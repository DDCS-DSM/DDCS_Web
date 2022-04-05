import React, { useState } from "react";

import * as S from "../../styles/Home";

const Mail = require("../../assets/png/mail.png");

const Home = () => {
  const [delivery, setDelivery] = useState<object[]>();

  return (
    <>
      {delivery ? (
        <></>
      ) : (
        <S.Wrapper>
          <S.Icon src={Mail} />
          <S.Text>택배가 없습니다.</S.Text>
        </S.Wrapper>
      )}
    </>
  );
};

export default Home;
