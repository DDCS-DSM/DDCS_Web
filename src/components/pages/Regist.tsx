import { useState } from 'react';
import * as S from '../../styles/Regist'
import Banner from '../Banner';

const Regist = () => {

    const [list, setList] = useState([]);

    return(
        <S.Body>
            <S.CompanySelect/>
            <S.List>
                {list.map(i => {
                    return(
                        <li>
                            <div>
                                <input />
                                <select>

                                </select>
                            </div>
                            <input/>
                        </li>
                    )
                })}
            </S.List>
        </S.Body>
    )
}

export default Regist;