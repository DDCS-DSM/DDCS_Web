import { useState } from 'react';
import * as S from '../../styles/Regist';
import Banner from '../Banner';

const Regist = () => {

    const [list, setList] = useState([{name: "1"}]);

    return(
        <>
        <Banner src={""}/>
        <S.Body>
            <h1>택배 등록</h1>
            <S.List>
            <S.CompanySelect>
            </S.CompanySelect>
                {list.map(i => {
                    return(
                        <li>
                            <div>
                                <input placeholder='수령자'/>
                                <select>

                                </select>
                            </div>
                            <input placeholder='상품명'/>
                        </li>
                    )
                })}
            </S.List>
            <S.ButtonDiv>
                <button>추가</button>
                <button>등록</button>
            </S.ButtonDiv>
        </S.Body>
        </>
    )
}

export default Regist;