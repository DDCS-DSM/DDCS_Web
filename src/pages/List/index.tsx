//import axios from "axios";
import { useEffect } from "react";
import Package from "../../components/Contents/Package";
import { Title, SchemaWrapper, Schema, Button } from "../../styles/common";
import PackageContentProps from "../../components/Contents/Package/type";

const PackageList = () => {
  
  const lists : PackageContentProps[] = [];
  //const [lists, setLists] = useState<PackageContentProps[]>([{company: "asdasdas", presentee: "1", date: "1", id: 1}]);

  useEffect(()=>{
    /*
    axios.get("/")
      .then(res => setLists(res.data))
    */
  },[])

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
