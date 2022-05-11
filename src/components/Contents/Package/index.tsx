import * as S from "./styles";
import { box } from "../../../assets/images";
import PackageContentProps from "./type";

const PackageContent = ({ company, presentee, date }: PackageContentProps) => {
  return (
    <S.Package>
      <S.Icon src={box} />
      <S.Instance>{company}</S.Instance>
      <S.Instance>{presentee}</S.Instance>
      <S.Instance>{date}</S.Instance>
    </S.Package>
  );
};

const List = ({lists} : {lists: PackageContentProps[]}) => {
  const itemList = lists.map(i => {
    return(
      <PackageContent company={i.company} presentee={i.presentee} date={i.date}/>
    )
  })
  return itemList;
}

export default List;
