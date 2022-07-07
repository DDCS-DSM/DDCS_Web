import axios from "axios";
import { useState } from "react";
import Package from "../../components/Contents/Package";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common";
import PackageContentProps from "../../components/Contents/Package/type";

const PackageList = () => {
  
  const [lists, setLists] = useState<PackageContentProps[]>([{
    id: 1,
    courierCompany: "string",
    name: "string",
    date: "string",
  }]);
  const [page, setPage] = useState<number>(1);

  const loadNextPage = () => {
    axios.get("/delivery")
      .then(res => setLists(lists + res.data));
    setPage(page+1);
  }

  return (
    <>
      <Title>택배 목록</Title>
      <SchemaWrapper>
        <Schema>배송사</Schema>
        <Schema>수령자</Schema>
        <Schema>날짜</Schema>
      </SchemaWrapper>
      <Package lists={lists}/>
      <Button onClick={()=>loadNextPage()}>더보기</Button>
    </>
  );
};

export default PackageList;
