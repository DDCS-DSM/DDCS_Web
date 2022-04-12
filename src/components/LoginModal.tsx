import * as S from '../styles/LoginModal';

const LoginModal = () => {
    return(
        <S.Background>
            <S.Modal>
                <h1>로그인</h1>
                <input placeholder='아이디'/>
                <input placeholder='비밀번호'/>
                <button>로그인</button>
            </S.Modal>
        </S.Background>
    )
}

export default LoginModal;