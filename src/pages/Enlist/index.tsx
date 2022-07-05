import * as S from './styles';
import { Title } from '../../styles/common';
import EnlistPackage from '../../components/Contents/EnlistPackage';
import EnlistPackageContentProps from '../../components/Contents/EnlistPackage/type';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Enlist = () => {

    const [list, setList] = useState<EnlistPackageContentProps[]>([]);
    
    const selectRef = useRef<HTMLSelectElement>(null);

    //택배 추가
    const addPackage = () => {
        const newList: EnlistPackageContentProps[] = list;
        newList.push({phoneNumber: ""});
        setList([...newList]);
    }

    const navigate = useNavigate();

    //택배 등록
    const enlistPackageList = () => {
        if(selectRef.current?.innerText !== "회사를 선택해 주세요."){
            axios.post("/delivery", {
                couriercompany: selectRef.current?.innerText,
                phoneNumberRequestList: list
            })
            .then(res => alert("등록 성공"))
            .catch(err => {
                if(err.status === 401){
                    alert("로그인을 먼저 해주세요.");
                    navigate("/");
                }
                else {
                    alert(`등록에 실패했습니다. ${err.status}`);
                }
            })
        }
        else{
            alert("회사를 입력해주세요.");
        }
    }

    return(
        <S.Body>
            <Title>택배 등록</Title>
            <S.SchemaWrapper/>
            <S.Company ref={selectRef}>
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
