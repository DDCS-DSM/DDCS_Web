import * as S from './styles';
import { Title } from '../../styles/common';
import EnlistPackage from '../../components/Contents/EnlistPackage';
import EnlistPackageContentProps from '../../components/Contents/EnlistPackage/type';
import { useState } from 'react';
import axios from 'axios';

const Enlist = () => {

    const [lists, setLists] = useState<EnlistPackageContentProps[]>([{name: "1", phone: "1"}]);

    //택배 추가
    const addPackage = () => {
        const list = lists;
        list.push({name: "",  phone: ""});
        setLists([...list]);
    }

    //택배 등록
    const enlistPackageList = () => {
        axios.post("/delivery", {
            couriercompany: "",
        })
    }

    return(
        <S.Body>
            <Title>택배 등록</Title>
            <S.SchemaWrapper/>
            <S.Company>
                <option>회사를 선택해 주세요.</option>
                <option>우체국 택배</option>
                <option>CJ 대한통운</option>
                <option>한진택배</option>
                <option>롯대택배</option>
                <option>기타</option>
            </S.Company>
            <EnlistPackage lists={lists} setLists={setLists} />
            <S.ButtonDiv>
                <S.Button onClick={()=>addPackage()}>추가</S.Button>
                <S.Button onClick={()=>enlistPackageList()}>등록</S.Button>
            </S.ButtonDiv>
        </S.Body>
    )
}

export default Enlist
