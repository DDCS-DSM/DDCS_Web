import axios from "axios";
import { useState, useEffect } from "react";
import Package from "../../components/Contents/Package";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common";
import PackageContentProps from "../../components/Contents/Package/type";

const PackageList = () => {
  
  const [lists, setLists] = useState<PackageContentProps[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(()=>{
    axios.get("/delivery")
      .then(res => setLists(res.data))
      .catch(err => {
        if(err.status === 401) {
          alert("로그인을 먼저 해주세요.");
          window.location.href = "/";
        }
      });
  },[])

  const loadNextPage = () => {
    axios.get("/delivery")
      .then()
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
      <Button>더보기</Button>
    </>
  );
};

export default PackageList;
