import * as S from './styles'
import { arrow, logo } from "../../../assets/images"

const MenuCard = ({index} : {index: number}) : JSX.Element => {
    switch (index) {
        case 1:
          return (
            <S.Card to="/list">
              <S.LeftDiv>
                <img src={logo} alt="logo" />
                <S.TitleDiv>
                    <S.Title>택배 목록 확인하기</S.Title>
                    <S.SubTitle>대기중인 택배를 확인합니다.</S.SubTitle>
                </S.TitleDiv>
              </S.LeftDiv>
              <img src={arrow} alt="arrow" />
            </S.Card>
          );
        case 2:
          return (
            <S.Card to="/">
              <S.LeftDiv>
                <img src={logo} alt="logo" />
                <S.TitleDiv>
                    <S.Title>택배 수령 인증하기</S.Title>
                    <S.SubTitle>택배 수령을 인증합니다.</S.SubTitle>
                </S.TitleDiv>
              </S.LeftDiv>
              <img src={arrow} alt="arrow" />
            </S.Card>
          );
        case 3:
          return (
            <S.Card to="/">
              <S.LeftDiv>
                <img src={logo} alt="logo" />
                <S.TitleDiv>
                    <S.Title>수령한 택배 확인하기</S.Title>
                    <S.SubTitle>수령한 택배를 확인합니다.</S.SubTitle>
                </S.TitleDiv>
              </S.LeftDiv>
              <img src={arrow} alt="arrow" />
            </S.Card>
            );
    }
    
    return <></>;
}

export default MenuCard