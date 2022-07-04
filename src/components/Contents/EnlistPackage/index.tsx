import * as S from './styles'
import EnlistPackageContentProps, {phoneNumberProps} from './type';

let remove: Function;
let setInput: Function;

const ElistPackageContent = ({ phone, index } : {phone : phoneNumberProps["phoneNumber"], index: number}) => {
  return(
        <S.Package>
          <input placeholder={'전화번호를 입력해주세요.'} value={phone} onChange={e =>setInput(e)}/>
          <S.Close onClick={()=>remove(index)}>✕</S.Close>
        </S.Package>
    )
}

const List = ({ list, setList } : {list: EnlistPackageContentProps, setList: React.Dispatch<React.SetStateAction<EnlistPackageContentProps>>}): JSX.Element => {

  remove = (removeIndex: number) => {
    let newList: EnlistPackageContentProps = list;
    newList.phoneNumberRequestList = [];
    list.phoneNumberRequestList.forEach((i: phoneNumberProps, index: number)=>{
      if(index !== removeIndex){
        newList.phoneNumberRequestList.push(i); 
      }
    })
    setList(newList);
    console.log(1);
  }

  setInput = (text: string, index: number) => {
    let newList: EnlistPackageContentProps = list;
    newList.phoneNumberRequestList[index].phoneNumber = text;
    setList(newList);
  }

  return(
    <>
    {list.phoneNumberRequestList.map((i: phoneNumberProps, index: number) => {
      return(
        <ElistPackageContent key={index} phone={i.phoneNumber} index={index}/>
      )
    })}
    </>
  )
}
  
export default List;