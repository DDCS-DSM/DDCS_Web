import * as S from './styles';
import { Title } from '../../styles/common';
import EnlistPackage from '../../components/Contents/EnlistPackage';
import EnlistPackageContentProps from '../../components/Contents/EnlistPackage/type';
import { useState } from 'react';
import axios from 'axios';

const Enlist = () => {

    const [list, setList] = useState<EnlistPackageContentProps>({couriercompany: "", phoneNumberRequestList: []});

    //택배 추가
    const addPackage = () => {
        const newList: EnlistPackageContentProps = list;
        newList.phoneNumberRequestList.push({phoneNumber: ""});
        setList(newList);
    }

    //택배 등록
    const enlistPackageList = () => {
        axios.post("/delivery", {
            couriercompany: "",
            phoneNumberRequestList: list.phoneNumberRequestList
        })
        .then(res => alert("등록 성공"))
        .catch(err => alert("등록에 실패했습니다."))
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
            <EnlistPackage list={list} setList={setList} />
            <S.ButtonDiv>
                <S.Button onClick={()=>addPackage()}>추가</S.Button>
                <S.Button onClick={()=>enlistPackageList()}>등록</S.Button>
            </S.ButtonDiv>
        </S.Body>
    )
}

export default Enlist
