import * as S from './styles'
import EnlistPackageContentProps from './type';
import ElistPackageContentProps from "./type"

let remove: Function;
let setInput: Function;

const ElistPackageContent = ({ name, phone, index } : {name: ElistPackageContentProps["name"] , phone : ElistPackageContentProps["phone"], index: number}) => {
  return(
        <S.Package>
          <input placeholder={'전화번호를 입력해주세요.' + index} value={phone} onChange={(e)=>setInput(e.target.value, index)}/>
          <S.Close onClick={()=>remove(index)}>✕</S.Close>
        </S.Package>
    )
}

const List = ({ lists, setLists } : {lists: ElistPackageContentProps[], setLists: Function}): JSX.Element => {

  remove = (removeIndex: number) => {
    console.log("r" + removeIndex);
    let newLists: EnlistPackageContentProps[] = [];
    lists.forEach((i: ElistPackageContentProps, index: number)=>{
      if(index !== removeIndex){
        newLists.push(i); 
        console.log(index);
      }
    })
    setLists(newLists);
  }

  setInput = (text: string, index: number) => {
    let newLists: EnlistPackageContentProps[] = [...lists];
    newLists[index].phone = text;
    setLists(newLists);
  }

  return(
    <>
    {lists.map((i: ElistPackageContentProps, index: number) => {
      return(
        <ElistPackageContent phone={i.phone} name={i.name} index={index}/>
      )
    })}
    </>
  )
}
  
export default List;