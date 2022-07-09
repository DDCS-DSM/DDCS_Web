import { useState } from "react";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common";
import Package from "../../components/Contents/Package";
import PackageContentProps from "../../components/Contents/Package/type";

const Log = () => {

    const [lists, setLists] = useState<PackageContentProps[]>([{
        id: 1,
        courierCompany: "string",
        name: "string",
        date: "string",
    }]);

    return(
        <>
        <Title>택배 내역</Title>
        <SchemaWrapper>
          <Schema>배송사</Schema>
          <Schema>수령자</Schema>
          <Schema>날짜</Schema>
        </SchemaWrapper>
        <Package lists={lists} admin={false}/>
        <Button>더보기</Button>
      </>
    )
}

export default Log