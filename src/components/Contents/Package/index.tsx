import * as S from "./styles";
import { box } from "../../../assets/images";
import PackageContentProps from "./type";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PackageContent = ({ id, company, presentee, date }: PackageContentProps) => {
  
  const location = useLocation();
  const pathname = location.pathname;

  function packageClickEvent(){
    if(pathname === "list"){

    }
    else if (pathname === "accept"){

    }
  }

  return (
    <S.Package onClick={() => packageClickEvent()}>
      <S.Icon src={box} />
      <S.Instance>{company}</S.Instance>
      <S.Instance>{presentee}</S.Instance>
      <S.Instance>{date}</S.Instance>
    </S.Package>
  );
};

const List = ({lists} : {lists: PackageContentProps[]}): JSX.Element => {
  return(
    <>
      {lists.map(i => {
        return(
          <PackageContent id={i.id} company={i.company} presentee={i.presentee} date={i.date}/>
        )
      })}
    </>
  )
}

export default List;
