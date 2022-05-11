import { useState } from "react";
import PackageContent from "../../components/Contents/Package";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common"
import PackageContentProps from "../../components/Contents/Package/type";

const Accept = () => {

    const [lists, setLists] = useState<PackageContentProps[]>([]);

    return(
        <>
            <Title>택배 목록</Title>
            <SchemaWrapper>
              <Schema>배송사</Schema>
              <Schema>수령자</Schema>
              <Schema>날짜</Schema>
            </SchemaWrapper>
            <Button>더보기</Button>
        </>
    )
}

export default Accept