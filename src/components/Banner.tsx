import * as S from '../styles/Banner';

const Banner = ({src}: {src: string}) => {
    return(
        <S.Banner src={src}>
            <h1>DCS</h1>
            <h2>택배 확인 시스템</h2>
        </S.Banner>
    )
}

export default Banner