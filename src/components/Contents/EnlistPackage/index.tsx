import * as S from './styles'
import ElistPackageContentProps from "./type"

const ElistPackageContent = ({ recipient, phone, name}: ElistPackageContentProps) => {
    return(
        <S.Package>
        </S.Package>
    )
}

const List = ({lists} : {lists: ElistPackageContentProps[]}) => {
    const itemList = lists.map(i => {
      return(
        <ElistPackageContent recipient={i.recipient} phone={i.phone} name={i.name}/>
      )
    })
    return itemList;
  }
  
  export default List;