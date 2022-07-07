import { useState } from "react";
import Package from "../../components/Contents/Package";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common"
import PackageContentProps from "../../components/Contents/Package/type";

const Accept = () => {

    const [lists, setLists] = useState<PackageContentProps[]>([{
        id: 1,
        courierCompany: "string",
        name: "string",
        date: "string",
    }]);

    return(
        <>
            <Title>택배 승인</Title>
            <SchemaWrapper>
              <Schema>배송사</Schema>
              <Schema>수령자</Schema>
              <Schema>날짜</Schema>
            </SchemaWrapper>
            <Package lists={lists}/>
            <Button>더보기</Button>
        </>
    )
}

export default Accept