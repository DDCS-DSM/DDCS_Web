import * as S from './styles'
import EnlistPackageContentProps from './type';

let checkRemove: Function;
let setInput: Function;

const ElistPackageContent = ({ phone, index } : {phone : EnlistPackageContentProps["phoneNumber"], index: number}) => {
  return(
        <S.Package>
          <span>{index+1}.</span>
          <input placeholder={"전화번호를 입력해주세요."} value={phone} onChange={e =>setInput(e.target.value, index)} onBlur={(e)=>checkRemove(e.target.value, index)}/>
        </S.Package>
    )
}

const List = ({ list, setList } : {list: EnlistPackageContentProps[], setList: React.Dispatch<React.SetStateAction<EnlistPackageContentProps[]>>}): JSX.Element => {

  //input 값이 비면 삭제
  checkRemove = (text: string, removeIndex: number) => {
    if(text === "") {
      let newList: EnlistPackageContentProps[] = list;
      newList = [];
      list.forEach((i: EnlistPackageContentProps, index: number)=>{
        if(index !== removeIndex){
          newList.push(i); 
        }
      })
      setList(newList);
    }
  }
  
  //전화번호 입력
  setInput = (text: string, index: number) => {
    let newList: EnlistPackageContentProps[] = list;
    newList[index].phoneNumber = text.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 11);
    setList([...newList]);
  }

  return(
    <>
    {list.map((i: EnlistPackageContentProps, index: number) => {
      return(
        <ElistPackageContent key={index} phone={i.phoneNumber} index={index}/>
      )
    })}
    </>
  )
}
  
export default List;