import * as S from './styles'
import EnlistPackageContentProps, {PackageProps} from './type';

let remove: Function;
let setInput: Function;

const ElistPackageContent = ({ name, phone, index } : {name: PackageProps["name"] , phone : PackageProps["phone"], index: number}) => {
  return(
        <S.Package>
          <input placeholder={'전화번호를 입력해주세요.'} value={phone} onChange={(e)=>setInput(e.target.value, index)}/>
          <S.Close onClick={()=>remove(index)}>✕</S.Close>
        </S.Package>
    )
}

const List = ({ list, setList } : {list: EnlistPackageContentProps, setList: React.Dispatch<React.SetStateAction<EnlistPackageContentProps>>}): JSX.Element => {

  remove = (removeIndex: number) => {
    console.log("r" + removeIndex);
    let newList: EnlistPackageContentProps = list;
    list.package.forEach((i: PackageProps, index: number)=>{
      if(index !== removeIndex){
        newList.package.push(i); 
        console.log(index);
      }
    })
    setList(newList);
  }

  setInput = (text: string, index: number) => {
    let newList: EnlistPackageContentProps = list;
    newList.package[index].phone = text;
    setList(newList);
  }

  return(
    <>
    {list.package.map((i: PackageProps, index: number) => {
      return(
        <ElistPackageContent phone={i.phone} name={i.name} index={index}/>
      )
    })}
    </>
  )
}
  
export default List;