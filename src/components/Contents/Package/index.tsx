import * as S from "./styles";
import { box, thinDel } from "../../../assets/images/icons";
import PackageContentProps from "./type";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import userProps from "../../../userProps";

let endRewrite: Function;
let deletePackage: Function;

const PackageContent = ({ id, courierCompany, name, date, admin }: PackageContentProps) => {

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [onReWrite, setOnReWrite] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(name);

  const location = useLocation();

  return (
    <S.Package>
      {!isMobile ?
        <S.Icon src={box} />
        :
        <></>
      }
      <S.InstanceDiv>
        <S.Instance>{courierCompany}</S.Instance>
        {location.pathname === "/list" ?
          <S.Instance>{name}</S.Instance>
          :
          <>
            {!onReWrite ?
              <S.Instance onClick={()=>setOnReWrite(true)}>{name}</S.Instance>
              :
              <S.InstanceInput value={newName} onChange={(e)=>setNewName(e.target.value)} onBlur={()=>setOnReWrite(false)}/>
            }
          </>
        }
        <S.Instance>{date}</S.Instance>
      </S.InstanceDiv>
      {!isMobile&&admin ?
        <S.Delete onClick={()=>deletePackage()}>
          <img src={thinDel}/>
        </S.Delete>
        :
        <></>
      }
    </S.Package>
  );
};
//onBlur={()=>endRewrite(id, setNewName, newName, name)}
const List = ({lists, admin} : {lists: PackageContentProps[], admin: userProps["admin"]}): JSX.Element => {

  endRewrite = (
    id: number, 
    setOnReWrite: React.Dispatch<React.SetStateAction<boolean>>,
    newName: string,
    name: string) => {

    setOnReWrite(false);

    if(newName !== name){
      axios.patch(`/delivery/${id}/${newName}`)
        .then(res => alert("변경완료."))
        .catch(err => alert(`에러. ${err.response.status}`))
    }
  }

  deletePackage = (id: number) => {
    axios.delete(`/delivery/${id}`)
      .then(res => alert("삭제되었습니다."))
      .catch(err => alert(`에러. ${err.response.status}`))
  }

  return(
    <S.List>
      {lists.length ?
        <>
          {lists.map(i => {
            return(
              <PackageContent key={i.id} id={i.id} courierCompany={i.courierCompany} name={i.name} date={i.date} admin={admin}/>
            )
          })}
        </>
      :
        <h2>택배가 없습니다.</h2>
      }
    </S.List>
  )
}

export default List;
