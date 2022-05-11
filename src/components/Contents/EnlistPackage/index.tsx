import * as S from './styles'
import ElistPackageContentProps from "./type"

const ElistPackageContent = ({ recipient, phone, name}: ElistPackageContentProps) => {
    return(
        <S.Package>
          <div>
            <input placeholder='수령자를 입력해주세요.'/>
            <select>

            </select>
          </div>
            <input  placeholder='상품명을 입력해주세요.'/>
        </S.Package>
    )
}

const List = ({lists} : {lists: ElistPackageContentProps[]}): JSX.Element => {
    return(
      <>
      {lists.map((i: ElistPackageContentProps) => {
        return(
          <ElistPackageContent recipient={i.recipient} phone={i.phone} name={i.name}/>
        )
      })}
      </>
    )
  }
  
  export default List;