import * as S from "./styles";
import { box } from "../../../assets/images";
import PackageContentProps from "./type";
import { useState } from "react";
import axios from "axios";

let endRewrite: Function;

const PackageContent = ({ id, courierCompany, name, date }: PackageContentProps) => {

  const [onReWrite, setOnReWrite] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(name);

  return (
    <S.Package>
      <S.Icon src={box} />
      <S.Instance>{courierCompany}</S.Instance>
      {!onReWrite ?
        <S.Instance onClick={()=>setOnReWrite(true)}>{name}</S.Instance>
        :
        <S.InstanceInput value={newName} onChange={(e)=>setNewName(e.target.value)} onBlur={()=>endRewrite(id, setNewName, newName, name)}/>
      }
      <S.Instance>{date}</S.Instance>
    </S.Package>
  );
};

const List = ({lists} : {lists: PackageContentProps[]}): JSX.Element => {

  endRewrite = (
    id: number, 
    setOnReWrite: React.Dispatch<React.SetStateAction<boolean>>,
    newName: string,
    name: string) => {

    setOnReWrite(false);

    if(newName !== name){
      axios.post(`/delivery/${id}/${newName}`)
        .then(res => alert("변경완료."))
        .catch(err => alert(`에러. ${err.response.status}`))
    }
  }

  return(
    <S.List>
      {lists.length ?
        <>
          {lists.map(i => {
            return(
              <PackageContent key={i.id} id={i.id} courierCompany={i.courierCompany} name={i.name} date={i.date}/>
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
