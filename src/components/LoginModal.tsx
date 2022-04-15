import * as S from '../styles/Login';
import { Background } from '../styles/Modal';

const LoginModal = () => {
    return(
        <Background>
            <S.Modal>
                <h1>로그인</h1>
                <input placeholder='아이디'/>
                <input placeholder='비밀번호'/>
                <button>로그인</button>
            </S.Modal>
        </Background>
    )
}

export default LoginModal;