import * as S from './styles';
import { Title } from '../../styles/common';
import EnlistPackage from '../../components/Contents/EnlistPackage';
import EnlistPackageContentProps from '../../components/Contents/EnlistPackage/type';
import { useState } from 'react';

const Enlist = () => {

    const [lists, setLists] = useState<EnlistPackageContentProps[]>([{name: "1", phone: "1"}]);

    const add = () => {
        const list = lists;
        list.push({name: "",  phone: ""});
        setLists([...list]);
    }

    return(
        <S.Body>
            <Title>택배 등록</Title>
            <S.SchemaWrapper/>
            <S.Company>
                <option>회사를 선택해 주세요.</option>
            </S.Company>
            <EnlistPackage lists={lists} setLists={setLists} />
            <S.ButtonDiv>
                <S.Button onClick={()=>add()}>추가</S.Button>
                <S.Button>등록</S.Button>
            </S.ButtonDiv>
        </S.Body>
    )
}

export default Enlist
